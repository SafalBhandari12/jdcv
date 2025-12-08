import z from "zod";

const uploadJobDescriptionSchema = z.object({
  yearsOfExperience: z.number().int().min(0).optional(),
  requirements: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  degrees: z.array(z.string()).optional(),
});

const updateJobDescriptionSchema = z.object({
  yearsOfExperience: z.number().int().min(0).optional(),
  requirements: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  degrees: z.array(z.string()).optional(),
});

export { uploadJobDescriptionSchema, updateJobDescriptionSchema };
