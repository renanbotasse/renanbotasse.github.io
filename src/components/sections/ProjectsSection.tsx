"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SL = ({ children }: { children: string }) => (
  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#5a5a72", marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{ color: "#bd93f9" }}>{"//"}</span>{children}
  </div>
);

type TagColor = "purple" | "red" | "cyan" | "green" | "yellow";

const Tag = ({ label, color }: { label: string; color: TagColor }) => {
  const s: Record<TagColor, { color: string; border: string; bg: string }> = {
    purple: { color: "#bd93f9", border: "rgba(189,147,249,0.3)", bg: "rgba(189,147,249,0.10)" },
    red:    { color: "#ff5555", border: "rgba(255,85,85,0.3)",    bg: "rgba(255,85,85,0.08)"  },
    cyan:   { color: "#8be9fd", border: "rgba(139,233,253,0.3)",  bg: "rgba(139,233,253,0.06)"},
    green:  { color: "#50fa7b", border: "rgba(80,250,123,0.3)",   bg: "rgba(80,250,123,0.07)" },
    yellow: { color: "#f1fa8c", border: "rgba(241,250,140,0.3)",  bg: "rgba(241,250,140,0.07)"},
  };
  return (
    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: "3px 9px", borderRadius: 4, background: s[color].bg, color: s[color].color, border: `1px solid ${s[color].border}`, letterSpacing: "0.04em" }}>
      {label}
    </span>
  );
};

