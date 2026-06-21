import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Compass, Flame, Trophy, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Brain Atlas — A daily knowledge adventure | Zapi.One",
  description:
    "A premium general-knowledge quiz-adventure for iOS. Answer beautifully illustrated quizzes across eight topics, then tap Tell Me More to actually learn why. Daily Challenge, an adventure map that adapts to your skill, and no ads. For curious minds aged 7 to adult.",
  openGraph: {
    title: "Brain Atlas — A daily knowledge adventure",
    description: "Learn, don't just memorise. A premium quiz-adventure for curious minds aged 7 to adult.",
    images: ["/games/brainatlas/04_learn.png"],
  },
};

const ACCENT = "#F6B94A";

const features = [
  { icon: BookOpen, t: "Learn, don't just memorise", d: "Every question has a “Tell Me More” — real explanations, facts about each item, and mental-math techniques. Answers teach the why, not just the what." },
  { icon: Compass, t: "An adventure that adapts", d: "Explore an illustrated world map of 360 levels. Difficulty calibrates to each player, so it stays challenging as they improve — from age 7 to adult." },
  { icon: Sparkles, t: "A fresh Daily Challenge", d: "Ten new questions every day across geography, science, history, space, nature, logic and culture, with thousands of questions so it stays fresh." },
  { icon: Flame, t: "Streaks & quests", d: "Daily and weekly quests, win streaks with a streak freeze, and gentle reminders that build a real daily learning habit." },
  { icon: Trophy, t: "Collect & progress", d: "Earn coins, build a card collection, and climb a 50-tier Season Pass. Meaningful progression that rewards curiosity." },
  { icon: ShieldCheck, t: "Made for families", d: "No ads. A parental gate protects every purchase. No personal data is collected — analytics are anonymous and there's no tracking." },
];

const topics = [
  { name: "Geography", img: "/games/brainatlas/learn_paris.jpg" },
  { name: "Space", img: "/games/brainatlas/learn_mars.jpg" },
  { name: "History", img: "/games/brainatlas/learn_colosseum.jpg" },
  { name: "Nature", img: "/games/brainatlas/learn_penguin.jpg" },
  { name: "Maths & Logic", img: "/games/brainatlas/learn_fibonacci.jpg" },
];

const shots = [
  { src: "/games/brainatlas/01_home.png", label: "A daily adventure home" },
  { src: "/games/brainatlas/02_quiz.png", label: "Beautifully illustrated quizzes" },
  { src: "/games/brainatlas/04_learn.png", label: "Tell Me More — learn the why" },
  { src: "/games/brainatlas/03_result.png", label: "Rewarding results" },
  { src: "/games/brainatlas/05_map.png", label: "An adventure map of 360 levels" },
  { src: "/games/brainatlas/06_season.png", label: "Season Pass progression" },
];

function Phone({ src, label }: { src: string; label: string }) {
  return (
    <figure className="shrink-0">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_20px_60px_-20px_rgba(246,185,74,0.45)]">
        <Image src={src} width={405} height={880} alt={label} className="h-auto w-[210px] md:w-[230px]" />
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-slate-300">{label}</figcaption>
    </figure>
  );
}

export default function BrainAtlasPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0A1A38] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(246,185,74,0.20),_transparent_65%)]" />
            <div className="absolute -right-40 bottom-[-30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(47,224,208,0.16),_transparent_65%)]" />
          </div>

          <div className="container relative">
            <nav className="flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              <Link href="/" className="hover:text-white">Zapi.One</Link>
              <span className="text-white/20">/</span>
              <Link href="/games" className="hover:text-white">Games</Link>
              <span className="text-white/20">/</span>
              <span className="text-white">Brain Atlas</span>
            </nav>

            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 pb-20 pt-10 lg:flex-row lg:justify-between">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mx-auto mb-6 flex items-center justify-center gap-4 lg:mx-0 lg:justify-start">
                  <Image src="/games/brainatlas/icon.png" width={72} height={72} alt="Brain Atlas icon"
                    className="h-16 w-16 rounded-2xl border border-white/10 shadow-lg" />
                  <div className="text-left">
                    <h1 className="font-[var(--font-heading)] text-4xl font-black tracking-tight md:text-5xl" style={{ color: ACCENT }}>
                      BRAIN ATLAS
                    </h1>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">A daily knowledge adventure</p>
                  </div>
                </div>
                <p className="text-lg text-slate-200 md:text-xl">
                  A premium quiz-adventure for curious minds aged 7 to adult. Answer beautifully illustrated
                  quizzes across eight topics — then tap <span style={{ color: ACCENT }}>Tell Me More</span> to
                  actually learn why. Built to help kids genuinely learn, with no ads.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-[#0A1A38]" style={{ background: ACCENT }}>
                    Coming soon to the App Store
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                    No ads · Family-friendly
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-4">
                <Image src="/games/brainatlas/04_learn.png" width={405} height={880} alt="Brain Atlas Tell Me More"
                  className="hidden h-auto w-[170px] rounded-[1.8rem] border border-white/10 opacity-85 shadow-2xl md:block" />
                <Image src="/games/brainatlas/01_home.png" width={405} height={880} alt="Brain Atlas home"
                  className="h-auto w-[230px] rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(246,185,74,0.5)] md:w-[260px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Built to teach</p>
            <h2 className="mt-3 text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
              The fun of trivia, the depth of real learning
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.t} className="card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "rgba(246,185,74,0.16)" }}>
                    <f.icon className="size-5" style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn showcase */}
        <section className="container pb-4">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2FE0D0]">Eight topics, one curious world</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">Every answer opens a door</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              From the Eiffel Tower to the Red Planet — questions are richly illustrated, and “Tell Me More” turns
              each one into a moment of real learning.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((t) => (
                <figure key={t.name} className="overflow-hidden rounded-2xl border border-white/10">
                  <Image src={t.img} width={1000} height={666} alt={t.name} className="h-40 w-full object-cover" />
                  <figcaption className="px-4 py-3 text-sm font-medium">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-[#0A1A38] py-16 text-white sm:py-20">
          <div className="container">
            <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">A daily ritual, beautifully made</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
              A home that invites you in, illustrated quizzes, a learning layer behind every answer, and an
              adventure map that grows with the player.
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
              <p className="mt-1 text-sm text-muted-foreground">No ads, no tracking, and no personal data collected. A parental gate protects purchases.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/games/brainatlas/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
