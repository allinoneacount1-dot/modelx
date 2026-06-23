"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search, Filter, Star, ArrowRight } from "lucide-react";

const categories = [
  "All",
  "Text Generation",
  "Image Generation",
  "Speech-to-Text",
  "Code",
  "Embeddings",
  "Translation",
];

const models = [
  {
    name: "Llama 3.1 70B",
    creator: "meta-ai",
    task: "Text Generation",
    price: "0.002 SOL",
    rating: 4.8,
    calls: "1.2M",
    description: "General-purpose text generation with 70B parameters.",
  },
  {
    name: "Whisper v3",
    creator: "openai",
    task: "Speech-to-Text",
    price: "0.001 SOL",
    rating: 4.9,
    calls: "890K",
    description: "Multilingual speech recognition with near-human accuracy.",
  },
  {
    name: "Stable Diffusion XL",
    creator: "stability",
    task: "Image Generation",
    price: "0.005 SOL",
    rating: 4.7,
    calls: "2.1M",
    description: "High-quality image generation from text prompts.",
  },
  {
    name: "Claude 3.5 Sonnet",
    creator: "anthropic",
    task: "Text Generation",
    price: "0.003 SOL",
    rating: 4.9,
    calls: "3.4M",
    description: "Advanced reasoning and code generation capabilities.",
  },
  {
    name: "Mistral Large",
    creator: "mistral",
    task: "Text Generation",
    price: "0.002 SOL",
    rating: 4.6,
    calls: "567K",
    description: "Fast, efficient text generation with 128K context.",
  },
  {
    name: "CodeLlama 34B",
    creator: "meta-ai",
    task: "Code",
    price: "0.002 SOL",
    rating: 4.7,
    calls: "1.8M",
    description: "Specialized code generation and completion.",
  },
  {
    name: "BGE Embeddings",
    creator: "baidu",
    task: "Embeddings",
    price: "0.0005 SOL",
    rating: 4.5,
    calls: "4.2M",
    description: "High-quality text embeddings for search and RAG.",
  },
  {
    name: "NLLB-200",
    creator: "meta-ai",
    task: "Translation",
    price: "0.001 SOL",
    rating: 4.4,
    calls: "234K",
    description: "No Language Left Behind — 200 language translation.",
  },
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = models.filter((model) => {
    const matchesCategory =
      selectedCategory === "All" || model.task === selectedCategory;
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
          {/* Header */}
          <div className="mb-10">
            <h1 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground">
              Marketplace
            </h1>
            <p className="mx-auto max-w-[400px] text-sm text-muted">
              Browse and access AI models via API. Pay per call in SOL.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-faint" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-[var(--radius-sm)] border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder-muted-faint outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-[var(--radius-full)] px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-transparent text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Model List */}
          <div className="space-y-3">
            {filteredModels.map((model) => (
              <Link
                key={model.name}
                href={`/model/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 text-left transition-all hover:border-border-strong"
              >
                <div className="flex-1 min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                      {model.name}
                    </span>
                    <span className="shrink-0 rounded bg-primary-soft px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-primary">
                      {model.task}
                    </span>
                  </div>
                  <p className="mb-1 text-xs text-muted-faint truncate">
                    {model.description}
                  </p>
                  <div className="text-[11px] text-muted-faint">
                    by {model.creator} · {model.calls} calls
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-warning">
                      <Star className="h-3 w-3 fill-current" />
                      {model.rating}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-mono)] text-sm font-medium text-foreground">
                      {model.price}
                    </div>
                    <div className="text-[10px] text-muted-faint">per call</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-faint transition-colors group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm text-muted">No models found.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
