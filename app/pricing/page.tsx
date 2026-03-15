import { Check, Zap, Shield, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for individuals and small projects.",
    price: { monthly: 0, annual: 0 },
    badge: null,
    features: [
      "10,000 characters / month",
      "5 voice styles",
      "Standard quality audio",
      "MP3 export",
      "Community support",
    ],
    cta: "Get started free",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    icon: Shield,
    description: "For creators and growing teams who need more power.",
    price: { monthly: 29, annual: 23 },
    badge: "Most popular",
    features: [
      "500,000 characters / month",
      "50+ voice styles",
      "High quality audio",
      "MP3, WAV, FLAC export",
      "Voice cloning (3 voices)",
      "Priority support",
      "API access",
    ],
    cta: "Start free trial",
    variant: "default" as const,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Custom solutions for large teams and organizations.",
    price: { monthly: null, annual: null },
    badge: null,
    features: [
      "Unlimited characters",
      "All voice styles",
      "Ultra-high quality audio",
      "All export formats",
      "Unlimited voice cloning",
      "Dedicated account manager",
      "Custom API limits",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    variant: "outline" as const,
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    q: "What happens if I exceed my character limit?",
    a: "You'll be notified when you reach 80% of your limit. After that, you can purchase add-on packs or upgrade your plan.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Yes, all paid plans come with a 14-day free trial. No credit card required.",
  },
  {
    q: "How does voice cloning work?",
    a: "Upload a short audio sample (30 seconds minimum) and our AI will create a custom voice model you can use anytime.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-12">
        <Badge variant="outline" className="mb-4 text-xs tracking-widest uppercase font-medium px-4 py-1.5 rounded-full">
          Pricing
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight mb-4">
          Simple, transparent
          <br />
          <span className="text-primary">pricing</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          Start for free, scale as you grow. No hidden fees, no surprises.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = !!plan.badge;
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  isPopular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 text-xs font-semibold rounded-full">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  {/* Price */}
                  <div className="mb-6">
                    {plan.price.monthly === null ? (
                      <div className="text-3xl font-bold text-foreground">
                        Custom
                      </div>
                    ) : plan.price.monthly === 0 ? (
                      <div className="text-3xl font-bold text-foreground">
                        Free
                      </div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          ${plan.price.monthly}
                        </span>
                        <span className="text-muted-foreground text-sm mb-1.5">
                          / month
                        </span>
                      </div>
                    )}
                    {plan.price.annual && (
                      <p className="text-xs text-muted-foreground mt-1">
                        ${plan.price.annual}/mo billed annually
                      </p>
                    )}
                  </div>

                  <Separator className="mb-6" />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={plan.variant}
                    className="w-full rounded-xl"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Compare note */}
      <section className="px-6 pb-20 flex justify-center">
        <p className="text-muted-foreground text-sm text-center">
          All plans include a{" "}
          <span className="text-foreground font-medium">14-day free trial</span>
          . Cancel anytime. No credit card required for free plan.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 flex justify-center">
        <Card className="w-full max-w-2xl border-border text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Still have questions?
            </CardTitle>
            <CardDescription className="text-sm">
              Our team is happy to walk you through the right plan for your
              needs.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center gap-3">
            <Button variant="default" className="rounded-xl px-8" size="lg">
              Talk to sales
            </Button>
            <Button variant="outline" className="rounded-xl px-8" size="lg">
              View docs
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}