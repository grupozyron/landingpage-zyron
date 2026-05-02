import { normalizeBrazilMobileDigits } from "@/lib/diagnosis-validation";

/** Máscara visual (00) 00000-0000 — armazena apenas dígitos no estado upstream se preferir. */
export function formatBrazilMobileDisplay(raw: string): string {
  const d = normalizeBrazilMobileDigits(raw).slice(0, 11);
  if (d.length === 0) return "";
  const dd = d.slice(0, 2);
  const mid = d.slice(2, 7);
  const end = d.slice(7, 11);
  if (d.length <= 2) return `(${dd}`;
  if (d.length <= 6) return `(${dd}) ${mid}`;
  return `(${dd}) ${mid}-${end}`;
}
