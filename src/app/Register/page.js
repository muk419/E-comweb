"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.status === 422) {
        alert("Username must be in capital letters")
      }
      if (!response.ok) {
        throw new Error("Registration failed")
      }
      const data = await response.json()
      router.push("/Login")
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6] flex items-center justify-center p-4">
      <div className="w-full max-w-[850px] bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left Section - Info */}
        <div className="md:w-2/5 bg-[#2874f0] p-10 flex flex-col text-white">
          <h2 className="text-3xl font-semibold mb-6">Looks like you're new here!</h2>
          <p className="text-lg leading-relaxed text-[#dbdbdb] font-medium">
            Sign up with your mobile number to get started
          </p>
          <div className="mt-auto">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-flap/278/278/image/7593e7b6640c7c34.jpg?q=90"
              alt="Register illustration"
              className="w-full opacity-50 contrast-125 translate-y-10"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-3/5 p-10 bg-white flex flex-col">
          <form onSubmit={handleSubmit} className="flex-1 space-y-6">
            <div className="relative">
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
                Enter Username (Capital)
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#2874f0] peer transition-all text-sm"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#2874f0] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Enter Email Address
              </label>
            </div>

            <div className="relative">
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
            </div>

            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#2874f0] bg-transparent text-sm text-gray-800"
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              <label className="absolute left-0 -top-4 text-xs text-[#2874f0]">
                Select Role
              </label>
            </div>

            <p className="text-[12px] text-gray-500 leading-relaxed pt-4">
              By continuing, you agree to Flipkart's <a href="#" className="text-[#2874f0]">Terms of Use</a> and <a href="#" className="text-[#2874f0]">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#fb641b] text-white font-bold rounded-sm shadow-md hover:bg-[#e65c19] transition-colors text-sm uppercase tracking-wider"
            >
              Continue
            </button>
          </form>

          <div className="mt-auto text-center">
            <Link href="/Login" className="w-full py-3 border border-gray-200 text-[#2874f0] text-sm font-bold shadow-sm hover:shadow-md transition-all inline-block bg-white">
              Existing User? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
