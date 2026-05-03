"use client";

import {
  BarChart2,
  CalendarCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { BorderBeam } from "@/registry/magicui/border-beam";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";
import { TypingAnimation } from "@/registry/magicui/typing-animation";
import { SEGMENT_PREFILL_KEY } from "@/lib/diagnosis-prefill";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";

import { Reveal } from "./reveal";

const chatMessages = [
  {
    type: "user" as const,
    text: "Oi! Quero agendar uma limpeza dental",
    time: "19:32",
  },
  {
    type: "ai" as const,
    text: "Olá! Aqui é a assistente da **[Clínica]** 😊 Você já é paciente nosso ou é a primeira consulta?",
    time: "19:32",
    responseTime: "Respondido em 4 segundos",
  },
  {
    type: "user" as const,
    text: "É minha primeira vez",
    time: "19:33",
  },
  {
    type: "ai" as const,
    text: "Perfeito! Temos horários disponíveis nesta semana. Você prefere manhã ou tarde? Aceitamos convênio Unimed e Bradesco.",
    time: "19:33",
    responseTime: "Respondido em 6 segundos",
  },
  {
    type: "user" as const,
    text: "Tarde, de preferência quinta ou sexta",
    time: "19:34",
  },
  {
    type: "ai" as const,
    text: "Agendado! Sexta às 15h com a Dra. Ana. Vou te mandar a confirmação e o endereço agora. 📍",
    time: "19:34",
    responseTime: "Respondido em 5 segundos · Consulta agendada ✓",
  },
];

const LAST_AI_TEXT = chatMessages[chatMessages.length - 1].text;

const features = [
  {
    icon: Zap,
    title: "Resposta em segundos",
    description:
      "Nunca perde um paciente por demora no primeiro contato, mesmo à meia-noite.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático",
    description:
      "Marca, confirma e reagenda consultas sem você precisar responder.",
  },
  {
    icon: ShieldCheck,
    title: "Filtra por convênio",
    description:
      "Já informa quais planos aceita e separa particular de convênio antes de chegar em você.",
  },
  {
    icon: BarChart2,
    title: "Relatório semanal",
    description:
      "Sabe quantos pacientes perdeu por falta de resposta rápida e quantos recuperou.",
  },
] as const;

function formatLine(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {bold[1]}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function TypingIndicator() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl bg-white/10 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-bounce rounded-full bg-white/50"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function IaWhatsAppSection() {
  const reduce = useReducedMotion();
  const chatRef = useRef<HTMLDivElement>(null);
  const chatInView = useInView(chatRef, { once: true, amount: 0.25 });
  /** Última mensagem: dot → TypingAnimation (só com movimento + na viewport). */
  const [finalPhase, setFinalPhase] = useState<"dot" | "type">("dot");

  useEffect(() => {
    if (reduce || !chatInView || finalPhase !== "dot") return;
    const t = window.setTimeout(() => setFinalPhase("type"), 1500);
    return () => window.clearTimeout(t);
  }, [chatInView, reduce, finalPhase]);

  function goForm() {
    try {
      sessionStorage.setItem(SEGMENT_PREFILL_KEY, "IA para WhatsApp");
    } catch {
      /* ignore */
    }
    window.location.hash = "#diagnosis";
  }

  const head = chatMessages.slice(0, -1);
  const showStaticLast = reduce || !chatInView;
  const showAnimatedLast = chatInView && !reduce;

  return (
    <section
      id="ia-whatsapp"
      className="scroll-mt-24 border-b border-white/[0.05] bg-[#08080c] py-[88px] md:py-[112px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              <span className="size-1.5 animate-pulse rounded-full bg-blue-400" />
              IA · WHATSAPP
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Clínicas e consultórios
            </span>
          </div>
          <h2 className="font-heading max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Seu negócio atendendo 24h por dia, 7 dias por semana, sem contratar
            ninguém.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            A ZYRON implementa IA no WhatsApp da sua clínica que agenda consultas,
            responde sobre convênios, confirma horários e qualifica pacientes
            enquanto você foca no atendimento.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <motion.div
            ref={chatRef}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1411] p-4 shadow-[0_0_0_1px_rgb(37_99_255_/0.12)] sm:p-5"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <BorderBeam duration={12} colorFrom="#0066FF" />
            <div className="relative z-[1]">
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-emerald-200/70">
                Prévia de conversa (ilustrativa)
              </p>
              <ul className="mt-4 space-y-3">
                {head.map((msg, idx) =>
                  msg.type === "user" ? (
                    <li key={idx} className="ml-auto max-w-[85%]">
                      <div className="rounded-2xl rounded-tr-sm bg-[#1f2c27] px-3 py-2.5 text-sm leading-relaxed text-[#E8F7F0] ring-1 ring-white/[0.06]">
                        {msg.text}
                      </div>
                      <p className="mt-1 text-right font-mono text-[9px] text-emerald-200/50">
                        {msg.time}
                      </p>
                    </li>
                  ) : (
                    <li key={idx} className="mr-auto max-w-[92%]">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                        IA
                      </div>
                      <div className="mt-1 rounded-2xl rounded-tl-sm bg-[#0f1a16] px-3 py-2.5 text-sm leading-relaxed text-[#D9E5DF] ring-1 ring-white/[0.08]">
                        {formatLine(msg.text)}
                      </div>
                      <p className="mt-1 font-mono text-[9px] text-emerald-200/45">
                        {msg.responseTime != null && (
                          <span className="text-emerald-200/55">
                            {msg.responseTime} ·{" "}
                          </span>
                        )}
                        {msg.time}
                      </p>
                    </li>
                  ),
                )}

                {showAnimatedLast && finalPhase === "dot" && (
                  <li className="mr-auto max-w-[92%]">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                      IA
                    </div>
                    <div className="mt-1">
                      <TypingIndicator />
                    </div>
                  </li>
                )}

                {showAnimatedLast && finalPhase === "type" && (
                  <li className="mr-auto max-w-[92%]">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                      IA
                    </div>
                    <div className="mt-1 rounded-2xl rounded-tl-sm bg-[#0f1a16] px-3 py-2.5 text-sm leading-relaxed text-[#D9E5DF] ring-1 ring-white/[0.08]">
                      <TypingAnimation
                        className="text-sm leading-relaxed text-[#D9E5DF]"
                        duration={30}
                        startOnView={false}
                      >
                        {LAST_AI_TEXT}
                      </TypingAnimation>
                    </div>
                    <p className="mt-2 font-mono text-[9px] text-emerald-200/55">
                      {chatMessages[chatMessages.length - 1].responseTime} ·{" "}
                      {chatMessages[chatMessages.length - 1].time}
                    </p>
                  </li>
                )}

                {showStaticLast && (
                  <li className="mr-auto max-w-[92%]">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563FF]/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-[#B8C9FF] ring-1 ring-[#2563FF]/30">
                      IA
                    </div>
                    <div className="mt-1 rounded-2xl rounded-tl-sm bg-[#0f1a16] px-3 py-2.5 text-sm leading-relaxed text-[#D9E5DF] ring-1 ring-white/[0.08]">
                      {formatLine(LAST_AI_TEXT)}
                    </div>
                    <p className="mt-2 font-mono text-[9px] text-emerald-200/55">
                      {chatMessages[chatMessages.length - 1].responseTime} ·{" "}
                      {chatMessages[chatMessages.length - 1].time}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.ul
              className="grid gap-4 sm:grid-cols-2"
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {features.map((b) => (
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
                    {b.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8 flex flex-col items-stretch sm:items-start">
              <ShimmerButton
                type="button"
                className="w-full min-h-[52px] md:w-auto"
                shimmerColor="#0066FF"
                background="#0052CC"
                onClick={goForm}
              >
                <span className="size-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                Quero IA no meu WhatsApp
              </ShimmerButton>
              <p className="mt-3 text-center text-xs text-white/30 sm:text-left">
                Implementação em até 7 dias · Sem troca de número · Funciona no
                WhatsApp Business atual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
