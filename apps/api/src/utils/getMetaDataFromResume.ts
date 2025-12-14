import { createHash } from "crypto";

export function generateHashValue(text: string): string {
  const normalized = normalizeText(text);
  return createHash("sha256").update(normalized).digest("hex");
}

function normalizeText(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\r\n/g, "\n") // normalize line endings
    .replace(/\b(page|pages)\s+\d+\b/g, "") // remove page numbers
    .replace(/[^\p{L}\p{N}\s]/gu, " ") // remove punctuation/symbols
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();
}

export default function getMetaDataFromResume(text: string, fileName: string) {
  return {
    fileName,
    fileHash: generateHashValue(text),
    parsedAt: new Date().toISOString(),
    parserVersion: "1.0.0",
    Language: "en",
  };
}
