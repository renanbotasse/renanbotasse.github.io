"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import PreferenceControls from "@/components/ui/PreferenceControls";

/** Fixed opaque top bar with thick bottom rule; full-screen menu on mobile. */
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  const navItems = [
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/stack", label: t.nav.stack },
    { href: "/notes", label: t.nav.notes },
  ];

  const isActive = (href: string) =>
    pathname.startsWith(href) || (href === "/work" && pathname === "/");

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b-2 border-line bg-bg px-5 sm:px-8">
        <Link
          href="/work"
          className="h-display text-[20px] text-ink no-underline hover:text-red"
        >
          Renan Botasse<span className="text-red">_</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link ${isActive(item.href) ? "active" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PreferenceControls />
          <a href="mailto:renanbotasse@gmail.com" className="brut-btn hidden lg:inline-flex">
            {t.nav.contact}
          </a>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer border-2 border-line px-3 py-1.5 font-mono text-[12px] font-bold uppercase md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg px-5 pt-16 md:hidden">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`h-display border-b-2 border-line py-3 text-[44px] leading-none no-underline ${
                isActive(item.href) ? "text-red" : "text-ink"
              }`}
            >
              <span className="label mr-3 align-middle text-dim">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:renanbotasse@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="brut-btn mt-6 self-start"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </>
  );
}
