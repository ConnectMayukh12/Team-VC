/**
 * @fileoverview Scroll to hash component
 * Handles scrolling to anchor elements when navigating with hash URLs
 * @module components/ScrollToHash
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const maxAttempts = 10;
      const scrollToElement = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
