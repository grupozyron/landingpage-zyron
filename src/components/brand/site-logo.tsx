import Image from "next/image";
import Link from "next/link";

import { LOGO_PUBLIC_PATH } from "@/lib/brand/logo-spec";
import { cn } from "@/lib/utils";

/**
 * Deve coincidir com o `viewBox` do SVG oficial (`public/brand/zyron-logo.svg`).
 * Atual: ícone + wordmark + linha Growth Intelligence — 280×38.
 */
const INTRINSIC = { width: 280, height: 38 } as const;

type SiteLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function SiteLogo({ variant = "header", className }: SiteLogoProps) {
  const heightClass =
    variant === "header"
      ? "h-8 md:h-[38px]"
      : "h-9 md:h-10";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src={LOGO_PUBLIC_PATH}
        alt="ZYRON"
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        priority={variant === "header"}
        className={cn(
          "w-auto max-w-[min(52vw,240px)] object-contain object-left md:max-w-[280px]",
          heightClass,
        )}
      />
    </Link>
  );
}
