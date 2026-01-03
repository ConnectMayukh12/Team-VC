/**
 * @fileoverview Chat Message Component
 * @module pages/DashboardPage/components/ChatMessage
 */

import type { ChatMessage as ChatMessageType } from "../types";
import { IMAGE_VARIANTS } from "../constants";

interface ChatMessageProps {
  message: ChatMessageType;
  index: number;
  resolvedTheme: string | undefined;
  displayedAiText: string;
  isTyping: boolean;
  aiMessageIndex: number;
  currentAiMessageIndex: number;
  allMessages: ChatMessageType[];
}

export function ChatMessage({
  message,
  index,
  resolvedTheme,
  displayedAiText,
  isTyping,
  aiMessageIndex,
  currentAiMessageIndex,
  allMessages,
}: ChatMessageProps) {
  // Render image messages
  if (message.type === "image") {
    const imageMessages = allMessages.filter((m) => m.type === "image");
    const imageIndex = imageMessages.indexOf(message) % IMAGE_VARIANTS.length;

    return (
      <div
        key={index}
        className="flex gap-4 justify-start animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="shrink-0">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-sm font-bold text-black tracking-tight">
              VC
            </span>
          </div>
        </div>
        <div className="flex-1 max-w-3xl">
          <div
            className={`mb-1 text-sm font-medium ${
              resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
            }`}
          >
            VC Assistant
          </div>
          <div
            className={`rounded-2xl overflow-hidden border ${
              resolvedTheme === "dark" ? "border-zinc-700" : "border-gray-200"
            }`}
          >
            <div className="relative">
              <img
                src={IMAGE_VARIANTS[imageIndex]}
                alt="Generated Creative"
                className="w-full max-w-md h-auto animate-image-reveal"
                style={{
                  animation: "imageReveal 1.5s ease-out forwards",
                }}
              />
              <div
                className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-transparent animate-scan-line"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(34, 197, 94, 0.3) 50%, transparent 100%)",
                  animation: "scanLine 1.5s ease-out forwards",
                }}
              />
            </div>
            <div
              className={`px-4 py-3 ${
                resolvedTheme === "dark" ? "bg-zinc-800" : "bg-gray-100"
              }`}
            >
              <p
                className={`text-sm ${
                  resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
                }`}
              >
                🎨{" "}
                {index === allMessages.findIndex((m) => m.type === "image")
                  ? "Your creative is ready! Use @ commands to make adjustments."
                  : "Here's your updated creative with the applied modifications!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render text messages
  return (
    <div
      key={index}
      className={`flex gap-4 ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar - Only show on left for AI */}
      {message.role === "ai" && (
        <div className="shrink-0">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-sm font-bold text-black tracking-tight">
              VC
            </span>
          </div>
        </div>
      )}

      {/* Message Content */}
      <div
        className={`flex-1 max-w-3xl ${
          message.role === "user" ? "flex flex-col items-end" : ""
        }`}
      >
        <div
          className={`mb-1 text-sm font-medium flex items-center gap-2 ${
            resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
          }`}
        >
          {message.role === "user" ? "You" : "VC Assistant"}
          {message.role === "ai" &&
            aiMessageIndex === currentAiMessageIndex &&
            isTyping && (
              <span className="text-xs text-green-500 animate-pulse">
                typing...
              </span>
            )}
        </div>
        <div
          className={`rounded-2xl px-4 py-3 ${
            message.role === "user"
              ? resolvedTheme === "dark"
                ? "bg-green-600 text-white"
                : "bg-green-500 text-white"
              : resolvedTheme === "dark"
              ? "bg-zinc-800 border border-zinc-700 text-white"
              : "bg-gray-100 border border-gray-200 text-gray-900"
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {(message.role === "ai" && aiMessageIndex === currentAiMessageIndex
              ? displayedAiText
              : message.content
            )
              .split("**")
              .map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            {message.role === "ai" &&
              aiMessageIndex === currentAiMessageIndex &&
              isTyping && (
                <span className="inline-block w-2 h-4 ml-1 bg-green-500 animate-pulse" />
              )}
          </p>
        </div>
      </div>

      {/* Avatar - Only show on right for User */}
      {message.role === "user" && (
        <div className="shrink-0">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center ${
              resolvedTheme === "dark" ? "bg-zinc-700" : "bg-gray-200"
            }`}
          >
            <span
              className={`text-sm font-medium ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              U
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
