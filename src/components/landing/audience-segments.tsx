"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import { SEGMENT_PREFILL_KEY } from "@/lib/diagnosis-prefill";

import { Reveal } from "./reveal";

type Card = {
  id: string;
  title: string;
  pain: string;
  outcome: string;
  segmentValue: string;
};

const cards: Card[] = [
  {
    id: "civil",
    title: "Construção civil & esquadrias",
    pain: "Orçamentos bons, mas o telefone não sustenta a carteira.",
    outcome: "Demanda previsível com critério no lead e página que puxa conversa.",
    segmentValue: "Construção civil",
  },
  {
    id: "clin",
    title: "Clínicas & saúde",
    pain: "Agenda oscila e o digital não traduz confiança clínica.",
    outcome: "Fluxo de contatos qualificados e mensagem alinhada à reputação.",
    segmentValue: "Clínica",
  },
  {
    id: "b2b",
    title: "Serviços B2B",
    pain: "Dependência de indicação e ciclo longo sem nutrição.",
    outcome: "Pipeline com campanhas e páginas pensadas para decisão B2B.",
    segmentValue: "Serviços B2B",
  },
  {
    id: "marc",
    title: "Marcenaria & móveis",
    pain: "Portfólio forte, mas poucos pedidos de projeto qualificado.",
    outcome: "Tráfego e landing que filtram curioso de comprador.",
    segmentValue: "Marcenaria / móveis planejados",
  },
  {
    id: "local",
    title: "Negócios locais premium",
    pain: "Concorrente menor aparece mais no mapa e no feed.",
    outcome: "Presença local + oferta clara — sem parecer promoção genérica.",
    segmentValue: "Serviço local premium",
  },
  {
    id: "out",
    title: "Outros setores tradicionais",
    pain: "Time excelente, mas crescimento depende de poucos canais.",
    outcome: "Sistema de aquisição repetível em vez de picos de sorte.",
    segmentValue: "Negócio familiar tradicional",
  },
];

export function AudienceSegments() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  const goDiagnosis = useCallback((segmentValue: string) => {
    try {
      sessionStorage.setItem(SEGMENT_PREFILL_KEY, segmentValue);
    } catch {
      /* ignore */
    }
    window.location.hash = "#diagnosis";
  }, []);

  return (
    <section
      id="segmentos"
      className="scroll-mt-24 border-b border-white/[0.05] py-[72px] md:py-[96px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Segmentos
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Para quem a ZYRON mais performa
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Toque para ver dor típica e resultado esperado — e já ir ao formulário com o
            segmento certo.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const isOpen = open === c.id;
            return (
              <li key={c.id}>
                <motion.article
                  layout
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-[#1C1C1C]/90 p-5 shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]",
                    "transition-[border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-40px_rgb(0_0_0_/0.75)]",
                    isOpen
                      ? "border-[#2563FF]/45 ring-1 ring-[#2563FF]/25"
                      : "border-white/[0.08]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen((v) => (v === c.id ? null : c.id))}
                    className="flex w-full items-start justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-semibold leading-snug text-foreground">
                      {c.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180 text-[#2563FF]",
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-4 text-sm leading-relaxed text-muted-foreground">
                          <p>
                            <span className="font-medium text-foreground">Dor:</span>{" "}
                            {c.pain}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">Resultado:</span>{" "}
                            {c.outcome}
                          </p>
                          <button
                            type="button"
                            onClick={() => goDiagnosis(c.segmentValue)}
                            className="inline-flex w-full min-h-11 items-center justify-center rounded-full border border-[#2563FF]/40 bg-[#2563FF]/12 px-4 text-sm font-semibold text-foreground transition hover:bg-[#2563FF]/20"
                          >
                            Sou desse setor →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
