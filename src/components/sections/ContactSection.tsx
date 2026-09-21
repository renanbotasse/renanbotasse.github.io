"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackernoon } from "react-icons/si";
import { useLocale } from "@/i18n/LocaleProvider";

const links = [
  { icon: FaEnvelope, href: "mailto:renanbotasse@gmail.com", label: "Email" },
  { icon: FaGithub, href: "https://github.com/renanbotasse", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/renanbotasse/", label: "LinkedIn" },
  { icon: SiHackernoon, href: "https://hackernoon.com/u/renanb", label: "HackerNoon" },
];

export default function ContactSection() {
  const { t } = useLocale();

  return (
    <footer id="contact" className="relative z-[1] border-t border-border px-5 pt-10 pb-10 sm:px-8">
      <div className="mx-auto max-w-[880px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-display text-[18px] text-text">Renan Botasse</p>
            <p className="mt-1 text-[13px] text-dim">
              © {new Date().getFullYear()} · {t.footer.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:renanbotasse@gmail.com"
              className="text-[14px] text-muted no-underline transition-colors hover:text-coral"
            >
              renanbotasse@gmail.com
            </a>
            <div className="flex items-center gap-3">
              {links.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-dim transition-colors hover:text-text"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
