"use client";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

/** Um depoimento autorizado com atribuição mínima — sem métricas não auditadas. */
const testimonial = {
  initials: "RM",
  quote:
    "Pela primeira vez o digital falou a mesma língua do showroom: critério no lead e página que puxa orçamento — menos ruído, mais conversa comercial.",
  name: "Ricardo M.",
  role: "Head de Operações",
  segment: "Esquadrias premium",
  region: "Grande SP",
};

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
            Preferimos poucos depoimentos fortes a vários genéricos — novas referências
            entram quando há autorização explícita.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <figure
            className={cn(
              "relative mt-12 max-w-2xl rounded-2xl border border-white/[0.08] bg-[#1C1C1C]/90 p-8",
              "shadow-[0_0_0_1px_rgb(255_255_255_/0.04),inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
            )}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563FF]/25 to-[#2563FF]/10 font-heading text-xl font-semibold tracking-tight text-[#F8F8F8] ring-1 ring-[#2563FF]/30"
                aria-hidden
              >
                {testimonial.initials}
              </div>
              <div className="min-w-0 flex-1">
                <blockquote className="text-[15px] leading-relaxed text-foreground md:text-base">
                  <span className="text-[#2563FF]/80">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-[#2563FF]/80">&rdquo;</span>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/[0.06] pt-6">
                  <strong className="block text-base font-semibold text-foreground">
                    {testimonial.name}
                  </strong>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.segment} · {testimonial.region}
                  </span>
                </figcaption>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
