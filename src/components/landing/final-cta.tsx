"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { AuroraText } from "@/registry/magicui/aurora-text";
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
            Sua empresa já provou valor.{" "}
            <AuroraText className="font-semibold">
              Agora precisa crescer em alto nível.
            </AuroraText>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Solicite um diagnóstico gratuito e descubra como transformar sua
            empresa em uma marca preparada para escalar.
          </p>
          <p className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/90">
            Vagas de onboarding limitadas por mês · retorno em até dois dias úteis
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Depois do envio: triagem do perfil e retorno por WhatsApp ou e-mail em
            até{" "}
            <span className="text-foreground/90">dois dias úteis</span>. Primeira
            conversa para alinhar expectativa — sem compromisso de contrato.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <InteractiveHoverButton href="#diagnosis" className={ctaDiagnosis}>
              Quero crescer com a ZYRON
            </InteractiveHoverButton>
            {wa ? (
              <InteractiveHoverButton
                href={wa}
                target="_blank"
                rel="noreferrer"
                className={ctaDiagnosis}
              >
                Falar com especialista
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
