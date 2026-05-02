"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { SiteLogo } from "@/components/brand/site-logo";
import { HashLink } from "@/components/hash-link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useActiveSection } from "@/hooks/use-active-section";
import { ctaDiagnosisNav } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

import { MobileNavOverlay } from "./mobile-nav-overlay";

const nav = [
  { href: "#dor", label: "Dores" },
  { href: "#solucao", label: "Solução" },
  { href: "#automacao", label: "Automação" },
  { href: "#servicos", label: "Serviços" },
  { href: "#case", label: "Casos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contact", label: "Contato" },
] as const;

const SECTION_IDS = nav.map((n) => n.href.replace("#", "")) as readonly string[];

const navLinkBase =
  "touch-manipulation whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-medium transition-[color,background-color,box-shadow] duration-200 lg:px-4 flex min-h-[44px] shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

/** justify-start: com overflow-x, justify-center cortava o primeiro item (“Dores”). */
const pillWrapClass =
  "flex w-max max-w-full min-w-0 flex-nowrap items-center justify-start gap-0.5 overflow-x-auto rounded-full border border-white/[0.09] bg-[#101018]/95 p-1 ps-1.5 pe-1.5 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.05)] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export function ZyronHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

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
        <div className="hidden h-16 md:grid md:w-full md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-4 lg:gap-6">
          <div className="min-w-0 shrink-0 justify-self-start pr-1">
            <SiteLogo variant="header" />
          </div>

          <nav
            className="flex min-w-0 justify-center justify-self-stretch overflow-visible px-0 sm:px-1"
            aria-label="Navegação principal"
          >
            <div className={cn(pillWrapClass)}>{links}</div>
          </nav>

          <div className="flex shrink-0 items-center justify-self-end pl-2">
            <InteractiveHoverButton
              href="#diagnosis"
              className={cn("shrink-0 whitespace-nowrap", ctaDiagnosisNav)}
            >
              Diagnóstico gratuito
            </InteractiveHoverButton>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex h-14 items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <SiteLogo variant="header" className="max-w-full" />
            </div>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="zyron-mobile-nav"
              aria-haspopup="dialog"
              aria-label="Abrir menu de navegação"
              onClick={() => setMenuOpen(true)}
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-full",
                "border border-white/[0.12] bg-[#141418]/90 text-foreground shadow-sm",
                "transition-[border-color,background-color,color] hover:border-white/[0.18] hover:bg-[#1a1a20]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
              )}
            >
              <Menu className="size-[22px]" aria-hidden strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <MobileNavOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={nav}
        activeId={activeId}
      />
    </header>
  );
}
