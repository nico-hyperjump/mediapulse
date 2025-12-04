import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaPulse - AI-Powered Stock Newsletter System",
  description:
    "Get personalized, actionable stock market insights delivered to your inbox. AI-powered analysis of technical indicators, fundamental metrics, competitive landscape, and market sentiment.",
  keywords: [
    "stock newsletter",
    "AI stock analysis",
    "investment insights",
    "market intelligence",
    "stock market newsletter",
    "AI-powered investing",
  ],
  authors: [{ name: "MediaPulse" }],
  openGraph: {
    title: "MediaPulse - AI-Powered Stock Newsletter System",
    description:
      "Get personalized, actionable stock market insights delivered to your inbox.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaPulse - AI-Powered Stock Newsletter System",
    description:
      "Get personalized, actionable stock market insights delivered to your inbox.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
