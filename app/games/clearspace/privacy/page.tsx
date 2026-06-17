import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Clearspace — Privacy Policy | Zapi.One",
  description: "Clearspace collects no personal data, requires no account, and contains no ads.",
};

export default function ClearspacePrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <div className="container py-14">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Clearspace · ZAPI PTY LTD
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: 15 June 2026</p>
            <p>Clearspace is designed to respect your attention <strong className="text-foreground">and</strong> your privacy.</p>

            <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <h2 className="text-base font-semibold text-foreground">No account required</h2>
              <p>You can play Clearspace without signing in or creating an account.</p>

              <h2 className="text-base font-semibold text-foreground">No personal data collected</h2>
              <p>
                Clearspace does not collect, transmit, or sell personal information. There are
                <strong className="text-foreground"> no third-party analytics or advertising SDKs</strong>.
              </p>

              <h2 className="text-base font-semibold text-foreground">On-device storage only</h2>
              <p>
                Your scores, stats, settings, theme, daily progress, and in-progress games are stored locally on
                your device. They are not uploaded to any server.
              </p>

              <h2 className="text-base font-semibold text-foreground">Purchases</h2>
              <p>
                The one-time Premium unlock is handled by Apple via StoreKit. Apple processes the transaction;
                Clearspace only stores whether Premium is unlocked, locally on your device.
              </p>

              <h2 className="text-base font-semibold text-foreground">Future cloud features</h2>
              <p>
                If a future version adds optional cloud features (such as sync or leaderboards), this policy will be
                updated and any data use will be clearly disclosed and opt-in.
              </p>

              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                Questions?{" "}
                <a className="underline" href="mailto:support@zapi.one">support@zapi.one</a>.
              </p>
            </section>

            <Link className="inline-block text-sm underline" href="/games/clearspace">
              ← Back to Clearspace
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
