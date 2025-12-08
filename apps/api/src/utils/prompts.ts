export const resumeParsingPrompt = (rawText: string): string => {
  return `

Return only valid JSON that exactly matches the schema below. Do NOT add or remove fields, explanations, comments, code fences, markdown formatting, or any text outside the JSON. The output must be a pure JSON object that can be directly parsed using JSON.parse(). If a value cannot be determined with reasonable confidence, use null. Dates must follow ISO 8601 (YYYY-MM-DD, YYYY-MM, or YYYY). For ongoing roles, set endDate to null. Trim all strings and deduplicate lists.

JSON Schema (must match exactly):
{
  "name": "string|null",
  "email": "string|null",
  "phone": "string|null",
  "summary": "string|null",
  "yearsOfExperience": "number|null",
  "experience": [
    {
      "title": "string|null",
      "company": "string|null",
      "startDate": "string|null",
      "endDate": "string|null",
      "description": "string|null",
      "yearsOfExperience": "number|null",
      "responsibilities": ["string"]
    }
  ],
  "education": [
    {
      "degree": "string|null",
      "institution": "string|null",
      "startDate": "string|null",
      "endDate": "string|null",
      "details": "string|null"
    }
  ],
  "projects": [
    {
      "name": "string|null",
      "description": "string|null",
      "techStack": ["string"],
      "responsibilities": ["string"]
    }
  ],
  "skills": ["string"]
}

Parsing & Normalization Rules:
1. Output must be ONLY the JSON object. No markdown. No backticks. No code blocks.
2. name: Proper case if confidently identifiable, else null.
3. email: Lowercase, must match email format, else null.
4. phone: Normalize to digits or E.164 (+<country><number>). If ambiguous, digits-only. If missing, null.
5. summary: Professional summary up to 800 characters or null.
6. experience:
   - Most recent first, max 10 items.
   - startDate/endDate use ISO formats.
   - Year-only → "YYYY".
   - Ongoing role → endDate = null.
   - description ≤ 800 chars.
   - responsibilities: Action-based tasks, ≤ 200 chars each, deduplicated.
7. education:
   - Most recent first, max 10.
   - Same ISO date rules.
   - degree: Extract the degree type and field. Format as "[Degree Type] in [Field]" (e.g., "Bachelor in Computer Science", "Master in Business Administration", "PhD in Engineering"). If only degree type is available (e.g., "BSc", "MBA"), format as the full form ("Bachelor of Science", "Master of Business Administration"). If field is available but degree type is unclear, use "Bachelor in [Field]" as default. Normalize variations.
   - details ≤ 500 chars or null.
8. projects:
   - Most relevant/recent first, max 10.
   - description ≤ 800 chars.
   - techStack: canonical names, deduplicated, max 50 items total.
   - responsibilities ≤ 200 chars each.
9. skills:
   - Deduplicated canonical names, max 100, ordered by relevance.
10. Ambiguity policy:
    - If conflicting data (e.g., two emails), choose most prominent. If unclear, null.
    - Never guess or fabricate.
11. Security:
    - Remove unsafe content like scripts.
12. Strictness:
    - If uncertain, return null for that field.

Input Wrapper:
===START===
${rawText}
===END===

Final Instruction:
Use this entire prompt as-is. Append the resume text inside the wrapper. Return only the JSON object that conforms exactly to the schema, with no markdown and no code fences.

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
