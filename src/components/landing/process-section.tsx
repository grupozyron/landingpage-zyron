"use client";



import { motion, useReducedMotion } from "motion/react";

import { Bot, LineChart, Rocket, Target } from "lucide-react";



import { cn } from "@/lib/utils";

import { fadeUp, stagger } from "@/lib/motion-variants";



import { Reveal } from "./reveal";



const steps = [

  {

    n: "01",

    title: "Diagnóstico estratégico",

    body: "Entendemos seu negócio, ticket e onde está o gargalo real de crescimento.",

    icon: Target,

  },

  {

    n: "02",

    title: "Presença digital & landing",

    body: "Mensagem, página e experiência alinhadas ao que você vende.",

    icon: Rocket,

  },

  {

    n: "03",

    title: "Campanhas & automação",

    body: "Tráfego com foco em conversão + fluxos no WhatsApp para não perder lead.",

    icon: Bot,

  },

  {

    n: "04",

    title: "Otimização & escala",

    body: "Medição, testes e expansão do que comprova retorno — sem achismo.",

    icon: LineChart,

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

          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">

            Quatro etapas claras — da análise ao ritmo de melhoria contínua.

          </p>

        </Reveal>



        <motion.ol

          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"

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

