"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

import { useCountUp } from "@/hooks/use-count-up";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

import { AccentBorderBeams } from "./beam-highlight";

const cubic = [0.25, 0.1, 0.25, 1] as const;

/** Valores modelo ilustrativo — fallback quando não há dados reais plugados */
const LEADS_POR_SEMANA = 19;
const TAXA_CONVERSAO_TENTHS = 48; // 4.8%
const CPL_MEDIO = 94;
const TESTES_POR_MES = 3;
const VARIACAO_LEADS = "+42%";
const EFICIENCIA_CPL = "-30%";

const ELECTRIC = "#0066FF";

const badgeDelta = cn(
  "inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400",
);

const LINE_D =
  "M 8 102 C 48 98 72 88 104 78 C 136 68 168 52 200 42 C 232 32 268 22 304 14";

/** Preenche o vazio visual sob o gráfico — leitura estratégica (modelo). */
function HeroFunnelFocusStrip() {
  const lines = [
    "Duplicar criativo vencedor · pausar público sem resposta",
    "Prova social e CTA acima da dobra na landing",
    "SLA de retorno no WhatsApp medido por sprint",
  ];
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center rounded-lg border border-white/[0.06] bg-[#0A0A0A]/55 p-2.5 ring-1 ring-white/[0.04]">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
        Próximos ajustes no funil
      </p>
      <ul className="mt-2 space-y-1.5">
        {lines.map((line) => (
          <li
            key={line}
            className="flex gap-2 text-[11px] leading-snug text-white/55"
          >
            <span className="mt-0.5 shrink-0 font-mono text-[10px] text-[#0066FF]">
              ▸
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroDashboardKpis() {
  const reduce = useReducedMotion();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const active = reduce ? true : inView;

  const leads = useCountUp(LEADS_POR_SEMANA, active);
  const pctTenths = useCountUp(TAXA_CONVERSAO_TENTHS, active);
  const cpl = useCountUp(CPL_MEDIO, active);
  const testes = useCountUp(TESTES_POR_MES, active);
  const pctStr = (pctTenths / 10).toFixed(1);

  const cell = cn(
    "rounded-lg bg-[#1C1C1C]/95 p-3 ring-1 ring-white/[0.06]",
    "transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:ring-[#0066FF]/35",
  );

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className={cell}>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
            Leads qualificados / semana
          </p>
          <p className="font-heading text-2xl font-bold tabular-nums tracking-tight text-white sm:text-3xl">
            {leads}
          </p>
          <p className={cn("mt-1.5", badgeDelta)}>{VARIACAO_LEADS} vs. período anterior</p>
        </div>
        <div className={cell}>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
            Taxa de conversão
          </p>
          <p className="font-heading text-2xl font-bold tabular-nums tracking-tight text-white sm:text-3xl">
            {pctStr}%
          </p>
          <p className={cn("mt-1.5", badgeDelta)}>vs. linha base</p>
        </div>
        <div className={cell}>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
            CPL médio
          </p>
          <p className="font-heading text-2xl font-bold tabular-nums tracking-tight text-white sm:text-3xl">
            R$ {cpl}
          </p>
          <p className={cn("mt-1.5", badgeDelta)}>
            {EFICIENCIA_CPL} eficiência
          </p>
        </div>
        <div className={cell}>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
            Cadência de testes
          </p>
          <p className="font-heading text-2xl font-bold tabular-nums tracking-tight text-white sm:text-3xl">
            {testes}
            <span className="text-base font-semibold text-white/45 sm:text-lg">/mês</span>
          </p>
          <p
            className={cn(
              "mt-1.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs font-medium text-white/45",
            )}
          >
            hipóteses ativas
          </p>
        </div>
      </div>

      {/* Ritmo no fluxo — não sobrepõe os cartões (antes era tooltip absoluto). */}
      <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0A]/55 px-2.5 py-2 sm:px-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Ritmo
        </p>
        <p className="mt-1 text-[13px] font-medium leading-snug text-foreground sm:text-sm">
          Leitura semanal — o que ajustar na próxima sprint.
        </p>
      </div>

      <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">
        Painel modelo — números ilustrativos. Métricas reais apresentadas na conversa
        comercial.
      </p>
    </div>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  const gradFill = `hx-fill-${uid}`;
  const filterGlow = `hx-blur-${uid}`;

  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden sm:overflow-visible">
      <motion.div
        className="pointer-events-none absolute -left-[8%] top-[8%] size-[200px] rounded-full bg-[#0066FF]/12 blur-[56px] sm:-left-[18%] sm:size-[280px] sm:bg-[#0066FF]/15 sm:blur-[80px]"
        animate={
          reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-[6%] bottom-[5%] size-[160px] rounded-full bg-[#0066FF]/10 blur-[48px] sm:-right-[12%] sm:size-[220px] sm:bg-[#0066FF]/12 sm:blur-[70px]"
        animate={
          reduce ? undefined : { opacity: [0.28, 0.45, 0.28], scale: [1, 1.05, 1] }
        }
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50 backdrop-blur-sm">
        <AccentBorderBeams />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-[120%] bg-gradient-to-b from-[#0066FF]/[0.07] to-transparent"
            aria-hidden
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {!reduce && (
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
            aria-hidden
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-[#0066FF]/[0.06] to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}

        {!reduce ? (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.42]"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
            `,
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to bottom, black 45%, transparent 100%)",
            }}
            aria-hidden
            animate={{
              backgroundPosition: ["0px 0px", "24px 24px", "0px 0px"],
              opacity: [0.38, 0.48, 0.38],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ) : (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.45]"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
            `,
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
            aria-hidden
          />
        )}

        <div className="relative z-[1] flex flex-col gap-0 p-3 sm:p-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] pb-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A8A8B3]">
                Painel de referência
              </p>
              <p className="font-heading mt-1 text-base font-semibold tracking-tight text-[#F8F8F8] sm:text-lg">
                Funil em evolução
              </p>
              <p className="mt-0.5 max-w-[280px] text-[11px] leading-snug text-[#A8A8B3] sm:text-xs">
                Visão esquemática — valores abaixo são modelo até plugarmos os seus dados.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0A0A0A]/80 px-2.5 py-1.5 ring-1 ring-[#0066FF]/30">
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgb(52_211_153_/0.35)]" />
              <span
                className="font-mono text-[11px] font-medium"
                style={{ color: ELECTRIC }}
              >
                operação guiada
              </span>
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="flex min-h-0 flex-col gap-2 lg:min-h-[280px]">
              <div className="relative shrink-0 rounded-lg bg-[#0A0A0A]/50 p-2 ring-1 ring-white/[0.05] sm:p-2.5">
              <div className="mb-1.5 flex items-center justify-between px-0.5">
                <span className="font-mono text-[10px] text-[#A8A8B3]">
                  Direção do funil
                </span>
                <span className="font-mono text-[10px]" style={{ color: ELECTRIC }}>
                  progressão
                </span>
              </div>
              <svg
                className="aspect-[16/9] max-h-[132px] w-full overflow-visible sm:max-h-[176px]"
                viewBox="0 0 320 120"
                fill="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id={gradFill} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ELECTRIC} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={ELECTRIC} stopOpacity="0" />
                  </linearGradient>
                  <filter id={filterGlow} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={`${LINE_D} L 312 120 L 8 120 Z`}
                  fill={`url(#${gradFill})`}
                  opacity="0.9"
                />
                {!reduce && (
                  <motion.path
                    d={LINE_D}
                    stroke={ELECTRIC}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    filter={`url(#${filterGlow})`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: cubic, delay: 0.15 }}
                  />
                )}
                {reduce && (
                  <path
                    d={LINE_D}
                    stroke={ELECTRIC}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                )}
                {!reduce && (
                  <motion.g
                    style={{ transformOrigin: "304px 14px", transformBox: "fill-box" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: [0.88, 1, 0.88],
                    }}
                    transition={{
                      scale: { delay: 1.05, duration: 0.4, ease: cubic },
                      opacity: {
                        delay: 1.55,
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <circle cx="304" cy="14" r="8" fill={ELECTRIC} opacity="0.2" />
                    <circle cx="304" cy="14" r="4" fill={ELECTRIC} />
                  </motion.g>
                )}
                {reduce && (
                  <g>
                    <circle cx="304" cy="14" r="8" fill={ELECTRIC} opacity="0.2" />
                    <circle cx="304" cy="14" r="4" fill={ELECTRIC} />
                  </g>
                )}
              </svg>
              <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#0A0A0A] ring-1 ring-white/[0.06]">
                {!reduce ? (
                  <motion.div
                    className="absolute inset-y-0 w-2/5 rounded-full bg-gradient-to-r from-[#0066FF]/15 via-[#0066FF] to-[#0066FF]/15 opacity-90"
                    animate={{ left: ["-30%", "100%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-[#0066FF]/25 via-[#0066FF]/55 to-[#0066FF]/25 opacity-80" />
                )}
              </div>
              </div>

              <HeroFunnelFocusStrip />
            </div>

            <HeroDashboardKpis />
          </div>

          <motion.div
            className="mt-3 w-full rounded-lg border border-white/[0.08] bg-gradient-to-br from-[#0A0A0A]/95 via-[#101018]/98 to-[#0A0A0A]/95 px-3 py-2.5 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)] sm:px-3.5 sm:py-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-left">
              Fluxo do método
            </p>
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-1.5 sm:gap-y-1.5 md:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                <span className="rounded-md bg-[#1C1C1C] px-2.5 py-1.5 font-mono text-[10px] font-semibold text-[#F8F8F8] ring-1 ring-white/[0.08] sm:text-[11px]">
                  aquisição
                </span>
                <span className="font-mono text-xs text-[#0066FF]/80 sm:text-sm" aria-hidden>
                  →
                </span>
                <span className="rounded-md px-2 py-1.5 font-mono text-[10px] font-medium text-[#93B4FF] sm:text-[11px]">
                  conversão arquitetada
                </span>
                <span className="font-mono text-xs text-[#0066FF]/80 sm:text-sm" aria-hidden>
                  →
                </span>
                <span className="rounded-md px-2 py-1.5 font-mono text-[10px] font-medium text-[#93B4FF] sm:text-[11px]">
                  ciclo de melhoria
                </span>
              </div>
            </div>
          </motion.div>

          <div className="mt-2 border-t border-white/5 pt-2.5">
            <p className="text-[10px] leading-relaxed text-white/25">
              Evidência sob autorização: métricas e materiais de clientes só quando há
              permissão por escrito — na conversa comercial a ZYRON mostra o que for
              pertinente ao seu caso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
