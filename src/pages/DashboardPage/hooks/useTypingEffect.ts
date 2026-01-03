/**
 * @fileoverview Custom hook for typing effect animation
 * @module pages/DashboardPage/hooks/useTypingEffect
 */

import { useEffect, useState } from "react";
import type { ChatMessage } from "../types";

interface UseTypingEffectProps {
  chatMessages: ChatMessage[];
  isGenerating: boolean;
  typingSpeed?: number;
  delayBetweenMessages?: number;
}

interface UseTypingEffectReturn {
  displayedAiText: string;
  isTyping: boolean;
  currentAiMessageIndex: number;
  showImage: boolean;
  resetTyping: () => void;
}

export function useTypingEffect({
  chatMessages,
  isGenerating,
  typingSpeed = 15,
  delayBetweenMessages = 500,
}: UseTypingEffectProps): UseTypingEffectReturn {
  const [displayedAiText, setDisplayedAiText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentAiMessageIndex, setCurrentAiMessageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (chatMessages.length > 0 && isGenerating) {
      const aiMessages = chatMessages.filter(
        (m) => m.role === "ai" && m.type !== "image"
      );
      const currentMessage = aiMessages[currentAiMessageIndex];

      if (
        currentMessage &&
        displayedAiText.length < currentMessage.content.length
      ) {
        setIsTyping(true);
        const timeout = setTimeout(() => {
          setDisplayedAiText(
            currentMessage.content.slice(0, displayedAiText.length + 1)
          );
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else if (
        currentMessage &&
        displayedAiText.length >= currentMessage.content.length
      ) {
        if (currentAiMessageIndex < aiMessages.length - 1) {
          setTimeout(() => {
            setCurrentAiMessageIndex((prev) => prev + 1);
            setDisplayedAiText("");
          }, delayBetweenMessages);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setShowImage(true);
          }, 300);
        }
      }
    }
  }, [
    chatMessages,
    displayedAiText,
    isGenerating,
    currentAiMessageIndex,
    typingSpeed,
    delayBetweenMessages,
  ]);

  const resetTyping = () => {
    setDisplayedAiText("");
    setCurrentAiMessageIndex(0);
    setShowImage(false);
    setIsTyping(false);
  };

  return {
    displayedAiText,
    isTyping,
    currentAiMessageIndex,
    showImage,
    resetTyping,
  };
}
