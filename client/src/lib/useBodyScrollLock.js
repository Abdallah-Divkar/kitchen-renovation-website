"use client";

import { useEffect } from "react";

// Stops the page behind an overlay from scrolling while `active` is true,
// then puts everything back exactly as it was.
export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return;
    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    // Keep the page from jumping sideways when the scrollbar disappears.
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [active]);
}
