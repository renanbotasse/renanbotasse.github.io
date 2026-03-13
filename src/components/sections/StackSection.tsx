"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiMongodb, SiGithubactions, SiTailwindcss, SiThreedotjs, SiJest, SiStorybook, SiPostman } from "react-icons/si";

const groups: { label: string; iconColor: string; items: { icon: React.ReactNode; name: string }[] }[] = [
  {
    label: "frontend",
    iconColor: "#bd93f9",
    items: [
      { icon: <FaReact size={18} />,        name: "React" },
      { icon: <SiNextdotjs size={18} />,    name: "Next.js" },
      { icon: <SiTypescript size={18} />,   name: "TypeScript" },
      { icon: <FaMobileAlt size={18} />,    name: "React Native" },
      { icon: <SiTailwindcss size={18} />,  name: "TailwindCSS" },
      { icon: <SiThreedotjs size={18} />,   name: "Three.js" },
    ],
  },
  {
    label: "backend",
    iconColor: "#ff5555",
    items: [
      { icon: <FaNodeJs size={18} />,     name: "Node.js" },
      { icon: <SiNestjs size={18} />,     name: "NestJS" },
      { icon: <SiPostgresql size={18} />, name: "PostgreSQL" },
      { icon: <SiMongodb size={18} />,    name: "MongoDB" },
    ],
  },
  {
    label: "infra & tooling",
    iconColor: "#8be9fd",
    items: [
      { icon: <FaAws size={18} />,           name: "AWS" },
      { icon: <FaDocker size={18} />,        name: "Docker" },
      { icon: <SiGithubactions size={18} />, name: "Git / CI" },
      { icon: <SiJest size={18} />,          name: "Jest" },
      { icon: <SiStorybook size={18} />,     name: "Storybook" },
      { icon: <SiPostman size={18} />,       name: "Postman" },
    ],
  },
];

export default function StackSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.18em", color: "#bd93f9", textTransform: "uppercase", marginBottom: 24 }}>
          {'// tools & technologies'}
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#e8e8f0" }}>
          Stack<span style={{ color: "#ff5555" }}>.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.8, maxWidth: 540, marginTop: 24, marginBottom: 56 }}>
          Tools I reach for — and why. <em style={{ color: "#bd93f9", fontStyle: "normal" }}>Stack isn&apos;t skill.</em>{" "}
          What matters is <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>decision criteria under real constraints.</strong>
        </motion.p>

        {groups.map((group, gi) => (
          <motion.div key={group.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.1 }} style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5a5a72", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#bd93f9" }}>{"//"}</span>{group.label}
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}>
              {group.items.map((item) => (
                <div key={item.name}
                  style={{ border: "1px solid #26262f", borderRadius: 10, padding: "16px 18px", background: "#17171c", display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.25s, transform 0.25s, background 0.25s", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#32323d"; e.currentTarget.style.background = "#1e1e25"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#26262f"; e.currentTarget.style.background = "#17171c"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#1e1e25", flexShrink: 0, color: group.iconColor }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e8e8f0", letterSpacing: "-0.01em", fontFamily: "'Syne', sans-serif" }}>{item.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Note block */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ borderLeft: "2px solid #bd93f9", borderRadius: "0 10px 10px 0", padding: "24px 28px", background: "#17171c", marginTop: 8 }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.8 }}>
            <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>On stack choices:</strong> I don&apos;t have a preferred framework religion.
            Each tool above exists because it solved a real problem in a real context —
            MongoDB because an event schema was unstable, AWS because the team needed cloud without a specialist,
            Three.js because a product needed 3D in the browser.
            The tool follows the constraint, not the other way around.
          </p>
        </motion.div>

        <div style={{ height: 32 }} />
      </div>
    </section>
  );
}
