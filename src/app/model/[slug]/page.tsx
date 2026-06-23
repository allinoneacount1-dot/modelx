import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  Star,
  Clock,
  Cpu,
  Zap,
  Copy,
  ExternalLink,
} from "lucide-react";

export default async function ModelDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const model = {
    name: slug
      .split("-")
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    creator: "meta-ai",
    task: "Text Generation",
    price: "0.002 SOL",
    rating: 4.8,
    calls: "1,247,893",
    description:
      "Llama 3.1 70B is a general-purpose large language model optimized for text generation, reasoning, and code tasks. Fine-tuned for API deployment with sub-200ms latency.",
    latency: "142ms",
    accuracy: "94.2%",
    context: "128K tokens",
    endpoint: "https://api.modelx.sol/v1/llama-3.1-70b",
  };

  const reviews = [
    {
      user: "dev.sol",
      rating: 5,
      text: "Best price-to-performance ratio. Switched from OpenAI and saving 80%.",
      date: "2 days ago",
    },
    {
      user: "ai-builder",
      rating: 4,
      text: "Solid for production. Latency is consistent. Occasional quirks with edge cases.",
      date: "1 week ago",
    },
    {
      user: "research-lab",
      rating: 5,
      text: "Use this for our RAG pipeline. Handles 128K context beautifully.",
      date: "2 weeks ago",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          {/* Back */}
          <div className="mb-8 text-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Marketplace
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="rounded bg-primary-soft px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] text-primary">
                {model.task}
              </span>
              <span className="flex items-center gap-1 text-xs text-warning">
                <Star className="h-3 w-3 fill-current" />
                {model.rating}
              </span>
              <span className="text-xs text-muted-faint">
                {model.calls} calls
              </span>
            </div>
            <h1 className="mb-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
              {model.name}
            </h1>
            <p className="text-sm text-muted">by {model.creator}</p>
          </div>

          {/* Description */}
          <div className="mb-10 text-center">
            <p className="mx-auto max-w-[560px] text-sm leading-relaxed text-muted">
              {model.description}
            </p>
          </div>

          {/* Benchmarks */}
          <div className="mb-10">
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              Performance
            </h2>
            <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-4">
              {[
                { icon: Clock, label: "Latency", value: model.latency },
                { icon: Cpu, label: "Accuracy", value: model.accuracy },
                { icon: Zap, label: "Context", value: model.context },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-md)] border border-border bg-surface p-4 text-center"
                >
                  <stat.icon className="mx-auto mb-2 h-4 w-4 text-primary" />
                  <div className="font-[family-name:var(--font-mono)] text-lg font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-faint">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-10 text-center">
            <div className="mx-auto max-w-[400px] rounded-[var(--radius-lg)] border border-border bg-surface p-8">
              <div className="mb-1 text-xs text-muted-faint">
                Price per call
              </div>
              <div className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground">
                {model.price}
              </div>
              <button className="mb-3 w-full rounded-[var(--radius-sm)] bg-primary py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">
                Try This Model
              </button>
              <button className="w-full rounded-[var(--radius-sm)] border border-border bg-transparent py-3 text-sm text-muted transition-all hover:border-border-strong hover:text-foreground">
                View Full Docs
              </button>
            </div>
          </div>

          {/* API Example */}
          <div className="mb-10">
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              Quick Start
            </h2>
            <div className="mx-auto max-w-[600px] rounded-[var(--radius-md)] border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="font-[family-name:var(--font-mono)] text-xs text-muted-faint">
                  curl
                </span>
                <button className="text-muted-faint transition-colors hover:text-muted">
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <pre className="overflow-x-auto p-4 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed text-foreground/80">
{`curl -X POST ${model.endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "Hello, world!",
    "max_tokens": 256
  }'`}
              </pre>
            </div>
          </div>

          {/* Info Grid */}
          <div className="mb-10">
            <div className="mx-auto grid max-w-[600px] grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { label: "Endpoint", value: "REST API" },
                { label: "Auth", value: "API Key" },
                { label: "Rate Limit", value: "1,000 req/min" },
                { label: "Uptime", value: "99.97%" },
                { label: "Network", value: "Solana Mainnet" },
                { label: "Created", value: "2026-03-15" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--radius-sm)] border border-border bg-surface p-3 text-center"
                >
                  <div className="mb-1 text-[10px] text-muted-faint">
                    {item.label}
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-xs font-medium text-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
              Reviews
            </h2>
            <div className="mx-auto max-w-[600px] space-y-3">
              {reviews.map((review) => (
                <div
                  key={review.user}
                  className="rounded-[var(--radius-md)] border border-border bg-surface p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-foreground">
                        {review.user}
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-warning">
                        <Star className="h-2.5 w-2.5 fill-current" />
                        {review.rating}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-faint">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explorer Link */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-muted-faint transition-colors hover:text-muted"
            >
              <ExternalLink className="h-3 w-3" />
              View on Solana Explorer
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
