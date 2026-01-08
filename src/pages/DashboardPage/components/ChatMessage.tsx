/**
 * @fileoverview Chat Message Component
 * @module pages/DashboardPage/components/ChatMessage
 */

import type { ChatMessage as ChatMessageType } from "../types";

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
}: ChatMessageProps) {

  if (message.type === "image") {
    return (
      <div
        key={index}
        className="flex gap-4 justify-start animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Avatar */}
        <div className="shrink-0">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-sm font-bold text-black tracking-tight">
              VC
            </span>
          </div>
        </div>

        {/* Image Content */}
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
              resolvedTheme === "dark"
                ? "border-zinc-700"
                : "border-gray-200"
            }`}
          >
            <img
              src={message.content}
              alt="Generated Creative"
              className="w-full max-w-md h-auto animate-image-reveal"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/image-load-failed.png";
              }}
            />

            <div
              className={`px-4 py-3 ${
                resolvedTheme === "dark"
                  ? "bg-zinc-800"
                  : "bg-gray-100"
              }`}
            >
              <p
                className={`text-sm ${
                  resolvedTheme === "dark"
                    ? "text-zinc-300"
                    : "text-gray-700"
                }`}
              >
                🎨 Your creative is ready! Use <strong>@</strong> commands to
                make adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      key={index}
      className={`flex gap-4 ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.role === "ai" && (
        <div className="shrink-0">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <span className="text-sm font-bold text-black tracking-tight">
              VC
            </span>
          </div>
        </div>
      )}

      {/* Message Bubble */}
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
            {(message.role === "ai" &&
            aiMessageIndex === currentAiMessageIndex
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

      {/* Avatar (User only) */}
      {message.role === "user" && (
        <div className="shrink-0">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center ${
              resolvedTheme === "dark" ? "bg-zinc-700" : "bg-gray-200"
            }`}
          >
            <span
              className={`text-sm font-medium ${
                resolvedTheme === "dark"
                  ? "text-white"
                  : "text-gray-700"
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
