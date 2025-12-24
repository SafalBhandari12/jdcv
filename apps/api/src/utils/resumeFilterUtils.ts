import type { ParsedResume } from "../types/resume.js";
import { embedTexts } from "../resumePipeline.js";

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

export interface SkillRequirement {
  name: string;
  minLevel?: string;
  minMonthsExperience?: number;
  maxMonthsSinceLastUse?: number;
  minMonths?: number;
  recentWithinMonths?: number;
  skills?: string[];
}

export interface JDSkills {
  must?: SkillRequirement[];
  optional?: SkillRequirement[];
  minOptionalRequired?: number;
  either?: SkillRequirement[][];
}

export interface FilterCriteria {
  minQuality?: number;
  maxSuspicion?: number;
  minIndustryExperienceMonths?: number;
  requiredDegrees?: string[];
  requiredEducationFields?: string[];
  requireCurrentEducation?: boolean;
  skills?: JDSkills;
  responsibilities?: string[];
}

export interface CandidateScore {
  resumeId: string;
  name: string;
  score: number;
  breakdown: {
    embedding: number;
    skills: number;
    experience: number;
    education: number;
    quality: number;
  };
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

const SKILL_LEVEL_RANK: { [key: string]: number } = {
  novice: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

const FINAL_WEIGHTS = {
  embedding: 0.4,
  skills: 0.35,
  experience: 0.15,
  education: 0.05,
  quality: 0.05,
};

function getDate(dateStr: string): Date | number {
  try {
    if (dateStr.includes("T")) {
      return new Date(dateStr);
    } else if (dateStr.length === 10) {
      return new Date(dateStr);
    } else if (dateStr.length === 7) {
      const [year, month] = dateStr.split("-");
      if (year && month) {
        return new Date(parseInt(year), parseInt(month) - 1);
      }
    } else if (dateStr.length === 4) {
      return new Date(parseInt(dateStr), 0);
    }
  } catch (error) {
    console.error("Error parsing date:", error);
  }
  return 0;
}

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

export function passesQualityGate(
  resume: ParsedResume,
  minQuality: number = 60,
  maxSuspicion: number = 40
): boolean {
  const qualityScore = resume?.analysis?.quality?.score ?? 0;
  const suspicionScore = resume?.analysis?.suspicion?.score ?? 0;
  return qualityScore >= minQuality && suspicionScore <= maxSuspicion;
}

export function qualityScoreNormalized(
  resume: ParsedResume,
  idealQuality = 90
): number {
  const quality = resume?.analysis?.quality?.score ?? 0;
  if (quality <= 0) return 0;
  return Math.min(Math.log1p(quality) / Math.log1p(idealQuality), 1);
}

export function industryExperienceGate(
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

export function industryExperienceScoreNormalized(
  resume: ParsedResume,
  idealMonths = 120
): number {
  let totalMonths = 0;
  for (const we of resume.workExperience ?? []) {
    totalMonths += getTotalMonths(we.startDate, we.endDate);
  }
  if (totalMonths <= 0) return 0;
  return Math.min(Math.log1p(totalMonths) / Math.log1p(idealMonths), 1);
}

export function educationGate(
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

export function educationScoreNormalized(
  candidateEducation: Education[],
  requiredDegrees: string[],
  requiredFields?: string[],
  idealEducationValue = 58
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

    let fieldMatched = false;
    if (requiredFields && requiredFields.length > 0) {
      for (const rf of requiredFields) {
        if (rf && field.includes(rf.toLowerCase())) {
          fieldMatched = true;
          break;
        }
      }
    } else {
      fieldMatched = true;
    }

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

  const degreeComponent = bestDegreeRank * 10;
  const fieldBonus = bestFieldMatched ? 5 : 0;
  const currentBonus = bestIsCurrent ? 3 : 0;
  const requiredDegreeBonus = meetsRequiredDegree ? 8 : 0;

  const rawValue =
    degreeComponent + fieldBonus + currentBonus + requiredDegreeBonus;

  const score = Math.min(
    Math.log1p(rawValue) / Math.log1p(idealEducationValue),
    1
  );

  return score;
}

function matchSkill(
  skill: Skill,
  req: SkillRequirement,
  checkRecent: boolean = false
): boolean {
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

export function skillGate(
  candidateSkills: Skill[],
  jdSkills: JDSkills
): boolean {
  const lookUp: { [key: string]: Skill } = {};
  for (const skill of candidateSkills) {
    const normalizedName = (skill?.normalizedName ?? "").toLowerCase();
    lookUp[normalizedName] = skill;
  }

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

export function skillScoreNormalized(
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

  for (const req of jdSkills.must ?? []) {
    const skill = lookup[req.name.toLowerCase()];
    if (!skill) continue;

    const levelRank = SKILL_LEVEL_RANK[skill.computedLevel ?? "novice"] ?? 1;
    const months = skill.metadata?.totalMonthsExperience ?? 0;

    const levelDelta = Math.max(levelRank - INTERMEDIATE_RANK, 0);
    rawScore += levelDelta * 12;
    rawScore += Math.min(Math.log1p(months) * 2, 16);
  }

  for (const req of jdSkills.optional ?? []) {
    const skill = lookup[req.name.toLowerCase()];
    if (!skill) continue;

    const levelRank = SKILL_LEVEL_RANK[skill.computedLevel ?? "novice"] ?? 1;
    const months = skill.metadata?.totalMonthsExperience ?? 0;

    const levelDelta = Math.max(levelRank - INTERMEDIATE_RANK, 0);
    rawScore += levelDelta * 8;
    rawScore += Math.min(Math.log1p(months), 10);
  }

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

  return Math.min(Math.log1p(rawScore) / Math.log1p(idealSkillValue), 1);
}

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

function collectResumeEmbeddings(resume: ParsedResume): number[][] {
  const embeddings: number[][] = [];

  const workExperienceEmbeddings =
    resume.workExperience
      ?.flatMap((we) => we.responsibilitiesEmbeddings || [])
      .filter((e) => e && e.length > 0) ?? [];
  embeddings.push(...workExperienceEmbeddings);

  const projectEmbeddings =
    resume.projects
      ?.map((p) => p.descriptionEmbedding)
      .filter(
        (e): e is number[] => e !== null && e !== undefined && e.length > 0
      ) ?? [];
  embeddings.push(...projectEmbeddings);

  if (
    resume.basics.summaryEmbedding &&
    resume.basics.summaryEmbedding.length > 0
  ) {
    embeddings.push(resume.basics.summaryEmbedding);
  }

  return embeddings;
}

function calculateEmbeddingSimilarity(
  jdEmbeddings: number[][],
  resumeEmbeddings: number[][]
): number {
  if (resumeEmbeddings.length === 0 || jdEmbeddings.length === 0) {
    return 0;
  }

  const responsibilityScores: number[] = [];

  for (const jdEmbedding of jdEmbeddings) {
    const similarities = cosineSimilarityBatchNormalized(
      jdEmbedding,
      resumeEmbeddings
    );
    const maxSimilarity = Math.max(...similarities, 0);
    responsibilityScores.push(maxSimilarity);
  }

  responsibilityScores.sort((a, b) => b - a);

  const top60PercentCount = Math.ceil(responsibilityScores.length * 0.6);
  const topScores = responsibilityScores.slice(0, top60PercentCount);

  const averageScore =
    topScores.reduce((sum, score) => sum + score, 0) / topScores.length;

  return averageScore;
}

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

export async function filterAndScoreResumes(
  resumes: ParsedResume[],
  criteria: FilterCriteria
): Promise<CandidateScore[]> {
  const candidateScores: CandidateScore[] = [];

  // Generate embeddings for job responsibilities if provided
  let jdEmbeddings: number[][] = [];
  if (criteria.responsibilities && criteria.responsibilities.length > 0) {
    jdEmbeddings = await embedTexts(criteria.responsibilities);
  }

  for (const resume of resumes) {
    // Apply quality gate
    if (
      criteria.minQuality !== undefined ||
      criteria.maxSuspicion !== undefined
    ) {
      const qualityGateResult = passesQualityGate(
        resume,
        criteria.minQuality ?? 60,
        criteria.maxSuspicion ?? 40
      );
      if (!qualityGateResult) {
        continue;
      }
    }

    // Apply industry experience gate
    if (criteria.minIndustryExperienceMonths !== undefined) {
      const industryExperienceResult = industryExperienceGate(
        resume,
        criteria.minIndustryExperienceMonths
      );
      if (!industryExperienceResult) {
        continue;
      }
    }

    // Apply education gate
    if (criteria.requiredDegrees && criteria.requiredDegrees.length > 0) {
      const educationResult = educationGate(
        resume?.education ?? [],
        criteria.requiredDegrees,
        criteria.requiredEducationFields,
        criteria.requireCurrentEducation ?? false
      );
      if (!educationResult) {
        continue;
      }
    }

    // Apply skill gate
    if (criteria.skills) {
      const skillGateResult = skillGate(resume?.skills ?? [], criteria.skills);
      if (!skillGateResult) {
        continue;
      }
    }

    // Calculate scores
    const embeddingSimilarityScore =
      jdEmbeddings.length > 0
        ? calculateEmbeddingSimilarity(
            jdEmbeddings,
            collectResumeEmbeddings(resume)
          )
        : 0;

    const skillScore = criteria.skills
      ? skillScoreNormalized(resume?.skills ?? [], criteria.skills)
      : 0;

    const experienceScore = industryExperienceScoreNormalized(resume);

    const educationScore =
      criteria.requiredDegrees && criteria.requiredDegrees.length > 0
        ? educationScoreNormalized(
            resume?.education ?? [],
            criteria.requiredDegrees,
            criteria.requiredEducationFields
          )
        : 0;

    const qualityScore = qualityScoreNormalized(resume);

    const finalScore = calculateFinalScore(
      embeddingSimilarityScore,
      skillScore,
      experienceScore,
      educationScore,
      qualityScore
    );

    candidateScores.push({
      resumeId: resume.metaData?.fileHash ?? "unknown",
      name: resume.basics.name.value,
      score: finalScore,
      breakdown: {
        embedding: embeddingSimilarityScore,
        skills: skillScore,
        experience: experienceScore,
        education: educationScore,
        quality: qualityScore,
      },
    });
  }

  // Sort by score descending
  candidateScores.sort((a, b) => b.score - a.score);

  return candidateScores;
}
