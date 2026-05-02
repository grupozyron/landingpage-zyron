import type { Metadata } from "next";
import Link from "next/link";

import { GridBackground } from "@/components/landing/grid-background";
import { SiteLogo } from "@/components/brand/site-logo";
import { SITE_CANONICAL_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Recebemos seu pedido | ZYRON",
  description:
    "Obrigado pelo envio. A equipe retorna em até dois dias úteis com o próximo passo.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_CANONICAL_URL}/obrigado` },
};

export default function ObrigadoPage() {
  return (
    <>
      <GridBackground />
      <main className="relative z-[1] mx-auto flex min-h-[100dvh] max-w-lg flex-col justify-center px-6 py-20 text-center">
        <div className="mb-10 flex justify-center">
          <SiteLogo variant="header" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
          Tudo certo
        </p>
        <h1 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Recebemos seu pedido
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Em até <strong className="font-semibold text-foreground">dois dias úteis</strong>{" "}
          retornamos com o próximo passo — objetivo e sem enrolação.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Se preferir falar agora, use o WhatsApp comercial no site ou volte à página
          inicial.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.14] bg-[#1C1C1C]/90 px-6 text-sm font-semibold text-foreground transition hover:border-[#2563FF]/45 hover:bg-[#1a1a22]"
          >
            Voltar ao início
          </Link>
          <Link
            href="/#diagnosis"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2563FF] px-6 text-sm font-semibold text-white shadow-[0_8px_28px_-12px_rgb(37_99_255_/0.65)] transition hover:bg-[#1d52e6]"
          >
            Ver formulário
          </Link>
        </div>
      </main>
    </>
  );
}
