"use client";

import { useState } from "react";
import { X, Plus, AlertCircle, CheckCircle2 } from "lucide-react";
import api from "@/app/utils/axiosinstance";

interface JobDescriptionFormProps {
  onSuccess: (candidates: any[]) => void;
  onNext: () => void;
}

interface MatchedCandidate {
  similarity: number;
  resumeDetails: {
    id: string;
    name: string;
    email: string;
    yearsOfExperience?: number;
  };
}

export default function JobDescriptionForm({
  onSuccess,
  onNext,
}: JobDescriptionFormProps) {
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [currentRequirement, setCurrentRequirement] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [degrees, setDegrees] = useState<string[]>([]);
  const [currentDegree, setCurrentDegree] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [matchedCandidates, setMatchedCandidates] = useState<
    MatchedCandidate[]
  >([]);
  const [submitted, setSubmitted] = useState(false);

  const addRequirement = () => {
    if (currentRequirement.trim()) {
      setRequirements([...requirements, currentRequirement.trim()]);
      setCurrentRequirement("");
    }
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const addDegree = () => {
    if (currentDegree.trim()) {
      setDegrees([...degrees, currentDegree.trim()]);
      setCurrentDegree("");
    }
  };

  const removeItem = (arr: string[], index: number) => {
    return arr.filter((_, i) => i !== index);
  };

  const submitJobDescription = async () => {
    if (
      yearsOfExperience.trim() === "" ||
      requirements.length === 0 ||
      skills.length === 0
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const res = await api.post("/job-description/submit", {
        yearsOfExperience: parseInt(yearsOfExperience, 10),
        requirements,
        skills,
        degrees: degrees.length > 0 ? degrees : undefined,
      });

      setMatchedCandidates(res.data.enrichedVectorResults || []);
      setSubmitted(true);
      onSuccess(res.data.enrichedVectorResults || []);
    } catch (err: any) {
      let errorMessage = "Failed to submit job description";
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
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className='space-y-6'>
        <div className='p-6 bg-green-500/10 border border-green-500/20 rounded-lg text-center'>
          <CheckCircle2 className='mx-auto text-green-400 mb-3' size={32} />
          <h3 className='text-xl font-bold text-green-400 mb-2'>
            Job Description Submitted!
          </h3>
          <p className='text-green-400/70'>
            Found {matchedCandidates.length} matching candidates
          </p>
          <p className='text-green-400/70 text-sm mt-2'>
            Click on the "Results" tab to see the matched candidates
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Error Message */}
      {error && (
        <div className='p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3'>
          <AlertCircle className='text-red-400  mt-0.5' size={18} />
          <p className='text-red-400 text-sm'>{error}</p>
        </div>
      )}

      {/* Years of Experience */}
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-3'>
          Required Years of Experience *
        </label>
        <input
          type='number'
          min='0'
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
          placeholder='e.g., 5'
          className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
        />
      </div>

      {/* Requirements */}
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-3'>
          Job Requirements *
        </label>
        <div className='flex gap-2 mb-3'>
          <input
            type='text'
            value={currentRequirement}
            onChange={(e) => setCurrentRequirement(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addRequirement()}
            placeholder='Add a requirement and press Enter'
            className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
          />
          <button
            onClick={addRequirement}
            className='px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition'
          >
            <Plus size={20} />
          </button>
        </div>

        {requirements.length > 0 && (
          <div className='space-y-2'>
            {requirements.map((req, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700 rounded-lg'
              >
                <span className='text-gray-300'>{req}</span>
                <button
                  onClick={() =>
                    setRequirements(removeItem(requirements, index))
                  }
                  className='text-gray-500 hover:text-red-400 transition'
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Skills */}
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-3'>
          Required Skills *
        </label>
        <div className='flex gap-2 mb-3'>
          <input
            type='text'
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
            placeholder='Add a skill and press Enter'
            className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
          />
          <button
            onClick={addSkill}
            className='px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition'
          >
            <Plus size={20} />
          </button>
        </div>

        {skills.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300'
              >
                <span className='text-sm'>{skill}</span>
                <button
                  onClick={() => setSkills(removeItem(skills, index))}
                  className='text-blue-400 hover:text-blue-200'
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Degrees */}
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-3'>
          Preferred Degrees (Optional)
        </label>
        <div className='flex gap-2 mb-3'>
          <input
            type='text'
            value={currentDegree}
            onChange={(e) => setCurrentDegree(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addDegree()}
            placeholder='e.g., Bachelor of Science in Computer Science'
            className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
          />
          <button
            onClick={addDegree}
            className='px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition'
          >
            <Plus size={20} />
          </button>
        </div>

        {degrees.length > 0 && (
          <div className='space-y-2'>
            {degrees.map((degree, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700 rounded-lg'
              >
                <span className='text-gray-300'>{degree}</span>
                <button
                  onClick={() => setDegrees(removeItem(degrees, index))}
                  className='text-gray-500 hover:text-red-400 transition'
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={submitJobDescription}
        disabled={submitting}
        className='w-full py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer'
      >
        {submitting ? "Processing..." : "Submit Job Description"}
      </button>
    </div>
  );
}
