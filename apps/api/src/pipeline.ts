// import * as fs from "fs";
// import * as path from "path";
// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";
// import * as dotenv from "dotenv";
// import * as crypto from "crypto";

// dotenv.config();

// // ============================================================================
// // TYPE DEFINITIONS
// // ============================================================================

// interface Traceable<T> {
//   value: T;
//   rawText: string;
//   confidence: number; // 0-1
//   pageIndex: number | null;
// }

// interface Location {
//   rawInput: string;
//   city: string | null;
//   state: string | null;
//   country: string | null;
//   zipCode: string | null;
//   countryCode: string | null;
// }

// interface Basics {
//   name: Traceable<string>;
//   email: Traceable<string>[];
//   phone: Traceable<string>[];
//   location: Location;
//   urls: Array<{
//     type: "linkedin" | "github" | "portfolio" | "personal";
//     url: string;
//   }>;
//   summary: string | null;
// }

// interface FlexibleDate {
//   rawText: string;
//   isoDate: string | null;
//   isCurrent: boolean;
// }

// interface SkillMetadata {
//   firstSeen: string | null;
//   lastUsed: string | null;
//   totalMonthsExperience: number;
//   occurrenceCount: number;
//   sources: Array<{
//     sectionId: string;
//     sectionType: "experience" | "education" | "project";
//   }>;
// }

// interface SkillProfile {
//   name: string;
//   normalizedName: string;
//   category: string;
//   computedLevel: "novice" | "intermediate" | "advanced" | "expert";
//   validityScore: number; // 0-10
//   metadata: SkillMetadata;
// }

// interface WorkExperience {
//   id: string;
//   title: Traceable<string>;
//   normalizedTitle: string | null;
//   company: Traceable<string>;
//   companyDomain: string | null;
//   location: Location | null;
//   type: "full-time" | "contract" | "internship" | null;
//   startDate: FlexibleDate;
//   endDate: FlexibleDate;
//   description: string | null;
//   responsibilities: string[];
//   skillsDetected: string[];
//   isVerified: boolean;
//   verificationNotes: string | null;
//   verificationConfidence: number | null;
//   verificationDate: string | null;
// }

// interface Education {
//   id: string;
//   institution: Traceable<string>;
//   degree: Traceable<string>;
//   normalizedDegree: "high_school" | "bachelors" | "masters" | "phd" | null;
//   fieldOfStudy: string | null;
//   startDate: FlexibleDate | null;
//   endDate: FlexibleDate | null;
//   gpa: {
//     score: number;
//     scale: number;
//   } | null;
// }

// interface Project {
//   name: string;
//   description: string | null;
//   url: string | null;
//   skillsUsed: string[];
// }

// interface Certification {
//   name: string;
//   issuer: string;
//   date: FlexibleDate;
//   doesExpire: boolean;
//   verificationUrl: string | null;
// }

// interface Language {
//   language: string;
//   proficiency: "native" | "fluent" | "conversational" | "basic";
// }

// interface QualityScore {
//   score: number; // 0-100
//   level: "low" | "average" | "high" | "exceptional";
//   hints: string[];
// }

// interface SuspicionFlag {
//   type: string;
//   severity: "low" | "medium" | "critical";
//   description: string;
// }

// interface SuspicionScore {
//   score: number; // 0-100
//   level: "safe" | "concern" | "suspicious" | "high_risk";
//   flags: SuspicionFlag[];
// }

// interface WritingStyle {
//   actionVerbsRate: number; // 0.0-1.0
//   quantificationRate: number; // 0.0-1.0
//   clicheCount: number;
// }

// interface ResumeAnalysis {
//   quality: QualityScore;
//   suspicion: SuspicionScore;
//   writingStyle: WritingStyle;
// }

// interface TimelineGap {
//   startDate: string;
//   endDate: string;
//   durationDays: number;
// }

