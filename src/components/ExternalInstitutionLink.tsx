import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ExternalLink, LanguageCode } from "../data/types";

type ExternalInstitutionLinkProps = {
  link: ExternalLink;
  lang: LanguageCode;
  externalSrSuffix: string;
  className?: string;
};

/**
 * Renders a verified outbound link (e.g. the official IMMERSION website)
 * as a visually distinct, keyboard-accessible control. Always opens in a
 * new tab with rel="noopener noreferrer"; the "(opens in a new tab)" text
 * is exposed to screen readers even when the icon is purely decorative.
 */
export function ExternalInstitutionLink({
  link,
  lang,
  externalSrSuffix,
  className = "",
}: ExternalInstitutionLinkProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.ariaLabel[lang]} ${externalSrSuffix}`}
      className={`btn btn-secondary ${className}`}
    >
      {link.label[lang]}
      <ExternalLinkIcon aria-hidden="true" size={16} />
    </a>
  );
}
