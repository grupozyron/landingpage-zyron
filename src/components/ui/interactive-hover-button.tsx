import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const shellClass = cn(
  "group relative inline-flex min-h-[44px] cursor-pointer items-center justify-center overflow-hidden rounded-full",
  "border border-white/[0.14] bg-[#1C1C1C]/90 px-6 py-2.5 text-center text-sm font-semibold text-[#F8F8F8] shadow-sm",
  "transition-[border-color,box-shadow,transform] duration-300 hover:border-[#2563FF]/45 hover:shadow-[0_0_32px_-14px_rgb(37_99_255_/0.55)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "motion-safe:active:scale-[0.98]",
);

/** Uma única instância do rótulo — evita texto duplicado no DOM (bug de CTAs “colados”). */
function InteractiveHoverButtonBody({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex min-w-0 max-w-full items-center justify-center gap-2">
      <span
        className="size-2 shrink-0 rounded-full bg-primary transition-transform duration-150 group-hover:scale-110"
        aria-hidden
      />
      <span className="min-w-0 truncate transition-[transform,box-shadow] duration-150 motion-safe:group-hover:-translate-y-px">
        {children}
      </span>
      <ArrowRight
        className="size-4 shrink-0 -translate-x-1 opacity-0 transition duration-150 motion-safe:group-hover:translate-x-0 motion-safe:group-hover:opacity-100"
        aria-hidden
      />
    </span>
  );
}

type InteractiveHoverButtonProps =
  | ({
      children: ReactNode;
      className?: string;
      href: string;
    } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">)
  | ({
      children: ReactNode;
      className?: string;
      href?: undefined;
    } & ButtonHTMLAttributes<HTMLButtonElement>);

export function InteractiveHoverButton(props: InteractiveHoverButtonProps) {
  const { children, className, ...rest } = props;

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={cn(shellClass, className)} {...anchorRest}>
        <InteractiveHoverButtonBody>{children}</InteractiveHoverButtonBody>
      </a>
    );
  }

  const btnRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={cn(shellClass, className)} {...btnRest}>
      <InteractiveHoverButtonBody>{children}</InteractiveHoverButtonBody>
    </button>
  );
}
