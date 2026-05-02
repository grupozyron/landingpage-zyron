import Link from "next/link";
import type { ComponentProps } from "react";

type HashLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
};

/**
 * Âncoras na mesma página com `<a>` nativo — `next/link` + `#` falha o scroll no App Router.
 * URLs externas ou rotas normais continuam com Link.
 */
export function HashLink({ href, children, ...props }: HashLinkProps) {
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
