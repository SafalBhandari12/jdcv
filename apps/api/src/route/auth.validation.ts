import z from "zod";

const signUpSchema = z
  .object({
    email: z.email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(100),
});

export { signUpSchema, loginSchema };
