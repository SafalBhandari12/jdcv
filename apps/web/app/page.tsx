"use client";

import Link from "next/link";
import DarkVeil from "../components/ui/darkVeil";
import AuthNavbar from "../components/AuthNavbar";
import {
  ArrowRight,
  Search,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <main className='min-h-screen bg-[#0a0a0a] text-white'>
      {/* Navigation */}
      <AuthNavbar />

      {/* Hero Section - Full Page with Dark Veil Background */}
      <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16'>
        {/* Dark Veil Background - Full coverage */}
        <div className='absolute inset-0 w-full h-full'>
          <DarkVeil />
        </div>

        {/* Content overlay */}
        <div className='relative z-10 max-w-6xl mx-auto px-8 w-full text-center'>
          <div className='space-y-6'>
            <h1 className='text-6xl md:text-7xl font-bold leading-tight text-white'>
              Find the right talent, faster
            </h1>
            <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Smart candidate matching powered by advanced analysis. Connect
              with the best-fit professionals for your roles in minutes, not
              weeks.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
              <Link
                href='/register'
                className='px-8 py-3 text-base font-semibold bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2'
              >
                Start Hiring <ArrowRight size={18} />
              </Link>
              <button className='px-8 py-3 text-base font-semibold border border-gray-500 rounded text-white hover:border-gray-300 hover:bg-white/5 transition-colors'>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-[#0f0f0f] border-t border-gray-800'>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Why leading companies choose matchMinds
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl'>
              Built for enterprise hiring teams who demand precision and
              efficiency
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='p-8 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-gray-700 transition-colors'>
              <div className='w-10 h-10 bg-white rounded flex items-center justify-center mb-4'>
                <Search size={20} className='text-gray-900' />
              </div>
              <h3 className='text-lg font-bold text-white mb-3'>
                Intelligent Matching
              </h3>
              <p className='text-gray-400'>
                Advanced resume parsing and job analysis. Match candidates based
                on proven skills, experience, and cultural fit—not keywords.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='p-8 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-gray-700 transition-colors'>
              <div className='w-10 h-10 bg-white rounded flex items-center justify-center mb-4'>
                <Users size={20} className='text-gray-900' />
              </div>
              <h3 className='text-lg font-bold text-white mb-3'>
                Reduced Time-to-Hire
              </h3>
              <p className='text-gray-400'>
                Cut weeks from your recruiting cycle. Automated candidate
                ranking eliminates manual screening and accelerates interviews.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='p-8 border border-gray-800 rounded-lg bg-gray-900/30 hover:border-gray-700 transition-colors'>
              <div className='w-10 h-10 bg-white rounded flex items-center justify-center mb-4'>
                <TrendingUp size={20} className='text-gray-900' />
              </div>
              <h3 className='text-lg font-bold text-white mb-3'>
                Measurable ROI
              </h3>
              <p className='text-gray-400'>
                Track hiring metrics, time savings, and quality of hires.
                Transparent analytics to justify your talent acquisition
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-24 bg-[#0a0a0a] border-t border-gray-800'>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>How it works</h2>
            <p className='text-lg text-gray-400'>
              A simple, proven process to find qualified candidates
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            {/* Step 1 */}
            <div>
              <div className='flex items-center mb-6'>
                <div className='w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center text-sm font-bold'>
                  1
                </div>
                <div className='flex-1 h-px bg-gray-800 ml-4'></div>
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Submit Job Details
              </h3>
              <p className='text-gray-400'>
                Post your job description and desired qualifications. Our system
                analyzes requirements in detail.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className='flex items-center mb-6'>
                <div className='w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center text-sm font-bold'>
                  2
                </div>
                <div className='flex-1 h-px bg-gray-800 ml-4'></div>
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Smart Matching
              </h3>
              <p className='text-gray-400'>
                Advanced algorithms analyze candidate profiles against your
                requirements and rank matches by relevance.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className='flex items-center mb-6'>
                <div className='w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center text-sm font-bold'>
                  3
                </div>
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                Review & Engage
              </h3>
              <p className='text-gray-400'>
                Access detailed candidate profiles with match scores, insights,
                and recommendations for each prospect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className='py-24 bg-[#0f0f0f] border-t border-gray-800'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-4xl font-bold text-white mb-12'>Capabilities</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='flex gap-4'>
              <CheckCircle2 className='text-white shrink-0 mt-1' size={20} />
              <div>
                <h3 className='font-bold text-white mb-1'>
                  Comprehensive candidate profiles
                </h3>
                <p className='text-gray-400'>
                  Detailed analysis of skills, experience, and background
                  information
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <CheckCircle2 className='text-white shrink-0 mt-1' size={20} />
              <div>
                <h3 className='font-bold text-white mb-1'>
                  Role-specific matching
                </h3>
                <p className='text-gray-400'>
                  Tailored algorithms for different job categories and levels
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <CheckCircle2 className='text-white shrink-0 mt-1' size={20} />
              <div>
                <h3 className='font-bold text-white mb-1'>Integration ready</h3>
                <p className='text-gray-400'>
                  Connect with your existing ATS and hiring tools
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <CheckCircle2 className='text-white shrink-0 mt-1' size={20} />
              <div>
                <h3 className='font-bold text-white mb-1'>Dedicated support</h3>
                <p className='text-gray-400'>
                  Enterprise-grade support for your recruiting team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gray-900 text-white'>
        <div className='max-w-4xl mx-auto px-8 text-center space-y-8'>
          <h2 className='text-4xl font-bold'>Ready to improve your hiring?</h2>
          <p className='text-lg text-gray-300'>
            Schedule a demo to see how matchMinds can accelerate your
            recruitment process.
          </p>
          <Link
            href='/register'
            className='inline-block px-8 py-3 text-base font-semibold bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors'
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 border-t border-gray-800 bg-[#0a0a0a]'>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='grid md:grid-cols-4 gap-12 mb-12'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>matchMinds</h3>
              <p className='text-gray-400 text-sm'>
                Smart candidate matching for modern recruiting teams.
              </p>
            </div>
            <div>
              <h4 className='font-bold text-white mb-4 text-sm'>Product</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-white mb-4 text-sm'>Company</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-white mb-4 text-sm'>Legal</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 pt-8 text-center text-gray-500 text-sm'>
            <p>&copy; 2025 matchMinds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
