"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AuroraText } from "@/registry/magicui/aurora-text";
import { ctaHeroPrimary, ctaHeroSecondary } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

import { HeroVisual } from "./hero-visual";

const ease = [0.25, 0.1, 0.25, 1] as const;

/** Gradiente Aurora — paleta ZYRON (azul elétrico). */
const ZYRON_AURORA_COLORS = [
  "#0066FF",
  "#00AAFF",
  "#0040CC",
  "#38BDF8",
] as const;

/** Pilares abaixo do painel — alinhados ao tom premium do dashboard. */
const METHODOLOGY_PILLARS = [
  "Tráfego",
  "Landing",
  "WhatsApp",
  "Dados",
  "Método",
] as const;

const microProofs = [
  "Aceleramos 4 novos clientes por mês, com retorno em até 2 dias úteis",
  "Tráfego, landing e automação no mesmo método",
  "Menos dependência só de indicação",
];

function Reveal({
  children,
  delayIndex,
  className,
}: {
  children: React.ReactNode;
  delayIndex: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delayIndex * 0.1,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ZyronHero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="zyron-hero-heading"
      className="relative overflow-hidden border-b border-white/[0.05] bg-[#090909] py-16 sm:py-[88px] md:py-[112px]"
    >
      {/* Profundidade — brilho atrás do dashboard */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-[min(600px,100vw)] rounded-full bg-[#0066FF] opacity-[0.07] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_25%,rgb(0_102_255_/0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[9fr_11fr] lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col text-center lg:text-left">
            <Reveal delayIndex={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                <span className="relative flex size-1.5 shrink-0">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                45+ empresas atendidas · R$ 2.4M em mídia gerenciada
              </div>
            </Reveal>

            <Reveal delayIndex={1}>
              <h1
                id="zyron-hero-heading"
                className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                Sua empresa já é boa.{" "}
                <br className="hidden md:block" />
                <AuroraText
                  className="font-bold"
                  colors={ZYRON_AURORA_COLORS}
                >
                  Falta crescer como marca grande.
                </AuroraText>
              </h1>
            </Reveal>

            <Reveal delayIndex={2}>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/55 md:text-lg lg:mx-0">
                A ZYRON constrói o sistema de aquisição que sua empresa precisa para
                parar de depender de indicação e começar a crescer com previsibilidade,
                sem improvisação.
              </p>
            </Reveal>

            <Reveal delayIndex={3}>
              <ul className="mx-auto mt-5 max-w-md space-y-2 text-left lg:mx-0">
                {microProofs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/50"
                  >
                    <span className="mt-0.5 shrink-0 text-emerald-400" aria-hidden>
                      <Check className="size-4" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayIndex={4}>
              <div className="mx-auto mt-6 flex w-full min-w-0 max-w-full flex-row flex-wrap gap-2 sm:max-w-none sm:gap-3 lg:mx-0">
                <InteractiveHoverButton
                  href="#diagnosis"
                  className={ctaHeroPrimary}
                >
                  Solicitar diagnóstico gratuito
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  href="#como-funciona"
                  className={ctaHeroSecondary}
                >
                  Ver como funciona
                </InteractiveHoverButton>
              </div>
            </Reveal>
          </div>

          <motion.div
            className="relative z-[1] flex min-w-0 w-full flex-col items-stretch lg:items-end"
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="w-full max-w-[560px] lg:max-w-none">
              <HeroVisual />
            </div>
            <nav
              className="mx-auto mt-5 w-full max-w-[560px] self-stretch lg:max-w-none"
              aria-label="Pilares do método"
            >
              <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {METHODOLOGY_PILLARS.map((label) => (
                  <li key={label}>
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]",
                        "border-white/[0.1] bg-white/[0.035] text-white/50 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.05)]",
                        "transition-[border-color,background-color,color,box-shadow] duration-200",
                        "hover:border-[#0066FF]/40 hover:bg-[#0066FF]/[0.08] hover:text-white/80",
                        "hover:shadow-[0_0_20px_-12px_rgb(0_102_255_/0.35)]",
                      )}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
