import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ModelX — Decentralized AI Model Marketplace",
  description:
    "Upload, benchmark, and monetize AI models on Solana. Access thousands of models via API with micropayments.",
  keywords: [
    "AI marketplace",
    "Solana",
    "decentralized",
    "machine learning",
    "API",
    "micropayment",
  ],
  openGraph: {
    title: "ModelX — Decentralized AI Model Marketplace",
    description:
      "Upload, benchmark, and monetize AI models on Solana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