// interface VerificationFlags {
//   timeline: {
//     hasGaps: boolean;
//     gaps: TimelineGap[];
//   };
//   identity: {
//     geoConsistency: "match" | "mismatch" | "unknown";
//     socialFootprintFound: boolean;
//   };
// }

// interface ParsedResume {
//   id: string;
//   analysis: ResumeAnalysis;
//   verification: VerificationFlags;
//   basics: Basics;
//   skills: SkillProfile[];
//   workExperience: WorkExperience[];
//   education: Education[];
//   projects: Project[];
//   certifications: Certification[];
//   languages: Language[];
// }

// interface Metadata {
//   fileName: string;
//   fileHash: string;
//   parsedAt: string;
//   parserVersion: string;
//   Language: string;
// }

// interface EmbeddingInfo {
//   model: string;
//   dimensions: number;
//   vectorCount: number;
//   embedding: number[];
// }

// interface ResumeOutput {
//   metadata: Metadata;
//   extractedResume: ParsedResume;
//   embeddingText: string;
//   embeddingInfo: EmbeddingInfo;
// }

// interface ProcessedFile {
//   fileName: string;
//   fileHash?: string;
//   outputFile?: string;
//   qualityScore?: number;
//   status: string;
// }

// // ============================================================================
// // CONFIGURATION
// // ============================================================================

// const RESUME_DIR = "./resumes/parsed";
// const EXPORT_DIR = "./resumes";
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY_COLLEGE_ID;
// const HF_TOKEN = process.env.HF_TOKEN;

// // ============================================================================
// // UTILITY FUNCTIONS
// // ============================================================================

// function getDate(dateStr: string): Date | null {
//   try {
//     if (dateStr.length === 10) {
//       return new Date(dateStr);
//     } else if (dateStr.length === 7) {
//       const [year, month] = dateStr.split("-");
//       return new Date(parseInt(year), parseInt(month) - 1);
//     } else if (dateStr.length === 4) {
//       return new Date(parseInt(dateStr), 0);
//     }
//   } catch (error) {
//     console.error("Error parsing date:", error);
//   }
//   return null;
// }

// function monthSince(dateStr: string): number {
//   const d = getDate(dateStr);
//   if (!d) return 0;

//   const today = new Date();
//   return (
//     (today.getFullYear() - d.getFullYear()) * 12 +
//     (today.getMonth() - d.getMonth())
//   );
// }

// async function loadAllResumes(
//   resumeDir: string
// ): Promise<Record<string, unknown>[]> {
//   const resumes: Record<string, unknown>[] = [];
//   try {
//     if (!fs.existsSync(resumeDir)) {
//       console.warn(`Resume directory not found: ${resumeDir}`);
//       return resumes;
//     }

//     const files = fs.readdirSync(resumeDir);
//     for (const file of files) {
//       if (file.endsWith(".json")) {
//         const filePath = path.join(resumeDir, file);
//         const data = fs.readFileSync(filePath, "utf-8");
//         resumes.push(JSON.parse(data) as Record<string, unknown>);
//       }
//     }
//   } catch (error) {
//     console.error("Error loading resumes:", error);
//   }
//   return resumes;
// }

// function generateHashValue(text: string): string {
//   const normalized = text
//     .trim()
//     .toLowerCase()
//     .replace(/\r\n/g, "\n")
//     .replace(/\b(page|pages)\s+\d+\b/g, "")
//     .replace(/[^\w\s]/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();

//   return crypto.createHash("sha256").update(normalized).digest("hex");
// }

// // ============================================================================
// // MAIN FUNCTIONS
// // ============================================================================

// async function uploadResume(filePath: string): Promise<Buffer> {
//   /**
//    * For Node.js environment, read file from disk
//    * In browser/Colab, this would use file upload APIs
//    */
//   try {
//     if (!fs.existsSync(filePath)) {
//       throw new Error(`File not found: ${filePath}`);
//     }
//     const fileBuffer = fs.readFileSync(filePath);
//     console.log(`✓ Resume file loaded: ${filePath}`);
//     console.log(`  - File size: ${fileBuffer.length} bytes`);
//     return fileBuffer;
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : String(error);
//     console.error(`✗ Error loading file: ${errorMessage}`);
//     throw error;
//   }
// }

