import type { Request, Response } from "express";
import {
  parsePdf,
  extractMetadata,
  extractResumeWithLLM,
  addMetadataToResume,
  generateEmbeddingsForResume,
  getCosts,
  resetCosts,
} from "../resumePipeline.js";
import {
  filterAndScoreResumes,
  type FilterCriteria,
  type CandidateScore,
} from "../utils/resumeFilterUtils.js";
import type { ParsedResume } from "../types/resume.js";

export async function uploadAndFilterResumes(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Check if files were uploaded
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({
        success: false,
        message:
          "No resume files uploaded. Please upload at least one PDF file.",
      });
      return;
    }

    // Parse filter criteria from request body
    const filterCriteria: Partial<FilterCriteria> = {};

    if (req.body.minQuality) {
      filterCriteria.minQuality = parseInt(req.body.minQuality);
    }
    if (req.body.maxSuspicion) {
      filterCriteria.maxSuspicion = parseInt(req.body.maxSuspicion);
    }
    if (req.body.minIndustryExperienceMonths) {
      filterCriteria.minIndustryExperienceMonths = parseInt(
        req.body.minIndustryExperienceMonths
      );
    }
    if (req.body.requiredDegrees) {
      filterCriteria.requiredDegrees = JSON.parse(req.body.requiredDegrees);
    }
    if (req.body.requiredEducationFields) {
      filterCriteria.requiredEducationFields = JSON.parse(
        req.body.requiredEducationFields
      );
    }
    if (req.body.requireCurrentEducation) {
      filterCriteria.requireCurrentEducation =
        req.body.requireCurrentEducation === "true";
    }
    if (req.body.skills) {
      filterCriteria.skills = JSON.parse(req.body.skills);
    }
    if (req.body.responsibilities) {
      filterCriteria.responsibilities = JSON.parse(req.body.responsibilities);
    }

    console.log(`Processing ${req.files.length} resume(s)...`);

    // Reset costs for this batch
    resetCosts();

    // Process each uploaded resume
    const parsedResumes: ParsedResume[] = [];
    const processingErrors: Array<{ filename: string; error: string }> = [];

    for (const file of req.files as Express.Multer.File[]) {
      try {
        console.log(`Processing: ${file.originalname}`);

        // Step 1: Parse PDF
        const resumeText = await parsePdf(file.path);

        // Step 2: Extract metadata
        const metadata = extractMetadata(resumeText, file.originalname);

        // Step 3: Extract resume with LLM
        let parsedResume: ParsedResume = await extractResumeWithLLM(resumeText);

        // Step 4: Add metadata
        parsedResume = addMetadataToResume(parsedResume, metadata);

        // Step 5: Generate embeddings
        parsedResume = await generateEmbeddingsForResume(parsedResume);

        parsedResumes.push(parsedResume);
        console.log(`✓ Successfully processed: ${file.originalname}`);
      } catch (error) {
        console.error(`✗ Error processing ${file.originalname}:`, error);
        processingErrors.push({
          filename: file.originalname,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    if (parsedResumes.length === 0) {
      res.status(400).json({
        success: false,
        message: "Failed to process any resumes",
        errors: processingErrors,
      });
      return;
    }

    console.log(`Successfully parsed ${parsedResumes.length} resume(s)`);
    console.log("Applying filters and scoring...");

    // Filter and score resumes
    const results: CandidateScore[] = await filterAndScoreResumes(
      parsedResumes,
      filterCriteria
    );

    console.log(`✓ Filtering complete. ${results.length} candidate(s) passed`);

    // Get cost information
    const costs = getCosts();

    // Return results
    res.status(200).json({
      success: true,
      message: `Processed ${req.files.length} resumes, ${results.length} passed filters`,
      data: {
        totalUploaded: req.files.length,
        successfullyParsed: parsedResumes.length,
        passedFilters: results.length,
        results: results,
        processingErrors:
          processingErrors.length > 0 ? processingErrors : undefined,
        costs: {
          geminiUSD: parseFloat(costs.gemini.toFixed(6)),
          huggingfaceUSD: parseFloat(costs.hf.toFixed(6)),
          totalUSD: parseFloat((costs.gemini + costs.hf).toFixed(6)),
        },
      },
    });
  } catch (error) {
    console.error("Error in uploadAndFilterResumes:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while processing resumes",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
