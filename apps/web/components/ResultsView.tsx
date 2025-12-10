"use client";

import { useState, useEffect } from "react";
import { Search, MoreVertical, Download } from "lucide-react";
import api from "@/app/utils/axiosinstance";

interface Candidate {
  similarity: number;
  resumeDetails: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    yearsOfExperience?: number;
    imageKitUrl?: string;
  };
}

interface ResultsViewProps {
  candidates: Candidate[];
  onReset: () => void;
}

export default function ResultsView({
  candidates: initialCandidates,
  onReset,
}: ResultsViewProps) {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"similarity" | "experience">(
    "similarity"
  );

  useEffect(() => {
    setCandidates(initialCandidates);
  }, [initialCandidates]);

  const filteredCandidates = candidates
    .filter(
      (c) =>
        c.resumeDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.resumeDetails.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "similarity") {
        return (b.similarity || 0) - (a.similarity || 0);
      } else {
        return (
          (b.resumeDetails.yearsOfExperience || 0) -
          (a.resumeDetails.yearsOfExperience || 0)
        );
      }
    });

  const getMatchColor = (similarity: number) => {
    if (similarity >= 0.8)
      return "bg-green-500/20 border-green-500/30 text-green-400";
    if (similarity >= 0.6)
      return "bg-blue-500/20 border-blue-500/30 text-blue-400";
    return "bg-yellow-500/20 border-yellow-500/30 text-yellow-400";
  };

  const getMatchLabel = (similarity: number) => {
    if (similarity >= 0.8) return "Excellent Match";
    if (similarity >= 0.6) return "Good Match";
    return "Potential Match";
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='text-center'>
          <div className='w-12 h-12 rounded-full border-2 border-gray-700 border-t-white animate-spin mx-auto mb-4'></div>
          <p className='text-gray-400'>Loading results...</p>
        </div>
      </div>
    );
  }

  if (candidates.length === 0) {
    return (
      <div className='text-center py-12'>
        <Search className='mx-auto text-gray-600 mb-4' size={40} />
        <h3 className='text-lg font-semibold text-gray-300 mb-2'>
          No candidates found
        </h3>
        <p className='text-gray-500 mb-6'>
          Upload resumes first to see matching candidates
        </p>
        <button
          onClick={onReset}
          className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition'
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Controls */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='flex-1 relative'>
          <Search className='absolute left-3 top-3.5 text-gray-500' size={18} />
          <input
            type='text'
            placeholder='Search by name or email...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "similarity" | "experience")
          }
          className='px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20'
        >
          <option value='similarity'>Sort by Match</option>
          <option value='experience'>Sort by Experience</option>
        </select>

        <button
          onClick={onReset}
          className='px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition'
        >
          Start Over
        </button>
      </div>

      {/* Results Summary */}
      <div className='grid grid-cols-3 gap-4'>
        <div className='p-4 bg-gray-800/50 border border-gray-700 rounded-lg'>
          <p className='text-gray-400 text-sm'>Total Candidates</p>
          <p className='text-2xl font-bold text-white'>{candidates.length}</p>
        </div>
        <div className='p-4 bg-green-500/10 border border-green-500/30 rounded-lg'>
          <p className='text-green-400 text-sm'>Excellent Match</p>
          <p className='text-2xl font-bold text-green-400'>
            {candidates.filter((c) => c.similarity >= 0.8).length}
          </p>
        </div>
        <div className='p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg'>
          <p className='text-blue-400 text-sm'>Good Match</p>
          <p className='text-2xl font-bold text-blue-400'>
            {
              candidates.filter(
                (c) => c.similarity >= 0.6 && c.similarity < 0.8
              ).length
            }
          </p>
        </div>
      </div>

      {/* Candidates List */}
      <div className='space-y-3'>
        {filteredCandidates.map((candidate, index) => (
          <div
            key={candidate.resumeDetails.id}
            className='p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-gray-600 transition'
          >
            <div className='flex items-start justify-between mb-4'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-2'>
                  <h3 className='text-lg font-semibold text-white'>
                    {candidate.resumeDetails.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getMatchColor(
                      candidate.similarity
                    )}`}
                  >
                    {getMatchLabel(candidate.similarity)}
                  </span>
                </div>
                <p className='text-gray-400 text-sm'>
                  {candidate.resumeDetails.email}
                </p>
                {candidate.resumeDetails.phone && (
                  <p className='text-gray-400 text-sm'>
                    {candidate.resumeDetails.phone}
                  </p>
                )}
              </div>

              <div className='text-right'>
                <div className='text-3xl font-bold text-white mb-1'>
                  {Math.round(candidate.similarity * 100)}%
                </div>
                <p className='text-gray-400 text-xs'>Match Score</p>
              </div>
            </div>

            {/* Match Details */}
            <div className='grid grid-cols-2 gap-4 pt-4 border-t border-gray-700'>
              {candidate.resumeDetails.yearsOfExperience && (
                <div>
                  <p className='text-gray-400 text-xs'>Experience</p>
                  <p className='text-white font-medium'>
                    {candidate.resumeDetails.yearsOfExperience} years
                  </p>
                </div>
              )}
              <div className='text-right'>
                <button className='text-gray-400 hover:text-white transition'>
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCandidates.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-400'>No candidates match your search</p>
        </div>
      )}
    </div>
  );
}
