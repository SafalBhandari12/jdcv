"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/app/utils/axiosinstance";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await api.post("/auth/signUp", {
        name,
        email,
        password,
        confirmPassword,
      });

      if (res.data.success) {
        setSuccess("Registered Successfully! Redirecting to login...");
        localStorage.setItem("token", res.data.token);

        setTimeout(() => router.push("/login"), 2000);
      } else {
        setError(res.data.msg || "Registration failed");
        setTimeout(() => setError(""), 2000);
      }
    } catch (err: unknown) {
      const msg =
        (err as any).response?.data?.msg || "Something went wrong!";
      setError(msg);
      setTimeout(() => setError(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-md w-full mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 text-sm font-medium">Join us and start your journey</p>
        </div>

        <div className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 transition text-black"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              id="email"
              
              type="email"
              placeholder="m@example.com"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 transition text-black"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 transition text-black"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 transition text-black"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
            type="button"
            disabled={loading}
            onClick={onRegister}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
