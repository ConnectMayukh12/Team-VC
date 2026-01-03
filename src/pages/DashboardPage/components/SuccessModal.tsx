/**
 * @fileoverview Success Modal Component
 * @module pages/DashboardPage/components/SuccessModal
 */

import {
  X as XIcon,
  CheckCircle as CheckCircleIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Linkedin as LinkedinIcon,
  MessageCircle as MessageCircleIcon,
} from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  resolvedTheme: string | undefined;
}

export function SuccessModal({
  isOpen,
  onClose,
  resolvedTheme,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-md mx-4 rounded-2xl shadow-2xl animate-fade-in ${
          resolvedTheme === "dark"
            ? "bg-zinc-900 border border-zinc-800"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
            resolvedTheme === "dark"
              ? "hover:bg-zinc-800 text-zinc-400"
              : "hover:bg-gray-100 text-gray-500"
          }`}
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 rounded-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
            <CheckCircleIcon className="h-10 w-10 text-white" />
          </div>

          {/* Title */}
          <h2
            className={`text-2xl font-bold mb-2 ${
              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            🎉 Congratulations!
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg mb-8 ${
              resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Your Post is ready to share!
          </p>

          {/* Download Button */}
          <button
            onClick={() => {
              alert("Downloading your creative...");
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-green-500/30 mb-4"
          >
            <DownloadIcon className="h-5 w-5" />
            Download Now
          </button>

          {/* Share Section */}
          <div
            className={`pt-6 border-t ${
              resolvedTheme === "dark" ? "border-zinc-800" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Share2Icon
                className={`h-4 w-4 ${
                  resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
                }`}
              >
                Share Now
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.open("https://instagram.com", "_blank")}
                className="p-3 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 transition-opacity shadow-lg"
              >
                <InstagramIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => window.open("https://facebook.com", "_blank")}
                className="p-3 rounded-full bg-[#1877F2] hover:opacity-90 transition-opacity shadow-lg"
              >
                <FacebookIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="p-3 rounded-full bg-[#0A66C2] hover:opacity-90 transition-opacity shadow-lg"
              >
                <LinkedinIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => window.open("https://x.com", "_blank")}
                className={`p-3 rounded-full transition-opacity shadow-lg ${
                  resolvedTheme === "dark"
                    ? "bg-white hover:opacity-90"
                    : "bg-black hover:opacity-90"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`h-6 w-6 ${
                    resolvedTheme === "dark" ? "fill-black" : "fill-white"
                  }`}
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => window.open("https://wa.me", "_blank")}
                className="p-3 rounded-full bg-[#25D366] hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircleIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
