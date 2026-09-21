"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { useTheme } from "@/i18n/ThemeProvider";

export default function PreferenceControls({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div
        className="flex items-center rounded-full border border-border bg-surface p-0.5"
        role="group"
        aria-label="Language"
      >
        <button
          type="button"
          onClick={() => setLocale("en")}
          aria-pressed={locale === "en"}
          className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors ${
            locale === "en"
              ? "bg-indigo text-surface"
              : "text-muted hover:text-text"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("pt")}
          aria-pressed={locale === "pt"}
          className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors ${
            locale === "pt"
              ? "bg-indigo text-surface"
              : "text-muted hover:text-text"
          }`}
        >
          PT
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border2 hover:text-text"
      >
        {theme === "light" ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M21 14.3A8.4 8.4 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
