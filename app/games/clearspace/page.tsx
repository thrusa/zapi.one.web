import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Wind, CalendarDays, Leaf, Palette, Hand, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Clearspace — Create space. Clear your mind. | Zapi.One",
  description:
    "A premium, calm block puzzle for iOS. Place pieces, clear lines, and reset in short, low-pressure sessions. Six themes, a Daily Challenge, Calm Mode — no ads, no manipulation.",
  openGraph: {
    title: "Clearspace — Create space. Clear your mind.",
    description: "A premium, calm block puzzle for short mental resets. No ads, no pressure.",
    images: ["/games/clearspace/03-gameplay.png"],
  },
};

const features = [
  { icon: Hand, t: "Tactile by design", d: "Place pieces, clear lines, and build combos with satisfying touch feedback and gentle haptics. Touch-first, never fiddly." },
  { icon: Wind, t: "Calm Mode", d: "A no-score, no-stakes board for pure wind-down. Just place and clear — no pressure, no game over hanging over you." },
  { icon: CalendarDays, t: "Daily Challenge", d: "One deterministic puzzle a day — the same board for everyone. A small, repeatable ritual to build a rhythm." },
  { icon: Palette, t: "Six soothing themes", d: "Warm paper light, deep calm night, and four more palettes — switch the whole mood of the board in a tap." },
  { icon: Leaf, t: "Respects your attention", d: "Low-clutter, interruptible, and built for short sessions. No fake urgency, no gift boxes, no noise." },
  { icon: ShieldCheck, t: "No ads. No manipulation.", d: "A single optional Premium unlock — never ads, coins, or aggressive reward loops. Your data stays on your device." },
];

const themeSwatches = [
  { name: "Calm Light", colors: ["#F7F2EA", "#47C6B8", "#4F80E8"] },
  { name: "Night", colors: ["#0B1024", "#6C6FEF", "#47C6B8"] },
  { name: "Focus", colors: ["#EFE7DC", "#7C8CFF", "#9A6BE8"] },
  { name: "Warm", colors: ["#F3EDE4", "#F2B84B", "#EF7D5A"] },
];

function Phone({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return (
    <figure className={`shrink-0 ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_20px_60px_-20px_rgba(58,175,169,0.45)]">
        <Image src={src} width={603} height={1311} alt={label} className="h-auto w-[210px] md:w-[230px]" />
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-slate-300">{label}</figcaption>
    </figure>
  );
}

const shots = [
  { src: "/games/clearspace/02-home.png", label: "A calm, uncluttered home" },
  { src: "/games/clearspace/03-gameplay.png", label: "Place, clear, combo" },
  { src: "/games/clearspace/07-daily.png", label: "A deterministic Daily Challenge" },
  { src: "/games/clearspace/06-calm.png", label: "Calm Mode — no stakes" },
  { src: "/games/clearspace/04-themes.png", label: "Six soothing themes" },
  { src: "/games/clearspace/09-result.png", label: "Gentle, encouraging results" },
];

export default function ClearspacePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1024] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(58,175,169,0.22),_transparent_65%)]" />
            <div className="absolute -right-40 bottom-[-30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(124,140,255,0.2),_transparent_65%)]" />
          </div>

          <div className="container relative">
            <nav className="flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              <Link href="/" className="hover:text-white">Zapi.One</Link>
              <span className="text-white/20">/</span>
              <Link href="/games" className="hover:text-white">Games</Link>
              <span className="text-white/20">/</span>
              <span className="text-white">Clearspace</span>
            </nav>

            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 pb-20 pt-10 lg:flex-row lg:justify-between">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mx-auto mb-6 flex items-center justify-center gap-4 lg:mx-0 lg:justify-start">
                  <Image
                    src="/games/clearspace/icon.png"
                    width={72}
                    height={72}
                    alt="Clearspace icon"
                    className="h-16 w-16 rounded-2xl border border-white/10 shadow-lg"
                  />
                  <div className="text-left">
                    <h1 className="font-[var(--font-heading)] text-4xl font-black tracking-tight text-[#47C6B8] md:text-5xl">
                      CLEARSPACE
                    </h1>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Create space. Clear your mind.</p>
                  </div>
                </div>
                <p className="text-lg text-slate-200 md:text-xl">
                  A premium, calm block puzzle for short mental resets. Place pieces, clear lines, and build
                  satisfying combos — with no pressure, no ads, and no interruptions.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="inline-flex items-center rounded-full bg-[#47C6B8] px-5 py-2 text-sm font-bold text-[#06201d]">
                    Coming soon to the App Store
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                    No ads, ever
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-4">
                <Image src="/games/clearspace/06-calm.png" width={603} height={1311} alt="Clearspace Calm Mode"
                  className="hidden h-auto w-[170px] rounded-[1.8rem] border border-white/10 opacity-85 shadow-2xl md:block" />
                <Image src="/games/clearspace/03-gameplay.png" width={603} height={1311} alt="Clearspace gameplay"
                  className="h-auto w-[230px] rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(58,175,169,0.5)] md:w-[260px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#3AAFA9]">Calm by design</p>
            <h2 className="mt-3 text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
              The satisfaction, without the noise
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.t} className="card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3AAFA9]/20 to-[#7C8CFF]/20">
                    <f.icon className="size-5 text-[#3AAFA9]" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themes */}
        <section className="container pb-4">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8CFF]">Make it yours</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">Six themes, one tap</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Switch the entire mood of the board — from warm paper daylight to deep calm night.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {themeSwatches.map((t) => (
                <div key={t.name} className="rounded-2xl border border-white/10 p-4">
                  <div className="flex gap-2">
                    {t.colors.map((c) => (
                      <span key={c} className="h-10 flex-1 rounded-lg border border-white/10" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-[#0B1024] py-16 text-white sm:py-20">
          <div className="container">
            <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">Short sessions, beautifully made</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
              A home that stays out of your way, a board that feels great to touch, a daily ritual, and a calm mode for winding down.
            </p>
            <div className="mt-10 flex gap-8 overflow-x-auto pb-4 hide-scrollbar lg:justify-center">
              {shots.map((s) => <Phone key={s.src} {...s} />)}
            </div>
          </div>
        </section>

        {/* Support + Privacy */}
        <section className="container py-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">Questions, bugs, or feedback? We&apos;d love to hear from you.</p>
              <Button asChild variant="outline" className="mt-4">
                <a href="mailto:support@zapi.one">support@zapi.one</a>
              </Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">Privacy</h3>
              <p className="mt-1 text-sm text-muted-foreground">No accounts, no tracking, no ads. Everything stays on your device.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/games/clearspace/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
