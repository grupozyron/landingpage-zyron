"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";

/** Botão flutuante · só em ≥md (no mobile o WhatsApp está na barra fixa inferior). */
export function FloatingWhatsApp() {
  const wa = getWhatsAppLeadUrl();
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[46] hidden size-[3.75rem] items-center justify-center rounded-full border border-white/[0.14] bg-[#1C1C1C]/95 text-foreground shadow-[0_10px_44px_-14px_rgb(37_99_255_/0.65)] backdrop-blur-md transition-[transform,box-shadow] hover:border-[#2563FF]/45 hover:shadow-[0_14px_52px_-18px_rgb(37_99_255_/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] motion-safe:active:scale-[0.96] md:flex"
      aria-label="Abrir WhatsApp com mensagem para a ZYRON"
    >
      <MessageCircle className="size-[26px] text-[#2563FF]" strokeWidth={1.5} />
    </a>
  );
}
