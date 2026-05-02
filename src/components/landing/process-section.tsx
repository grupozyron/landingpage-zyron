"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LineChart,
  Rocket,
  Settings2,
  Target,
  TrendingUp,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";

import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Diagnóstico estratégico",
    body: "Entendemos sua empresa e oportunidades.",
    icon: Target,
  },
  {
    n: "02",
    title: "Estruturação",
    body: "Criamos sua presença digital.",
    icon: Settings2,
  },
  {
    n: "03",
    title: "Lançamento",
    body: "Ativamos campanhas e captação.",
    icon: Rocket,
  },
  {
    n: "04",
    title: "Otimização",
    body: "Melhoramos continuamente.",
    icon: LineChart,
  },
  {
    n: "05",
    title: "Crescimento",
    body: "Escalamos o que funciona.",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Processo
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Como funciona
          </h2>
        </Reveal>

        <motion.ol
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.li
              key={step.n}
              variants={fadeUp}
              className={cn(
                "relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1C1C1C]/80 p-6 md:p-7",
                "shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)] transition-colors hover:border-[#2563FF]/25",
              )}
            >
              <div className="pointer-events-none absolute right-4 top-4 font-mono text-4xl font-semibold tabular-nums text-white/[0.06]">
                {step.n}
              </div>
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#0A0A0A] ring-1 ring-white/[0.06]">
                <step.icon
                  className="size-5 text-[#2563FF]"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <h3 className="font-heading mt-5 text-lg font-semibold text-foreground md:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
