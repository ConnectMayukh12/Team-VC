/**
 * @fileoverview Constants for Dashboard
 * @module pages/DashboardPage/constants
 */

import type { Generation, Command, PostType, ColorPalette } from "./types";

export const MOCK_GENERATIONS: Generation[] = [
  { id: "1", name: "Summer Sale Banner", timestamp: "2 hours ago" },
  { id: "2", name: "Holiday Promotion", timestamp: "5 hours ago" },
  { id: "3", name: "New Product Launch", timestamp: "1 day ago" },
  { id: "4", name: "Weekly Deals", timestamp: "2 days ago" },
  { id: "5", name: "Back to School", timestamp: "3 days ago" },
];

export const AVAILABLE_COMMANDS: Command[] = [
  { name: "Rotate", description: "Rotate the image by degrees" },
  { name: "Opacity", description: "Adjust image opacity (0-100)" },
  { name: "Resize", description: "Resize image dimensions" },
  { name: "Filter", description: "Apply color filters" },
  { name: "Brightness", description: "Adjust brightness level" },
  { name: "Contrast", description: "Adjust contrast level" },
  { name: "Blur", description: "Apply blur effect" },
  { name: "Crop", description: "Crop the image" },
  { name: "Text", description: "Add text overlay" },
  { name: "Border", description: "Add border to image" },
];

export const POST_TYPES: PostType[] = [
  { label: "Sale", icon: "🏷️" },
  { label: "New Arrival", icon: "✨" },
  { label: "Event", icon: "🎉" },
  { label: "Seasonal", icon: "🌞" },
  { label: "Product", icon: "📦" },
  { label: "Brand", icon: "🎨" },
];

export const COLOR_PALETTES: ColorPalette[] = [
  { name: "Vibrant", colors: ["#ef4444", "#f97316", "#eab308", "#22c55e"] },
  { name: "Cool", colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#6366f1"] },
  { name: "Warm", colors: ["#f97316", "#ef4444", "#ec4899", "#f59e0b"] },
  { name: "Nature", colors: ["#22c55e", "#84cc16", "#14b8a6", "#10b981"] },
  { name: "Elegant", colors: ["#1f2937", "#374151", "#6b7280", "#d4af37"] },
];

export const CTA_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select CTA..." },
  { value: "shop-now", label: "Shop Now" },
  { value: "learn-more", label: "Learn More" },
  { value: "buy-now", label: "Buy Now" },
  { value: "get-offer", label: "Get Offer" },
  { value: "sign-up", label: "Sign Up" },
  { value: "order-now", label: "Order Now" },
  { value: "discover", label: "Discover" },
  { value: "custom", label: "Custom..." },
];

export const CTA_MAP: Record<string, string> = {
  "shop-now": "Shop Now",
  "learn-more": "Learn More",
  "buy-now": "Buy Now",
  "get-offer": "Get Offer",
  "sign-up": "Sign Up",
  "order-now": "Order Now",
  discover: "Discover",
  custom: "Custom",
};

export const IMAGE_VARIANTS = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
];
