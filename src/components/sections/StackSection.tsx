"use client";

import type { IconType } from "react-icons";
import {
  FaAws,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCelery,
  SiDjango,
  SiElasticsearch,
  SiExpo,
  SiGithubactions,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiStorybook,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative, TbBrain, TbExternalLink } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useLocale } from "@/i18n/LocaleProvider";

const iconMap: Record<string, IconType> = {
  python: FaPython,
  django: SiDjango,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
  nestjs: SiNestjs,
  graphql: SiGraphql,
  swagger: SiSwagger,
  postman: SiPostman,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  celery: SiCelery,
  elasticsearch: SiElasticsearch,
  aws: FaAws,
  docker: FaDocker,
  githubactions: SiGithubactions,
  react: FaReact,
  nextjs: SiNextdotjs,
  reactnative: TbBrandReactNative,
  expo: SiExpo,
  tailwind: SiTailwindcss,
  storybook: SiStorybook,
  jest: SiJest,
  oauth: MdSecurity,
  apicontracts: HiOutlineDocumentText,
  ai: TbBrain,
};

/**
 * Tooltip sits beside its tile (right by default). Tiles in the last column of the
 * current grid (2 / 3 / 4 columns by breakpoint) flip to the left so it never leaves the viewport.
 * Class names are written out in full so Tailwind can detect them.
 */
function tooltipSide(index: number): string {
  const n = index + 1;
  const base = n % 2 === 0 ? "right-[calc(100%+8px)] left-auto" : "left-[calc(100%+8px)] right-auto";
  const sm = n % 3 === 0 ? "sm:right-[calc(100%+8px)] sm:left-auto" : "sm:left-[calc(100%+8px)] sm:right-auto";
  const lg = n % 4 === 0 ? "lg:right-[calc(100%+8px)] lg:left-auto" : "lg:left-[calc(100%+8px)] lg:right-auto";
  return `${base} ${sm} ${lg}`;
}

/** Stack page: monochrome tiles in a shared-border grid; hover/focus inverts the tile. */
export default function StackSection() {
  const { t } = useLocale();
  const { stack } = t;

  return (
    <section className="px-5 pt-14 pb-24 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <p className="eyebrow mb-5">{stack.eyebrow}</p>
        <h1 className="h-display h-page mb-6 text-ink">
          {stack.title}
        </h1>
        <p className="mb-3 max-w-xl text-[16px] leading-relaxed text-muted">{stack.subtitle}</p>
        <p className="label mb-14 text-dim">{stack.hint}</p>

        <div className="space-y-14">
          {stack.groups.map((group, gi) => (
            <div key={group.label}>
              <div className="mb-5 border-b-2 border-line pb-3">
                <h2 className="h-display text-[28px] text-ink">
                  <span className="label mr-3 align-middle text-red">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  {group.label}
                </h2>
                <p className="mt-1 max-w-md text-[14px] text-muted">{group.blurb}</p>
              </div>

              <div className="grid grid-cols-2 border-t border-l rule sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item, itemIndex) => {
                  const Icon = iconMap[item.iconKey] ?? HiOutlineDocumentText;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name}: ${item.tooltip}. Opens documentation.`}
                      className="stack-tile group relative block border-r border-b rule bg-bg p-4 text-ink no-underline sm:p-5"
                    >
                      <span className={`pointer-events-none absolute top-0 z-20 w-[min(300px,45vw)] border-2 border-line bg-ink px-4 py-3 text-[14px] leading-snug text-ink-inv opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${tooltipSide(itemIndex)}`}>
                        {item.tooltip}
                        <span className="label mt-2 flex items-center gap-1 text-[12px] opacity-80">
                          <TbExternalLink size={12} />
                          {stack.openDocs}
                        </span>
                      </span>

                      <div className="mb-3 flex items-start justify-between gap-2">
                        <Icon size={28} aria-hidden />
                        <TbExternalLink
                          size={14}
                          className="mt-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="h-display text-[16px]">{item.name}</div>
                      <div className="tile-note mt-1 text-[12px] leading-snug text-dim">
                        {item.note}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
