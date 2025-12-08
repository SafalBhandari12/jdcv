import type { NextFunction, Request, Response } from "express";
import { supabase } from "../config/supabase.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "No token provided" });
    }

    const token = authHeader.slice(7);
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({ msg: "Invalid or expired token" });
    }

    req.user = data.user;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authentication failed" });
  }
};
