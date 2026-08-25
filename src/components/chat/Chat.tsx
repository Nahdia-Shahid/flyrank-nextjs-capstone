"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, stop } = useChat();

  const isStreaming = status === "streaming";
  const isSubmitted = status === "submitted";

  useEffect(() => {
    if (!isAtBottom) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isAtBottom]);

  function handleScroll() {
    const container = messagesContainerRef.current;

    if (!container) return;

    const distanceFromBottom =
      container.scrollHeight -
      container.scrollTop -
      container.clientHeight;

    setIsAtBottom(distanceFromBottom < 80);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isStreaming || isSubmitted) {
      return;
    }

    setInput("");

    await sendMessage({
      text: trimmedInput,
    });
  }

  return (
    <section className="glass-card flex min-h-[650px] flex-col">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          FlyRank AI
        </p>

        <h1 className="mt-2 text-3xl font-black">
          AI Qualification Chat
        </h1>

        <p className="mt-2 text-slate-400">
          Ask questions and interact with the FlyRank AI assistant.
        </p>
      </div>

      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="relative flex-1 overflow-y-auto rounded-2xl border border-white/10 bg-black/20 p-4"
      >
        {messages.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center text-center">
            <div>
              <div className="mb-4 text-5xl">🤖</div>

              <h2 className="text-xl font-bold">
                Start a conversation
              </h2>

              <p className="mt-2 text-slate-400">
                Ask FlyRank AI anything about the platform.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-cyan-500 text-slate-950"
                    : "border border-white/10 bg-white/5 text-white"
                }`}
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider opacity-60">
                  {message.role === "user" ? "You" : "FlyRank AI"}
                </p>

                <div className="whitespace-pre-wrap leading-7">
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <span key={index}>
                          {part.text}
                        </span>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
          ))}

          {isSubmitted && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:300ms]" />

                  <span className="ml-2 text-sm text-slate-400">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {!isAtBottom && (
          <button
            type="button"
            onClick={() => {
              messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
              });

              setIsAtBottom(true);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-slate-900 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg hover:bg-slate-800"
          >
            ↓ Jump to latest
          </button>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-3 sm:flex-row"
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          disabled={isStreaming || isSubmitted}
          placeholder="Ask FlyRank AI..."
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-50"
        />

        {isStreaming ? (
          <button
            type="button"
            onClick={stop}
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim() || isSubmitted}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send
          </button>
        )}
      </form>
    </section>
  );
}