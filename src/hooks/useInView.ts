/**
 * @fileoverview Custom hook for intersection observer (scroll reveal animations)
 * @module hooks/useInView
 */

import { useEffect, useRef, useState } from "react";
import type { UseInViewOptions, UseInViewReturn } from "@/types";

/**
 * Custom hook that detects when an element enters the viewport
 * Uses Intersection Observer API for performance
 *
 * @param options - Configuration options for the observer
 * @param options.threshold - Percentage of element visible before triggering (0-1)
 * @param options.rootMargin - Margin around the root element
 * @param options.triggerOnce - If true, stops observing after first intersection
 * @returns Object containing ref to attach to element and isInView boolean
 *
 * @example
 * ```tsx
 * const { ref, isInView } = useInView({ threshold: 0.1 });
 *
 * return (
 *   <div ref={ref} className={isInView ? 'visible' : 'hidden'}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
  const { threshold = 0.1, rootMargin, triggerOnce = true } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stop observing if triggerOnce is true (default behavior)
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
