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
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MediaPulse</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="ghost">How It Works</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <Badge variant="secondary" className="px-4 py-1">
            AI-Powered Investment Intelligence
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Stock Market Insights
            <span className="text-primary"> Delivered Daily</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Get personalized, actionable stock market insights powered by AI.
            Comprehensive analysis of technical indicators, fundamental metrics,
            competitive landscape, and market sentiment—all tailored for busy
            executives.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24 md:py-32">
        <div className="mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything You Need for Smart Investing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive analysis powered by advanced AI agents
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Brain className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Intelligent Data Collection</CardTitle>
                <CardDescription>
                  Automatically gathers information from news sites, social
                  media, market data APIs, and SEC filings using targeted search
                  queries.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Comprehensive Analysis</CardTitle>
                <CardDescription>
                  Technical analysis (RSI, MACD, moving averages), fundamental
                  analysis (P/E ratios, growth metrics), competitive research,
                  and sentiment analysis.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Target className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Personalized Content</CardTitle>
                <CardDescription>
                  Newsletters tailored to your preferences, focus areas, and
                  risk tolerance with customizable detail levels and delivery
                  schedules.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Automated fact-checking, compliance verification, and quality
                  scoring ensure accurate, compliant, and high-quality content.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Self-Improving System</CardTitle>
                <CardDescription>
                  Learning agent analyzes user feedback and engagement metrics
                  to continuously optimize content generation strategies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="mb-4 h-10 w-10 text-primary" />
                <CardTitle>Multi-Channel Delivery</CardTitle>
                <CardDescription>
                  Receive newsletters via email and web dashboard with tracking,
                  personalization, and responsive design.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="container py-24 md:py-32 bg-muted/50"
      >
        <div className="mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our multi-agent system works around the clock to deliver insights
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Data Collection</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent agents collect data from news, social media, market
                APIs, and SEC filings
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive analysis of technical indicators, fundamentals,
                competitive landscape, and sentiment
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Content Generation</h3>
              <p className="text-sm text-muted-foreground">
                AI generates personalized, executive-friendly newsletter content
                tailored to your preferences
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quality-assured newsletters delivered via email and web
                dashboard on your schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-[64rem]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose MediaPulse?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-muted-foreground">
                  No more spending hours researching. Get comprehensive insights
                  delivered directly to your inbox.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                <p className="text-muted-foreground">
                  Real-time market data, news, and analysis from multiple
                  sources aggregated in one place.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Make Better Decisions
                </h3>
                <p className="text-muted-foreground">
                  Actionable insights with technical and fundamental analysis to
                  support your investment decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Experience
                </h3>
                <p className="text-muted-foreground">
                  Content tailored to your focus areas, risk tolerance, and
                  investment preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Automated fact-checking and compliance verification ensure
                  accuracy and reliability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Continuously Improving
                </h3>
                <p className="text-muted-foreground">
                  The system learns from feedback and engagement to continuously
                  improve content quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-[64rem]">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg mt-4">
                Join executives and investors who trust MediaPulse for their
                daily market intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 pt-6">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No credit card required • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-bold">MediaPulse</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered stock market intelligence for busy executives.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
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
