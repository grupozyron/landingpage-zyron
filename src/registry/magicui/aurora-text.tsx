"use client";

import { useReducedMotion } from "framer-motion";
import { memo, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Paleta premium alinhada à marca (ouro + azul institucional). */
export const defaultAuroraColors = [
  "#2563FF",
  "#5A8AFF",
  "#B8BDC9",
  "#F8F8F8",
  "#2563FF",
] as const;

export type AuroraTextProps = {
  children: ReactNode;
  className?: string;
  /** Lista de cores para o gradiente animado (mín. 2). */
  colors?: readonly string[];
  /** Velocidade relativa (1 = padrão; maior = mais rápido). */
  speed?: number;
};

export const AuroraText = memo(function AuroraText({
  children,
  className,
  colors = defaultAuroraColors,
  speed = 1,
}: AuroraTextProps) {
  const reduce = useReducedMotion();
  const list = colors.length >= 2 ? colors : defaultAuroraColors;

  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${list.join(", ")}, ${list[0]})`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${Math.max(5.5, 10 / speed)}s`,
  } as const;

  if (reduce) {
    return (
      <span className={cn("font-semibold text-[#2563FF]", className)}>
        {children}
      </span>
    );
  }

  /* Um único nó de texto visível — duplicar com sr-only + gradiente causava leitura/visual estranho em alguns browsers. */
  return (
    <span
      className={cn(
        "animate-aurora relative inline bg-clip-text text-transparent",
        className,
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  );
});

AuroraText.displayName = "AuroraText";
