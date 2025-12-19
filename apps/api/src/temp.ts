import * as fs from "fs";
import * as path from "path";

// Directory containing parsed resume JSON files
const RESUME_DIR = "./resumes/parsed";

interface Resume {
  [key: string]: any;
}

interface FlexibleDate {
  isoDate?: string;
  isCurrent?: boolean;
}

interface WorkExperience {
  startDate?: FlexibleDate;
  endDate?: FlexibleDate;
}

interface Education {
  normalizedDegree?: string;
  fieldOfStudy?: string;
  endDate?: FlexibleDate;
}

interface Skill {
  normalizedName?: string;
  computedLevel?: string;
  metadata?: {
    totalMonthsExperience?: number;
    lastUsed?: string;
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

async function loadAllResumes(resumeDir: string): Promise<Resume[]> {
  const resumes: Resume[] = [];
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
  resume: Resume,
  minQuality: number = 60,
  maxSuspicion: number = 40
): boolean {
  const qualityScore = resume?.extractedResume?.analysis?.quality?.score ?? 0;
  const suspicionScore =
    resume?.extractedResume?.analysis?.suspicion?.score ?? 0;
  return qualityScore >= minQuality && suspicionScore <= maxSuspicion;
}

// I built this because the default iso date parser in TypeScript is too strict for our use case since dates can be in YYYY, YYYY-MM or YYYY-MM-DD format
function getDate(dateStr: string): Date | number {
  try {
    if (dateStr.length === 10) {
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
  resume: Resume,
  minIndustryExperience: number = 36
): boolean {
  let totalMonths = 0;
  const workExperiences: WorkExperience[] =
    resume?.extractedResume?.workExperience ?? [];
  for (const workExperience of workExperiences) {
    totalMonths += getTotalMonths(
      workExperience.startDate,
      workExperience.endDate
    );
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

// Main execution
async function main() {
  const allResumes = await loadAllResumes(RESUME_DIR);

  for (const resume of allResumes) {
    console.log(
      "Processing Resume:",
      resume?.extractedResume?.basics?.name ?? "Unknown"
    );
    const qualityGateResult = passesQualityGate(resume, 70, 30);
    console.log("Quality Gate Result:", qualityGateResult);

    const industryExperienceResult = industryExperienceGate(resume);
    console.log("Industry Experience Gate Result:", industryExperienceResult);

    const educationResult = educationGate(
      resume?.extractedResume?.education ?? [],
      ["bachelors", "masters"],
      ["software", "computer science", "computer engineering", "it"],
      false
    );
    console.log("Education Gate Result:", educationResult);

    const jdSkills: JDSkills = {
      must: [
        {
          name: "Docker",
          minLevel: "advanced",
          minMonthsExperience: 6,
          maxMonthsSinceLastUse: 24,
        },
        {
          name: "Kubernetes",
          minLevel: "intermediate",
          minMonthsExperience: 6,
          maxMonthsSinceLastUse: 24,
        }
      ],
      optional: [
        { name: "Docker", minLevel: "advanced" },
        { name: "AWS", minLevel: "expert" },
      ],
      minOptionalRequired: 1,
      either: [
        [
          {
            name: "GCP",
            minLevel: "intermediate",
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
        [
          {
            name: "Jenkins",
            minLevel: "intermediate",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
          {
            name: "GitLab CI",
            minLevel: "intermediate",
            minMonthsExperience: 6,
            maxMonthsSinceLastUse: 24,
          },
        ],
      ],
    };

    const skillGateResult = skillGate(
      allResumes[1]?.extractedResume?.skills ?? [],
      jdSkills
    );
    console.log("Skill Gate Result:", skillGateResult);
  }
}

main().catch(console.error);
