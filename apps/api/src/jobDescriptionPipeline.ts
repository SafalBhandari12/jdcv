import * as fs from "fs";
import * as path from "path";
import { getEmbedding } from "./utils/getEmbedding.js";
import { cosineSimilarity } from "fast-cosine-similarity";
import type { ParsedResume } from "./types/resume.js";
import { embedTexts } from "./resumePipeline.js";

// Directory containing parsed resume JSON files
const RESUME_DIR = "./resumes/parsed";

interface FlexibleDate {
  isoDate?: string | null;
  isCurrent?: boolean;
}

interface WorkExperience {
  startDate?: FlexibleDate;
  endDate?: FlexibleDate;
}

interface Education {
  normalizedDegree?: string | null;
  fieldOfStudy?: string | null;
  endDate?: FlexibleDate | null;
}

interface Skill {
  normalizedName?: string;
  computedLevel?: string;
  metadata?: {
    totalMonthsExperience?: number | null;
    lastUsed?: string | null;
  };
}

interface SkillRequirement {
  name: string;
  minLevel?: string;
  minMonthsExperience?: number;
  maxMonthsSinceLastUse?: number;
  minMonths?: number;
  recentWithinMonths?: number;
  skills?: string[];
}

interface JDSkills {
  must?: SkillRequirement[];
  optional?: SkillRequirement[];
  minOptionalRequired?: number;
  either?: SkillRequirement[][];
}

async function loadAllResumes(resumeDir: string): Promise<ParsedResume[]> {
  const resumes: ParsedResume[] = [];
  try {
    const files = fs.readdirSync(resumeDir);
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(resumeDir, file);
        const data = fs.readFileSync(filePath, "utf-8");
        resumes.push(JSON.parse(data));
      }
    }
  } catch (error) {
    console.error("Error loading resumes:", error);
  }
  return resumes;
}

// Function to check quality gate
// Here if you look at the prompt you will see that min_quality greater than 60 is average and max_suspicion less than 40 is concerning
// todo: refactor to use enums for quality and suspicion levels
function passesQualityGate(
  resume: ParsedResume,
  minQuality: number = 60,
  maxSuspicion: number = 40
): boolean {
  const qualityScore = resume?.analysis?.quality?.score ?? 0;
  const suspicionScore = resume?.analysis?.suspicion?.score ?? 0;
  return qualityScore >= minQuality && suspicionScore <= maxSuspicion;
}

// I built this because the default iso date parser in TypeScript is too strict for our use case since dates can be in YYYY, YYYY-MM or YYYY-MM-DD format
function getDate(dateStr: string): Date | number {
  try {
    // Handle full ISO datetime strings (e.g., "2022-06-01T00:00:00Z")
    if (dateStr.includes("T")) {
      return new Date(dateStr);
    }
    // Handle YYYY-MM-DD format
    else if (dateStr.length === 10) {
      return new Date(dateStr);
    }
    // Handle YYYY-MM format
    else if (dateStr.length === 7) {
      const [year, month] = dateStr.split("-");
      if (year && month) {
        return new Date(parseInt(year), parseInt(month) - 1);
      }
    }
    // Handle YYYY format
    else if (dateStr.length === 4) {
      return new Date(parseInt(dateStr), 0);
    }
  } catch (error) {
    console.error("Error parsing date:", error);
  }
  return 0;
}

// Calculate total months between two dates given in FlexibleDate format
function getTotalMonths(
  startDate: FlexibleDate | undefined,
  endDate: FlexibleDate | undefined
): number {
  if (!startDate || !endDate || !startDate.isoDate) {
    return 0;
  }
  try {
    const startDateObj = getDate(startDate.isoDate);
    if (typeof startDateObj === "number") {
      return 0;
    }

    let endDateObj: Date;
    if (endDate && endDate.isCurrent === true) {
      endDateObj = new Date();
    } else if (endDate && endDate.isoDate) {
      try {
        const parsed = getDate(endDate.isoDate);
        endDateObj = typeof parsed === "number" ? new Date() : parsed;
      } catch {
        endDateObj = new Date();
      }
    } else {
      endDateObj = new Date();
    }

    const yearDiff = endDateObj.getFullYear() - startDateObj.getFullYear();
    const monthDiff = endDateObj.getMonth() - startDateObj.getMonth();
    const totalMonths = yearDiff * 12 + monthDiff;
    return Math.max(totalMonths, 0);
  } catch (error) {
    console.error("Error calculating total months:", error);
    return 0;
  }
}

function industryExperienceGate(
  resume: ParsedResume,
  minIndustryExperience: number = 3
): boolean {
  let totalMonths = 0;
  const workExperiences: WorkExperience[] = resume?.workExperience ?? [];
  for (const workExperience of workExperiences) {
    const months = getTotalMonths(
      workExperience.startDate,
      workExperience.endDate
    );

    totalMonths += months;
  }
  return totalMonths >= minIndustryExperience;
}

