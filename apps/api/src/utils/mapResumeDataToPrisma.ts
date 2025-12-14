import { skillLevelMap, type ResumeData } from "./extractDetailsFromResume.js";
import { ExperienceType, type Prisma } from "@prisma/client";

/**
 * Map experience type from AI output to Prisma enum
 * Handles edge cases and unmapped values gracefully
 */
function mapExperienceType(type: string): ExperienceType {
  const typeMap: Record<string, ExperienceType> = {
    "full-time": ExperienceType.FULL_TIME,
    contract: ExperienceType.CONTRACT,
    internship: ExperienceType.INTERNSHIP,
  };

  return typeMap[type.toLowerCase()] ?? ExperienceType.OTHER;
}

/**
 * Maps extracted ResumeData from LLM output to a Prisma Resume.create() payload
 * This centralizes all data transformation logic and improves maintainability
 */
export function mapResumeDataToPrisma(
  parsedData: ResumeData,
  userId: string,
  imageKitUrl: string,
  originalFileName: string
): Prisma.ResumeCreateInput {
  const data = {
    user: { connect: { id: userId } },

    // -------------------------------------------------
    // BASIC FIELDS
    // -------------------------------------------------
    name: parsedData.basics?.name?.value ?? null,
    summary: parsedData.basics?.summary ?? null,

    primaryEmail: parsedData.basics?.email?.[0]?.value ?? null,
    primaryPhone: parsedData.basics?.phone?.[0]?.value ?? null,

    // -------------------------------------------------
    // FILE / PARSER METADATA
    // -------------------------------------------------
    originalFileName,
    imageKitUrl,
    fileHash: parsedData.metaData?.fileHash ?? null,
    parsedAt: parsedData.metaData?.parsedAt
      ? new Date(parsedData.metaData.parsedAt)
      : null,
    parserVersion: parsedData.metaData?.parserVersion ?? null,

    // -------------------------------------------------
    // DERIVED / QUERYABLE ANALYSIS FIELDS (IMPORTANT)
    // -------------------------------------------------
    qualityScore: parsedData.analysis?.quality.score ?? null,
    qualityLevel: parsedData.analysis?.quality.level ?? null,

    suspicionScore: parsedData.analysis?.suspicion.score ?? null,
    suspicionLevel: parsedData.analysis?.suspicion.level ?? null,

    hasTimelineGaps: parsedData.verification?.timeline.hasGaps ?? null,
    geoConsistency: parsedData.verification?.identity.geoConsistency ?? null,
    socialFootprintFound:
      parsedData.verification?.identity.socialFootprintFound ?? null,

    // -------------------------------------------------
    // RAW AI OUTPUT (JSON – casted correctly)
    // -------------------------------------------------
    ...(parsedData.analysis && {
      analysis: parsedData.analysis as unknown as Prisma.InputJsonValue,
    }),

    ...(parsedData.verification && {
      verification: parsedData.verification as unknown as Prisma.InputJsonValue,
    }),

    ...(parsedData.basics && {
      basics: parsedData.basics as unknown as Prisma.InputJsonValue,
    }),

    // -------------------------------------------------
    // EMAILS
    // -------------------------------------------------
    emails: {
      create: (parsedData.basics?.email || []).map((e) => ({
        email: e.value,
        rawText: e.rawText,
        confidence: e.confidence,
        pageIndex: e.pageIndex,
      })),
    },

    // -------------------------------------------------
    // PHONES
    // -------------------------------------------------
    phones: {
      create: (parsedData.basics?.phone || []).map((p) => ({
        phone: p.value,
        rawText: p.rawText,
        confidence: p.confidence,
        pageIndex: p.pageIndex,
      })),
    },

    // -------------------------------------------------
    // URLS
    // -------------------------------------------------
    urls: {
      create: (parsedData.basics?.urls || []).map((u) => ({
        type: u.type,
        url: u.url,
      })),
    },

    // -------------------------------------------------
    // SKILLS (simple list)
    // -------------------------------------------------
    skills: {
      createMany: {
        data: (parsedData.skills || []).map((s) => ({
          name: s.normalizedName || s.name,
        })),
        skipDuplicates: true,
      },
    },

    // -------------------------------------------------
    // SKILL PROFILES (rich metadata)
    // -------------------------------------------------
    skillProfiles: {
      create: (parsedData.skills || []).map((s) => ({
        name: s.name,
        normalizedName: s.normalizedName,
        category: s.category,
        validityScore: s.validityScore,

        ...(s.computedLevel && {
          computedLevel: skillLevelMap[s.computedLevel],
        }),

        ...(s.metadata && {
          metadata: s.metadata as Prisma.InputJsonValue,
        }),

        ...(s.metadata?.sources && {
          sources: s.metadata.sources as Prisma.InputJsonValue,
        }),
      })),
    },

    // -------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------
    experiences: {
      create: (parsedData.workExperience || []).map((exp) => ({
        title: exp.title?.value ?? null,
        titleRaw: exp.title?.rawText ?? null,
        normalizedTitle: exp.normalizedTitle ?? null,

        company: exp.company?.value ?? null,
        companyRaw: exp.company?.rawText ?? null,
        companyDomain: exp.companyDomain ?? null,

        location: exp.location,

        // Map experience type with fallback to OTHER for unmapped values
        type: exp.type ? mapExperienceType(exp.type) : null,

        startDateRaw: exp.startDate?.rawText ?? null,
        startDateIso: exp.startDate?.isoDate
          ? new Date(exp.startDate.isoDate)
          : null,
        startIsCurrent: exp.startDate?.isCurrent ?? false,

        endDateRaw: exp.endDate?.rawText ?? null,
        endDateIso: exp.endDate?.isoDate ? new Date(exp.endDate.isoDate) : null,
        endIsCurrent: exp.endDate?.isCurrent ?? false,

        description: exp.description ?? null,
        responsibilities: exp.responsibilities ?? [],
        skillsDetected: exp.skillsDetected ?? [],

        isVerified: exp.isVerified ?? false,
        verificationNotes: exp.verificationNotes ?? null,
        verificationConfidence: exp.verificationConfidence ?? null,
        verificationDate: exp.verificationDate
          ? new Date(exp.verificationDate)
          : null,
      })),
    },

    // -------------------------------------------------
    // EDUCATION
    // -------------------------------------------------
    education: {
      create: (parsedData.education || []).map((edu) => ({
        institution: edu.institution?.value ?? null,
        institutionRaw: edu.institution?.rawText ?? null,

        degree: edu.degree?.value ?? null,
        degreeRaw: edu.degree?.rawText ?? null,
        normalizedDegree: edu.normalizedDegree
          ? (edu.normalizedDegree.toUpperCase() as any)
          : null,

        fieldOfStudy: edu.fieldOfStudy ?? null,

        startDateRaw: edu.startDate?.rawText ?? null,
        startDateIso: edu.startDate?.isoDate
          ? new Date(edu.startDate.isoDate)
          : null,

        endDateRaw: edu.endDate?.rawText ?? null,
        endDateIso: edu.endDate?.isoDate ? new Date(edu.endDate.isoDate) : null,

        gpaScore: edu.gpa?.score ?? null,
        gpaScale: edu.gpa?.scale ?? null,
      })),
    },

    // -------------------------------------------------
    // PROJECTS
    // -------------------------------------------------
    projects: {
      create: (parsedData.projects || []).map((p) => ({
        name: p.name ?? null,
        description: p.description ?? null,
        url: p.url ?? null,
        techStack: p.skillsUsed ?? [],
        responsibilities: [],
      })),
    },

    // -------------------------------------------------
    // CERTIFICATIONS
    // -------------------------------------------------
    certifications: {
      create: (parsedData.certifications || []).map((c) => ({
        name: c.name ?? null,
        issuer: c.issuer ?? null,
        dateRaw: c.date?.rawText ?? null,
        dateIso: c.date?.isoDate ? new Date(c.date.isoDate) : null,
        doesExpire: c.doesExpire ?? false,
        verificationUrl: c.verificationUrl ?? null,
      })),
    },

    // -------------------------------------------------
    // LANGUAGES
    // -------------------------------------------------
    languages: {
      create: (parsedData.languages || []).map((l) => ({
        language: l.language,
        proficiency: l.proficiency,
      })),
    },
  };

  return data as Prisma.ResumeCreateInput;
}
