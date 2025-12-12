"use client";

import { useRouter } from "next/navigation";
import AuthNavbar from "@/components/AuthNavbar";
import ResumeList from "@/components/ResumeList";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft } from "lucide-react";
import { Resume } from "@/app/utils/resumeApi";

export default function ResumesPage() {
  const router = useRouter();
  useAuth(); // Check authentication on mount

  const handleSelectResume = (resume: Resume) => {
    // You can add custom behavior here when a resume is selected
    console.log("Selected resume:", resume);
  };

  return (
    <>
      <AuthNavbar />

      <main className='min-h-screen bg-[#0a0a0a] pt-24 pb-12'>
        <div className='max-w-4xl mx-auto px-6'>
          {/* Header with Back Button */}
          <div className='mb-8 flex items-center gap-4'>
            <button
              onClick={() => router.back()}
              className='p-2 hover:bg-gray-800 rounded-lg transition'
            >
              <ArrowLeft className='text-gray-400' size={20} />
            </button>
            <div>
              <h1 className='text-4xl font-bold text-white'>My Resumes</h1>
              <p className='text-gray-400 mt-2'>
                View and manage all your uploaded resumes
              </p>
            </div>
          </div>

          {/* Resume List */}
          <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-6'>
            <ResumeList onSelectResume={handleSelectResume} />
          </div>
        </div>
      </main>
    </>
  );
}
