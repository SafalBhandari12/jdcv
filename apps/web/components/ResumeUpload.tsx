"use client";

import { useState } from "react";
import { Upload, X, CheckCircle2, AlertCircle } from "lucide-react";
import api from "@/app/utils/axiosinstance";

interface ResumeUploadProps {
  onSuccess: (resumeId: string) => void;
  onNext: () => void;
}

interface UploadedResume {
  id: string;
  name: string;
  email: string;
  extractedDetails?: {
    yearsOfExperience?: number;
    skills?: string[];
  };
}

export default function ResumeUpload({ onSuccess, onNext }: ResumeUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedResumes, setUploadedResumes] = useState<UploadedResume[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) => {
      if (file.type !== "application/pdf") return false;
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds 10MB limit`);
        return false;
      }
      return true;
    });

    if (droppedFiles.length === 0) {
      setError("Please drop PDF files only");
      return;
    }

    setFiles((prev) => [...prev, ...droppedFiles]);
    setError("");
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
      setError("");
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadResumes = async () => {
    if (files.length === 0) {
      setError("Please select at least one resume");
      return;
    }

    try {
      setUploading(true);
      setError("");

      const results: UploadedResume[] = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("resume", file);

        const res = await api.post("/resume/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        results.push({
          id: res.data.resumeId,
          name: res.data.extractedDetails?.name ?? "Unknown",
          email: res.data.extractedDetails?.email ?? "",
          extractedDetails: res.data.extractedDetails ?? undefined,
        });

        onSuccess(res.data.resumeId);
      }

      setUploadedResumes(results);
      setFiles([]);
    } catch (err: any) {
      let errorMessage = "Failed to upload resumes";
      if (err.response?.data?.error) {
        errorMessage =
          typeof err.response.data.error === "string"
            ? err.response.data.error
            : JSON.stringify(err.response.data.error);
      } else if (err.response?.data?.msg) {
        errorMessage = err.response.data.msg;
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className='space-y-6'>
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition ${
          dragActive ? "border-white bg-white/5" : "border-gray-700"
        }`}
      >
        <input
          type='file'
          multiple
          accept='application/pdf'
          onChange={handleFileSelect}
          className='hidden'
          id='resume-input'
        />

        <label htmlFor='resume-input' className='cursor-pointer'>
          <Upload className='mx-auto mb-4 text-gray-400' size={40} />
          <h3 className='text-lg font-semibold text-white mb-2'>
            Drop resumes here or click to select
          </h3>
          <p className='text-gray-400 text-sm'>
            Supported format: PDF (max 10MB each)
          </p>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className='p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3'>
          <AlertCircle className='text-red-400 mt-0.5' size={18} />
          <p className='text-red-400 text-sm'>{error}</p>
        </div>
      )}

      {/* Files to Upload */}
      {files.length > 0 && (
        <div className='space-y-3'>
          <h4 className='text-white font-medium'>
            Selected Files ({files.length})
          </h4>
          <div className='space-y-2'>
            {files.map((file, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700 rounded-lg'
              >
                <span className='text-sm text-gray-300 truncate'>
                  {file.name}
                </span>
                <button
                  onClick={() => removeFile(index)}
                  className='text-gray-500 hover:text-gray-300 transition'
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={uploadResumes}
            disabled={uploading}
            className='w-full py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {uploading ? "Uploading..." : "Upload Resumes"}
          </button>
        </div>
      )}

      {/* Uploaded Resumes */}
      {uploadedResumes.length > 0 && (
        <div className='space-y-3'>
          <h4 className='text-white font-medium flex items-center gap-2'>
            <CheckCircle2 className='text-green-500' size={20} />
            Uploaded Resumes ({uploadedResumes.length})
          </h4>
          <div className='space-y-2'>
            {uploadedResumes.map((resume) => (
              <div
                key={resume.id}
                className='p-4 bg-green-500/10 border border-green-500/20 rounded-lg'
              >
                <p className='text-green-400 font-medium'>{resume.name}</p>
                <p className='text-green-400/70 text-sm'>{resume.email}</p>
                {resume.extractedDetails?.yearsOfExperience && (
                  <p className='text-green-400/70 text-sm'>
                    Experience: {resume.extractedDetails.yearsOfExperience}{" "}
                    years
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className='p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center'>
            <p className='text-green-400 font-medium'>
              {uploadedResumes.length} resume
              {uploadedResumes.length !== 1 ? "s" : ""} ready!
            </p>
            <p className='text-green-400/70 text-sm'>
              Go to "Find Candidates" tab to create a job description
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
