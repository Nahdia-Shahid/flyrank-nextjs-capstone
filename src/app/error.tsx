"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="glass-card max-w-lg text-center">
        <div className="mb-4 text-5xl">⚠️</div>

        <h1 className="text-3xl font-black">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-400">
          We couldn't load this page. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}