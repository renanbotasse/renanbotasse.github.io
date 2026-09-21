"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import PreferenceControls from "@/components/ui/PreferenceControls";

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
    pathname === href || (href === "/work" && pathname === "/");

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b border-border/80 bg-bg/90 px-5 backdrop-blur-sm sm:px-8">
        <Link
          href="/work"
          className="font-display text-[17px] tracking-tight text-text no-underline transition-colors duration-200 hover:text-coral"
        >
          Renan Botasse
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-[13px] tracking-wide no-underline transition-colors duration-200 ${
                isActive(item.href) ? "active text-text" : "text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <PreferenceControls />
          <a
            href="mailto:renanbotasse@gmail.com"
            className="hidden text-[13px] text-muted no-underline transition-colors hover:text-coral md:inline"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer p-2 text-muted md:hidden"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-[5px]">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-3xl tracking-tight no-underline ${
                  isActive(item.href) ? "text-indigo" : "text-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:renanbotasse@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-muted no-underline"
            >
              {t.nav.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
