"use client";

import { Reveal } from "./reveal";

export function PricePerceptionSection() {
  return (
    <section
      id="investimento"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Clareza
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Muito mais barato que perder clientes todos os meses.
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Quantos clientes sua empresa deixa de fechar por demora, falta de
              estrutura ou ausência digital?
            </p>
            <p className="border-l-2 border-[#2563FF]/40 pl-4 font-medium text-foreground/95">
              Investir em crescimento custa menos que continuar parado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
