"use client";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

/** Um depoimento autorizado — avatar por hash do nome para consistência visual. */

const testimonial = {
  initials: "RM",
  quote:
    "Pela primeira vez o digital falou a mesma língua do showroom: critério no lead e página que puxa orçamento — menos ruído, mais conversa comercial.",
  name: "Ricardo M.",
  role: "Head de Operações",
  segment: "Esquadrias premium",
  region: "Grande SP",
  dateLabel: "Janeiro 2026",
};

function hslFromString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * (i + 1)) % 360;
  return `hsl(${h} 65% 42%)`;
}

export function TestimonialsSection() {
  const avatarBg = hslFromString(testimonial.name);

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
            data-photo-placeholder="true"
            className={cn(
              "relative mt-12 max-w-2xl rounded-2xl border border-white/[0.08] bg-[#1C1C1C]/90 p-8",
              "shadow-[0_0_0_1px_rgb(255_255_255_/0.04),inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
              "transition-transform duration-200 hover:scale-[1.02]",
            )}
          >
            <p className="text-[13px] tracking-[0.25em] text-amber-400/95" aria-hidden>
              ★★★★★
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              {testimonial.dateLabel}
            </p>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-semibold tracking-tight text-white ring-1 ring-white/15"
                style={{ background: avatarBg }}
                data-photo-placeholder="true"
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
