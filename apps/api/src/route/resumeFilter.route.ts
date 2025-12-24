import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { uploadAndFilterResumes } from "../controllers/resumeFilter.controller.js";

const router = Router();

// Create upload directory if it doesn't exist
const UPLOAD_DIR = "./uploads/temp";
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter to accept only PDF files
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"));
  }
};

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
});

/**
 * POST /api/resume-filter/upload-and-filter
 *
 * Upload multiple resumes and filter them based on job description criteria
 *
 * Form data fields:
 * - resumes: Array of PDF files (required)
 * - minQuality: number (optional) - Minimum quality score (0-100)
 * - maxSuspicion: number (optional) - Maximum suspicion score (0-100)
 * - minIndustryExperienceMonths: number (optional) - Minimum industry experience in months
 * - requiredDegrees: JSON string array (optional) - e.g., ["bachelors", "masters"]
 * - requiredEducationFields: JSON string array (optional) - e.g., ["computer science", "software engineering"]
 * - requireCurrentEducation: boolean string (optional) - "true" or "false"
 * - skills: JSON object (optional) - Skills criteria with must/optional/either fields
 * - responsibilities: JSON string array (optional) - Job responsibilities for semantic matching
 *
 * Example skills format:
 * {
 *   "must": [
 *     {"name": "nodejs", "minMonthsExperience": 12, "maxMonthsSinceLastUse": 24}
 *   ],
 *   "optional": [
 *     {"name": "aws"}
 *   ],
 *   "minOptionalRequired": 1,
 *   "either": [
 *     [
 *       {"name": "postgresql", "minMonthsExperience": 6}
 *     ]
 *   ]
 * }
 */
router.post(
  "/upload-and-filter",
  upload.array("resumes", 50), // Allow up to 50 files
  uploadAndFilterResumes
);

export default router;
