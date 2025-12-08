import z from "zod";

const updateResumeSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).max(20).optional(),
  summary: z.string().max(1000).optional(),
  skills: z.array(z.string()).optional(),
  yearsOfExperience: z.number().int().min(0).optional(),
});

const experienceSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  company: z.string().min(1).max(200).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().max(2000).optional(),
  yearsOfExperience: z.number().int().min(0).optional(),
  responsibilities: z.array(z.string()).optional(),
});

const educationSchema = z.object({
  school: z.string().min(1).max(200).optional(),
  degree: z.string().min(1).max(200).optional(),
  fieldOfStudy: z.string().min(1).max(200).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().max(2000).optional(),
});

const projectSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(2000).optional(),
  technologies: z.array(z.string()).optional(),
  link: z.string().url().optional(),
});

export { updateResumeSchema, experienceSchema, educationSchema, projectSchema };
