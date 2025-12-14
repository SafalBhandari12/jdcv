"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllResumes, Resume } from "@/app/utils/resumeApi";
import { Loader2, AlertCircle, FileText, ArrowRight } from "lucide-react";

interface ResumeListProps {
  onSelectResume?: (resume: Resume) => void;
}

export default function ResumeList({ onSelectResume }: ResumeListProps) {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllResumes();
      setResumes(data);
    } catch (err: any) {
      setError(err.response?.data?.msg || "Failed to load resumes");
      console.error("Error loading resumes:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && resumes.length === 0) {
    return (
      <div className='flex items-center justify-center py-12'>
        <Loader2 className='animate-spin text-gray-400' size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3'>
        <AlertCircle className='text-red-500 shrink-0' size={20} />
        <span className='text-red-200'>{error}</span>
        <button
          onClick={fetchResumes}
          className='ml-auto px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded text-sm text-red-200 transition'
        >
          Retry
        </button>
      </div>
    );
  }

  if (resumes.length === 0) {
    return (
      <div className='text-center py-12'>
        <FileText className='mx-auto text-gray-500 mb-4' size={48} />
        <p className='text-gray-400 mb-4'>No resumes uploaded yet</p>
        <p className='text-gray-500 text-sm'>
          Upload your first resume to get started
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <div className='grid gap-4'>
        {resumes.map((resume) => (
          <Link
            key={resume.id}
            href={`/resumes/${resume.id}`}
            className='block'
          >
            <div className='p-4 border border-gray-700 bg-gray-900 rounded-lg cursor-pointer transition hover:border-blue-500 hover:bg-gray-800 group'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <h3 className='font-semibold text-white group-hover:text-blue-400 transition'>
                    {resume.name || "Unknown"}
                  </h3>
                  <p className='text-sm text-gray-400 mt-1'>
                    {resume.originalFileName}
                  </p>
                  {resume.yearsOfExperience && (
                    <p className='text-sm text-gray-500 mt-2'>
                      {resume.yearsOfExperience} years of experience
                    </p>
                  )}
                  {resume.email && (
                    <p className='text-sm text-gray-500'>{resume.email}</p>
                  )}
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-xs text-gray-500'>
                    {new Date(resume.createdAt).toLocaleDateString()}
                  </span>
                  <ArrowRight
                    className='text-gray-400 group-hover:text-blue-400 transition'
                    size={18}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
