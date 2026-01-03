/**
 * @fileoverview Centralized icon components using SVG
 * All icons are optimized for consistency and reusability
 * @module components/icons
 */

import { cn } from "@/lib/utils";
import type { IconProps } from "@/types";

// ============================================================================
// Navigation Icons
// ============================================================================

export const MenuIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ============================================================================
// Problem Section Icons
// ============================================================================

export const MazeIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-8 h-8", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M3 3h18v18H3V3z" />
    <path d="M3 9h12v6H9v6" />
    <path d="M15 3v6h6" />
    <path d="M9 3v3h6" />
  </svg>
);

export const HourglassIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-8 h-8", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M6 2h12v4c0 3-2 5-6 7-4-2-6-4-6-7V2z" />
    <path d="M6 22h12v-4c0-3-2-5-6-7-4 2-6 4-6 7v4z" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const ToolsIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-8 h-8", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

// ============================================================================
// Action Icons
// ============================================================================

export const CheckIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ArrowDownIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export const PlayIcon = ({ className }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

// ============================================================================
// UI Icons
// ============================================================================

export const LayersIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

// ============================================================================
// Alert/Status Icons
// ============================================================================

export const WarningIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export const ClockIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const BanIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-4 h-4", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

// ============================================================================
// Feature Icons
// ============================================================================

export const ShieldCheckIcon = ({
  className,
  strokeWidth = 1.5,
}: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const BoltIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const ClipboardCheckIcon = ({
  className,
  strokeWidth = 1.5,
}: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

export const LayoutIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    className={cn("w-6 h-6", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

// ============================================================================
// Theme Icons (Re-exported from theme-toggle for convenience)
// ============================================================================

export const SunIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
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

export const MoonIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const MonitorIcon = ({ className, strokeWidth = 2 }: IconProps) => (
  <svg
    className={cn("w-5 h-5", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);
