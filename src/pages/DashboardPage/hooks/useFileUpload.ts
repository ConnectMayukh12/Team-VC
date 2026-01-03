/**
 * @fileoverview Custom hook for file upload handling
 * @module pages/DashboardPage/hooks/useFileUpload
 */

import { useState, useRef } from "react";

interface UseFileUploadReturn {
  uploadedFiles: File[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  removeFile: (index: number) => void;
  resetFiles: () => void;
  triggerFileInput: () => void;
}

export function useFileUpload(): UseFileUploadReturn {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const resetFiles = () => {
    setUploadedFiles([]);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    uploadedFiles,
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    removeFile,
    resetFiles,
    triggerFileInput,
  };
}
