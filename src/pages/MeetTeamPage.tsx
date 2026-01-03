/**
 * @fileoverview Meet the Team page
 * @module pages/MeetTeamPage
 */

import { useTheme } from "@/context/ThemeContext";
import {
  Navbar,
  Footer,
  BackgroundElements,
  OrbitCarousel,
} from "@/components";
import { useState, useEffect } from "react";

export function MeetTeamPage() {
  const [scrollY, setScrollY] = useState(0);
  const { resolvedTheme } = useTheme();

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen overflow-x-hidden animate-page-enter ${
        resolvedTheme === "dark"
          ? "bg-linear-to-br from-[#0f0a1f] via-[#1a1035] to-[#0d1117] text-white"
          : "bg-linear-to-br from-slate-50 via-purple-50/50 to-slate-100 text-slate-900"
      }`}
    >
      {/* Animated Background Elements */}
      <BackgroundElements scrollY={scrollY} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <span
              className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${
                resolvedTheme === "dark" ? "text-purple-400" : "text-purple-600"
              }`}
            >
              The People Behind
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span
                className={`bg-linear-to-r bg-clip-text text-transparent ${
                  resolvedTheme === "dark"
                    ? "from-white via-purple-200 to-white"
                    : "from-slate-900 via-purple-800 to-slate-900"
                }`}
              >
                Meet Our Team
              </span>
            </h1>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                resolvedTheme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}
            >
              The talented individuals driving innovation in retail media
              creative production.
            </p>
          </div>

          {/* Team Carousel */}
          <div
            className={`rounded-3xl border overflow-hidden ${
              resolvedTheme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-white shadow-lg"
            }`}
          >
            <OrbitCarousel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
