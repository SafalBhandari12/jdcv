import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const EMBEDDING_API_URL =
  process.env.EMBEDDING_API_URL || "http://127.0.0.1:8000";

export async function getEmbedding(text: string): Promise<number[]> {
  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/BAAI/bge-base-en-v1.5",
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

    const result = (await response.json()) as number[];
    return result;
  } catch (error) {
    console.error("Error getting embedding:", error);
    throw new Error("Failed to get embedding");
  }
}
