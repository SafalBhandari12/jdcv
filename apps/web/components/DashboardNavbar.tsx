"use client";

import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardNavbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("session");
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
      </div>
    </nav>
  );
}
