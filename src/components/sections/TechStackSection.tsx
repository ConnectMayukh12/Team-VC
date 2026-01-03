/**
 * @fileoverview Tech Stack section showcasing technology
 * @module components/sections/TechStackSection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import { TECH_STACK } from "@/constants";

export function TechStackSection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="tech"
      className={`py-32 relative ${resolvedTheme === "dark" ? "" : "bg-white"}`}
    >
      {resolvedTheme === "dark" && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-900/10 to-transparent" />
      )}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${
              resolvedTheme === "dark" ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              System Architecture & Tech Stack
            </span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((item, i) => {
            const colorClasses: Record<
              string,
              { category: string; border: string; borderLight: string }
            > = {
              purple: {
                category:
                  resolvedTheme === "dark"
                    ? "text-purple-400"
                    : "text-purple-600",
                border: "hover:border-purple-500/30",
                borderLight: "hover:border-purple-300",
              },
              blue: {
                category:
                  resolvedTheme === "dark" ? "text-blue-400" : "text-blue-600",
                border: "hover:border-blue-500/30",
                borderLight: "hover:border-blue-300",
              },
              cyan: {
                category:
                  resolvedTheme === "dark" ? "text-cyan-400" : "text-cyan-600",
                border: "hover:border-cyan-500/30",
                borderLight: "hover:border-cyan-300",
              },
              green: {
                category:
                  resolvedTheme === "dark"
                    ? "text-green-400"
                    : "text-green-600",
                border: "hover:border-green-500/30",
                borderLight: "hover:border-green-300",
              },
              orange: {
                category:
                  resolvedTheme === "dark"
                    ? "text-orange-400"
                    : "text-orange-600",
                border: "hover:border-orange-500/30",
                borderLight: "hover:border-orange-300",
              },
            };

            const colors = colorClasses[item.color];

            return (
              <div
                key={i}
                className={`rounded-2xl border p-6 transition-all duration-500 group hover:-translate-y-2 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${
                  resolvedTheme === "dark"
                    ? `border-white/10 bg-linear-to-br from-white/5 to-transparent ${colors.border}`
                    : `border-slate-200 bg-white shadow-lg ${colors.borderLight} hover:shadow-xl`
                }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${colors.category}`}
                >
                  {item.category}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    resolvedTheme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.tech}
                </h3>
                <p
                  className={`text-sm ${
                    resolvedTheme === "dark"
                      ? "text-gray-400"
                      : "text-slate-600"
                  }`}
                >
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
