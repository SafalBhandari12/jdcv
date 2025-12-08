import { GoogleGenAI } from "@google/genai";
import { resumeParsingPrompt } from "./prompts.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// Type definitions for resume parsing
interface Experience {
  title: string | null;
  company: string | null;
  startDate: string | null;
  endDate: string | null;
  description: string | null;
  yearsOfExperience: number | null;
  responsibilities: string[];
}

interface Education {
  degree: string | null;
  institution: string | null;
  startDate: string | null;
  endDate: string | null;
  details: string | null;
}

interface Project {
  name: string | null;
  description: string | null;
  techStack: string[];
  responsibilities: string[];
}

interface ResumeData {
  name: string | null;
  email: string | null;
  phone: string | null;
  summary: string | null;
  yearsOfExperience: number | null;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: string[];
}

export default async function extractDetailsFromResume(
  rawText: string
): Promise<ResumeData> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: resumeParsingPrompt(rawText),
  });
  console.log(response.text);
  if (!response.text) throw new Error("No response from AI");
  const responseJson: ResumeData = JSON.parse(response.text);
  return responseJson;
}
