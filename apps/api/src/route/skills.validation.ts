import z from "zod";

const skillSearchSchema = z.object({
  id: z
    .string()
    .min(0)
    .max(100)
    .regex(/^[a-zA-Z0-9\s\-_+#.]*$/, "Search term contains invalid characters"),
});

export { skillSearchSchema };
