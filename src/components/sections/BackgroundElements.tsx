/**
 * @fileoverview Background animated elements
 * @module components/sections/BackgroundElements
 */

import { useTheme } from "@/context/ThemeContext";

interface BackgroundElementsProps {
  scrollY: number;
}

export function BackgroundElements({ scrollY }: BackgroundElementsProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-1">
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          resolvedTheme === "dark" ? "bg-purple-600/20" : "bg-purple-400/30"
        }`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
          resolvedTheme === "dark" ? "bg-blue-600/15" : "bg-blue-400/25"
        }`}
        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
      />
      <div
        className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl ${
          resolvedTheme === "dark" ? "bg-cyan-500/10" : "bg-cyan-400/20"
        }`}
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
    </div>
  );
}
