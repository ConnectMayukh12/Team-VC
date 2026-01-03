/**
 * @fileoverview Main landing page component
 * Composes all sections into a complete landing page
 * @module pages/LandingPage
 */

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Navbar,
  Footer,
  HeroSection,
  ProblemSection,
  SolutionSection,
  FeaturesSection,
  TechStackSection,
  ImpactSection,
  CTASection,
  BackgroundElements,
} from "@/components";

export function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { resolvedTheme } = useTheme();

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation - Outside overflow container for proper fixed positioning */}
      <Navbar />

      <div
        className={`min-h-screen overflow-x-hidden animate-page-enter ${
          resolvedTheme === "dark"
            ? "bg-linear-to-br from-[#0f0a1f] via-[#1a1035] to-[#0d1117] text-white"
            : "bg-linear-to-br from-pink-100 via-white to-blue-100 text-slate-900"
        }`}
      >
        {/* Animated Background Elements */}
        <BackgroundElements scrollY={scrollY} />

        {/* Main Content */}
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <FeaturesSection />
          <TechStackSection />
          <ImpactSection />
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
