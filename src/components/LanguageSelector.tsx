import { Languages } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function LanguageSelector() {
  const { lang, setLang, t, languageAnnouncement } = useApp();

  return (
    <>
      <button
        type="button"
        onClick={() => setLang(lang === "en" ? "es" : "en")}
        aria-label={t.languageSwitcher.switchTo}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--border)] px-2.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <Languages size={16} aria-hidden="true" />
        {lang.toUpperCase()}
      </button>
      <span aria-live="polite" className="sr-only">
        {languageAnnouncement}
      </span>
    </>
  );
}
