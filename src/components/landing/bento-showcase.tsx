"use client";

import { ptBR } from "date-fns/locale";
import {
  Bell,
  CalendarDays,
  Check,
  FileText,
  Share2,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Calendar } from "@/components/ui/calendar";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

import { ConnectedFlowVisual } from "./connected-flow-visual";
import { Reveal } from "./reveal";

const artefatos = [
  {
    name: "brief-estrategico.pdf",
    body: "Estratégia antes da execução: ICP, oferta e mensagens fechadas antes de investir em mídia.",
  },
  {
    name: "metricas-operacao.xlsx",
    body: "Decisões baseadas em números — CPL, funil e receita na mesma visão.",
  },
  {
    name: "landing-conversao.md",
    body: "Landing de alta conversão alinhada ao ticket e ao próximo passo comercial.",
  },
  {
    name: "testes-registro.msg",
    body: "Testes constantes: hipótese, variante vencedora e aprendizado por ciclo.",
  },
  {
    name: "campanha-performance.mp4",
    body: "Foco em ROI: criativo e página no mesmo brief — nada genérico.",
  },
];

const sinais = [
  { time: "live", title: "Lead qualificado · pedido de orçamento" },
  { time: "12 min", title: "CPL em linha com meta · revisão ativa" },
  { time: "1 h", title: "Nova variante vence teste na página" },
];

function SignalsBackground() {
  return (
    <div className="absolute inset-x-0 top-8 space-y-2.5 px-3 [mask-image:linear-gradient(to_top,transparent_0%,#000_92%)]">
      {sinais.map((s) => (
        <div
          key={s.title}
          className="rounded-lg border border-white/[0.06] bg-[#0A0A0A]/90 p-3 shadow-sm ring-1 ring-white/[0.04]"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#2563FF]">
            {s.time}
          </p>
          <p className="mt-1 text-xs leading-snug text-foreground">{s.title}</p>
        </div>
      ))}
    </div>
  );
}

const entregaItems = [
  "Gestão de tráfego pago",
  "Landing pages de alta conversão",
  "Estrutura de funil comercial",
  "Posicionamento digital premium",
  "Otimização de campanhas",
  "Estratégia de crescimento local",
] as const;

const diferencialBullets = [
  "Estratégia antes da execução",
  "Decisões baseadas em números",
  "Testes constantes",
  "Clareza comercial",
  "Foco em ROI",
] as const;

const features = [
  {
    Icon: FileText,
    name: "Clareza antes do investimento",
    description:
      "Nada de veiculação sem brief: posicionamento, oferta e mensagens definidos para o seu ticket.",
    href: "#entrega",
    cta: "Ver entregáveis",
    className: "md:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        repeat={5}
        className="absolute inset-x-0 top-8 bottom-0 [--duration:28s] [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)] sm:top-10"
      >
        {artefatos.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-[136px] cursor-default overflow-hidden rounded-lg border p-3",
              "border-white/[0.08] bg-[#0A0A0A]/90 ring-1 ring-white/[0.04]",
              "transition-all duration-300 hover:border-[#2563FF]/30",
            )}
          >
            <figcaption className="font-mono text-[11px] font-medium text-foreground">
              {f.name}
            </figcaption>
            <blockquote className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Bell,
    name: "Performance que dá para auditar",
    description:
      "O que importa aparece primeiro: mídia, conversão e experimentos — sem vaidade de métrica.",
    href: "#case",
    cta: "Ver caso aplicado",
    className: "md:col-span-2",
    background: <SignalsBackground />,
  },
  {
    Icon: Share2,
    name: "Funil integrado",
    description:
      "Tráfego, landing e próximo passo comercial no mesmo desenho — sem silos entre equipe e campanha.",
    href: "#visao-sistema",
    cta: "Ver fluxo",
    className: "md:col-span-2 overflow-visible",
    background: (
      <div
        className={cn(
          "absolute inset-x-0 top-0 flex h-[min(320px,48vh)] min-h-[280px] w-full items-stretch justify-stretch overflow-visible px-3 pt-3 sm:h-[320px] sm:min-h-[320px] sm:px-6 sm:pt-4",
          "border-none [mask-image:linear-gradient(to_top,transparent_8%,#000_100%)]",
          "transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transform-none",
        )}
      >
        <ConnectedFlowVisual variant="featured" className="w-full min-w-0 max-w-none flex-1" />
      </div>
    ),
  },
  {
    Icon: CalendarDays,
    name: "Ritmo de melhoria contínua",
    description:
      "Mesma cadência, mesmos indicadores: otimização e escala do que já provou resultado.",
    href: "#diagnosis",
    cta: "Agendar conversa",
    className: "md:col-span-1",
    background: (
      <div
        className={cn(
          "absolute inset-0 flex min-h-[12rem] flex-col items-center justify-center px-2 pt-6 pb-3 md:min-h-[13rem] md:px-4 md:pt-8",
          "[mask-image:linear-gradient(to_top,transparent_14%,#000_92%)]",
        )}
      >
        <Calendar
          mode="single"
          defaultMonth={new Date(2026, 4, 1)}
          selected={new Date(2026, 4, 15)}
          onSelect={() => {}}
          locale={ptBR}
          className={cn(
            "origin-center rounded-xl border border-white/[0.1] bg-[#0A0A0A]/95 p-2.5 shadow-xl ring-1 ring-white/[0.05]",
            "scale-95 transition-transform duration-300 group-hover:scale-[1] motion-reduce:group-hover:scale-95",
            "sm:scale-100 sm:p-3",
          )}
        />
      </div>
    ),
  },
];

export function BentoShowcase() {
  return (
    <section
      id="visao-sistema"
      className="scroll-mt-24 border-b border-white/[0.05] py-[96px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
            Diferencial
          </p>
          <h2 className="font-heading mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Não somos uma agência comum.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            A ZYRON nasceu com mentalidade analítica e foco em performance.
            Aplicamos testes, processos e melhoria contínua para gerar resultado
            previsível — sem promessa vazia e sem relatório que ninguém usa.
          </p>
          <ul className="mt-6 max-w-xl list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
            {diferencialBullets.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        <div id="entrega" className="scroll-mt-28 mt-14 space-y-12 md:mt-16">
          <div className="rounded-2xl border border-white/[0.08] bg-[#1C1C1C]/85 p-6 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)] sm:p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563FF]">
              Serviços
            </p>
            <h3 className="font-heading mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              O que construímos para sua empresa
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Um conjunto integrado — da aquisição ao refinamento — para negócios
              locais que cobram bem e precisam de pipeline consistente.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {entregaItems.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-xl border border-white/[0.06] bg-[#0A0A0A]/60 px-4 py-3.5 text-sm leading-snug text-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#2563FF]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
