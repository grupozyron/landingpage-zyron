import { SiteLogo } from "@/components/brand/site-logo";
import { HashLink } from "@/components/hash-link";
import { SITE_INSTAGRAM_URL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { WhatsAppFooterButton } from "./whatsapp-cta";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const footerNav = [
  { href: "#dor", label: "Desafios" },
  { href: "#solucao", label: "Solução" },
  { href: "#case", label: "Case" },
  { href: "#processo", label: "Processo" },
  { href: "#contact", label: "Contato" },
  { href: "#diagnosis", label: "Formulário" },
];

export function SiteFooter() {
  return (
    <footer
      className={cn(
        "relative border-t border-white/[0.07] bg-[#0A0A0A]",
        "bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgb(37_99_255_/0.12),transparent_55%)]",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563FF]/35 to-transparent"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="flex flex-col gap-2">
              <SiteLogo variant="footer" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6B6B78]">
                Grupo ZYRON
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tráfego pago, landing e automação para empresas B2B e serviços premium
              que precisam de aquisição previsível — sem improviso.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppFooterButton />
              <a
                href={SITE_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-foreground",
                  "shadow-[0_0_32px_-18px_rgb(37_99_255_/0.75)] transition-[border-color,background-color,box-shadow]",
                  "hover:border-[#E4405F]/45 hover:bg-[#E4405F]/[0.08] hover:text-white hover:shadow-[0_0_36px_-14px_rgb(228_64_95_/0.45)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4405F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
                )}
              >
                <InstagramIcon className="size-[18px] shrink-0 text-[#E4405F]" />
                Instagram
              </a>
              <span className="text-xs text-[#6B6B78]">
                @grupozyron — conteúdo e bastidores.
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B6B78]">
              Navegar
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <HashLink
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B6B78]">
              Contato
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Prefere WhatsApp? Use o botão ao lado ou{" "}
              <HashLink
                href="#contact"
                className="font-medium text-foreground underline decoration-white/15 underline-offset-4 transition-colors hover:decoration-primary/60"
              >
                veja o formulário
              </HashLink>
              . Também pode{" "}
              <HashLink
                href="#diagnosis"
                className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-[#6E9FFF]"
              >
                pedir análise estratégica
              </HashLink>
              .
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <p className="font-mono text-xs tracking-tight text-[#6B6B78]">
            © {new Date().getFullYear()} ZYRON. Todos os direitos reservados.
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-tight text-[#6B6B78]/90">
            Uma empresa do Grupo ZYRON.
          </p>
        </div>
      </div>
    </footer>
  );
}