const DEGREE_RANK: { [key: string]: number } = {
  high_school: 1,
  diploma: 2,
  associate: 2,
  bachelors: 3,
  masters: 4,
  phd: 5,
  doctorate: 5,
};

function educationGate(
  candidateEducation: Education[],
  requiredDegrees: string[],
  requiredFields?: string[],
  isCurrent: boolean = false
): boolean {
  for (const edu of candidateEducation) {
    const degree = edu.normalizedDegree;
    const fieldOfStudy = (edu.fieldOfStudy ?? "").toLowerCase();
    const endDate = edu.endDate ?? {};

    let hasRequiredDegree = false;
    let hasRequiredField = false;

    for (const requiredDegree of requiredDegrees) {
      if (
        degree &&
        (DEGREE_RANK[requiredDegree] ?? 0) <= (DEGREE_RANK[degree] ?? 0)
      ) {
        hasRequiredDegree = true;
        break;
      }
    }

    if (!hasRequiredDegree) {
      continue;
    }

    if (requiredFields) {
      for (const requiredField of requiredFields) {
        if (
          requiredField &&
          fieldOfStudy.includes(requiredField.toLowerCase())
        ) {
          hasRequiredField = true;
          break;
        }
      }

      if (!hasRequiredField) {
        break;
      }
    }

    if (isCurrent && endDate.isCurrent !== true) {
      continue;
    }

    return true;
  }
  return false;
}

