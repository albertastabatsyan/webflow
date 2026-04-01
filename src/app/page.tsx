const articles = [
  {
    tag: "Benchmark",
    title: "Voice AI Latency Benchmarks: Who Actually Delivers Sub-500ms?",
    description:
      "We measured p50, p90, and p95 time-to-first-token across every major voice AI platform. The results challenge the marketing claims.",
    author: "Naaman Newbold",
    role: "Head of Engineering",
    status: "featured" as const,
    date: "April 2026",
  },
  {
    tag: "Index",
    title: "The Outcome Index",
    description:
      "A new framework for measuring what actually matters in enterprise voice AI — not tokens per second, but outcomes per conversation.",
    author: "Synthflow Labs",
    role: "",
    status: "coming" as const,
    date: "Coming Soon",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Nav */}
      <nav className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-wide uppercase text-zinc-300">
              Synthflow Labs
            </span>
          </div>
          <a
            href="https://synthflow.ai"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            synthflow.ai
          </a>
        </div>
      </nav>

      {/* Hero / Manifesto */}
      <header className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-medium text-violet-300">
              Research & Engineering
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Rigorous research for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              voice AI
            </span>{" "}
            that works.
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Synthflow Labs publishes independent benchmarks, engineering deep
            dives, and data-driven analysis. No marketing spin — just the
            research enterprise teams need to make informed decisions about
            conversational AI.
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Publications
          </h2>
          <div className="flex gap-2">
            {["All", "Benchmark", "Index", "Engineering"].map((filter) => (
              <button
                key={filter}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  filter === "All"
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className={`group relative rounded-2xl border transition-all duration-300 ${
                article.status === "featured"
                  ? "border-violet-500/20 bg-gradient-to-br from-violet-500/[0.03] to-fuchsia-500/[0.03] hover:border-violet-500/30"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      article.tag === "Benchmark"
                        ? "bg-violet-500/10 text-violet-300"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs text-zinc-600">{article.date}</span>
                  {article.status === "coming" && (
                    <span className="text-xs text-zinc-600 border border-zinc-800 rounded-full px-2 py-0.5">
                      In Progress
                    </span>
                  )}
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight mb-3 ${
                    article.status === "featured"
                      ? "text-white group-hover:text-violet-100"
                      : "text-zinc-300"
                  }`}
                >
                  {article.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-3xl mb-6">
                  {article.description}
                </p>
                {article.author && (
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">
                        {article.author}
                      </div>
                      {article.role && (
                        <div className="text-xs text-zinc-600">
                          {article.role}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {article.status === "featured" && (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                      Read research
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10 text-center">
          <h3 className="text-lg font-semibold mb-2">Stay in the loop</h3>
          <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
            New research drops directly to your inbox. No spam, no fluff — just
            the data that matters.
          </p>
          <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-violet-500/50 transition-colors"
            />
            <button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between text-xs text-zinc-600">
          <span>Synthflow Labs</span>
          <span>Part of Synthflow AI</span>
        </div>
      </footer>
    </div>
  );
}
