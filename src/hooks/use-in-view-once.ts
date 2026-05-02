"use client";

import { useEffect, useRef, useState } from "react";

/** Dispara uma vez quando o elemento entra no viewport. */
export function useInViewOnce<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: options?.rootMargin ?? "0px 0px -10% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options?.rootMargin]);

  return { ref, inView };
}
