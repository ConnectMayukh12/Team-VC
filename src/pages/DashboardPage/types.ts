/**
 * @fileoverview Type definitions for Dashboard
 * @module pages/DashboardPage/types
 */

export interface Generation {
  id: string;
  name: string;
  timestamp: string;
  thumbnail?: string;
}

export interface ChatMessage {
  role: "user" | "ai";
  content: string;
  type?: "text" | "image";
}

export interface Command {
  name: string;
  description: string;
}

export interface Platform {
  name: string;
  dimensions: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

export interface PostType {
  label: string;
  icon: string;
}

export interface ColorPalette {
  name: string;
  colors: string[];
}

export interface FormData {
  platforms: string[];
  uploadedFiles: { name: string; size: number; type: string }[];
  postDescription: string;
  headline: string;
  callToAction: string;
  offerDiscount: string;
  postType: string | null;
  colorPalette: string | null;
}
