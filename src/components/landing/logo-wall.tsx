"use client";

import { cn } from "@/lib/utils";

/** Marcas/plataformas em texto neutro — substituir por SVG oficiais quando houver licença. */
const ITEMS = [
  "Meta Ads",
  "Google Ads",
  "WhatsApp Business",
  "GA4",
  "RD Station",
  "Search Console",
] as const;

export function LogoWall({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "border-t border-white/5 border-b border-white/[0.05] bg-[#0A0A0A]/40 py-8",
        className,
      )}
      aria-label="Ferramentas e plataformas"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="mb-4 w-full text-center text-[11px] uppercase tracking-widest text-white/30">
          Tecnologia &amp; plataformas que utilizamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {ITEMS.map((label) => (
            <span
              key={label}
              className="cursor-default text-sm font-medium text-white/25 transition-colors duration-200 hover:text-white/50"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
