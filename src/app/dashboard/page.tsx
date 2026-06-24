"use client";

import Navbar from "@/components/Navbar";
import { ArrowUpRight, TrendingUp, Zap, DollarSign, Activity, Upload, Settings, Key, BarChart3 } from "lucide-react";
import { useState } from "react";

const tabs = ["Overview", "Models", "API Keys", "Settings"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[96px] pb-[128px]">
        <div className="mx-auto max-w-[1080px] px-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
                Dashboard
              </h1>
              <p className="text-[14px] text-muted-faint">
                Welcome back. Your models are performing well today.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">
              <Upload className="h-4 w-4" />
              Upload Model
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-[13px] font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeTab === tab
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-faint hover:text-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Stats grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "API Calls (24h)", value: "12.4K", trend: "+12.3%", icon: Activity },
              { label: "Revenue (24h)", value: "2.4 SOL", trend: "+8.1%", icon: DollarSign },
              { label: "Active Models", value: "3", trend: "", icon: BarChart3 },
              { label: "Avg Latency", value: "142ms", trend: "-15ms", icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] text-muted-faint">{stat.label}</span>
                  <stat.icon className="h-3.5 w-3.5 text-muted-faint" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-[22px] font-bold">
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className={`text-[11px] font-medium ${stat.trend.startsWith("-") ? "text-success" : "text-success"}`}>
                      {stat.trend}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Revenue chart placeholder */}
          <div className="mb-8 rounded-[var(--radius-md)] border border-border bg-surface p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-[family-name:var(--font-display)] text-[15px] font-semibold">Revenue</h3>
              <div className="flex gap-2">
                {["7D", "30D", "90D"].map((period) => (
                  <button
                    key={period}
                    className="rounded px-3 py-1 text-[11px] text-muted-faint transition-colors hover:text-foreground data-[active=true]:bg-surface-high data-[active=true]:text-foreground"
                    data-active={period === "7D"}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex h-[200px] items-end gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t bg-primary/20 transition-all duration-300 hover:bg-primary/30"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[11px] text-muted-faint">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Models table */}
          <div className="rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-6 py-4">
              <h3 className="font-[family-name:var(--font-display)] text-[15px] font-semibold">Your Models</h3>
            </div>
            <div className="divide-y divide-border">
              {[
                { name: "Llama 3.1 70B", status: "live", calls: "8.2K", revenue: "1.64 SOL", latency: "142ms" },
                { name: "Whisper v3", status: "live", calls: "3.1K", revenue: "0.31 SOL", latency: "89ms" },
                { name: "SDXL Turbo", status: "live", calls: "1.1K", revenue: "0.45 SOL", latency: "340ms" },
              ].map((model) => (
                <div key={model.name} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-surface-high">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    <span className="font-[family-name:var(--font-mono)] text-[13px]">{model.name}</span>
                  </div>
                  <div className="flex items-center gap-10">
                    <span className="text-[12px] text-muted-faint">{model.calls} calls</span>
                    <span className="text-[12px] text-muted-faint">{model.latency}</span>
                    <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium text-primary">{model.revenue}</span>
                    <button className="text-muted-faint transition-colors hover:text-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Key, title: "API Keys", desc: "Manage your API keys and access tokens", action: "View Keys" },
              { icon: Settings, title: "Settings", desc: "Configure payout wallet and notifications", action: "Open Settings" },
              { icon: TrendingUp, title: "Analytics", desc: "Detailed breakdown of model performance", action: "View Analytics" },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-md)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <item.icon className="mb-4 h-5 w-5 text-primary" />
                <h4 className="mb-1 font-[family-name:var(--font-display)] text-[15px] font-semibold">{item.title}</h4>
                <p className="mb-4 text-[13px] text-muted-faint">{item.desc}</p>
                <button className="text-[13px] font-medium text-primary transition-colors hover:text-primary/80">
                  {item.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
