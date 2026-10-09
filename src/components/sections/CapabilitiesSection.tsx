"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

/** Tabbed capability domains; active tab is inverted (fill), not just recolored. */
export default function CapabilitiesSection() {
  const { t } = useLocale();
  const { capabilities } = t;
  const { domains } = capabilities;
  const [active, setActive] = useState(domains[0].id);
  const current = domains.find((d) => d.id === active) ?? domains[0];

  return (
    <section className="border-t-2 border-line px-5 pt-20 pb-24 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <p className="eyebrow mb-5">{capabilities.eyebrow}</p>
        <h2 className="h-display h-section mb-5 text-ink">
          {capabilities.title}
        </h2>
        <p className="mb-8 max-w-lg text-[16px] leading-relaxed text-muted">
          {capabilities.subtitle}
        </p>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist">
          {domains.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={active === d.id}
              onClick={() => setActive(d.id)}
              className="cap-tab label px-4 py-2.5 font-bold"
            >
              {d.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="brut-card p-6 sm:p-8">
          <p className="mb-6 text-[16px] leading-relaxed text-muted">{current.summary}</p>
          <div className="grid border-t border-l rule sm:grid-cols-2">
            {current.items.map((item) => (
              <div key={item.name} className="border-r border-b rule px-5 py-4">
                <div className="h-display mb-1 text-[17px] text-ink">
                  {item.name}
                </div>
                <div className="text-[13px] text-dim">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