const KV = { display: "grid" as const, gridTemplateColumns: "88px 1fr", gap: "10px 20px" };
const K = { fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#3a3a4a", paddingTop: 3, lineHeight: 1.6 };
const V = { fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.75 };
const HR = { gridColumn: "1 / -1" as const, height: 1, background: "#26262f", margin: "4px 0" };

const workProjects = [
  {
    name: "2Lar",
    type: "Real Estate Platform · FULL-STACK",
    accentColor: "#bd93f9",
    tags: [
      { label: "React",      color: "purple" as TagColor },
      { label: "Next.js",    color: "purple" as TagColor },
      { label: "TypeScript", color: "purple" as TagColor },
      { label: "NestJS",     color: "red"    as TagColor },
      { label: "Node.js",    color: "green"  as TagColor },
      { label: "AWS",        color: "cyan"   as TagColor },
    ],
    details: (
      <div style={KV}>
        <div style={K}>problem</div>
        <div style={V}>The idea was simple. Connect people attending large events with nearby short-term rentals.<br /><br />The platform also handled things around the stay: shuttle logistics, concierge services and shared costs between guests.</div>
        <div style={HR} />
        <div style={K}>context</div>
        <div style={V}>When I joined, the project had already been under development for about <em style={{ color: "#bd93f9", fontStyle: "normal" }}>18 months</em>. It was built as a microfrontend architecture, but no MVP had actually shipped yet. The product definition was still evolving, while the roadmap already talked about national scale.</div>
        <div style={HR} />
        <div style={K}>decision</div>
        <div style={V}>
          We decided to step back from the microfrontend setup. Instead we moved to a <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>modular monolith</strong>. One deployable application, with clear internal boundaries between domains. The goal was simple: ship something real first, and keep the option to split services later.<br /><br />
          Along the way we ran into a bigger issue. <span style={{ color: "#ff5555" }}>AWS credentials had been exposed publicly and the CI pipelines were gone.</span> With no cloud specialist on the team, we rebuilt the infrastructure ourselves.
        </div>
        <div style={HR} />
        <div style={K}>result</div>
        <div style={V}>We cleaned up several APIs that were returning far more data than the frontend actually needed. Static assets were also compressed and reorganized.<br /><br /><span style={{ color: "#50fa7b" }}>The difference was noticeable.</span> Pages loaded faster and navigation felt much smoother. Platform reached <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>1,500+ registered properties</strong> beyond the initial hotel inventory.</div>
        <div style={HR} />
        <div style={K}>learned</div>
        <div style={V}>The main takeaway for me was about microfrontends. They solve organizational problems more than technical ones. If you do not have clear team boundaries and stable domain contracts, you get the complexity but not the benefits.</div>
      </div>
    ),
  },
  {
    name: "GoHike",
    type: "Social App · MOBILE DEVELOPER",
    accentColor: "#ff5555",
    tags: [
      { label: "React Native", color: "red"   as TagColor },
      { label: "NestJS",       color: "red"   as TagColor },
      { label: "Node.js",      color: "green" as TagColor },
      { label: "PostgreSQL",   color: "cyan"  as TagColor },
      { label: "MongoDB",      color: "green" as TagColor },
    ],
    details: (
      <div style={KV}>
        <div style={K}>problem</div>
        <div style={V}>GoHike was built around a simple idea. Help people organize outdoor activities again after the pandemic. Hikes, trail runs and other group activities. The bet was that people wanted to get back outside — they just needed a way to find others going to the same places.</div>
        <div style={HR} />
        <div style={K}>decision</div>
        <div style={V}>
          The main technical question was the data model for events. We ended up splitting the persistence layer. Events went to <em style={{ color: "#bd93f9", fontStyle: "normal" }}>MongoDB</em> because the schema was still unstable — we genuinely did not know what an event would look like in three months. User profiles, relationships, everything with a defined shape stayed in <strong style={{ color: "#e8e8f0", fontWeight: 500 }}>PostgreSQL</strong>, orchestrated through an ORM.<br /><br />
          It was not a religious choice between SQL and NoSQL. It was an honest answer to the state of the domain at that point.
        </div>
        <div style={HR} />
        <div style={K}>also</div>
        <div style={V}>There was also pressure to add heavier animations to the UI. After running some performance tests we saw that those transitions degraded responsiveness on mid-range devices. Pushed back with the data. <span style={{ color: "#50fa7b" }}>Kept the interactions minimal.</span> Efficiency over polish when polish has a cost.</div>
        <div style={HR} />
        <div style={K}>context</div>
        <div style={V}>Joined at repo creation. Built the MVP foundation. Left before public launch and investment rounds.</div>
      </div>
    ),
  },
  {
    name: "Independent Developer",
    type: "Freelance Projects",
    accentColor: "#8be9fd",
    tags: [
      { label: "React",      color: "purple" as TagColor },
      { label: "Next.js",    color: "purple" as TagColor },
      { label: "TypeScript", color: "purple" as TagColor },
      { label: "Node.js",    color: "green"  as TagColor },
    ],
    details: (
      <div style={KV}>
        <div style={K}>context</div>
        <div style={V}>Before joining product teams I worked independently on freelance projects. Web applications, landing pages and integrations for clients across different industries. First real exposure to owning a product end-to-end without a team or a manager.</div>
        <div style={HR} />
        <div style={K}>focus</div>
        <div style={V}>React and Next.js on the frontend. Node.js on the backend. Handled everything: scoping, development, deployment and client feedback loops. Technical decisions made alone, with no one to offload accountability to.</div>
        <div style={HR} />
        <div style={K}>outcome</div>
        <div style={V}>Delivered projects on time, mostly solo. Built enough confidence in the full stack and in working directly with clients to move into product company roles and take on larger-scale systems.</div>
      </div>
    ),
  },
];

function WorkCard({ project, index }: { project: typeof workProjects[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ marginBottom: 14 }}
    >
      <div style={{ border: `1px solid ${open ? "#32323d" : "#26262f"}`, borderRadius: 12, background: open ? "#1e1e25" : "#17171c", overflow: "hidden", transition: "border-color 0.25s, background 0.25s", position: "relative" }}>
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${project.accentColor}, transparent)`, opacity: open ? 1 : 0, transition: "opacity 0.25s" }} />

        {/* Header */}
        <button onClick={() => setOpen((v) => !v)} className="w-full text-left cursor-pointer" style={{ padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", color: "#e8e8f0", fontFamily: "'Syne', sans-serif", marginBottom: 4 }}>{project.name}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.14em", color: "#5a5a72", textTransform: "uppercase", marginBottom: 14 }}>{project.type}</div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => <Tag key={t.label} label={t.label} color={t.color} />)}
            </div>
          </div>
          <div style={{ flexShrink: 0, width: 28, height: 28, border: "1px solid #26262f", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#bd93f9" : "#5a5a72", fontSize: 12, transition: "transform 0.3s, color 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            ↓
          </div>
        </button>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 32px 28px", borderTop: "1px solid #26262f" }}>
                <div style={{ paddingTop: 24 }}>{project.details}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const personalProjects = [
  {
    label: "Side Project",
    name: "Artemis",
    nameColor: "#bd93f9",
    desc: "Local-first CRM to track job applications. Built because I was managing my own job search in a spreadsheet and kept losing context.",
    url: "https://artemisflow.vercel.app/",
    tags: [
      { label: "React",       color: "purple" as TagColor },
      { label: "TypeScript",  color: "purple" as TagColor },
      { label: "local-first", color: "cyan"   as TagColor },
    ],
  },
  {
    label: "Side Project",
    name: "Wonderlibrary",
    nameColor: "#ff5555",
    desc: "A library tracking app built around a visual interface. The tracker itself is simple. The real goal is learning Three.js in a real product context.",
    url: "https://wonderlibrary.vercel.app/",
    tags: [
      { label: "Next.js",  color: "red"   as TagColor },
      { label: "Three.js", color: "yellow"as TagColor },
      { label: "WebGL",    color: "cyan"  as TagColor },
    ],
  },
  {
    label: "Experiment",
    name: "Rasputin's Eye",
    nameColor: "#8be9fd",
    desc: "A tarot project without the usual mysticism and upsell. Draw cards, read the interpretation and reflect on it. No vague promises, no subscription.",
    url: "https://rasputins-eye.vercel.app/",
    tags: [
      { label: "React",      color: "cyan"   as TagColor },
      { label: "TypeScript", color: "purple" as TagColor },
    ],
  },
  {
    label: "Tool",
    name: "TomeKeep",
    nameColor: "#50fa7b",
    desc: "in progress",
    url: "https://github.com/renanbotasse/toome-keep",
    tags: [
      { label: "Next.js",    color: "purple" as TagColor },
      { label: "TypeScript", color: "purple" as TagColor },
      { label: "NestJS",     color: "red"    as TagColor },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section style={{ borderTop: "1px solid #26262f", padding: "80px 0" }}>
      <div className="mx-auto px-7" style={{ maxWidth: 740 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SL>professional work</SL>
        </motion.div>

        {workProjects.map((p, i) => <WorkCard key={p.name} project={p} index={i} />)}

        <div style={{ height: 48 }} />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SL>in progress</SL>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#8a8aa8", lineHeight: 1.7, marginBottom: 0 }}>
          Personal projects — experiments, tools, and ideas that needed to exist.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ marginTop: 32 }}>
          {personalProjects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card-project"
              style={{ border: "1px solid #26262f", borderRadius: 12, background: "#17171c", padding: "24px 28px", textDecoration: "none", display: "block" }}
            >
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.14em", color: "#3a3a4a", textTransform: "uppercase", marginBottom: 8 }}>{p.label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", fontFamily: "'Syne', sans-serif", color: p.nameColor, marginBottom: 10 }}>{p.name}</div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#8a8aa8", lineHeight: 1.6, marginBottom: 14, minHeight: 58 }}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Tag key={t.label} label={t.label} color={t.color} />)}
              </div>
            </motion.a>
          ))}
        </div>

        <div style={{ height: 32 }} />
      </div>
    </section>
  );
}
