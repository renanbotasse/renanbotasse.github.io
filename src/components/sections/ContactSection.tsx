"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackernoon } from "react-icons/si";

const links = [
  { icon: <FaEnvelope size={18} />,   href: "mailto:renanbotasse@gmail.com", label: "Email" },
  { icon: <FaGithub size={18} />,     href: "https://github.com/renanbotasse", label: "GitHub" },
  { icon: <FaLinkedin size={18} />,   href: "https://www.linkedin.com/in/renanbotasse/", label: "LinkedIn" },
  { icon: <SiHackernoon size={18} />, href: "https://hackernoon.com/u/renanb", label: "HackerNoon" },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      style={{ borderTop: "1px solid #26262f", paddingTop: 40, paddingBottom: 32, marginTop: 80, position: "relative", zIndex: 1 }}
    >
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-4"
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a3a4a" }}>
            © {new Date().getFullYear()} Renan Botasse
          </div>

          <div className="flex items-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={l.label}
                style={{ color: "#5a5a72", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#bd93f9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5a72")}
              >
                {l.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
