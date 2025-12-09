//ALL of this is placeholder
//need to install together

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;
const TOGETHER_BASE_URL =
  process.env.TOGETHER_BASE_URL ?? "https://api.together.xyz/v1"; // adjust if needed

if (!TOGETHER_API_KEY) {
  console.warn(
    "[Together] TOGETHER_API_KEY is not set. Together AI calls will fail until this is configured.",
  );
}

export async function callTogether(prompt: string): Promise<string> {
  // PLACEHOLDER: replace with real Together AI SDK / fetch logic
  return `[TOGETHER PLACEHOLDER] Prompt: "${prompt}"`;
}