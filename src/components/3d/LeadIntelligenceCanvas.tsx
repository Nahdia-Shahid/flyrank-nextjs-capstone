"use client";

import { useEffect, useState, type ComponentType } from "react";
import LeadIntelligenceFallback from "./LeadIntelligenceFallback";

type Props = {
  score: number;
};

type SceneProps = {
  score: number;
};

export default function LeadIntelligenceCanvas({ score }: Props) {
  const [useFallback, setUseFallback] = useState<boolean | null>(null);
  const [started, setStarted] = useState(false);
  const [Scene, setScene] = useState<ComponentType<SceneProps> | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lowPower =
      navigator.hardwareConcurrency <= 2 ||
      ("deviceMemory" in navigator &&
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 2);

    setUseFallback(reducedMotion || lowPower);
  }, []);

  const launch3D = async () => {
    setStarted(true);

    const module = await import("./LeadIntelligenceScene");
    setScene(() => module.default);
  };

  if (useFallback === null || useFallback) {
    return <LeadIntelligenceFallback score={score} />;
  }

  if (!started || !Scene) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-950">
        <button
          onClick={launch3D}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          {started ? "Loading 3D..." : "Launch 3D Experience"}
        </button>
      </div>
    );
  }

  return <Scene score={score} />;
}