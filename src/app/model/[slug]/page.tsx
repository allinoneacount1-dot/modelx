import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Star, Copy, ExternalLink, BarChart3, Zap, Clock } from "lucide-react";

// Mock data for the model detail page
const modelData: Record<string, {
  name: string;
  creator: string;
  task: string;
  price: string;
  rating: number;
  calls: string;
  latency: string;
  description: string;
  benchmarks: { label: string; value: string; bar: string }[];
  examples: { input: string; output: string }[];
}> = {
  "llama-3.1-70b": {
    name: "Llama 3.1 70B",
    creator: "meta-ai",
    task: "Text Generation",
    price: "0.002 SOL",
    rating: 4.8,
    calls: "1.2M",
    latency: "142ms",
    description: "Meta's most capable open-weight language model. 70B parameters, optimized for instruction following and code generation. Supports 128K context window.",
    benchmarks: [
      { label: "MMLU", value: "86.1%", bar: "86%" },
      { label: "HumanEval", value: "80.5%", bar: "80%" },
      { label: "MT-Bench", value: "8.9/10", bar: "89%" },
      { label: "Latency", value: "142ms", bar: "85%" },
    ],
    examples: [
      { input: "Explain quantum entanglement in one sentence.", output: "Quantum entanglement is a phenomenon where two particles become correlated so that measuring one instantly determines the state of the other, regardless of distance." },
      { input: "Write a Python function to find the longest common subsequence.", output: "def lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]" },
    ],
  },
};

const defaultModel = {
  name: "Model",
  creator: "creator",
  task: "General",
  price: "0.002 SOL",
  rating: 4.5,
  calls: "100K",
  latency: "150ms",
  description: "A high-performance AI model available on the ModelX marketplace. Access it via the unified API with Solana micropayments.",
  benchmarks: [
    { label: "Accuracy", value: "92.3%", bar: "92%" },
    { label: "Latency", value: "150ms", bar: "82%" },
    { label: "Cost Efficiency", value: "A", bar: "90%" },
    { label: "Throughput", value: "1.2K req/s", bar: "78%" },
  ],
  examples: [
    { input: "Sample input query here...", output: "The model generates a relevant response based on the input." },
  ],
};

export default function ModelDetail({ params }: { params: { slug: string } }) {
  const model = modelData[params.slug] || { ...defaultModel, name: params.slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()) };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[96px] pb-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <Link href="/marketplace" className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Marketplace
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            {/* Main content */}
            <div>
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 flex-wrap">
                  <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
                    {model.name}
                  </h1>
                  <span className="rounded bg-primary-soft px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[11px] font-medium text-primary">
                    {model.task}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-muted-faint">
                  <span>by {model.creator}</span>
                  <span className="flex items-center gap-1 text-warning">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {model.rating}
                  </span>
                  <span>{model.calls} calls</span>
                </div>
              </div>

              <p className="mb-10 max-w-[560px] text-[15px] leading-[1.7] text-muted">
                {model.description}
              </p>

              {/* Code example */}
              <div className="mb-10">
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-[17px] font-semibold">Quick Start</h3>
                <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-faint">Python</span>
                    <button className="text-muted-faint transition-colors hover:text-muted"><Copy className="h-3.5 w-3.5" /></button>
                  </div>
                  <pre className="overflow-x-auto p-5 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed">
{`import requests

response = requests.post(
    "https://api.modelx.sol/v1/chat",
    headers={"Authorization": "Bearer mx_sk_..."},
    json={
        "model": "${params.slug}",
        "messages": [{"role": "user", "content": "Hello!"}]
    }
)
print(response.json())`}
                  </pre>
                </div>
              </div>

              {/* Benchmarks */}
              <div>
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-[17px] font-semibold">Benchmarks</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {model.benchmarks.map((b) => (
                    <div key={b.label} className="rounded-[var(--radius-sm)] border border-border bg-surface p-5">
                      <div className="mb-3 flex justify-between text-[12px]">
                        <span className="text-muted-faint">{b.label}</span>
                        <span className="font-[family-name:var(--font-mono)] font-medium">{b.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-border">
                        <div className="h-full rounded-full bg-primary" style={{ width: b.bar }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-faint">
                  Pricing
                </div>
                <div className="mb-5 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-[28px] font-bold">{model.price}</span>
                  <span className="text-[13px] text-muted-faint">/ call</span>
                </div>
                <button className="mb-3 w-full rounded-[var(--radius-sm)] bg-primary py-3 text-[13px] font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                  Try Now
                </button>
                <button className="w-full rounded-[var(--radius-sm)] border border-border bg-transparent py-3 text-[13px] text-muted transition-colors hover:border-border-strong hover:text-foreground">
                  View Full Docs
                </button>
              </div>

              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="mb-4 space-y-3">
                  {[
                    { icon: Zap, label: "Latency", value: model.latency },
                    { icon: BarChart3, label: "Total Calls", value: model.calls },
                    { icon: Clock, label: "Avg Response", value: model.latency },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[13px] text-muted-faint">
                        <item.icon className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-[13px]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-faint">
                  API Endpoint
                </div>
                <div className="flex items-center gap-2 rounded bg-background px-3 py-2">
                  <span className="flex-1 truncate font-[family-name:var(--font-mono)] text-[12px] text-muted">
                    POST /v1/chat
                  </span>
                  <button className="text-muted-faint transition-colors hover:text-muted"><Copy className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
