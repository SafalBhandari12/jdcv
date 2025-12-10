import { callOumi } from "../config/oumi.js";
import { callGemini } from "../config/gemini.js";

export type Provider = "oumi" | "gemini";

export interface AIRequest {
  provider: Provider;
  prompt: string;
}

export interface AIResponse {
  provider: Provider;
  output: string;
}

const isDev = process.env.NODE_ENV !== "production";

export async function generateWithAI({
  provider,
  prompt,
}: AIRequest): Promise<AIResponse> {
  if (!prompt?.trim()) {
    throw new Error("Prompt is required");
  }

  if (provider === "oumi") {
    if (isDev) {
      // dev: hit local Oumi server
      const output = await callOumi(prompt);
      return { provider: "oumi", output };
    }
    // prod: fall back to Gemini instead Oumi
    const output = await callGemini(prompt);
    return { provider: "gemini", output };
  }

  if (provider === "gemini") {
    const output = await callGemini(prompt);
    return { provider: "gemini", output };
  }

  throw new Error(`Unknown provider: ${provider}`);
}