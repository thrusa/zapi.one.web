import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Games | Zapi.One",
  description: "Original games crafted by ZAPI PTY LTD.",
};

const games = [
  {
    slug: "evoleap",
    name: "EvoLeap",
    tagline: "Trench to Stars",
    blurb: "A one-finger evolution climber — from a single cell in the Mariana Trench to the stars.",
    icon: "/games/evoleap/icon.png",
  },
  {
    slug: "clearspace",
    name: "Clearspace",
    tagline: "Calm Block Puzzle",
    blurb: "Create space. Clear your mind. A premium, calm block puzzle for short, satisfying mental resets.",
    icon: "/games/clearspace/icon.png",
  },
];

export default function GamesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b">
        <div className="container py-14">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-10 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Zapi.One</Link>
              <span className="text-foreground">Games</span>
            </nav>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Games</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">Original games crafted by ZAPI PTY LTD.</p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {games.map((g) => (
            <Link key={g.slug} href={`/games/${g.slug}`} className="block">
              <Card className="flex items-center gap-5 p-6 transition hover:shadow-md">
                <Image src={g.icon} width={80} height={80} alt={`${g.name} icon`}
                  className="h-20 w-20 rounded-2xl border shadow-sm" />
                <div>
                  <h2 className="text-xl font-bold text-primary">{g.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{g.tagline}</p>
                  <p className="mt-2 text-sm">{g.blurb}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
