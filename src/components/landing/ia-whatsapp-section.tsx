"use client";

import { Bot, Calendar, BarChart3, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SEGMENT_PREFILL_KEY } from "@/lib/diagnosis-prefill";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";

import { Reveal } from "./reveal";

const benefits = [
  {
    icon: Zap,
    title: "Resposta em segundos",
    line: "Nunca perde um lead por demora no primeiro contato.",
  },
  {
    icon: Bot,
    title: "Qualificação automática",
    line: "Só chega para você o que passou pelo filtro comercial.",
  },
  {
    icon: Calendar,
    title: "Agenda visitas",
    line: "Encaixa na sua rotina — sem planilha paralela.",
  },
  {
    icon: BarChart3,
    title: "Relatório semanal",
    line: "Sabe o que o cliente mais pergunta antes de fechar.",
  },
] as const;

export function IaWhatsAppSection() {
  const reduce = useReducedMotion();

  function goForm() {
    try {
      sessionStorage.setItem(SEGMENT_PREFILL_KEY, "IA para WhatsApp");
    } catch {
      /* ignore */
    }
    window.location.hash = "#diagnosis";
  }

  return (
    <section
      id="ia-whatsapp"
      className="scroll-mt-24 border-b border-white/[0.05] bg-[#08080c] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Novo · Tecnologia
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Seu negócio atendendo 24h por dia, 7 dias por semana — sem contratar
            ninguém.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            A ZYRON implementa IA no seu WhatsApp Business que qualifica leads, responde
            dúvidas, agenda visitas e entrega orçamentos — enquanto você foca no que
            importa.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1411] p-4 shadow-[0_0_0_1px_rgb(37_99_255_/0.12)] sm:p-5"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgb(37_99_255_/0.12),transparent_55%)]"
              aria-hidden
            />
            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-emerald-200/70">
              Prévia de conversa (ilustrativa)
            </p>
            <ul className="mt-4 space-y-3">
              <li className="ml-auto max-w-[85%]">
                <div className="rounded-2xl rounded-tr-sm bg-[#1f2c27] px-3 py-2.5 text-sm leading-relaxed text-[#E8F7F0] ring-1 ring-white/[0.06]">
                  Olá! Quero um orçamento de esquadrias
                </div>
                <p className="mt-1 text-right font-mono text-[9px] text-emerald-200/50">
                  23:46
                </p>
              </li>
              <li className="mr-auto max-w-[90%]">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                  IA
                </div>
                <div className="mt-1 rounded-2xl rounded-tl-sm bg-[#0f1a16] px-3 py-2.5 text-sm leading-relaxed text-[#D9E5DF] ring-1 ring-white/[0.08]">
                  Aqui é a assistente da{" "}
                  <span className="font-medium text-foreground">[Empresa]</span>. Para
                  orçamento preciso: qual o tamanho aproximado da abertura a cobrir?
                </div>
                <p className="mt-1 font-mono text-[9px] text-emerald-200/45">23:46</p>
              </li>
              <li className="ml-auto max-w-[85%]">
                <div className="rounded-2xl rounded-tr-sm bg-[#1f2c27] px-3 py-2.5 text-sm text-[#E8F7F0] ring-1 ring-white/[0.06]">
                  São 3 janelas de 1,20 × 1,40 m
                </div>
                <p className="mt-1 text-right font-mono text-[9px] text-emerald-200/50">
                  23:47
                </p>
              </li>
              <li className="mr-auto max-w-[92%]">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                  IA
                </div>
                <div className="relative mt-1 rounded-2xl rounded-tl-sm bg-[#0f1a16] px-3 py-2.5 text-sm leading-relaxed text-[#D9E5DF] ring-1 ring-white/[0.08]">
                  {!reduce && (
                    <span className="absolute right-3 top-2 flex gap-1" aria-hidden>
                      <motion.span
                        className="inline-block size-1 rounded-full bg-emerald-400/80"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.span
                        className="inline-block size-1 rounded-full bg-emerald-400/80"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.15,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.span
                        className="inline-block size-1 rounded-full bg-emerald-400/80"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    </span>
                  )}
                  Perfeito — já encaminhei para o técnico. Orçamento em até 2 horas.
                  Quer receber também nosso catálogo de modelos?
                </div>
                <p className="mt-2 font-mono text-[9px] text-emerald-200/55">
                  Respondido em 8 segundos · 23:47
                </p>
              </li>
            </ul>
          </motion.div>

          <div>
            <motion.ul
              className="grid gap-4 sm:grid-cols-2"
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {benefits.map((b) => (
                <motion.li
                  key={b.title}
                  variants={fadeUp}
                  className={cn(
                    "rounded-2xl border border-white/[0.07] bg-[#121218]/90 p-5",
                    "shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
                  )}
                >
                  <b.icon
                    className="size-5 text-[#2563FF]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="mt-3 font-medium text-foreground">{b.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.line}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <InteractiveHoverButton
                type="button"
                className={cn(ctaDiagnosis, "w-full sm:w-auto")}
                onClick={goForm}
              >
                Quero IA no meu WhatsApp
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
