"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { HashLink } from "@/components/hash-link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  ctaDiagnosisHeroPrimary,
  ctaDiagnosisSecondary,
} from "@/lib/cta-styles";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion-variants";
import { AuroraText } from "@/registry/magicui/aurora-text";

import { HeroVisual } from "./hero-visual";

const heroTrust = [
  "Atendimento automatizado",
  "Mais leads convertidos",
  "Crescimento previsível",
  "Estrutura premium",
];

export function ZyronHero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="zyron-hero-heading"
      className="relative overflow-x-hidden border-b border-white/[0.05] py-16 sm:py-[96px] md:py-[128px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgb(37_99_255_/0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-center lg:gap-14 xl:gap-20">
          <motion.div
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={stagger}
            className="flex min-w-0 flex-col text-center lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]"
            >
              ZYRON · Growth &amp; automação · Brasil
            </motion.p>

            <motion.h1
              id="zyron-hero-heading"
              variants={fadeUp}
              className="font-heading mt-6 text-[1.55rem] font-semibold leading-[1.16] tracking-tight text-foreground sm:text-4xl sm:leading-[1.06] lg:text-[2.45rem] xl:text-[2.65rem]"
            >
              <span className="block text-balance sm:inline">
                Sua empresa já é boa.
              </span>{" "}
              <AuroraText className="block font-semibold text-balance sm:inline">
                O problema é estar perdendo crescimento todos os dias.
              </AuroraText>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              A ZYRON ajuda empresas a vender mais com tráfego pago, landing pages
              estratégicas e automações com IA no WhatsApp.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-6 flex max-w-xl flex-col gap-3 border-l-2 border-[#2563FF]/35 pl-4 text-left lg:mx-0 lg:pl-5"
            >
              <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                <span className="font-medium text-foreground/95">
                  Seu negócio é forte — mas o crescimento escapa sem estrutura
                  moderna.
                </span>{" "}
                Tráfego, conversão e automação no mesmo sistema — sem improviso.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <InteractiveHoverButton
                href="#diagnosis"
                className={ctaDiagnosisHeroPrimary}
              >
                Solicitar diagnóstico gratuito
              </InteractiveHoverButton>
              <InteractiveHoverButton
                href="#como-funciona"
                className={cn(
                  ctaDiagnosisSecondary,
                  "hidden md:inline-flex w-full sm:w-auto sm:min-w-[240px]",
                )}
              >
                Ver como funciona
              </InteractiveHoverButton>
              <HashLink
                href="#como-funciona"
                className="md:hidden py-1 text-center text-sm font-medium text-muted-foreground underline decoration-white/15 underline-offset-[6px] transition-colors hover:text-foreground"
              >
                Ver como funciona
              </HashLink>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:max-w-xl"
              aria-label="Por que falar com a ZYRON"
            >
              {heroTrust.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-left text-[13px] leading-snug text-[#B8BDC9] sm:text-sm"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-[#2563FF]/18 text-[#7EA8FF]">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="flex min-w-0 w-full flex-col items-stretch lg:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.06,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
          >
            <div className="w-full max-w-[560px] lg:mx-0 lg:max-w-none lg:justify-self-end">
              <HeroVisual />
            </div>
            <p className="mx-auto mt-8 max-w-md text-center font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
              Tráfego pago · landing · IA · WhatsApp · dados · performance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
