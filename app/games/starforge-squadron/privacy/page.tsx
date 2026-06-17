import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Starforge Squadron — Privacy Policy | Zapi.One",
  description: "Starforge Squadron collects no personal data and contains no ads.",
};

export default function StarforgeSquadronPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <div className="container py-14">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Starforge Squadron · ZAPI PTY LTD
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: 17 June 2026</p>
            <p>Starforge Squadron is a single-player game published by ZAPI PTY LTD. We respect your privacy.</p>

            <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <h2 className="text-base font-semibold text-foreground">What we collect</h2>
              <p>
                <strong className="text-foreground">Nothing.</strong> Starforge Squadron does not collect, store,
                or transmit any personal data to us. Your progress is saved only on your device. There are no
                analytics SDKs, no advertising, and <strong className="text-foreground">no ads</strong>.
              </p>

              <h2 className="text-base font-semibold text-foreground">Apple services we use</h2>
              <p>
                Starforge Squadron may use Apple-provided services governed by Apple&apos;s own privacy policy:
                <strong className="text-foreground"> Game Center</strong> (leaderboards and achievements, if you
                choose to sign in — your Game Center identity is managed by Apple, not us) and
                <strong className="text-foreground"> In-App Purchases</strong> (processed entirely by Apple; we
                never see your payment information). Purchases only speed up in-game progress and never gate core power.
              </p>

              <h2 className="text-base font-semibold text-foreground">Children</h2>
              <p>Starforge Squadron does not knowingly collect data from anyone, including children.</p>

              <h2 className="text-base font-semibold text-foreground">Changes</h2>
              <p>We may update this policy; the date above reflects the latest version.</p>

              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                Questions?{" "}
                <a className="underline" href="mailto:support@zapi.one">support@zapi.one</a>.
              </p>
            </section>

            <Link className="inline-block text-sm underline" href="/games/starforge-squadron">
              ← Back to Starforge Squadron
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
