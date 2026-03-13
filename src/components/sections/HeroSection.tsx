"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section style={{ padding: "130px 0 80px" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.18em", color: "#bd93f9", textTransform: "uppercase", marginBottom: 24 }}
        >
          {'// renan botasse'}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#e8e8f0" }}
        >
          Frontend<br />
          Engineer<span style={{ color: "#ff5555" }}>.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#8a8aa8", lineHeight: 1.75, maxWidth: 480, marginTop: 24 }}
        >
          I build <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>with React, Next.js and TypeScript.</strong><br />
          Enough backend context to make decisions that don&apos;t come back to bite
          Node.js, NestJS and AWS.
        </motion.p>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="flex flex-wrap gap-2"
          style={{ marginTop: 28 }}
        >
          {["React / Next.js", "TypeScript", "Node.js / NestJS"].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                padding: "5px 14px", borderRadius: 20,
                border: "1px solid #32323d", color: "#8a8aa8",
                letterSpacing: "0.06em", display: "inline-block",
              }}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="flex flex-wrap items-center gap-4"
          style={{ marginTop: 32 }}
        >
          <a
            href="mailto:renanbotasse@gmail.com"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", padding: "10px 22px", borderRadius: 6, backgroundColor: "#bd93f9", color: "#0c0c0e", fontWeight: 500, textDecoration: "none", transition: "all 0.25s", display: "inline-block" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#caa8ff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#bd93f9"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            get in touch
          </a>
          <a
            href="/about"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", padding: "10px 22px", borderRadius: 6, border: "1px solid #32323d", color: "#8a8aa8", textDecoration: "none", transition: "all 0.25s", display: "inline-block" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#bd93f9"; (e.currentTarget as HTMLElement).style.color = "#bd93f9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#32323d"; (e.currentTarget as HTMLElement).style.color = "#8a8aa8"; }}
          >
            about me →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
