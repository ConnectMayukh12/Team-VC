/**
 * @fileoverview Dashboard Header Component
 * @module pages/DashboardPage/components/DashboardHeader
 */

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sparkles as SparklesIcon, LogOut as LogOutIcon } from "lucide-react";

interface DashboardHeaderProps {
  resolvedTheme: string | undefined;
  onLogout: () => void;
}

export function DashboardHeader({
  resolvedTheme,
  onLogout,
}: DashboardHeaderProps) {
  return (
    <header
      className={`flex h-16 items-center justify-between border-b px-6 ${
        resolvedTheme === "dark" ? "border-zinc-800" : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger
          className={
            resolvedTheme === "dark"
              ? "text-zinc-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }
        />
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-5 w-5 text-green-500" />
          <h1
            className={`text-xl font-semibold ${
              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Generate Your Creation
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle variant="minimal" />
        <button
          onClick={onLogout}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            resolvedTheme === "dark"
              ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <LogOutIcon className="h-4 w-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
}
