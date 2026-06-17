import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Games", href: "/games" },
  { label: "Products", href: "/#products" },
  { label: "Studio", href: "/#studio" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-x-0 border-t-0">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3FE0D0] to-[#9B5CFF] text-sm font-black text-[#06121F]">
              Z
            </span>
            <span className="text-sm font-bold tracking-[0.18em]">ZAPI.ONE</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:hello@zapi.one"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-[#3FE0D0]/40 hover:bg-white/10"
          >
            Contact
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
