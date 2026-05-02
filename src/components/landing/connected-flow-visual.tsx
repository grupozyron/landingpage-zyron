"use client";

import {
  forwardRef,
  type ReactNode,
  useRef,
} from "react";
import {
  BarChart3,
  ClipboardList,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  Palette,
  Users,
} from "lucide-react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex size-12 items-center justify-center rounded-full border-2 border-white/[0.12] bg-[#1C1C1C] p-3 shadow-[0_0_22px_-14px_rgb(37_99_255_/0.55)] ring-1 ring-[#2563FF]/15",
      className,
    )}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

type ConnectedFlowVisualProps = {
  className?: string;
  variant?: "default" | "featured";
};

export function ConnectedFlowVisual({
  className,
  variant = "default",
}: ConnectedFlowVisualProps) {
  const featured = variant === "featured";

  const beamCommon = {
    duration: 4 as const,
    gradientStartColor: "#2563FF",
    gradientStopColor: "#2563FF",
    pathColor: featured
      ? "rgb(79 124 255 / 0.32)"
      : "rgb(79 124 255 / 0.18)",
    pathWidth: featured ? 2.75 : 2,
    pathOpacity: featured ? 0.62 : 0.42,
  };

  const iconClass = featured
    ? "size-7 shrink-0 text-[#E8E8F0] md:size-8"
    : "size-[22px] shrink-0 text-[#C8C8D4]";
  const hubIconClass = featured
    ? "size-11 shrink-0 text-[#2563FF] md:size-12"
    : "size-9 shrink-0 text-[#2563FF]";

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  /** Satélites maiores no modo bento para preencher largura total. */
  const satClass = featured
    ? "size-14 p-3.5 md:size-16 md:p-4"
    : undefined;
  const hubClass = featured
    ? "size-[4.25rem] border-[#2563FF]/40 bg-[#0A0A0A]/95 p-4 shadow-[0_0_44px_-18px_rgb(37_99_255_/0.75)] ring-2 ring-[#2563FF]/30 md:size-[5.25rem] md:p-5"
    : "size-16 border-[#2563FF]/35 bg-[#0A0A0A]/95 p-4 shadow-[0_0_36px_-16px_rgb(37_99_255_/0.65)] ring-2 ring-[#2563FF]/25";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full max-w-none items-center justify-center overflow-visible",
        featured
          ? "h-full min-h-[280px] w-full py-2 md:min-h-[300px]"
          : "min-h-[260px] overflow-hidden p-6 md:min-h-[280px] md:p-8",
        className,
      )}
    >
      {/* Ocupa 100% da largura do cartão — sem max-w-lg */}
      <div
        className={cn(
          "flex w-full min-w-0 flex-col items-stretch justify-between",
          featured
            ? "h-[min(260px,78%)] max-h-[270px] min-h-[220px] gap-6 sm:h-[250px] sm:max-h-none md:gap-8"
            : "max-h-[220px] max-w-lg gap-6 md:max-h-[240px] md:gap-8",
        )}
      >
        <div className="flex w-full flex-row items-center justify-between gap-3 px-0.5 md:gap-6">
          <Circle ref={div1Ref} className={satClass}>
            <Megaphone className={iconClass} aria-hidden />
          </Circle>
          <Circle ref={div5Ref} className={satClass}>
            <ClipboardList className={iconClass} aria-hidden />
          </Circle>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-2 px-0 md:gap-4">
          <Circle ref={div2Ref} className={satClass}>
            <Palette className={iconClass} aria-hidden />
          </Circle>
          <Circle ref={div4Ref} className={cn(hubClass)}>
            <LayoutTemplate className={hubIconClass} aria-hidden />
          </Circle>
          <Circle ref={div6Ref} className={satClass}>
            <Users className={iconClass} aria-hidden />
          </Circle>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-3 px-0.5 md:gap-6">
          <Circle ref={div3Ref} className={satClass}>
            <MessageCircle className={iconClass} aria-hidden />
          </Circle>
          <Circle ref={div7Ref} className={satClass}>
            <BarChart3 className={iconClass} aria-hidden />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={featured ? -95 : -75}
        endYOffset={-10}
        {...beamCommon}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        curvature={featured ? -45 : undefined}
        {...beamCommon}
        delay={0.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={featured ? 95 : 75}
        endYOffset={10}
        {...beamCommon}
        delay={0.35}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={featured ? -95 : -75}
        endYOffset={-10}
        reverse
        {...beamCommon}
        delay={0.25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        {...beamCommon}
        delay={0.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={featured ? 95 : 75}
        endYOffset={10}
        reverse
        {...beamCommon}
        delay={0.4}
      />

      <span className="sr-only">
        Tráfego, briefing, criativos, WhatsApp, CRM e métricas conectados à
        página central do funil.
      </span>
    </div>
  );
}
