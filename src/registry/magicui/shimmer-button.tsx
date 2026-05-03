"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type ShimmerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shimmerColor?: string;
  background?: string;
};

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      className,
      children,
      shimmerColor = "#0066FF",
      background = "#0052CC",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const reduce = useReducedMotion();

    return (
      <button
        ref={ref}
        type={type}
        style={{ background }}
        className={cn(
          "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white shadow-[0_0_36px_-12px_rgb(0_102_255_/0.55)] transition-transform duration-200",
          "hover:border-white/25 hover:shadow-[0_0_44px_-10px_rgb(0_102_255_/0.65)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c]",
          "active:scale-[0.99] motion-reduce:transition-none",
          className,
        )}
        {...props}
      >
        {!reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            initial={false}
          >
            <motion.span
              className="absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80"
              animate={{ left: ["-50%", "150%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.6,
              }}
            />
          </motion.span>
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${shimmerColor}55, transparent 55%)`,
          }}
        />
        <span className="relative z-[1] flex items-center justify-center gap-2">{children}</span>
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
