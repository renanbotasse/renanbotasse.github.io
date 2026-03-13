"use client";

import { motion } from "framer-motion";

const values = [
  { num: "01", title: "Decide before building", color: "#bd93f9", text: "A decision that's cheap now is expensive six months into a codebase. I map trade-offs before writing the first line." },
  { num: "02", title: "Document the seams",     color: "#8be9fd", text: "Modular code without documented boundaries is a monolith with extra steps. The seams need to be explicit and visible." },
  { num: "03", title: "Performance is a claim",  color: "#ff5555", text: "Animations that feel smooth on a MacBook feel broken on a mid-range Android. I run the numbers before shipping the effect." },
  { num: "04", title: "No framework religion",   color: "#50fa7b", text: "The right tool depends on the constraint, the team, the timeline. I keep opinions loose and criteria tight." },
];

const timeline = [
  { company: "Independent Developer", role: "Freelance",           period: "2021–2023", last: false },
  { company: "GoHike",                role: "Mobile Developer",    period: "2023–2024", last: false },
  { company: "2Lar",                  role: "Full Stack Engineer",  period: "2024–2026", last: true  },
];

export default function AboutSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.18em", color: "#bd93f9", textTransform: "uppercase", marginBottom: 24 }}>
          {'// about me'}
        </motion.div>

        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#e8e8f0", marginBottom: 40 }}>
          I&apos;m Renan<span style={{ color: "#ff5555" }}>.</span>
        </motion.h1>

        {/* Intro grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-8 items-start" style={{ marginBottom: 40 }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", border: "2px solid #32323d", overflow: "hidden", flexShrink: 0, backgroundImage: `url("/avatar.png")`, backgroundSize: "cover", backgroundPosition: "center" }}
            role="img" aria-label="Renan Botasse" />
          <div>
            <p style={{ fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 700, color: "#e8e8f0", lineHeight: 1.35, marginBottom: 16, letterSpacing: "-0.02em", fontFamily: "'Syne', sans-serif" }}>
              <em style={{ color: "#bd93f9", fontStyle: "normal" }}>Frontend Developer</em> with enough backend context.
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.85 }}>
              <p>I work with <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>React, Next.js and TypeScript</strong> as daily tools. Node.js, NestJS, API design, database decisions — I contribute past the UI layer when the work demands it.</p>
              <p style={{ marginTop: 16 }}>I&apos;ve worked on greenfield projects and on restructuring systems already in production. Both are different problems. Greenfield is about making good early decisions. Legacy is about understanding why past decisions made sense before changing them.</p>
            </div>
          </div>
        </motion.div>

        {/* Opinion block */}
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ borderLeft: "2px solid #bd93f9", padding: "22px 26px", background: "rgba(189,147,249,0.10)", borderRadius: "0 10px 10px 0", margin: "40px 0" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#e8e8f0", lineHeight: 1.75 }}>
            I don&apos;t have framework ideology. I have decision criteria. Development is about architecture and trade-offs. Not faith in a stack.
          </p>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#5a5a72", marginTop: 12, letterSpacing: "0.06em" }}>— on technology choices</div>
        </motion.div>

        {/* Extra bio */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.85 }}>
          <p>My differentiator is thinking critically before deciding. I map the decision, document the trade-offs, consider what breaks, and make sure the choice is defensible later. That habit is slow in the short term and cheap in the long term.</p>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5a5a72", marginTop: 56, marginBottom: 0, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#bd93f9" }}>{"//"}</span>the journey
          </div>
          <div style={{ position: "relative", margin: "24px 0 48px" }}>
            <div style={{ position: "absolute", left: 0, top: 10, bottom: 10, width: 1, background: "linear-gradient(to bottom, #bd93f9, #ff5555, transparent)" }} />
            {timeline.map((item) => (
              <div key={item.company} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0 16px 28px", position: "relative" }}>
                <div style={{ position: "absolute", left: -4, top: 22, width: 9, height: 9, borderRadius: "50%", background: item.last ? "#ff5555" : "#bd93f9", border: "2px solid #0c0c0e", boxShadow: item.last ? "0 0 8px rgba(255,85,85,0.5)" : "0 0 8px rgba(189,147,249,0.5)" }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#e8e8f0", letterSpacing: "-0.01em", fontFamily: "'Syne', sans-serif" }}>{item.company}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#5a5a72", marginTop: 3 }}>{item.role}</div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: item.last ? "#ff5555" : "#bd93f9", whiteSpace: "nowrap" }}>{item.period}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#5a5a72", marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#bd93f9" }}>{"//"}</span>how I work
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#26262f", borderRadius: 12, overflow: "hidden" }}>
            {values.map((v) => (
              <div key={v.num} style={{ background: "#17171c", padding: "28px 24px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3a3a4a", marginBottom: 10, letterSpacing: "0.1em" }}>{v.num}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em", color: v.color, fontFamily: "'Syne', sans-serif" }}>{v.title}</div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#8a8aa8", lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
