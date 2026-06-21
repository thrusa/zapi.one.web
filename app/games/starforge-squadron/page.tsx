import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Crosshair, Pickaxe, Rocket, FlaskConical, Store, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Starforge Squadron — Fight · Mine · Extract | Zapi.One",
  description:
    "A sleek premium 2.5D mobile space fighter. Rebuild a lost squadron across five living worlds — fly forward-runner missions, mine asteroids, trade, research, and uncover an ancient gate mystery. No ads, no pay-to-win.",
  openGraph: {
    title: "Starforge Squadron — Fight · Mine · Extract",
    description: "Rebuild a lost squadron across five living worlds in a premium 2.5D space fighter.",
    images: ["/games/starforge-squadron/cover-reference.png"],
  },
};

const pillars = [
  { icon: Crosshair, t: "Fight, Mine, Extract", d: "Every run blends auto-fire combat, manual dodging and abilities, contextual mining, cargo decisions, and high-stakes extraction." },
  { icon: Rocket, t: "Rebuild the squadron", d: "Begin with a single fighter and rebuild a lost legacy — upgrade hulls, shields, engines, and modules between every launch." },
  { icon: Pickaxe, t: "Mine the frontier", d: "Crack common and reinforced asteroids for rare ore. Fill your hold, then decide: extract safely or push deeper for more." },
  { icon: Store, t: "Living markets", d: "Sell what you haul through dynamic markets where prices shift — time your trades to fund the next upgrade." },
  { icon: FlaskConical, t: "Research & tech", d: "Run time-based research projects to unlock new frames, mining beams, cargo capacity, and wormhole stabilisation." },
  { icon: ShieldCheck, t: "Play unlocks everything", d: "Purchases speed up progress but never hard-paywall power. No forced ads, no pay-to-win — just the climb." },
];

const ships = [
  { name: "Valkyr Mk-I", role: "Fighter · Balanced hero ship", ability: "Shield Surge", effect: "Restore shield and briefly boost recharge.", img: "/games/starforge-squadron/ship-valkyr.png" },
  { name: "Muleback", role: "Miner · Resource specialist", ability: "Mining Overdrive", effect: "Mine faster and crack reinforced asteroids." },
  { name: "Ghostfin", role: "Scout · Discovery specialist", ability: "Scanner Pulse", effect: "Reveal hidden branches, rare nodes, weak points, and relics." },
];

const shots = [
  { src: "/games/starforge-squadron/shot-station.png", label: "Your home station — launch, trade, research, and command the fleet" },
  { src: "/games/starforge-squadron/shot-launch.png", label: "Plan every run — weigh routes, contracts, and risk before you launch" },
  { src: "/games/starforge-squadron/shot-combat.png", label: "Fly, fight, and mine through living asteroid fields" },
  { src: "/games/starforge-squadron/shot-starmap.png", label: "Chart the frontier — scan zones, find hidden signals, set waypoints" },
  { src: "/games/starforge-squadron/shot-hangar.png", label: "Rebuild your squadron — upgrade hulls, modules, and abilities" },
  { src: "/games/starforge-squadron/shot-market.png", label: "Sell your haul through dynamic, shifting markets" },
];

const worlds = [
  { name: "Asteroid Frontier", theme: "Dusty mining belt, frontier salvage, pirate drones, and old squadron wreckage.", color: "#F6B94A" },
  { name: "Cryo Nebula", theme: "Frozen moon system, ice wrecks, shield tech, and cryo creatures.", color: "#9FEAFF" },
  { name: "Aurelian Military Zone", theme: "Controlled faction space, patrol fleets, elite pilots, and restricted tech.", color: "#A9B4C2" },
  { name: "Industrial Forge", theme: "Volcanic orbital factories, molten debris, armour, and heavy weapons.", color: "#FF7A1A" },
  { name: "Ancient Gate System", theme: "Precursor ruins, relic guardians, unstable wormholes, and the alien-force reveal.", color: "#7C3CFF" },
];

