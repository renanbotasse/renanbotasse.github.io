"use client";

import { useLocale } from "@/i18n/LocaleProvider";

/** About page: intro, tabular timeline, principles grid, education. */
export default function AboutSection() {
  const { t } = useLocale();
  const { about } = t;

  return (
    <section className="px-5 pt-14 pb-20 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <p className="eyebrow mb-5">{about.eyebrow}</p>
        <h1 className="h-display h-page mb-10 text-ink">
          Renan Botasse<span className="text-red">.</span>
        </h1>

        <div className="mb-12">
          <div className="max-w-2xl">
            <p className="font-display mb-4 text-[clamp(20px,2.6vw,26px)] leading-snug font-medium text-ink">
              {about.introLead}{" "}
              <mark className="bg-red px-1 text-white">{about.introYears}</mark> {about.introTail}
            </p>
            <div className="space-y-4 text-[16px] leading-relaxed text-muted">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
            </div>
          </div>
        </div>

        <blockquote className="hatch mb-16 border-2 border-l-[8px] border-line border-l-red bg-surface py-6 pr-6 pl-6">
          <p className="font-display text-[clamp(18px,2.4vw,24px)] leading-relaxed font-medium text-ink">
            “{about.quote}”
          </p>
          <footer className="label mt-3 text-dim">{about.quoteFooter}</footer>
        </blockquote>

        <p className="label mb-5 text-red">{about.timelineEyebrow}</p>
        <div className="mb-16 border-t rule">
          {about.timeline.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="flex items-start justify-between gap-4 border-b rule px-1 py-4"
            >
              <div>
                <div className="h-display text-[20px] text-ink">
                  {item.company}
                </div>
                <div className="mt-0.5 text-[14px] text-dim">{item.role}</div>
              </div>
              <div
                className={`label shrink-0 ${item.current ? "brut-tag red" : "text-muted"}`}
              >
                {item.current ? "● " : ""}
                {item.period}
              </div>
            </div>
          ))}
        </div>

        <p className="label mb-5 text-red">{about.principlesEyebrow}</p>
        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {about.principles.map((p) => (
            <div key={p.num} className="brut-card p-6">
              <div className="label mb-2 text-red">{p.num}</div>
              <div className="h-display mb-2 text-[20px] text-ink">
                {p.title}
              </div>
              <p className="text-[14px] leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="label mb-4 text-red">{about.educationEyebrow}</p>
        <div className="border-t rule">
          {about.education.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-0.5 border-b rule py-3 sm:flex-row sm:justify-between"
            >
              <span className="text-[15px] font-medium text-ink">{item.title}</span>
              <span className="label text-dim">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
