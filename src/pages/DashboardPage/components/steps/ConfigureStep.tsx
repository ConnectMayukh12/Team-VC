/**
 * @fileoverview Configure Creative Step Component
 * @module pages/DashboardPage/components/steps/ConfigureStep
 */

import { POST_TYPES, COLOR_PALETTES, CTA_OPTIONS } from "../../constants";

interface ConfigureStepProps {
  resolvedTheme: string | undefined;
  postDescription: string;
  headline: string;
  callToAction: string;
  offerDiscount: string;
  selectedPostType: string | null;
  selectedColorPalette: string | null;
  onPostDescriptionChange: (value: string) => void;
  onHeadlineChange: (value: string) => void;
  onCallToActionChange: (value: string) => void;
  onOfferDiscountChange: (value: string) => void;
  onPostTypeChange: (value: string) => void;
  onColorPaletteChange: (value: string) => void;
}

export function ConfigureStep({
  resolvedTheme,
  postDescription,
  headline,
  callToAction,
  offerDiscount,
  selectedPostType,
  selectedColorPalette,
  onPostDescriptionChange,
  onHeadlineChange,
  onCallToActionChange,
  onOfferDiscountChange,
  onPostTypeChange,
  onColorPaletteChange,
}: ConfigureStepProps) {
  return (
    <div className="space-y-6">
      <h2
        className={`text-xl font-semibold flex items-center gap-2 ${
          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500 text-sm">
          3
        </span>
        Configure Your Creative
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Post Description */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Tell us about your post *
            </label>
            <textarea
              placeholder="Describe what you want to promote... e.g., 'Summer sale with 50% off on all electronics. Highlight the discount and create urgency.'"
              rows={4}
              value={postDescription}
              onChange={(e) => onPostDescriptionChange(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-500 resize-none ${
                resolvedTheme === "dark"
                  ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          {/* Headline */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Headline Text
            </label>
            <input
              type="text"
              placeholder="e.g., MEGA SUMMER SALE!"
              value={headline}
              onChange={(e) => onHeadlineChange(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500 ${
                resolvedTheme === "dark"
                  ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>

          {/* Call to Action */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Call to Action
            </label>
            <select
              value={callToAction}
              onChange={(e) => onCallToActionChange(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500 ${
                resolvedTheme === "dark"
                  ? "bg-zinc-800 border-zinc-700 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              {CTA_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Offer/Discount */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Offer/Discount (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., 50% OFF, Buy 1 Get 1 Free, ₹500 Off"
              value={offerDiscount}
              onChange={(e) => onOfferDiscountChange(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500 ${
                resolvedTheme === "dark"
                  ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Post Type */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Post Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {POST_TYPES.map((type) => (
                <button
                  key={type.label}
                  onClick={() => onPostTypeChange(type.label)}
                  className={`p-2 rounded-lg border text-sm transition-all ${
                    selectedPostType === type.label
                      ? "border-green-500 bg-green-500/10 text-green-500"
                      : resolvedTheme === "dark"
                      ? "border-zinc-700 hover:border-green-500 hover:bg-green-500/10 text-zinc-300"
                      : "border-gray-200 hover:border-green-500 hover:bg-green-50 text-gray-700"
                  }`}
                >
                  <span className="text-lg">{type.icon}</span>
                  <p className="mt-1">{type.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
              }`}
            >
              Color Palette
            </label>
            <div className="space-y-2">
              {COLOR_PALETTES.map((palette) => (
                <button
                  key={palette.name}
                  onClick={() => onColorPaletteChange(palette.name)}
                  className={`w-full p-2 rounded-lg border flex items-center gap-3 transition-all ${
                    selectedColorPalette === palette.name
                      ? "border-green-500 bg-green-500/10"
                      : resolvedTheme === "dark"
                      ? "border-zinc-700 hover:border-green-500 hover:bg-green-500/10"
                      : "border-gray-200 hover:border-green-500 hover:bg-green-50"
                  }`}
                >
                  <div className="flex -space-x-1">
                    {palette.colors.map((color, i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-white dark:border-zinc-900"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span
                    className={
                      selectedColorPalette === palette.name
                        ? "text-green-500 text-sm"
                        : resolvedTheme === "dark"
                        ? "text-zinc-300 text-sm"
                        : "text-gray-700 text-sm"
                    }
                  >
                    {palette.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
