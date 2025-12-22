import fs from "fs";
import path from "path";
import dotenv from "dotenv";
const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
import crypto from "crypto";
import { resumePrompt } from "./utils/prompts.js";
import type { ParsedResume } from "./types/resume.js";
import resumeData from "./resumeData.js";

dotenv.config();

// ---------------------SET_UP API KEYS--------------------- //
// Helper to safely read env vars
const getEnv = (key: string): string | undefined => {
  return process.env[key];
};

// OpenRouter API Key
const OPENROUTER_API_KEY = getEnv("OPENROUTER_API_KEY");

const HF_TOKEN = getEnv("HF_TOKEN");

// OpenRouter token check
if (OPENROUTER_API_KEY) {
  console.log("✓ OpenRouter API key found");
} else {
  throw new Error("OPENROUTER_API_KEY is not set");
}

// HF token check
if (HF_TOKEN) {
  console.log("✓ Hugging Face token found");
} else {
  console.warn("⚠ HF_TOKEN not found in environment");
}

// ---------------------Upload Resume Function---------------------//
export function uploadResumesFromDir(
  resumeDir: string
): Array<{ actualPath: string; originalName: string }> {
  if (!fs.existsSync(resumeDir)) {
    throw new Error(`Directory not found: ${resumeDir}`);
  }

  const files = fs.readdirSync(resumeDir);
  const resumeFilePaths: Array<{ actualPath: string; originalName: string }> =
    [];

  console.log("Scanning resume directory...\n");

  for (const fileName of files) {
    const fullPath = path.join(resumeDir, fileName);

    if (
      fs.statSync(fullPath).isFile() &&
      fileName.toLowerCase().endsWith(".pdf")
    ) {
      const fileSize = fs.statSync(fullPath).size;

      resumeFilePaths.push({
        actualPath: fullPath,
        originalName: fileName,
      });

      console.log(`✓ Resume file found: ${fileName}`);
      console.log(`  - File size: ${fileSize} bytes`);
    }
  }

  if (resumeFilePaths.length === 0) {
    throw new Error("No resume PDFs found");
  }

  console.log(`\n✓ Total files loaded: ${resumeFilePaths.length}`);
  return resumeFilePaths;
}

//-------------------Parsing Pdf Resume Function-------------------//
export async function parsePdf(resumeFilePath: string): Promise<string> {
  console.log("\n" + "=".repeat(60));
  console.log("STEP 1: PARSE PDF");
  console.log("=".repeat(60) + "\n");

  try {
    const data = new Uint8Array(fs.readFileSync(resumeFilePath));
    const pdf = await pdfjsLib.getDocument({ data }).promise;

    let resumeText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();

      const pageText = textContent.items.map((item: any) => item.str).join(" ");

      resumeText += pageText + "\n";
    }

    return resumeText;
  } catch (err) {
    console.error("✗ Error parsing PDF:", err);
    throw err;
  }
}

//----------------Extract and generate metadata from resume-------------------------

export function extractMetadata(
  resumeText: string,
  fileName: string
): {
  fileName: string;
  fileHash: string;
  parsedAt: string;
  parserVersion: string;
  Language: string;
} {
  console.log("\n" + "=".repeat(60));
  console.log("STEP 2: EXTRACT METADATA");
  console.log("=".repeat(60) + "\n");

  function generateHashValue(text: string): string {
    // Normalize text (matches Python behavior)
    let normalized = text.trim().toLowerCase();

    normalized = normalized.replace(/\r\n/g, "\n");
    normalized = normalized.replace(/\b(page|pages)\s+\d+\b/g, "");
    normalized = normalized.replace(/[^\w\s]/g, " ");
    normalized = normalized.replace(/\s+/g, " ").trim();

    return crypto.createHash("sha256").update(normalized, "utf8").digest("hex");
  }

  const fileHash = generateHashValue(resumeText);

  const metadata = {
    fileName,
    fileHash,
    parsedAt: new Date().toISOString(), // UTC + Z
    parserVersion: "1.0.0",
    Language: "en",
  };

  console.log("Metadata extracted:");
  console.log(JSON.stringify(metadata, null, 2));

  return metadata;
}

