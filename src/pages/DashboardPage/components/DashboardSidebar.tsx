/**
 * @fileoverview Dashboard Sidebar Component
 * @module pages/DashboardPage/components/DashboardSidebar
 */

import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard as LayoutDashboardIcon,
  Plus as PlusIcon,
  Clock as ClockIcon,
  Image as ImageIcon,
  Trash2 as Trash2Icon,
  Settings as SettingsIcon,
} from "lucide-react";
import type { Generation } from "../types";

interface DashboardSidebarProps {
  resolvedTheme: string | undefined;
  generations: Generation[];
  selectedGeneration: string | null;
  onSelectGeneration: (id: string) => void;
  onNewCreative: () => void;
}

export function DashboardSidebar({
  resolvedTheme,
  generations,
  selectedGeneration,
  onSelectGeneration,
  onNewCreative,
}: DashboardSidebarProps) {
  return (
    <Sidebar
      className={`border-r ${
        resolvedTheme === "dark" ? "border-zinc-800" : "border-gray-200"
      }`}
    >
      <SidebarHeader
        className={`border-b p-4 ${
          resolvedTheme === "dark" ? "border-zinc-800" : "border-gray-200"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/White Logo.png"
            alt="Logo"
            className={`h-10 w-auto ${
              resolvedTheme === "light" ? "brightness-0" : ""
            }`}
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel
            className={
              resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
            }
          >
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive
                  className={
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }
                >
                  <LayoutDashboardIcon className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={onNewCreative}
                  className={
                    resolvedTheme === "dark"
                      ? "text-zinc-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }
                >
                  <PlusIcon className="h-4 w-4" />
                  <span>New Creative</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Previous Generations */}
        <SidebarGroup>
          <SidebarGroupLabel
            className={`flex items-center gap-2 ${
              resolvedTheme === "dark" ? "text-zinc-400" : "text-gray-500"
            }`}
          >
            <ClockIcon className="h-3 w-3" />
            Previous Generations
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generations.map((generation) => (
                <SidebarMenuItem key={generation.id}>
                  <SidebarMenuButton
                    isActive={selectedGeneration === generation.id}
                    onClick={() => onSelectGeneration(generation.id)}
                    className={`group ${
                      selectedGeneration === generation.id
                        ? resolvedTheme === "dark"
                          ? "text-white bg-zinc-800"
                          : "text-gray-900 bg-gray-200"
                        : resolvedTheme === "dark"
                        ? "text-zinc-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <ImageIcon className="h-4 w-4 shrink-0" />
                    <div className="flex flex-col items-start overflow-hidden">
                      <span className="truncate w-full text-left">
                        {generation.name}
                      </span>
                      <span
                        className={`text-xs ${
                          resolvedTheme === "dark"
                            ? "text-zinc-500"
                            : "text-gray-400"
                        }`}
                      >
                        {generation.timestamp}
                      </span>
                    </div>
                    <button
                      className="ml-auto opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle delete
                      }}
                    >
                      <Trash2Icon className="h-3 w-3" />
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter
        className={`border-t ${
          resolvedTheme === "dark" ? "border-zinc-800" : "border-gray-200"
        }`}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={
                resolvedTheme === "dark"
                  ? "text-zinc-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }
            >
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
