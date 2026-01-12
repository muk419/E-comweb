"use client";
import { useAuth } from "@/context/AuthContext";
import DashboardPage from "./Dashboard/page";
import GuestDashboard from "@/components/GuestDashboard";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return user ? <DashboardPage /> : <GuestDashboard />;
}
