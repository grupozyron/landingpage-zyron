import { AmbientParticles } from "./ambient-particles";

export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <AmbientParticles />
      <div
        className="qv-animate-grid absolute inset-0 z-[1] opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          animation: "qv-grid-shift 48s linear infinite",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 15%, black 18%, transparent 72%)",
        }}
      />
      <div className="absolute left-1/2 top-[-18%] z-[1] size-[620px] -translate-x-1/2 rounded-full bg-[#2563FF]/12 blur-[120px]" />
      <div
        className="qv-animate-orb absolute bottom-[-24%] right-[-10%] z-[1] size-[520px] rounded-full bg-[#2563FF]/10 blur-[110px]"
        style={{ animation: "qv-orb-pulse 9s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-[#0A0A0A]/55 to-[#0A0A0A]" />
    </div>
  );
}
