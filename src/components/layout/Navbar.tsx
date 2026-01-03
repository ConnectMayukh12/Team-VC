/**
 * @fileoverview Main navigation bar component
 * Responsive with mobile menu support
 * @module components/layout/Navbar
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { NAV_LINKS } from "@/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-sm md:hidden ${
            resolvedTheme === "dark" ? "bg-black/60" : "bg-black/30"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div
          className={`backdrop-blur-xl border transition-all duration-300 ${
            mobileMenuOpen ? "rounded-3xl" : "rounded-full"
          } ${
            resolvedTheme === "dark"
              ? "bg-black/40 border-white/10"
              : "bg-white/80 border-slate-200/50 shadow-lg"
          }`}
        >
          <div className="px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={
                  resolvedTheme === "dark"
                    ? "/White Logo.png"
                    : "/White Logo.png"
                }
                alt="Team VC Logo"
                className={`h-12 w-auto ${
                  resolvedTheme === "light" ? "brightness-0" : ""
                }`}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    resolvedTheme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle variant="minimal" />
              <button
                className={`px-4 py-2 rounded-full transition-all border ${
                  resolvedTheme === "dark"
                    ? "bg-white/10 hover:bg-white/20 border-white/10"
                    : "bg-slate-900/10 hover:bg-slate-900/20 border-slate-900/10"
                }`}
              >
                Launch Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle variant="minimal" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  resolvedTheme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-slate-900/10"
                }`}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden border-t px-6 py-6 ${
                resolvedTheme === "dark"
                  ? "border-white/10"
                  : "border-slate-200/50"
              }`}
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors py-3 px-4 rounded-xl ${
                      resolvedTheme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <button className="mt-4 px-4 py-3 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all text-white font-semibold">
                  Launch Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
