"use client";



import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import { ctaSection, ctaSectionSecondary } from "@/lib/cta-styles";

import { getWhatsAppLeadUrl } from "@/lib/whatsapp";



import { BeamHighlight } from "./beam-highlight";

import { DiagnosisForm } from "./diagnosis-form";

import { Reveal } from "./reveal";



export function FinalCta() {

  const wa = getWhatsAppLeadUrl();



  return (

    <section

      id="contact"

      className="scroll-mt-24 border-b border-white/[0.05] py-[96px] md:py-[120px]"

    >

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        <Reveal>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">

            Próximo passo

          </p>

          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">

            Pronto para crescer como as grandes?

          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">

            Em 30 minutos de conversa, você entende o que está travando seu

            crescimento e quais são os próximos passos — sem enrolação.

          </p>

          <p className="mt-5 flex flex-wrap items-center gap-2 text-[13px] leading-snug text-muted-foreground sm:text-sm">

            <span

              className="relative flex size-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgb(52_211_153_/0.45)]"

              aria-hidden

            />

            <span>

              <strong className="font-semibold text-foreground">Vagas limitadas</strong>

              {" · "}

              retorno em até 2 dias úteis

            </span>

          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <InteractiveHoverButton href="#diagnosis" className={ctaSection}>

              Quero minha análise estratégica →

            </InteractiveHoverButton>

            {wa ? (

              <InteractiveHoverButton

                href={wa}

                target="_blank"

                rel="noreferrer"

                className={ctaSectionSecondary}

              >

                Falar no WhatsApp

              </InteractiveHoverButton>

            ) : null}

          </div>

        </Reveal>



        <div

          id="diagnosis"

          className="relative z-[1] mt-16 max-w-3xl scroll-mt-28 md:mt-20"

        >

          <BeamHighlight className="rounded-2xl">

            <DiagnosisForm />

          </BeamHighlight>

        </div>

      </div>

    </section>

  );

}

