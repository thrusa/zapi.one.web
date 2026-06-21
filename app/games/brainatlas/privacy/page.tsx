import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Brain Atlas — Privacy Policy | Zapi.One",
  description:
    "Brain Atlas collects no personal data, requires no account, contains no ads, and does not track you. Analytics are anonymous and purchases are handled by Apple.",
};

export default function BrainAtlasPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <div className="container py-14">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Brain Atlas · ZAPI PTY LTD
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: 20 June 2026</p>
            <p>
              Brain Atlas is built for curious minds — including children. We designed it to respect your
              family&apos;s privacy: <strong className="text-foreground">no ads, no tracking, and no personal
              data collected</strong>.
            </p>

            <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <h2 className="text-base font-semibold text-foreground">No account required</h2>
              <p>You can play Brain Atlas without signing in, creating an account, or giving us your name or email.</p>

              <h2 className="text-base font-semibold text-foreground">No personal data collected</h2>
              <p>
                We do not collect, transmit, or sell personal information. Brain Atlas does not ask for your name,
                email, phone number, contacts, photos, or location. There are{" "}
                <strong className="text-foreground">no third-party advertising SDKs and no cross-app or cross-site
                tracking</strong>.
              </p>

              <h2 className="text-base font-semibold text-foreground">On-device storage</h2>
              <p>
                Your progress, scores, streaks, collection, settings, and daily progress are stored locally on your
                device. This information is not tied to your identity and is not uploaded to any account.
              </p>

              <h2 className="text-base font-semibold text-foreground">Anonymous analytics</h2>
              <p>
                To understand which questions and features work well, Brain Atlas may record{" "}
                <strong className="text-foreground">anonymous, aggregated usage events</strong> — for example, that a
                quiz was started or a screen was viewed. These events use a random, app-generated identifier that is{" "}
                <strong className="text-foreground">not linked to your real-world identity</strong> and is not used to
                track you across other apps or websites. We do not use this data for advertising.
              </p>

              <h2 className="text-base font-semibold text-foreground">Purchases</h2>
              <p>
                Brain Atlas offers optional in-app purchases (such as a subscription, a season pass, and coin packs).
                Purchases are processed by <strong className="text-foreground">Apple via StoreKit</strong> — we never
                see or store your payment details. Brain Atlas only records, on your device, what you own so your
                content unlocks correctly. A <strong className="text-foreground">parental gate</strong> protects every
                purchase so children cannot buy without an adult.
              </p>

              <h2 className="text-base font-semibold text-foreground">Children&apos;s privacy</h2>
              <p>
                Brain Atlas is suitable for ages 7 and up. Because we collect no personal data and show no ads, the app
                does not knowingly gather personal information from children. Purchases are protected by a parental
                gate.
              </p>

              <h2 className="text-base font-semibold text-foreground">Changes to this policy</h2>
              <p>
                If a future version adds optional features that use data differently (such as cloud sync or
                leaderboards), this policy will be updated and any such use will be clearly disclosed and opt-in.
              </p>

              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                Questions about your privacy?{" "}
                <a className="underline" href="mailto:support@zapi.one">support@zapi.one</a>.
              </p>
            </section>

            <Link className="inline-block text-sm underline" href="/games/brainatlas">
              ← Back to Brain Atlas
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
