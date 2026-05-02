"use client";

import { useEffect, useRef, useState } from "react";

/** Contador ease-out cúbico — dispara quando `active` vira true (ex.: viewport). */
export function useCountUp(
  target: number,
  active: boolean,
  durationMs = 1500,
) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;
    const step = (time: number) => {
      if (startRef.current === null) startRef.current = time;
      const p = Math.min((time - startRef.current) / durationMs, 1);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(eased * target));
      if (p < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, durationMs]);

  return value;
}
