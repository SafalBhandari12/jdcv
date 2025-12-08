import prisma from "../config/prisma.js";

interface FilterCriteria {
  yearsOfExperience: number | null;
  degrees: string[];
  skills: string[];
}

interface CandidateMatch {
  resumeId: string;
  name: string | null;
  email: string | null;
  yearsOfExperience: number | null;
  skillMatches: number;
  matchDetails: {
    yoeMatch: boolean;
  };
}

/**
 * Filters candidates based on job description criteria
 * Returns candidates sorted by match score
 *
 * Edge cases handled:
 * - No YOE requirement in job description
 * - No degree requirements
 * - No skill requirements
 * - Candidates with missing information
 * - Case-insensitive skill matching
 */
export async function filterCandidates(
  jobDescriptionId: string,
  limit: number = 100
): Promise<CandidateMatch[]> {
  try {
    // Get job description with all required fields
    const jobDescription = await prisma.jobDescription.findUnique({
      where: { id: jobDescriptionId },
      include: {
        skills: true,
      },
    });

    if (!jobDescription) {
      throw new Error("Job description not found");
    }

    const jobYOE = jobDescription.yearsOfExperience;
    const jobDegrees = jobDescription.degrees || [];
    const jobSkills = (jobDescription.skills || []).map((s) =>
      s.name.toLowerCase()
    );

    // Normalize degrees to extract base degree type and field
    // Handles formats like "Bachelor in Computer Science", "Master in Business Administration"
    const normalizeDegreetype = (degree: string): string => {
      const lowerDegree = degree.toLowerCase();

      // Extract degree type
      let degreeType = "";
      if (lowerDegree.includes("phd") || lowerDegree.includes("doctorate")) {
        degreeType = "phd";
      } else if (lowerDegree.includes("master") || lowerDegree.includes("m.")) {
        degreeType = "master";
      } else if (
        lowerDegree.includes("bachelor") ||
        lowerDegree.includes("b.")
      ) {
        degreeType = "bachelor";
      } else {
        return lowerDegree;
      }

      // Extract field if available (after "in" or after degree type)
      const field = degree
        .toLowerCase()
        .split(" in ")
        .slice(1)
        .join(" in ")
        .split("–")
        .join(" ")
        .trim();

      // If field exists, return "degreeType in field", otherwise just degreeType
      if (field && field.length > 0) {
        return `${degreeType} in ${field}`;
      }
      return degreeType;
    };

    const normalizedJobDegrees = jobDegrees.map(normalizeDegreetype);

    // Handle case where no criteria is set
    if (!jobYOE && jobDegrees.length === 0 && jobSkills.length === 0) {
      return [];
    }

    // Build WHERE clause to filter at database level
    const whereClause: any = {};

    // Filter by YOE if specified
    if (jobYOE !== null && jobYOE !== undefined) {
      whereClause.yearsOfExperience = {
        gte: jobYOE,
      };
    }
    console.log(normalizedJobDegrees);

    // Filter by degrees if specified (resume must have at least one matching education)
    if (normalizedJobDegrees.length > 0) {
      whereClause.education = {
        some: {
          degree: {
            in: normalizedJobDegrees,
            mode: "insensitive",
          },
        },
      };
    }

    // Filter by skills if specified (resume must have at least one matching skill)
    if (jobSkills.length > 0) {
      whereClause.skills = {
        some: {
          name: {
            in: jobSkills,
            mode: "insensitive",
          },
        },
      };
    }

    // Get filtered resumes with their associated data
    // Fetch more than limit to allow for post-processing filtering, then slice at the end
    const resumes = await prisma.resume.findMany({
      where: whereClause,
      include: {
        skills: true,
      },
      take: limit * 2, // Fetch more to account for filtering during processing
    });

    const matches: CandidateMatch[] = [];

    for (const resume of resumes) {
      // Check Years of Experience match
      const resumeYOE = resume.yearsOfExperience || 0;
      const yoeMatch =
        jobYOE === null || jobYOE === undefined || resumeYOE >= jobYOE;

      // Check Skill match
      const resumeSkills = (resume.skills || []).map((s) =>
        s.name.toLowerCase()
      );
      let skillMatches = 0;

      if (jobSkills.length > 0) {
        skillMatches = jobSkills.filter((jobSkill) =>
          resumeSkills.some(
            (resumeSkill) =>
              resumeSkill.includes(jobSkill) || jobSkill.includes(resumeSkill)
          )
        ).length;
      }

      // Include candidates who have partial skill match
      if (skillMatches > 0) {
        matches.push({
          resumeId: resume.id,
          name: resume.name || null,
          email: resume.email || null,
          yearsOfExperience: resume.yearsOfExperience || null,
          skillMatches,
          matchDetails: {
            yoeMatch,
          },
        });
      }
    }

    // Sort by skill matches descending
    matches.sort((a, b) => b.skillMatches - a.skillMatches);

    // Return only the limited number of candidates
    return matches.slice(0, limit);
  } catch (error: any) {
    console.error("Error filtering candidates:", error);
    throw new Error(`Failed to filter candidates: ${error.message}`);
  }
}
