import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";
import { institutionLinks } from "../data/institutions";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "./icons/BrandIcons";

const socialIcons: Record<string, typeof YoutubeIcon> = {
  "survival-english-youtube": YoutubeIcon,
  "survival-english-tiktok": TiktokIcon,
  "survival-english-instagram": InstagramIcon,
};

export default function Footer() {
  const { t, lang } = useApp();
  const socialLinks = institutionLinks["survival-english"] ?? [];

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-page flex flex-col items-center gap-3 text-center text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:text-start">
        <p>
          © {new Date().getFullYear()} {profile.displayName}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const SocialIcon = socialIcons[link.id] ?? YoutubeIcon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.ariaLabel[lang]} ${t.common.externalLinkSr}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <SocialIcon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <a href="#hero" className="nav-link">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
