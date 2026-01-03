/**
 * @fileoverview Impact section showcasing stats and value proposition
 * @module components/sections/ImpactSection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import { IMPACT_STATS } from "@/constants";

export function ImpactSection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  const colorClasses = {
    purple: {
      glow: "from-purple-500/20",
      border: "hover:border-purple-500/30",
      borderLight: "hover:border-purple-300",
      value: "from-purple-400 to-purple-300",
    },
    cyan: {
      glow: "from-cyan-500/20",
      border: "hover:border-cyan-500/30",
      borderLight: "hover:border-cyan-300",
      value: "from-cyan-400 to-cyan-300",
    },
    green: {
      glow: "from-green-500/20",
      border: "hover:border-green-500/30",
      borderLight: "hover:border-green-300",
      value: "from-green-400 to-green-300",
    },
  };

  return (
    <section
      ref={ref}
      className={`py-32 relative ${
        resolvedTheme === "dark" ? "" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${
              resolvedTheme === "dark" ? "text-green-400" : "text-green-600"
            }`}
          >
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              Impact & Value Proposition
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {IMPACT_STATS.map((stat, index) => {
            const colors = colorClasses[stat.color];

            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {resolvedTheme === "dark" && (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${colors.glow} to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                )}
                <div
                  className={`relative rounded-3xl border p-10 text-center transition-all duration-300 hover:-translate-y-2 ${
                    resolvedTheme === "dark"
                      ? `border-white/10 bg-linear-to-br from-white/5 to-transparent ${colors.border}`
                      : `border-slate-200 bg-white shadow-lg ${colors.borderLight} hover:shadow-xl`
                  }`}
                >
                  <div
                    className={`text-6xl font-bold bg-linear-to-r ${colors.value} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.value}
                  </div>
                  <p
                    className={
                      resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-slate-600"
                    }
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
