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

  return <LeadIntelligenceScene score={score} />;
}