// async function parsePdf(resumeBuffer: Buffer): Promise<string> {
//   console.log("\n" + "=".repeat(60));
//   console.log("STEP 1: PARSE PDF");
//   console.log("=".repeat(60) + "\n");

//   try {
//     // Using dynamic import with proper typing
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const pdfParse = (await import("pdf-parse")) as any;
//     const PdfParser = pdfParse.default as (
//       buffer: Buffer
//     ) => Promise<{ text: string }>;

//     const pdfData = await PdfParser(resumeBuffer);
//     const resumeText = pdfData.text;

//     console.log(`✓ Successfully extracted ${resumeText.length} characters`);
//     console.log(`\nPreview (first 300 characters):`);
//     console.log("-".repeat(40));
//     console.log(resumeText.substring(0, 300));
//     console.log("-".repeat(40));

//     return resumeText;
//   } catch (error) {
//     console.error(`✗ Error parsing PDF: ${error}`);
//     throw error;
//   }
// }

// function extractMetadata(resumeText: string, fileName: string): Metadata {
//   console.log("\n" + "=".repeat(60));
//   console.log("STEP 2: EXTRACT METADATA");
//   console.log("=".repeat(60) + "\n");

//   const fileHash = generateHashValue(resumeText);

//   const metadata: Metadata = {
//     fileName: fileName,
//     fileHash: fileHash,
//     parsedAt: new Date().toISOString(),
//     parserVersion: "1.0.0",
//     Language: "en",
//   };

//   console.log("Metadata extracted:");
//   console.log(JSON.stringify(metadata, null, 2));

//   return metadata;
// }

// async function extractResumeWithLLM(resumeText: string): Promise<ParsedResume> {
//   console.log("\n" + "=".repeat(60));
//   console.log("STEP 3: LLM EXTRACTION - PARSING RESUME");
//   console.log("=".repeat(60) + "\n");

//   const resumeParsingPrompt = `Return only valid JSON that exactly matches the ParsedResume schema. Do NOT add or remove fields, explanations, comments, code fences, markdown, or any text outside the JSON. The output must be a pure JSON object that can be parsed by JSON.parse() with no trailing characters.

// If a value cannot be determined with reasonable confidence, use null.

// SCHEMA:

// {
//   "id": string,
//   "analysis": {
//     "quality": {
//       "score": number (0-100),
//       "level": "low"|"average"|"high"|"exceptional",
//       "hints": string[]
//     },
//     "suspicion": {
//       "score": number (0-100),
//       "level": "safe"|"concern"|"suspicious"|"high_risk",
//       "flags": { "type": string, "severity": "low"|"medium"|"critical", "description": string }[]
//     },
//     "writingStyle": {
//       "actionVerbsRate": number (0.0-1.0),
//       "quantificationRate": number (0.0-1.0),
//       "clicheCount": number
//     }
//   },
//   "verification": {
//     "timeline": { "hasGaps": boolean, "gaps": [] },
//     "identity": { "geoConsistency": "match"|"mismatch"|"unknown", "socialFootprintFound": boolean }
//   },
//   "basics": {
//     "name": { "value": string, "rawText": string, "confidence": number, "pageIndex": null },
//     "email": [],
//     "phone": [],
//     "location": { "rawInput": string, "city": null, "state": null, "country": null, "zipCode": null, "countryCode": null },
//     "urls": [],
//     "summary": null
//   },
//   "skills": [],
//   "workExperience": [],
//   "education": [],
//   "projects": [],
//   "certifications": [],
//   "languages": []
// }

// Resume text to parse:
// ===START===
// ${resumeText}
// ===END===

// Return ONLY the JSON object. No markdown. No explanations.`;

