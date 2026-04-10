"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/stocks", label: "Stocks" },
  { href: "/supply-chain", label: "Supply Chain" },
  { href: "/materials", label: "Materials" },
  { href: "/thesis", label: "Thesis" },
  { href: "/news", label: "News" },
  { href: "/experts", label: "Experts" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex gap-1 flex-wrap">
      {LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "px-3 py-1.5 rounded text-sm transition-colors whitespace-nowrap",
            pathname === href
              ? "bg-accent/10 text-accent font-medium"
              : "text-muted hover:text-white hover:bg-white/5"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
