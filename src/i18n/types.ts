export type Locale = "en" | "pt";

export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const raw = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
  return raw.startsWith("pt") ? "pt" : "en";
}

export type WorkCase = {
  name: string;
  status: string;
  period: string;
  type: string;
  accent: string;
  metrics: { label: string; value: string }[];
  architecture: string[];
  stack: string[];
  summary: string;
  highlights: { k: string; v: string }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { work: string; about: string; stack: string; notes: string; contact: string };
  hero: {
    role: string;
    body: string;
    specs: { key: string; value: string }[];
    cta: string;
    about: string;
  };
  work: {
    eyebrow: string;
    title: string;
    sideEyebrow: string;
    sideSubtitle: string;
    architecture: string;
    techStack: string;
    cases: WorkCase[];
    personal: {
      label: string;
      name: string;
      accent: string;
      desc: string;
      url: string;
      stack: string[];
    }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    domains: {
      id: string;
      label: string;
      summary: string;
      items: { name: string; note: string }[];
    }[];
  };
  about: {
    eyebrow: string;
    introLead: string;
    introYears: string;
    introTail: string;
    p1: string;
    p2: string;
    quote: string;
    quoteFooter: string;
    timelineEyebrow: string;
    principlesEyebrow: string;
    educationEyebrow: string;
    timeline: { company: string; role: string; period: string; current: boolean }[];
    principles: { num: string; title: string; text: string }[];
    education: { title: string; period: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hint: string;
    openDocs: string;
    groups: {
      label: string;
      accent: string;
      blurb: string;
      items: { name: string; note: string; tooltip: string; href: string; iconKey: string; color: string }[];
    }[];
  };
  notes: {
    eyebrow: string;
    title: string;
    featured: string;
    readMore: string;
    articles: {
      title: string;
      desc: string;
      meta: string;
      date: string;
      pinned: boolean;
      draft: boolean;
      accent: string;
      image: string;
      imageAlt: string;
      url: string;
    }[];
  };
  footer: {
    location: string;
  };
};
