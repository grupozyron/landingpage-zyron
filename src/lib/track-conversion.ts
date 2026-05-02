/** Chamado após lead enviado com sucesso (client-only). */
export function trackLeadConversion() {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    fbq?: (action: string, event: string, params?: object) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  try {
    w.fbq?.("track", "Lead");
  } catch {
    /* ignore */
  }

  try {
    w.gtag?.("event", "generate_lead", {
      currency: "BRL",
      value: 1,
    });
  } catch {
    /* ignore */
  }

  try {
    w.dataLayer?.push({
      event: "generate_lead",
      lead_source: "diagnosis_form",
    });
  } catch {
    /* ignore */
  }
}
