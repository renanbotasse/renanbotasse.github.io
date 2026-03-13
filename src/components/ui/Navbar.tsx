"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/work",  label: "work"    },
  { href: "/about", label: "about"   },
  { href: "/stack", label: "stack"   },
  { href: "/notes", label: "notes"   },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href === "/work" && pathname === "/");

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 border-b"
        style={{
          height: 60,
          borderColor: "#26262f",
          backgroundColor: "rgba(12,12,14,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* Logo */}
        <Link
          href="/work"
          className="transition-colors duration-200"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#8a8aa8", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#bd93f9")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8aa8")}
        >
          renan<span style={{ color: "#bd93f9" }}>B</span>otasse
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link transition-colors duration-200 ${isActive(item.href) ? "active" : ""}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: isActive(item.href) ? "#bd93f9" : "#5a5a72",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { if (!isActive(item.href)) e.currentTarget.style.color = "#e8e8f0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive(item.href) ? "#bd93f9" : "#5a5a72"; }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Toggle menu"
          style={{ color: "#5a5a72" }}
        >
          <div className="w-5 space-y-[5px]">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: "rgba(12,12,14,0.98)" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black tracking-tighter transition-colors duration-200"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: isActive(item.href) ? "#bd93f9" : "#e8e8f0",
                  textDecoration: "none",
                }}
              >
                {item.label}<span style={{ color: "#ff5555" }}>.</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
