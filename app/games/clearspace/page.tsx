import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Grid3x3, CalendarDays, Leaf, Target, Palette, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const APP_STORE = "https://apps.apple.com/app/id6781135583";

export const metadata: Metadata = {
  title: "Clearspace — Calm Block Puzzle | Zapi.One",
  description:
    "A premium, calm block puzzle for short mental resets. Place pieces, clear rows and columns, build gentle combos. A daily challenge, Calm Mode, Focus Mode, and beautiful themes — no gameplay interruptions.",
  openGraph: {
    title: "Clearspace — Calm Block Puzzle",
    description: "Place, clear, breathe. A quieter kind of block puzzle. No ads during play.",
    images: ["/games/clearspace/shot-1.png"],
  },
};

const shots = [
  { src: "/games/clearspace/shot-1.png", label: "Satisfying, tactile clears" },
  { src: "/games/clearspace/shot-2.png", label: "A calm home for every mode" },
  { src: "/games/clearspace/shot-3.png", label: "A new puzzle every day" },
  { src: "/games/clearspace/shot-4.png", label: "Calm Mode — no score pressure" },
  { src: "/games/clearspace/shot-5.png", label: "Beautiful themes" },
  { src: "/games/clearspace/shot-6.png", label: "Gentle closure after every run" },
];

const features = [
  { icon: Grid3x3, t: "Simple, tactile gameplay", d: "Place pieces on an 8×8 board, clear rows and columns, and build gentle combos. No timers, no pressure, no interruptions during play." },
  { icon: CalendarDays, t: "A calm daily puzzle", d: "The same puzzle for everyone each day, with a gentle goal and a forgiving daily rhythm. Return when you like." },
  { icon: Leaf, t: "Calm Mode", d: "Score hidden, softer feedback, reduced effects. Just place, clear, and breathe." },
  { icon: Target, t: "Focus Mode", d: "A harder bag and a separate best score for when you want a real challenge." },
  { icon: Palette, t: "Beautiful themes", d: "Six atmospheric themes, plus alternate app icons and deeper stats with Premium." },
  { icon: ShieldCheck, t: "Respectful by design", d: "No ads during play, no coins, no casino loops. One optional purchase, no data collected." },
];

function Phone({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return (
    <figure className={`shrink-0 ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(58,175,169,0.45)]">
        <Image src={src} width={600} height={1303} alt={label} className="h-auto w-[210px] md:w-[230px]" />
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-slate-500">{label}</figcaption>
    </figure>
  );
}

export default function ClearspacePage() {
  return (
    <main className="bg-background text-foreground">
      {/* Calm light hero */}
      <section className="relative overflow-hidden bg-[#F7F4EF] text-[#11182E]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(58,175,169,0.16),_transparent_65%)]" />
          <div className="absolute -right-40 bottom-[-30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(234,217,190,0.55),_transparent_65%)]" />
        </div>
        <div className="container relative">
          <nav className="flex items-center justify-between py-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            <Link href="/">Zapi.One</Link>
            <Link href="/games/clearspace/privacy" className="hover:text-[#3AAFA9]">Privacy</Link>
          </nav>

          <div className="grid items-center gap-10 pb-16 pt-6 md:grid-cols-2 md:pb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/games/clearspace/icon.png" width={64} height={64} alt="Clearspace icon"
                       className="h-16 w-16 rounded-[1.1rem] shadow-md" />
                <Badge variant="secondary" className="bg-[#3AAFA9]/10 text-[#217C78]">No ads during play</Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Clearspace</h1>
              <p className="text-lg text-slate-600 md:text-xl">
                Create space. Clear your mind. A premium, calm block puzzle for short,
                satisfying mental resets — place, clear, breathe.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-[#3AAFA9] hover:bg-[#217C78] text-white">
                  <a href={APP_STORE}>Download on the App Store</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/games/clearspace/privacy">Privacy</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-4 md:justify-end">
              <Phone src={shots[0].src} label={shots[0].label} className="mt-8" />
              <Phone src={shots[2].src} label={shots[2].label} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">A quieter kind of block puzzle</h2>
          <p className="mt-3 text-slate-600">
            Clearspace is built to feel clean, tactile, and respectful. Gameplay stays
            focused on the board.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.t} className="border-black/5">
              <CardHeader>
                <f.icon className="h-7 w-7 text-[#3AAFA9]" />
                <CardTitle className="mt-3 text-lg">{f.t}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{f.d}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="bg-[#F7F4EF] py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#11182E]">
            Clear the board. Clear your mind.
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shots.map((s) => (
              <Phone key={s.src} src={s.src} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10 text-center text-sm text-slate-500">
        <p>© 2026 ZAPI PTY LTD ·{" "}
          <Link href="/games/clearspace/privacy" className="hover:text-[#3AAFA9]">Privacy Policy</Link> ·{" "}
          <a href="mailto:hello@zapi.one" className="hover:text-[#3AAFA9]">Support</a>
        </p>
      </footer>
    </main>
  );
}
