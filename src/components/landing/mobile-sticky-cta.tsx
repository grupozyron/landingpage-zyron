"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

import { WhatsAppDockIcon } from "./whatsapp-cta";

/**
 * Barra fixa mobile — uma linha: ícone WhatsApp (se configurado) + único CTA principal.
 * Mensagem alinhada ao hero (“Solicitar diagnóstico gratuito”) para reduzir ruído.
 */
export function MobileStickyCta() {
  const wa = getWhatsAppLeadUrl();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] md:hidden">
      <div className="pointer-events-auto border-t border-white/[0.12] bg-[#0A0A0A]/96 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          {wa ? <WhatsAppDockIcon /> : null}
          <InteractiveHoverButton
            href="#diagnosis"
            className={cn(
              ctaDiagnosis,
              "min-h-12 min-w-0 flex-1 px-4 text-[15px] leading-tight shadow-[0_-10px_44px_-14px_rgb(37_99_255_/0.55)] sm:px-6",
            )}
          >
            <span className="truncate">
              Solicitar diagnóstico gratuito
            </span>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
