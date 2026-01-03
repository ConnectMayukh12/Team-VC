/**
 * @fileoverview Chat Input Component with @ Commands
 * @module pages/DashboardPage/components/ChatInput
 */

import type { Command } from "../types";

interface ChatInputProps {
  resolvedTheme: string | undefined;
  userInput: string;
  showCommands: boolean;
  filteredCommands: string[];
  availableCommands: Command[];
  chatInputRef: React.RefObject<HTMLInputElement | null>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
  onInsertCommand: (command: string) => void;
  onSetShowCommands: (value: boolean) => void;
  onSetUserInput: (value: string) => void;
  onFinalize: () => void;
}

export function ChatInput({
  resolvedTheme,
  userInput,
  showCommands,
  filteredCommands,
  availableCommands,
  chatInputRef,
  onInputChange,
  onSendMessage,
  onInsertCommand,
  onSetShowCommands,
  onSetUserInput,
  onFinalize,
}: ChatInputProps) {
  return (
    <div
      className={`sticky bottom-0 pt-4 border-t ${
        resolvedTheme === "dark"
          ? "border-zinc-800 bg-zinc-950"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      {/* @ Commands Popup */}
      {showCommands && (
        <div
          className={`absolute bottom-full mb-2 left-0 right-0 max-h-60 overflow-auto rounded-lg border shadow-lg ${
            resolvedTheme === "dark"
              ? "bg-zinc-800 border-zinc-700"
              : "bg-white border-gray-200"
          }`}
        >
          {availableCommands
            .filter((cmd) => filteredCommands.includes(cmd.name))
            .map((cmd) => (
              <button
                key={cmd.name}
                onClick={() => onInsertCommand(cmd.name)}
                className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                  resolvedTheme === "dark"
                    ? "hover:bg-zinc-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <span
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    resolvedTheme === "dark"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  @{cmd.name}
                </span>
                <span
                  className={`text-sm ${
                    resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
                  }`}
                >
                  {cmd.description}
                </span>
              </button>
            ))}
        </div>
      )}

      {/* Available Commands Hint */}
      <div className="mb-2 flex flex-wrap gap-2">
        <span
          className={`text-xs ${
            resolvedTheme === "dark" ? "text-zinc-500" : "text-gray-400"
          }`}
        >
          Available commands:
        </span>
        {availableCommands.slice(0, 5).map((cmd) => (
          <button
            key={cmd.name}
            onClick={() => {
              onSetUserInput(userInput + `@${cmd.name} `);
              chatInputRef.current?.focus();
            }}
            className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
              resolvedTheme === "dark"
                ? "bg-zinc-800 text-green-400 hover:bg-zinc-700"
                : "bg-gray-200 text-green-600 hover:bg-gray-300"
            }`}
          >
            @{cmd.name}
          </button>
        ))}
        <span
          className={`text-xs ${
            resolvedTheme === "dark" ? "text-zinc-500" : "text-gray-400"
          }`}
        >
          +{availableCommands.length - 5} more
        </span>
      </div>

      {/* Input Field */}
      <div className="relative flex gap-2">
        <input
          ref={chatInputRef}
          type="text"
          value={userInput}
          onChange={onInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !showCommands) {
              onSendMessage();
            }
            if (e.key === "Escape") {
              onSetShowCommands(false);
            }
          }}
          placeholder="Type a message or use @ commands... (e.g., @Rotate 45)"
          className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:border-green-500 ${
            resolvedTheme === "dark"
              ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
          }`}
        />
        <button
          onClick={onSendMessage}
          disabled={!userInput.trim()}
          className={`px-4 py-3 rounded-lg font-medium transition-colors ${
            userInput.trim()
              ? "bg-green-500 hover:bg-green-600 text-white"
              : resolvedTheme === "dark"
              ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Send
        </button>
        <button
          onClick={onFinalize}
          className="px-4 py-3 rounded-lg font-medium bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all shadow-lg hover:shadow-green-500/25"
        >
          Finalize ✨
        </button>
      </div>
    </div>
  );
}
