"use client";

import { useReducedMotion } from "framer-motion";

import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

/** Dois traços na borda — mesmo efeito do painel do hero (Magic UI Border Beam). */
export function AccentBorderBeams() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <>
      <BorderBeam
        size={90}
        duration={11}
        borderWidth={1.25}
        colorFrom="rgb(37 99 255 / 0.95)"
        colorTo="rgb(186 198 220 / 0.15)"
        delay={0}
      />
      <BorderBeam
        size={70}
        duration={14}
        borderWidth={1}
        colorFrom="rgb(147 197 253 / 0.5)"
        colorTo="rgb(37 99 255 / 0.2)"
        delay={3}
        reverse
      />
    </>
  );
}

export type BeamHighlightProps = {
  children: React.ReactNode;
  className?: string;
  /** Classes no wrapper interno (ex.: flex para cartões de métricas). */
  innerClassName?: string;
  /** soft = um traço discreto; accent = dois traços (mesmo patamar do painel do hero). */
  variant?: "soft" | "accent";
};

export function BeamHighlight({
  children,
  className,
  innerClassName,
  variant = "soft",
}: BeamHighlightProps) {
  const reduce = useReducedMotion();
  const accent = variant === "accent";

  return (
    <div className={cn("relative overflow-hidden rounded-[inherit]", className)}>
      {accent && <AccentBorderBeams />}
      {!reduce && !accent && (
        <BorderBeam
          size={64}
          duration={13}
          borderWidth={1}
          colorFrom="rgb(37 99 255 / 0.5)"
          colorTo="rgb(147 197 253 / 0.1)"
          delay={1.2}
        />
      )}
      <div className={cn("relative z-[1] min-w-0", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
