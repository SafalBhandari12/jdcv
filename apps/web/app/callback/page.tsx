"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function CallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("Verifying email...");

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the hash from URL (everything after #)
        const hash = window.location.hash.slice(1); // Remove the #

        if (!hash) {
          setError("No verification token found. Please try signing up again.");
          setLoading(false);
          return;
        }

        // Parse the hash parameters
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");
        const refreshToken = params.get("refresh_token");
        const expiresIn = params.get("expires_in");
        const expiresAt = params.get("expires_at");
        const type = params.get("type");

        if (!accessToken) {
          setError("No access token found. Please try signing up again.");
          setLoading(false);
          return;
        }

        if (type !== "signup") {
          setError("Invalid verification link. Please check your email.");
          setLoading(false);
          return;
        }

        // Create session object similar to login
        const session = {
          access_token: accessToken,
          refresh_token: refreshToken || null,
          expires_in: parseInt(expiresIn || "3600"),
          expires_at: parseInt(expiresAt || "0"),
          token_type: "bearer",
          type: type || "signup",
        };

        // Store session in localStorage
        localStorage.setItem("session", JSON.stringify(session));

        setMessage("Email verified successfully! Redirecting to dashboard...");

        // Wait a moment for state to update, then redirect
        setTimeout(() => {
          setLoading(false);
          router.push("/dashboard?tab=upload");
        }, 1500);
      } catch (err: any) {
        console.error("Callback error:", err);
        setError("An error occurred during verification. Please try again.");
        setLoading(false);
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className='min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4'>
      <div className='w-full max-w-md text-center'>
        <div className='bg-gray-900/50 border border-gray-800 rounded-2xl p-12 backdrop-blur-sm'>
          {loading ? (
            <>
              <div className='w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin mx-auto mb-6'></div>
              <h2 className='text-2xl font-bold text-white mb-2'>{message}</h2>
              <p className='text-gray-400'>
                Please wait while we complete your verification
              </p>
            </>
          ) : error ? (
            <>
              <div className='w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-3xl text-red-400'>✕</span>
              </div>
              <h2 className='text-2xl font-bold text-red-400 mb-2'>
                Verification Failed
              </h2>
              <p className='text-gray-400 mb-6'>{error}</p>
              <div className='space-y-3'>
                <a
                  href='/register'
                  className='block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition'
                >
                  Try Signing Up Again
                </a>
                <a
                  href='/login'
                  className='block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition'
                >
                  Go to Login
                </a>
              </div>
            </>
          ) : (
            <>
              <div className='w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CheckCircle2 className='text-green-400' size={32} />
              </div>
              <h2 className='text-2xl font-bold text-green-400 mb-2'>
                Email Verified!
              </h2>
              <p className='text-gray-400'>
                Your account has been verified successfully. Redirecting to
                dashboard...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
