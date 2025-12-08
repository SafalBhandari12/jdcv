"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/app/utils/axiosinstance";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      const session = res.data.session;
      if (session) {
        localStorage.setItem("session", JSON.stringify(session));
      }

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-md w-full mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-2">Welcome Back</h2>
          <p className="text-gray-600 text-sm font-medium">Sign in to continue your journey</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-400 text-black"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
              <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-700 hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-400 text-black"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            type="button"
            onClick={onLoginClick}
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-4 font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
