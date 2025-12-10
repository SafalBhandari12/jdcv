import "../config/loadEnv.js";

const OUMI_BASE_URL = process.env.OUMI_BASE_URL ?? "http://127.0.0.1:8000";

if (!OUMI_BASE_URL) {
  console.warn("OUMI_BASE_URL is not set; OUMI calls will fail.");
}

export async function callOumi(prompt: string): Promise<string> {
  if (!prompt?.trim()) {
    throw new Error("Prompt is required");
  }

  const res = await fetch(`${OUMI_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OUMI server error: ${res.status} ${errText}`);
  }

  const json = await res.json();
  const content: string | undefined = json.output;

  if (!content) {
    throw new Error("Empty response from OUMI");
  }

  return content;
}