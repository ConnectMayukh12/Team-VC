/**
 * @fileoverview Application constants and configuration data
 * Centralizes all static data for easy maintenance
 * @module constants
 */

import type { NavLink, TechStackItem, WorkflowStep } from "@/types";

// ============================================================================
// Navigation Constants
// ============================================================================

/** Main navigation links */
export const NAV_LINKS: NavLink[] = [
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "Features", href: "/#features" },
  { label: "Tech Stack", href: "/#tech" },
  { label: "Team", href: "/team" },
];

// ============================================================================
// Hero Section Constants
// ============================================================================

/** Workflow steps shown in hero section */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  { label: "Select Social Media", color: "purple" },
  { label: "Upload Images", color: "blue" },
  { label: "Design Generation", color: "cyan" },
  { label: "Export & Share", color: "green" },
];

// ============================================================================
// Problem Section Constants
// ============================================================================

export const PROBLEM_CARDS = [
  {
    icon: "maze",
    title: "Complexity: The Maze of Guidelines",
    description:
      "Retailers demand adherence to rigid standards like safe zones and font sizes. Being 'almost correct' gets rejected.",
    alert: "High rejection rates",
    color: "red" as const,
  },
  {
    icon: "hourglass",
    title: "Cost & Speed: The Agency Bottleneck",
    description:
      "Manual agency work results in slow, expensive, and error-prone creative production.",
    alert: "Days to weeks turnaround",
    color: "orange" as const,
  },
  {
    icon: "tools",
    title: "Tooling Gap: The Dumb Tools",
    description:
      "Generic tools lack the intelligence to auto-enforce compliance rules or understand retailer constraints.",
    alert: "No compliance awareness",
    color: "yellow" as const,
  },
];

// ============================================================================
// Solution Section Constants
// ============================================================================

export const SOLUTION_STEPS = [
  {
    step: 1,
    title: "Input",
    description: "User uploads a creative brief and product packshot.",
    tags: ["Brief", "Packshot"],
    color: "purple" as const,
  },
  {
    step: 2,
    title: "Validation Agent",
    description: "Detects forbidden claims and validates copy rules.",
    tags: ["Claims", "Copy"],
    color: "blue" as const,
  },
  {
    step: 3,
    title: "Layout & Design Agents",
    description:
      "Plans safe zones, composes images using GenAI, and checks retailer rules (e.g., Tesco Appendix A/B).",
    tags: ["GenAI", "Rules"],
    color: "cyan" as const,
  },
  {
    step: 4,
    title: "Final Output",
    description:
      "Delivers platform-ready assets with auto-resized images and generated compliant copy.",
    tags: ["Export", "Ready"],
    color: "green" as const,
  },
];

// ============================================================================
// Features Section Constants
// ============================================================================

export const FEATURES = [
  {
    title: "Retailer-Grade Compliance Engine",
    description:
      "Encodes complex rules (Tesco Appendix A/B) into automated, explainable logic unmatched in current tools.",
    icon: "shieldCheck",
    color: "purple" as const,
  },
  {
    title: "Multi-Agent Intelligent Workflow",
    description:
      "Every stage (copy, layout, image, compliance) is handled by purpose-built AI agents.",
    icon: "bolt",
    color: "cyan" as const,
  },
  {
    title: "Deterministic & Transparent Outputs",
    description:
      "Structured JSON layouts and rule-based compliance ensure reproducibility and trust.",
    icon: "clipboardCheck",
    color: "green" as const,
  },
  {
    title: "Platform-Optimized Generation",
    description:
      "Auto-generating multi-format outputs (9:16, 1:1, 4:5) with layout reflow.",
    icon: "layout",
    color: "orange" as const,
  },
];

// ============================================================================
// Tech Stack Constants
// ============================================================================

export const TECH_STACK: TechStackItem[] = [
  {
    category: "Orchestration",
    tech: "LangGraph",
    details:
      "Modular Agentic Architecture for predictable, stateful workflows.",
    color: "purple",
  },
  {
    category: "Image Processing",
    tech: "Gemini Nano / Banana Pro",
    details: "Fast, on-device image understanding for orientation and framing.",
    color: "blue",
  },
  {
    category: "Reasoning Engine",
    tech: "Claude Sonnet / Opus",
    details:
      "High-precision reasoning for packshot integrity and copy compliance.",
    color: "cyan",
  },
  {
    category: "Backend",
    tech: "FastAPI + Celery/Redis",
    details: "Worker queues for handling asynchronous agent tasks.",
    color: "green",
  },
  {
    category: "Frontend",
    tech: "React / Next.js",
    details: "Lightweight frontend interface.",
    color: "orange",
  },
];

// ============================================================================
// Impact Section Constants
// ============================================================================

export const IMPACT_STATS = [
  {
    value: "70-90%",
    description: "Reduction in Creative Production Cost",
    color: "purple" as const,
  },
  {
    value: "~$400",
    description: "Saved per asset by reducing agency reliance",
    color: "cyan" as const,
  },
  {
    value: "100%",
    description: "Retailer Compliance via Automated Enforcement",
    color: "green" as const,
  },
];

// ============================================================================
// Theme Constants
// ============================================================================

/** Aurora background color stops for dark mode */
export const AURORA_COLORS_DARK: [string, string, string] = [
  "#5227FF",
  "#7cff67",
  "#5227FF",
];

/** Aurora background color stops for light mode (not currently used) */
export const AURORA_COLORS_LIGHT: [string, string, string] = [
  "#7C3AED",
  "#0891B2",
  "#7C3AED",
];

// ============================================================================
// Animation Constants
// ============================================================================

/** Animation delay multiplier for staggered animations */
export const ANIMATION_STAGGER_DELAY = 100;

/** Default animation duration in ms */
export const ANIMATION_DURATION = 700;
