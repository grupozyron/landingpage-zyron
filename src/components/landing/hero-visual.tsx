"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

import { AccentBorderBeams } from "./beam-highlight";

import { AnimatedCounter } from "./animated-counter";

const cubic = [0.25, 0.1, 0.25, 1] as const;

/** Curva de performance — coordenadas sob altura do gráfico */
const LINE_D =
  "M 8 102 C 48 98 72 88 104 78 C 136 68 168 52 200 42 C 232 32 268 22 304 14";

export function HeroVisual() {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  const gradLine = `hx-line-${uid}`;
  const gradFill = `hx-fill-${uid}`;
  const gradGlow = `hx-glow-${uid}`;
  const filterGlow = `hx-blur-${uid}`;

  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden sm:overflow-visible">
      {/* Orbes de ambiente — contidos no mobile para evitar scroll horizontal */}
      <motion.div
        className="pointer-events-none absolute -left-[8%] top-[8%] size-[200px] rounded-full bg-[#2563FF]/12 blur-[56px] sm:-left-[18%] sm:size-[280px] sm:bg-[#2563FF]/15 sm:blur-[80px]"
        animate={
          reduce
            ? undefined
            : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-[6%] bottom-[5%] size-[160px] rounded-full bg-[#2563FF]/10 blur-[48px] sm:-right-[12%] sm:size-[220px] sm:bg-[#2563FF]/12 sm:blur-[70px]"
        animate={
          reduce
            ? undefined
            : { opacity: [0.28, 0.45, 0.28], scale: [1, 1.05, 1] }
        }
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        aria-hidden
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#1C1C1C]/78 shadow-[0_0_0_1px_rgb(255_255_255_/0.07),0_32px_120px_-48px_rgb(0_0_0_/0.9),0_0_80px_-20px_rgb(37_99_255_/0.25)] backdrop-blur-md"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: cubic }}
      >
        {/* Magic UI–style border beam — destaca o painel sem competir com o gráfico */}
        <AccentBorderBeams />
        {/* Brilho superior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563FF]/45 to-transparent" />

        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-[120%] bg-gradient-to-b from-[#2563FF]/[0.07] to-transparent"
            aria-hidden
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Scan line */}
        {!reduce && (
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
            aria-hidden
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-[#2563FF]/[0.06] to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}

        {/* Grade — movimento subtil para sensação “vivo” */}
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

        <div className="relative z-[1] p-4 sm:p-6">
          {/* Header do painel */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A8A8B3]">
                receita · painel
              </p>
              <p className="font-heading mt-2 text-lg font-semibold tracking-tight text-[#F8F8F8]">
                Crescimento projetável
              </p>
              <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-[#A8A8B3]">
                Pipeline ao vivo · CPL · conversão · experimentos
              </p>
            </div>
            <motion.div
              className="flex items-center gap-2 rounded-lg bg-[#0A0A0A]/80 px-3 py-2 ring-1 ring-[#2563FF]/30"
              animate={
                reduce ? undefined : { boxShadow: ["0 0 0 0 rgb(79 124 255 / 0)", "0 0 24px 0 rgb(79 124 255 / 0.15)", "0 0 0 0 rgb(79 124 255 / 0)"] }
              }
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/40" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] font-medium text-[#2563FF]">
                AO VIVO
              </span>
            </motion.div>
          </div>

          <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            {/* Gráfico principal */}
            <div className="relative rounded-xl bg-[#0A0A0A]/50 p-3 ring-1 ring-white/[0.05]">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="font-mono text-[10px] text-[#A8A8B3]">
                  leads qualificados / semana
                </span>
                <span className="font-mono text-[10px] text-[#2563FF]">
                  tendência ↑
                </span>
              </div>
              <svg
                className="aspect-[16/9] w-full overflow-visible"
                viewBox="0 0 320 120"
                fill="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id={gradFill} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563FF" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2563FF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id={gradLine} x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#2563FF" stopOpacity="0.2" />
                    <stop offset="0.5" stopColor="#2563FF" stopOpacity="1" />
                    <stop offset="1" stopColor="#B8BDC9" stopOpacity="0.75" />
                  </linearGradient>
                  <filter id={filterGlow} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <radialGradient id={gradGlow} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2563FF" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id={`${uid}-line-fb`} x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#2563FF" />
                    <stop offset="1" stopColor="#B8BDC9" />
                  </linearGradient>
                </defs>
                {/* Área sob a curva */}
                <path
                  d={`${LINE_D} L 312 120 L 8 120 Z`}
                  fill={`url(#${gradFill})`}
                  opacity="0.9"
                />
                {!reduce && (
                  <motion.path
                    d={LINE_D}
                    stroke={`url(#${gradLine})`}
                    strokeWidth="2.25"
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
                    stroke={`url(#${uid}-line-fb)`}
                    strokeWidth="2.25"
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
                      opacity: [0.82, 1, 0.82],
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
                    <circle
                      cx="304"
                      cy="14"
                      r="5"
                      fill={`url(#${gradGlow})`}
                    />
                  </motion.g>
                )}
              </svg>
              {/* Spark row */}
              <div className="mt-3 flex h-9 items-end gap-1 px-1">
                {[40, 52, 48, 64, 58, 72, 68, 88, 82, 94].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-[#2563FF]/25 to-[#2563FF]/85 shadow-[0_0_12px_-4px_rgb(37_99_255_/0.45)]"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={
                      reduce
                        ? { height: `${h}%`, opacity: 1 }
                        : {
                            height: `${h}%`,
                            opacity: 1,
                            scaleY: [1, 1.06, 1],
                          }
                    }
                    style={{ maxHeight: "100%" }}
                    transition={{
                      height: {
                        duration: 0.55,
                        delay: 0.35 + i * 0.035,
                        ease: cubic,
                      },
                      opacity: {
                        duration: 0.45,
                        delay: 0.35 + i * 0.035,
                        ease: cubic,
                      },
                      scaleY: {
                        duration: 2.4 + i * 0.08,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2 + i * 0.07,
                      },
                    }}
                  />
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Taxa de conversão",
                  child: (
                    <motion.span
                      className="text-2xl font-semibold tabular-nums tracking-tight text-[#F8F8F8]"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.4 }}
                    >
                      4,8%
                    </motion.span>
                  ),
                  delta: "+19% vs. linha base",
                  deltaColor: "text-[#2563FF]",
                },
                {
                  label: "CPL médio",
                  child: (
                    <span className="text-2xl font-semibold tabular-nums tracking-tight text-[#F8F8F8]">
                      <span className="text-[#A8A8B3]">−</span>
                      <AnimatedCounter end={28} suffix="%" />
                    </span>
                  ),
                  delta: "eficiência",
                  deltaColor: "text-[#A8A8B3]",
                },
                {
                  label: "Cadência de testes",
                  child: (
                    <span className="text-2xl font-semibold tabular-nums tracking-tight text-[#F8F8F8]">
                      <AnimatedCounter end={12} suffix="" />{" "}
                      <span className="text-base font-normal text-[#A8A8B3]">
                        /mês
                      </span>
                    </span>
                  ),
                  delta: "hipóteses em produção",
                  deltaColor: "text-[#A8A8B3]",
                },
              ].map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="rounded-xl bg-[#1C1C1C]/95 p-4 ring-1 ring-white/[0.06]"
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease: cubic }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A8A8B3]">
                    {kpi.label}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    {kpi.child}
                    <span
                      className={`font-mono text-[10px] ${kpi.deltaColor}`}
                    >
                      {kpi.delta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Faixa inferior */}
          <motion.div
            className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/[0.05] bg-[#0A0A0A]/40 px-3 py-2.5"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.45 }}
          >
            <div className="flex flex-wrap gap-3 font-mono text-[10px] text-[#A8A8B3]">
              <span className="rounded-md bg-[#1C1C1C] px-2 py-1 text-[#F8F8F8] ring-1 ring-white/[0.06]">
                aquisição
              </span>
              <span>→</span>
              <span className="text-[#2563FF]/90">conversão arquitetada</span>
              <span>→</span>
              <span className="text-[#2563FF]/90">ciclo de performance</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Badge flutuante */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute -right-2 top-[22%] hidden max-w-[160px] rounded-lg border border-white/[0.08] bg-[#1C1C1C]/95 px-3 py-2 shadow-xl backdrop-blur sm:block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <p className="font-mono text-[9px] uppercase tracking-wider text-[#A8A8B3]">
            sistema
          </p>
          <p className="mt-1 text-xs font-medium text-[#F8F8F8]">
            Receita instrumentada — não suposição.
          </p>
        </motion.div>
      )}
    </div>
  );
}
