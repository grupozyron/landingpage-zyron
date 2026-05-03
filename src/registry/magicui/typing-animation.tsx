"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

export type TypingAnimationProps = {
  /** Texto completo a revelar (caractere a caractere). */
  children: string;
  className?: string;
  /** Intervalo entre caracteres (ms). */
  duration?: number;
  /** Iniciar só quando entrar na viewport. */
  startOnView?: boolean;
  /** Cursor de digitação. */
  showCursor?: boolean;
};

export function TypingAnimation({
  children,
  className,
  duration = 40,
  startOnView = true,
  showCursor = false,
}: TypingAnimationProps) {
  const full = children;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const shouldRun = !startOnView || inView;

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!shouldRun) return;
    const graphemes = Array.from(full);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplayed(graphemes.slice(0, i).join(""));
      if (i >= graphemes.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, duration);
    return () => window.clearInterval(id);
  }, [full, duration, shouldRun]);

  return (
    <span ref={ref} className={cn("inline-block text-left", className)}>
      {displayed}
      {showCursor && !done && (
        <span className="ml-px inline-block animate-pulse font-light opacity-70">
          |
        </span>
      )}
    </span>
  );
}