// ---------------------LLM Extraction: Parsing Resume----------------------//
export async function extractResumeWithLLM(
  resumeText: string
): Promise<ParsedResume> {
  console.log("\n" + "=".repeat(60));
  console.log("STEP 3: LLM EXTRACTION - PARSING RESUME");
  console.log("=".repeat(60) + "\n");

  let resumeParsingPrompt = resumePrompt;

  resumeParsingPrompt += "\n===START===\n" + resumeText + "\n===END===";

  console.log("Sending resume text to Gemini API for parsing...");
  console.log(`Prompt size: ${resumeParsingPrompt.length} characters\n`);

  return generateWithApiKeyFallback(resumeParsingPrompt);
}

async function callOpenRouter(
  prompt: string,
  model: string = "google/gemini-2.0-flash-exp:free"
): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  const json = (await res.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const text = json.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("No text content in OpenRouter response");
  }

  return text;
}

async function generateWithApiKeyFallback(
  prompt: string
): Promise<ParsedResume> {
  let lastError: unknown = null;

  // Model options from OpenRouter (free and paid)
  const models = [
    "google/gemini-2.0-flash-exp:free",
    "google/gemini-1.5-flash-exp:free",
    "google/gemini-1.5-pro",
  ];

  for (const model of models) {
    try {
      const responseText = await callOpenRouter(prompt, model);

      if (!responseText) {
        throw new Error("Empty response from OpenRouter");
      }

      const parsed = JSON.parse(responseText) as ParsedResume;

      return parsed;
    } catch (err: any) {
      lastError = err;

      const message = String(err?.message ?? err);

      const isRateLimit =
        message.includes("429") ||
        message.toLowerCase().includes("rate") ||
        message.toLowerCase().includes("quota") ||
        message.toLowerCase().includes("resource exhausted");

      const isModelNotAvailable =
        message.includes("not found") ||
        message.includes("not available") ||
        message.includes("INVALID_ARGUMENT");

      if (err instanceof SyntaxError) {
        console.error(`✗ JSON parsing failed with model ${model}`);
        throw err;
      }

      if (isModelNotAvailable) {
        continue;
      }

      if (!isRateLimit) {
        throw err;
      }
    }
  }

  throw new Error(
    "All OpenRouter models exhausted. Last error: " + String(lastError)
  );
}

// ---------------------Add neta data to parsed resume ----------------------//
export function addMetadataToResume(
  parsedResume: ParsedResume,
  metadata: {
    fileName: string;
    fileHash: string;
    parsedAt: string;
    parserVersion: string;
    Language: string;
  }
): ParsedResume {
  parsedResume.metaData = metadata;
  return parsedResume;
}

// ---------------------Generate Embedding for Different text fields----------------------//
const API_URL =
  "https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction";
if (!HF_TOKEN) {
  throw new Error("HF_TOKEN is not set");
}
type Embedding = number[];

async function embedTexts(texts: string[]): Promise<Embedding[]> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: texts }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`HF API error ${response.status}: ${err}`);
  }

  return (await response.json()) as Embedding[];
}

