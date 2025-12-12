"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getResumeById, Resume } from "@/app/utils/resumeApi";
import { useAuth } from "@/hooks/useAuth";
import AuthNavbar from "@/components/AuthNavbar";
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ResumeDetailPage() {
  const router = useRouter();
  const params = useParams();
  const resumeId = params.id as string;

  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useAuth(); // Check authentication

  useEffect(() => {
    if (resumeId) {
      fetchResumeDetails();
    }
  }, [resumeId]);

  const fetchResumeDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getResumeById(resumeId);
      setResume(data);
    } catch (err: any) {
      setError(err.response?.data?.msg || "Failed to load resume details");
      console.error("Error loading resume:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <AuthNavbar />
        <main className='min-h-screen bg-[#0a0a0a] pt-24 pb-12 flex items-center justify-center'>
          <Loader2 className='animate-spin text-gray-400' size={40} />
        </main>
      </>
    );
  }

  if (error || !resume) {
    return (
      <>
        <AuthNavbar />
        <main className='min-h-screen bg-[#0a0a0a] pt-24 pb-12'>
          <div className='max-w-4xl mx-auto px-6'>
            <button
              onClick={() => router.back()}
              className='flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition'
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-6 flex items-center gap-4'>
              <AlertCircle className='text-red-500 shrink-0' size={24} />
              <div>
                <p className='text-red-200 font-medium'>{error}</p>
                <button
                  onClick={fetchResumeDetails}
                  className='mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded text-sm text-red-200 transition'
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AuthNavbar />

      <main className='min-h-screen bg-[#0a0a0a] pt-24 pb-12'>
        <div className='max-w-4xl mx-auto px-6'>
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className='flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition'
          >
            <ArrowLeft size={20} />
            Back to Resumes
          </button>

          {/* Header Section */}
          <div className='bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8 mb-8'>
            <h1 className='text-4xl font-bold text-white mb-2'>
              {resume.name || "No Name"}
            </h1>

            <div className='flex flex-wrap gap-6 mt-6 text-gray-300'>
              {resume.email && (
                <div className='flex items-center gap-2'>
                  <Mail size={18} className='text-blue-400' />
                  <a
                    href={`mailto:${resume.email}`}
                    className='hover:text-white transition'
                  >
                    {resume.email}
                  </a>
                </div>
              )}
              {resume.phone && (
                <div className='flex items-center gap-2'>
                  <Phone size={18} className='text-green-400' />
                  <a
                    href={`tel:${resume.phone}`}
                    className='hover:text-white transition'
                  >
                    {resume.phone}
                  </a>
                </div>
              )}
              {resume.yearsOfExperience && (
                <div className='flex items-center gap-2'>
                  <MapPin size={18} className='text-purple-400' />
                  <span>{resume.yearsOfExperience} years of experience</span>
                </div>
              )}
            </div>

            {resume.summary && (
              <div className='mt-6 pt-6 border-t border-gray-700'>
                <p className='text-gray-300 leading-relaxed'>
                  {resume.summary}
                </p>
              </div>
            )}
          </div>

          {/* Professional Summary */}
          {resume.summary && (
            <section className='mb-8'>
              <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Professional Summary
                </h2>
                <p className='text-gray-300 leading-relaxed'>
                  {resume.summary}
                </p>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {resume.experience && resume.experience.length > 0 && (
            <section className='mb-8'>
              <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Work Experience
                </h2>
                <div className='space-y-6'>
                  {resume.experience.map((exp, index) => (
                    <div
                      key={exp.id}
                      className='pb-6 border-b border-gray-800 last:pb-0 last:border-0'
                    >
                      <div className='flex justify-between items-start mb-2'>
                        <div>
                          <h3 className='text-lg font-semibold text-white'>
                            {exp.title || "Position"}
                          </h3>
                          <p className='text-blue-400 font-medium'>
                            {exp.company || "Company"}
                          </p>
                        </div>
                      </div>

                      {(exp.startDate || exp.endDate) && (
                        <p className='text-sm text-gray-400 mb-3'>
                          {exp.startDate || "Start"} -{" "}
                          {exp.endDate || "Present"}
                          {exp.yearsOfExperience &&
                            ` (${exp.yearsOfExperience} years)`}
                        </p>
                      )}

                      {exp.description && (
                        <p className='text-gray-300 mb-3'>{exp.description}</p>
                      )}

                      {exp.responsibilities &&
                        exp.responsibilities.length > 0 && (
                          <ul className='list-disc list-inside space-y-2 text-gray-300'>
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className='text-sm'>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Education Section */}
          {resume.education && resume.education.length > 0 && (
            <section className='mb-8'>
              <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Education
                </h2>
                <div className='space-y-6'>
                  {resume.education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className='pb-6 border-b border-gray-800 last:pb-0 last:border-0'
                    >
                      <h3 className='text-lg font-semibold text-white mb-1'>
                        {edu.degree || "Degree"}
                      </h3>
                      <p className='text-blue-400 font-medium mb-2'>
                        {edu.institution || "Institution"}
                      </p>

                      {(edu.startDate || edu.endDate) && (
                        <p className='text-sm text-gray-400 mb-2'>
                          {edu.startDate || "Start"} - {edu.endDate || "End"}
                        </p>
                      )}

                      {edu.details && (
                        <p className='text-gray-300 text-sm'>{edu.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {resume.projects && resume.projects.length > 0 && (
            <section className='mb-8'>
              <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-white mb-6'>Projects</h2>
                <div className='space-y-6'>
                  {resume.projects.map((project, index) => (
                    <div
                      key={project.id}
                      className='pb-6 border-b border-gray-800 last:pb-0 last:border-0'
                    >
                      <h3 className='text-lg font-semibold text-white mb-2'>
                        {project.name || "Project"}
                      </h3>

                      {project.description && (
                        <p className='text-gray-300 mb-3'>
                          {project.description}
                        </p>
                      )}

                      {project.techStack && project.techStack.length > 0 && (
                        <div className='mb-3'>
                          <p className='text-sm font-medium text-gray-400 mb-2'>
                            Tech Stack:
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className='px-3 py-1 bg-purple-900/30 border border-purple-700 rounded-full text-sm text-purple-300'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.responsibilities &&
                        project.responsibilities.length > 0 && (
                          <ul className='list-disc list-inside space-y-2 text-gray-300'>
                            {project.responsibilities.map((resp, idx) => (
                              <li key={idx} className='text-sm'>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {resume.skills && resume.skills.length > 0 && (
            <section className='mb-8'>
              <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-white mb-6'>Skills</h2>
                <div className='flex flex-wrap gap-3'>
                  {resume.skills.map((skill: any) => (
                    <span
                      key={skill.id}
                      className='px-4 py-2 bg-blue-900/30 border border-blue-700 rounded-lg text-blue-200 text-sm font-medium'
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Metadata */}
          <div className='text-center text-gray-500 text-sm pt-6 border-t border-gray-800'>
            <p>Uploaded on {new Date(resume.createdAt).toLocaleDateString()}</p>
            {resume.originalFileName && (
              <p>Original file: {resume.originalFileName}</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
