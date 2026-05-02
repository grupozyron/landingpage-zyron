"use client";

import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

const segments = [
  "Empresas tradicionais",
  "Negócios familiares",
  "Construção civil",
  "Arquitetura",
  "Marcenaria",
  "Clínicas",
  "Serviços premium",
  "Negócios locais fortes",
];

const quotes = [
  {
    text: "Pela primeira vez o digital falou a mesma língua do showroom: critério no lead e página que puxa orçamento.",
    name: "Ricardo M.",
    role: "Head de Operações",
    org: "Esquadrias · Grande SP",
  },
  {
    text: "O ritual semanal mudou como decidimos verba: menos sensação, mais número e próximo passo óbvio.",
    name: "Paula V.",
    role: "Fundadora",
    org: "Serviço B2B · Interior SP",
  },
  {
    text: "Não é slide bonito. É processo: hipótese, teste, resultado. Exatamente o que faltava.",
    name: "Marcelo T.",
    role: "Marketing",
    org: "Marca local · alto ticket",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Para quem é
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Para empresas que querem evoluir
          </h2>
          <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/[0.08] bg-[#1C1C1C]/80 px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 max-w-2xl rounded-2xl border border-white/[0.08] bg-[#1C1C1C]/50 p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Minha empresa é boa, mas está parada no tempo.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Se esse pensamento faz sentido para você, a ZYRON pode levar seu
              negócio a outro nível — com método, presença digital séria e
              aquisição previsível, sem abandonar o que já funcionou no offline.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={cn(
                "relative min-w-[min(100%,340px)] shrink-0 snap-start rounded-2xl border border-white/[0.07] bg-[#1C1C1C]/85 p-6 md:min-w-0",
                "shadow-[0_0_0_1px_rgb(255_255_255_/0.04),inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
              )}
            >
              <Quote
                className="absolute right-5 top-5 size-8 text-[#2563FF]/15"
                aria-hidden
              />
              <blockquote className="relative text-sm leading-relaxed text-foreground">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-5 space-y-1">
                <span className="block text-sm font-semibold text-foreground">
                  {q.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {q.role} · {q.org}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] leading-relaxed text-muted-foreground/75 md:text-[11px]">
          Nomes abreviados e organizações descritivas — privacidade dos participantes.
        </p>
      </div>
    </section>
  );
}
