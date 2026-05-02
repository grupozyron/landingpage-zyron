"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";

/** Botão flutuante · acima da barra móvel fixa · só aparece com número configurado */
export function FloatingWhatsApp() {
  const wa = getWhatsAppLeadUrl();
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] right-5 z-[46] flex size-14 items-center justify-center rounded-full border border-white/[0.14] bg-[#1C1C1C]/95 text-foreground shadow-[0_10px_44px_-14px_rgb(37_99_255_/0.65)] backdrop-blur-md transition-[transform,box-shadow] hover:border-[#2563FF]/45 hover:shadow-[0_14px_52px_-18px_rgb(37_99_255_/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] motion-safe:active:scale-[0.96] md:bottom-8 md:right-8 md:size-[3.75rem]"
      aria-label="Abrir WhatsApp com mensagem para a ZYRON"
    >
      <MessageCircle className="size-[26px] text-[#2563FF]" strokeWidth={1.5} />
    </a>
  );
}
