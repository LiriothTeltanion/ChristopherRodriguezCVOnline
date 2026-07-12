import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";
import { YoutubeIcon } from "./icons/BrandIcons";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-page flex flex-col items-center gap-3 text-center text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:text-start">
        <p>
          © {new Date().getFullYear()} {profile.displayName}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.youtubeLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <YoutubeIcon size={17} aria-hidden="true" />
          </a>
          <a href="#hero" className="nav-link">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
