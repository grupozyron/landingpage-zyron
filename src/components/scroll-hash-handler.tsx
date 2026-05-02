"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHashFragment(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToTopHard() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Scroll ao destino com hash: compatível com App Router + header sticky (`scroll-padding-top` no HTML).
 * Evita que o browser restaure a posição antiga no reload — ver `history.scrollRestoration`.
 */
export function ScrollHashHandler() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const run = () => scrollToHashFragment(hash);
      run();
      const t1 = window.setTimeout(run, 0);
      const t2 = window.setTimeout(run, 120);
      const t3 = window.setTimeout(run, 350);
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        window.clearTimeout(t3);
      };
    }

    /* Sem âncora: topo antes do paint e novamente após layout/hidratação (evita “abrir no meio”). */
    scrollToTopHard();
    const t0 = window.setTimeout(scrollToTopHard, 0);
    const t1 = window.setTimeout(scrollToTopHard, 100);
    const t2 = window.setTimeout(scrollToTopHard, 320);
    const t3 = window.setTimeout(scrollToTopHard, 600);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHashFragment(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest?.(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr || hrefAttr === "#" || !hrefAttr.startsWith("#")) return;

      const id = hrefAttr.slice(1);
      const dest = document.getElementById(id);
      if (!dest) return;

      e.preventDefault();
      window.history.pushState(null, "", hrefAttr);
      dest.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
