import { cn } from "@/lib/utils";

/**
 * CTAs “diagnóstico” (InteractiveHoverButton): pill, glow Electric Blue (#2563FF).
 */
export const ctaDiagnosis = cn(
  "h-12 min-h-[48px] rounded-full px-8 text-base font-semibold",
  "shadow-[0_0_32px_-12px_rgb(37_99_255_/0.5)]",
);

/** Barra superior — compacto · min 44px toque (WCAG / mobile). */
export const ctaDiagnosisNav = cn(
  "h-11 min-h-[44px] rounded-full px-4 text-sm font-semibold sm:px-5",
  "shadow-[0_0_28px_-14px_rgb(37_99_255_/0.45)]",
  "md:h-11 md:min-h-[44px] md:px-7 md:text-[15px]",
);

/** Hero: primário em largura total no mobile. */
export const ctaDiagnosisHeroPrimary = cn(
  ctaDiagnosis,
  "w-full sm:w-auto sm:min-w-[280px]",
);

/** Secundário: glow mais suave. */
export const ctaDiagnosisSecondary = cn(
  ctaDiagnosis,
  "shadow-[0_0_24px_-16px_rgb(37_99_255_/0.3)]",
);

/** Formulário / barra fixa. */
export const ctaDiagnosisBlock = cn(
  ctaDiagnosis,
  "w-full sm:mx-auto sm:max-w-xs",
);
