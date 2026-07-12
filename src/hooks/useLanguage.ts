import { useCallback, useEffect, useState } from "react";
import type { LanguageCode } from "../data/types";
import { translations } from "../data/translations";

const STORAGE_KEY = "cr-language";
const SUPPORTED: LanguageCode[] = ["en", "es"];

function detectInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored as LanguageCode)) {
    return stored as LanguageCode;
  }

  const browserLangs = window.navigator.languages ?? [window.navigator.language];
  for (const browserLang of browserLangs) {
    const short = browserLang.slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(short as LanguageCode)) {
      return short as LanguageCode;
    }
  }

  return "en";
}

export function useLanguage() {
  const [lang, setLangState] = useState<LanguageCode>(() => detectInitialLanguage());
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: LanguageCode) => {
    setLangState(next);
    setAnnouncement(translations[next].languageSwitcher.announce);
  }, []);

  return {
    lang,
    setLang,
    t: translations[lang],
    languageAnnouncement: announcement,
  };
}
