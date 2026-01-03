/**
 * @fileoverview Solution section showcasing the AI workflow
 * @module components/sections/SolutionSection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import { SOLUTION_STEPS } from "@/constants";

export function SolutionSection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  const colorClasses = {
    purple: {
      gradient: "from-purple-500/10 via-purple-500/5",
      border: "hover:border-purple-500/30",
      borderLight: "hover:border-purple-300",
      step: "bg-purple-500 shadow-purple-500/30",
      title: resolvedTheme === "dark" ? "text-purple-300" : "text-purple-600",
      tag:
        resolvedTheme === "dark"
          ? "bg-purple-500/20 text-purple-300"
          : "bg-purple-100 text-purple-600",
    },
    blue: {
      gradient: "from-blue-500/10 via-blue-500/5",
      border: "hover:border-blue-500/30",
      borderLight: "hover:border-blue-300",
      step: "bg-blue-500 shadow-blue-500/30",
      title: resolvedTheme === "dark" ? "text-blue-300" : "text-blue-600",
      tag:
        resolvedTheme === "dark"
          ? "bg-blue-500/20 text-blue-300"
          : "bg-blue-100 text-blue-600",
    },
    cyan: {
      gradient: "from-cyan-500/10 via-cyan-500/5",
      border: "hover:border-cyan-500/30",
      borderLight: "hover:border-cyan-300",
      step: "bg-cyan-500 shadow-cyan-500/30",
      title: resolvedTheme === "dark" ? "text-cyan-300" : "text-cyan-600",
      tag:
        resolvedTheme === "dark"
          ? "bg-cyan-500/20 text-cyan-300"
          : "bg-cyan-100 text-cyan-600",
    },
    green: {
      gradient: "from-green-500/10 via-green-500/5",
      border: "hover:border-green-500/30",
      borderLight: "hover:border-green-300",
      step: "bg-green-500 shadow-green-500/30",
      title: resolvedTheme === "dark" ? "text-green-300" : "text-green-600",
      tag:
        resolvedTheme === "dark"
          ? "bg-green-500/20 text-green-300"
          : "bg-green-100 text-green-600",
    },
  };

  return (
    <section ref={ref} id="solution" className="py-32 relative">
      {resolvedTheme === "dark" && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/10 to-transparent" />
      )}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${
              resolvedTheme === "dark" ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Our Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              Retail Media Creative Builder:
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              An Agentic AI Approach
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              resolvedTheme === "dark" ? "text-gray-400" : "text-slate-600"
            }`}
          >
            An intelligent system that acts as both a creator and a compliance
            officer.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {SOLUTION_STEPS.map((stepData, index) => {
              const colors = colorClasses[stepData.color];

              return (
                <div
                  key={index}
                  className={`relative group h-full transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <div
                    className={`relative rounded-3xl border p-8 transition-all hover:transform hover:-translate-y-2 duration-300 h-full ${
                      resolvedTheme === "dark"
                        ? `border-white/10 bg-linear-to-br ${colors.gradient} to-transparent ${colors.border}`
                        : `border-slate-200 bg-white shadow-lg ${colors.borderLight} hover:shadow-xl`
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${colors.step} flex items-center justify-center text-lg font-bold mb-6 shadow-lg text-white`}
                    >
                      {stepData.step}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${colors.title}`}>
                      {stepData.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        resolvedTheme === "dark"
                          ? "text-gray-400"
                          : "text-slate-600"
                      }`}
                    >
                      {stepData.description}
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {stepData.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 rounded-md text-xs ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
