"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Dictionary } from "@/i18n";

type Article = Dictionary["notes"]["articles"][number];

function FeaturedCard({
  article,
  featuredLabel,
  readMoreLabel,
}: {
  article: Article;
  featuredLabel: string;
  readMoreLabel: string;
}) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.16 }}
      className="card-note group mb-8 block overflow-hidden rounded-2xl border border-border bg-surface no-underline"
      style={{ borderTopWidth: 4, borderTopColor: article.accent }}
    >
      <div className="grid min-h-[280px] sm:min-h-[320px] sm:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-2.5 py-0.5 text-[12px] tracking-wide"
                style={{ color: article.accent, background: `${article.accent}18` }}
              >
                {featuredLabel}
              </span>
              <span className="text-[13px] text-dim">{article.date}</span>
            </div>
            <h2 className="font-display mb-4 text-[clamp(22px,3.5vw,32px)] font-medium leading-snug tracking-tight text-text">
              {article.title}
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {article.desc}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[13px] text-dim">{article.meta}</span>
            <span className="text-[14px] font-medium" style={{ color: article.accent }}>
              {readMoreLabel}
            </span>
          </div>
        </div>

        <div className="relative min-h-[180px] overflow-hidden sm:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${article.image})` }}
            role="img"
            aria-label={article.imageAlt}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, var(--color-surface) 0%, transparent 28%), linear-gradient(0deg, ${article.accent}22, transparent 45%)`,
            }}
          />
        </div>
      </div>
    </motion.a>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={article.draft ? undefined : article.url}
      target={article.draft ? undefined : "_blank"}
      rel={article.draft ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`card-note group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface no-underline ${
        article.draft ? "pointer-events-none opacity-50" : ""
      }`}
      style={{ borderLeftWidth: 4, borderLeftColor: article.accent }}
    >
      <div className="relative h-40 overflow-hidden sm:h-44">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
          style={{ backgroundImage: `url(${article.image})` }}
          role="img"
          aria-label={article.imageAlt}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 35%, var(--color-surface) 100%), linear-gradient(135deg, ${article.accent}33, transparent 55%)`,
          }}
        />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] tracking-wide text-dim uppercase backdrop-blur-sm">
            {String(index + 2).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] text-dim backdrop-blur-sm">
            {article.date}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="font-display mb-3 text-[18px] font-medium leading-snug tracking-tight text-text">
          {article.title}
        </h2>
        <p className="mb-5 flex-1 text-[14px] leading-relaxed text-muted">{article.desc}</p>
        <div className="flex items-center justify-between gap-3 border-t border-border/80 pt-4">
          <span className="text-[12px] text-dim">{article.meta}</span>
          {!article.draft && (
            <span className="text-[13px]" style={{ color: article.accent }}>
              ↗
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

export default function WritingSection() {
  const { t } = useLocale();
  const { notes } = t;
  const [featured, ...rest] = notes.articles;

  return (
    <section className="px-5 pt-20 pb-24 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[12px] tracking-wide text-coral uppercase"
        >
          {notes.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="font-display mb-4 text-[clamp(36px,6vw,52px)] font-medium leading-[1.08] tracking-tight text-text"
        >
          {notes.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mb-12 max-w-lg text-[16px] leading-relaxed text-muted"
        >
          {notes.subtitle}
        </motion.p>

        <FeaturedCard
          article={featured}
          featuredLabel={notes.featured}
          readMoreLabel={notes.readMore}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {rest.map((article, i) => (
            <ArticleCard key={article.title} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
