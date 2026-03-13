"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "ArtemisFlow: A Local-First Job Tracker I Built",
    desc: "Why I built a local-first CRM for job applications instead of using a spreadsheet — and what that taught me about ownership and product thinking.",
    meta: "personal project · local-first · Feb 2026",
    pinned: true,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(189,147,249,0.08)",
  },
  {
    title: "MongoDB — A Practical Guide for Beginners and Experts Alike",
    desc: "A hands-on guide to MongoDB — from data modeling basics to practical patterns for real projects.",
    meta: "database · MongoDB · Jan 2025",
    pinned: false,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(80,250,123,0.06)",
  },
  {
    title: "NestJS and Best Practices",
    desc: "Modular architecture, dependency injection, and the patterns that make NestJS projects maintainable at scale.",
    meta: "backend · NestJS · Jul 2024",
    pinned: false,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(255,85,85,0.06)",
  },
  {
    title: "Comments: The Good, the Bad and the Ugly",
    desc: "When comments help, when they hide bad code, and how to write the kind that actually earns their place in a codebase.",
    meta: "clean code · engineering · Apr 2024",
    pinned: false,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(241,250,140,0.06)",
  },
  {
    title: "Your Junior Dev Survival Guide to Managing Branches, Commits and PRs",
    desc: "Git workflow for developers who want to stop breaking things and start collaborating properly.",
    meta: "git · workflow · Feb 2024",
    pinned: false,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(139,233,253,0.06)",
  },
  {
    title: "Google Sign-In and Expo Go: A Guide to Fix Any Issues That Arise",
    desc: "Every integration issue I ran into setting up Google Auth with Expo — and how I solved each one.",
    meta: "React Native · Expo · Dec 2023",
    pinned: false,
    draft: false,
    url: "https://hackernoon.com/u/renanb",
    bgImage: "",
    accentColor: "rgba(139,233,253,0.06)",
  },
];

export default function WritingSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.18em", color: "#bd93f9", textTransform: "uppercase", marginBottom: 24 }}>
          {'// thinking out loud'}
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#e8e8f0" }}>
          Notes<span style={{ color: "#ff5555" }}>.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.8, maxWidth: 500, marginTop: 20, marginBottom: 32 }}>
          Writing about frontend, architecture, and the decisions that matter.
          Mechanism over buzzword. Trade-off over trend.
        </motion.p>

        <div className="flex flex-col gap-2">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.draft ? undefined : article.url}
              target={article.draft ? undefined : "_blank"}
              rel={article.draft ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-note"
              style={{
                border: `1px solid ${article.pinned ? "rgba(189,147,249,0.3)" : "#26262f"}`,
                borderRadius: 12,
                background: "#17171c",
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                textDecoration: "none",
                opacity: article.draft ? 0.5 : 1,
                pointerEvents: article.draft ? "none" : "auto",
                position: "relative",
                overflow: "hidden",
                minHeight: 100,
              }}
            >
              {/* Diagonal bg — right half, image goes here */}
              <div style={{
                position: "absolute",
                top: 0, right: 0, bottom: 0,
                width: "55%",
                background: article.bgImage
                  ? `url(${article.bgImage}) center/cover no-repeat`
                  : article.accentColor,
                opacity: article.bgImage ? 0.08 : 1,
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
                pointerEvents: "none",
              }} />

              {/* Content */}
              <div style={{ flex: 1, padding: "24px 28px", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#bd93f9", letterSpacing: "-0.01em", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>
                  {article.title}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#8a8aa8", lineHeight: 1.65, marginBottom: 10 }}>{article.desc}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3a3a4a", letterSpacing: "0.06em" }}>{article.meta}</div>
              </div>

              {/* Arrow */}
              {!article.draft && (
                <div style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#3a3a4a", zIndex: 1, transition: "color 0.2s, transform 0.2s" }}>↗</div>
              )}
              {article.draft && (
                <div style={{ position: "absolute", top: 16, right: 16, fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "#1e1e25", border: "1px solid #32323d", color: "#5a5a72", letterSpacing: "0.1em", zIndex: 1 }}>draft</div>
              )}
            </motion.a>
          ))}
        </div>

        <div style={{ height: 32 }} />
      </div>
    </section>
  );
}
