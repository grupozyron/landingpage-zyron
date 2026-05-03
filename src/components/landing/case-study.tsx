import Link from "next/link";

import { ExternalLink, Sparkles, TrendingDown } from "lucide-react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaSection } from "@/lib/cta-styles";
import { ELUME_LANDING_DEMO_URL } from "@/lib/site-config";

import { AuroraText } from "@/registry/magicui/aurora-text";

import { BeamHighlight } from "./beam-highlight";
import { Reveal } from "./reveal";

const OUTCOME_CHIPS = [
  "Marca alinhada ao ticket",
  "Landing com intenção comercial",
  "Ritmo de melhoria contínua",
] as const;

function ElumeDemoPreview({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Abre a página de demonstração do projeto Elume em nova aba"
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c12] shadow-[0_24px_80px_-24px_rgb(0_0_0_/0.85)] ring-1 ring-white/[0.04] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#2563FF]/35 hover:shadow-[0_28px_90px_-20px_rgb(37_99_255_/0.22)]"
    >
      <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] bg-[#14141c] px-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/[0.12]" />
          <span className="size-2.5 rounded-full bg-white/[0.08]" />
          <span className="size-2.5 rounded-full bg-white/[0.08]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-black/35 px-2.5 py-1 text-center font-mono text-[10px] text-white/40">
          elume landing (demo)
        </span>
      </div>

      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#18181f] via-[#101018] to-[#08080c] p-4 sm:p-5">
        <div className="pointer-events-none space-y-3">
          <div className="h-2.5 w-[42%] rounded-full bg-white/[0.12]" />
          <div className="h-2 w-[72%] rounded-full bg-white/[0.06]" />
          <div className="mt-5 flex gap-2">
            <div className="h-24 flex-1 rounded-lg bg-white/[0.05] ring-1 ring-white/[0.06]" />
            <div className="hidden w-[38%] flex-col gap-2 sm:flex">
              <div className="h-8 rounded-md bg-[#2563FF]/20 ring-1 ring-[#2563FF]/30" />
              <div className="h-2 rounded bg-white/[0.06]" />
              <div className="h-2 rounded bg-white/[0.05]" />
              <div className="h-2 w-4/5 rounded bg-white/[0.05]" />
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-7 flex-1 rounded-md bg-white/[0.04]" />
            <div className="h-7 w-20 rounded-md bg-[#2563FF]/25 ring-1 ring-[#2563FF]/40" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#2563FF]/40 group-hover:text-white/80">
            Preview ilustrativo
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2563FF] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#2563FF]/25 transition-transform duration-300 group-hover:scale-[1.02]">
            Abrir demonstração ao vivo
            <ExternalLink className="size-3.5 opacity-90" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudy() {
  return (
    <section
      id="case"
      className="scroll-mt-24 border-b border-white/[0.05] py-[96px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Evidência
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Case real: <AuroraText className="font-semibold">Elume</AuroraText>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-foreground/90 sm:text-base">
            Da dependência de indicação para um funil digital alinhado ao ticket. Página
            com intenção comercial, marca consistente e ritmo de melhoria contínua.
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Empresa sólida com anos de mercado, presa ao crescimento por indicação. Com a
            ZYRON, iniciou landing premium, presença digital profissional e estrutura para
            atrair clientes com critério.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <BeamHighlight
            variant="accent"
            className="mt-12 rounded-2xl bg-[#1C1C1C] shadow-[0_0_0_1px_rgb(255_255_255_/0.06)] transition-shadow duration-300 hover:shadow-[0_0_48px_-16px_rgb(37_99_255_/0.18)]"
            innerClassName="grid gap-10 p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:items-start lg:gap-12"
          >
            <div className="min-w-0 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Elume
                </h3>
                <span className="rounded-full bg-[#1C1C1C] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#2563FF] ring-1 ring-[#2563FF]/25">
                  Esquadrias premium
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {OUTCOME_CHIPS.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium leading-none text-white/75 ring-1 ring-white/[0.04]"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4 ring-1 ring-amber-500/10">
                  <div className="flex items-center gap-2 text-amber-200/90">
                    <TrendingDown className="size-4 shrink-0" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">Antes</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Crescimento preso à indicação; digital sem conversão proporcional ao
                    nível do negócio.
                  </p>
                </div>
                <div className="rounded-xl border border-[#2563FF]/30 bg-[#2563FF]/[0.07] p-4 ring-1 ring-[#2563FF]/15">
                  <div className="flex items-center gap-2 text-[#7eb0ff]">
                    <Sparkles className="size-4 shrink-0" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">Com a ZYRON</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Base para atrair e converter com critério: presença moderna, landing
                    focada em resultado e disciplina de melhoria contínua.
                  </p>
                </div>
              </div>

              <p className="border-t border-white/[0.06] pt-6">
                <Link
                  href={ELUME_LANDING_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-[#2563FF] transition-colors hover:text-[#5A8AFF]"
                  title="Abre a página de demonstração do projeto Elume em nova aba"
                >
                  Ver demonstração da landing (Elume)
                  <ExternalLink className="size-3 opacity-80" aria-hidden />
                </Link>
              </p>
            </div>

            <div className="min-w-0 lg:sticky lg:top-28">
              <ElumeDemoPreview href={ELUME_LANDING_DEMO_URL} />
              <p className="mt-3 text-center font-mono text-[10px] leading-relaxed text-white/35">
                Ilustração de interface. Não é captura auditada do site ao vivo.
              </p>
            </div>
          </BeamHighlight>
        </Reveal>

        <Reveal delay={0.1}>
          <BeamHighlight className="mt-10 rounded-2xl border border-dashed border-white/[0.14] bg-[#101018]/80">
            <div className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
              <div className="max-w-xl">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
                  Próximo passo
                </p>
                <h3 className="font-heading mt-3 text-xl font-semibold text-foreground md:text-2xl">
                  Empresas boas merecem crescer como grandes marcas.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Publicamos novos cases com autorização. Quando o perfil conversa com
                  a ZYRON, damos o próximo passo juntos.
                </p>
              </div>
              <div className="shrink-0">
                <InteractiveHoverButton href="#diagnosis" className={ctaSection}>
                  Quero minha estratégia de crescimento →
                </InteractiveHoverButton>
              </div>
            </div>
          </BeamHighlight>
        </Reveal>

        <p className="mt-12 max-w-3xl border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-muted-foreground">
          Ilustração educativa: quando métricas ou gráficos aparecem neste case, tratam-se
          de cenário modelo de painel; não são garantia de resultado nem métricas
          auditadas. Na conversa comercial avaliamos o que faz sentido para o seu
          contexto.
        </p>
      </div>
    </section>
  );
}
