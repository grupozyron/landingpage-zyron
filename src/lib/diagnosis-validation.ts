/** Nome e sobrenome: pelo menos duas partes com ≥2 caracteres cada. */
export function isValidFullName(name: string): boolean {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((p) => p.length > 0);
  if (parts.length < 2) return false;
  return parts.every((p) => p.length >= 2);
}

/**
 * Celular BR para WhatsApp: DDD (11–99) + 9 + 8 dígitos.
 * Aceita com ou sem +55; ignora máscara.
 */
export function normalizeBrazilMobileDigits(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("55") && d.length >= 12) {
    d = d.slice(2);
  }
  return d;
}

export function isValidBrazilMobileWhatsApp(raw: string): boolean {
  const d = normalizeBrazilMobileDigits(raw);
  if (d.length !== 11) return false;
  if (d[2] !== "9") return false;
  const ddd = Number.parseInt(d.slice(0, 2), 10);
  return ddd >= 11 && ddd <= 99;
}

export function isValidCompanyName(company: string): boolean {
  return company.trim().length >= 2;
}

/** Cidade / região — mínimo 2 caracteres, letras e sinais comuns em topônimos. */
export function isValidCity(city: string): boolean {
  const t = city.trim();
  if (t.length < 2) return false;
  return /^[\p{L}\s'.-]+$/u.test(t);
}
