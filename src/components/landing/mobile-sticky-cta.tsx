"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

/** Barra fixa só em mobile — diagnóstico sempre a um toque. */
export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] md:hidden">
      <div className="pointer-events-auto border-t border-white/[0.1] bg-[#0A0A0A]/95 px-4 pb-[max(1.125rem,env(safe-area-inset-bottom))] pt-3.5 backdrop-blur-xl">
        <InteractiveHoverButton
          href="#diagnosis"
          className={cn(
            ctaDiagnosis,
            "w-full px-4 shadow-[0_-10px_44px_-14px_rgb(37_99_255_/0.55)] sm:px-6",
          )}
        >
          <span className="hidden min-[380px]:inline">
            Quero crescer com a ZYRON
          </span>
          <span className="min-[380px]:hidden">Crescer com a ZYRON</span>
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
