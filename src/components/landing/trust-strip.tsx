"use client";



import { Gem, LineChart, MessageCircle, Sparkles } from "lucide-react";



const items = [

  {

    icon: MessageCircle,

    label: "Atendimento automatizado",

  },

  {

    icon: Sparkles,

    label: "Mais leads convertidos",

  },

  {

    icon: LineChart,

    label: "Crescimento previsível",

  },

  {

    icon: Gem,

    label: "Estrutura premium",

  },

];



export function TrustStrip() {

  return (

    <section

      aria-label="Credibilidade"

      className="border-b border-white/[0.05] bg-[#0A0A0A]/90 py-10 md:py-12"

    >

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {items.map((item) => (

            <div

              key={item.label}

              className="flex gap-4 rounded-xl border border-white/[0.06] bg-[#1C1C1C]/50 px-5 py-4 ring-1 ring-white/[0.04] backdrop-blur-sm"

            >

              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0A0A0A] ring-1 ring-[#2563FF]/20">

                <item.icon

                  className="size-4 text-[#2563FF]"

                  strokeWidth={1.5}

                  aria-hidden

                />

              </span>

              <p className="text-sm font-medium leading-snug text-[#C8C8D4]">

                {item.label}

              </p>

            </div>

          ))}

        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/85 md:text-[13px]">

          Evidência sob autorização: métricas e materiais de clientes só quando há

          permissão por escrito. Na conversa comercial a ZYRON mostra o que for

          pertinente ao seu caso.

        </p>

      </div>

    </section>

  );

}

