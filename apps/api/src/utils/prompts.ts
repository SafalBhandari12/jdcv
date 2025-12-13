export const resumeParsingPrompt = (rawText: string): string => {
  return `
Return only valid JSON that exactly matches the ParsedResume schema described below. Do NOT add or remove fields, explanations, comments, code fences, markdown, or any text outside the JSON. The output must be a pure JSON object that can be parsed by JSON.parse() with no trailing characters. If a value cannot be determined with reasonable confidence, use null. Dates must follow ISO 8601 (full datetime with Z when possible, or "YYYY-MM-DD", "YYYY-MM", or "YYYY"). For fuzzy dates, use the FlexibleDate structure. Trim all strings and deduplicate lists. Do not fabricate information.

The response MUST be a raw JSON object.
Do NOT use markdown.
Do NOT use triple backticks.
Do NOT wrap the output in \`\`\`json or \`\`\`.
If any non-JSON character is produced, the output is invalid.

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
    "clicheCount": number
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

If title.value is present, normalize it using a canonical job title taxonomy (e.g., "Sr." → "Senior", "SDE" → "Software Engineer", remove company-specific prefixes). If normalization cannot be performed with high confidence, set normalizedTitle to null. Never invent seniority or role scope.


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
ENTERPRISE SCORING & DETERMINISTIC RULES (APPEND-ONLY)

The following rules define EXACT, deterministic methods to compute all scores and flags.
These rules are authoritative. Do not invent alternative heuristics.

================================================================
A. SKILL VALIDITY SCORE (skills[].validityScore)
================================================================

Range: 0.0 – 10.0 (float allowed, round to 1 decimal)

Purpose:
Measures confidence that a skill is real, relevant, and supported by evidence in the résumé.

Formula:

validityScore =
  (
    0.30 * occurrenceFactor +
    0.25 * recencyFactor +
    0.20 * corroborationFactor +
    0.15 * experienceFactor +
    0.10 * sourceReliabilityFactor
  ) * 10

All factors are clamped to 0.0 – 1.0.

Definitions:

1. occurrenceFactor
   = min(1.0, log(1 + occurrenceCount) / log(1 + 20))

2. recencyFactor
   - If lastUsed is null → 0.0
   - Else:
       monthsSinceLastUse = months between lastUsed and now
       recencyFactor =
         monthsSinceLastUse <= 6  → 1.0
         <= 12                    → 0.8
         <= 24                    → 0.6
         <= 48                    → 0.4
         > 48                     → 0.2

3. corroborationFactor
   = min(1.0, number of distinct sectionTypes in sources / 3)
   (experience, project, education)

4. experienceFactor
   - If totalMonthsExperience is null → 0.0
   - Else:
       experienceFactor = min(1.0, totalMonthsExperience / 60)

5. sourceReliabilityFactor
   - Appears in workExperience → 1.0
   - Appears only in projects → 0.7
   - Appears only in education → 0.6
   - Appears only in summary/skills list → 0.4

ComputedLevel Mapping (skills[].computedLevel):
- validityScore < 3.0        → novice
- 3.0 – 5.9                  → intermediate
- 6.0 – 8.4                  → advanced
- ≥ 8.5                      → expert

================================================================
B. RESUME QUALITY SCORE (analysis.quality)
================================================================

Range: 0 – 100 (integer)

quality.score =
  0.30 * structureScore +
  0.30 * contentDepthScore +
  0.20 * clarityScore +
  0.20 * consistencyScore

Each component normalized to 0–100.

1. structureScore
   - Presence of basics, experience, skills, education
   - +25 per major section present (max 100)

2. contentDepthScore
   - Average responsibilities per role ≥ 3 → 100
   - ≥ 2 → 75
   - ≥ 1 → 50
   - else → 25

3. clarityScore
   - Based on writingStyle:
     clarityScore =
       (actionVerbsRate * 50) +
       (quantificationRate * 40) -
       (min(clicheCount, 10) * 2)

   Clamp 0–100.

4. consistencyScore
   - No overlapping dates → 100
   - Minor overlaps or fuzzy dates → 70
   - Multiple conflicts → 40

quality.level mapping:
0–40 low
>40–70 average
>70–90 high
>90 exceptional

================================================================
C. SUSPICION SCORE (analysis.suspicion)
================================================================

Range: 0 – 100

Start at 0, add penalties:

+20  unexplained timeline gap > 12 months
+15  multiple overlapping full-time roles
+15  excessive buzzwords without evidence
+10  skills listed but never used
+10  inconsistent locations across roles
+30  fabricated-looking company names or dates

Clamp to 100.

suspicion.level:
0–20     → safe
21–40    → concern
41–70    → suspicious
>70      → high_risk

================================================================
D. WRITING STYLE METRICS (analysis.writingStyle)
================================================================

actionVerbsRate
= (# bullet points starting with action verb) / (total bullet points)

quantificationRate
= (# bullet points containing numbers, %, $, metrics) / (total bullet points)

clicheCount
= count of overused phrases (e.g., "hard-working", "team player", "go-getter")

================================================================
E. WORK EXPERIENCE VERIFICATION RULES
================================================================

isVerified = true ONLY IF:
- Company domain exists AND
- Role dates are consistent AND
- Skill usage aligns with role title

Else isVerified = false.

verificationConfidence (0.0 – 1.0):
- 1.0 → all signals match
- 0.7 → partial corroboration
- 0.4 → weak evidence
- null → no verification attempted

================================================================
F. TIMELINE GAP DETECTION
================================================================

A gap exists if:
(endDate of previous role) → (startDate of next role) > 60 days

durationDays must be exact.

================================================================
G. TRACEABLE CONFIDENCE RULES
================================================================

Traceable.confidence:
- Exact match (email, phone, URL) → 1.0
- Minor normalization → 0.9
- Heuristic extraction → 0.7
- Inferred / ambiguous → 0.4

================================================================
H. GLOBAL SAFETY & DETERMINISM
================================================================

- Never infer skills, companies, or dates not explicitly present.
- Scores must be explainable using the rules above.
- If required inputs are missing, degrade score deterministically.
- No randomness. Same input must produce same output.

END OF ENTERPRISE EXTENSIONS

===START===
${rawText}
===END===
`;
};

