"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Upload,
  BarChart3,
  Wallet,
  Settings,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "models", label: "My Models", icon: Upload },
  { id: "earnings", label: "Earnings", icon: Wallet },
  { id: "settings", label: "Settings", icon: Settings },
];

const myModels = [
  {
    name: "Sentiment Analyzer v2",
    task: "NLP",
    calls: "45,231",
    earnings: "0.09 SOL",
    status: "active",
    latency: "89ms",
  },
  {
    name: "Custom LoRA SD",
    task: "Image Gen",
    calls: "12,847",
    earnings: "0.06 SOL",
    status: "active",
    latency: "1.2s",
  },
  {
    name: "Code Review Bot",
    task: "Code",
    calls: "3,421",
    earnings: "0.01 SOL",
    status: "draft",
    latency: "234ms",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground">
              Dashboard
            </h1>
            <p className="text-sm text-muted">
              Manage your models and earnings.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex justify-center gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Upload CTA */}
              <div className="flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">
                  <Plus className="h-4 w-4" />
                  Upload Model
                </button>
              </div>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  {
                    label: "Total Calls",
                    value: "61,499",
                    change: "+12.3%",
                    up: true,
                  },
                  {
                    label: "Total Earnings",
                    value: "0.16 SOL",
                    change: "+8.7%",
                    up: true,
                  },
                  {
                    label: "Active Models",
                    value: "2",
                    change: "",
                    up: true,
                  },
                  {
                    label: "Avg Latency",
                    value: "156ms",
                    change: "-23ms",
                    up: true,
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[var(--radius-md)] border border-border bg-surface p-5"
                  >
                    <div className="mb-1 text-xs text-muted-faint">
                      {stat.label}
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                      {stat.change && (
                        <span
                          className={`flex items-center gap-0.5 text-xs ${
                            stat.up ? "text-success" : "text-error"
                          }`}
                        >
                          {stat.up ? (
                            <ArrowUpRight className="h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3" />
                          )}
                          {stat.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* API Key */}
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
                <div className="mb-3 text-xs text-muted-faint">API Key</div>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex-1 max-w-md rounded-[var(--radius-sm)] bg-background px-4 py-2.5 font-[family-name:var(--font-mono)] text-sm text-muted">
                    {showApiKey
                      ? "mx_sk_7f3a9b2e1d4c5f6a8b0c3d2e1f4a5b6c"
                      : "mx_sk_••••••••••••••••••••••••••••••••"}
                  </div>
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="rounded-[var(--radius-sm)] border border-border p-2.5 text-muted transition-colors hover:text-foreground"
                  >
                    {showApiKey ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                  <button className="rounded-[var(--radius-sm)] border border-border p-2.5 text-muted transition-colors hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
                  Recent API Calls
                </h3>
                <div className="overflow-hidden rounded-[var(--radius-md)] border border-border">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="px-4 py-3 font-medium text-muted-faint">
                          Model
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-faint">
                          Status
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-faint">
                          Latency
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-faint">
                          Cost
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-faint">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          model: "Sentiment Analyzer v2",
                          status: "200",
                          latency: "89ms",
                          cost: "0.0005 SOL",
                          time: "2m ago",
                        },
                        {
                          model: "Custom LoRA SD",
                          status: "200",
                          latency: "1.2s",
                          cost: "0.001 SOL",
                          time: "5m ago",
                        },
                        {
                          model: "Sentiment Analyzer v2",
                          status: "200",
                          latency: "92ms",
                          cost: "0.0005 SOL",
                          time: "8m ago",
                        },
                        {
                          model: "Custom LoRA SD",
                          status: "429",
                          latency: "-",
                          cost: "-",
                          time: "12m ago",
                        },
                      ].map((call, i) => (
                        <tr
                          key={i}
                          className="border-b border-border last:border-0"
                        >
                          <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-foreground">
                            {call.model}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                                call.status === "200"
                                  ? "bg-success/10 text-success"
                                  : "bg-error/10 text-error"
                              }`}
                            >
                              {call.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-muted">
                            {call.latency}
                          </td>
                          <td className="px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-muted">
                            {call.cost}
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-faint">
                            {call.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Models Tab */}
          {activeTab === "models" && (
            <div className="space-y-3">
              {myModels.map((model) => (
                <div
                  key={model.name}
                  className="flex items-center justify-between gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5"
                >
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                        {model.name}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                          model.status === "active"
                            ? "bg-success/10 text-success"
                            : "bg-warning/10 text-warning"
                        }`}
                      >
                        {model.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted-faint">
                      {model.task} · {model.latency} avg latency
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-mono)] text-sm text-foreground">
                      {model.calls} calls
                    </div>
                    <div className="font-[family-name:var(--font-mono)] text-xs text-primary">
                      {model.earnings}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === "earnings" && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 text-center">
                  <div className="mb-1 text-xs text-muted-faint">
                    Available Balance
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground">
                    0.16 SOL
                  </div>
                  <div className="mt-3 text-xs text-muted-faint">
                    ≈ $22.40 USD
                  </div>
                </div>
                <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 text-center">
                  <div className="mb-1 text-xs text-muted-faint">
                    Pending (24h)
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground">
                    0.04 SOL
                  </div>
                  <div className="mt-3 text-xs text-muted-faint">
                    Clears in 6h
                  </div>
                </div>
                <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 text-center">
                  <div className="mb-1 text-xs text-muted-faint">
                    Total Withdrawn
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground">
                    1.23 SOL
                  </div>
                  <div className="mt-3 text-xs text-muted-faint">
                    ≈ $1,722 USD
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="rounded-[var(--radius-sm)] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]">
                  Withdraw to Wallet
                </button>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="mx-auto max-w-lg space-y-6 text-left">
              <div>
                <label className="mb-2 block text-xs text-muted-faint">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="my-ai-lab"
                  className="w-full rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-faint">
                  Wallet Address
                </label>
                <input
                  type="text"
                  defaultValue="7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                  readOnly
                  className="w-full rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2.5 font-[family-name:var(--font-mono)] text-sm text-muted outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-faint">
                  Default Currency
                </label>
                <select className="w-full rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none">
                  <option>SOL</option>
                  <option>USDC</option>
                </select>
              </div>
              <div className="flex justify-center pt-2">
                <button className="rounded-[var(--radius-sm)] border border-border bg-transparent px-6 py-2.5 text-sm text-muted transition-all hover:border-border-strong hover:text-foreground">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
