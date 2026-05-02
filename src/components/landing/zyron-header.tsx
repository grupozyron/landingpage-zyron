"use client";

import { useEffect, useState } from "react";

import { SiteLogo } from "@/components/brand/site-logo";
import { HashLink } from "@/components/hash-link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useActiveSection } from "@/hooks/use-active-section";
import { ctaDiagnosisNav } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#dor", label: "Tensão" },
  { href: "#solucao", label: "Solução" },
  { href: "#servicos", label: "Serviços" },
  { href: "#case", label: "Casos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contact", label: "Contato" },
] as const;

const SECTION_IDS = nav.map((n) => n.href.replace("#", "")) as readonly string[];

const navLinkBase =
  "touch-manipulation whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-medium transition-[color,background-color,box-shadow] duration-200 lg:px-4 flex min-h-[44px] shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

const pillWrapClass =
  "flex max-w-full flex-nowrap items-center gap-0.5 overflow-x-auto rounded-full border border-white/[0.09] bg-[#101018]/95 p-1 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.05)] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export function ZyronHeader() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = nav.map((item) => {
    const id = item.href.replace("#", "");
    const active = activeId === id;
    return (
      <HashLink
        key={item.href}
        href={item.href}
        className={cn(
          navLinkBase,
          active
            ? "bg-white/[0.1] text-foreground shadow-[inset_0_0_0_1px_rgb(255_255_255_/0.1)]"
            : "text-[#93939e] hover:bg-white/[0.07] hover:text-foreground",
        )}
        aria-current={active ? "true" : undefined}
      >
        {item.label}
      </HashLink>
    );
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 relative border-b border-white/[0.07] bg-[#0A0A0A]/94 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#0A0A0A]/85",
        "transition-[box-shadow,background-color,border-color] duration-300",
        scrolled &&
          "border-white/[0.1] bg-[#0A0A0A]/98 shadow-[0_12px_48px_-28px_rgb(0_0_0_/0.85)] supports-[backdrop-filter]:bg-[#0A0A0A]/92",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563FF]/40 to-transparent"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="hidden h-16 items-center justify-between gap-3 md:flex">
          <SiteLogo variant="header" />

          <nav
            className="min-w-0 flex-1 justify-center px-1 lg:px-3"
            aria-label="Navegação principal"
          >
            <div className={cn(pillWrapClass, "md:inline-flex md:w-auto md:max-w-none md:overflow-visible")}>
              {links}
            </div>
          </nav>

          <InteractiveHoverButton
            href="#diagnosis"
            className={cn("shrink-0", ctaDiagnosisNav)}
          >
            Diagnóstico gratuito
          </InteractiveHoverButton>
        </div>

        <div className="md:hidden">
          <div className="flex h-14 items-center justify-between gap-2">
            <SiteLogo variant="header" />
            <InteractiveHoverButton
              href="#diagnosis"
              className={cn("shrink-0 max-sm:px-3", ctaDiagnosisNav)}
            >
              <span className="hidden min-[360px]:inline">Diagnóstico gratuito</span>
              <span className="min-[360px]:hidden">Diagnóstico</span>
            </InteractiveHoverButton>
          </div>

          <nav
            className="-mx-4 border-t border-white/[0.06] px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5"
            aria-label="Navegação principal"
          >
            <div className={pillWrapClass}>{links}</div>
          </nav>
        </div>
      </div>
    </header>
  );
}
