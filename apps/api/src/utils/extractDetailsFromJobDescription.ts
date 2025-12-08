import { GoogleGenAI } from "@google/genai";
import { jobDescriptionParsingPrompt } from "./prompts.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

async function extractDetailsFromJobDescription(text: string) {
  try {
    const prompt = jobDescriptionParsingPrompt(text);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const responseText = response.text;
    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Extract JSON from the response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to extract JSON from response");
    }

    const parsedData = JSON.parse(jsonMatch[0]);

    return {
      title: parsedData.title || null,
      company: parsedData.company || null,
      description: parsedData.description || null,
      yearsOfExperience: parsedData.yearsOfExperience || null,
      requirements: Array.isArray(parsedData.requirements)
        ? parsedData.requirements
        : [],
      skills: Array.isArray(parsedData.skills) ? parsedData.skills : [],
      degrees: Array.isArray(parsedData.degrees) ? parsedData.degrees : [],
    };
  } catch (error: any) {
    console.error("Error extracting job description details:", error);
    throw error;
  }
}

export default extractDetailsFromJobDescription;
