"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Dictionary } from "@/i18n";

type Article = Dictionary["notes"]["articles"][number];

/** Large lead story at the top of the feed. */
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
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="brut-card group mb-10 block no-underline"
    >
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col justify-between p-6 sm:p-9">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="brut-tag red">{featuredLabel}</span>
              <span className="label text-dim">{article.date}</span>
            </div>
            <h2 className="h-display mb-4 text-[clamp(26px,3.8vw,42px)] leading-[1.05] text-ink">
              {article.title}
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-muted">{article.desc}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="label text-dim">{article.meta}</span>
            <span className="label font-bold text-red">{readMoreLabel} ↗</span>
          </div>
        </div>

        <div className="relative min-h-[200px] overflow-hidden border-t-2 border-line sm:min-h-full sm:border-t-0 sm:border-l-2">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale transition-[filter] duration-100 group-hover:grayscale-0"
            style={{ backgroundImage: `url(${article.image})` }}
            role="img"
            aria-label={article.imageAlt}
          />
        </div>
      </div>
    </a>
  );
}

/** Feed card: grayscale image (color on hover), mono metadata. */
function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <a
      href={article.draft ? undefined : article.url}
      target={article.draft ? undefined : "_blank"}
      rel={article.draft ? undefined : "noopener noreferrer"}
      aria-disabled={article.draft || undefined}
      className={`brut-card group flex h-full flex-col no-underline ${
        article.draft ? "pointer-events-none" : ""
      }`}
    >
      <div className="relative h-44 overflow-hidden border-b-2 border-line">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale transition-[filter] duration-100 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${article.image})` }}
          role="img"
          aria-label={article.imageAlt}
        />
        <span className="brut-tag solid absolute top-3 left-3">
          {String(index + 2).padStart(2, "0")}
        </span>
        {article.draft && <span className="brut-tag red absolute top-3 right-3">Draft</span>}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="label mb-2 text-dim">{article.date}</span>
        <h2 className="h-display mb-3 text-[20px] leading-tight text-ink">
          {article.title}
        </h2>
        <p className="mb-5 flex-1 text-[14px] leading-relaxed text-muted">{article.desc}</p>
        <div className="flex items-center justify-between gap-3 border-t rule pt-4">
          <span className="label text-dim">{article.meta}</span>
          {!article.draft && <span className="font-bold text-red">↗</span>}
        </div>
      </div>
    </a>
  );
}

/** Notes page: lead story + two-column article feed. */
export default function WritingSection() {
  const { t } = useLocale();
  const { notes } = t;
  const [featured, ...rest] = notes.articles;

  return (
    <section className="px-5 pt-14 pb-24 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <p className="eyebrow mb-5">{notes.eyebrow}</p>
        <h1 className="h-display h-page mb-12 text-ink">
          {notes.title}
        </h1>

        <FeaturedCard
          article={featured}
          featuredLabel={notes.featured}
          readMoreLabel={notes.readMore}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((article, i) => (
            <ArticleCard key={article.title} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
