"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthNavbar from "@/components/AuthNavbar";
import ResumeUpload from "@/components/ResumeUpload";
import JobDescriptionForm from "@/components/JobDescriptionForm";
import ResultsView from "@/components/ResultsView";
import { useAuth } from "@/hooks/useAuth";
import { Upload, Search, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  useAuth(); // Check authentication on mount
  const [activeTab, setActiveTab] = useState<"upload" | "find" | "results">(
    "upload"
  );
  const [resumesUploaded, setResumesUploaded] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [matchedCandidates, setMatchedCandidates] = useState<any[]>([]);

  useEffect(() => {
    // Check if there's a tab parameter in URL
    const tab = searchParams.get("tab");
    if (tab === "upload" || tab === "find") {
      setActiveTab(tab as "upload" | "find");
    }
  }, [router, searchParams]);

  const handleResumeSuccess = (resumeId: string) => {
    setResumesUploaded(true);
  };

  const handleJobDescriptionSuccess = (candidates: any[]) => {
    setMatchedCandidates(candidates);
    setHasResults(true);
    setActiveTab("results");
  };

  const handleReset = () => {
    setActiveTab("upload");
    setResumesUploaded(false);
    setHasResults(false);
  };

  return (
    <>
      <AuthNavbar />

      <main className='min-h-screen bg-[#0a0a0a] pt-24 pb-12'>
        <div className='max-w-4xl mx-auto px-6'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-4xl font-bold text-white mb-2'>
              Candidate Matching
            </h1>
            <p className='text-gray-400'>
              Upload resumes, create job descriptions, and find the perfect
              candidates
            </p>
          </div>

          {/* Tab Navigation */}
          <div className='flex gap-4 mb-8 border-b border-gray-800'>
            <button
              onClick={() => setActiveTab("upload")}
              className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
                activeTab === "upload"
                  ? "text-white border-white"
                  : "text-gray-400 border-transparent hover:text-gray-300"
              }`}
            >
              <Upload size={18} />
              Add Resumes
            </button>

            <button
              onClick={() => setActiveTab("find")}
              className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
                activeTab === "find"
                  ? "text-white border-white"
                  : "text-gray-400 border-transparent hover:text-gray-300"
              }`}
            >
              <Search size={18} />
              Find Candidates
            </button>

            {hasResults && (
              <button
                onClick={() => setActiveTab("results")}
                className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
                  activeTab === "results"
                    ? "text-white border-white"
                    : "text-gray-400 border-transparent hover:text-gray-300"
                }`}
              >
                <BarChart3 size={18} />
                Results
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className='bg-gray-900/50 border border-gray-800 rounded-2xl p-8'>
            {/* Upload Tab */}
            {activeTab === "upload" && (
              <div>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Upload Resumes
                </h2>
                <p className='text-gray-400 mb-8'>
                  Start by uploading candidate resumes. Our AI will extract and
                  analyze their information.
                </p>
                <ResumeUpload
                  onSuccess={handleResumeSuccess}
                  onNext={() => setActiveTab("find")}
                />
              </div>
            )}

            {/* Find Tab */}
            {activeTab === "find" && (
              <div>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Create Job Description
                </h2>
                <p className='text-gray-400 mb-8'>
                  Define the job requirements, skills, and qualifications you're
                  looking for.
                </p>
                <JobDescriptionForm
                  onSuccess={handleJobDescriptionSuccess}
                  onNext={() => setActiveTab("results")}
                />
              </div>
            )}

            {/* Results Tab */}
            {activeTab === "results" && hasResults && (
              <div>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Matching Results
                </h2>
                <p className='text-gray-400 mb-8'>
                  Review the candidates ranked by their match score to your job
                  description.
                </p>
                <ResultsView
                  candidates={matchedCandidates}
                  onReset={handleReset}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
