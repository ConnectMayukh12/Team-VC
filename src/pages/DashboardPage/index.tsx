/**
 * @fileoverview Dashboard Page - Main Component
 * Retail Media Creative Builder with 3-step wizard and chat interface
 * @module pages/DashboardPage
 */

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Stepper, Step } from "@/components/Stepper";
import { createTurn, getTurn, getArtifactUrl } from "@/api";

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
    null,
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // State - API Session Management
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [currentTurnId, setCurrentTurnId] = useState<string | null>(null);
  const imageAddedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout>();

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
    setMessagesFromApi,
    addChatMessage,
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
  const handleGenerate = async () => {
    try {
      // Prepare payload for API
      const payload = {
        session_id: currentSessionId,
        user_text: postDescription || "Generate retail media creative",
        ui_context: {
          platforms: selectedPlatforms,
          postType: selectedPostType,
          colorPalette: selectedColorPalette,
          headline,
          callToAction,
          offerDiscount,
          uploadedFiles: uploadedFiles.map((f) => f.name),
        },
        title_if_new: `Creative for ${selectedPlatforms.join(", ")}`,
      };

      console.log("Starting generation with payload:", payload);

      // Call the API
      const response = await createTurn(payload);
      console.log("API Response:", response);

      // Store session and turn IDs
      if (response.session_id) {
        setCurrentSessionId(response.session_id);
      }
      if (response.turn_id) {
        setCurrentTurnId(response.turn_id);
      }

      // Initialize chat and start generation
      imageAddedRef.current = false;
      initializeChat();
      setIsGenerating(true);
    } catch (error) {
      console.error("Error creating turn:", error);
      alert(
        `Failed to generate: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  };

  // Poll for turn updates and sync with chat
  useEffect(() => {
    if (!currentTurnId || !isGenerating) return;

    const pollTurn = async () => {
      try {
        const turnData = await getTurn(currentTurnId);
        console.log("Turn data:", turnData);

        if (turnData.outputs?.artifacts?.length && !imageAddedRef.current) {
          const imageArtifact = turnData.outputs.artifacts.find(
            (a) => a.type === "image",
          );

          if (imageArtifact) {
            const filename = imageArtifact.uri.split("/").pop();
            const imageUrl = getArtifactUrl(
              turnData.session_id,
              turnData._id,
              filename,
            );

            addChatMessage({
              role: "ai",
              type: "image",
              content: imageUrl,
            });

            imageAddedRef.current = true;
          }
        }

        if (turnData.status === "complete" || turnData.status === "completed") {
          console.log("Turn completed");
          clearInterval(intervalRef.current); // stop polling
        }
      } catch (error) {
        console.error("Polling error:", error);
      }
    };

    // First poll immediately
    pollTurn();

    // Poll every 2 seconds
    intervalRef.current = setInterval(pollTurn, 2000);

    return () => clearInterval(intervalRef.current);
  }, [currentTurnId, isGenerating]);
  const togglePlatform = (platformName: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformName)
        ? prev.filter((p) => p !== platformName)
        : [...prev, platformName],
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

    // Reset session state (keep session_id for continuation)
    setCurrentTurnId(null);
    imageAddedRef.current = false;
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
