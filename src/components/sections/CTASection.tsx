/**
 * @fileoverview CTA (Call to Action) section
 * @module components/sections/CTASection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import { PlayIcon, ArrowRightIcon } from "@/components/icons";

export function CTASection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-32 relative ${resolvedTheme === "dark" ? "" : "bg-white"}`}
    >
      {resolvedTheme === "dark" && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/20 to-transparent" />
      )}
      <div className="max-w-4xl mx-auto px-6 relative">
        <div
          className={`rounded-3xl border p-12 md:p-16 text-center backdrop-blur-sm transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } ${
            resolvedTheme === "dark"
              ? "border-white/10 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10"
              : "border-slate-200 bg-linear-to-br from-purple-50 via-white to-cyan-50 shadow-xl"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-300"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              Ready to Transform Your Creative Production?
            </span>
          </h2>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Experience the power of AI-driven compliance and creative
            generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 flex items-center justify-center gap-3 font-semibold text-white">
              <PlayIcon />
              Launch Demo
              <ArrowRightIcon />
            </button>
            <button
              className={`px-8 py-4 rounded-xl border transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 font-semibold ${
                resolvedTheme === "dark"
                  ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white"
                  : "bg-slate-100 hover:bg-slate-200 border-slate-200 hover:border-slate-300 text-slate-900"
              }`}
            >
              View Architecture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
