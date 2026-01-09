"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const SESSION_TIME = 30;
export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
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
    console.log(formData)
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error("Login failed")
      }
      const data = await response.json()
      console.log("Login Success:", data)
      router.push("/")

      cookies.set("accessToken", result.data.accessToken, {
        expires: SESSION_TIME / 1440,
        secure: true,      // Only sent over HTTPS
        sameSite: 'strict', // Prevents the cookie from being sent on cross-site requests
        path: '/'          // Makes the cookie available across your entire site
      });

      localStorage.setItem("loginTime", Date.now());
      router.push("/")
    }
    catch (error) {
      console.log(error)
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
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
              <Link href="#" className="text-white font-bold hover:underline transition-all">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