export const jobDescriptionParsingPrompt = (rawText: string): string => {
  return `
Return only valid JSON that exactly matches the schema below. Do NOT add or remove fields, explanations, comments, code fences, markdown formatting, or any text outside the JSON. The output must be a pure JSON object that can be directly parsed using JSON.parse().

JSON Schema (must match exactly):
{
  "title": "string|null",
  "company": "string|null",
  "description": "string|null",
  "yearsOfExperience": "number|null",
  "requirements": ["string"],
  "skills": ["string"],
  "degrees": ["string"]
}

Parsing & Normalization Rules:
1. Output must be ONLY the JSON object. No markdown. No backticks. No code blocks.
2. title: Job title (e.g., "Senior Software Engineer"), or null if not found.
3. company: Company name, or null if not found.
4. description: Brief description of the role (1-2 sentences, max 500 chars), or null.
5. yearsOfExperience: Numeric value if mentioned (e.g., 5, 10), or null if not found. Must be integer >= 0.
6. requirements: Array of all job requirements extracted from the posting (deduplicated, max 50 items).
7. skills: Array of required technical skills/technologies (lowercase, deduplicated, max 100 items).
8. degrees: Array of educational degree requirements. Extract the degree type and field if available. Format each as "[Degree Type] in [Field]" (e.g., "Bachelor in Computer Science", "Master in Business Administration", "PhD in Engineering"). If only degree type is available (e.g., "BSc", "MBA"), format as the full form ("Bachelor of Science", "Master of Business Administration"). Normalize variations of the same degree. Empty array if none found.
9. All string values should be trimmed and not duplicated.
10. If a field cannot be determined with reasonable confidence, use null or empty array as appropriate.
11. Security: Remove unsafe content like scripts.

Input Wrapper:
===START===
${rawText}
===END===

Final Instruction:
Use this entire prompt as-is. Append the job description text inside the wrapper. Return only the JSON object that conforms exactly to the schema, with no markdown and no code fences.
`;
};