export async function generateEmbeddingsForResume(
  parsedResume: ParsedResume
): Promise<ParsedResume> {
  // Step 1: Collect all texts with their metadata for proper tracking
  interface TextItem {
    text: string;
    type:
      | "summary"
      | "workDescription"
      | "responsibility"
      | "projectDescription";
    expIndex?: number;
    respIndex?: number;
    projIndex?: number;
  }

  const textItems: TextItem[] = [];

  // Collect basics summary
  if (parsedResume.basics.summary) {
    textItems.push({
      text: parsedResume.basics.summary,
      type: "summary",
    });
  }

  // Collect work experience descriptions and responsibilities
  parsedResume.workExperience.forEach((exp, expIndex) => {
    if (exp.description) {
      textItems.push({
        text: exp.description,
        type: "workDescription",
        expIndex,
      });
    }
    if (exp.responsibilities && exp.responsibilities.length > 0) {
      exp.responsibilities.forEach((resp, respIndex) => {
        textItems.push({
          text: resp,
          type: "responsibility",
          expIndex,
          respIndex,
        });
      });
    }
  });

  // Collect project descriptions
  parsedResume.projects.forEach((proj, projIndex) => {
    if (proj.description) {
      textItems.push({
        text: proj.description,
        type: "projectDescription",
        projIndex,
      });
    }
  });

  // Step 2: Generate embeddings for all texts at once
  if (textItems.length === 0) {
    return parsedResume;
  }

  const texts = textItems.map((item) => item.text);
  const embeddings = await embedTexts(texts);

  // Step 3: Map embeddings back to their original locations
  textItems.forEach((item, idx) => {
    const embedding = embeddings[idx] ?? null;

    switch (item.type) {
      case "summary":
        parsedResume.basics.summaryEmbedding = embedding;
        break;

      case "workDescription":
        if (item.expIndex !== undefined) {
          const exp = parsedResume.workExperience[item.expIndex];
          if (exp) {
            exp.descriptionEmbedding = embedding;
          }
        }
        break;

      case "responsibility":
        if (item.expIndex !== undefined && item.respIndex !== undefined) {
          const exp = parsedResume.workExperience[item.expIndex];
          if (exp) {
            if (!exp.responsibilitiesEmbeddings) {
              exp.responsibilitiesEmbeddings = [];
            }
            // Ensure the array has enough slots
            const embArray = exp.responsibilitiesEmbeddings as number[][];
            embArray[item.respIndex] = embedding!;
          }
        }
        break;

      case "projectDescription":
        if (item.projIndex !== undefined) {
          const proj = parsedResume.projects[item.projIndex];
          if (proj) {
            proj.descriptionEmbedding = embedding;
          }
        }
        break;
    }
  });

  return parsedResume;
}

// ---------------------Display and Export the Results----------------------//
export function displayAndExportParsedResume(
  parsedResume: unknown,
  fileHash: string
): string {
  const EXPORT_DIR = "./resumes/parsed";

  if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
  }

  const outputFile = path.join(EXPORT_DIR, `${fileHash}.json`);

  if (!fs.existsSync(outputFile)) {
    fs.writeFileSync(outputFile, JSON.stringify(parsedResume, null, 2), {
      encoding: "utf-8",
    });
  }

  return outputFile;
}

async function main() {
  try {
    const resumeFiles = uploadResumesFromDir("./resumes/resumes");

    for (const file of resumeFiles.slice(0, 10)) {
      console.log(`Processing: ${file.originalName}`);

      try {
        const resumeText = await parsePdf(file.actualPath);

        // STEP 2: Extract metadata
        const metadata = extractMetadata(resumeText, file.originalName);

        // STEP 3: Extract resume with LLM
        const resumeDataId = metadata.fileName.split(".")[0];
        if (!resumeDataId) {
          continue;
        }
        let parsedResume = resumeData[resumeDataId];
        if (!parsedResume) {
          continue;
        }

        // STEP 4: Add metadata to parsed resume
        parsedResume = addMetadataToResume(parsedResume, metadata);

        // STEP 5: Generate embeddings for text fields
        parsedResume = await generateEmbeddingsForResume(parsedResume);

        // STEP 6: Display and export parsed resume
        displayAndExportParsedResume(parsedResume, metadata.fileHash);

        console.log(`✓ COMPLETED: ${file.originalName}`);
      } catch (fileError) {
        console.error(`✗ Error: ${fileError}`);
      }
    }

    console.log("✓ PIPELINE COMPLETED");
  } catch (err) {
    console.error("✗ Fatal error:", err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("✗ Error:", err);
  process.exit(1);
});
