"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  to,
  suffix = "",
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * to));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return (
    <span
      aria-label={`${to}${suffix}`}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </span>
  );
}