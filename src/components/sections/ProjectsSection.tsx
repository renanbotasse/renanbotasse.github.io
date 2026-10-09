"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import type { WorkCase } from "@/i18n";

/** Collapsible case study; status is conveyed by text + fill, not color alone. */
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
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  // Once the user toggles by hand, scrolling stops deciding for them.
  const touched = useRef(false);
  // Fires when the card crosses the middle band of the viewport.
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px", once: true });

  useEffect(() => {
    if (inView && !touched.current) setOpen(true);
  }, [inView]);

  const isCurrent = project.status === "Current" || project.status === "Atual";
  const panelId = `case-${index}`;

  return (
    <article ref={ref} className="brut-card">
      <button
        onClick={() => {
          touched.current = true;
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer flex-col gap-5 p-6 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:p-8"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label text-red">{String(index + 1).padStart(2, "0")} /</span>
            <h3 className="h-display text-[clamp(28px,4vw,40px)] leading-none text-ink">
              {project.name}
            </h3>
            <span className={`brut-tag ${isCurrent ? "red" : "solid"}`}>
              {isCurrent ? "● " : ""}
              {project.status}
            </span>
          </div>
          <p className="label mb-4 text-dim">{project.type}</p>
          <p className="mb-6 max-w-2xl text-[16px] leading-relaxed text-muted">{project.summary}</p>
          <dl className="grid grid-cols-1 border-t border-l rule sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-r border-b rule px-4 py-3">
                <dt className="label text-dim">{m.label}</dt>
                <dd className="mt-1 text-[15px] font-bold text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end">
          <span className="label text-ink">{project.period}</span>
          <span
            className="flex h-10 w-10 items-center justify-center border-2 border-line font-mono text-[18px] font-bold"
            aria-hidden
          >
            {open ? "−" : "+"}
          </span>
        </div>
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-8 border-t-2 border-line px-6 pt-7 pb-8 sm:px-8">
          <div>
            <div className="label mb-4 text-red">{architectureLabel}</div>
            <ul className="grid border-t border-l rule sm:grid-cols-2">
              {project.architecture.map((a) => (
                <li
                  key={a}
                  className="border-r border-b rule px-4 py-3 text-[14px] leading-snug text-muted"
                >
                  <span className="mr-2 font-bold text-red">▪</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            {project.highlights.map((h) => (
              <div
                key={h.k}
                className="grid gap-2 border-l-4 border-line pl-5 sm:grid-cols-[130px_1fr] sm:gap-5"
              >
                <span className="label font-bold text-ink">{h.k}</span>
                <p className="text-[15px] leading-relaxed text-muted">{h.v}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="label mb-3 text-dim">{techStackLabel}</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="brut-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
                  </div>
        </div>
      </div>
    </article>
  );
}

/** Work page: case studies followed by side projects grid. */
export default function ProjectsSection() {
  const { t } = useLocale();
  const { work } = t;

  return (
    <section className="border-t-2 border-line px-5 pt-20 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10">
          <p className="eyebrow mb-5">{work.eyebrow}</p>
          <h2 className="h-display h-section mb-5 text-ink">
            {work.title}
          </h2>
        </div>

        <div className="flex flex-col gap-8">
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

        <div className="mt-20 border-t-2 border-line pt-8">
          <p className="eyebrow mb-3">{work.sideEyebrow}</p>
          <p className="mb-8 text-[16px] text-muted">{work.sideSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {work.personal.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-card block p-6 no-underline sm:p-7"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="label text-dim">{p.label}</span>
                <span className="label text-red">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="h-display mb-3 text-[24px] leading-tight text-ink">
                {p.name} ↗
              </div>
              <p className="mb-5 min-h-[3.5rem] text-[14px] leading-relaxed text-muted">{p.desc}</p>
              <p className="label text-ink">{p.stack.join(" / ")}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
