"use client";

import {
  Bot,
  Layers,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Trophy,
  Workflow,
  Zap,
  X,
} from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import { HashLink } from "@/components/hash-link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ctaDiagnosis } from "@/lib/cta-styles";
import { getWhatsAppLeadUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

import type { LucideIcon } from "lucide-react";

export type MobileNavItem = { href: string; label: string };

type MobileNavOverlayProps = {
  open: boolean;
  onClose: () => void;
  items: readonly MobileNavItem[];
  activeId: string | null;
};

const NAV_ICON: Record<string, LucideIcon> = {
  dor: Zap,
  solucao: Lightbulb,
  automacao: Bot,
  servicos: Layers,
  case: Trophy,
  "como-funciona": Workflow,
  contact: MessageCircle,
};

function NavIcon({ href }: { href: string }) {
  const id = href.replace(/^#/, "");
  const Icon = NAV_ICON[id] ?? Sparkles;
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-lg",
        "border border-[#2563FF]/18 bg-[#2563FF]/[0.1] text-[#7BA3FF]",
      )}
      aria-hidden
    >
      <Icon className="size-[18px]" strokeWidth={1.85} />
    </span>
  );
}

/**
 * Menu mobile full-screen (portal) — layout compacto: menos rótulos, lista densa, CTAs discretos.
 */
export function MobileNavOverlay({
  open,
  onClose,
  items,
  activeId,
}: MobileNavOverlayProps) {
  const titleId = useId();
  const assistId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const wa = getWhatsAppLeadUrl();

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (typeof document === "undefined" || !open) return null;

  return createPortal(
    <div
      id="zyron-mobile-nav"
      className="fixed inset-0 z-[100] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={assistId}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        className="absolute inset-0 bg-[#030308]/88 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden",
          "border-l border-white/[0.05] bg-[#0a0a10]",
          "shadow-[0_0_72px_-28px_rgb(37_99_255_/0.28)]",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(36vh,260px)] bg-[radial-gradient(ellipse_85%_70%_at_50%_-35%,rgb(37_99_255_/0.14),transparent_62%)]"
        />

        <span id={assistId} className="sr-only">
          Escolha uma secção da página ou feche para voltar. Diagnóstico gratuito
          com retorno em até dois dias úteis.
        </span>

        <div className="relative shrink-0 px-4 pb-1 pt-[max(0.5rem,env(safe-area-inset-top))]">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#2563FF]/95">
                ZYRON
              </p>
              <h2
                id={titleId}
                className="font-heading mt-0.5 text-lg font-semibold leading-tight tracking-tight text-foreground"
              >
                Menu
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Fechar navegação"
              onClick={onClose}
              className={cn(
                "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
                "border border-white/[0.12] bg-[#14141c]/85 text-foreground",
                "transition-[background-color,border-color] hover:bg-[#1c1c26]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a10]",
              )}
            >
              <X className="size-5" aria-hidden strokeWidth={2} />
            </button>
          </div>
        </div>

        <nav
          className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pt-1"
          aria-label="Secções do site"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const id = item.href.replace(/^#/, "");
              const active = activeId === id;
              return (
                <li key={item.href}>
                  <HashLink
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex min-h-[44px] items-center gap-2.5 rounded-xl px-2.5 py-2",
                      "transition-[background-color,border-color] duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a10]",
                      active
                        ? "bg-[#2563FF]/[0.15] text-foreground ring-1 ring-[#2563FF]/30"
                        : "text-foreground/92 hover:bg-white/[0.05]",
                    )}
                    aria-current={active ? "true" : undefined}
                  >
                    <NavIcon href={item.href} />
                    <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug tracking-tight">
                      {item.label}
                    </span>
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={cn(
            "relative shrink-0 border-t border-white/[0.08]",
            "bg-[#08080d]/95 backdrop-blur-md",
            "px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5",
          )}
        >
          <div className="flex flex-col gap-2">
            <InteractiveHoverButton
              href="#diagnosis"
              onClick={onClose}
              className={cn(
                ctaDiagnosis,
                "h-11 min-h-[44px] w-full justify-center px-4 text-[14px] shadow-[0_0_28px_-12px_rgb(37_99_255_/0.45)]",
              )}
            >
              Solicitar diagnóstico gratuito
            </InteractiveHoverButton>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full",
                  "border border-[#25D366]/35 bg-[#25D366]/[0.08] px-4 text-[14px] font-semibold text-[#DCFCE8]",
                  "transition-[border-color,background-color] hover:border-[#25D366]/48 hover:bg-[#25D366]/14",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080d]",
                )}
              >
                <MessageCircle
                  className="size-[18px] shrink-0 text-[#25D366]"
                  strokeWidth={2}
                  aria-hidden
                />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
