"use client";

import Link from "next/link";
import { LogOut, User, Upload, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AuthNavbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("session");
    setIsAuthenticated(!!session);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <nav className='fixed top-0 w-full z-50 bg-[#0a0a0a]/80 border-b border-gray-800 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-8 py-4 flex items-center justify-between'>
        <Link
          href='/'
          className='text-2xl font-bold text-white hover:opacity-80 transition-opacity'
        >
          matchMinds
        </Link>

        <div className='flex items-center gap-6'>
          {isAuthenticated ? (
            <>
              <Link
                href='/dashboard?tab=upload'
                className='flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors'
              >
                <Upload size={16} />
                Add Resume
              </Link>

              <Link
                href='/dashboard?tab=find'
                className='flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors'
              >
                <Search size={16} />
                Find Candidates
              </Link>

              <div className='relative'>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition'
                >
                  <User size={18} className='text-gray-300' />
                  <span className='text-sm text-gray-300'>Account</span>
                </button>

                {showMenu && (
                  <div className='absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg'>
                    <button
                      onClick={handleLogout}
                      className='w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 transition flex items-center gap-2 rounded-lg'
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href='/login'
                className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
              >
                Login
              </Link>
              <Link
                href='/register'
                className='px-6 py-2 text-sm font-semibold bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors'
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
