"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { useTheme } from "@/i18n/ThemeProvider";

const seg =
  "cursor-pointer px-2.5 py-1.5 font-mono text-[11px] font-bold tracking-wider uppercase";

/** Language + theme toggles: hard-edged segmented controls. */
export default function PreferenceControls({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex border-2 border-line" role="group" aria-label="Language">
        {(["en", "pt"] as const).map((l, i) => (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`${seg} ${i === 0 ? "border-r-2 border-line" : ""} ${
              locale === l ? "bg-ink text-ink-inv" : "bg-bg text-ink hover:bg-red hover:text-white"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        className={`${seg} border-2 border-line bg-bg text-ink hover:bg-red hover:text-white`}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
