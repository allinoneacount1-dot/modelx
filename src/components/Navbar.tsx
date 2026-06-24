"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
              Model<span className="text-primary">X</span>
            </span>
            <span className="rounded-full bg-primary-soft px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium text-primary">
              BETA
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-muted transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-[var(--radius-sm)] border border-border bg-transparent px-4 py-2 text-[13px] text-muted transition-colors duration-150 hover:border-border-strong hover:text-foreground">
              Connect Wallet
            </button>
            <Link
              href="/marketplace"
              className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-3 mt-4">
            <button className="w-48 rounded-[var(--radius-sm)] border border-border px-6 py-3 text-sm text-muted hover:border-border-strong hover:text-foreground transition-colors">
              Connect Wallet
            </button>
            <Link
              href="/marketplace"
              className="w-48 rounded-[var(--radius-sm)] bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
