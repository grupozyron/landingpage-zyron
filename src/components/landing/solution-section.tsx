"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, LineChart, Target, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";
import { AuroraText } from "@/registry/magicui/aurora-text";

import { Reveal } from "./reveal";

const pillars = [
  {
    title: "Captação",
    body: "Anúncios que atraem clientes certos.",
    icon: Target,
  },
  {
    title: "Conversão",
    body: "Landing pages que geram contato.",
    icon: TrendingUp,
  },
  {
    title: "Automação",
    body: "IA que responde e agenda automaticamente.",
    icon: Bot,
  },
  {
    title: "Escala",
    body: "Mais previsibilidade e menos desperdício.",
    icon: LineChart,
  },
];

export function SolutionSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="solucao"
      className="scroll-mt-24 border-b border-white/[0.05] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Solução
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            A nova geração de{" "}
            <AuroraText className="font-semibold">crescimento empresarial.</AuroraText>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            A ZYRON combina marketing, tecnologia e automação para transformar
            negócios tradicionais em empresas prontas para escalar.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {pillars.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className={cn(
                "rounded-2xl border border-white/[0.07] bg-[#1C1C1C]/85 p-6 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
                "transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#2563FF]/20",
              )}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#0A0A0A] ring-1 ring-white/[0.06]">
                <item.icon
                  className="size-5 text-[#2563FF]"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <h3 className="font-heading mt-5 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
