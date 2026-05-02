"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, TrendingUp } from "lucide-react";
import { useId } from "react";

const cubic = [0.25, 0.1, 0.25, 1] as const;

/** Semanas recentes — série plausível para funil B2B regional */
const LEADS_POR_SEMANA = [14, 15, 17, 16, 19, 22, 23, 26];

export function CaseStudyMetrics() {
  const reduce = useReducedMotion();
  const sparkId = useId().replace(/:/g, "");
  const max = Math.max(...LEADS_POR_SEMANA);

  return (
    <div className="flex h-full flex-col gap-5">
      <p
        className="rounded-xl border border-[#2563FF]/25 bg-[#2563FF]/[0.06] px-3.5 py-2.5 text-[11px] leading-relaxed text-muted-foreground"
        role="note"
      >
        <span className="font-medium text-[#2563FF]/95">Ilustração educativa:</span>{" "}
        os números abaixo são um{" "}
        <span className="text-foreground/90">cenário modelo</span> de painel —
        não são garantia de resultado nem métricas auditadas de um cliente
        específico.
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A8A8B3]">
        Painel do funil · modelo de referência
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Card — volume */}
        <motion.div
          className="flex flex-col rounded-xl border border-white/[0.07] bg-[#0A0A0A]/90 p-4 ring-1 ring-white/[0.04]"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: cubic }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-[#A8A8B3]">
              <TrendingUp className="size-4 shrink-0 text-[#2563FF]" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] leading-tight">
                Leads qualificados
                <span className="mt-0.5 block font-sans text-[9px] font-normal normal-case tracking-normal text-[#A8A8B3]/80">
                  últimas 8 semanas
                </span>
              </span>
            </div>
            <span className="rounded-md bg-[#1C1C1C] px-2 py-1 font-mono text-[10px] text-[#2563FF] ring-1 ring-[#2563FF]/20">
              +42% vs. Q anterior
            </span>
          </div>

          <div className="mt-4 flex flex-1 flex-col justify-end">
            <div className="flex h-[88px] items-end gap-1 border-b border-white/[0.06] pb-px pl-0.5">
              {LEADS_POR_SEMANA.map((v, i) => {
                const h = Math.round((v / max) * 100);
                return (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[#2563FF]/25 to-[#2563FF]/85"
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.55,
                      delay: reduce ? 0 : 0.08 + i * 0.05,
                      ease: cubic,
                    }}
                    style={{ minHeight: 4 }}
                  />
                );
              })}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[9px] text-[#A8A8B3]/75">
              <span>S1</span>
              <span>S8</span>
            </div>
            <p className="mt-3 border-t border-white/[0.05] pt-3 font-mono text-[11px] text-[#F8F8F8]">
              <span className="text-[#A8A8B3]">média rolling · </span>
              {Math.round(
                LEADS_POR_SEMANA.reduce((a, b) => a + b, 0) /
                  LEADS_POR_SEMANA.length,
              )}{" "}
              <span className="text-[#A8A8B3]">leads / sem.</span>
            </p>
          </div>
        </motion.div>

        {/* Card — economia */}
        <motion.div
          className="flex flex-col rounded-xl border border-white/[0.07] bg-[#0A0A0A]/90 p-4 ring-1 ring-white/[0.04]"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06, ease: cubic }}
        >
          <div className="flex items-center gap-2 text-[#A8A8B3]">
            <ArrowDownRight
              className="size-4 shrink-0 text-emerald-400/90"
              aria-hidden
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] leading-tight">
              CPL &amp; conversão
              <span className="mt-0.5 block font-sans text-[9px] font-normal normal-case tracking-normal text-[#A8A8B3]/80">
                meta vs. realizado (modelo)
              </span>
            </span>
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#A8A8B3]">
                CPL médio pago
              </p>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs text-[#A8A8B3] line-through decoration-white/15">
                  R$ 94
                </span>
                <span className="text-xl font-semibold tabular-nums tracking-tight text-[#F8F8F8]">
                  R$ 66
                </span>
                <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  −30%
                </span>
              </div>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#A8A8B3]">
                Conv. sessão → lead
              </p>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs text-[#A8A8B3] line-through decoration-white/15">
                  1,9%
                </span>
                <span className="text-xl font-semibold tabular-nums tracking-tight text-[#F8F8F8]">
                  3,3%
                </span>
                <span className="rounded bg-[#2563FF]/15 px-2 py-0.5 font-mono text-[10px] text-[#2563FF]">
                  +1,4 pp
                </span>
              </div>
            </div>
          </div>

          {/* Sparkline decorativo */}
          <svg
            className="mt-4 h-10 w-full opacity-90"
            viewBox="0 0 120 32"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id={`spark-${sparkId}`} x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#2563FF" stopOpacity="0.5" />
                <stop offset="1" stopColor="#B8BDC9" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <path
              d="M 0 26 L 18 22 L 36 24 L 54 16 L 72 18 L 90 8 L 108 6 L 120 4"
              stroke={`url(#spark-${sparkId})`}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <p className="font-mono text-[10px] leading-relaxed text-muted-foreground/70">
        Em projetos reais, o ritmo e os KPIs variam por segmento — o importante é
        ter cadência visível e decisão por dado, não por impressão.
      </p>
    </div>
  );
}
