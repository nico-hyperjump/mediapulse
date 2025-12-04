import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaPulse - AI-Powered Media Monitoring Platform",
  description:
    "Monitor what's being said about your company. Get personalized, actionable media monitoring insights delivered to your inbox. AI-powered sentiment analysis, competitive landscape research, and event/context analysis tailored for busy executives.",
  keywords: [
    "media monitoring",
    "AI media intelligence",
    "sentiment analysis",
    "competitive intelligence",
    "media coverage tracking",
    "executive media insights",
    "public perception monitoring",
    "AI-powered media analysis",
  ],
  authors: [{ name: "MediaPulse" }],
  openGraph: {
    title: "MediaPulse - AI-Powered Media Monitoring Platform",
    description:
      "Monitor what's being said about your company. Get personalized, actionable media monitoring insights delivered to your inbox.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaPulse - AI-Powered Media Monitoring Platform",
    description:
      "Monitor what's being said about your company. Get personalized, actionable media monitoring insights delivered to your inbox.",
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
