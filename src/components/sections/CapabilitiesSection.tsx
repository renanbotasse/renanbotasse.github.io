"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function CapabilitiesSection() {
  const { t } = useLocale();
  const { capabilities } = t;
  const { domains } = capabilities;
  const [active, setActive] = useState(domains[0].id);
  const current = domains.find((d) => d.id === active) ?? domains[0];

  return (
    <section className="border-t border-border/70 px-5 pt-20 pb-24 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-2 text-[12px] tracking-wide text-coral uppercase">
            {capabilities.eyebrow}
          </p>
          <h2 className="font-display mb-3 text-[clamp(30px,4.5vw,44px)] font-medium tracking-tight text-text">
            {capabilities.title}
          </h2>
          <p className="mb-8 max-w-lg text-[16px] leading-relaxed text-muted">
            {capabilities.subtitle}
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {domains.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={active === d.id}
              data-active={active === d.id}
              onClick={() => setActive(d.id)}
              className="cap-tab cursor-pointer rounded-full border border-border px-4 py-2 text-[13px] tracking-wide text-dim"
            >
              {d.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <p className="mb-6 text-[16px] leading-relaxed text-muted">{current.summary}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-border bg-bg/50 px-5 py-4"
                >
                  <div className="mb-1 text-[15px] font-medium text-text">{item.name}</div>
                  <div className="text-[13px] text-dim">{item.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
