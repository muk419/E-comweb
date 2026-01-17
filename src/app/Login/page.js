"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

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
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      if (data.data && data.data.accessToken) {
        login(data.data.user, data.data.accessToken);
        router.push("/Dashboard");
      } else {
        throw new Error("Invalid response format from server");
      }
    }
    catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6] flex items-center justify-center p-4">
      <div className="w-full max-w-[850px] bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[520px]">
        {/* Left Section - Info */}
        <div className="md:w-2/5 bg-[#2874f0] p-10 flex flex-col text-white">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          <p className="text-lg leading-relaxed text-[#dbdbdb] font-medium">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className="mt-auto">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-flap/278/278/image/7593e7b6640c7c34.jpg?q=90"
              alt="Login illustration"
              className="w-full opacity-50 contrast-125"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-3/5 p-10 bg-white flex flex-col">
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="mb-6 relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#2874f0] peer transition-all text-sm"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2874f0] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Enter Email/Mobile number
              </label>
            </div>

            <div className="mb-8 relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#2874f0] peer transition-all text-sm"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2874f0] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Enter Password
              </label>
              <div className="mt-2 text-right">
                <a href="#" className="text-[#2874f0] text-xs font-semibold">Forgot?</a>
              </div>
            </div>

            <p className="text-[12px] text-gray-500 mb-6 leading-relaxed">
              By continuing, you agree to Flipkart's <a href="#" className="text-[#2874f0]">Terms of Use</a> and <a href="#" className="text-[#2874f0]">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#fb641b] text-white font-bold rounded-sm shadow-md hover:bg-[#e65c19] transition-colors mb-4 text-sm"
            >
              Login
            </button>
          </form>

          <div className="mt-auto text-center">
            <Link href="/Register" className="text-[#2874f0] text-sm font-bold hover:underline">
              New to Flipkart? Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
