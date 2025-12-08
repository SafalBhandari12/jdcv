import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-gray-300 border-b-2 border-[#323232] shadow-[0_4px_0_#323232]'>
      {/* Logo */}
      <Link href='/' className='text-2xl font-bold text-[#323232]'>
        matchMinds
      </Link>

      {/* Links */}
      <div className='flex items-center gap-4'>
        <Link
          href='/login'
          className='relative z-10 px-6 py-2 text-[16px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] overflow-hidden transition-all duration-200 hover:text-[#e8e8e8] before:absolute before:inset-0 before:w-0 before:bg-[#212121] before:-z-10 before:transition-all before:duration-200 hover:before:w-full'
        >
          Login
        </Link>
        <Link
          href='/signup'
          className='relative z-10 px-6 py-2 text-[16px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] overflow-hidden transition-all duration-200 hover:text-[#e8e8e8] before:absolute before:inset-0 before:w-0 before:bg-[#212121] before:-z-10 before:transition-all before:duration-200 hover:before:w-full'
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
