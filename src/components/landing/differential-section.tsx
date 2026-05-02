"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

const bullets = [
  "Estratégia antes da execução",
  "Campanhas orientadas por dados",
  "Landing pages focadas em resultado",
  "Posicionamento premium",
  "Melhoria contínua",
];

export function DifferentialSection() {
  return (
    <section
      id="diferencial"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Diferencial
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Não somos uma agência comum.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            A ZYRON combina estratégia, performance e visão empresarial para
            entregar crescimento de verdade.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
            {bullets.map((b) => (
              <li
                key={b}
                className={cn(
                  "flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#1C1C1C]/80 px-4 py-3.5",
                  "text-sm font-medium leading-snug text-[#C8C8D4]",
                )}
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-[#2563FF]/15 text-[#2563FF]">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
