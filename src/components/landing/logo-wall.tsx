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
        "border-b border-white/[0.05] bg-[#0A0A0A]/40 py-10 md:py-12",
        className,
      )}
      aria-label="Ferramentas e plataformas"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Tecnologia e plataformas que utilizamos
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {ITEMS.map((label) => (
            <span
              key={label}
              className="select-none font-mono text-sm font-medium text-foreground/50 transition-opacity duration-200 hover:text-foreground/90"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