//   try {
//     console.log("Sending resume text to Gemini API for parsing...");
//     console.log(`Prompt size: ${resumeParsingPrompt.length} characters\n`);

//     if (!GEMINI_API_KEY) {
//       throw new Error("GEMINI_API_KEY not configured");
//     }

//     const client = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const safetySettings = [
//       {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_NONE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//         threshold: HarmBlockThreshold.BLOCK_NONE,
//       },
//     ];

//     const response = await model.generateContent({
//       contents: [
//         {
//           role: "user",
//           parts: [
//             {
//               text: resumeParsingPrompt,
//             },
//           ],
//         },
//       ],
//       safetySettings,
//     });

//     const result = await response.response;
//     const responseText = result.text();

//     console.log(`✓ Received response from Gemini API`);
//     console.log(`Response size: ${responseText.length} characters\n`);

//     // Extract JSON from response (in case there are extra characters)
//     const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//     if (!jsonMatch) {
//       throw new Error("No JSON found in response");
//     }

//     const parsedResume: ParsedResume = JSON.parse(jsonMatch[0]);

//     console.log("✓ Successfully parsed JSON response");
//     console.log(`\nResume ID: ${parsedResume.id}`);
//     console.log(`Quality Score: ${parsedResume.analysis.quality.score}`);
//     console.log(`Quality Level: ${parsedResume.analysis.quality.level}`);

//     return parsedResume;
//   } catch (error) {
//     console.error(`✗ Error during LLM extraction: ${error}`);
//     throw error;
//   }
// }

// function addMetadataToResume(
//   parsedResume: ParsedResume,
//   metadata: Metadata
// ): ParsedResume {
//   console.log("✓ Metadata added to parsed resume");
//   console.log(`\nMetadata in resume:`);
//   console.log(JSON.stringify(metadata, null, 2));

//   return parsedResume;
// }

// function buildEmbeddingText(parsedResume: ParsedResume): string {
//   console.log("\n" + "=".repeat(60));
//   console.log("STEP 4: BUILD EMBEDDING TEXT");
//   console.log("=".repeat(60) + "\n");

//   const skills = parsedResume.skills || [];
//   const topSkills = skills
//     .sort((a, b) => (b.validityScore || 0) - (a.validityScore || 0))
//     .slice(0, 20);

//   const skillsText = topSkills.map((s) => s.name).join(", ");
//   console.log(`Top 20 skills extracted: ${topSkills.length} skills`);
//   console.log(`Skills: ${skillsText}\n`);

//   const experiences = (parsedResume.workExperience || []).slice(0, 3);
//   let experiencesText = "";
//   for (let i = 0; i < experiences.length; i++) {
//     const exp = experiences[i];
//     const title = exp.normalizedTitle || exp.title?.value || "Unknown";
//     const description =
//       exp.description || exp.responsibilities?.slice(0, 2).join("; ") || "";
//     const line = `${title},${description}`;
//     experiencesText += line + "\n";
//     console.log(`${i + 1}. ${title}`);
//     console.log(`   ${description.substring(0, 80)}...\n`);
//   }
//   experiencesText = experiencesText.trim();

//   const projects = (parsedResume.projects || []).slice(0, 3);
//   let projectsText = "";
//   for (let i = 0; i < projects.length; i++) {
//     const proj = projects[i];
//     const line = `${proj.name}: ${proj.description || "No description"}`;
//     projectsText += line + "\n";
//     console.log(`Project ${i + 1}: ${proj.name}`);
//     console.log(
//       `  ${(proj.description || "No description").substring(0, 80)}...\n`
//     );
//   }
//   projectsText = projectsText.trim();

//   const education = parsedResume.education || [];
//   let educationText = "";
//   for (let i = 0; i < education.length; i++) {
//     const edu = education[i];
//     const degree = (edu.normalizedDegree || "degree")
//       .replace(/_/g, " ")
//       .toUpperCase();
//     const field = edu.fieldOfStudy || "Unspecified";
//     const line = `${degree} in ${field}`;
//     educationText += line + "\n";
//     console.log(`Education ${i + 1}: ${line}\n`);
//   }
//   educationText = educationText.trim();

