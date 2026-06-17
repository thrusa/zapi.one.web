import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clearspace — Privacy Policy | Zapi.One",
  description: "Clearspace collects no personal data, has no accounts, and shows no ads during play.",
};

export default function ClearspacePrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="container py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Clearspace · ZAPI PTY LTD
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: 16 June 2026</p>
          <p>
            Clearspace is a single-player block puzzle published by ZAPI PTY LTD. It is designed
            to respect your attention <em>and</em> your privacy.
          </p>

          <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-base font-semibold text-foreground">What we collect</h2>
            <p>
              <strong className="text-foreground">Nothing.</strong> Clearspace does not collect,
              store, or transmit any personal data to us. There is no account and no sign-in. Your
              scores, stats, settings, themes, daily progress, and in-progress games are saved only
              on your device. There are no analytics SDKs and{" "}
              <strong className="text-foreground">no ads</strong>.
            </p>

            <h2 className="text-base font-semibold text-foreground">In-App Purchase</h2>
            <p>
              Clearspace offers a single, optional one-time{" "}
              <strong className="text-foreground">Premium</strong> purchase (premium themes,
              alternate app icons, and deeper personal stats). Purchases are processed entirely by
              Apple via the App Store — we never see your payment information. Whether Premium is
              unlocked is stored only on your device.
            </p>

            <h2 className="text-base font-semibold text-foreground">Notifications</h2>
            <p>
              If you turn on the optional daily reminder, Clearspace schedules a local notification
              on your device at the time you choose. Nothing is sent to or through our servers, and
              you can turn it off any time in Settings.
            </p>

            <h2 className="text-base font-semibold text-foreground">Children</h2>
            <p>Clearspace does not knowingly collect data from anyone, including children.</p>

            <h2 className="text-base font-semibold text-foreground">Health & medical</h2>
            <p>
              Clearspace is a calm puzzle game for entertainment and relaxation. It is not a medical
              or therapeutic product and makes no health claims.
            </p>

            <h2 className="text-base font-semibold text-foreground">Changes</h2>
            <p>
              If a future version adds optional cloud features, this policy will be updated and any
              data use will be clearly disclosed and opt-in.
            </p>

            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p>
              Questions? Email{" "}
              <a className="text-foreground underline" href="mailto:hello@zapi.one">hello@zapi.one</a>.
            </p>
          </section>

          <div className="pt-4">
            <Link href="/games/clearspace" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to Clearspace
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
