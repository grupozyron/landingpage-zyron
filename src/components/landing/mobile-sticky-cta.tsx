"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { HashLink } from "@/components/hash-link";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "zyron_sticky_cta_dismissed";
const SCROLL_THRESHOLD = 400;

/**
 * Barra fixa mobile — aparece após scroll, some perto do formulário (#diagnosis) ou ao fechar.
 */
export function MobileStickyCta() {
  const [scrollY, setScrollY] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("diagnosis");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setFormVisible(e.isIntersecting));
      },
      { rootMargin: "-12% 0px -12% 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const eligible = scrollY > SCROLL_THRESHOLD && !formVisible && !dismissed;

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999] md:hidden">
      <AnimatePresence>
        {eligible ? (
          <motion.div
            id="sticky-cta"
            role="region"
            aria-label="Chamada para ação"
            initial={{ y: 72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 72, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              "pointer-events-auto mx-auto mb-[max(0.5rem,env(safe-area-inset-bottom))] flex max-w-lg items-center gap-2 px-3",
            )}
          >
            <div className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "flex h-14 min-w-0 flex-1 items-center gap-2 overflow-hidden rounded-full px-3 sm:px-4",
                  "border border-[#2563FF]/35 bg-[#2563FF] text-white shadow-[0_12px_40px_-18px_rgb(37_99_255_/0.65)]",
                )}
              >
                <span className="min-w-0 flex-1 truncate ps-1 text-[13px] font-medium">
                  Diagnóstico gratuito
                </span>
                <HashLink
                  href="#diagnosis"
                  className={cn(
                    "inline-flex shrink-0 items-center justify-center rounded-full bg-white/15 px-3 py-2 sm:px-4",
                    "text-[13px] font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                  )}
                >
                  Quero crescer →
                </HashLink>
              </div>
              <button
                type="button"
                onClick={dismiss}
                aria-label="Fechar barra de chamada"
                className="pointer-events-auto flex size-11 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-[#141418]/95 text-foreground shadow-sm hover:bg-[#1a1a20]"
              >
                <X className="size-[18px]" aria-hidden strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
