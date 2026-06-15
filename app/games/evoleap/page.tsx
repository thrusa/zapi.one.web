import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Dna, Hand, Globe2, ShieldCheck, Infinity as InfinityIcon, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "EvoLeap — Trench to Stars | Zapi.One",
  description:
    "A one-finger evolution climber. Start as a single cell in the Mariana Trench, evolve through 16 forms, and climb 13 worlds to the stars. No ads, ever.",
  openGraph: {
    title: "EvoLeap — Trench to Stars",
    description: "A one-finger evolution climber from the deep sea to the stars. No ads, ever.",
    images: ["/games/evoleap/shot-1.webp"],
  },
};

const shots = [
  { src: "/games/evoleap/shot-1.webp", label: "Evolve toward your next form" },
  { src: "/games/evoleap/shot-2.webp", label: "One-finger climbing" },
  { src: "/games/evoleap/shot-3.webp", label: "Endless Climb mode" },
  { src: "/games/evoleap/shot-4.webp", label: "13 worlds — trench to stars" },
  { src: "/games/evoleap/shot-5.webp", label: "A bestiary of 16 forms" },
  { src: "/games/evoleap/shot-6.webp", label: "A deep upgrade tree" },
];

const features = [
  { icon: Dna, t: "Evolve in real time", d: "Collect DNA and transform through 16 forms — from a glowing cell to a starborne traveler. Each form survives threats the last one couldn't." },
  { icon: Hand, t: "One-finger controls", d: "Drag to steer, tap for your form's special ability. Easy to start, deep to master." },
  { icon: Globe2, t: "13 illustrated worlds", d: "Climb from the Mariana Trench through reefs, jungles, cities and orbit, all the way to alien planets." },
  { icon: ShieldCheck, t: "Survive the deep", d: "Outclimb predators and hazards that get deadlier the further you go. Adapt, armor up, and push on." },
  { icon: InfinityIcon, t: "Endless Climb", d: "A one-life score attack with a Game Center leaderboard. How high can you get?" },
  { icon: Sparkles, t: "No ads, ever", d: "Purchases are entirely optional — every bit of progress is earnable just by playing." },
];

function Phone({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return (
    <figure className={`shrink-0 ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_20px_60px_-20px_rgba(63,224,208,0.45)]">
        <Image src={src} width={600} height={1303} alt={label} className="h-auto w-[210px] md:w-[230px]" />
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-slate-300">{label}</figcaption>
    </figure>
  );
}

export default function EvoLeapPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Dark game hero */}
      <section className="relative overflow-hidden bg-[#05060f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(63,224,208,0.22),_transparent_65%)]" />
          <div className="absolute -right-40 bottom-[-30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(155,92,255,0.22),_transparent_65%)]" />
        </div>
        <div className="container relative">
          <nav className="flex items-center justify-between py-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <Link href="/" className="hover:text-white">Zapi.One</Link>
            <Link href="/games" className="hover:text-white">Games</Link>
          </nav>

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 pb-16 pt-6 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <div className="mx-auto mb-6 flex items-center justify-center gap-4 lg:mx-0 lg:justify-start">
                <Image src="/games/evoleap/icon.png" width={72} height={72} alt="EvoLeap icon"
                  className="h-16 w-16 rounded-2xl border border-white/10 shadow-lg" />
                <div className="text-left">
                  <h1 className="text-4xl font-black tracking-tight text-[#3FE0D0] md:text-5xl">EVOLEAP</h1>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Trench to Stars</p>
                </div>
              </div>
              <p className="text-lg text-slate-200 md:text-xl">
                Begin as a single cell in the Mariana Trench. Jump, evolve, and climb all the way
                to the stars in a one-finger evolution climber.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center rounded-full bg-[#3FE0D0] px-5 py-2 text-sm font-bold text-[#06121F]">
                  Coming soon to the App Store
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                  No ads, ever
                </span>
              </div>
            </div>
            <div className="flex items-end gap-4">
              <Image src="/games/evoleap/shot-2.webp" width={600} height={1303} alt="EvoLeap gameplay"
                className="hidden h-auto w-[170px] rounded-[1.8rem] border border-white/10 opacity-80 shadow-2xl md:block" />
              <Image src="/games/evoleap/shot-1.webp" width={600} height={1303} alt="EvoLeap home screen"
                className="h-auto w-[230px] rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(63,224,208,0.5)] md:w-[260px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">An evolution you can feel</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.t} className="transition hover:shadow-md">
                <CardHeader>
                  <f.icon className="mb-2 h-6 w-6 text-primary" aria-hidden />
                  <CardTitle>{f.t}</CardTitle>
                  <CardDescription>{f.d}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-[#05060f] py-16 text-white">
        <div className="container">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">From the deep to the stars</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
            13 worlds, 16 evolving creatures, predators, power-ups, an Endless mode, and a full bestiary.
          </p>
          <div className="mt-10 flex gap-8 overflow-x-auto pb-4 lg:justify-center">
            {shots.map((s) => <Phone key={s.src} {...s} />)}
          </div>
        </div>
      </section>

      {/* Support + Privacy */}
      <section className="container py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
              <CardDescription>Questions, bugs, or feedback? We&apos;d love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a href="mailto:support@zapi.one">support@zapi.one</a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Privacy</CardTitle>
              <CardDescription>EvoLeap collects no personal data and contains no ads. Saves stay on your device.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href="/games/evoleap/privacy">Privacy Policy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ZAPI PTY LTD ·{" "}
          <Link href="/games" className="underline">More games</Link>
        </p>
      </section>
    </main>
  );
}
