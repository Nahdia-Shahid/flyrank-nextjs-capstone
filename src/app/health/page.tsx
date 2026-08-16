type HealthData = {
  status: string;
  service: string;
  environment: string;
  timestamp: string;
  version: string;
};

function getHealthData(): HealthData {
  return {
    status: "healthy",
    service: "FlyRank AI Dashboard",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
}

export default function HealthPage() {
  const health = getHealthData();

  return (
    <main className="space-y-10">
      <section className="glass-card">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            System Operational
          </span>
        </div>

        <h1 className="hero-title text-5xl">
          Health Check
        </h1>

        <p className="hero-description">
          Live application health information for the FlyRank AI
          Dashboard.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="glass-card">
          <p className="text-sm text-slate-400 mb-2">
            Status
          </p>

          <h2 className="text-3xl font-bold text-emerald-400">
            {health.status}
          </h2>
        </div>

        <div className="glass-card">
          <p className="text-sm text-slate-400 mb-2">
            Service
          </p>

          <h2 className="text-2xl font-bold">
            {health.service}
          </h2>
        </div>

        <div className="glass-card">
          <p className="text-sm text-slate-400 mb-2">
            Environment
          </p>

          <h2 className="text-2xl font-bold capitalize">
            {health.environment}
          </h2>
        </div>

        <div className="glass-card">
          <p className="text-sm text-slate-400 mb-2">
            Version
          </p>

          <h2 className="text-3xl font-bold gradient-text">
            v{health.version}
          </h2>
        </div>

        <div className="glass-card md:col-span-2">
          <p className="text-sm text-slate-400 mb-2">
            Last Health Check
          </p>

          <h2 className="text-xl font-semibold">
            {new Date(health.timestamp).toLocaleString()}
          </h2>
        </div>
      </section>

      <section className="glass-card">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold">
              API Connection
            </h2>

            <p className="text-slate-400 mt-2">
              The application health endpoint is available at
              <span className="font-mono text-cyan-300">
                {" "}
                /api/health
              </span>
              .
            </p>
          </div>

          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            ● Connected
          </div>
        </div>
      </section>
    </main>
  );
}