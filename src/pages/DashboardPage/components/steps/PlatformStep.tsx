/**
 * @fileoverview Platform Selection Step Component
 * @module pages/DashboardPage/components/steps/PlatformStep
 */

import {
  Check as CheckIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  MessageCircle as MessageCircleIcon,
  Linkedin as LinkedinIcon,
} from "lucide-react";

interface PlatformStepProps {
  resolvedTheme: string | undefined;
  selectedPlatforms: string[];
  onTogglePlatform: (platform: string) => void;
}

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function PlatformStep({
  resolvedTheme,
  selectedPlatforms,
  onTogglePlatform,
}: PlatformStepProps) {
  const platforms = [
    {
      name: "Facebook",
      dimensions: "1200 × 628 px",
      icon: FacebookIcon,
      color: "#1877F2",
    },
    {
      name: "Instagram",
      dimensions: "1080 × 1080 px",
      icon: InstagramIcon,
      color: "#E4405F",
    },
    {
      name: "WhatsApp",
      dimensions: "800 × 800 px",
      icon: MessageCircleIcon,
      color: "#25D366",
    },
    {
      name: "LinkedIn",
      dimensions: "1200 × 627 px",
      icon: LinkedinIcon,
      color: "#0A66C2",
    },
    {
      name: "X.com",
      dimensions: "1600 × 900 px",
      icon: XIcon,
      color: resolvedTheme === "dark" ? "#FFFFFF" : "#000000",
    },
  ];

  return (
    <div className="space-y-4">
      <h2
        className={`text-xl font-semibold flex items-center gap-2 ${
          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500 text-sm">
          1
        </span>
        Choose Platform
      </h2>
      <p
        className={resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"}
      >
        Select one or more platforms for your creative content.
      </p>

      {selectedPlatforms.length > 0 ? (
        <div
          className={`text-sm ${
            resolvedTheme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          {selectedPlatforms.length} platform
          {selectedPlatforms.length > 1 ? "s" : ""} selected
        </div>
      ) : (
        <div
          className={`text-sm ${
            resolvedTheme === "dark" ? "text-amber-400" : "text-amber-600"
          }`}
        >
          ⚠ Please select at least one platform to continue
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {platforms.map((platform) => {
          const isSelected = selectedPlatforms.includes(platform.name);
          const IconComponent = platform.icon;
          return (
            <div
              key={platform.name}
              onClick={() => onTogglePlatform(platform.name)}
              className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98] ${
                isSelected
                  ? "border-green-500 bg-green-500/10"
                  : resolvedTheme === "dark"
                  ? "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50"
                  : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                  <CheckIcon className="h-3 w-3 text-white" />
                </div>
              )}
              <div
                className={`h-16 rounded-md mb-3 flex items-center justify-center transition-colors duration-200 ${
                  resolvedTheme === "dark"
                    ? "bg-zinc-800 group-hover:bg-zinc-700"
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                <IconComponent
                  className="h-8 w-8"
                  style={{ color: platform.color }}
                />
              </div>
              <p
                className={
                  resolvedTheme === "dark"
                    ? "text-white font-medium"
                    : "text-gray-900 font-medium"
                }
              >
                {platform.name}
              </p>
              <p
                className={
                  resolvedTheme === "dark"
                    ? "text-zinc-500 text-sm"
                    : "text-gray-400 text-sm"
                }
              >
                {platform.dimensions}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
