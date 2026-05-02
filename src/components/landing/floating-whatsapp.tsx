"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/** FAB WhatsApp — também em mobile (acima da barra fixa), sempre que há URL wa.me. */
export function FloatingWhatsApp() {
  const wa = getWhatsAppLeadUrl();
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed z-[47] inline-flex size-14 items-center justify-center rounded-full md:size-[3.75rem]",
        "border border-[#25D366]/45 bg-[#1C1C1C]/95 text-[#DCFCE8]",
        "shadow-[0_12px_40px_-14px_rgb(37_211_102_/0.55)] backdrop-blur-md",
        "transition-[transform,box-shadow,border-color] hover:border-[#25D366]/65 hover:shadow-[0_14px_48px_-16px_rgb(37_211_102_/0.5)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
        "motion-safe:active:scale-[0.96]",
        /* Mobile: acima da barra inferior (~5.5rem + safe area) */
        "bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] right-4",
        "md:bottom-8 md:right-8",
      )}
      aria-label="Abrir WhatsApp com mensagem para a ZYRON"
    >
      <MessageCircle className="size-[26px] text-[#25D366] md:size-[28px]" strokeWidth={1.75} />
    </a>
  );
}
