import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  isValidBrazilMobileWhatsApp,
  isValidCity,
  isValidCompanyName,
  isValidFullName,
} from "@/lib/diagnosis-validation";

/** Destino dos leads (override: `DIAGNOSIS_NOTIFY_EMAIL` no `.env.local`). */
const DIAGNOSIS_NOTIFY_EMAIL_DEFAULT = "grupozyron@gmail.com";

type Payload = {
  name: string;
  whatsapp: string;
  company: string;
  segment: string;
  city: string;
  challenge?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatEmailBody(p: Payload & { receivedAt: string }) {
  const lines = [
    `Nome: ${p.name}`,
    `WhatsApp: ${p.whatsapp}`,
    `Empresa: ${p.company}`,
    `Segmento: ${p.segment}`,
    `Cidade: ${p.city}`,
    p.challenge ? `Principal desafio: ${p.challenge}` : null,
    `Recebido em: ${p.receivedAt}`,
  ];
  return lines.filter(Boolean).join("\n");
}

function formatEmailHtml(p: Payload & { receivedAt: string }) {
  const rows = [
    ["Nome", p.name],
    ["WhatsApp", p.whatsapp],
    ["Empresa", p.company],
    ["Segmento", p.segment],
    ["Cidade", p.city],
    ...(p.challenge ? [["Principal desafio", p.challenge]] : []),
    ["Recebido em", p.receivedAt],
  ] as const;

  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px">${escapeHtml(k)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:13px">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
<p style="margin:0 0 16px;font-size:15px;font-weight:600">Novo pedido de diagnóstico · ZYRON</p>
<table style="border-collapse:collapse;width:100%;max-width:560px">${bodyRows}</table>
<p style="margin:16px 0 0;font-size:12px;color:#888">Enviado pelo formulário do site.</p>
</body></html>`;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name : "";
  const whatsapp = typeof o.whatsapp === "string" ? o.whatsapp : "";
  const company = typeof o.company === "string" ? o.company : "";
  const segment = typeof o.segment === "string" ? o.segment : "";
  const city = typeof o.city === "string" ? o.city : "";
  const challenge =
    typeof o.challenge === "string" && o.challenge.trim()
      ? o.challenge.trim()
      : undefined;

  if (!isValidFullName(name)) {
    return NextResponse.json(
      { error: "Informe nome e sobrenome (mínimo 2 letras em cada parte)." },
      { status: 400 },
    );
  }
  if (!isValidBrazilMobileWhatsApp(whatsapp)) {
    return NextResponse.json(
      {
        error:
          "Informe um celular válido com DDD (ex.: (11) 98765-4321 ou 11987654321).",
      },
      { status: 400 },
    );
  }
  if (!isValidCompanyName(company)) {
    return NextResponse.json(
      { error: "Informe o nome da empresa." },
      { status: 400 },
    );
  }
  if (!segment.trim()) {
    return NextResponse.json(
      { error: "Selecione o segmento." },
      { status: 400 },
    );
  }
  if (!isValidCity(city)) {
    return NextResponse.json(
      { error: "Informe uma cidade válida." },
      { status: 400 },
    );
  }

  const receivedAt = new Date().toISOString();
  const payload: Payload & { receivedAt: string } = {
    name: name.trim(),
    whatsapp,
    company: company.trim(),
    segment: segment.trim(),
    city: city.trim(),
    challenge,
    receivedAt,
  };

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail =
    process.env.DIAGNOSIS_NOTIFY_EMAIL?.trim() ||
    DIAGNOSIS_NOTIFY_EMAIL_DEFAULT;

  if (resendKey) {
    const resend = new Resend(resendKey);
    const from =
      process.env.RESEND_FROM ?? "ZYRON <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: notifyEmail,
      subject: `[ZYRON] Diagnóstico — ${payload.company}`,
      text: formatEmailBody(payload),
      html: formatEmailHtml(payload),
    });

    if (error) {
      console.error("[api/diagnosis] Resend:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente de novo em instantes." },
        { status: 502 },
      );
    }
  } else {
    console.info("[api/diagnosis] email não configurado; payload:", payload);
  }

  return NextResponse.json({ ok: true });
}
