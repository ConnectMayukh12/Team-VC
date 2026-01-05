/**
 * @fileoverview Dashboard Page - Main Component
 * Retail Media Creative Builder with 3-step wizard and chat interface
 * @module pages/DashboardPage
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Stepper, Step } from "@/components/Stepper";

// Local components
import {
  DashboardSidebar,
  DashboardHeader,
  SuccessModal,
  ChatInterface,
  PlatformStep,
  UploadStep,
  ConfigureStep,
} from "./components";

// Hooks
import { useTypingEffect, useChatMessages, useFileUpload } from "./hooks";

// Constants
import { MOCK_GENERATIONS, AVAILABLE_COMMANDS } from "./constants";

export function DashboardPage() {
  // Navigation
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();

  // State - General
  const [selectedGeneration, setSelectedGeneration] = useState<string | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // State - Form
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedPostType, setSelectedPostType] = useState<string | null>(null);
  const [selectedColorPalette, setSelectedColorPalette] = useState<
    string | null
  >(null);
  const [postDescription, setPostDescription] = useState("");
  const [headline, setHeadline] = useState("");
  const [callToAction, setCallToAction] = useState("");
  const [offerDiscount, setOfferDiscount] = useState("");

  // Custom Hooks
  const {
    uploadedFiles,
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    removeFile,
    resetFiles,
    triggerFileInput,
  } = useFileUpload();

  const {
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
  } = useChatMessages({
    selectedPlatforms,
    uploadedFiles,
    postDescription,
    headline,
    callToAction,
    offerDiscount,
    selectedPostType,
    selectedColorPalette,
  });

  const {
    displayedAiText,
    isTyping,
    currentAiMessageIndex,
    showImage,
    resetTyping,
  } = useTypingEffect({
    chatMessages,
    isGenerating,
  });

  // Handlers
  const handleGenerate = () => {
    initializeChat();
    setIsGenerating(true);
  };

  const togglePlatform = (platformName: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformName)
        ? prev.filter((p) => p !== platformName)
        : [...prev, platformName]
    );
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleNewCreative = () => {
    // Reset all state for a fresh start
    setIsGenerating(false);
    resetChat();
    resetTyping();
    setShowSuccessModal(false);
    setSelectedPlatforms([]);
    setCurrentStep(1);
    resetFiles();
    setSelectedPostType(null);
    setSelectedColorPalette(null);
    setPostDescription("");
    setHeadline("");
    setCallToAction("");
    setOfferDiscount("");
    setSelectedGeneration(null);
  };

  return (
    <SidebarProvider>
      <DashboardSidebar
        resolvedTheme={resolvedTheme}
        generations={MOCK_GENERATIONS}
        selectedGeneration={selectedGeneration}
        onSelectGeneration={setSelectedGeneration}
        onNewCreative={handleNewCreative}
      />

      <SidebarInset
        className={resolvedTheme === "dark" ? "bg-zinc-950" : "bg-gray-50"}
      >
        <DashboardHeader
          resolvedTheme={resolvedTheme}
          onLogout={handleLogout}
        />

        <main className="flex-1 overflow-auto p-6">
          {isGenerating ? (
            <>
              <ChatInterface
                resolvedTheme={resolvedTheme}
                chatMessages={chatMessages}
                displayedAiText={displayedAiText}
                isTyping={isTyping}
                currentAiMessageIndex={currentAiMessageIndex}
                showImage={showImage}
                userInput={userInput}
                showCommands={showCommands}
                filteredCommands={filteredCommands}
                availableCommands={AVAILABLE_COMMANDS}
                chatInputRef={chatInputRef}
                onInputChange={handleInputChange}
                onSendMessage={handleSendMessage}
                onInsertCommand={insertCommand}
                onSetShowCommands={setShowCommands}
                onSetUserInput={setUserInput}
                onFinalize={() => setShowSuccessModal(true)}
              />
              <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                resolvedTheme={resolvedTheme}
              />
            </>
          ) : (
            <div className="mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-350">
              <Stepper
                initialStep={1}
                onStepChange={(step) => setCurrentStep(step)}
                onFinalStepCompleted={handleGenerate}
                backButtonText="Previous"
                nextButtonText="Next"
                finalButtonText="Generate Post"
                theme={resolvedTheme}
                nextButtonProps={{
                  disabled:
                    (currentStep === 1 && selectedPlatforms.length === 0) ||
                    (currentStep === 2 && uploadedFiles.length === 0),
                  className:
                    (currentStep === 1 && selectedPlatforms.length === 0) ||
                    (currentStep === 2 && uploadedFiles.length === 0)
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer",
                }}
              >
                <Step>
                  <PlatformStep
                    resolvedTheme={resolvedTheme}
                    selectedPlatforms={selectedPlatforms}
                    onTogglePlatform={togglePlatform}
                  />
                </Step>

                <Step>
                  <UploadStep
                    resolvedTheme={resolvedTheme}
                    uploadedFiles={uploadedFiles}
                    fileInputRef={fileInputRef}
                    onFileSelect={handleFileSelect}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onRemoveFile={removeFile}
                    onTriggerFileInput={triggerFileInput}
                  />
                </Step>

                <Step>
                  <ConfigureStep
                    resolvedTheme={resolvedTheme}
                    postDescription={postDescription}
                    headline={headline}
                    callToAction={callToAction}
                    offerDiscount={offerDiscount}
                    selectedPostType={selectedPostType}
                    selectedColorPalette={selectedColorPalette}
                    onPostDescriptionChange={setPostDescription}
                    onHeadlineChange={setHeadline}
                    onCallToActionChange={setCallToAction}
                    onOfferDiscountChange={setOfferDiscount}
                    onPostTypeChange={setSelectedPostType}
                    onColorPaletteChange={setSelectedColorPalette}
                  />
                </Step>
              </Stepper>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
 //replace with actual api links