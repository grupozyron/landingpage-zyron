"use client";

import { useEffect } from "react";

type DataWin = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

/** Dispara profundidade de rolagem (25 / 50 / 75 / 100%) para GA4 / dataLayer. */
export function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set<number>();

    function tick() {
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = (window.scrollY / scrollHeight) * 100;
      const w = window as DataWin;

      ([25, 50, 75, 100] as const).forEach((mark) => {
        if (pct >= mark - 2 && !fired.has(mark)) {
          fired.add(mark);
          w.dataLayer = w.dataLayer ?? [];
          w.dataLayer.push({
            event: "scroll_depth",
            scroll_percent: mark,
          });
          if (typeof w.gtag === "function") {
            w.gtag("event", "scroll", {
              percent_scrolled: mark,
            });
          }
        }
      });
    }

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return null;
}
