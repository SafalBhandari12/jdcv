import { GoogleGenAI } from "@google/genai";
import "../config/loadEnv.js";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

if (!GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not set, call will fail");
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export async function callGemini(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const text = response.text;
  if (!text) {
    throw new Error("No response from Gemini");
  }
  return text;
}