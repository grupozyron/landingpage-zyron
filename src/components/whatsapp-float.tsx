"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/** FAB WhatsApp global — canto inferior direito (todas as páginas). */
export function WhatsAppFloat() {
  const url = getWhatsAppLeadUrl();
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a ZYRON pelo WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg",
        "transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5d]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
      )}
    >
      <MessageCircle className="size-7 text-white" strokeWidth={2} aria-hidden />
    </a>
  );
}
