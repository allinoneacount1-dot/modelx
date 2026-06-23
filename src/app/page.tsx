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
} from "lucide-react";

const stats = [
  { value: "2,847", label: "Models Deployed" },
  { value: "12.4M", label: "API Calls / Month" },
  { value: "99.97%", label: "Uptime" },
  { value: "~0.001", label: "SOL per Call" },
];

const features = [
  {
    icon: Zap,
    title: "Auto-Benchmark",
    description:
      "Every model is tested against standardized benchmarks. Latency, accuracy, cost-efficiency — scored and ranked on-chain.",
  },
  {
    icon: Code2,
    title: "API Gateway",
    description:
      "One endpoint, every model. Plug in your API key and start making calls. No setup, no config files.",
  },
  {
    icon: Shield,
    title: "On-Chain Reputation",
    description:
      "Ratings and usage history are immutable on Solana. No faking performance, no deleting bad reviews.",
  },
  {
    icon: BarChart3,
    title: "Token Micropayment",
    description:
      "Pay per API call in SOL. No subscriptions, no minimums. Use a model once, pay once.",
  },
  {
    icon: Globe,
    title: "Open Ecosystem",
    description:
      "Anyone can upload a model. Anyone can access it. Decentralized marketplace with no gatekeepers.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    description:
      "Smart contract escrow. Funds locked until the API call completes. No trust required.",
  },
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

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gradient orb */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[800px] px-6 pt-24 pb-16 text-center lg:px-10">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/60" />
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted">
              Built on Solana
            </span>
            <span className="h-px w-8 bg-primary/60" />
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

          {/* Sub */}
          <p
            className="mx-auto mb-4 max-w-[520px] text-lg leading-relaxed text-muted"
            style={{ textWrap: "pretty" as const }}
          >
            Upload your model. Get benchmarked. Earn from every API call.
            Access thousands of models with Solana micropayments.
          </p>

          {/* CTAs */}
          <div className="mb-14 flex items-center justify-center gap-3">
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

          {/* Stats */}
          <div className="grid grid-cols-2 justify-center gap-x-14 gap-y-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[1000px] px-6 text-center lg:px-10">
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
            Everything you need
          </h2>
          <p className="mx-auto mb-14 max-w-[400px] text-sm leading-relaxed text-muted">
            From upload to monetization. The full lifecycle, on-chain.
          </p>

          <div className="grid gap-[1px] bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background p-8 transition-colors hover:bg-surface"
              >
                <feature.icon className="mx-auto mb-4 h-5 w-5 text-primary" />
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
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
                className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-all hover:border-border-strong"
              >
                <div className="flex-1 text-left">
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
                <div className="flex items-center gap-6 text-right">
                  <div className="text-xs text-warning">★ {model.rating}</div>
                  <div className="font-[family-name:var(--font-mono)] text-sm font-medium text-foreground">
                    {model.price}
                  </div>
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

      {/* How it Works */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
            How it works
          </h2>
          <p className="mx-auto mb-14 max-w-[300px] text-sm leading-relaxed text-muted">
            Three steps. No middleman.
          </p>

          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload",
                desc: "Push your model to IPFS. Set a price per API call. Get listed on-chain.",
              },
              {
                step: "02",
                title: "Benchmark",
                desc: "Auto-benchmark runs standardized tests. Your model gets a performance score.",
              },
              {
                step: "03",
                title: "Earn",
                desc: "Developers call your model via API. You earn SOL per call. Withdraw anytime.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 font-[family-name:var(--font-mono)] text-4xl font-bold text-border">
                  {item.step}
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[700px] px-6 text-center lg:px-10">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-12 sm:p-16">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
              Start building today
            </h2>
            <p className="mx-auto mb-8 max-w-[380px] text-sm text-muted">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
              Model<span className="text-primary">X</span>
            </span>
            <div className="flex gap-6">
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
        </div>
      </footer>
    </>
  );
}
