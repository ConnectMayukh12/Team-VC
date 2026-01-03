/**
 * @fileoverview Chat Interface Component
 * @module pages/DashboardPage/components/ChatInterface
 */

import type { ChatMessage as ChatMessageType, Command } from "../types";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface ChatInterfaceProps {
  resolvedTheme: string | undefined;
  chatMessages: ChatMessageType[];
  displayedAiText: string;
  isTyping: boolean;
  currentAiMessageIndex: number;
  showImage: boolean;
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

export function ChatInterface({
  resolvedTheme,
  chatMessages,
  displayedAiText,
  isTyping,
  currentAiMessageIndex,
  showImage,
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
}: ChatInterfaceProps) {
  return (
    <div className="mx-auto max-w-4xl flex flex-col h-full">
      <div className="flex-1 overflow-auto space-y-6 pb-4">
        {chatMessages.map((message, index) => {
          const aiTextMessages = chatMessages.filter(
            (m) => m.role === "ai" && m.type !== "image"
          );
          const aiMessageIndex =
            message.role === "ai" && message.type !== "image"
              ? aiTextMessages.indexOf(message)
              : -1;

          // For images: only show after all text messages are typed (showImage is true)
          // For text: show based on currentAiMessageIndex
          const shouldShow =
            message.role === "user" ||
            (message.type === "image" && showImage) ||
            (message.type !== "image" &&
              aiMessageIndex <= currentAiMessageIndex);

          if (!shouldShow) return null;

          return (
            <ChatMessage
              key={index}
              message={message}
              index={index}
              resolvedTheme={resolvedTheme}
              displayedAiText={displayedAiText}
              isTyping={isTyping}
              aiMessageIndex={aiMessageIndex}
              currentAiMessageIndex={currentAiMessageIndex}
              allMessages={chatMessages}
            />
          );
        })}
      </div>

      {/* Input Section with @ Commands - Only show after image */}
      {showImage && (
        <ChatInput
          resolvedTheme={resolvedTheme}
          userInput={userInput}
          showCommands={showCommands}
          filteredCommands={filteredCommands}
          availableCommands={availableCommands}
          chatInputRef={chatInputRef}
          onInputChange={onInputChange}
          onSendMessage={onSendMessage}
          onInsertCommand={onInsertCommand}
          onSetShowCommands={onSetShowCommands}
          onSetUserInput={onSetUserInput}
          onFinalize={onFinalize}
        />
      )}
    </div>
  );
}
