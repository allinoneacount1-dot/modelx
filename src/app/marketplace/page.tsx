"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search, SlidersHorizontal, Star, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "text", label: "Text" },
  { id: "image", label: "Image" },
  { id: "audio", label: "Audio" },
  { id: "vision", label: "Vision" },
  { id: "multimodal", label: "Multimodal" },
];

const models = [
  { name: "Llama 3.1 70B", creator: "meta-ai", task: "Text Generation", price: "0.002 SOL", rating: 4.8, calls: "1.2M", latency: "142ms", category: "text" },
  { name: "Whisper v3", creator: "openai", task: "Speech-to-Text", price: "0.001 SOL", rating: 4.9, calls: "890K", latency: "89ms", category: "audio" },
  { name: "Stable Diffusion XL", creator: "stability", task: "Image Generation", price: "0.005 SOL", rating: 4.7, calls: "2.1M", latency: "340ms", category: "image" },
  { name: "Claude 3.5 Sonnet", creator: "anthropic", task: "Text Generation", price: "0.003 SOL", rating: 4.9, calls: "3.4M", latency: "156ms", category: "text" },
  { name: "GPT-4o Mini", creator: "openai", task: "Text Generation", price: "0.002 SOL", rating: 4.6, calls: "1.8M", latency: "112ms", category: "text" },
  { name: "Gemini 1.5 Flash", creator: "google", task: "Multimodal", price: "0.002 SOL", rating: 4.7, calls: "920K", latency: "98ms", category: "multimodal" },
  { name: "CLIP ViT-L/14", creator: "openai", task: "Image-Text", price: "0.001 SOL", rating: 4.5, calls: "450K", latency: "67ms", category: "vision" },
  { name: "TTS-1 HD", creator: "openai", task: "Text-to-Speech", price: "0.003 SOL", rating: 4.4, calls: "340K", latency: "210ms", category: "audio" },
  { name: "LLaVA 1.6", creator: "llava", task: "Vision-Language", price: "0.004 SOL", rating: 4.6, calls: "680K", latency: "178ms", category: "vision" },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = models.filter((m) => {
    const matchesCategory = activeCategory === "all" || m.category === activeCategory;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[96px] pb-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="mb-10">
            <h1 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              Marketplace
            </h1>
            <p className="text-[15px] text-muted">
              Browse, compare, and integrate AI models on Solana.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-[360px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-faint" />
              <input
                type="text"
                placeholder="Search models or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-[var(--radius-sm)] border border-border bg-surface pl-10 pr-4 py-2.5 text-[13px] text-foreground placeholder:text-muted-faint focus:border-border-strong focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2.5 text-[13px] text-muted transition-colors hover:border-border-strong hover:text-foreground">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-all duration-150 ${
                  activeCategory === c.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-transparent text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Model grid */}
          <div className="space-y-3">
            {filtered.map((model) => (
              <Link
                key={model.name}
                href={`/model/${model.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface p-6 text-left transition-all duration-150 hover:border-border-strong"
              >
                <div className="flex-1">
                  <div className="mb-1.5 flex items-center gap-2 flex-wrap">
                    <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold">
                      {model.name}
                    </span>
                    <span className="rounded bg-primary-soft px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium text-primary">
                      {model.task}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-muted-faint">
                    <span>by {model.creator}</span>
                    <span>·</span>
                    <span>{model.calls} calls</span>
                    <span>·</span>
                    <span>{model.latency} avg</span>
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

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[15px] text-muted-faint">No models found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
