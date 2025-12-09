//unified AI entrypoint placeholder

import { callOumi } from "../config/oumi.js";
import { callTogether } from "../config/together.js";

export type Provider = "oumi" | "together";

export interface AIRequest {
  provider: Provider;
  prompt: string;
}

export interface AIResponse {
  provider: Provider;
  output: string;
}

export async function generateWithAI({ provider, prompt }: AIRequest): Promise<AIResponse> {
  if (!prompt?.trim()) {
    throw new Error("Prompt is required");
  }

  if (provider === "oumi") {
    const output = await callOumi(prompt);
    return { provider, output };
  }

  if (provider === "together") {
    const output = await callTogether(prompt);
    return { provider, output };
  }

  throw new Error(`Unknown provider: ${provider}`);
}