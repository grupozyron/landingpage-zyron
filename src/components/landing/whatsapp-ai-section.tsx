"use client";

import { Bot, Check } from "lucide-react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaSection, ctaSectionSecondary } from "@/lib/cta-styles";
import { getWhatsAppLeadUrl } from "@/lib/whatsapp";

import { BeamHighlight } from "./beam-highlight";
import { Reveal } from "./reveal";

const benefits = [
  "Resposta imediata",
  "Menos lead perdido",
  "Agenda cheia",
  "Atendimento profissional",
  "Mais vendas",
];

export function WhatsappAiSection() {
  const wa = getWhatsAppLeadUrl();

  return (
    <section
      id="automacao"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Automação
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            IA no WhatsApp trabalhando 24h para sua empresa.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Enquanto sua equipe trabalha no horário comercial, a ZYRON pode
            implementar atendimento inteligente que responde clientes, qualifica
            oportunidades e agenda reuniões automaticamente.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <BeamHighlight className="mt-10 rounded-2xl border border-white/[0.08] bg-[#141418]/90 p-6 md:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#2563FF]/12 ring-1 ring-[#2563FF]/25">
                  <Bot
                    className="size-6 text-[#2563FF]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {benefits.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-sm font-medium leading-snug text-[#C8C8D4]"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-400">
                        <Check className="size-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <InteractiveHoverButton
                  href="#diagnosis"
                  className={ctaSection}
                >
                  Quero ver essa automação
                </InteractiveHoverButton>
                {wa ? (
                  <InteractiveHoverButton
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                    className={ctaSectionSecondary}
                  >
                    Falar no WhatsApp
                  </InteractiveHoverButton>
                ) : null}
              </div>
            </div>
          </BeamHighlight>
        </Reveal>
      </div>
    </section>
  );
}
