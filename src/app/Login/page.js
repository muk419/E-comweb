"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "", // Changed from username to email to match the input field
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting login with:", formData)

    try {
      const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username, // Adjusting to match API expectations if necessary, or keeping it as is
          password: formData.password
        }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login Success:", data);

      // Use the centralized login method from AuthContext
      // data.data.user and data.data.accessToken are common patterns for this API
      if (data.data && data.data.accessToken) {
        login(data.data.user, data.data.accessToken);
        router.push("/Dashboard");
      } else {
        throw new Error("Invalid response format from server");
      }
    }
    catch (error) {
      console.log("Login Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-white/70 font-medium">
              Please enter your details to sign in
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-2 transition-colors group-focus-within:text-white">
                Email Address
              </label>
              <input
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                placeholder="hello@example.com"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-hidden transition-all duration-300"
                required
              />

            </div>

            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white/90 transition-colors group-focus-within:text-white">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-white/60 hover:text-white transition-colors">
                  Forgot?
                </a>
              </div>
              <input
                onChange={handleChange}
                value={formData.password}
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-hidden transition-all duration-300 focus:bg-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded-sm border-white/20 bg-white/5 text-purple-600 focus:ring-offset-0 focus:ring-white/20"
              />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-white/70 cursor-pointer select-none">
                Stay signed in for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:shadow-white/10 hover:mt-[-2px] active:mt-[1px] transition-all duration-300 transform"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 font-medium text-sm">
              New here?{" "}
              <Link href="/Register" className="text-white font-bold hover:underline transition-all">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
