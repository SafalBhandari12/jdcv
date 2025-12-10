"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import api from "@/app/utils/axiosinstance";
import AuthNavbar from "@/components/AuthNavbar";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await api.post("/auth/signUp", {
        email,
        password,
      });

      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      setError(
        err.response?.data?.error || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength =
    password.length >= 8 ? "strong" : password.length >= 6 ? "medium" : "weak";
  const passwordsMatch = password === confirmPassword && password.length > 0;

  return (
    <>
      <AuthNavbar />
      <div className='min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 pt-20'>
        <div className='w-full max-w-md'>
          {/* Card */}
          <div className='bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm'>
            {/* Header */}
            <div className='mb-8'>
              <h1 className='text-3xl font-bold text-white mb-2'>
                Create account
              </h1>
              <p className='text-gray-400'>
                Join us to get started with smart hiring
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className='mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg'>
                <p className='text-red-400 text-sm'>{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className='mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
                <p className='text-green-400 text-sm flex items-center gap-2'>
                  <CheckCircle2 size={16} />
                  {success}
                </p>
              </div>
            )}

            {/* Form */}
            <div className='space-y-5 mb-8'>
              {/* Email Field */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Email Address
                </label>
                <div className='relative'>
                  <Mail
                    className='absolute left-3 top-3 text-gray-500'
                    size={18}
                  />
                  <input
                    id='email'
                    type='email'
                    placeholder='you@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition'
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Password
                </label>
                <div className='relative'>
                  <Lock
                    className='absolute left-3 top-3 text-gray-500'
                    size={18}
                  />
                  <input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-3 text-gray-500 hover:text-gray-400'
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className='mt-2 flex gap-1'>
                    <div
                      className={`h-1 flex-1 rounded ${password.length >= 6 ? "bg-green-500" : "bg-gray-700"}`}
                    ></div>
                    <div
                      className={`h-1 flex-1 rounded ${password.length >= 8 ? "bg-green-500" : "bg-gray-700"}`}
                    ></div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Confirm Password
                </label>
                <div className='relative'>
                  <Lock
                    className='absolute left-3 top-3 text-gray-500'
                    size={18}
                  />
                  <input
                    id='confirmPassword'
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='••••••••'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition'
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-3 text-gray-500 hover:text-gray-400'
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {passwordsMatch && (
                  <div className='mt-2 text-green-400 text-sm flex items-center gap-1'>
                    <CheckCircle2 size={14} />
                    Passwords match
                  </div>
                )}
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={onRegister}
              disabled={loading || !email || !password || !confirmPassword}
              className='w-full py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight size={18} />}
            </button>

            {/* Divider */}
            <div className='my-6 flex items-center gap-3'>
              <div className='flex-1 h-px bg-gray-700'></div>
              <span className='text-sm text-gray-500'>or</span>
              <div className='flex-1 h-px bg-gray-700'></div>
            </div>

            {/* Login Link */}
            <p className='text-center text-gray-400 text-sm'>
              Already have an account?{" "}
              <Link
                href='/login'
                className='text-white font-semibold hover:underline'
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className='text-center text-gray-500 text-xs mt-6'>
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}
