import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Separator } from "@/components/ui/separator";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { ELUME_LANDING_DEMO_URL } from "@/lib/site-config";

import { AuroraText } from "@/registry/magicui/aurora-text";

import { BeamHighlight } from "./beam-highlight";
import { CaseStudyMetrics } from "./case-study-metrics";
import { Reveal } from "./reveal";

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
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            A Elume é uma empresa sólida com anos de mercado e excelente
            reputação. Por muito tempo cresceu apenas por indicação. Agora iniciou
            uma nova fase com a ZYRON através de landing page estratégica, presença
            digital profissional, estrutura para captação online e novo
            posicionamento de mercado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal>
            <BeamHighlight className="rounded-2xl bg-[#1C1C1C] shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]">
              <div className="p-8 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Elume
                </h3>
                <span className="rounded-full bg-[#1C1C1C] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#2563FF] ring-1 ring-[#2563FF]/25">
                  Esquadrias premium
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Transição de indicação para um funil digital alinhado ao ticket —
                página com intenção comercial, marca consistente online e ritmo de
                otimização.
              </p>
              <p className="mt-5">
                <Link
                  href={ELUME_LANDING_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#2563FF] transition-colors hover:text-[#5A8AFF]"
                  title="Abre a página de demonstração do projeto Elume em nova aba"
                >
                  Ver demonstração da landing (Elume)
                  <ExternalLink className="size-3 opacity-80" aria-hidden />
                </Link>
              </p>
              <Separator className="my-8 bg-white/[0.06]" />
              <p className="text-sm font-medium text-foreground">Antes</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Crescimento preso à indicação; digital sem conversão proporcional ao
                nível do negócio.
              </p>
              <Separator className="my-8 bg-white/[0.06]" />
              <p className="text-sm font-medium text-foreground">Com a ZYRON</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Base para atrair e converter com critério — presença moderna,
                landing focada em resultado e disciplina de melhoria contínua.
              </p>
              </div>
            </BeamHighlight>
          </Reveal>

          <Reveal delay={0.06}>
            <CaseStudyMetrics />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <BeamHighlight className="mt-12 rounded-2xl border border-dashed border-white/[0.14] bg-[#101018]/80">
            <div className="px-6 py-8 md:flex md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
                Próximos cases
              </p>
              <h3 className="font-heading mt-3 text-xl font-semibold text-foreground md:text-2xl">
                Empresas excelentes merecem crescer com estrutura.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                Publicamos novos cases com autorização. Se o seu perfil conversa
                com a ZYRON, você pode ser o próximo.
              </p>
            </div>
            <div className="mt-6 shrink-0 md:mt-0">
              <InteractiveHoverButton href="#diagnosis" className={ctaDiagnosis}>
                Quero ser considerado
              </InteractiveHoverButton>
            </div>
            </div>
          </BeamHighlight>
        </Reveal>
      </div>
    </section>
  );
}
