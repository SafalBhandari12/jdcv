import { Router, type Request, type Response } from "express";
import { generateWithAI, type Provider } from "../utils/aiService.js";

const router = Router();

/**
 * POST /api/ai/generate
 * body: { provider: "oumi" | "gemini", prompt: string }
 */
router.post("/generate", async (req: Request, res: Response) => {
  try {
    const { provider, prompt } = req.body as {
      provider?: Provider;
      prompt?: string;
    };

    if (!provider || !prompt) {
      return res
        .status(400)
        .json({ error: "provider and prompt are required" });
    }

    const result = await generateWithAI({ provider, prompt });
    return res.json(result);
  } catch (err: any) {
    console.error("[AI Route] Error:", err);
    return res
      .status(500)
      .json({ error: err.message ?? "AI generation failed" });
  }
});

export default router;