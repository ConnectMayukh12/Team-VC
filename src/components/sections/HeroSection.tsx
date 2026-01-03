/**
 * @fileoverview Hero section with Aurora background and main CTA
 * @module components/sections/HeroSection
 */

import Aurora from "@/components/Aurora";
import { Spider } from "@/components/Spider";
import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import { PlayIcon, ArrowRightIcon, ArrowDownIcon } from "@/components/icons";
import { WORKFLOW_STEPS, AURORA_COLORS_DARK } from "@/constants";
import { Link } from "react-router-dom";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const { ref } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-27 overflow-hidden"
    >
      {/* Aurora Background - Hero Only (Dark mode only) */}
      {resolvedTheme === "dark" && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Aurora colorStops={AURORA_COLORS_DARK} amplitude={1} blend={0.5} />
        </div>
      )}

      {/* Gradient fade at bottom of aurora */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-1 ${
          resolvedTheme === "dark"
            ? "bg-linear-to-t from-[#0f0a1f] to-transparent"
            : "bg-linear-to-t from-slate-50 to-transparent"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-2">
        {/* Hero Content - Side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div
            className={`flex-1 text-center lg:text-left px-4 sm:px-0 ${
              resolvedTheme === "light" ? "drop-shadow-sm" : ""
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in-down ${
                resolvedTheme === "dark"
                  ? "bg-linear-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
                  : "bg-white/70 backdrop-blur-sm border border-purple-300/40 shadow-sm"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className={`text-sm font-medium ${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-slate-600"
                }`}
              >
                AI-Powered Retail Media Solution
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
              <span
                className={`bg-linear-to-r bg-clip-text text-transparent ${
                  resolvedTheme === "dark"
                    ? "from-white via-purple-200 to-white"
                    : "from-slate-900 via-purple-800 to-slate-900"
                }`}
              >
                Bridging the Gap Between
              </span>
              <br />
              <span
                className={`bg-linear-to-r bg-clip-text text-transparent ${
                  resolvedTheme === "dark"
                    ? "from-purple-400 via-cyan-400 to-purple-400"
                    : "from-purple-600 via-cyan-500 to-purple-600"
                }`}
              >
                Agility and Compliance
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-3xl mb-3 sm:mb-4 font-medium animate-fade-in-up animate-delay-200 opacity-0 ${
                resolvedTheme === "dark" ? "text-gray-400" : "text-slate-700"
              }`}
              style={{ animationFillMode: "forwards" }}
            >
              Automates End-to-End Creative Production
            </p>
            <p
              className={`text-base sm:text-lg max-w-2xl mb-8 sm:mb-12 animate-fade-in-up animate-delay-300 opacity-0 ${
                resolvedTheme === "dark" ? "text-gray-500" : "text-slate-600"
              }`}
              style={{ animationFillMode: "forwards" }}
            >
              Generate platform-specific, retailer-compliant ad creatives from a
              simple brief and packshot input.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0 animate-fade-in-up animate-delay-400 opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <Link
                to="/dashboard"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-3 font-semibold text-white text-sm sm:text-base"
              >
                <PlayIcon />
                Launch Dashboard
                <ArrowRightIcon />
              </Link>
              <Link
                to="/team"
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base ${
                  resolvedTheme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                    : "bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 hover:border-slate-900/20"
                }`}
              >
                View Team Members
              </Link>
            </div>
          </div>

          {/* Right side - Spider Integration Visual */}
          <div className="shrink-0 mt-12 lg:mt-0">
            <Spider />
          </div>
        </div>

        {/* Hero Visual - Workflow Steps */}
        <div className="mt-20 relative">
          <div
            className={`absolute inset-0 bg-linear-to-t via-transparent to-transparent z-10 pointer-events-none ${
              resolvedTheme === "dark" ? "from-[#0f0a1f]" : "from-slate-50"
            }`}
          />
          <div
            className={`relative rounded-2xl border p-1 backdrop-blur-sm ${
              resolvedTheme === "dark"
                ? "border-white/10 bg-linear-to-br from-white/5 to-transparent"
                : "border-slate-200 bg-linear-to-br from-white/80 to-transparent shadow-xl"
            }`}
          >
            <div
              className={`rounded-xl p-8 min-h-75 flex items-center justify-center ${
                resolvedTheme === "dark"
                  ? "bg-linear-to-br from-[#1a1035] to-[#0d1117]"
                  : "bg-linear-to-br from-white to-slate-50"
              }`}
            >
              <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
                {WORKFLOW_STEPS.map((step, i) => (
                  <div key={i} className="relative flex items-center">
                    {/* Step Box */}
                    <div className="flex flex-col items-center gap-2 sm:gap-3 z-10">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold transition-all duration-300
                          ${
                            i === 0
                              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 animate-step-1"
                              : ""
                          }
                          ${
                            i === 1
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 animate-step-2"
                              : ""
                          }
                          ${
                            i === 2
                              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 animate-step-3"
                              : ""
                          }
                          ${
                            i === 3
                              ? "bg-green-500/20 text-green-400 border border-green-500/30 animate-step-4"
                              : ""
                          }
                        `}
                      >
                        {i + 1}
                      </div>
                      <span
                        className={`text-xs sm:text-sm text-center max-w-17.5 sm:max-w-none leading-tight ${
                          resolvedTheme === "dark"
                            ? "text-gray-400"
                            : "text-slate-600"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* Animated Ray to next step */}
                    {i < 3 && (
                      <div className="hidden sm:block relative w-6 sm:w-8 md:w-16 h-1 mx-1 sm:mx-2 overflow-hidden -translate-y-4">
                        {/* Background track */}
                        <div
                          className={`absolute inset-0 rounded-full ${
                            resolvedTheme === "dark"
                              ? "bg-white/10"
                              : "bg-slate-200"
                          }`}
                        />
                        {/* Animated ray */}
                        <div
                          className={`absolute left-0 top-0 h-full rounded-full
                            ${
                              i === 0
                                ? "bg-linear-to-r from-purple-500 to-blue-500 animate-ray-1"
                                : ""
                            }
                            ${
                              i === 1
                                ? "bg-linear-to-r from-blue-500 to-cyan-500 animate-ray-2"
                                : ""
                            }
                            ${
                              i === 2
                                ? "bg-linear-to-r from-cyan-500 to-green-500 animate-ray-3"
                                : ""
                            }
                          `}
                          style={{ width: 0 }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500">Scroll to explore</span>
        <ArrowDownIcon className="w-5 h-5 text-gray-500" />
      </div>
    </section>
  );
}
