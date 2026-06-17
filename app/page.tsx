import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Gamepad2, Boxes, Workflow, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FeaturedHero } from "@/components/site/featured-hero";
import { games, gameHref, statusLabel } from "@/lib/games";

const capabilities = [
  {
    icon: Gamepad2,
    title: "Game design",
    desc: "Original mobile games with hand-crafted worlds, tight one-finger controls, and systems built to keep players climbing.",
  },
  {
    icon: Boxes,
    title: "Product engineering",
    desc: "Modern SaaS products with clean UX, rapid iteration, and reliable infrastructure — from concept to launch.",
  },
  {
    icon: Workflow,
    title: "Automation & AI",
    desc: "We wire up workflows, data, and AI so teams ship consistently while cutting the repetitive work.",
  },
];

const stats = [
  { value: "16", label: "Evolving forms in EvoLeap" },
  { value: "13", label: "Illustrated worlds" },
  { value: "0", label: "Ads, ever" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <Image
          src="/studio-ambient.png"
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          priority
          className="pointer-events-none absolute -top-20 left-0 -z-10 h-[680px] w-full object-cover opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent_75%)]"
        />
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-20" aria-hidden />

        {/* Hero */}
        <section className="container pb-10 pt-16 sm:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="size-3.5 text-[#3FE0D0]" />
                Brisbane, Australia · Interactive studio
              </span>

              <h1 className="mt-6 font-[var(--font-heading)] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                We build <span className="text-gradient">games</span> and creator software people love to use.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zapi.One is a small studio with big craft. We design original games and creator-first
                tools — sweating the details in product design, engineering, and play.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/games">
                    Explore our games
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#products">See what else we build</Link>
                </Button>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-3xl font-black text-[#3FE0D0]">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Floating game showcase */}
            <div className="relative mx-auto flex max-w-md items-end justify-center gap-4 lg:max-w-none">
              <div className="float-slower hidden sm:block">
                <Image
                  src="/games/evoleap/shot-2.webp"
                  width={600}
                  height={1303}
                  alt="EvoLeap gameplay"
                  className="h-auto w-[170px] rounded-[1.8rem] border border-white/10 opacity-80 shadow-2xl md:w-[190px]"
                  priority
                />
              </div>
              <div className="float-soft">
                <Image
                  src="/games/evoleap/shot-1.webp"
                  width={600}
                  height={1303}
                  alt="EvoLeap home screen"
                  className="ring-glow h-auto w-[230px] rounded-[2rem] border border-white/10 md:w-[270px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Games showcase — the centerpiece */}
        <section id="games" className="container scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3FE0D0]">Our games</p>
                <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
                  Worlds worth getting lost in
                </h2>
              </div>
              <Link
                href="/games"
                className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground sm:inline-flex"
              >
                View all games
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            {/* Rotating spotlight */}
            <FeaturedHero items={games} />

            {/* The full catalog */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((g) => (
                <Link key={g.slug} href={gameHref(g)} className="group block">
                  <article className="card-hover h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={g.cover} alt={`${g.name} key art`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#3FE0D0] backdrop-blur">
                        {statusLabel[g.status]}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <Image src={g.icon} width={40} height={40} alt="" className="h-9 w-9 rounded-lg border border-white/10" />
                        <div>
                          <h3 className="font-[var(--font-heading)] font-bold leading-tight">{g.name}</h3>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{g.tagline}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{g.blurb}</p>
                    </div>
                  </article>
                </Link>
              ))}

              <div className="card-hover relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-white/15">
                <Image
                  src="/games/coming-soon.png"
                  alt="Original characters from upcoming Zapi.One games"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-[#05060f]/75 to-transparent" />
                <div className="relative p-6">
                  <span className="inline-flex items-center rounded-full bg-[#9B5CFF]/25 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#c6a8ff] backdrop-blur">
                    In the lab
                  </span>
                  <h3 className="mt-3 font-[var(--font-heading)] font-bold">More titles on the way</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    New games are always in the works.{" "}
                    <Link href="/games" className="font-semibold text-[#3FE0D0] hover:underline">See the full catalog →</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products — secondary strip (PixelMingo) */}
        <section id="products" className="container scroll-mt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B5CFF]">Creator software</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
              Tools that help creators ship
            </h2>

            <div className="card-hover mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#140a20] to-[#0a0712]">
              <div className="grid gap-6 p-7 sm:p-9 md:grid-cols-[auto_1fr_auto] md:items-center">
                <Image
                  src="/pixelmingo_logo.png"
                  width={96}
                  height={96}
                  alt="PixelMingo logo"
                  className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 p-2"
                />
                <div>
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight">PixelMingo</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    PixelMingo helps creators move from idea to publish-ready content faster, with practical tooling,
                    streamlined workflows, and a product experience built for momentum.
                  </p>
                </div>
                <Button asChild variant="outline" className="border-[#9B5CFF]/30 hover:bg-[#9B5CFF]/10">
                  <a href="https://pixelmingo.com" target="_blank" rel="noreferrer">
                    Visit PixelMingo
                    <ArrowUpRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="container scroll-mt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3FE0D0]">The studio</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
                A focused team that sweats the craft
              </h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re a small software studio based in Brisbane, Australia. We make our own games and build
                creator-first products — and we care about how every one of them feels.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {capabilities.map((c) => (
                <div key={c.title} className="card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3FE0D0]/20 to-[#9B5CFF]/20">
                    <c.icon className="size-5 text-[#3FE0D0]" />
                  </div>
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container pb-24">
          <div className="ring-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1626] via-[#0a0d18] to-[#140a20] p-10 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(63,224,208,0.25),_transparent_65%)] pulse-glow" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s build something worth playing.
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Product inquiries, partnerships, press, and collaborations — we&apos;d love to hear from you.
                </p>
              </div>
              <Button size="lg" asChild className="shrink-0">
                <a href="mailto:hello@zapi.one">
                  hello@zapi.one
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
