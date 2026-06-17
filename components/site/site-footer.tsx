import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#06070f]">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3FE0D0] to-[#9B5CFF] text-sm font-black text-[#06121F]">
                Z
              </span>
              <span className="text-sm font-bold tracking-[0.18em]">ZAPI.ONE</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A Brisbane-based interactive studio building original games and creator-first software.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Games</p>
              <ul className="space-y-2">
                <li><Link href="/games" className="text-foreground/80 transition hover:text-foreground">All games</Link></li>
                <li><Link href="/games/evoleap" className="text-foreground/80 transition hover:text-foreground">EvoLeap</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Products</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://pixelmingo.com" target="_blank" rel="noreferrer" className="text-foreground/80 transition hover:text-foreground">PixelMingo</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
              <ul className="space-y-2">
                <li><Link href="/#studio" className="text-foreground/80 transition hover:text-foreground">About</Link></li>
                <li><a href="mailto:hello@zapi.one" className="text-foreground/80 transition hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ZAPI PTY LTD · Brisbane, Australia</p>
          <p>ABN 85 694 868 481</p>
        </div>
      </div>
    </footer>
  );
}
