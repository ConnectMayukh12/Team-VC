/**
 * @fileoverview 404 Not Found Page
 * Shown when user navigates to a non-existent route
 * @module pages/NotFoundPage
 */

import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import "./LoadingPage.css";

export function NotFoundPage() {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 ${
        resolvedTheme === "dark"
          ? "bg-linear-to-br from-[#0f0a1f] via-[#1a1035] to-[#0d1117]"
          : "bg-linear-to-br from-slate-50 via-slate-100 to-slate-200"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="mb-8 hover:opacity-80 transition-opacity">
        <img
          src="/White Logo.png"
          alt="Team VC Logo"
          className={`h-16 w-auto ${
            resolvedTheme === "light" ? "brightness-0" : ""
          }`}
        />
      </Link>

      {/* Hamster Animation */}
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster mb-8"
      >
        <div className="wheel" />
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear" />
              <div className="hamster__eye" />
              <div className="hamster__nose" />
            </div>
            <div className="hamster__limb hamster__limb--fr" />
            <div className="hamster__limb hamster__limb--fl" />
            <div className="hamster__limb hamster__limb--br" />
            <div className="hamster__limb hamster__limb--bl" />
            <div className="hamster__tail" />
          </div>
        </div>
        <div className="spoke" />
      </div>

      {/* 404 Text */}
      <h1
        className={`text-8xl font-bold mb-4 ${
          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        404
      </h1>

      <h2
        className={`text-2xl font-semibold mb-2 ${
          resolvedTheme === "dark" ? "text-zinc-300" : "text-gray-700"
        }`}
      >
        Page Not Found
      </h2>

      <p
        className={`text-center max-w-md mb-8 ${
          resolvedTheme === "dark" ? "text-zinc-500" : "text-gray-500"
        }`}
      >
        Oops! The page you're looking for doesn't exist. Our hamster is running
        as fast as it can, but it can't find what you're looking for.
      </p>

      {/* Go to Main Website Button */}
      <Link
        to="/"
        className="group px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 flex items-center justify-center gap-3 font-semibold text-white"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Go to Main Website
      </Link>

      {/* Additional helpful links */}
      <div className="mt-8 flex gap-6">
        <Link
          to="/dashboard"
          className={`text-sm transition-colors ${
            resolvedTheme === "dark"
              ? "text-zinc-500 hover:text-zinc-300"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/team"
          className={`text-sm transition-colors ${
            resolvedTheme === "dark"
              ? "text-zinc-500 hover:text-zinc-300"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Meet the Team
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
