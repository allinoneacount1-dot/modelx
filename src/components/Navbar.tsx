"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-foreground">
              Model<span className="text-primary">X</span>
            </span>
            <span className="rounded-full bg-primary-soft px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium text-primary">
              BETA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-[var(--radius-sm)] border border-border bg-transparent px-4 py-2 text-sm text-muted transition-colors hover:border-border-strong hover:text-foreground">
              Connect Wallet
            </button>
            <Link
              href="/marketplace"
              className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
