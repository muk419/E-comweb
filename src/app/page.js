"use client";
import { useAuth } from "@/context/AuthContext";
import DashboardPage from "./Dashboard/page";
import GuestDashboard from "@/components/GuestDashboard";
import { useState, useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f1f3f6]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2874f0]"></div>
      </div>
    );
  }

  return user ? <DashboardPage /> : <GuestDashboard />;
}
