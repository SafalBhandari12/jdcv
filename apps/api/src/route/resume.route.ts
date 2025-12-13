import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import upload from "../config/multer.js";
import parsePdf from "../utils/parsePdf.js";
import extractDetailsFromResume from "../utils/extractDetailsFromResume.js";
import { getEmbedding } from "../utils/getEmbedding.js";
import fs from "fs";
import { authMiddleware } from "../middleware/auth.js";
import ImageKit from "../config/imagekit.js";
import { randomUUID } from "crypto";
import prisma from "../config/prisma.js";
import {
  updateResumeSchema,
  experienceSchema,
  educationSchema,
  projectSchema,
} from "./resume.validation.js";
import { formatZodErrors } from "../utils/formatZodErrors.js";
import { upsertVectors } from "../config/pinecone.js";
import getMetaDataFromResume from "../utils/getMetaDataFromResume.js";

const resumeRouter = Router();

resumeRouter.post(
  "/upload",
  authMiddleware,
  upload.single("resume"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ msg: "Please upload a PDF file" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      // Parse PDF
      const text = await parsePdf(req.file.buffer);

      // Upload to ImageKit
      const imageKitResult = await ImageKit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname + "-" + randomUUID(),
        folder: "/resumes",
      });

      // Extract metadata
      const metaData = getMetaDataFromResume(text, req.file.originalname);
      console.log("Extracted Metadata:", metaData);

      // Extract details using LLM
      const parsedData = await extractDetailsFromResume(text);
      console.log("parsed data from resume", parsedData);

      parsedData.metadata = metaData;

      // Write to local file for reference
      fs.writeFileSync(
        "resume-output.json",
        JSON.stringify(parsedData, null, 2)
      );

      // Combine all responsibilities from experience records
      const allResponsibilities = (parsedData.experience || [])
        .flatMap((exp: any) => exp.responsibilities || [])
        .join(", ");

      const resEmbedding = await getEmbedding(allResponsibilities);


      // Save to database
      const resume = await prisma.resume.create({
        data: {
          userId: req.user.id,
          name: parsedData.name,
          email: parsedData.email,
          phone: parsedData.phone,
          summary: parsedData.summary,
          yearsOfExperience: parsedData.yearsOfExperience,
          imageKitUrl: imageKitResult.url,
          originalFileName: req.file.originalname,
          skills: {
            createMany: {
              data: (parsedData.skills || []).map((skill: string) => ({
                name: skill.trim().toLowerCase(),
              })),
              skipDuplicates: true,
            },
          },
          experience: {
            createMany: {
              data: (parsedData.experience || []).map((exp: any) => ({
                title: exp.title,
                company: exp.company,
                startDate: exp.startDate,
                endDate: exp.endDate,
                description: exp.description,
                yearsOfExperience: exp.yearsOfExperience,
                responsibilities: exp.responsibilities || [],
              })),
            },
          },
          education: {
            createMany: {
              data: (parsedData.education || []).map((edu: any) => ({
                degree: edu.degree,
                institution: edu.institution,
                startDate: edu.startDate,
                endDate: edu.endDate,
                details: edu.details,
              })),
            },
          },
          projects: {
            createMany: {
              data: (parsedData.projects || []).map((proj: any) => ({
                name: proj.name,
                description: proj.description,
                techStack: proj.techStack || [],
                responsibilities: proj.responsibilities || [],
              })),
            },
          },
        },
      });

      // Upload resume to pinecone

      await upsertVectors({
        id: resume.id,
        embedding: resEmbedding,
        metadata: { userId: req.user.id, resumeId: resume.id, type: "resume" },
      });

      res.status(201).json({
        msg: "Resume uploaded and parsed successfully",
        resumeId: resume.id,
        imageKitUrl: imageKitResult.url,
        extractedDetails: {
          name: parsedData.name,
          email: parsedData.email,
          phone: parsedData.phone,
          summary: parsedData.summary,
          skills: parsedData.skills,
          experience: parsedData.experience,
          education: parsedData.education,
          projects: parsedData.projects,
          yearsOfExperience: parsedData.yearsOfExperience,
        },
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error uploading resume",
        error: error,
      });
    }
  }
);

// Update resume details
resumeRouter.put(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Resume ID is required" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      // Validate request body
      const schema = updateResumeSchema.safeParse(req.body);
      if (!schema.success) {
        const errors = formatZodErrors(schema.error);
        return res.status(400).json({ msg: "Invalid input", errors });
      }

      // Check if resume exists and belongs to user
      const existingResume = await prisma.resume.findUnique({
        where: { id: id as string },
      });

      if (!existingResume) {
        return res.status(404).json({ msg: "Resume not found" });
      }

      if (existingResume.userId !== req.user.id) {
        return res.status(403).json({ msg: "Unauthorized access" });
      }

      // Update resume
      const updateData = Object.fromEntries(
        Object.entries(schema.data).filter(([, value]) => value !== undefined)
      );

      const updatedResume = await prisma.resume.update({
        where: { id: id as string },
        data: updateData,
      });

      res.status(200).json({
        msg: "Resume updated successfully",
        resume: updatedResume,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error updating resume",
        error: error.message,
      });
    }
  }
);

// Get resume by ID
resumeRouter.get(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Resume ID is required" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      const resume = await prisma.resume.findUnique({
        where: { id: id as string },
        include: {
          experience: true,
          education: true,
          projects: true,
        },
      });

      if (!resume) {
        return res.status(404).json({ msg: "Resume not found" });
      }

      if (resume.userId !== req.user.id) {
        return res.status(403).json({ msg: "Unauthorized access" });
      }

      res.status(200).json({
        msg: "Resume retrieved successfully",
        resume,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error retrieving resume",
        error: error.message,
      });
    }
  }
);

// Get all resumes for user
resumeRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ msg: "User not authenticated" });
    }

    const resumes = await prisma.resume.findMany({
      where: { userId: req.user.id as string },
      include: {
        experience: true,
        education: true,
        projects: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      msg: "Resumes retrieved successfully",
      count: resumes.length,
      resumes,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: "Error retrieving resumes",
      error: error.message,
    });
  }
});

export default resumeRouter;
