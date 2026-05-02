"use client";

import {
  BarChart3,
  Globe2,
  Megaphone,
  RefreshCw,
  Rocket,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

const services = [
  { title: "Gestão de tráfego pago", icon: Megaphone },
  { title: "Landing pages premium", icon: Sparkles },
  { title: "Posicionamento digital", icon: Globe2 },
  { title: "Captação de leads", icon: BarChart3 },
  { title: "Otimização contínua", icon: RefreshCw },
  { title: "Estratégia de crescimento", icon: Rocket },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Entregas
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            O que construímos para sua empresa
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className={cn(
                "flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-[#1C1C1C]/70 p-6",
                "shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)] transition-colors hover:border-[#2563FF]/25",
              )}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0A0A0A] ring-1 ring-white/[0.06]">
                <s.icon
                  className="size-5 text-[#2563FF]"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <p className="pt-1.5 text-base font-medium leading-snug text-foreground">
                {s.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
