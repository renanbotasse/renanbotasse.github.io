"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import type { WorkCase } from "@/i18n";

function WorkCard({
  project,
  index,
  architectureLabel,
  techStackLabel,
}: {
  project: WorkCase;
  index: number;
  architectureLabel: string;
  techStackLabel: string;
}) {
  const [open, setOpen] = useState(index === 0);
  const isCurrent = project.status === "Current" || project.status === "Atual";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="card-case overflow-visible rounded-2xl border border-border bg-surface"
      style={{ borderTopWidth: 3, borderTopColor: project.accent }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer flex-col gap-5 p-7 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:p-9"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-[26px] font-medium tracking-tight text-text sm:text-[28px]">
              {project.name}
            </h3>
            <span
              className="rounded-full px-2.5 py-0.5 text-[12px] tracking-wide"
              style={{
                color: isCurrent ? "#2F6B4F" : project.accent,
                background: isCurrent ? "rgba(47,107,79,0.12)" : `${project.accent}18`,
              }}
            >
              {project.status}
            </span>
          </div>
          <p className="mb-4 text-[14px] text-dim">{project.type}</p>
          <p className="mb-6 max-w-2xl text-[16px] leading-relaxed text-muted">{project.summary}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border/80 bg-bg/60 px-4 py-3"
              >
                <div className="text-[11px] tracking-wide text-dim uppercase">{m.label}</div>
                <div className="mt-1 text-[15px] font-medium text-text">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end">
          <span className="text-[14px] text-dim">{project.period}</span>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-[16px] transition-all duration-300 ${
              open ? "rotate-180" : ""
            }`}
            style={{ color: project.accent, borderColor: `${project.accent}55` }}
          >
            ↓
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="space-y-8 border-t border-border px-7 pt-7 pb-9 sm:px-9">
              <div>
                <div
                  className="mb-4 text-[12px] tracking-wide uppercase"
                  style={{ color: project.accent }}
                >
                  {architectureLabel}
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.architecture.map((a) => (
                    <li
                      key={a}
                      className="rounded-xl border border-border bg-bg/50 px-4 py-3 text-[14px] leading-snug text-muted"
                    >
                      <span className="mr-2" style={{ color: project.accent }}>
                        —
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                {project.highlights.map((h) => (
                  <div
                    key={h.k}
                    className="grid gap-2 border-l-[3px] pl-5 sm:grid-cols-[110px_1fr] sm:gap-5"
                    style={{ borderColor: project.accent }}
                  >
                    <span
                      className="text-[13px] font-medium tracking-wide"
                      style={{ color: project.accent }}
                    >
                      {h.k}
                    </span>
                    <p className="text-[15px] leading-relaxed text-muted">{h.v}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-3 text-[12px] tracking-wide text-dim uppercase">
                  {techStackLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-bg/70 px-3 py-1.5 text-[13px] text-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const { t } = useLocale();
  const { work } = t;

  return (
    <section className="border-t border-border/70 px-5 pt-20 pb-12 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="mb-2 text-[12px] tracking-wide text-coral uppercase">{work.eyebrow}</p>
          <h2 className="font-display mb-3 text-[clamp(30px,4.5vw,44px)] font-medium tracking-tight text-text">
            {work.title}
          </h2>
          <p className="max-w-lg text-[16px] leading-relaxed text-muted">{work.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {work.cases.map((p, i) => (
            <WorkCard
              key={p.name}
              project={p}
              index={i}
              architectureLabel={work.architecture}
              techStackLabel={work.techStack}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-20"
        >
          <p className="mb-2 text-[12px] tracking-wide text-coral uppercase">{work.sideEyebrow}</p>
          <p className="mb-8 text-[16px] text-muted">{work.sideSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {work.personal.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-project block rounded-2xl border border-border bg-surface p-6 no-underline sm:p-7"
              style={{ borderTopWidth: 3, borderTopColor: p.accent }}
            >
              <div className="mb-2 text-[11px] tracking-wide text-dim uppercase">{p.label}</div>
              <div className="font-display mb-3 text-[20px] font-medium tracking-tight text-text">
                {p.name}
              </div>
              <p className="mb-5 min-h-[3.5rem] text-[14px] leading-relaxed text-muted">{p.desc}</p>
              <p className="text-[13px] text-dim">{p.stack.join(" · ")}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
