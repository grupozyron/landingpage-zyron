"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

const MAP = {
  fadeInUp: "animate__fadeInUp",
  fadeIn: "animate__fadeIn",
  zoomIn: "animate__zoomIn",
  fadeInLeft: "animate__fadeInLeft",
  fadeInRight: "animate__fadeInRight",
} as const;

export type AnimateInViewName = keyof typeof MAP;

type AnimateInViewProps = {
  children: ReactNode;
  className?: string;
  animation?: AnimateInViewName;
  delayMs?: number;
  margin?: string;
};

/**
 * [Animate.css](https://animate.style/) ao entrar na viewport (uma vez).
 * Respeita preferências de movimento reduzido do sistema.
 */
export function AnimateInView({
  children,
  className,
  animation = "fadeInUp",
  delayMs = 0,
  margin = "-12%",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: margin as `${number}%` | `${number}px`,
  });
  const reduce = useReducedMotion();

  const style =
    delayMs > 0
      ? ({ "--animate-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        className,
        !reduce && inView && "animate__animated",
        !reduce && inView && MAP[animation],
      )}
      style={style}
    >
      {children}
    </div>
  );
}
