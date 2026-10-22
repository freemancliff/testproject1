"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/2026mit", label: "2026 Part II · MIT" },
  { href: "/#watch", label: "Watch" },
  { href: "/#archive", label: "Past Conferences" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <strong>Bob Moses</strong>
            <span>Legacy Conference</span>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a className="btn btn--primary btn--sm nav-cta" href={SITE.donateUrl} target="_blank" rel="noreferrer">Donate</a>
        </nav>

        <button type="button" className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </div>
      <div className="brand-bar" aria-hidden="true" />
    </header>
  );
}
