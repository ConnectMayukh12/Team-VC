/**
 * @fileoverview Problem section highlighting industry challenges
 * @module components/sections/ProblemSection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import {
  MazeIcon,
  HourglassIcon,
  ToolsIcon,
  WarningIcon,
  ClockIcon,
  BanIcon,
} from "@/components/icons";
import { PROBLEM_CARDS } from "@/constants";

const iconMap = {
  maze: MazeIcon,
  hourglass: HourglassIcon,
  tools: ToolsIcon,
};

const alertIconMap = {
  red: WarningIcon,
  orange: ClockIcon,
  yellow: BanIcon,
};

export function ProblemSection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="problem"
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
              resolvedTheme === "dark" ? "text-purple-400" : "text-purple-600"
            }`}
          >
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              The Compliance Barrier in
            </span>
            <br />
            <span className="bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Retail Media Creative Production
            </span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEM_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            const AlertIconComponent =
              alertIconMap[card.color as keyof typeof alertIconMap];

            const colorClasses = {
              red: {
                glow: "from-red-500/20",
                border: "hover:border-red-500/30",
                borderLight: "hover:border-red-300",
                icon: "bg-red-500/20 text-red-400",
                alert: "text-red-400",
              },
              orange: {
                glow: "from-orange-500/20",
                border: "hover:border-orange-500/30",
                borderLight: "hover:border-orange-300",
                icon: "bg-orange-500/20 text-orange-400",
                alert: "text-orange-400",
              },
              yellow: {
                glow: "from-yellow-500/20",
                border: "hover:border-yellow-500/30",
                borderLight: "hover:border-yellow-300",
                icon: "bg-yellow-500/20 text-yellow-500",
                alert: "text-yellow-500",
              },
            };

            const colors = colorClasses[card.color];

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colors.glow} to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className={`relative rounded-3xl border p-8 h-full transition-all duration-300 hover:-translate-y-2 ${
                    resolvedTheme === "dark"
                      ? `border-white/10 bg-linear-to-br from-white/5 to-transparent ${colors.border}`
                      : `border-slate-200 bg-white shadow-lg ${colors.borderLight} hover:shadow-xl`
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}
                  >
                    <IconComponent />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      resolvedTheme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-slate-600"
                    }`}
                  >
                    {card.description}
                  </p>
                  <div
                    className={`mt-6 pt-6 border-t ${
                      resolvedTheme === "dark"
                        ? "border-white/5"
                        : "border-slate-100"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 ${colors.alert} text-sm`}
                    >
                      <AlertIconComponent />
                      <span>{card.alert}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
