import { Router, type Request, type Response } from "express";
import { signUpSchema, loginSchema } from "./auth.validation.js";
import { supabase } from "../config/supabase.js";
import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/hashPassword.js";
import { formatZodErrors } from "../utils/formatZodErrors.js";

const authRouter = Router();

authRouter.post("/signUp", async (req: Request, res: Response) => {
  try {
    const schema = signUpSchema.safeParse(req.body);
    if (!schema.success) {
      const errors = formatZodErrors(schema.error);
      return res.status(400).json({ msg: "Invalid input", errors });
    }
    const { email, password } = schema.data;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return res.status(error.status || 400).json({
        msg: error.message || "Sign up failed",
        error: error.message,
      });
    }
    const hashedPassword = await hashPassword(password);
    const alreadyExist = await prisma.user.findUnique({
      where: { email: data.user?.email! },
    });
    if (!alreadyExist) {
      await prisma.user.create({
        data: {
          id: data.user?.id!,
          email: data.user?.email!,
          password: hashedPassword,
        },
      });
    }
    return res
      .status(201)
      .json({ msg: `Email is sent to ${data.user?.email}` });
  } catch (error: any) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
});

authRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const schema = loginSchema.safeParse(req.body);
    if (!schema.success) {
      const errors = formatZodErrors(schema.error);
      return res.status(400).json({ msg: "Invalid input", errors });
    }
    const { email, password } = schema.data;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return res.status(error.status || 400).json({
        msg: error.message || "Login failed",
        error: error.message,
      });
    }
    return res.status(200).json({
      msg: "Login successful",
      user: data.user,
      session: data.session,
    });
  } catch (error: any) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
});

export default authRouter;
