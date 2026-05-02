import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { HashLink } from "@/components/hash-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 auto-rows-[minmax(20rem,24rem)] md:grid-cols-3 md:auto-rows-[minmax(26rem,28rem)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "border border-white/[0.08] bg-[#1C1C1C]/90 transform-gpu shadow-[0_0_0_1px_rgb(255_255_255_/0.06),inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
      className,
    )}
    {...props}
  >
    <div className="relative min-h-[12rem] w-full flex-1 overflow-hidden md:min-h-[12rem]">
      {background}
    </div>

    <div className="relative z-10 flex flex-col gap-3 p-4 pt-3">
      <div className="flex flex-col gap-1">
        <Icon className="h-10 w-10 shrink-0 text-primary md:h-12 md:w-12" aria-hidden />
        <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
          {name}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      <HashLink
        href={href}
        className={cn(
          buttonVariants({ variant: "link", size: "sm" }),
          "inline-flex w-fit items-center gap-1.5 p-0 text-primary underline-offset-4 hover:underline",
        )}
      >
        {cta}
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      </HashLink>
    </div>

    <div className="pointer-events-none absolute inset-0 rounded-xl transition-colors duration-300 group-hover:bg-black/[0.03] dark:group-hover:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
