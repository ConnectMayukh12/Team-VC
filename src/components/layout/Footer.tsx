/**
 * @fileoverview Footer component
 * @module components/layout/Footer
 */

import { useTheme } from "@/context/ThemeContext";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer
      className={`py-12 border-t ${
        resolvedTheme === "dark"
          ? "border-white/5"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={
                resolvedTheme === "dark" ? "/White Logo.png" : "/Black-Logo.png"
              }
              alt="Team VC Logo"
              className="h-16 w-auto"
            />
            <span
              className={`text-xl font-devonshire ${
                resolvedTheme === "dark" ? "" : "text-slate-900"
              }`}
            >
              Retail Media <span className="text-2xl">Creative Builder</span>
            </span>
          </div>
          <div
            className={`text-sm ${
              resolvedTheme === "dark" ? "text-gray-500" : "text-slate-500"
            }`}
          >
            Presented by{" "}
            <span
              className={`font-semibold ${
                resolvedTheme === "dark" ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Team VC
            </span>
          </div>
          <div
            className={`text-sm ${
              resolvedTheme === "dark" ? "text-gray-500" : "text-slate-500"
            }`}
          >
            © 2025 Retail Media Creative Builder
          </div>
        </div>
      </div>
    </footer>
  );
}
