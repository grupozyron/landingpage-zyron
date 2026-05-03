"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, LineChart, Target, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";

import { Reveal } from "./reveal";

const cards = [
  {
    title: "Tráfego qualificado",
    body: "Campanhas direcionadas ao perfil certo — no momento certo.",
    icon: Target,
    span: "large" as const,
    highlight: false,
  },
  {
    title: "Conversão",
    body: "Landing pages que pedem contato com intenção comercial.",
    icon: TrendingUp,
    span: "small" as const,
    highlight: false,
  },
  {
    title: "Automação",
    body: "IA e fluxos no WhatsApp para não perder oportunidade.",
    icon: Bot,
    span: "small" as const,
    highlight: false,
  },
  {
    title: "Escala",
    body: "Menos desperdício, mais ritmo e decisão orientada por dados.",
    icon: LineChart,
    span: "small" as const,
    highlight: true,
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
            O que a ZYRON faz pelo seu crescimento
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Marketing, tecnologia e conversão no mesmo sistema — para negócios
            tradicionais que precisam de estrutura, não de mais um pacote genérico.
          </p>
        </Reveal>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-3 md:[grid-auto-rows:minmax(168px,auto)]"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {cards.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] p-6 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)] transition-[border-color,transform] duration-200 md:min-h-[168px]",
                "hover:-translate-y-0.5 hover:border-[#2563FF]/35",
                item.span === "large" && "md:col-span-2",
                item.highlight &&
                  "border-[#2563FF]/40 bg-[#2563FF]/[0.92] text-white shadow-[0_20px_60px_-28px_rgb(37_99_255_/0.55)] md:col-span-2",
                !item.highlight && "bg-[#111]/95",
              )}
            >
              <div>
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-xl ring-1 ring-inset",
                    item.highlight
                      ? "bg-white/15 ring-white/25"
                      : "bg-[#0A0A0A] ring-white/[0.06]",
                  )}
                >
                  <item.icon
                    className={cn(
                      "size-5",
                      item.highlight ? "text-white" : "text-[#2563FF]",
                    )}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <h3
                  className={cn(
                    "font-heading mt-4 text-lg font-semibold tracking-tight",
                    item.highlight ? "text-white" : "text-foreground",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 max-w-md text-sm leading-relaxed",
                    item.highlight ? "text-white/90" : "text-muted-foreground",
                  )}
                >
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
