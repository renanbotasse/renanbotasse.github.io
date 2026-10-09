"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/** Decorative Berserk-inspired motifs (brand mark, eclipse, sword rule). All aria-hidden. */

/** Eclipse ring that drifts slower than the page for a subtle parallax. */
export function Eclipse({ className = "" }: { className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);

  return (
    <motion.div
      style={{ y, scale }}
      className={`eclipse pointer-events-none ${className}`}
      aria-hidden
    />
  );
}

/** Horizontal rule with a blade/diamond in the middle. */
export function SwordRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-ink ${className}`} aria-hidden>
      <span className="h-[3px] flex-1 bg-current" />
      <span className="h-3 w-3 rotate-45 bg-red" />
      <span className="h-[3px] w-10 bg-current" />
    </div>
  );
}
