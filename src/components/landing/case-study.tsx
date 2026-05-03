import Link from "next/link";

import { ExternalLink } from "lucide-react";



import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import { Separator } from "@/components/ui/separator";

import { ctaSection } from "@/lib/cta-styles";

import { ELUME_LANDING_DEMO_URL } from "@/lib/site-config";



import { AuroraText } from "@/registry/magicui/aurora-text";



import { BeamHighlight } from "./beam-highlight";

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

            Empresa sólida com anos de mercado — presa ao crescimento por indicação.

            Com a ZYRON, iniciou landing premium, presença digital profissional e

            estrutura para atrair clientes com critério.

          </p>

        </Reveal>



        <Reveal delay={0.06}>

          <BeamHighlight className="mt-12 rounded-2xl bg-[#1C1C1C] shadow-[0_0_0_1px_rgb(255_255_255_/0.06)]">

            <div className="max-w-3xl p-8 md:p-10">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <h3 className="font-heading text-2xl font-semibold text-foreground">

                  Elume

                </h3>

                <span className="rounded-full bg-[#1C1C1C] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#2563FF] ring-1 ring-[#2563FF]/25">

                  Esquadrias premium

                </span>

              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">

                Da dependência de indicação para um funil digital alinhado ao ticket —

                página com intenção comercial, marca consistente e ritmo de melhoria

                contínua.

              </p>

              <p className="mt-6">

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

              <Separator className="my-8 bg-white/[0.06]" />

              <p className="text-sm font-medium text-foreground">Antes</p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

                Crescimento preso à indicação; digital sem conversão proporcional ao

                nível do negócio.

              </p>

              <Separator className="my-8 bg-white/[0.06]" />

              <p className="text-sm font-medium text-foreground">Com a ZYRON</p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

                Base para atrair e converter com critério — presença moderna, landing

                focada em resultado e disciplina de melhoria contínua.

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
          de cenário modelo de painel — não são garantia de resultado nem métricas
          auditadas. Na conversa comercial avaliamos o que faz sentido para o seu
          contexto.
        </p>

      </div>

    </section>

  );

}