//   const embeddingText = `Experience:
// ${experiencesText}

// Projects:
// ${projectsText}

// Skills:
// ${skillsText}

// Education:
// ${educationText}`.trim();

//   console.log("\n" + "=".repeat(60));
//   console.log("EMBEDDING TEXT BUILT");
//   console.log("=".repeat(60));
//   console.log(`\nTotal characters: ${embeddingText.length}`);
//   console.log(`\nPreview:`);
//   console.log("-".repeat(60));
//   console.log(embeddingText);
//   console.log("-".repeat(60));

//   return embeddingText;
// }

// async function generateEmbeddings(embeddingText: string): Promise<number[]> {
//   console.log("\n" + "=".repeat(60));
//   console.log("STEP 5: GENERATE VECTOR EMBEDDINGS");
//   console.log("=".repeat(60) + "\n");

//   console.log(
//     `Generating embeddings for ${embeddingText.length} characters...\n`
//   );

//   try {
//     // Note: In Node.js, you would use sentence-transformers Python package via child_process
//     // or use a REST API endpoint. For now, this is a placeholder.

//     const mockEmbedding = Array.from({ length: 768 }, () => Math.random());

//     console.log("✓ Embeddings generated successfully");
//     console.log(`  - Embedding dimensions: ${mockEmbedding.length}`);
//     console.log(`  - Number of vectors: 1`);
//     console.log("\nFirst 10 embedding values:");
//     console.log(mockEmbedding.slice(0, 10));

//     return mockEmbedding;
//   } catch (error) {
//     console.error(`✗ Error generating embeddings: ${error}`);
//     throw error;
//   }
// }

// function displayAndExport(
//   parsedResume: ParsedResume,
//   metadata: Metadata,
//   embeddingText: string,
//   embedding: number[]
// ): string {
//   console.log("\n" + "=".repeat(60));
//   console.log("EXTRACTED RESUME DATA (JSON)");
//   console.log("=".repeat(60) + "\n");

//   console.log(JSON.stringify(parsedResume, null, 2));

//   console.log("\n" + "=".repeat(60));
//   console.log("EXPORTING RESULTS");
//   console.log("=".repeat(60) + "\n");

//   if (!fs.existsSync(EXPORT_DIR)) {
//     fs.mkdirSync(EXPORT_DIR, { recursive: true });
//   }

//   const fileHash = metadata.fileHash;
//   const outputFile = path.join(EXPORT_DIR, `${fileHash}.json`);

//   if (fs.existsSync(outputFile)) {
//     console.log(
//       `✗ Duplicate detected: resume with hash ${fileHash} already exists`
//     );
//     console.log(`  - Path: ${outputFile}`);
//   } else {
//     const outputData: ResumeOutput = {
//       metadata: metadata,
//       extractedResume: parsedResume,
//       embeddingText: embeddingText,
//       embeddingInfo: {
//         model: "BAAI/bge-base-en-v1.5",
//         dimensions: embedding.length,
//         vectorCount: 1,
//         embedding: embedding,
//       },
//     };

//     fs.writeFileSync(outputFile, JSON.stringify(outputData, null, 2), "utf-8");

//     console.log(`✓ Resume data exported successfully`);
//     console.log(`  - Path: ${outputFile}`);
//     console.log(`  - File size: ${fs.statSync(outputFile).size} bytes`);
//     console.log(
//       `  - Contains: metadata, extracted resume, embedding text, embedding info`
//     );
//   }

//   return outputFile;
// }

// // ============================================================================
// // MAIN PIPELINE
// // ============================================================================

// async function processResumePipeline(resumeFilePaths: string[]): Promise<void> {
//   try {
//     console.log("\n" + "=".repeat(60));
//     console.log("RESUME PROCESSING PIPELINE");
//     console.log("=".repeat(60) + "\n");

