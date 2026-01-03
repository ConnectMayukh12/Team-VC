/**
 * @fileoverview Custom hook for chat message management
 * @module pages/DashboardPage/hooks/useChatMessages
 */

import { useState, useRef } from "react";
import type { ChatMessage } from "../types";
import { AVAILABLE_COMMANDS, CTA_MAP } from "../constants";

interface UseChatMessagesProps {
  selectedPlatforms: string[];
  uploadedFiles: File[];
  postDescription: string;
  headline: string;
  callToAction: string;
  offerDiscount: string;
  selectedPostType: string | null;
  selectedColorPalette: string | null;
}

interface UseChatMessagesReturn {
  chatMessages: ChatMessage[];
  userInput: string;
  showCommands: boolean;
  filteredCommands: string[];
  chatInputRef: React.RefObject<HTMLInputElement | null>;
  setUserInput: (value: string) => void;
  setShowCommands: (value: boolean) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  insertCommand: (command: string) => void;
  initializeChat: () => void;
  resetChat: () => void;
}

export function useChatMessages({
  selectedPlatforms,
  uploadedFiles,
  postDescription,
  headline,
  callToAction,
  offerDiscount,
  selectedPostType,
  selectedColorPalette,
}: UseChatMessagesProps): UseChatMessagesReturn {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showCommands, setShowCommands] = useState(false);
  const [filteredCommands, setFilteredCommands] = useState<string[]>([]);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    const lastAtIndex = value.lastIndexOf("@");
    if (lastAtIndex !== -1) {
      const searchText = value.slice(lastAtIndex + 1).toLowerCase();
      const filtered = AVAILABLE_COMMANDS.filter((cmd) =>
        cmd.name.toLowerCase().startsWith(searchText)
      );
      setFilteredCommands(filtered.map((c) => c.name));
      setShowCommands(filtered.length > 0);
    } else {
      setShowCommands(false);
    }
  };

  const insertCommand = (command: string) => {
    const lastAtIndex = userInput.lastIndexOf("@");
    const newValue = userInput.slice(0, lastAtIndex) + `@${command} `;
    setUserInput(newValue);
    setShowCommands(false);
    chatInputRef.current?.focus();
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { role: "user", content: userInput, type: "text" },
    ]);

    setTimeout(() => {
      const commands = userInput.match(/@(\w+)/g) || [];
      let response = "I've received your request. ";
      const hasCommands = commands.length > 0;

      if (hasCommands) {
        response += `Applying: ${commands.join(
          ", "
        )}. Here's your updated creative! ✨`;
        setChatMessages((prev) => [
          ...prev,
          { role: "ai", content: response, type: "text" },
          { role: "ai", content: `modified-${Date.now()}`, type: "image" },
        ]);
      } else {
        response += "How can I help you further with this creative?";
        setChatMessages((prev) => [
          ...prev,
          { role: "ai", content: response, type: "text" },
        ]);
      }
    }, 1000);

    setUserInput("");
  };

  const initializeChat = () => {
    const platformsText = selectedPlatforms.join(", ");
    const filesText = uploadedFiles.map((f) => f.name).join(", ");

    let userMessage = `Hey VC, I want to create a post for **${platformsText}**.\n\n`;
    userMessage += `📝 **Post Description:** ${
      postDescription || "Not specified"
    }\n\n`;
    userMessage += `🎯 **Headline:** ${headline || "Not specified"}\n\n`;
    userMessage += `🔘 **Call to Action:** ${
      CTA_MAP[callToAction] || "Not specified"
    }\n\n`;
    if (offerDiscount) {
      userMessage += `💰 **Offer/Discount:** ${offerDiscount}\n\n`;
    }
    userMessage += `🏷️ **Post Type:** ${
      selectedPostType || "Not specified"
    }\n\n`;
    userMessage += `🎨 **Color Palette:** ${
      selectedColorPalette || "Not specified"
    }\n\n`;
    userMessage += `📎 **Uploaded Files:** ${filesText || "None"}`;

    const aiMessages = [
      `Thanks for sharing the details! I'm analyzing your request for ${platformsText}. 🎯`,
      `I've processed your uploaded assets and I'm now generating creative visuals using the **${
        selectedColorPalette || "default"
      }** color palette with your **${
        selectedPostType || "promotional"
      }** theme.`,
      `Here's your generated creative! ✨`,
    ];

    setChatMessages([
      { role: "user", content: userMessage, type: "text" },
      { role: "ai", content: aiMessages[0], type: "text" },
      { role: "ai", content: aiMessages[1], type: "text" },
      { role: "ai", content: aiMessages[2], type: "text" },
      { role: "ai", content: "initial-image", type: "image" },
    ]);
  };

  const resetChat = () => {
    setChatMessages([]);
    setUserInput("");
    setShowCommands(false);
    setFilteredCommands([]);
  };

  return {
    chatMessages,
    userInput,
    showCommands,
    filteredCommands,
    chatInputRef,
    setUserInput,
    setShowCommands,
    handleInputChange,
    handleSendMessage,
    insertCommand,
    initializeChat,
    resetChat,
  };
}
