"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { FiLogOut, FiUser, FiLogIn, FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#1e293b] border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        E-Com App
      </Link>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <div className="flex items-center space-x-2 mr-4 text-slate-300">
              <FiUser className="text-indigo-400" />
              <span className="text-sm font-medium">{user.username || "User"}</span>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/30 rounded-lg transition-all duration-200 flex items-center space-x-2 text-sm font-semibold"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              href="/Login"
              className="px-4 py-2 text-slate-300 hover:text-white flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <FiLogIn />
              <span>Login</span>
            </Link>
            <Link
              href="/Register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all flex items-center space-x-2 text-sm font-semibold shadow-lg shadow-indigo-500/20"
            >
              <FiUserPlus />
              <span>Register</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
