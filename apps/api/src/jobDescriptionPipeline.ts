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

function qualityScoreNormalized(
  resume: ParsedResume,
  idealQuality = 90 // beyond this, extra quality adds little value
): number {
  const quality = resume?.analysis?.quality?.score ?? 0;

  if (quality <= 0) return 0;

  return Math.min(Math.log1p(quality) / Math.log1p(idealQuality), 1);
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
  minIndustryExperience: number
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

function industryExperienceScoreNormalized(
  resume: ParsedResume,
  idealMonths = 120 // e.g. 10 years
): number {
  let totalMonths = 0;

  for (const we of resume.workExperience ?? []) {
    totalMonths += getTotalMonths(we.startDate, we.endDate);
  }

  if (totalMonths <= 0) return 0;

  return Math.min(Math.log1p(totalMonths) / Math.log1p(idealMonths), 1);
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

function educationScoreNormalized(
  candidateEducation: Education[],
  requiredDegrees: string[],
  requiredFields?: string[],
  idealEducationValue = 58 // default ceiling (phd + field + current approx)
): number {
  if (!candidateEducation || candidateEducation.length === 0) return 0;

  let bestDegreeRank = 0;
  let bestFieldMatched = false;
  let bestIsCurrent = false;
  let meetsRequiredDegree = false;

  for (const edu of candidateEducation) {
    const degree = edu.normalizedDegree ?? "";
    const degreeRank = DEGREE_RANK[degree] ?? 0;
    const field = (edu.fieldOfStudy ?? "").toLowerCase();
    const endDate = edu.endDate ?? {};

    // Check if degree meets minimum required degree
    let hasRequiredDegree = false;
    for (const requiredDegree of requiredDegrees) {
      if (
        degree &&
        (DEGREE_RANK[requiredDegree] ?? 0) <= (DEGREE_RANK[degree] ?? 0)
      ) {
        hasRequiredDegree = true;
        break;
      }
    }

    // Check if field matches any required field
    let fieldMatched = false;
    if (requiredFields && requiredFields.length > 0) {
      for (const rf of requiredFields) {
        if (rf && field.includes(rf.toLowerCase())) {
          fieldMatched = true;
          break;
        }
      }
    } else {
      // If no requiredFields provided, consider fieldMatched = true (no penalty)
      fieldMatched = true;
    }

    // Choose the "best" record by degreeRank first, then by field match, then current status
    const better =
      degreeRank > bestDegreeRank ||
      (degreeRank === bestDegreeRank && fieldMatched && !bestFieldMatched) ||
      (degreeRank === bestDegreeRank &&
        fieldMatched === bestFieldMatched &&
        endDate.isCurrent === true &&
        !bestIsCurrent);

    if (better) {
      bestDegreeRank = degreeRank;
      bestFieldMatched = fieldMatched;
      bestIsCurrent = endDate.isCurrent === true;
      meetsRequiredDegree = hasRequiredDegree;
    }
  }

  if (bestDegreeRank === 0) return 0;

  // Build a raw education value
  const degreeComponent = bestDegreeRank * 10; // bachelors=30, masters=40, phd=50
  const fieldBonus = bestFieldMatched ? 5 : 0;
  const currentBonus = bestIsCurrent ? 3 : 0;

  // Bonus for meeting minimum required degree
  const requiredDegreeBonus = meetsRequiredDegree ? 8 : 0;

  const rawValue =
    degreeComponent + fieldBonus + currentBonus + requiredDegreeBonus;

  // Normalize with log1p to get diminishing returns and cap at 1
  const score = Math.min(
    Math.log1p(rawValue) / Math.log1p(idealEducationValue),
    1
  );

  return score;
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
  // Skill level rank filtering removed - keeping only experience-based checks

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

function skillScoreNormalized(
  candidateSkills: Skill[],
  jdSkills: JDSkills,
  idealSkillValue = 200
): number {
  if (!candidateSkills || candidateSkills.length === 0) return 0;

  const lookup: Record<string, Skill> = {};
  for (const s of candidateSkills) {
    lookup[(s.normalizedName ?? "").toLowerCase()] = s;
  }

  let rawScore = 0;

  const INTERMEDIATE_RANK = SKILL_LEVEL_RANK["intermediate"] || 2;

  // ---------- MUST skills ----------
  for (const req of jdSkills.must ?? []) {
    const skill = lookup[req.name.toLowerCase()];
    if (!skill) continue;

    const levelRank = SKILL_LEVEL_RANK[skill.computedLevel ?? "novice"] ?? 1;

    const months = skill.metadata?.totalMonthsExperience ?? 0;

    // Level bonus: only reward ABOVE intermediate
    const levelDelta = Math.max(levelRank - INTERMEDIATE_RANK, 0);
    rawScore += levelDelta * 12;

    // Months bonus (diminishing)
    rawScore += Math.min(Math.log1p(months) * 2, 16);
  }

  // ---------- OPTIONAL skills ----------
  for (const req of jdSkills.optional ?? []) {
    const skill = lookup[req.name.toLowerCase()];
    if (!skill) continue;

    const levelRank = SKILL_LEVEL_RANK[skill.computedLevel ?? "novice"] ?? 1;

    const months = skill.metadata?.totalMonthsExperience ?? 0;

    const levelDelta = Math.max(levelRank - INTERMEDIATE_RANK, 0);
    rawScore += levelDelta * 8;

    rawScore += Math.min(Math.log1p(months), 10);
  }

  // ---------- OTHER skills (weak signal) ----------
  for (const skill of candidateSkills) {
    const name = (skill.normalizedName ?? "").toLowerCase();

    const counted =
      (jdSkills.must ?? []).some((r) => r.name.toLowerCase() === name) ||
      (jdSkills.optional ?? []).some((r) => r.name.toLowerCase() === name);

    if (counted) continue;

    const levelRank = SKILL_LEVEL_RANK[skill.computedLevel ?? "novice"] ?? 1;

    const months = skill.metadata?.totalMonthsExperience ?? 0;

    const levelDelta = Math.max(levelRank - INTERMEDIATE_RANK, 0);
    rawScore += levelDelta * 3;

    rawScore += Math.min(Math.log1p(months), 5);
  }

  // ---------- normalize & cap ----------
  return Math.min(Math.log1p(rawScore) / Math.log1p(idealSkillValue), 1);
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

// Helper function to collect all resume embeddings
function collectResumeEmbeddings(resume: ParsedResume): number[][] {
  const embeddings: number[][] = [];

  // Add work experience responsibility embeddings
  const workExperienceEmbeddings =
    resume.workExperience
      ?.flatMap((we) => we.responsibilitiesEmbeddings || [])
      .filter((e) => e && e.length > 0) ?? [];
  embeddings.push(...workExperienceEmbeddings);

  // Add project description embeddings
  const projectEmbeddings =
    resume.projects
      ?.map((p) => p.descriptionEmbedding)
      .filter(
        (e): e is number[] => e !== null && e !== undefined && e.length > 0
      ) ?? [];
  embeddings.push(...projectEmbeddings);

  // Add summary embedding if available
  if (
    resume.basics.summaryEmbedding &&
    resume.basics.summaryEmbedding.length > 0
  ) {
    embeddings.push(resume.basics.summaryEmbedding);
  }

  return embeddings;
}

// Weights for final composite score
const FINAL_WEIGHTS = {
  embedding: 0.4, // semantic JD ↔ resume match
  skills: 0.35, // skill depth + months + level bonus
  experience: 0.15, // industry seniority
  education: 0.05, // degree + relevance
  quality: 0.05, // resume quality / reliability
};

// Helper function to calculate average max similarity score (top 60% only)
function calculateEmbeddingSimilarity(
  jdEmbeddings: number[][],
  resumeEmbeddings: number[][]
): number {
  if (resumeEmbeddings.length === 0 || jdEmbeddings.length === 0) {
    return 0;
  }

  const responsibilityScores: number[] = [];

  // Collect all max similarity scores for each JD responsibility
  for (const jdEmbedding of jdEmbeddings) {
    const similarities = cosineSimilarityBatchNormalized(
      jdEmbedding,
      resumeEmbeddings
    );
    const maxSimilarity = Math.max(...similarities, 0);
    responsibilityScores.push(maxSimilarity);
  }

  // Sort scores in descending order to get the highest matches
  responsibilityScores.sort((a, b) => b - a);

  // Take only the top 60% of responsibilities
  const top60PercentCount = Math.ceil(responsibilityScores.length * 0.6);
  const topScores = responsibilityScores.slice(0, top60PercentCount);

  // Calculate average of top 60%
  const averageScore =
    topScores.reduce((sum, score) => sum + score, 0) / topScores.length;

  return averageScore;
}

// Calculate composite final score using weighted combination of all signals
function calculateFinalScore(
  embeddingScore: number,
  skillScore: number,
  experienceScore: number,
  educationScore: number,
  qualityScore: number
): number {
  const finalScore =
    embeddingScore * FINAL_WEIGHTS.embedding +
    skillScore * FINAL_WEIGHTS.skills +
    experienceScore * FINAL_WEIGHTS.experience +
    educationScore * FINAL_WEIGHTS.education +
    qualityScore * FINAL_WEIGHTS.quality;

  return finalScore;
}

// Main execution
async function main() {
  const allResumes = await loadAllResumes(RESUME_DIR);
  const candidateScores: { resumeId: string; score: number }[] = [];
  console.log(allResumes.length, "resumes loaded");

  for (const resume of allResumes) {
    const qualityGateResult = passesQualityGate(resume, 70, 30);
    if (!qualityGateResult) {
      console.log(resume.basics.name.value, "failed quality gate");
      continue;
    }

    const industryExperienceResult = industryExperienceGate(resume,24);
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
          minMonthsExperience: 4,
          maxMonthsSinceLastUse: 24,
        },
        {
          name: "react",
          minMonthsExperience: 3,
          maxMonthsSinceLastUse: 24,
        },
      ],
      optional: [{ name: "nodejs" }, { name: "AWS" }],
      minOptionalRequired: 1,
      either: [
        [
          {
            name: "postgresql",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
          {
            name: "Azure",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
          {
            name: "Aws",
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

    // Define job responsibilities for semantic matching
    const RESPONSIBILITIES = [
      "Develop and maintain web applications using modern JavaScript frameworks (e.g., React, Next.js, Node.js)",
      "Build and consume RESTful APIs with proper validation, authentication, and error handling",
      "Work with databases (SQL or NoSQL) to design schemas, write queries, and manage data efficiently",
      "Write clean, readable, and maintainable code following best practices and team conventions",
      "Collaborate with designers and front-end developers to implement responsive and user-friendly interfaces",
      "Integrate third-party APIs and external services as required by the application",
      "Participate in debugging, testing, and fixing issues across the full stack",
      "Use version control (Git) and follow basic code review and collaboration workflows",
      "Optimize application performance and ensure reasonable scalability",
      "Assist in deploying applications and understanding basic CI/CD and environment configurations",
      "Document features, APIs, and implementation details when needed",
      "Collaborate with the team in planning, stand-ups, and general development discussions",
    ];

    // Required education (same as gate)
    const requiredDegrees = ["bachelors", "masters"];
    const requiredEducationFields = [
      "software",
      "computer science",
      "computer engineering",
      "information technology",
      "computer application",
    ];

    // Generate embeddings for job responsibilities
    const jdEmbeddings = await embedTexts(RESPONSIBILITIES);

    // Collect all relevant resume embeddings
    const resumeEmbeddings = collectResumeEmbeddings(resume);

    // Calculate semantic similarity score
    const embeddingSimilarityScore = calculateEmbeddingSimilarity(
      jdEmbeddings,
      resumeEmbeddings
    );

    // Calculate all normalized component scores
    const skillScore = skillScoreNormalized(resume?.skills ?? [], jdSkills);
    const experienceScore = industryExperienceScoreNormalized(resume);
    const educationScore = educationScoreNormalized(
      resume?.education ?? [],
      requiredDegrees,
      requiredEducationFields
    );
    const qualityScore = qualityScoreNormalized(resume);

    // Calculate final composite score
    const finalScore = calculateFinalScore(
      embeddingSimilarityScore,
      skillScore,
      experienceScore,
      educationScore,
      qualityScore
    );

    console.log(`\n=== ${resume.basics.name.value} ===`);
    console.log(
      "  Embedding:  ",
      embeddingSimilarityScore.toFixed(4),
      `(${(embeddingSimilarityScore * FINAL_WEIGHTS.embedding).toFixed(4)})`
    );
    console.log(
      "  Skills:     ",
      skillScore.toFixed(4),
      `(${(skillScore * FINAL_WEIGHTS.skills).toFixed(4)})`
    );
    console.log(
      "  Experience: ",
      experienceScore.toFixed(4),
      `(${(experienceScore * FINAL_WEIGHTS.experience).toFixed(4)})`
    );
    console.log(
      "  Education:  ",
      educationScore.toFixed(4),
      `(${(educationScore * FINAL_WEIGHTS.education).toFixed(4)})`
    );
    console.log(
      "  Quality:    ",
      qualityScore.toFixed(4),
      `(${(qualityScore * FINAL_WEIGHTS.quality).toFixed(4)})`
    );
    console.log("  FINAL SCORE:", finalScore.toFixed(4));

    // Store the candidate score
    candidateScores.push({
      resumeId: resume.basics.name.value,
      score: finalScore,
    });
  }

  // Sort by score descending
  candidateScores.sort((a, b) => b.score - a.score);

  console.log("\n=== FINAL RANKINGS ===");
  candidateScores.forEach((candidate, index) => {
    console.log(
      `${index + 1}. ${candidate.resumeId}: ${candidate.score.toFixed(4)}`
    );
  });
  console.log("\nFinal Scores:", candidateScores);
}

main().catch(console.error);
