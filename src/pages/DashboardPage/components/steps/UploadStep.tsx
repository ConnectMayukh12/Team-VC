/**
 * @fileoverview Upload Assets Step Component
 * @module pages/DashboardPage/components/steps/UploadStep
 */

import {
  Upload as UploadIcon,
  File as FileIcon,
  X as XIcon,
} from "lucide-react";

interface UploadStepProps {
  resolvedTheme: string | undefined;
  uploadedFiles: File[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onRemoveFile: (index: number) => void;
  onTriggerFileInput: () => void;
}

export function UploadStep({
  resolvedTheme,
  uploadedFiles,
  fileInputRef,
  onFileSelect,
  onDrop,
  onDragOver,
  onRemoveFile,
  onTriggerFileInput,
}: UploadStepProps) {
  return (
    <div className="space-y-4">
      <h2
        className={`text-xl font-semibold flex items-center gap-2 ${
          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500 text-sm">
          2
        </span>
        Upload Assets
      </h2>
      <p
        className={resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"}
      >
        Upload your product images and brand assets.
      </p>

      {uploadedFiles.length > 0 ? (
        <div
          className={`text-sm ${
            resolvedTheme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          {uploadedFiles.length} file{uploadedFiles.length > 1 ? "s" : ""}{" "}
          uploaded
        </div>
      ) : (
        <div
          className={`text-sm ${
            resolvedTheme === "dark" ? "text-amber-400" : "text-amber-600"
          }`}
        >
          ⚠ Please upload at least one file to continue
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        multiple
        accept=".png,.jpg,.jpeg,.svg"
        className="hidden"
      />
      <div
        onClick={onTriggerFileInput}
        onDrop={onDrop}
        onDragOver={onDragOver}
        className={`border-2 border-dashed rounded-lg p-8 text-center mt-6 hover:border-green-500 transition-colors cursor-pointer ${
          resolvedTheme === "dark" ? "border-zinc-700" : "border-gray-300"
        }`}
      >
        <UploadIcon
          className={`h-12 w-12 mx-auto mb-4 ${
            resolvedTheme === "dark" ? "text-zinc-500" : "text-gray-400"
          }`}
        />
        <p
          className={
            resolvedTheme === "dark"
              ? "text-white font-medium"
              : "text-gray-900 font-medium"
          }
        >
          Drop files here or click to upload
        </p>
        <p
          className={
            resolvedTheme === "dark"
              ? "text-zinc-500 text-sm mt-1"
              : "text-gray-400 text-sm mt-1"
          }
        >
          PNG, JPG, SVG up to 10MB
        </p>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p
            className={`text-sm font-medium ${
              resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
            }`}
          >
            Uploaded Files ({uploadedFiles.length})
          </p>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                resolvedTheme === "dark" ? "bg-zinc-800" : "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileIcon
                  className={`h-5 w-5 ${
                    resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
                  }`}
                />
                <div>
                  <p
                    className={`text-sm font-medium ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {file.name}
                  </p>
                  <p
                    className={`text-xs ${
                      resolvedTheme === "dark"
                        ? "text-zinc-500"
                        : "text-gray-400"
                    }`}
                  >
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemoveFile(index)}
                className={`p-1 rounded hover:bg-red-500/20 transition-colors ${
                  resolvedTheme === "dark"
                    ? "text-zinc-400 hover:text-red-400"
                    : "text-gray-500 hover:text-red-500"
                }`}
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
