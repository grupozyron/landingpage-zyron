import { cn } from "@/lib/utils";

/**
 * CTAs com InteractiveHoverButton — família única:
 * primário = azul sólido (#2563FF), secundário = azul translúcido.
 */
const dotPrimary =
  "[&>span>span:first-child]:bg-white [&>span>span:first-child]:shadow-[0_0_8px_rgba(255,255,255,0.45)]";

/** Primário — ação principal (diagnóstico, enviar, etc.). */
export const ctaPrimary = cn(
  "h-12 min-h-[48px] rounded-full px-6 text-sm font-semibold text-white sm:px-8 sm:text-base",
  "border-[#2563FF]/70 bg-[#2563FF]",
  "shadow-[0_0_40px_-10px_rgb(37_99_255_/0.65)] ring-1 ring-white/15",
  "hover:border-[#2563FF] hover:bg-[#1d4ed8] hover:shadow-[0_0_48px_-8px_rgb(37_99_255_/0.72)]",
  dotPrimary,
);

/** Secundário — ação alternativa (WhatsApp, “ver mais”, etc.). */
export const ctaSecondary = cn(
  "h-12 min-h-[48px] rounded-full px-6 text-sm font-semibold text-[#F8F8F8] sm:px-7 sm:text-base",
  "border-[#2563FF]/45 bg-[#2563FF]/15",
  "shadow-[0_0_32px_-14px_rgb(37_99_255_/0.42)] ring-1 ring-[#2563FF]/35",
  "hover:border-[#2563FF]/65 hover:bg-[#2563FF]/25 hover:shadow-[0_0_40px_-12px_rgb(37_99_255_/0.55)]",
);

/** Header fixo — mais compacto. */
export const ctaNav = cn(
  ctaPrimary,
  "h-11 min-h-[44px] px-4 text-sm sm:px-5 md:px-7 md:text-[15px]",
  "shadow-[0_0_28px_-14px_rgb(37_99_255_/0.52)]",
);

/** Header — mesmo padrão do secundário do hero (azul translúcido). */
export const ctaNavSecondary = cn(
  ctaSecondary,
  "h-11 min-h-[44px] px-4 text-sm sm:px-5 md:px-6 md:text-[14px]",
  "shadow-[0_0_26px_-16px_rgb(37_99_255_/0.4)]",
);

/** Hero — dois botões na mesma linha (mobile incl.). */
export const ctaHeroPrimary = cn(
  ctaPrimary,
  "min-w-0 flex-1 px-4 text-xs sm:px-8 sm:text-base",
);

/** Secundário mais compacto que o primário — não divide 50/50 (evita “vazar” para o dashboard / próxima faixa). */
export const ctaHeroSecondary = cn(
  ctaSecondary,
  "min-w-0 flex-none shrink px-3 text-[11px] sm:px-5 sm:text-sm",
  "h-10 min-h-[40px] sm:h-11 sm:min-h-[44px]",
  "shadow-[0_0_22px_-16px_rgb(37_99_255_/0.36)]",
);

/** Formulário — largura total / centralizado em telas maiores. */
export const ctaForm = cn(ctaPrimary, "w-full sm:mx-auto sm:max-w-xs");

/** Seções — coluna estreita no mobile. */
export const ctaSection = cn(ctaPrimary, "w-full sm:w-auto");

/** Par primário + secundário em seções (ex.: CTA final, WhatsApp). */
export const ctaSectionSecondary = cn(ctaSecondary, "w-full sm:w-auto");

/** Menu mobile — CTA principal em largura total. */
export const ctaNavDrawerPrimary = cn(
  ctaPrimary,
  "h-11 min-h-[44px] w-full justify-center px-4 text-[14px]",
  "shadow-[0_0_28px_-12px_rgb(37_99_255_/0.5)]",
);

/** Barra fixa mobile (shell do pill — não é InteractiveHoverButton inteiro). */
export const mobileStickyCtaShell = cn(
  "border border-[#2563FF]/45 bg-[#2563FF]",
  "shadow-[0_12px_40px_-18px_rgb(37_99_255_/0.65)]",
);

/* --- Aliases legados (mesmo visual) --- */
export const ctaDiagnosis = ctaPrimary;
export const ctaDiagnosisNav = ctaNav;
export const ctaDiagnosisBlock = ctaForm;
export const ctaHeroPrimaryFilled = ctaHeroPrimary;
export const ctaHeroSecondaryFilled = ctaHeroSecondary;
