import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const NAV_IDS = [
  "about",
  "current-teaching",
  "experience",
  "services",
  "philosophy",
  "contact",
] as const;

export default function Header() {
  const { t } = useApp();
  const [activeId, setActiveId] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLabel: Record<string, string> = {
    about: t.nav.about,
    "current-teaching": t.nav.currentTeaching,
    experience: t.nav.experience,
    services: t.nav.services,
    philosophy: t.nav.philosophy,
    contact: t.nav.contact,
  };

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        {t.skipLink}
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          className="whitespace-nowrap text-lg font-bold tracking-tight text-[var(--text)]"
        >
          {profile.displayName}
          <span className="ms-1 text-[var(--accent)]">.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              aria-current={activeId === id ? "true" : undefined}
            >
              {navLabel[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageSelector />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={t.common.toggleMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={activeId === id ? "true" : undefined}
                className="nav-link rounded-md px-2 py-2.5"
              >
                {navLabel[id]}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2 px-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