export default function StarforgeSquadronPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#02050A] text-white">
          <Image
            src="/games/starforge-squadron/world-asteroid.png"
            alt=""
            fill
            aria-hidden
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/70 via-[#02050A]/85 to-[#02050A]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(43,217,255,0.18),_transparent_65%)]" />
            <div className="absolute -right-40 bottom-[-30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(246,185,74,0.16),_transparent_65%)]" />
          </div>

          <div className="container relative">
            <nav className="flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              <Link href="/" className="hover:text-white">Zapi.One</Link>
              <span className="text-white/20">/</span>
              <Link href="/games" className="hover:text-white">Games</Link>
              <span className="text-white/20">/</span>
              <span className="text-white">Starforge Squadron</span>
            </nav>

            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 pb-20 pt-10 lg:flex-row lg:justify-between">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mx-auto mb-6 flex items-center justify-center gap-4 lg:mx-0 lg:justify-start">
                  <Image
                    src="/games/starforge-squadron/emblem.png"
                    width={72}
                    height={72}
                    alt="Starforge Squadron emblem"
                    className="h-16 w-16 rounded-2xl border border-white/10 shadow-lg"
                  />
                  <div className="text-left">
                    <h1 className="font-[var(--font-heading)] text-4xl font-black tracking-tight text-[#F6B94A] md:text-5xl">
                      STARFORGE
                    </h1>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2BD9FF]">Squadron</p>
                  </div>
                </div>
                <p className="text-lg text-slate-200 md:text-xl">
                  A sleek premium 2.5D space fighter. You are the last of your squadron — fly, fight, mine,
                  and extract your way back from the brink, one dangerous run at a time.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="inline-flex items-center rounded-full bg-[#F6B94A] px-5 py-2 text-sm font-bold text-[#1a1205]">
                    In development
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
                    iOS · No pay-to-win
                  </span>
                </div>
              </div>

              <div className="relative shrink-0">
                <Image
                  src="/games/starforge-squadron/keyart.png"
                  width={520}
                  height={520}
                  alt="Valkyr Mk-I fighter over the Asteroid Frontier"
                  priority
                  className="h-auto w-[300px] rounded-[2rem] border border-white/10 shadow-[0_30px_90px_-20px_rgba(43,217,255,0.5)] md:w-[380px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#F6B94A]">The core loop</p>
            <h2 className="mt-3 text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
              One run. Every system in play.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.t} className="card-hover rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#F6B94A]/20 to-[#2BD9FF]/20">
                    <p.icon className="size-5 text-[#F6B94A]" />
                  </div>
                  <h3 className="mt-4 font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ships */}
        <section className="bg-[#02050A] py-16 text-white sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2BD9FF]">The fleet</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
                Three ships. Three jobs.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-400">
                Every ship plays differently — pick your loadout for the run ahead. Differences are functional, never cosmetic.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {ships.map((s) => (
                  <div key={s.name} className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#07111F] to-[#02050A]">
                    <div className="relative grid h-40 place-items-center bg-[radial-gradient(circle_at_50%_40%,_rgba(43,217,255,0.18),_transparent_70%)]">
                      {s.img ? (
                        <Image src={s.img} width={300} height={184} alt={s.name} className="h-32 w-auto object-contain drop-shadow-[0_8px_24px_rgba(43,217,255,0.4)]" />
                      ) : (
                        <Rocket className="size-14 text-[#2BD9FF]/40" />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-[var(--font-heading)] text-lg font-bold">{s.name}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F6B94A]">{s.role}</p>
                      <p className="mt-3 text-sm">
                        <span className="font-semibold text-[#2BD9FF]">{s.ability}</span>
                        <span className="text-slate-400"> — {s.effect}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Worlds */}
        <section className="container py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F6B94A]">Five living worlds</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
              From the frontier to the ancient gate
            </h2>
            <div className="mt-10 space-y-3">
              {worlds.map((w, i) => (
                <div
                  key={w.name}
                  className="card-hover flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-[var(--font-heading)] text-lg font-black"
                    style={{ color: w.color, background: `${w.color}1a` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold">{w.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{w.theme}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-[#02050A] py-16 text-white sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#2BD9FF]">Inside the cockpit</p>
              <h2 className="mt-3 text-center font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
                Every run, end to end
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
                From the home station to the asteroid belt and back — real screens from the game in development.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {shots.map((s) => (
                  <figure key={s.src} className="card-hover overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <Image
                      src={s.src}
                      width={1800}
                      height={828}
                      alt={s.label}
                      className="h-auto w-full"
                    />
                    <figcaption className="px-5 py-4 text-sm text-slate-300">{s.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cover poster + Support/Privacy */}
        <section className="bg-[#02050A] py-16 text-white sm:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
              <div className="mx-auto w-full max-w-xs">
                <Image
                  src="/games/starforge-squadron/cover-reference.png"
                  width={1055}
                  height={1491}
                  alt="Starforge Squadron key art poster"
                  className="h-auto w-full rounded-2xl border border-white/10 shadow-[0_30px_90px_-30px_rgba(246,185,74,0.5)]"
                />
              </div>
              <div>
                <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Forge your legacy among the stars
                </h2>
                <p className="mt-3 max-w-lg text-slate-300">
                  Starforge Squadron is in active development at Zapi.One. Want a heads-up the moment it lands on the
                  App Store — or interested in early builds and press?
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="font-semibold">Support</h3>
                    <p className="mt-1 text-sm text-slate-400">Questions, bugs, or feedback are always welcome.</p>
                    <Button asChild variant="outline" className="mt-4 border-white/20 bg-transparent hover:bg-white/10">
                      <a href="mailto:support@zapi.one">support@zapi.one</a>
                    </Button>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="font-semibold">Privacy</h3>
                    <p className="mt-1 text-sm text-slate-400">No tracking, no ads. Saves stay on your device.</p>
                    <Button asChild variant="outline" className="mt-4 border-white/20 bg-transparent hover:bg-white/10">
                      <Link href="/games/starforge-squadron/privacy">Privacy Policy</Link>
                    </Button>
                  </div>
                </div>
                <p className="mt-8 text-xs text-slate-500">
                  Art shown is in-development concept &amp; key art and may not reflect final gameplay.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
