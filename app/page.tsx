import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Mail, MapPin, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Creator Growth Tools",
    description:
      "We design software that helps creators publish faster, test ideas, and scale their audience without technical overhead.",
  },
  {
    title: "Product Engineering",
    description:
      "From concept to launch, we build modern SaaS products with clean UX, rapid iteration, and reliable infrastructure.",
  },
  {
    title: "Automation Systems",
    description:
      "We connect workflows, data, and AI capabilities so teams can ship consistently while reducing repetitive work.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
      <div className="bg-grid absolute inset-0 -z-20" aria-hidden />

      <section className="container py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent">
              Brisbane, Australia
            </Badge>

            <Link
              href="https://pixelmingo.com"
              target="_blank"
              rel="noreferrer"
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-white/80 px-3 py-2 text-sm font-medium text-foreground transition hover:bg-white"
            >
              <Image
                src="/pixelmingo_logo.png"
                alt="PixelMingo logo"
                width={26}
                height={26}
                className="rounded-md"
              />
              <span>Creators of PixelMingo</span>
              <ArrowRight className="size-4" />
            </Link>

            <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Zapi.One builds creator-first software that turns ideas into scalable products.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              We are a SaaS company focused on tools for creators and digital teams. Our mission is to make execution
              easier through thoughtful product design, automation, and fast engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="https://pixelmingo.com" target="_blank" rel="noreferrer">
                  Explore PixelMingo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:hello@zapi.one">
                  Contact Us
                  <Mail className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="float-soft">
            <div className="overflow-hidden rounded-2xl border-2 border-primary/20 bg-white/80 shadow-lg backdrop-blur">
              <Image
                src="/hero-orbit.svg"
                alt="Abstract visualization of creator software systems."
                width={1400}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <Card className="mx-auto max-w-6xl overflow-hidden border-2 border-primary/30 bg-white/85 shadow-lg backdrop-blur">
          <CardContent className="grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <Image
              src="/pixelmingo_logo.png"
              alt="PixelMingo logo"
              width={96}
              height={96}
              className="rounded-2xl border border-primary/20 bg-white p-2"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Featured Product</p>
              <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold sm:text-3xl">PixelMingo by Zapi.One</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                PixelMingo helps creators move from idea to publish-ready content faster with practical tooling,
                streamlined workflows, and a product experience built for momentum.
              </p>
            </div>
            <div>
              <Button size="lg" asChild>
                <Link href="https://pixelmingo.com" target="_blank" rel="noreferrer">
                  Visit PixelMingo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <Card className="overflow-hidden border-2 border-primary/20 bg-card/80">
            <Image
              src="/hero-dashboard.svg"
              alt="Stylized dashboard chart representing product growth."
              width={900}
              height={700}
              className="h-auto w-full"
            />
          </Card>
          <Card className="overflow-hidden border-2 border-primary/20 bg-card/80">
            <Image
              src="/hero-network.svg"
              alt="Connected node network representing automation systems."
              width={900}
              height={700}
              className="h-auto w-full"
            />
          </Card>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-2 border-primary/25 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="size-4" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">SaaS product development for creators and internet brands.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/25 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="size-4" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">A focused software team based in Brisbane, Australia.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/25 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="size-4" />
                Registered Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">ABN: 85 694 868 481</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight sm:text-4xl">What we build</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full bg-card/90">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <Card className="mx-auto max-w-6xl border-2 border-primary/25 bg-gradient-to-r from-secondary to-accent/60">
          <CardContent className="flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">Let&apos;s build the next creator tool.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Product inquiries, partnerships, and collaborations: hello@zapi.one
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="mailto:hello@zapi.one">Start a Conversation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="container border-t py-8 text-sm text-muted-foreground">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <p>Zapi.One Pty Ltd</p>
          <p>ABN 85 694 868 481</p>
          <p>
            <Link href="mailto:hello@zapi.one" className="underline-offset-4 hover:underline">
              hello@zapi.one
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
