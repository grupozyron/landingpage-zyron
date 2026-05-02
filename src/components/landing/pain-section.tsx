"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Globe2,
  Smartphone,
  TrendingDown,
  Truck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";

import { Reveal } from "./reveal";

const pains = [
  {
    title: "Cresce apenas por indicação",
    icon: Users,
  },
  {
    title: "Vendas oscilam no mês",
    icon: TrendingDown,
  },
  {
    title: "Concorrentes avançando online",
    icon: Truck,
  },
  {
    title: "Instagram fraco ou parado",
    icon: Smartphone,
  },
  {
    title: "Site inexistente ou desatualizado",
    icon: Globe2,
  },
  {
    title: "Potencial alto sendo desperdiçado",
    icon: Building2,
  },
];

export function PainSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="dor"
      className="scroll-mt-24 border-b border-white/[0.05] py-[96px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Realidade
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Sua empresa vive alguma dessas situações?
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Reputação forte, tempo de mercado e operação de alto nível — mas o
            digital ainda não conversa com o que sua empresa realmente é.
          </p>
        </Reveal>

        <motion.ul
          className="mt-14 grid gap-4 sm:grid-cols-2"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {pains.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-[#1C1C1C] p-6",
                "shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]",
                "transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgb(37_99_255_/0.35),0_24px_60px_-40px_rgb(0_0_0_/0.8)]",
              )}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563FF]/[0.07] to-transparent" />
              </div>
              <div className="relative flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#1C1C1C] ring-1 ring-white/[0.06]">
                  <item.icon
                    className="size-4 text-[#2563FF]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.08}>
          <p className="mt-12 max-w-2xl text-[15px] font-medium leading-relaxed text-foreground sm:text-base">
            O problema não é sua empresa.{" "}
            <span className="text-muted-foreground">
              É a falta de estrutura digital.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
