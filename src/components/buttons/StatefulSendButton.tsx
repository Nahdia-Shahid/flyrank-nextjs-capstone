"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ButtonState = "idle" | "loading" | "success" | "error";
type DemoMode = "random" | "success" | "error";

interface StatefulSendButtonProps {
  mode?: DemoMode;
}

export default function StatefulSendButton({
  mode = "random",
}: StatefulSendButtonProps) {
  const [state, setState] = useState<ButtonState>("idle");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (state !== "success" && state !== "error") return;

    const timeout = window.setTimeout(() => {
      setState("idle");
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [state]);

  const handleClick = () => {
    if (state === "loading") return;

    setState("loading");

    const delay = 900 + Math.random() * 600;

    window.setTimeout(() => {
      const failed =
        mode === "error" ||
        (mode === "random" && Math.random() < 0.2);

      setState(failed ? "error" : "success");
    }, delay);
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      disabled={state === "loading"}
      whileHover={
        prefersReducedMotion || state === "loading"
          ? undefined
          : { scale: 1.02 }
      }
      whileTap={
        prefersReducedMotion || state === "loading"
          ? undefined
          : { scale: 0.98 }
      }
      transition={transition}
      className="relative inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        {state === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex items-center gap-2"
          >
            <span>✈</span>
            Send Message
          </motion.span>
        )}

        {state === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={
                prefersReducedMotion ? undefined : { rotate: 360 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, repeat: Infinity, ease: "linear" }
              }
              className="text-lg"
            >
              ◌
            </motion.span>
            Sending...
          </motion.span>
        )}

        {state === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex items-center gap-2"
          >
            <span>✓</span>
            Sent!
          </motion.span>
        )}

        {state === "error" && (
          <motion.span
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : { x: [0, -6, 6, -4, 4, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.35, ease: "easeOut" }
              }
            >
              !
            </motion.span>
            Failed — Retry
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}