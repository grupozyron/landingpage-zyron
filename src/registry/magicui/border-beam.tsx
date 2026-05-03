"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type BorderBeamProps = {
  className?: string;
  /** Mantidos por compatibilidade — o efeito atual usa halos suaves (sem “quadrado”). */
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
};

/**
 * Luz ambiente atrás do card — apenas blobs circulares com blur (estilo WhatsApp / chat humanizado).
 * Evita o gradiente cônico rotacionando, que criava forma quadrada visível.
 */
export function BorderBeam({
  className,
  duration = 10,
  delay = 0,
  colorFrom = "#0066FF",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden
    >
      {/* Tom WhatsApp — bem suave */}
      <div className="absolute -right-[25%] -top-[35%] size-[min(120vw,28rem)] rounded-full bg-[#25D366]/[0.07] blur-[52px]" />
      <div className="absolute -bottom-[30%] -left-[20%] size-[min(110vw,26rem)] rounded-full bg-[#128C7E]/[0.06] blur-[56px]" />
      {/* Refino azul marca — só atmosfera */}
      <motion.div
        className="absolute left-[55%] top-[45%] size-[min(130vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[68px]"
        style={{
          background: `radial-gradient(circle at center, ${colorFrom}18 0%, transparent 72%)`,
        }}
        initial={{ opacity: 0.45 }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    </div>
  );
}
