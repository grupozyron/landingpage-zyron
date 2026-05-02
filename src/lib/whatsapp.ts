import { SITE_WHATSAPP_DIGITS_FALLBACK } from "@/lib/site-config";

/** Texto pré-preenchido ao abrir o WhatsApp a partir da landing. */
export const WHATSAPP_LEAD_PREFILL =
  "Olá! Quero entender como a ZYRON pode ajudar minha empresa a crescer.";

/**
 * URL `wa.me` com mensagem. Usa `NEXT_PUBLIC_WHATSAPP_NUMBER` no build; se vazio,
 * cai no número institucional em `site-config` para o WhatsApp nunca ficar “invisível” na UI.
 */
export function getWhatsAppLeadUrl(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  const digits = fromEnv?.replace(/\D/g, "") ||
    SITE_WHATSAPP_DIGITS_FALLBACK.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_LEAD_PREFILL)}`;
}
