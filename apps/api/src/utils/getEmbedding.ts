const isDev = process.env.NODE_ENV !== "production";

const EMBEDDING_API_URL =
  process.env.EMBEDDING_API_URL ||
  (isDev
    ? "http://127.0.0.1:8000/embeddings" // dev: local Oumi server
    : "https://router.huggingface.co/hf-inference/models/TechWolf/JobBERT-v2/pipeline/feature-extraction"); // prod: HF router

export async function getEmbedding(text: string): Promise<number[]> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const body = isDev
      ? { text } // dev: Python /embeddings - { text }
      : { inputs: text }; // prod: HF router - { inputs }

    if (!isDev && !process.env.HF_TOKEN) {
      throw new Error("HF_TOKEN is required in production for embeddings");
    }
    
    if (!isDev && process.env.HF_TOKEN) {
      headers.Authorization = `Bearer ${process.env.HF_TOKEN}`;
    }

    const response = await fetch(EMBEDDING_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Embedding API error: ${response.status} ${errText}`);
    }

    const json = await response.json();

    // dev: { embedding: [...] } || prod: normal array [...]
    return isDev ? json.embedding : json;
  } catch (error) {
    console.error("Error getting embedding:", error);
    throw new Error("Failed to get embedding");
  }
}