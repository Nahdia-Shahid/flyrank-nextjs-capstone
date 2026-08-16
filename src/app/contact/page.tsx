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
  
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
  
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>
  
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
  
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>
  
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
  
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>
  
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-5 py-3 font-semibold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }