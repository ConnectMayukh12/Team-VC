/**
 * @fileoverview Shared TypeScript types and interfaces
 * @module types
 */

import type { ReactNode } from "react";

// ============================================================================
// Theme Types
// ============================================================================

/** Available theme modes */
export type Theme = "light" | "dark" | "system";

/** Resolved theme after system preference is applied */
export type ResolvedTheme = "light" | "dark";

/** Theme context value */
export interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

// ============================================================================
// Component Props Types
// ============================================================================

/** Base props for components that support className */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/** Props for icon components */
export interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/** Props for section components */
export interface SectionProps {
  id?: string;
  className?: string;
}

// ============================================================================
// Data Types
// ============================================================================

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
}

/** Tech stack item */
export interface TechStackItem {
  category: string;
  tech: string;
  details: string;
  color: "purple" | "blue" | "cyan" | "green" | "orange";
}

/** Feature item */
export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
  color: "purple" | "cyan" | "green" | "orange";
}

/** Problem card item */
export interface ProblemCard {
  icon: ReactNode;
  title: string;
  description: string;
  alert: string;
  color: "red" | "orange" | "yellow";
}

/** Solution step item */
export interface SolutionStep {
  step: number;
  title: string;
  description: string;
  tags: string[];
  color: "purple" | "blue" | "cyan" | "green";
}

/** Impact stat item */
export interface ImpactStat {
  value: string;
  description: string;
  color: "purple" | "cyan" | "green";
}

/** Workflow step item */
export interface WorkflowStep {
  label: string;
  color: string;
}

// ============================================================================
// Hook Types
// ============================================================================

/** Return type for useInView hook */
export interface UseInViewReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
}

/** Options for useInView hook */
export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// ============================================================================
// Utility Types
// ============================================================================

/** Color variants used across the application */
export type ColorVariant =
  | "purple"
  | "blue"
  | "cyan"
  | "green"
  | "orange"
  | "red"
  | "yellow";

/** Aurora background color stops */
export type AuroraColorStops = [string, string, string];
