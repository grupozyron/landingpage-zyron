"use client";

import { ZYRON_SOCIAL_PROOF } from "@/lib/marketing-metrics";
import { useCountUp } from "@/hooks/use-count-up";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

function formatCurrencyBrl(n: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);
}

/** Linha de prova social numérica — contadores ao entrar no viewport (valores em marketing-metrics). */
export function HeroSocialProof({ className }: { className?: string }) {
  const { ref, inView } = useInViewOnce<HTMLParagraphElement>();
  const clients = useCountUp(ZYRON_SOCIAL_PROOF.clientsHelped, inView);
  const states = useCountUp(ZYRON_SOCIAL_PROOF.states, inView);
  const mediaLabel = formatCurrencyBrl(ZYRON_SOCIAL_PROOF.managedMediaBrl);

  return (
    <p
      ref={ref}
      className={cn(
        "mt-8 text-[13px] leading-snug text-muted-foreground sm:text-sm",
        className,
      )}
    >
      <span className="text-balance">
        + de <strong className="font-semibold text-foreground">{clients}</strong>{" "}
        empresas atendidas ·{" "}
        <strong className="font-semibold text-foreground">{states}</strong> estados ·{" "}
        <strong className="font-semibold text-foreground">{mediaLabel}</strong> em mídia
        gerenciada (aprox.)
      </span>
    </p>
  );
}
