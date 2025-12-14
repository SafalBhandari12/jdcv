import { GoogleGenAI } from "@google/genai";
import { resumeParsingPrompt } from "./prompts.js";
import { SkillLevel } from "@prisma/client";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});
type IsoDate = string; // ISO 8601

interface FlexibleDate {
  rawText: string;
  isoDate: IsoDate | null;
  isCurrent: boolean;
}

interface Traceable<T> {
  value: T;
  rawText: string;
  confidence: number; // 0–1
  pageIndex: number | null;
}

interface Location {
  rawInput: string;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  countryCode: string | null;
}

interface ResumeAnalysis {
  quality: {
    score: number; // 0–100
    level: "low" | "average" | "high" | "exceptional";
    hints: string[];
  };
  suspicion: {
    score: number; // 0–100
    level: "safe" | "concern" | "suspicious" | "high_risk";
    flags: {
      type: string;
      severity: "low" | "medium" | "critical";
      description: string;
    }[];
  };
  writingStyle: {
    actionVerbsRate: number; // 0–1
    quantificationRate: number; // 0–1
    clicheCount: number;
  };
}
interface VerificationFlags {
  timeline: {
    hasGaps: boolean;
    gaps: {
      startDate: IsoDate;
      endDate: IsoDate;
      durationDays: number;
    }[];
  };
  identity: {
    geoConsistency: "match" | "mismatch" | "unknown";
    socialFootprintFound: boolean;
  };
}
interface Basics {
  name: Traceable<string>;
  email: Traceable<string>[];
  phone: Traceable<string>[];
  location: Location;
  urls: {
    type: "linkedin" | "github" | "portfolio" | "personal";
    url: string;
  }[];
  summary: string | null;
}

interface SkillProfile {
  name: string;
  normalizedName: string;
  category: string;
  computedLevel: "novice" | "intermediate" | "advanced" | "expert";
  validityScore: number; // 0–10
  metadata: {
    firstSeen: IsoDate;
    lastUsed: IsoDate;
    totalMonthsExperience: number;
    occurrenceCount: number;
    sources: {
      sectionId: string;
      sectionType: "experience" | "education" | "project";
    }[];
  };
}

interface WorkExperience {
  id: string;
  title: Traceable<string>;
  normalizedTitle: string | null;
  company: Traceable<string>;
  companyDomain: string | null;
  location: Location | null;
  type: "full-time" | "contract" | "internship" | null;
  startDate: FlexibleDate;
  endDate: FlexibleDate;
  description: string | null;
  responsibilities: string[];
  skillsDetected: string[];
  isVerified: boolean;
  verificationNotes: string | null;
  verificationConfidence: number | null;
  verificationDate: IsoDate | null;
}

interface Education {
  id: string;
  institution: Traceable<string>;
  degree: Traceable<string>;
  normalizedDegree: "high_school" | "bachelors" | "masters" | "phd" | null;
  fieldOfStudy: string | null;
  startDate: FlexibleDate | null;
  endDate: FlexibleDate | null;
  gpa: {
    score: number;
    scale: number;
  } | null;
}

interface Project {
  name: string;
  description: string | null;
  url: string | null;
  skillsUsed: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: FlexibleDate;
  doesExpire: boolean;
  verificationUrl: string | null;
}

interface Language {
  language: string;
  proficiency: "native" | "fluent" | "conversational" | "basic";
}

interface MetaData {
  fileName: string;
  fileHash: string;
  parsedAt: IsoDate;
  parserVersion: string;
}

export interface ResumeData {
  id: string;
  metaData: MetaData;
  analysis: ResumeAnalysis;
  verification: VerificationFlags;
  basics: Basics;
  skills: SkillProfile[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
}

export const skillLevelMap: Record<SkillProfile["computedLevel"], SkillLevel> =
  {
    novice: SkillLevel.NOVICE,
    intermediate: SkillLevel.INTERMEDIATE,
    advanced: SkillLevel.ADVANCED,
    expert: SkillLevel.EXPERT,
  };

export default async function extractDetailsFromResume(
  rawText: string
): Promise<ResumeData> {
  console.log("Starting resume extraction...");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: resumeParsingPrompt(rawText),
  });
  console.log(response.text);

  if (!response.text) throw new Error("No response from AI");

  try {
    const responseJson: ResumeData = JSON.parse(response.text);
    return responseJson;
  } catch (parseError) {
    console.error(
      "Failed to parse AI response:",
      response.text?.substring(0, 500)
    );
    throw new Error(
      "AI returned invalid JSON response. Please try uploading again."
    );
  }
}
