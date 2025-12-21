import fs from "fs";
import path from "path";
import dotenv from "dotenv";
const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
import crypto from "crypto";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { resumePrompt } from "./utils/prompts.js";
import type { ParsedResume } from "./types/resume.js";

dotenv.config();

// ---------------------SET_UP API KEYS--------------------- //
// Helper to safely read env vars
const getEnv = (key: string): string | undefined => {
  return process.env[key];
};

// Using multiple api keys to distribute load
const GEMINI_API_KEY1 = getEnv("GEMINI_API_KEY_2023001106");
const GEMINI_API_KEY2 = getEnv("GEMINI_API_KEY_seikouuber");
const GEMINI_API_KEY3 = getEnv("GEMINI_API_KEY_safalbhandari069");
const GEMINI_API_KEY4 = getEnv("GEMINI_API_KEY_safalbhandari212");
const GEMINI_API_KEY5 = getEnv("GEMINI_API_KEY_safalbhandari0001");
const GEMINI_API_KEY6 = getEnv("GEMINI_API_KEY_bhandarisafal0001");

const HF_TOKEN = getEnv("HF_TOKEN");

const API_KEYS: Array<string | undefined> = [
  GEMINI_API_KEY1,
  GEMINI_API_KEY2,
  GEMINI_API_KEY3,
  GEMINI_API_KEY4,
  GEMINI_API_KEY5,
  GEMINI_API_KEY6,
];

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

async function generateWithApiKeyFallback(
  prompt: string
): Promise<ParsedResume> {
  let lastError: unknown = null;

  for (let i = 0; i < API_KEYS.length; i++) {
    const apiKey = API_KEYS[i];

    if (!apiKey) {
      console.warn(`⚠ API key #${i + 1} is not configured`);
      continue;
    }

    try {
      console.log(`→ Trying Gemini API key #${i + 1}`);

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();

      if (!responseText) {
        throw new Error("Empty response from Gemini");
      }

      const parsed = JSON.parse(responseText) as ParsedResume;

      console.log(`✓ Success using API key #${i + 1}`);
      console.log(`Resume ID: ${parsed?.id ?? "unknown"}`);

      return parsed;
    } catch (err: any) {
      lastError = err;

      const message = String(err?.message ?? err);

      const isRateLimit =
        message.includes("429") ||
        message.toLowerCase().includes("rate") ||
        message.toLowerCase().includes("quota") ||
        message.toLowerCase().includes("resource exhausted");

      if (err instanceof SyntaxError) {
        console.error(` JSON parsing failed with API key #${i + 1}`);
        throw err;
      }

      console.warn(`✗ API key #${i + 1} failed: ${message}`);

      if (!isRateLimit) {
        throw err;
      }
    }
  }

  throw new Error("All Gemini API keys exhausted");
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

  console.log("✓ Metadata added to parsed resume");
  console.log("\nMetadata in resume:");
  console.log(JSON.stringify(parsedResume.metaData, null, 2));

  return parsedResume;
}

async function main() {
  // console.log(API_KEYS);
  const files = uploadResumesFromDir("./resumes/resumes");
  for (const file of files.slice(0, 2)) {
    const text = await parsePdf(file.actualPath);
    const metadata = extractMetadata(text, file.originalName);
    console.log("\n" + "-".repeat(40));
    console.log(metadata);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
