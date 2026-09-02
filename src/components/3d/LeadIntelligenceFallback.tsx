"use client";

type Props = {
  score: number;
};

export default function LeadIntelligenceFallback({ score }: Props) {
  return (
    <div className="flex h-[420px] w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-2xl">
          <span className="text-4xl font-bold text-white">{score}</span>
        </div>
        <p className="text-sm text-white/60">Lead Intelligence</p>
        <p className="mt-1 text-xs text-white/40">
          3D view disabled for reduced-motion or low-power devices
        </p>
      </div>
    </div>
  );
}