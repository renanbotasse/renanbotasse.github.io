"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { detectLocale, getDictionary, type Dictionary, type Locale } from "@/i18n";

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") return stored;
  } catch {
    /* ignore */
  }
  return null;
}

function resolveLocale(): Locale {
  return readStoredLocale() ?? detectLocale();
}

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  t: getDictionary("en"),
  setLocale: () => {},
  toggleLocale: () => {},
  ready: false,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "pt" : "en");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      t: getDictionary(locale),
      setLocale,
      toggleLocale,
      ready,
    }),
    [locale, setLocale, toggleLocale, ready],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
