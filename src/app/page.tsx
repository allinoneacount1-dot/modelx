import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Code2,
  Globe,
  Lock,
  Terminal,
  Copy,
  ChevronRight,
  Star,
} from "lucide-react";

const stats = [
  { value: "2,847", label: "Models Deployed" },
  { value: "12.4M", label: "API Calls / Month" },
  { value: "99.97%", label: "Uptime" },
  { value: "~0.001", label: "SOL per Call" },
];

const featuredModels = [
  {
    name: "Llama 3.1 70B",
    creator: "meta-ai",
    task: "Text Generation",
    price: "0.002 SOL",
    rating: 4.8,
    calls: "1.2M",
  },
  {
    name: "Whisper v3",
    creator: "openai",
    task: "Speech-to-Text",
    price: "0.001 SOL",
    rating: 4.9,
    calls: "890K",
  },
  {
    name: "Stable Diffusion XL",
    creator: "stability",
    task: "Image Generation",
    price: "0.005 SOL",
    rating: 4.7,
    calls: "2.1M",
  },
  {
    name: "Claude 3.5 Sonnet",
    creator: "anthropic",
    task: "Text Generation",
    price: "0.003 SOL",
    rating: 4.9,
    calls: "3.4M",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero — Center */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>

        <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-10">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted">
              Built on Solana · Mainnet Live
            </span>
          </div>

          {/* Heading */}
          <h1
            className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ textWrap: "balance" as const }}
          >
            The marketplace
            <br />
            for AI models.
          </h1>

          <p
            className="mx-auto mb-8 max-w-[520px] text-lg leading-relaxed text-muted"
            style={{ textWrap: "pretty" as const }}
          >
            Upload your model. Get benchmarked. Earn from every API call.
            Access thousands of models with Solana micropayments.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex items-center justify-center gap-3">
            <Link
              href="/marketplace"
              className="group inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
            >
              Browse Models
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-transparent px-6 py-3 text-sm text-muted transition-all hover:border-border-strong hover:text-foreground"
            >
              Start Building
            </Link>
          </div>

          {/* Code Snippet Preview */}
          <div className="mx-auto max-w-[560px] overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface text-left">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Terminal className="h-3.5 w-3.5 text-muted-faint" />
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-faint">
                quickstart.sh
              </span>
              <div className="ml-auto">
                <Copy className="h-3.5 w-3.5 text-muted-faint cursor-pointer hover:text-muted" />
              </div>
            </div>
            <pre className="overflow-x-auto p-4 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed">
              <span className="text-muted-faint">$</span>{" "}
              <span className="text-foreground">curl</span>{" "}
              <span className="text-primary">-X POST</span>{" "}
              <span className="text-muted">api.modelx.sol/v1/chat</span>{"\n"}
              <span className="text-muted-faint">  -H</span>{" "}
              <span className="text-accent">&quot;Authorization: Bearer mx_sk_...&quot;</span>{"\n"}
              <span className="text-muted-faint">  -d</span>{" "}
              <span className="text-foreground/70">&apos;{`{"model": "llama-3.1-70b"}`}&apos;</span>
            </pre>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border py-8">
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <p className="mb-5 text-xs uppercase tracking-[0.15em] text-muted-faint">
            Trusted by developers building on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Solana Foundation", "Helius", "Metaplex", "Phantom", "Jupiter"].map((name) => (
              <span
                key={name}
                className="font-[family-name:var(--font-display)] text-sm font-semibold text-border transition-colors hover:text-muted-faint"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview — Full Width Visual */}
      <section className="py-24">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
            {/* Mock dashboard header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                  Model<span className="text-primary">X</span>
                </span>
                <span className="h-4 w-px bg-border" />
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-faint">
                  Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-success/10 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-success">
                  Live
                </span>
                <span className="text-xs text-muted-faint">2.4 SOL earned today</span>
              </div>
            </div>

            {/* Mock content */}
            <div className="p-6">
              {/* Stats row */}
              <div className="mb-6 grid grid-cols-4 gap-3">
                {[
                  { label: "API Calls", value: "1.2M", trend: "+12%" },
                  { label: "Revenue", value: "2.4 SOL", trend: "+8%" },
                  { label: "Models", value: "3", trend: "" },
                  { label: "Avg Latency", value: "142ms", trend: "-15ms" },
                ].map((s) => (
                  <div key={s.label} className="rounded border border-border bg-background p-3">
                    <div className="text-[10px] text-muted-faint">{s.label}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                        {s.value}
                      </span>
                      {s.trend && (
                        <span className="text-[10px] text-success">{s.trend}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock model list */}
              <div className="space-y-2">
                {[
                  { name: "Llama 3.1 70B", calls: "847K", revenue: "1.69 SOL", status: "active" },
                  { name: "Whisper v3", calls: "312K", revenue: "0.31 SOL", status: "active" },
                  { name: "SDXL Turbo", calls: "89K", revenue: "0.45 SOL", status: "active" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center justify-between rounded border border-border bg-background px-4 py-2.5">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-success" />
                      <span className="font-[family-name:var(--font-mono)] text-xs text-foreground">
                        {m.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
                        {m.calls} calls
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-xs text-primary">
                        {m.revenue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-16">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Asymmetric Bento */}
      <section className="py-24">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
              Everything you need
            </h2>
            <p className="mx-auto max-w-[400px] text-sm text-muted">
              From upload to monetization. The full lifecycle, on-chain.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Large card — spans 2 cols */}
            <div className="col-span-2 rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors hover:border-border-strong">
              <Zap className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                Auto-Benchmark
              </h3>
              <p className="max-w-[400px] text-sm leading-relaxed text-muted">
                Every model is tested against standardized benchmarks. Latency, accuracy, cost-efficiency — scored and ranked on-chain. No manual testing required.
              </p>
            </div>

            {/* Small card */}
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors hover:border-border-strong">
              <Code2 className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
                API Gateway
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                One endpoint. Every model. Copy-paste ready.
              </p>
            </div>

            {/* Small card */}
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors hover:border-border-strong">
              <Shield className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
                On-Chain Reputation
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Immutable ratings on Solana. No faking performance.
              </p>
            </div>

            {/* Large card — spans 2 cols */}
            <div className="col-span-2 rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors hover:border-border-strong">
              <BarChart3 className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                Token Micropayment
              </h3>
              <p className="max-w-[400px] text-sm leading-relaxed text-muted">
                Pay per API call in SOL. No subscriptions, no minimums. Use a model once, pay once. Developer earns instantly to wallet.
              </p>
            </div>
          </div>

          {/* Bottom row — 3 equal */}
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              { icon: Globe, title: "Open Ecosystem", desc: "Anyone can upload. Anyone can access. No gatekeepers." },
              { icon: Lock, title: "Zero-Trust", desc: "Smart contract escrow. Funds locked until API call completes." },
              { icon: Zap, title: "Instant Deploy", desc: "Upload model → get listed in minutes. No review queue." },
            ].map((f) => (
              <div key={f.title} className="rounded-[var(--radius-md)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <f.icon className="mb-3 h-4 w-4 text-primary" />
                <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works — Alternating Left/Right */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
              How it works
            </h2>
            <p className="mx-auto max-w-[300px] text-sm text-muted">
              Three steps. No middleman.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 — Left */}
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:text-left">
              <div className="flex-1">
                <div className="mb-3 font-[family-name:var(--font-mono)] text-5xl font-bold text-border">
                  01
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                  Upload
                </h3>
                <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                  Push your model to IPFS. Set a price per API call. Get listed on-chain in minutes.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="font-[family-name:var(--font-mono)] text-[13px] text-foreground/70">
                  <span className="text-muted-faint">$</span> modelx upload{" "}
                  <span className="text-primary">./my-model</span>
                  <br />
                  <span className="text-muted-faint">→</span> IPFS: Qm...abc
                  <br />
                  <span className="text-muted-faint">→</span> Solana: Tx...xyz
                  <br />
                  <span className="text-muted-faint">→</span> Listed ✓
                </div>
              </div>
            </div>

            {/* Step 2 — Right */}
            <div className="flex flex-col items-center gap-8 sm:flex-row-reverse sm:text-left">
              <div className="flex-1">
                <div className="mb-3 font-[family-name:var(--font-mono)] text-5xl font-bold text-border">
                  02
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                  Benchmark
                </h3>
                <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                  Auto-benchmark runs standardized tests. Your model gets a performance score and on-chain ranking.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="space-y-3">
                  {[
                    { label: "Latency", value: "142ms", bar: "85%" },
                    { label: "Accuracy", value: "94.2%", bar: "94%" },
                    { label: "Cost Efficiency", value: "A+", bar: "92%" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="mb-1 flex justify-between text-[11px]">
                        <span className="text-muted-faint">{b.label}</span>
                        <span className="font-[family-name:var(--font-mono)] text-foreground">
                          {b.value}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: b.bar }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 — Left */}
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:text-left">
              <div className="flex-1">
                <div className="mb-3 font-[family-name:var(--font-mono)] text-5xl font-bold text-border">
                  03
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                  Earn
                </h3>
                <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                  Developers call your model via API. You earn SOL per call. Withdraw to your wallet anytime.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="space-y-2">
                  {[
                    { model: "Llama 3.1 70B", calls: "2.4K today", earning: "+0.0048 SOL" },
                    { model: "Whisper v3", calls: "890 today", earning: "+0.0009 SOL" },
                    { model: "SDXL Turbo", calls: "156 today", earning: "+0.0008 SOL" },
                  ].map((e) => (
                    <div key={e.model} className="flex items-center justify-between rounded border border-border bg-background px-3 py-2">
                      <span className="font-[family-name:var(--font-mono)] text-[11px] text-foreground">
                        {e.model}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-faint">{e.calls}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[11px] text-success">
                          {e.earning}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Models */}
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
            Trending models
          </h2>
          <p className="mb-10 text-sm text-muted">
            Most accessed this week on Solana mainnet.
          </p>

          <div className="space-y-3">
            {featuredModels.map((model) => (
              <Link
                key={model.name}
                href={`/model/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface p-5 text-left transition-all hover:border-border-strong"
              >
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                      {model.name}
                    </span>
                    <span className="rounded bg-primary-soft px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-primary">
                      {model.task}
                    </span>
                  </div>
                  <div className="text-xs text-muted-faint">
                    by {model.creator} · {model.calls} calls
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 text-xs text-warning">
                    <Star className="h-3 w-3 fill-current" />
                    {model.rating}
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-sm font-medium text-foreground">
                    {model.price}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-faint transition-colors group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/marketplace"
            className="mt-8 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            View all models <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-[600px] px-6 text-center lg:px-10">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
            Start building today
          </h2>
          <p className="mb-8 text-sm text-muted">
            Deploy your first model in under 5 minutes. No credit card.
            Just SOL in your wallet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
            >
              Upload a Model
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-transparent px-6 py-3 text-sm text-muted transition-all hover:border-border-strong hover:text-foreground"
            >
              Explore API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
            Model<span className="text-primary">X</span>
          </span>
          <div className="mb-4 flex justify-center gap-6">
            {["GitHub", "Discord", "Twitter"].map((link) => (
              <span
                key={link}
                className="cursor-pointer text-xs text-muted-faint transition-colors hover:text-muted"
              >
                {link}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-faint">
            © 2026 ModelX. Built on Solana.
          </span>
        </div>
      </footer>
    </>
  );
}
