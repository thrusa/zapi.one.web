"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { type Game, gameHref, statusLabel } from "@/lib/games";

const ROTATE_MS = 6000;

export function FeaturedHero({ items }: { items: Game[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current || items.length <= 1) return;
    const id = setInterval(() => setActive((p) => (p + 1) % items.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const g = items[active];

  return (
    <div
      className="ring-glow relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1626] to-[#070a14]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* accent wash that swaps with the active game */}
      <div
        key={`glow-${g.slug}`}
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-60 blur-2xl transition-opacity duration-700"
        style={{ background: `radial-gradient(circle, ${g.accent}55, transparent 65%)` }}
        aria-hidden
      />

      <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Copy */}
        <div key={`copy-${g.slug}`} className="rise">
          <div className="flex items-center gap-4">
            <Image
              src={g.icon}
              width={72}
              height={72}
              alt={`${g.name} icon`}
              className="h-16 w-16 rounded-2xl border border-white/10 shadow-lg"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: g.accent, background: `${g.accent}26` }}
                >
                  {statusLabel[g.status]}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {g.platform}
                </span>
              </div>
              <h3 className="mt-1 font-[var(--font-heading)] text-2xl font-black tracking-tight sm:text-3xl">
                {g.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {g.tagline}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/80 sm:text-base">
            {g.longBlurb}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={gameHref(g)}
              className="inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold text-[#06121F] transition hover:opacity-90"
              style={{ background: g.accent }}
            >
              Discover {g.name}
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <span className="inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-muted-foreground">
              {g.genre}
            </span>
          </div>

          {/* Rotator tabs */}
          <div className="mt-8 flex items-center gap-3">
            {items.map((it, idx) => (
              <button
                key={it.slug}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Show ${it.name}`}
                aria-pressed={idx === active}
                className="group relative"
              >
                <Image
                  src={it.icon}
                  width={40}
                  height={40}
                  alt=""
                  className={`h-10 w-10 rounded-xl border transition ${
                    idx === active
                      ? "scale-105 border-white/40 opacity-100"
                      : "border-white/10 opacity-50 group-hover:opacity-80"
                  }`}
                  style={idx === active ? { boxShadow: `0 0 0 2px ${g.accent}` } : undefined}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Cover visual */}
        <Link href={gameHref(g)} className="group relative block">
          <div
            key={`cover-${g.slug}`}
            className="rise relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <Image
              src={g.cover}
              alt={`${g.name} key art`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </Link>
      </div>
    </div>
  );
}
