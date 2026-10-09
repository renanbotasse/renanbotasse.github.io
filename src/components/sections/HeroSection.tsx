"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Eclipse, SwordRule } from "@/components/ui/Berserk";

/** Home hero: oversized headline, spec table with shared thick borders. */
export default function HeroSection() {
  const { t } = useLocale();
  const { hero } = t;
  const { scrollY } = useScroll();
  // Headline lags behind the scroll slightly; the eclipse (above) lags more, giving depth.
  const titleY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:px-8">
      <Eclipse className="top-[-120px] right-[-160px] sm:right-[-80px]" />
      <div className="relative mx-auto max-w-[1120px]">
        <motion.h1 style={{ y: titleY }} className="h-display text-[clamp(60px,13vw,156px)] leading-[0.88] text-ink">
          Renan
          <br />
          Botasse<span className="text-red">.</span>
        </motion.h1>

        <p className="font-mono mt-6 border-l-4 border-red pl-4 text-[clamp(16px,2.4vw,22px)] font-bold uppercase text-ink">
          {hero.role}
        </p>

        <SwordRule className="mt-8 max-w-[40rem]" />
        <p className="mt-8 max-w-[40rem] text-[18px] leading-[1.65] text-muted">{hero.body}</p>

        <dl className="mt-12 grid border-t border-l rule sm:grid-cols-2">
          {hero.specs.map((row) => (
            <div key={row.key} className="border-r border-b rule px-5 py-4">
              <dt className="label mb-1 text-red">{row.key}</dt>
              <dd className="text-[16px] font-medium text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="mailto:renanbotasse@gmail.com" className="brut-btn">
            {hero.cta} →
          </a>
          <Link href="/about" className="brut-btn ghost">
            {hero.about}
          </Link>
        </div>
      </div>
    </section>
  );
}
