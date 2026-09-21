"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function AboutSection() {
  const { t } = useLocale();
  const { about } = t;

  return (
    <section className="px-5 pt-20 pb-16 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[12px] tracking-wide text-coral uppercase"
        >
          {about.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="font-display mb-10 text-[clamp(36px,6vw,52px)] font-medium leading-[1.08] tracking-tight text-text"
        >
          Renan Botasse
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mb-12 flex flex-col items-start gap-6 sm:flex-row"
        >
          <img
            src="/avatar.png"
            alt="Renan Botasse"
            className="h-20 w-20 shrink-0 rounded-full border border-border object-cover"
          />
          <div>
            <p className="mb-4 text-[18px] leading-snug tracking-tight text-text">
              {about.introLead}{" "}
              <em className="font-display not-italic text-coral">{about.introYears}</em>{" "}
              {about.introTail}
            </p>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
            </div>
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 rounded-2xl border border-border border-l-4 border-l-coral bg-surface py-6 pr-6 pl-6"
        >
          <p className="font-display text-[18px] leading-relaxed text-text italic">{about.quote}</p>
          <footer className="mt-3 text-[12px] text-dim">{about.quoteFooter}</footer>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-5 text-[12px] tracking-wide text-coral uppercase">
            {about.timelineEyebrow}
          </p>
          <div className="mb-14 space-y-3">
            {about.timeline.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <div>
                  <div className="text-[15px] font-medium text-text">{item.company}</div>
                  <div className="mt-0.5 text-[13px] text-dim">{item.role}</div>
                </div>
                <div
                  className={`shrink-0 text-[13px] ${item.current ? "text-teal" : "text-muted"}`}
                >
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-5 text-[12px] tracking-wide text-coral uppercase">
            {about.principlesEyebrow}
          </p>
          <div className="mb-14 grid gap-4 sm:grid-cols-2">
            {about.principles.map((p) => (
              <div key={p.num} className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-2 text-[11px] tracking-wide text-coral">{p.num}</div>
                <div className="font-display mb-2 text-[17px] text-text">{p.title}</div>
                <p className="text-[14px] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-4 text-[12px] tracking-wide text-coral uppercase">
            {about.educationEyebrow}
          </p>
          <div className="space-y-3 text-[14px] text-muted">
            {about.education.map((item) => (
              <div key={item.title} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                <span className="text-text">{item.title}</span>
                <span className="text-dim">{item.period}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
