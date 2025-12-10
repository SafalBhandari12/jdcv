from typing import List

from fastapi import FastAPI
from pydantic import BaseModel

from oumi.inference import NativeTextInferenceEngine
from oumi.core.configs import InferenceConfig, ModelParams
from oumi.core.types.conversation import Conversation, Message, Role

import os
import requests

app = FastAPI()

# ---------- LLM via Oumi (CPU-friendly NativeText engine) ----------

model_params = ModelParams(
    model_name="HuggingFaceTB/SmolLM2-135M-Instruct",
    # run on CPU; no vLLM, no GPU required
    model_kwargs={"device_map": "cpu"},
)
engine = NativeTextInferenceEngine(model_params)
inference_config = InferenceConfig()

class ChatRequest(BaseModel):
  prompt: str


class ChatResponse(BaseModel):
  output: str


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest) -> ChatResponse:
  conversation = Conversation(
    messages=[Message(role=Role.USER, content=req.prompt)]
  )
  result = engine.infer([conversation], inference_config=inference_config)
  output = result[0].messages[-1].content
  return ChatResponse(output=output)


# ---------- JobBERT v2 embeddings via HF router ----------

HF_TOKEN = os.environ.get("HF_TOKEN", "")


class EmbeddingRequest(BaseModel):
  text: str


class EmbeddingResponse(BaseModel):
  embedding: List[float]


@app.post("/embeddings", response_model=EmbeddingResponse)
def embeddings(req: EmbeddingRequest) -> EmbeddingResponse:
  if not HF_TOKEN:
    raise RuntimeError("HF_TOKEN env var is required for JobBERT v2")

  url = (
    "https://router.huggingface.co/hf-inference/models/"
    "TechWolf/JobBERT-v2/pipeline/feature-extraction"
  )
  headers = {
    "Authorization": f"Bearer {HF_TOKEN}",
    "Content-Type": "application/json",
  }
  payload = {"inputs": req.text}
  r = requests.post(url, headers=headers, json=payload)
  r.raise_for_status()
  data = r.json()  # HF returns the embedding array
  return EmbeddingResponse(embedding=data)