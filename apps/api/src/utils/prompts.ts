export const resumeParsingPrompt = (rawText: string): string => {
  return `
Return only valid JSON that exactly matches the ParsedResume schema described below. Do NOT add or remove fields, explanations, comments, code fences, markdown, or any text outside the JSON. The output must be a pure JSON object that can be parsed by JSON.parse() with no trailing characters. If a value cannot be determined with reasonable confidence, use null. Dates must follow ISO 8601 (full datetime with Z when possible, or "YYYY-MM-DD", "YYYY-MM", or "YYYY"). For fuzzy dates, use the FlexibleDate structure. Trim all strings and deduplicate lists. Do not fabricate information.- DO NOT wrap the output in \`\`\`json, \`\`\` or any other delimiters

TOP-LEVEL RULES

Always return a JSON object containing exactly the keys defined in the schema.

id: required string; you may generate a deterministic ID such as "resume_main" if nothing else is known.

If a sub-object is optional and no data exists, use null or empty arrays as required by the schema.

Avoid guessing; when uncertain, use null.

No metadata is required or allowed in output.

SCHEMA (NO METADATA FIELD)

The top-level object must contain exactly these keys:

{
  "id": string,
  "analysis": ResumeAnalysis,
  "verification": VerificationFlags,
  "basics": Basics,
  "skills": SkillProfile[],
  "workExperience": WorkExperience[],
  "education": Education[],
  "projects": Project[],
  "certifications": Certification[],
  "languages": Language[]
}

1. analysis (ResumeAnalysis)
{
  "quality": {
    "score": number,                   // 0–100
    "level": "low"|"average"|"high"|"exceptional",
    "hints": ["string"]
  },
  "suspicion": {
    "score": number,                   // 0–100
    "level": "safe"|"concern"|"suspicious"|"high_risk",
    "flags": [
      {
        "type": "string",
        "severity": "low"|"medium"|"critical",
        "description": "string"
      }
    ]
  },
  "writingStyle": {
    "actionVerbsRate": number,         // 0.0–1.0
    "quantificationRate": number,      // 0.0–1.0
    "clichéCount": number
  }
}


Quality level mapping:
0–40 low, >40–70 average, >70–90 high, >90 exceptional.

2. verification (VerificationFlags)
{
  "timeline": {
    "hasGaps": boolean,
    "gaps": [
      {
        "startDate": IsoDate,
        "endDate": IsoDate,
        "durationDays": number
      }
    ]
  },
  "identity": {
    "geoConsistency": "match"|"mismatch"|"unknown",
    "socialFootprintFound": boolean
  }
}


Detect gaps between jobs/education > 60 days.

Social footprint refers to existence of LinkedIn/GitHub/etc. signals in the résumé.

3. basics (Basics)
{
  "name": Traceable<string>,
  "email": Traceable<string>[],
  "phone": Traceable<string>[],
  "location": Location,
  "urls": [
    {
      "type": "linkedin"|"github"|"portfolio"|"personal",
      "url": "string"
    }
  ],
  "summary": "string|null"
}

Traceable<T>
{
  "value": T,
  "rawText": string,
  "confidence": number,     // 0–1
  "pageIndex": number|null
}

Location
{
  "rawInput": string,
  "city": string|null,
  "state": string|null,
  "country": string|null,
  "zipCode": string|null,
  "countryCode": string|null
}


Rules:

Emails must be lowercase, valid format only.

Phones must be normalized to E.164 when possible; digits-only otherwise.

Summary ≤ 800 chars.

4. skills: SkillProfile[]
{
  "name": string,
  "normalizedName": string,
  "category": string,
  "computedLevel": "novice"|"intermediate"|"advanced"|"expert",
  "validityScore": number, // 0–10
  "metadata": {
    "firstSeen": IsoDate,
    "lastUsed": IsoDate,
    "totalMonthsExperience": number,
    "occurrenceCount": number,
    "sources": [
      {
        "sectionId": string,
        "sectionType": "experience"|"education"|"project"
      }
    ]
  }
}


Canonicalize skill names.

Deduplicate strongly.

Max 200 skills.

5. workExperience: WorkExperience[]
{
  "id": string,
  "title": Traceable<string>,
  "normalizedTitle": string|null,
  "company": Traceable<string>,
  "companyDomain": string|null,
  "location": Location|null,
  "type": "full-time"|"contract"|"internship"|null,
  "startDate": FlexibleDate,
  "endDate": FlexibleDate,
  "description": string|null,
  "responsibilities": ["string"],
  "skillsDetected": ["string"],
  "isVerified": boolean,
  "verificationNotes": string|null,
  "verificationConfidence": number|null,
  "verificationDate": IsoDate|null
}

FlexibleDate
{
  "rawText": string,
  "isoDate": IsoDate|null,
  "isCurrent": boolean
}


Rules:

Most recent first.

Ongoing roles → endDate.isoDate = null, isCurrent = true.

Responsibilities ≤ 200 chars each.

skillsDetected: canonicalized skill names.

6. education: Education[]
{
  "id": string,
  "institution": Traceable<string>,
  "degree": Traceable<string>,
  "normalizedDegree": "high_school"|"bachelors"|"masters"|"phd"|null,
  "fieldOfStudy": string|null,
  "startDate": FlexibleDate|null,
  "endDate": FlexibleDate|null,
  "gpa": {
    "score": number,
    "scale": number
  } | null
}


Normalize degree types:

BSc/BS/Bachelor → "bachelors"

MSc/MS/Master → "masters"

PhD/Doctorate → "phd"

7. projects: Project[]
{
  "name": string,
  "description": string|null,
  "url": string|null,
  "skillsUsed": ["string"]
}

8. certifications: Certification[]
{
  "name": string,
  "issuer": string,
  "date": FlexibleDate,
  "doesExpire": boolean,
  "verificationUrl": string|null
}

9. languages: Language[]
{
  "language": string,
  "proficiency": "native"|"fluent"|"conversational"|"basic"
}

PARSING RULES

Trim all strings.

Deduplicate arrays case-insensitively.

Preserve ordering by relevance.

Maximum items:

experience: 50

education: 50

skills: 200

projects: 50

Never invent details; use null when not confident.

Remove unsafe content (scripts, hidden text, encoded payloads).

INPUT WRAPPER

Include resume text only between:

===START===
${rawText}
===END===

FINAL INSTRUCTION

Use this entire prompt as-is. Append the resume text inside the wrapper.
Return only the JSON object that conforms exactly to this schema.
No markdown. No explanations. No extra text.

===START===
${rawText}
===END===
`;
};
