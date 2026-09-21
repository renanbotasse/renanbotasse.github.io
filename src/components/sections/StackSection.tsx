"use client";

import { motion } from "framer-motion";
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

export default function StackSection() {
  const { t } = useLocale();
  const { stack } = t;

  return (
    <section className="px-5 pt-20 pb-24 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-[12px] tracking-wide text-coral uppercase"
        >
          {stack.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="font-display mb-4 text-[clamp(36px,6vw,52px)] font-medium leading-[1.08] tracking-tight text-text"
        >
          {stack.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mb-4 max-w-xl text-[16px] leading-relaxed text-muted"
        >
          {stack.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="mb-14 text-[13px] text-dim"
        >
          {stack.hint}
        </motion.p>

        <div className="space-y-14">
          {stack.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
            >
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    className="font-display text-[24px] font-medium tracking-tight"
                    style={{ color: group.accent }}
                  >
                    {group.label}
                  </h2>
                  <p className="mt-1 max-w-md text-[14px] text-muted">{group.blurb}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item) => {
                  const Icon = iconMap[item.iconKey] ?? HiOutlineDocumentText;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name}: ${item.tooltip}. Opens documentation.`}
                      className="stack-tile group relative block rounded-2xl border border-border bg-surface/80 p-4 no-underline sm:p-5"
                    >
                      <span className="stack-tooltip pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 w-[min(240px,70vw)] -translate-x-1/2 rounded-xl border border-border px-3 py-2.5 text-[12px] leading-snug opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                        {item.tooltip}
                        <span className="mt-1.5 flex items-center gap-1 text-[11px] opacity-70">
                          <TbExternalLink size={12} />
                          {stack.openDocs}
                        </span>
                        <span
                          className="stack-tooltip-arrow absolute top-full left-1/2 -mt-px h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b"
                          aria-hidden
                        />
                      </span>

                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ background: `${item.color}18`, color: item.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <TbExternalLink
                          size={14}
                          className="mt-1 text-dim opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="text-[14px] font-medium text-text">{item.name}</div>
                      <div className="mt-1 text-[12px] leading-snug text-dim">{item.note}</div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
