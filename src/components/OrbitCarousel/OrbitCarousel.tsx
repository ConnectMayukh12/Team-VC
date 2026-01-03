/**
 * @fileoverview OrbitCarousel component - Animated team member carousel
 * @module components/OrbitCarousel
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data: team members ---
const people = [
  {
    id: 1,
    name: "Arpan Chowdhury",
    role: "Frontend Dev",
    email: "arpanchowdhury003@gmail.com",
    linkedin: "https://www.linkedin.com/in/arpan-chowdhury-775294251/",
    profile:
      "https://media.licdn.com/dms/image/v2/D5603AQGzKCr7mCSNdg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703521749869?e=1769040000&v=beta&t=0AgeTiwLG0l1DZOFM4iCqVC5YD0dssJtexwlKNERvA4",
  },
  {
    id: 2,
    name: "Himadri Dey",
    role: "Backend Dev",
    email: "himadridey165@gmail.com",
    linkedin: "https://www.linkedin.com/in/himadri-dey-1505b1236/",
    profile:
      "https://media.licdn.com/dms/image/v2/D5603AQGzkvMJ4G62Jg/profile-displayphoto-scale_400_400/B56ZpDShlPKEAg-/0/1762065521533?e=1769040000&v=beta&t=uQyndixpKBOVdQ9m4UFzDaSCgsiVRqW6E-KlwuNT28Y",
  },
  {
    id: 3,
    name: "Arittra Bag",
    role: "AI Engineer",
    email: "arittrabag@gmail.com",
    linkedin: "https://www.linkedin.com/in/arittra-bag-00b12a1b5/",
    profile:
      "https://media.licdn.com/dms/image/v2/D5603AQGlzEW7PY9eWQ/profile-displayphoto-shrink_400_400/B56ZUheUtxHEAg-/0/1740023354448?e=1769040000&v=beta&t=1__fM41NPmqymbLDt2zurj6LQx9QWheJzDnu0-lvxzY",
  },
  {
    id: 4,
    name: "Mayukh Bhowmik",
    role: "Full Stack Dev",
    email: "bhowmikmayukh12@gmail.com",
    linkedin: "https://www.linkedin.com/in/mbwik/",
    profile:
      "https://media.licdn.com/dms/image/v2/D5603AQFiY_TQhBBlLw/profile-displayphoto-scale_400_400/B56ZfQ1EnlHoAg-/0/1751555263957?e=1769040000&v=beta&t=lMSm1BxNVm0uILMBuiQMzUkB71-z8Jn8a9QV_XEBNoY",
  },
];

// --- Utility for fallback images ---
const safeImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};

// --- Custom hook for mobile detection ---
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const checkScreenSize = (): void =>
      setIsMobile(window.innerWidth < breakpoint);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

// --- Main Component ---
export function OrbitCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const isMobile = useIsMobile();

  const containerRadius = isMobile ? 130 : 200;
  const profileSize = isMobile ? 60 : 80;
  const containerSize = containerRadius * 2 + 100;

  // Calculate rotation for each profile
  const getRotation = React.useCallback(
    (index: number): number => (index - activeIndex) * (360 / people.length),
    [activeIndex]
  );

  // Navigation
  const next = React.useCallback(
    () => setActiveIndex((i) => (i + 1) % people.length),
    []
  );
  const prev = React.useCallback(
    () => setActiveIndex((i) => (i - 1 + people.length) % people.length),
    []
  );

  const handleProfileClick = React.useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex]
  );

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Auto-rotation
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  React.useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start auto-rotation if not hovering
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % people.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div
      className="flex flex-col items-center p-4 relative min-h-[400px] transition-colors duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Active Person Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={people[activeIndex].id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="z-30 bg-white dark:bg-gray-950 backdrop-blur-sm shadow-xl dark:shadow-2xl dark:shadow-gray-900/50 rounded-2xl p-4 md:p-5 w-56 md:w-64 text-center border border-gray-100 dark:border-gray-800"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              src={people[activeIndex].profile}
              alt={people[activeIndex].name}
              onError={safeImage}
              className="hidden md:block w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto -mt-10 md:-mt-14 border-4 border-white dark:border-gray-950 object-cover shadow-lg ring-2 ring-indigo-500/20"
            />
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="space-y-2"
            >
              <h2 className="mt-0 md:mt-3 text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                {people[activeIndex].name}
              </h2>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs md:text-sm font-medium">
                <Briefcase size={12} className="mr-1.5" />
                {people[activeIndex].role}
              </div>
              <a
                href={`mailto:${people[activeIndex].email}`}
                className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors pt-1"
              >
                <Mail size={14} />
                <span className="break-all">{people[activeIndex].email}</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-center items-center mt-3 space-x-2"
            >
              <button
                onClick={prev}
                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft
                  size={16}
                  className="text-gray-700 dark:text-gray-300"
                />
              </button>
              <a
                href={people[activeIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                Connect
              </a>
              <button
                onClick={next}
                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronRight
                  size={16}
                  className="text-gray-700 dark:text-gray-300"
                />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Profiles with Counter-Rotation */}
        {people.map((p, i) => {
          const rotation = getRotation(i);
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={p.id}
              animate={{
                transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
                opacity: isMobile ? (isActive ? 1 : 0.3) : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05,
                opacity: { duration: 0.3 },
              }}
              style={{
                width: profileSize,
                height: profileSize,
                position: "absolute",
                top: `calc(50% - ${profileSize / 2}px)`,
                left: `calc(50% - ${profileSize / 2}px)`,
                zIndex: isActive ? 20 : 10,
              }}
            >
              {/* Counter-rotation to keep image upright */}
              <motion.div
                animate={{ rotate: -rotation }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="w-full h-full"
              >
                <motion.img
                  src={p.profile}
                  alt={p.name}
                  onError={safeImage}
                  onClick={() => handleProfileClick(i)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow:
                      "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-4 border-indigo-500 dark:border-indigo-400 shadow-lg"
                      : "border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500"
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {people.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex
                ? "bg-indigo-600 dark:bg-indigo-400"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
