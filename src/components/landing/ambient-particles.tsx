"use client";

import { useReducedMotion } from "motion/react";

import { Particles } from "@/components/ui/particles";

/**
 * Camada de partículas reativa ao rato; desligada com “reduzir movimento”.
 */
export function AmbientParticles() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <Particles
      className="absolute inset-0 z-0 opacity-[0.2] sm:opacity-[0.26]"
      quantity={48}
      ease={78}
      staticity={52}
      size={0.35}
      color="#7BA6FF"
    />
  );
}
