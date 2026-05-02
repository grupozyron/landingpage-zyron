/** Texto pré-preenchido ao abrir o WhatsApp a partir da landing. */
export const WHATSAPP_LEAD_PREFILL =
  "Olá! Quero entender como a ZYRON pode ajudar minha empresa a crescer.";

/**
 * URL completa `wa.me` com mensagem, ou `null` se `NEXT_PUBLIC_WHATSAPP_NUMBER`
 * não estiver configurado — evita `https://wa.me/` quebrado no UI.
 */
export function getWhatsAppLeadUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!raw?.trim()) return null;
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_LEAD_PREFILL)}`;
}
