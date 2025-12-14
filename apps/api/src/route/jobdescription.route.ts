import { Router, type Request, type Response } from "express";
import { authMiddleware } from "../middleware/auth.js";
import prisma from "../config/prisma.js";
import {
  uploadJobDescriptionSchema,
  updateJobDescriptionSchema,
} from "./jobdescription.validation.js";
import { formatZodErrors } from "../utils/formatZodErrors.js";
import { filterCandidates } from "../utils/filterCandidates.js";
import { getEmbedding } from "../utils/getEmbedding.js";
import { queryVectors } from "../config/pinecone.js";

const jobDescriptionRouter = Router();

// Submit job description with structured data
jobDescriptionRouter.post(
  "/submit",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      // Validate request body using schema
      const validation = uploadJobDescriptionSchema.safeParse(req.body);
      if (!validation.success) {
        const errors = formatZodErrors(validation.error);
        return res.status(400).json({
          msg: "Invalid job description data",
          errors,
        });
      }

      const jobData = validation.data;

      // Save to database
      const jobDescriptionRecord = await prisma.jobDescription.create({
        data: {
          userId: req.user.id as string,
          yearsOfExperience: jobData.yearsOfExperience || null,
          requirements: jobData.requirements || [],
          degrees: jobData.degrees || [],
          skills: {
            createMany: {
              data: (jobData.skills || []).map((skill: string) => ({
                name: skill.trim().toLowerCase(),
              })),
              skipDuplicates: true,
            },
          },
        },
        include: {
          skills: true,
        },
      });

      // Filter and get matching candidates

      const matchedCandidates = await filterCandidates(
        jobDescriptionRecord.id,
        100
      );

      // Concatenate all requirements and skills for context
      const allResponsibilities = [
        ...(jobData.requirements || []),
        ...(jobData.skills || []),
      ].join(", ");

      const embedding = await getEmbedding(allResponsibilities);

      // Query vectors only for matched candidates
      const matchedResumeIds = matchedCandidates.map((c) => c.resumeId);

      const result = await queryVectors({
        vector: embedding,
        topK: matchedResumeIds.length > 0 ? matchedResumeIds.length * 10 : 5,
        includemeta: true,
        filter: {
          resumeId: { $in: matchedResumeIds },
        },
      });

      result.matches.sort((a, b) => b.score! - a.score!);

      // Fetch full resume details for the vector search results
      const vectorResultResumeIds = result.matches
        .map((match) => match.metadata?.resumeId as string)
        .filter((id): id is string => !!id);

      // const resumeDetailsFromVectors = await prisma.resume.findMany({
      //   where: {
      //     id: {
      //       in: vectorResultResumeIds,
      //     },
      //   },
      //   include: {
      //     skills: true,
      //     education: true,
      //     experience: true,
      //     projects: true,
      //   },
      // });

      // // Create a map for easy lookup of resume details by resumeId
      // const resumeDetailMap = new Map(
      //   resumeDetailsFromVectors.map((resume) => [resume.id, resume])
      // );

      // // Enhance the vector results with full resume details
      // const enrichedVectorResults = result.matches.map((match) => {
      //   const resume = resumeDetailMap.get(match.metadata?.resumeId as string);
      //   return {
      //     similarity: match.score,
      //     resumeDetails: resume
      //       ? {
      //           id: resume.id,
      //           userId: resume.userId,
      //           name: resume.name,
      //           email: resume.email,
      //           phone: resume.phone,
      //           summary: resume.summary,
      //           yearsOfExperience: resume.yearsOfExperience,
      //           imageKitUrl: resume.imageKitUrl,
      //         }
      //       : null,
      //   };
      // });

      // console.log("Matched Resume IDs:", enrichedVectorResults);

      // res.status(201).json({
      //   msg: "Job description submitted successfully",
      //   jobDescriptionId: jobDescriptionRecord.id,
      //   jobDescription: {
      //     id: jobDescriptionRecord.id,
      //     yearsOfExperience: jobData.yearsOfExperience,
      //     requirements: jobData.requirements,
      //   },
      //   enrichedVectorResults,
      // });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error submitting job description",
        error: error.message,
      });
    }
  }
);

// Get job description by ID
jobDescriptionRouter.get(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Job description ID is required" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      const jobDescription = await prisma.jobDescription.findUnique({
        where: { id: id as string },
        include: {
          skills: true,
        },
      });

      if (!jobDescription) {
        return res.status(404).json({ msg: "Job description not found" });
      }

      if (jobDescription.userId !== req.user.id) {
        return res.status(403).json({ msg: "Unauthorized access" });
      }

      res.status(200).json({
        msg: "Job description retrieved successfully",
        jobDescription,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error retrieving job description",
        error: error.message,
      });
    }
  }
);

// Get all job descriptions for user
jobDescriptionRouter.get(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      const jobDescriptions = await prisma.jobDescription.findMany({
        where: { userId: req.user.id as string },
        include: {
          skills: true,
        },
        orderBy: { createdAt: "desc" },
      });

      res.status(200).json({
        msg: "Job descriptions retrieved successfully",
        count: jobDescriptions.length,
        jobDescriptions,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error retrieving job descriptions",
        error: error.message,
      });
    }
  }
);

// Update job description
jobDescriptionRouter.put(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Job description ID is required" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      // Validate request body
      const schema = updateJobDescriptionSchema.safeParse(req.body);
      if (!schema.success) {
        const errors = formatZodErrors(schema.error);
        return res.status(400).json({ msg: "Invalid input", errors });
      }

      // Check if job description exists and belongs to user
      const existingJobDescription = await prisma.jobDescription.findUnique({
        where: { id: id as string },
      });

      if (!existingJobDescription) {
        return res.status(404).json({ msg: "Job description not found" });
      }

      if (existingJobDescription.userId !== req.user.id) {
        return res.status(403).json({ msg: "Unauthorized access" });
      }

      // Update job description
      const updateData: any = {};

      if (schema.data.yearsOfExperience !== undefined)
        updateData.yearsOfExperience = schema.data.yearsOfExperience;
      if (schema.data.requirements !== undefined)
        updateData.requirements = schema.data.requirements;
      if (schema.data.skills !== undefined) {
        // Handle skills updates
        await prisma.jobDescriptionSkill.deleteMany({
          where: { jobDescriptionId: id as string },
        });
      }
      if (schema.data.degrees !== undefined)
        updateData.degrees = schema.data.degrees;

      const updatedJobDescription = await prisma.jobDescription.update({
        where: { id: id as string },
        data: updateData,
        include: {
          skills: true,
        },
      });

      res.status(200).json({
        msg: "Job description updated successfully",
        jobDescription: updatedJobDescription,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error updating job description",
        error: error.message,
      });
    }
  }
);

// Delete job description
jobDescriptionRouter.delete(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Job description ID is required" });
      }

      if (!req.user?.id) {
        return res.status(401).json({ msg: "User not authenticated" });
      }

      // Check if job description exists and belongs to user
      const existingJobDescription = await prisma.jobDescription.findUnique({
        where: { id: id as string },
      });

      if (!existingJobDescription) {
        return res.status(404).json({ msg: "Job description not found" });
      }

      if (existingJobDescription.userId !== req.user.id) {
        return res.status(403).json({ msg: "Unauthorized access" });
      }

      // Delete job description
      await prisma.jobDescription.delete({
        where: { id: id as string },
      });

      res.status(200).json({
        msg: "Job description deleted successfully",
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        msg: "Error deleting job description",
        error: error.message,
      });
    }
  }
);

export default jobDescriptionRouter;
