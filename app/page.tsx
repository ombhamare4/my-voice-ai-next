import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Zap, Globe, Shield, ChevronRight, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice AI",
};

const NavigationsItems = [
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Docs",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-border backdrop-blur-sm bg-background/80">
        <div className="flex items-center gap-2">
          <div className="">
            {/* <Mic className="w-4 h-4 text-primary" /> */}
            <Image src="/images/logo.png" alt="logo" width={48} height={48} />
          </div>
          <span className="font-semibold tracking-tight text-foreground">
            My<span className="text-primary">Voice</span>AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NavigationsItems.map((item) => (
            
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="sm">Sign up</Button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative flex-1">
        <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
          <Badge
            variant="outline"
            className="mb-6 text-xs tracking-widest uppercase font-medium px-4 py-1.5 rounded-full"
          >
            <Waves className="w-3 h-3 mr-1.5 inline" />
            Now in Beta
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.08] mb-6">
            Voice AI that
            <br />
            <span className="text-primary">actually listens</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            Real-time voice processing, natural conversation flows, and seamless
            integrations — built for the future of human-AI interaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button size="lg" className="px-8 rounded-xl text-sm tracking-wide">
              Get started free
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 rounded-xl text-sm tracking-wide"
            >
              View demo
            </Button>
          </div>
        </section>

        {/* Voice Visualizer */}
        <section className="flex justify-center px-6 pb-24">
          <div className="relative w-full max-w-2xl h-32 flex items-center justify-center gap-1">
            {Array.from({ length: 48 }).map((_, i) => {
              const heights = [
                20, 35, 55, 70, 90, 75, 60, 45, 80, 95, 65, 50, 40, 70, 85, 60,
                45, 30, 65, 80, 55, 40, 75, 90, 50, 35, 60, 85, 70, 45, 55, 80,
                65, 40, 75, 90, 60, 45, 55, 70, 85, 50, 35, 65, 80, 55, 40, 25,
              ];
              const h = heights[i] || 40;
              return (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-primary/50"
                  style={{
                    height: `${h}%`,
                    animation: `voicePulse ${
                      0.8 + (i % 5) * 0.15
                    }s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.04}s`,
                  }}
                />
              );
            })}
            <style>{`
              @keyframes voicePulse {
                from { transform: scaleY(0.4); opacity: 0.3; }
                to { transform: scaleY(1); opacity: 1; }
              }
            `}</style>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: "Ultra-low latency",
                desc: "Sub-200ms response times for natural, uninterrupted conversations.",
              },
              {
                icon: Globe,
                title: "50+ languages",
                desc: "Real-time translation and transcription across dozens of languages.",
              },
              {
                icon: Shield,
                title: "Enterprise secure",
                desc: "End-to-end encryption with SOC 2 compliance and data residency controls.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-border bg-card hover:bg-accent transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
            <h2 className="text-3xl font-bold mb-3 text-card-foreground">
              Ready to build?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Start your free trial. No credit card required.
            </p>
            <Button size="lg" className="px-8 rounded-xl text-sm">
              Start building for free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <span>© 2025 MyVoiceAI. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
