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

function InteractiveHoverButtonBody({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <span
          className="size-2 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-[100.8]"
          aria-hidden
        />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2",
          "text-primary-foreground opacity-0 transition-all duration-300",
          "group-hover:-translate-x-1 group-hover:opacity-100",
        )}
      >
        <span>{children}</span>
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      </div>
    </>
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
