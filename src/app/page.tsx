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
  { name: "Llama 3.1 70B", creator: "meta-ai", task: "Text Generation", price: "0.002 SOL", rating: 4.8, calls: "1.2M" },
  { name: "Whisper v3", creator: "openai", task: "Speech-to-Text", price: "0.001 SOL", rating: 4.9, calls: "890K" },
  { name: "Stable Diffusion XL", creator: "stability", task: "Image Generation", price: "0.005 SOL", rating: 4.7, calls: "2.1M" },
  { name: "Claude 3.5 Sonnet", creator: "anthropic", task: "Text Generation", price: "0.003 SOL", rating: 4.9, calls: "3.4M" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-[160px] pb-[96px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1080px] px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted">
              Built on Solana · Mainnet Live
            </span>
          </div>

          <h1
            className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
            style={{ textWrap: "balance" as const }}
          >
            The marketplace
            <br />
            for AI models.
          </h1>

          <p
            className="mx-auto mb-10 max-w-[480px] text-[clamp(1rem,2vw,1.125rem)] leading-[1.7] text-muted"
            style={{ textWrap: "pretty" as const }}
          >
            Upload your model. Get benchmarked. Earn from every API call.
            Access thousands of models with Solana micropayments.
          </p>

          <div className="mb-14 flex items-center justify-center gap-3">
            <Link
              href="/marketplace"
              className="group inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-7 py-3 text-[13px] font-medium text-primary-foreground transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Browse Models
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-transparent px-7 py-3 text-[13px] text-muted transition-all duration-150 hover:border-border-strong hover:text-foreground"
            >
              Start Building
            </Link>
          </div>

          {/* Code snippet */}
          <div className="mx-auto max-w-[520px] overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface text-left">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <Terminal className="h-3.5 w-3.5 text-muted-faint" />
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-faint">
                quickstart.sh
              </span>
              <div className="ml-auto cursor-pointer text-muted-faint transition-colors duration-150 hover:text-muted">
                <Copy className="h-3.5 w-3.5" />
              </div>
            </div>
            <pre className="overflow-x-auto p-5 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed">
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

      {/* ─── Trust Bar ─── */}
      <section className="border-y border-border py-10">
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-faint">
            Trusted by developers building on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["Solana Foundation", "Helius", "Metaplex", "Phantom", "Jupiter"].map((name) => (
              <span
                key={name}
                className="font-[family-name:var(--font-display)] text-[15px] font-medium text-border transition-colors duration-150 hover:text-muted-faint"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dashboard Preview ─── */}
      <section className="py-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-6 py-3">
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-display)] text-[13px] font-semibold">
                  Model<span className="text-primary">X</span>
                </span>
                <span className="h-4 w-px bg-border" />
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-faint">
                  Dashboard
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded bg-success/10 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium text-success">
                  Live
                </span>
                <span className="text-[12px] text-muted-faint">2.4 SOL earned today</span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8 grid grid-cols-4 gap-4">
                {[
                  { label: "API Calls", value: "1.2M", trend: "+12%" },
                  { label: "Revenue", value: "2.4 SOL", trend: "+8%" },
                  { label: "Models", value: "3", trend: "" },
                  { label: "Avg Latency", value: "142ms", trend: "-15ms" },
                ].map((s) => (
                  <div key={s.label} className="rounded-[var(--radius-sm)] border border-border bg-background p-4">
                    <div className="mb-1 text-[11px] text-muted-faint">{s.label}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                        {s.value}
                      </span>
                      {s.trend && <span className="text-[11px] text-success">{s.trend}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { name: "Llama 3.1 70B", calls: "847K", revenue: "1.69 SOL" },
                  { name: "Whisper v3", calls: "312K", revenue: "0.31 SOL" },
                  { name: "SDXL Turbo", calls: "89K", revenue: "0.45 SOL" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center justify-between rounded-[var(--radius-sm)] border border-border bg-background px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-success" />
                      <span className="font-[family-name:var(--font-mono)] text-[13px]">{m.name}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className="font-[family-name:var(--font-mono)] text-[13px] text-muted">{m.calls} calls</span>
                      <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium text-primary">{m.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="border-y border-border py-[96px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-[13px] text-muted-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features (Bento) ─── */}
      <section className="py-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="mx-auto max-w-[380px] text-[15px] text-muted">
              From upload to monetization. The full lifecycle, on-chain.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-[var(--radius-md)] border border-border bg-surface p-10 transition-colors duration-150 hover:border-border-strong">
              <Zap className="mb-5 h-6 w-6 text-primary" />
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-[20px] font-semibold">
                Auto-Benchmark
              </h3>
              <p className="max-w-[420px] text-[15px] leading-[1.7] text-muted">
                Every model is tested against standardized benchmarks. Latency, accuracy, cost-efficiency — scored and ranked on-chain. No manual testing required.
              </p>
            </div>

            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors duration-150 hover:border-border-strong">
              <Code2 className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-semibold">
                API Gateway
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted">
                One endpoint. Every model. Copy-paste ready.
              </p>
            </div>

            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 transition-colors duration-150 hover:border-border-strong">
              <Shield className="mb-4 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-semibold">
                On-Chain Reputation
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted">
                Immutable ratings on Solana. No faking performance.
              </p>
            </div>

            <div className="col-span-2 rounded-[var(--radius-md)] border border-border bg-surface p-10 transition-colors duration-150 hover:border-border-strong">
              <BarChart3 className="mb-5 h-6 w-6 text-primary" />
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-[20px] font-semibold">
                Token Micropayment
              </h3>
              <p className="max-w-[420px] text-[15px] leading-[1.7] text-muted">
                Pay per API call in SOL. No subscriptions, no minimums. Use a model once, pay once. Developer earns instantly to wallet.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {[
              { icon: Globe, title: "Open Ecosystem", desc: "Anyone can upload. Anyone can access. No gatekeepers." },
              { icon: Lock, title: "Zero-Trust", desc: "Smart contract escrow. Funds locked until API call completes." },
              { icon: Zap, title: "Instant Deploy", desc: "Upload model → get listed in minutes. No review queue." },
            ].map((f) => (
              <div key={f.title} className="rounded-[var(--radius-md)] border border-border bg-surface p-7 transition-colors duration-150 hover:border-border-strong">
                <f.icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-[15px] font-semibold">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it Works (Alternating) ─── */}
      <section className="border-y border-border py-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              How it works
            </h2>
            <p className="text-[15px] text-muted">Three steps. No middleman.</p>
          </div>

          <div className="space-y-20">
            {/* 01 */}
            <div className="flex flex-col items-center gap-10 sm:flex-row">
              <div className="flex-1">
                <div className="mb-4 font-[family-name:var(--font-mono)] text-[28px] font-bold text-border">
                  01
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-semibold">
                  Upload
                </h3>
                <p className="max-w-[360px] text-[15px] leading-[1.7] text-muted">
                  Push your model to IPFS. Set a price per API call. Get listed on-chain in minutes.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-8">
                <div className="font-[family-name:var(--font-mono)] text-[13px] leading-loose text-foreground/70">
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

            {/* 02 */}
            <div className="flex flex-col items-center gap-10 sm:flex-row-reverse">
              <div className="flex-1">
                <div className="mb-4 font-[family-name:var(--font-mono)] text-[28px] font-bold text-border">
                  02
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-semibold">
                  Benchmark
                </h3>
                <p className="max-w-[360px] text-[15px] leading-[1.7] text-muted">
                  Auto-benchmark runs standardized tests. Your model gets a performance score and on-chain ranking.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-8">
                <div className="space-y-4">
                  {[
                    { label: "Latency", value: "142ms", bar: "85%" },
                    { label: "Accuracy", value: "94.2%", bar: "94%" },
                    { label: "Cost Efficiency", value: "A+", bar: "92%" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="mb-2 flex justify-between text-[12px]">
                        <span className="text-muted-faint">{b.label}</span>
                        <span className="font-[family-name:var(--font-mono)]">{b.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-border">
                        <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: b.bar }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 */}
            <div className="flex flex-col items-center gap-10 sm:flex-row">
              <div className="flex-1">
                <div className="mb-4 font-[family-name:var(--font-mono)] text-[28px] font-bold text-border">
                  03
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-semibold">
                  Earn
                </h3>
                <p className="max-w-[360px] text-[15px] leading-[1.7] text-muted">
                  Developers call your model via API. You earn SOL per call. Withdraw to your wallet anytime.
                </p>
              </div>
              <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-8">
                <div className="space-y-3">
                  {[
                    { model: "Llama 3.1 70B", calls: "2.4K today", earning: "+0.0048 SOL" },
                    { model: "Whisper v3", calls: "890 today", earning: "+0.0009 SOL" },
                    { model: "SDXL Turbo", calls: "156 today", earning: "+0.0008 SOL" },
                  ].map((e) => (
                    <div key={e.model} className="flex items-center justify-between rounded-[var(--radius-sm)] border border-border bg-background px-4 py-3">
                      <span className="font-[family-name:var(--font-mono)] text-[13px]">{e.model}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-[12px] text-muted-faint">{e.calls}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[13px] text-success">{e.earning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trending Models ─── */}
      <section className="py-[128px]">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
            Trending models
          </h2>
          <p className="mb-12 text-[15px] text-muted">
            Most accessed this week on Solana mainnet.
          </p>

          <div className="space-y-4">
            {featuredModels.map((model) => (
              <Link
                key={model.name}
                href={`/model/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface p-6 text-left transition-all duration-150 hover:border-border-strong"
              >
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold">
                      {model.name}
                    </span>
                    <span className="rounded bg-primary-soft px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium text-primary">
                      {model.task}
                    </span>
                  </div>
                  <div className="text-[12px] text-muted-faint">
                    by {model.creator} · {model.calls} calls
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1 text-[13px] text-warning">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {model.rating}
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-[14px] font-medium">
                    {model.price}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-faint transition-colors duration-150 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/marketplace"
            className="mt-10 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors duration-150 hover:text-primary/80"
          >
            View all models <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-y border-border py-[128px]">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
            <Zap className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mb-5 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
            Start building today
          </h2>
          <p className="mb-10 text-[15px] text-muted">
            Deploy your first model in under 5 minutes. No credit card.
            Just SOL in your wallet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-7 py-3 text-[13px] font-medium text-primary-foreground transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Upload a Model
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-transparent px-7 py-3 text-[13px] text-muted transition-all duration-150 hover:border-border-strong hover:text-foreground"
            >
              Explore API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-14">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid gap-10 sm:grid-cols-4">
            <div>
              <span className="mb-3 inline-block font-[family-name:var(--font-display)] text-[17px] font-bold">
                Model<span className="text-primary">X</span>
              </span>
              <p className="text-[13px] leading-[1.7] text-muted-faint">
                The decentralized marketplace for AI models on Solana.
              </p>
            </div>
            {[
              { title: "Product", links: ["Marketplace", "Dashboard", "API Docs", "Pricing"] },
              { title: "Developers", links: ["Documentation", "API Reference", "SDKs", "Status"] },
              { title: "Company", links: ["About", "Blog", "Terms", "Privacy"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  {col.title}
                </h4>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <span key={link} className="block cursor-pointer text-[13px] text-muted-faint transition-colors duration-150 hover:text-muted">
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <span className="text-[12px] text-muted-faint">© 2026 ModelX. Built on Solana.</span>
            <div className="flex gap-6">
              {["GitHub", "Discord", "Twitter"].map((link) => (
                <span key={link} className="cursor-pointer text-[12px] text-muted-faint transition-colors duration-150 hover:text-muted">
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
