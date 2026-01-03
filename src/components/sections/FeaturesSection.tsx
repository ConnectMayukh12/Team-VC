/**
 * @fileoverview Features section highlighting capabilities
 * @module components/sections/FeaturesSection
 */

import { useTheme } from "@/context/ThemeContext";
import { useInView } from "@/hooks";
import {
  ShieldCheckIcon,
  BoltIcon,
  ClipboardCheckIcon,
  LayoutIcon,
} from "@/components/icons";
import { FEATURES } from "@/constants";

const iconMap = {
  shieldCheck: ShieldCheckIcon,
  bolt: BoltIcon,
  clipboardCheck: ClipboardCheckIcon,
  layout: LayoutIcon,
};

export function FeaturesSection() {
  const { resolvedTheme } = useTheme();
  const { ref, isInView } = useInView();

  const colorClasses = {
    purple: {
      border: "hover:border-purple-500/30",
      borderLight: "hover:border-purple-300",
      icon: "from-purple-500/30 to-purple-600/30 text-purple-400",
    },
    cyan: {
      border: "hover:border-cyan-500/30",
      borderLight: "hover:border-cyan-300",
      icon: "from-cyan-500/30 to-cyan-600/30 text-cyan-400",
    },
    green: {
      border: "hover:border-green-500/30",
      borderLight: "hover:border-green-300",
      icon: "from-green-500/30 to-green-600/30 text-green-400",
    },
    orange: {
      border: "hover:border-orange-500/30",
      borderLight: "hover:border-orange-300",
      icon: "from-orange-500/30 to-orange-600/30 text-orange-400",
    },
  };

  return (
    <section
      ref={ref}
      id="features"
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
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent ${
                resolvedTheme === "dark"
                  ? "from-white to-gray-400"
                  : "from-slate-900 to-slate-600"
              }`}
            >
              Uniqueness & Capabilities
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const colors = colorClasses[feature.color];

            return (
              <div
                key={index}
                className={`group relative rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${
                  resolvedTheme === "dark"
                    ? `border-white/10 bg-linear-to-br from-white/5 to-transparent ${colors.border}`
                    : `border-slate-200 bg-white shadow-lg ${colors.borderLight} hover:shadow-xl`
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${colors.icon} flex items-center justify-center shrink-0`}
                  >
                    <IconComponent />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        resolvedTheme === "dark"
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        resolvedTheme === "dark"
                          ? "text-gray-400"
                          : "text-slate-600"
                      }`}
                    >
                      {feature.description}
                    </p>
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
