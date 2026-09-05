"use client";

import { useEffect, useState, type ComponentType } from "react";
import LeadIntelligenceFallback from "./LeadIntelligenceFallback";

type SceneProps = {
  score: number;
};

export default function LeadIntelligenceExperience() {
  const [score, setScore] = useState(80);
  const [fallback, setFallback] = useState<boolean | null>(null);
  const [Scene, setScene] = useState<ComponentType<SceneProps> | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lowPower =
      navigator.hardwareConcurrency <= 2 ||
      ("deviceMemory" in navigator &&
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 2);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFallback(reducedMotion || lowPower);
  }, []);

  async function launch3D() {
    const sceneModule = await import("./LeadIntelligenceScene");
    setScene(() => sceneModule.default);
  }

  if (fallback === null || fallback) {
    return <LeadIntelligenceFallback score={score} />;
  }

  return (
    <>
      {!Scene ? (
        <div className="flex h-[420px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-950">
          <button
            onClick={launch3D}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Launch 3D Experience
          </button>
        </div>
      ) : (
        <Scene score={score} />
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="mr-2 text-sm text-white/60">Lead Score:</span>

        {[25, 50, 80].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setScore(value)}
            className="rounded-xl border border-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
}