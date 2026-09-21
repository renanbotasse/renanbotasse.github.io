"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HeroSection() {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section className="px-5 pt-24 pb-20 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 text-[13px] tracking-wide text-coral"
        >
          {hero.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="font-display text-[clamp(42px,7vw,68px)] leading-[1.05] font-medium tracking-tight text-text"
        >
          Renan Botasse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-3 font-display text-[clamp(22px,3.5vw,30px)] leading-snug text-indigo italic"
        >
          {hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-6 max-w-[36rem] text-[17px] leading-[1.7] text-muted"
        >
          {hero.body}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid gap-3 sm:grid-cols-2"
        >
          {hero.specs.map((row) => (
            <div
              key={row.key}
              className="rounded-2xl border border-border bg-surface px-5 py-4"
            >
              <dt className="mb-1 text-[11px] tracking-wide text-coral uppercase">{row.key}</dt>
              <dd className="text-[15px] text-text">{row.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="mailto:renanbotasse@gmail.com"
            className="inline-flex items-center rounded-full bg-indigo px-6 py-3 text-[14px] text-surface no-underline transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </a>
          <a
            href="/about"
            className="text-[14px] text-muted no-underline underline-offset-4 transition-colors hover:text-coral hover:underline"
          >
            {hero.about}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
