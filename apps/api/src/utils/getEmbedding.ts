import axios from "axios";

const EMBEDDING_API_URL =
  process.env.EMBEDDING_API_URL || "http://127.0.0.1:8000";

export async function getEmbedding(text: string): Promise<number[]> {
  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/TechWolf/JobBERT-v2/pipeline/feature-extraction",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: text,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting embedding:", error);
    throw new Error("Failed to get embedding");
  }
}