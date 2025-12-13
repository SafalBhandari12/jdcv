import type { ResumeData } from "./extractDetailsFromResume.js";

export function buildResumeEmbeddingText(resumeData: ResumeData): string {
  const topSkills = resumeData.skills
    .sort((a, b) => b.validityScore - a.validityScore)
    .slice(0, 20)
    .map((s) => s.name)
    .join(", ");
  const experiences = resumeData.workExperience
    .slice(0, 3)
    .map((exp) => {
      const role = exp.normalizedTitle || exp.title.value;
      const summary =
        exp.description || exp.responsibilities.slice(0, 2).join(" ");
      return `${role},${summary}`;
    })
    .join("\n");
  const projects = resumeData.projects
    .slice(0, 3)
    .map((proj) => proj.description || proj.name)
    .join("\n");

  const education = resumeData.education
    .map((e) => `${e.normalizedDegree} in ${e.fieldOfStudy}`.trim())
    .join("\n");
  return `
Experience:
${experiences}

Projects:
${projects}
`.trim();
}
