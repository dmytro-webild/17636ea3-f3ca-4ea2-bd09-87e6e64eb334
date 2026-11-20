import { cls } from "@/lib/utils";

type AuroraBackgroundProps = {
  position?: "fixed" | "absolute";
};

const AuroraBackground = ({ position = "fixed" }: AuroraBackgroundProps) => {
  return (
    <div
      className={cls(
        position,
        "inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none select-none bg-[#f8fafc]",
        position === "absolute" && "mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      )}
      aria-hidden="true"
    >
      {/* Base smooth gradient wash anchored by Navy and Brand Blue */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 15% 10%, rgba(14, 41, 66, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 60% 45% at 85% 15%, rgba(1, 137, 187, 0.09) 0%, transparent 65%),
            radial-gradient(ellipse 65% 55% at 50% 55%, rgba(50, 213, 233, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 70% 50% at 85% 85%, rgba(14, 41, 66, 0.07) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 15% 85%, rgba(1, 137, 187, 0.08) 0%, transparent 65%)
          `,
        }}
      />

      {/* Floating Ambient Glow Orbs */}
      {/* Orb 1: Deep Navy (#0E2942) - Top Left Ambient Float */}
      <div
        className="absolute rounded-full blur-[100px] opacity-30 mix-blend-multiply"
        style={{
          width: "48vw",
          height: "48vw",
          top: "-12%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(14, 41, 66, 0.35) 0%, rgba(1, 137, 187, 0.12) 65%, transparent 100%)",
          animation: "floating-move-vertical 28s ease-in-out infinite",
        }}
      />

      {/* Orb 2: Primary Blue (#0189BB) - Top Right Ambient Float */}
      <div
        className="absolute rounded-full blur-[110px] opacity-30 mix-blend-multiply"
        style={{
          width: "52vw",
          height: "52vw",
          top: "-15%",
          right: "-12%",
          background: "radial-gradient(circle, rgba(1, 137, 187, 0.3) 0%, rgba(50, 213, 233, 0.15) 65%, transparent 100%)",
          animation: "floating-move-horizontal 36s ease-in-out infinite",
        }}
      />

      {/* Orb 3: Subtle Turquoise/Cyan (#32D5E9) Accent - Center Float */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20 mix-blend-multiply"
        style={{
          width: "42vw",
          height: "42vw",
          top: "38%",
          left: "28%",
          background: "radial-gradient(circle, rgba(50, 213, 233, 0.25) 0%, rgba(1, 137, 187, 0.12) 70%, transparent 100%)",
          animation: "floating-move-in-circle 42s linear infinite",
        }}
      />

      {/* Orb 4: Navy & Blue Fusion - Bottom Right Anchor Glow */}
      <div
        className="absolute rounded-full blur-[105px] opacity-25 mix-blend-multiply"
        style={{
          width: "50vw",
          height: "50vw",
          bottom: "-15%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(14, 41, 66, 0.28) 0%, rgba(1, 137, 187, 0.15) 70%, transparent 100%)",
          animation: "floating-move-vertical 32s ease-in-out infinite reverse",
        }}
      />

      {/* Faint Micro-Mesh Grid Pattern (Low Opacity) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(14, 41, 66, 0.75) 0.75px, transparent 0.75px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft Noise Texture Overlay for Depth */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("https://storage.googleapis.com/webild/default/noise.webp")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
