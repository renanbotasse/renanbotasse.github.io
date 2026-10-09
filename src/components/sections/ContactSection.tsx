"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackernoon } from "react-icons/si";
import { useLocale } from "@/i18n/LocaleProvider";

const links = [
  { icon: FaEnvelope, href: "mailto:renanbotasse@gmail.com", label: "Email" },
  { icon: FaGithub, href: "https://github.com/renanbotasse", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/renanbotasse/", label: "LinkedIn" },
  { icon: SiHackernoon, href: "https://hackernoon.com/u/renanb", label: "HackerNoon" },
];

/** Inverted footer (black on light theme, white on dark) with big email link. */
export default function ContactSection() {
  const { t } = useLocale();

  return (
    <footer
      id="contact"
      className="hatch-dense relative z-[1] overflow-hidden border-t-2 border-line bg-ink px-5 pt-12 pb-10 text-ink-inv sm:px-8"
    >
      <div className="relative mx-auto max-w-[1120px]">
        <a
          href="mailto:renanbotasse@gmail.com"
          className="h-display block text-[clamp(30px,6vw,80px)] break-all text-ink-inv no-underline hover:text-red"
        >
          renanbotasse@gmail.com ↗
        </a>

        <div className="mt-10 flex flex-col gap-6 border-t border-ink-inv/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">
            © {new Date().getFullYear()} Renan Botasse · {t.footer.location}
          </p>
          <ul className="flex items-center gap-2">
            {links.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border-2 border-ink-inv text-ink-inv hover:border-red hover:bg-red hover:text-white"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
