/**
 * TypeScript type definitions for Resume Parsing Response
 * Based on the ParsedResume schema from resumeParsingPrompt
 */

// Utility Types
export type IsoDate = string; // ISO 8601 format

export interface Traceable<T> {
  value: T;
  rawText: string;
  confidence: number; // 0–1
  pageIndex: number | null;
}

export interface Location {
  rawInput: string;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  countryCode: string | null;
}

export interface FlexibleDate {
  rawText: string;
  isoDate: IsoDate | null;
  isCurrent: boolean;
}

// Analysis Types
export interface QualityScore {
  score: number; // 0–100
  level: "low" | "average" | "high" | "exceptional";
  hints: string[];
}

export interface SuspicionFlag {
  type: string;
  severity: "low" | "medium" | "critical";
  description: string;
}

export interface SuspicionScore {
  score: number; // 0–100
  level: "safe" | "concern" | "suspicious" | "high_risk";
  flags: SuspicionFlag[];
}

export interface WritingStyle {
  actionVerbsRate: number; // 0.0–1.0
  quantificationRate: number; // 0.0–1.0
  clicheCount: number;
}

export interface ResumeAnalysis {
  quality: QualityScore;
  suspicion: SuspicionScore;
  writingStyle: WritingStyle;
}

// Verification Types
export interface TimelineGap {
  startDate: IsoDate;
  endDate: IsoDate;
  durationDays: number;
}

export interface Timeline {
  hasGaps: boolean;
  gaps: TimelineGap[];
}

export interface Identity {
  geoConsistency: "match" | "mismatch" | "unknown";
  socialFootprintFound: boolean;
}

export interface VerificationFlags {
  timeline: Timeline;
  identity: Identity;
}

// Basics Types
export interface Url {
  type: "linkedin" | "github" | "portfolio" | "personal";
  url: string;
}

export interface Basics {
  name: Traceable<string>;
  email: Traceable<string>[];
  phone: Traceable<string>[];
  location: Location;
  urls: Url[];
  summary: string | null;
}

// Skills Types
export interface SkillSource {
  sectionId: string;
  sectionType: "experience" | "education" | "project";
}

export interface SkillMetadata {
  firstSeen: IsoDate;
  lastUsed: IsoDate;
  totalMonthsExperience: number;
  occurrenceCount: number;
  sources: SkillSource[];
}

export interface SkillProfile {
  name: string;
  normalizedName: string;
  category: string;
  computedLevel: "novice" | "intermediate" | "advanced" | "expert";
  validityScore: number; // 0–10
  metadata: SkillMetadata;
}

// Work Experience Types
export interface WorkExperience {
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

// Education Types
export interface GPA {
  score: number;
  scale: number;
}

export interface Education {
  id: string;
  institution: Traceable<string>;
  degree: Traceable<string>;
  normalizedDegree: "high_school" | "bachelors" | "masters" | "phd" | null;
  fieldOfStudy: string | null;
  startDate: FlexibleDate | null;
  endDate: FlexibleDate | null;
  gpa: GPA | null;
}

// Projects Types
export interface Project {
  name: string;
  description: string | null;
  url: string | null;
  skillsUsed: string[];
}

// Certifications Types
export interface Certification {
  name: string;
  issuer: string;
  date: FlexibleDate;
  doesExpire: boolean;
  verificationUrl: string | null;
}

// Languages Types
export interface Language {
  language: string;
  proficiency: "native" | "fluent" | "conversational" | "basic";
}
export interface MetaData {
  fileName: string;
  fileHash: string;
  parsedAt: string;
  parserVersion: string;
  Language: string;
}
// Main ParsedResume Type
export interface ParsedResume {
  id: string;
  analysis: ResumeAnalysis;
  verification: VerificationFlags;
  basics: Basics;
  skills: SkillProfile[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  metaData?: MetaData;
}

// Type alias for convenience
export type ParsedResumeWithMetadata = ParsedResume;
