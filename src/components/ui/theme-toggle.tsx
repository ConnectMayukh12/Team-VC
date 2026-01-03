import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

interface ThemeToggleProps {
  className?: string;
  variant?: "default" | "minimal" | "dropdown";
}

export function ThemeToggle({
  className,
  variant = "default",
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (variant === "minimal") {
    return (
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className={cn(
          "relative inline-flex items-center justify-center",
          "w-10 h-10 rounded-full",
          "backdrop-blur-sm border transition-all duration-300",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          resolvedTheme === "dark"
            ? "bg-white/10 hover:bg-white/20 border-white/10 text-white"
            : "bg-slate-900/10 hover:bg-slate-900/20 border-slate-900/10 text-slate-900",
          className
        )}
        aria-label={`Switch to ${
          resolvedTheme === "dark" ? "light" : "dark"
        } mode`}
      >
        <SunIcon
          className={cn(
            "absolute transition-all duration-500",
            resolvedTheme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <MoonIcon
          className={cn(
            "absolute transition-all duration-500",
            resolvedTheme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
      </button>
    );
  }

  if (variant === "dropdown") {
    return (
      <div className={cn("relative group", className)}>
        <button
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "px-3 py-2 rounded-lg",
            "bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10",
            "backdrop-blur-sm border border-white/10",
            "text-foreground text-sm font-medium",
            "transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          )}
          aria-label="Theme options"
        >
          {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
          <span className="capitalize">{theme}</span>
        </button>

        <div
          className={cn(
            "absolute right-0 top-full mt-2 z-50",
            "min-w-35 p-1 rounded-lg",
            "bg-popover/95 backdrop-blur-md",
            "border border-white/10 shadow-xl shadow-black/20",
            "opacity-0 invisible translate-y-2",
            "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
            "transition-all duration-200"
          )}
        >
          {(["light", "dark", "system"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 rounded-md",
                "text-sm transition-colors duration-150",
                theme === t
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-white/10 text-foreground/80"
              )}
            >
              {t === "light" && <SunIcon className="w-4 h-4" />}
              {t === "dark" && <MoonIcon className="w-4 h-4" />}
              {t === "system" && <MonitorIcon className="w-4 h-4" />}
              <span className="capitalize">{t}</span>
              {theme === t && (
                <svg
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default: Segmented control
  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded-full",
        "bg-white/10 dark:bg-white/5 backdrop-blur-sm",
        "border border-white/10",
        className
      )}
    >
      {(["light", "dark", "system"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={cn(
            "relative inline-flex items-center justify-center",
            "w-9 h-9 rounded-full",
            "transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            theme === t
              ? "bg-white/20 dark:bg-white/15 text-foreground shadow-sm"
              : "text-foreground/60 hover:text-foreground hover:bg-white/10"
          )}
          aria-label={`${t} theme`}
          title={`${t.charAt(0).toUpperCase() + t.slice(1)} theme`}
        >
          {t === "light" && <SunIcon className="w-4 h-4" />}
          {t === "dark" && <MoonIcon className="w-4 h-4" />}
          {t === "system" && <MonitorIcon className="w-4 h-4" />}
        </button>
      ))}
    </div>
  );
}
