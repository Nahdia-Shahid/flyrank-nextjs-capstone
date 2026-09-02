"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LeadIntelligenceFallback from "./LeadIntelligenceFallback";

const LeadIntelligenceScene = dynamic(
  () => import("./LeadIntelligenceScene"),
  { ssr: false }
);

type Props = {
  score: number;
};

export default function LeadIntelligenceCanvas({ score }: Props) {
  const [useFallback, setUseFallback] = useState<boolean | null>(null);
  const [started, setStarted] = useState(false);

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

  if (useFallback === null || useFallback) {
    return <LeadIntelligenceFallback score={score} />;
  }

  if (!started) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-950">
        <button
          onClick={() => setStarted(true)}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Launch 3D Experience
        </button>
      </div>
    );
  }

  return <LeadIntelligenceScene score={score} />;
}