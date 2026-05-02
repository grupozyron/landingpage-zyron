"use client";

import { useEffect, useState } from "react";

/**
 * Destaca a secção cujo topo já passou da linha de ativação (útil para nav com scroll-spy).
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = sectionIds.join("\0");

  useEffect(() => {
    const ids = key.split("\0").filter(Boolean);
    if (ids.length === 0) return;

    const line = () => {
      if (typeof window === "undefined") return 110;
      return window.innerWidth < 768 ? 152 : 108;
    };

    const read = () => {
      const y = line();
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= y) current = id;
      }
      setActiveId(current);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [key]);

  return activeId;
}