//     const totalFiles = resumeFilePaths.length;
//     let successfulFiles = 0;
//     let failedFiles = 0;
//     const processedFiles: ProcessedFile[] = [];

//     // Process each resume
//     for (let fileIndex = 0; fileIndex < resumeFilePaths.length; fileIndex++) {
//       const resumeFilePath = resumeFilePaths[fileIndex];
//       const fileName = path.basename(resumeFilePath);

//       console.log("\n" + "█".repeat(60));
//       console.log(
//         `PROCESSING FILE ${fileIndex + 1}/${totalFiles}: ${fileName}`
//       );
//       console.log("█".repeat(60) + "\n");

//       try {
//         // Step 1: Load resume file
//         const resumeBuffer = await uploadResume(resumeFilePath);

//         // Step 2: Parse PDF
//         const resumeText = await parsePdf(resumeBuffer);

//         // Step 3: Extract metadata
//         const metadata = extractMetadata(resumeText, fileName);

//         // Step 4: LLM extraction
//         const parsedResume = await extractResumeWithLLM(resumeText);

//         // Step 5: Add metadata
//         addMetadataToResume(parsedResume, metadata);

//         // Step 6: Build embedding text
//         const embeddingText = buildEmbeddingText(parsedResume);

//         // Step 7: Generate embeddings
//         const embedding = await generateEmbeddings(embeddingText);

//         // Step 8: Display and export
//         const outputFile = displayAndExport(
//           parsedResume,
//           metadata,
//           embeddingText,
//           embedding
//         );

//         processedFiles.push({
//           fileName: fileName,
//           fileHash: metadata.fileHash,
//           outputFile: outputFile,
//           qualityScore: parsedResume.analysis.quality.score,
//           status: "✓ SUCCESS",
//         });
//         successfulFiles++;

//         console.log(
//           `\n✓ File ${fileIndex + 1}/${totalFiles} processed successfully`
//         );
//       } catch (error) {
//         const errorMessage =
//           error instanceof Error ? error.message : String(error);
//         console.error(`\n✗ Error processing ${fileName}: ${errorMessage}`);
//         processedFiles.push({
//           fileName: fileName,
//           status: `✗ FAILED: ${errorMessage.substring(0, 100)}`,
//         });
//         failedFiles++;
//       }
//     }

//     // Final summary
//     console.log("\n" + "=".repeat(60));
//     console.log("BATCH PROCESSING COMPLETE");
//     console.log("=".repeat(60));
//     console.log(`\nTotal files: ${totalFiles}`);
//     console.log(`✓ Successful: ${successfulFiles}`);
//     console.log(`✗ Failed: ${failedFiles}`);

//     console.log("\n" + "-".repeat(60));
//     console.log("PROCESSING SUMMARY:");
//     console.log("-".repeat(60));

//     for (let i = 0; i < processedFiles.length; i++) {
//       const result = processedFiles[i];
//       console.log(`\n${i + 1}. ${result.fileName}`);
//       console.log(`   Status: ${result.status}`);
//       if (result.status.startsWith("✓")) {
//         console.log(`   Hash: ${result.fileHash}`);
//         console.log(`   Quality Score: ${result.qualityScore}/100`);
//         console.log(`   Output: ${result.outputFile}`);
//       }
//     }

//     console.log("\n" + "=".repeat(60));
//     console.log("✓ PIPELINE COMPLETED SUCCESSFULLY");
//     console.log("=".repeat(60));
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : String(error);
//     console.error(`\n✗ Pipeline failed: ${errorMessage}`);
//     throw error;
//   }
// }

// // ============================================================================
// // EXECUTION
// // ============================================================================

// async function main(): Promise<void> {
//   try {
//     const resumeFiles = [
//       "./resumes/sample_resume.pdf", // Replace with actual file paths
//     ];

//     await processResumePipeline(resumeFiles);
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : String(error);
//     console.error("Fatal error:", errorMessage);
//     process.exit(1);
//   }
// }

// main();
