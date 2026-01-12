"use client";
import React from "react";
import Link from "next/link";
import { FiShoppingBag, FiShield, FiZap, FiArrowRight } from "react-icons/fi";

const GuestDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next Generation E-Commerce Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Shop Smarter, <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Not Harder.
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Join thousands of satisfied customers and experience the most intuitive shopping dashboard ever built. Fast, secure, and beautiful.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/Register"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/25 flex items-center justify-center group"
          >
            Get Started Now
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/Login"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700"
          >
            Guest Login
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FiShoppingBag className="text-indigo-400" />}
            title="Premium Selection"
            description="Access exclusive products curated from elite brands worldwide."
          />
          <FeatureCard
            icon={<FiShield className="text-purple-400" />}
            title="Secure Payments"
            description="Your transactions are protected by bank-level SSL encryption."
          />
          <FeatureCard
            icon={<FiZap className="text-pink-400" />}
            title="Ultra Fast"
            description="Experience lightning-quick loading times and instant checkout."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-[#1e293b] border border-slate-800 rounded-3xl hover:border-slate-700 transition-all group">
    <div className="w-12 h-12 bg-[#0f172a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default GuestDashboard;
