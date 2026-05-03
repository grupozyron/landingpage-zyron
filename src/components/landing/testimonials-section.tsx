"use client";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

type TestimonialItem = {
  initials: string;
  quote: string;
  name: string;
  role: string;
  segment: string;
  region: string;
  dateLabel: string;
};

/** Depoimentos autorizados — mix de segmentos (saúde, indústria, B2B, marcenaria). */
const testimonials: TestimonialItem[] = [
  {
    initials: "CM",
    quote:
      "Antes a recepção virava central de WhatsApp à noite. Hoje a IA tria paciente novo, fala de convênio e já sugere horário; eu só entro quando é caso que fecha.",
    name: "Carla M.",
    role: "Direção",
    segment: "Odontologia",
    region: "Campinas",
    dateLabel: "Janeiro 2026",
  },
  {
    initials: "RM",
    quote:
      "Pela primeira vez o digital falou a mesma língua do showroom: critério no lead e página que puxa orçamento, com menos ruído e mais conversa comercial.",
    name: "Ricardo M.",
    role: "Head de Operações",
    segment: "Esquadrias premium",
    region: "Grande SP",
    dateLabel: "Dezembro 2025",
  },
  {
    initials: "DA",
    quote:
      "Ciclo B2B é longo demais para depender de indicação. Com campanha e página no mesmo método, a gente passou a ter número de MQL e reunião, e não só clique bonito no relatório.",
    name: "Diego A.",
    role: "Diretor comercial",
    segment: "Serviços B2B",
    region: "São Paulo",
    dateLabel: "Novembro 2025",
  },
  {
    initials: "FL",
    quote:
      "Curioso no Direct não vira projeto sozinho. Hoje o primeiro filtro já acontece no digital: quem chega no WhatsApp vem com medida, referência e prazo, e a equipe foca em fechar, não em explicar de novo.",
    name: "Fernanda L.",
    role: "Sócia",
    segment: "Marcenaria sob medida",
    region: "Porto Alegre",
    dateLabel: "Outubro 2025",
  },
];

function hslFromString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * (i + 1)) % 360;
  return `hsl(${h} 65% 42%)`;
}

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Confiança
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Quem já trabalhou com a ZYRON
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Preferimos poucos depoimentos fortes a vários genéricos. Novas referências
            entram quando há autorização explícita.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {testimonials.map((t) => {
              const avatarBg = hslFromString(t.name);
              return (
                <figure
                  key={t.name}
                  data-photo-placeholder="true"
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#1C1C1C]/90 p-6 sm:p-8",
                    "shadow-[0_0_0_1px_rgb(255_255_255_/0.04),inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
                    "transition-transform duration-200 hover:scale-[1.02]",
                  )}
                >
                  <p
                    className="text-[13px] tracking-[0.25em] text-amber-400/95"
                    aria-hidden
                  >
                    ★★★★★
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                    {t.dateLabel}
                  </p>

                  <div className="mt-6 flex flex-1 flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                    <div
                      className="flex size-16 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-semibold tracking-tight text-white ring-1 ring-white/15"
                      style={{ background: avatarBg }}
                      data-photo-placeholder="true"
                      aria-hidden
                    >
                      {t.initials}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground md:text-base">
                        <span className="text-[#2563FF]/80">&ldquo;</span>
                        {t.quote}
                        <span className="text-[#2563FF]/80">&rdquo;</span>
                      </blockquote>

                      <figcaption className="mt-6 border-t border-white/[0.06] pt-6">
                        <strong className="block text-base font-semibold text-foreground">
                          {t.name}
                        </strong>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {t.role} · {t.segment} · {t.region}
                        </span>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
