"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  })
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.status === 422) {
        alert("Username must in capital letter")
      }
      if (!response.ok) {
        throw new Error("Login failed")
      }
      const data = await response.json()
      console.log("Login Success:", data)
      router.push("/Login")
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-white/70 font-medium">
              Join us and start your journey
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-2 transition-colors group-focus-within:text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="doejohn"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-hidden transition-all duration-300"
                required
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-2 transition-colors group-focus-within:text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-hidden transition-all duration-300 focus:bg-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-2 transition-colors group-focus-within:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-hidden transition-all duration-300 focus:bg-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            {/* Role Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-2 transition-colors group-focus-within:text-white">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white outline-hidden transition-all duration-300 focus:bg-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 appearance-none cursor-pointer [&>option]:bg-purple-800 [&>option]:text-white"
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:shadow-white/10 hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 transform mt-4"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/60 font-medium text-sm">
              Already have an account?{" "}
              <Link href="/Login" className="text-white font-bold hover:underline transition-all">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