const SKILL_LEVEL_RANK: { [key: string]: number } = {
  novice: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

// Helper function to calculate months since a given date string
function monthSince(dateStr: string): number {
  const d = getDate(dateStr);
  if (typeof d === "number") {
    return 0;
  }
  const today = new Date();
  return (
    (today.getFullYear() - d.getFullYear()) * 12 +
    (today.getMonth() - d.getMonth())
  );
}

// Function to match a candidate's skill against job requirements
function matchSkill(
  skill: Skill,
  req: SkillRequirement,
  checkRecent: boolean = false
): boolean {
  const skillLevel = skill?.computedLevel ?? "novice";
  const minLevel = req?.minLevel ?? "novice";

  if ((SKILL_LEVEL_RANK[skillLevel] ?? 0) < (SKILL_LEVEL_RANK[minLevel] ?? 0)) {
    return false;
  }

  if (
    (skill?.metadata?.totalMonthsExperience ?? 0) <
    (req?.minMonthsExperience ?? 0)
  ) {
    return false;
  }

  if (checkRecent) {
    const lastUsed = skill?.metadata?.lastUsed;
    if (lastUsed === undefined || lastUsed === null) {
      return false;
    }
    if (monthSince(lastUsed) > (req?.maxMonthsSinceLastUse ?? 9999)) {
      return false;
    }
  }

  return true;
}

function skillGate(candidateSkills: Skill[], jdSkills: JDSkills): boolean {
  const lookUp: { [key: string]: Skill } = {};
  for (const skill of candidateSkills) {
    const normalizedName = (skill?.normalizedName ?? "").toLowerCase();
    lookUp[normalizedName] = skill;
  }

  // Compulsory Fields
  for (const req of jdSkills.must ?? []) {
    const skillName = req.name.toLowerCase();
    if (!(skillName in lookUp)) {
      return false;
    }
    const candidateSkill = lookUp[skillName];
    if (candidateSkill && !matchSkill(candidateSkill, req, true)) {
      return false;
    }
  }

  // Optional Fields
  let optionalCount = 0;
  for (const req of jdSkills.optional ?? []) {
    const skillName = req.name.toLowerCase();
    if (skillName in lookUp) {
      const candidateSkill = lookUp[skillName];
      if (candidateSkill && matchSkill(candidateSkill, req)) {
        optionalCount++;
      }
    }
  }
  if (optionalCount < (jdSkills.minOptionalRequired ?? 0)) {
    return false;
  }

  // Either Fields
  for (const eitherSkills of jdSkills.either ?? []) {
    let eitherMatched = false;
    for (const skill of eitherSkills ?? []) {
      const normalizedSkillName = skill.name.toLowerCase();
      if (normalizedSkillName in lookUp) {
        const candidateSkill = lookUp[normalizedSkillName];
        if (!candidateSkill) {
          break;
        }
        const req = skill;
        if (matchSkill(candidateSkill, req)) {
          eitherMatched = true;
          break;
        }
      }
    }
    if (!eitherMatched) {
      return false;
    }
  }
  return true;
}

// Utility function for calculating the cosine similarity of one embedding with multiple embeddings
function normalize(v: number[]): number[] {
  const norm = Math.sqrt(v.reduce((s, x) => s + x * x, 0));
  return v.map((x) => x / norm);
}

export function cosineSimilarityBatchNormalized(
  query: number[],
  vectors: number[][]
): number[] {
  const q = normalize(query);
  const normalizedVectors = vectors.map(normalize);

  return normalizedVectors.map((v) =>
    v.reduce((sum, x, i) => sum + (q[i] ?? 0) * x, 0)
  );
}

// Main execution
async function main() {
  const allResumes = await loadAllResumes(RESUME_DIR);
  const score: { resumeId: string; score: number }[] = [];
  console.log(allResumes.length, "resumes loaded");

  for (const resume of allResumes) {
    const qualityGateResult = passesQualityGate(resume, 70, 30);
    if (!qualityGateResult) {
      console.log(resume.basics.name.value, "failed quality gate");
      continue;
    }

    const industryExperienceResult = industryExperienceGate(resume);
    if (!industryExperienceResult) {
      console.log(resume.basics.name.value, "failed industry experience gate");
      continue;
    }

    const educationResult = educationGate(
      resume?.education ?? [],
      ["bachelors", "masters"],
      [
        "software",
        "computer science",
        "computer engineering",
        "information technology",
        "computer application",
      ],
      false
    );
    if (!educationResult) {
      console.log(resume.basics.name.value, "failed industry experience gate");
      continue;
    }

    const jdSkills: JDSkills = {
      must: [
        {
          name: "nodejs",
          minLevel: "intermediate",
          minMonthsExperience: 4,
          maxMonthsSinceLastUse: 24,
        },
        {
          name: "react",
          minLevel: "intermediate",
          minMonthsExperience: 3,
          maxMonthsSinceLastUse: 24,
        },
      ],
      optional: [
        { name: "nodejs", minLevel: "intermediate" },
        { name: "AWS", minLevel: "expert" },
      ],
      minOptionalRequired: 1,
      either: [
        [
          {
            name: "postgresql",
            minLevel: "novice",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
          {
            name: "Azure",
            minLevel: "intermediate",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
          {
            name: "Aws",
            minLevel: "intermediate",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
        ],
      ],
    };

    const skillGateResult = skillGate(resume?.skills ?? [], jdSkills);
    if (!skillGateResult) {
      console.log(resume.basics.name.value, "failed skill gate");
      continue;
    }

    console.log(resume.basics.name.value);

    const RESPONSIBILITIES = [
      "Design, develop, and maintain scalable server-side applications and services using PHP and Laravel framework",
      "Architect and implement RESTful APIs with authentication, validation, and documentation",
      "Define and enforce database schemas, migrations, and efficient query patterns using Eloquent ORM or raw SQL",
      "Write clean, modular, secure, and testable code conforming to PSR standards and framework best practices",
      "Develop and maintain automated unit, feature, and integration tests using PHPUnit and Laravel testing tools",
      "Perform code reviews, enforce coding standards, and mentor peers on framework usage and engineering practices",
      "Optimize application performance, caching strategies, and asynchronous workflows (queues, jobs, events)",
      "Identify, debug, and resolve production defects, security vulnerabilities, and performance bottlenecks",
      "Integrate third-party APIs, external services, and payment gateways with robust error handling",
      "Collaborate with front-end teams to integrate UI components and ensure seamless data exchange and UX consistency",
      "Participate in architecture discussions, sprint planning, technical design reviews, and daily agile ceremonies",
      "Implement secure session management, authentication/authorization flows, and apply OWASP security best practices",
      "Configure and maintain CI/CD pipelines, deployment scripts, and environment-specific configurations",
      "Document system design, API specifications, deployment processes, and operational procedures",
    ];
    const jdEmbeddings = await embedTexts(RESPONSIBILITIES);
    const resumeEmbeddings: number[][] = [];
    resumeEmbeddings.push(
      ...(resume.workExperience
        ?.flatMap((we) => we.responsibilitiesEmbeddings || [])
        .filter((e) => e && e.length > 0) ?? [])
    );
    resumeEmbeddings.push(
      ...(resume.projects
        ?.flatMap((p) =>
          p.descriptionEmbedding ? [p.descriptionEmbedding] : []
        )
        .filter((e) => e && e.length > 0) ?? [])
    );
    if (
      resume.basics.summaryEmbedding &&
      resume.basics.summaryEmbedding.length > 0
    ) {
      resumeEmbeddings.push(resume.basics.summaryEmbedding);
    }
    resumeEmbeddings.push(
      ...resume.projects
        .map((p) => p.descriptionEmbedding)
        .filter(
          (e): e is number[] => e !== null && e !== undefined && e.length > 0
        )
    );
    let currentSum = 0;
    for (const responsibilityEmbeddingJd of jdEmbeddings) {
      const similarities = cosineSimilarityBatchNormalized(
        responsibilityEmbeddingJd,
        resumeEmbeddings.filter(
          (e) => e !== null && e !== undefined
        ) as number[][]
      );
      currentSum += Math.max(...similarities, 0);
    }
    const score = currentSum / jdEmbeddings.length;
    console.log("Embedding Similarity Score:", score.toFixed(4));
  }
  console.log("Final Scores:", score);
}

main().catch(console.error);
