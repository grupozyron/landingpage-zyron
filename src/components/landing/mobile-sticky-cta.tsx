"use client";

import { MessageCircle } from "lucide-react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Barra fixa mobile — WhatsApp explícito + diagnóstico; FAB verde também flutuando na página.
 */
export function MobileStickyCta() {
  const wa = getWhatsAppLeadUrl();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] md:hidden">
      <div className="pointer-events-auto border-t border-white/[0.12] bg-[#0A0A0A]/97 px-3 pb-[max(0.875rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-lg items-stretch gap-2">
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex min-h-12 min-w-0 shrink-0 items-center justify-center gap-2 rounded-full",
                "border border-[#25D366]/45 bg-[#25D366]/[0.11] px-3.5 text-[13px] font-semibold text-[#DCFCE8]",
                "shadow-[0_0_24px_-14px_rgb(37_211_102_/0.45)]",
                "transition-[border-color,background-color] active:scale-[0.99] hover:bg-[#25D366]/18",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
                "max-[360px]:px-3",
              )}
              aria-label="WhatsApp — falar com a ZYRON"
            >
              <MessageCircle className="size-[20px] shrink-0 text-[#25D366]" strokeWidth={2} aria-hidden />
              <span className="truncate">WhatsApp</span>
            </a>
          ) : null}
          <InteractiveHoverButton
            href="#diagnosis"
            className={cn(
              ctaDiagnosis,
              "min-h-12 min-w-0 flex-1 px-3 text-[14px] leading-tight shadow-[0_-10px_44px_-14px_rgb(37_99_255_/0.55)] sm:px-5 sm:text-[15px]",
            )}
          >
            <span className="truncate">Minha estratégia →</span>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
