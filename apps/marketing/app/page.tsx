"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  AlertCircle,
  UserX,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              MediaPulse
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#features">
              <Button variant="ghost" className="transition-all hover:scale-105">
                Features
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="ghost" className="transition-all hover:scale-105">
                How It Works
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)] -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left relative z-10">
              <Badge
                variant="secondary"
                className="px-4 py-1 animate-in fade-in slide-in-from-bottom-4 duration-1000"
              >
                <Sparkles className="mr-2 h-3 w-3 inline animate-spin" />
                AI-Powered News Monitoring
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                Never Miss What Matters
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  to Your Business
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                Stop missing out on critical insights. Get a personalized newsletter that learns
                what matters to you—delivered daily with only the news that impacts your business.
              </p>
              <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all hover:scale-105 hover:border-primary/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-2xl animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="relative rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-4 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=800&fit=crop&q=80"
                  alt="Dashboard preview showing news monitoring interface"
                  width={1200}
                  height={800}
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section - Staggered Layout */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-destructive/5 via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.15),transparent_60%)] -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="mb-20 text-center">
            <Badge variant="destructive" className="mb-4">
              The Problem
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Daily Struggle of Staying Informed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Executives face real challenges when trying to keep up with what matters
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center shadow-lg">
                <Clock className="h-8 w-8 text-destructive" />
              </div>
              <Card className="flex-1 border-l-4 border-l-destructive/50 bg-card/50 backdrop-blur-sm hover:border-l-destructive transition-all duration-300 hover:shadow-xl hover:-translate-x-1">
                <CardHeader>
                  <CardTitle className="text-2xl">Research takes hours</CardTitle>
                  <CardDescription className="text-base">
                    As a busy executive, you don't have time to spend hours browsing through news websites and social media, watching videos, and reading articles.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center shadow-lg">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <Card className="flex-1 border-r-4 border-r-destructive/50 bg-card/50 backdrop-blur-sm hover:border-r-destructive transition-all duration-300 hover:shadow-xl hover:translate-x-1">
                <CardHeader>
                  <CardTitle className="text-2xl">Information overload</CardTitle>
                  <CardDescription className="text-base">
                    Too many sources, conflicting reports, and endless noise make it
                    impossible to separate signal from noise. You&apos;re overwhelmed
                    before you even start.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center shadow-lg">
                <UserX className="h-8 w-8 text-destructive" />
              </div>
              <Card className="flex-1 border-l-4 border-l-destructive/50 bg-card/50 backdrop-blur-sm hover:border-l-destructive transition-all duration-300 hover:shadow-xl hover:-translate-x-1">
                <CardHeader>
                  <CardTitle className="text-2xl">One-Size-Fits-All Doesn&apos;t Fit</CardTitle>
                  <CardDescription className="text-base">
                    Generic newsletters and alerts aren&apos;t tailored to your specific
                    needs. They miss what matters to you and flood you with irrelevant
                    information.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center shadow-lg">
                <RefreshCw className="h-8 w-8 text-destructive" />
              </div>
              <Card className="flex-1 border-r-4 border-r-destructive/50 bg-card/50 backdrop-blur-sm hover:border-r-destructive transition-all duration-300 hover:shadow-xl hover:translate-x-1">
                <CardHeader>
                  <CardTitle className="text-2xl">No Improvement Over Time</CardTitle>
                  <CardDescription className="text-base">
                    Traditional systems don&apos;t learn from what works for you. They
                    keep making the same mistakes, wasting your time with irrelevant
                    content day after day.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Masonry Style */}
      <section id="features" className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(120,119,198,0.08)_0%,transparent_50%,rgba(120,119,198,0.08)_100%)] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              The Solution
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How We Keep You Informed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI agents monitor news, social media, and public sources so you don't have to
            </p>
          </div>
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-4xl rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-2 shadow-xl overflow-hidden">
              <Image
                src="https://miro.medium.com/v2/resize:fit:4800/format:webp/0*YfsoMTlglF0xGFiw"
                alt="AI monitoring dashboard with data visualization"
                width={1200}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Entity Intelligence</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  Tracks relationships between companies, people, and organizations
                  to find news that matters to your business.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Intelligent Data Collection</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  Automatically finds and collects relevant news from websites,
                  social media, and public sources using smart search queries.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Comprehensive Analysis</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  Analyzes how news is being received, tracks competitor mentions,
                  and identifies important events affecting your industry.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Personalized Content</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  Creates easy-to-read newsletters customized to your interests
                  and delivered on your schedule.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Quality Assurance</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  Every newsletter is checked and reviewed by our AI agents for accuracy
                  before it reaches your inbox.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative flex flex-col flex-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Self-Improving System</CardTitle>
                <CardDescription className="text-sm leading-relaxed flex-1">
                  The system learns from your preferences and feedback to
                  continuously improve what news it finds and how it's presented.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline Style */}
      <section
        id="how-it-works"
        className="relative w-full py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-muted/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 opacity-30" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="mb-20 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in minutes, stay informed every day
            </p>
          </div>
   
          <div className="grid gap-12 md:grid-cols-3">
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              {/* Connecting line */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-muted-foreground/20 z-0" />
              <Card className="relative z-10 mt-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-white rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Tell Us What to Track</CardTitle>
                  <CardDescription className="text-center">
                    Simply tell us the ticker of your company and we'll start the process of finding the news that matters to you.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              {/* Connecting line */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-muted-foreground/20 z-0" />
              <Card className="relative z-10 mt-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-white rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Get Your Newsletter</CardTitle>
                  <CardDescription className="text-center">
                    Receive a personalized newsletter in your inbox daily or weekly
                    with all the news that matters.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              {/* Connecting line */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-muted-foreground/20 z-0" />
              <Card className="relative z-10 mt-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-white rounded-xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Customize & Improve</CardTitle>
                  <CardDescription className="text-center">
                    Rate the newsletter and adjust what you track or provide feedback. The system learns
                    your preferences and gets better over time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section - Badge/Pill Style */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(120,119,198,0.05)_0deg,transparent_60deg,rgba(120,119,198,0.05)_120deg,transparent_180deg)] -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">
              Technology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Powered by Advanced AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Behind the scenes, our multi-agent system works around the clock
              to deliver accurate, relevant insights
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/60 backdrop-blur-sm h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Query Strategy</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Discovers entities related to your company, maintains relationship graphs, and generates intelligent search queries
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/60 backdrop-blur-sm h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Data Collection</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Intelligent agents collect data from news sites, social media
                    platforms, and public sources using targeted queries
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/60 backdrop-blur-sm h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <BarChart3 className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Analysis</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Performs sentiment analysis, competitive landscape research, and
                    event/context analysis to understand media coverage
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/60 backdrop-blur-sm h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Quality Assurance</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Automated fact-checking, compliance verification, and quality
                    scoring ensure accurate content before delivery
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Split Layout */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,119,198,0.12),transparent_70%)] -z-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose MediaPulse?
            </h2>
          </div>
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-4xl rounded-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-2 shadow-xl overflow-hidden">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1661575405108-4948d9844c65?q=80&w=3293&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business analytics and insights dashboard"
                width={1200}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Reclaim Your Time</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    No more hours spent researching. Get everything that matters
                    delivered to your inbox in one concise, easy-to-read newsletter.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Cut Through the Noise</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Our AI filters through countless sources to bring you only the
                    relevant news—no information overload, just what you need to know.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Understand Public Perception
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    See how people feel about your company and understand what's
                    driving changes in public perception.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Monitor Competitors
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    See how much coverage your competitors are getting and spot
                    industry trends that could affect your business.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Quality Assured</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Every newsletter is checked by our AI agents to ensure you get accurate
                    and reliable information.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Built Just for You</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    Every newsletter is tailored to your specific interests and needs.
                    No generic content—only what matters to your business.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 p-6 h-full flex flex-col md:col-span-2">
              <div className="flex gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Gets Smarter Every Day
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    The system learns from your feedback and preferences, continuously
                    improving to deliver better results over time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Prominent Card */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-[64rem]">
          <Card className="relative border-2 border-primary/30 bg-gradient-to-br from-card via-card/95 to-card/90 shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <CardHeader className="text-center relative z-10 pb-4">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 w-fit mx-auto">
                Get Started Today
              </Badge>
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
                Join executives who stay informed without spending hours reading news
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 pt-6 relative z-10 pb-8">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-110 shadow-xl hover:shadow-2xl group text-lg px-8 py-6"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No credit card required • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(120,119,198,0.05),transparent_50%)] -z-10" />
        <div className="container py-12 relative">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  MediaPulse
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered news monitoring for busy executives who
                own or manage companies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} MediaPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
