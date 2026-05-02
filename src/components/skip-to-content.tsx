/**
 * Primeiro foco acessível: pula marketing / header e leva direto ao <main>.
 */
export function SkipToContent() {
  return (
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:overflow-visible focus:rounded-xl focus:border focus:border-white/12 focus:bg-[#1C1C1C] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
    >
      Ir para o conteúdo principal
    </a>
  );
}
