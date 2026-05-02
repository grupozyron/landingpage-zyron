"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const waShell =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#25D366]/35 bg-[#25D366]/[0.08] px-4 text-sm font-semibold text-[#DCFCE8] shadow-sm transition-[border-color,background-color,box-shadow] hover:border-[#25D366]/50 hover:bg-[#25D366]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

/**
 * Links wa.me — só renderiza com `NEXT_PUBLIC_WHATSAPP_NUMBER` (apenas dígitos, ex. 5511999887766).
 */
export function WhatsAppFooterButton({ className }: { className?: string }) {
  const wa = getWhatsAppLeadUrl();
  if (!wa) return null;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        waShell,
        "px-4 py-2.5 shadow-[0_0_28px_-16px_rgb(37_211_102_/0.35)]",
        className,
      )}
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle className="size-[18px] shrink-0 text-[#25D366]" aria-hidden />
      WhatsApp
    </a>
  );
}

/**
 * Ícone compacto para a barra fixa mobile — pareia com o CTA principal sem duplicar texto “WhatsApp”.
 */
export function WhatsAppDockIcon({ className }: { className?: string }) {
  const wa = getWhatsAppLeadUrl();
  if (!wa) return null;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-full",
        "border border-[#25D366]/45 bg-[#25D366]/12 text-[#DCFCE8]",
        "shadow-[0_0_22px_-12px_rgb(37_211_102_/0.4)]",
        "transition-[border-color,background-color,transform] hover:bg-[#25D366]/18 motion-safe:active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
        className,
      )}
      aria-label="WhatsApp — falar com a ZYRON"
    >
      <MessageCircle className="size-[22px] text-[#25D366]" strokeWidth={2} aria-hidden />
    </a>
  );
}
