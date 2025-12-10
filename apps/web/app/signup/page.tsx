'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/app/utils/axiosinstance';

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const onSignupClick = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await api.post('/auth/signUp', {
        email,
        password,
        confirmPassword,
      });

      setError('');
      // Redirect to login or show success message
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.msg || 'Signup failed');
      console.log(err);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-300'>
      <form className='flex flex-col items-start justify-center gap-5 p-5 bg-gray-300 border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232]'>
        {/* Heading */}
        <p className='flex flex-col text-[#323232] font-bold text-xl'>
          Create Account,
          <span className='text-[#666] font-semibold text-[17px]'>
            join us today
          </span>
        </p>

        {/* Email Input */}
        <input
          type='email'
          placeholder='Email'
          className='w-[250px] h-10 px-2 text-[15px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] outline-none'
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <input
          type='password'
          placeholder='Password'
          className='w-[250px] h-10 px-2 text-[15px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] outline-none'
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Confirm Password Input */}
        <input
          type='password'
          placeholder='Confirm Password'
          className='w-[250px] h-10 px-2 text-[15px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] outline-none'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Error Message */}
        {error && (
          <p className='w-[250px] text-[14px] font-semibold text-red-600 bg-red-100 border-2 border-red-600 rounded p-2'>
            {error}
          </p>
        )}

        {/* Signup Button */}
        <button
          type='button'
          onClick={onSignupClick}
          className='relative z-10 flex items-center justify-center gap-2 w-[250px] h-10 text-[16px] font-semibold text-[#323232] bg-white border-2 border-[#323232] rounded shadow-[4px_4px_0_#323232] overflow-hidden transition-all duration-200 hover:text-[#e8e8e8] before:absolute before:inset-0 before:w-0 before:bg-[#212121] before:-z-10 before:transition-all before:duration-200 hover:before:w-full'
        >
          Sign Up
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path d='m6 17 5-5-5-5' />
            <path d='m13 17 5-5-5-5' />
          </svg>
        </button>

        {/* Login Link */}
        <p className='text-center text-sm text-[#323232] font-semibold'>
          Already have an account?{' '}
          <Link href='/login' className='text-[#323232] underline font-bold hover:text-[#666]'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
