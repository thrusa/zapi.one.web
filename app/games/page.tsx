import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FeaturedHero } from "@/components/site/featured-hero";
import { games, gameHref, statusLabel } from "@/lib/games";

export const metadata: Metadata = {
  title: "Games | Zapi.One",
  description: "Original games crafted by ZAPI PTY LTD — hand-built worlds, deep systems, and no ads, ever.",
};

export default function GamesPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-20" aria-hidden />

        {/* Header */}
        <section className="container pb-12 pt-16 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <nav className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <Link href="/" className="transition hover:text-foreground">Zapi.One</Link>
              <span className="text-white/20">/</span>
              <span className="text-foreground">Games</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3FE0D0]">The catalog</p>
            <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Original games, <span className="text-gradient">built to be felt</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Every title is designed and built in-house by ZAPI PTY LTD — hand-crafted worlds, deep systems,
              and a play-first experience. No ads, ever.
            </p>
          </div>
        </section>

        {/* Rotating spotlight */}
        <section className="container pb-10">
          <div className="mx-auto -mt-4 max-w-6xl">
            <FeaturedHero items={games} />
          </div>
        </section>

        {/* Catalog grid */}
        <section className="container pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((g) => (
                <Link key={g.slug} href={gameHref(g)} className="group block">
                  <article className="card-hover h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={g.cover} alt={`${g.name} cover`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] to-transparent" />
                      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#3FE0D0] backdrop-blur">
                        {statusLabel[g.status]}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-[var(--font-heading)] text-lg font-bold">{g.name}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{g.tagline}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{g.blurb}</p>
                    </div>
                  </article>
                </Link>
              ))}

              {/* Coming-soon tile — signals a growing catalog */}
              <div className="card-hover relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-white/15">
                <Image
                  src="/games/coming-soon.png"
                  alt="Original characters from upcoming Zapi.One games"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-[#05060f]/75 to-transparent" />
                <div className="relative p-5">
                  <span className="inline-flex items-center rounded-full bg-[#9B5CFF]/25 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#c6a8ff] backdrop-blur">
                    In the lab
                  </span>
                  <h3 className="mt-3 font-[var(--font-heading)] text-lg font-bold">More on the way</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    New games are in the lab. Want a heads up when they land?
                  </p>
                  <a
                    href="mailto:hello@zapi.one"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3FE0D0] transition hover:translate-x-0.5"
                  >
                    Get notified
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
