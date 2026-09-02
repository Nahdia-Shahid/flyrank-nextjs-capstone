import ValidatedContactForm from "@/components/forms/ValidatedContactForm";

export default function ContactPage() {
    return (
      <main className="space-y-10">
        <section className="glass-card">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get In Touch
          </p>
  
          <h1 className="hero-title text-5xl">
            Let&apos;s build something
            <span className="gradient-text"> intelligent.</span>
          </h1>
  
          <p className="hero-description">
            Have a question about the FlyRank AI project or want to discuss
            frontend engineering? Send us a message and we&apos;ll get back to
            you.
          </p>
        </section>
  
        <section className="grid gap-8 md:grid-cols-2">
          <div className="glass-card">
            <h2 className="mb-6 text-2xl font-bold">
              Contact Information
            </h2>
  
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl">
                  📧
                </div>
  
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-slate-300">
                    hello@flyrank.ai
                  </p>
                </div>
              </div>
  
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-xl">
                  📍
                </div>
  
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-slate-300">
                    Remote / Global
                  </p>
                </div>
              </div>
  
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-xl">
                  ⚡
                </div>
  
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-sm text-slate-300">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="glass-card">
            <h2 className="mb-6 text-2xl font-bold">
              Send a Message
            </h2>
            <ValidatedContactForm />
          </div>
        </section>
      </main>
    );
  }