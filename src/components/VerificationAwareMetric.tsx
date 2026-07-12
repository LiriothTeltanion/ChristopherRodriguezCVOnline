import { Info } from "lucide-react";
import type { LanguageCode, ProfessionalMetric } from "../data/types";

type VerificationAwareMetricProps = {
  metric: ProfessionalMetric;
  lang: LanguageCode;
};

/**
 * Renders a single headline stat. Technical sourceStatus values
 * ("cvReported", "verificationRecommended", ...) are never shown verbatim
 * to visitors — only the pre-written, cautiously worded verificationNote
 * (when present) is displayed, in small but readable text next to a
 * neutral info icon, never hidden inside a hover-only tooltip.
 */
export function VerificationAwareMetric({ metric, lang }: VerificationAwareMetricProps) {
  return (
    <div className="card flex flex-col gap-1 p-6 text-center">
      <span className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl">
        {metric.value}
      </span>
      <span className="text-sm font-medium text-[var(--text-muted)]">{metric.label[lang]}</span>
      {metric.detail ? (
        <span className="text-xs text-[var(--text-muted)]">{metric.detail[lang]}</span>
      ) : null}
      {metric.verificationNote ? (
        <p className="mt-2 flex items-start gap-1.5 text-left text-xs leading-snug text-[var(--text-muted)]">
          <Info aria-hidden="true" size={14} className="mt-0.5 shrink-0" />
          <span>{metric.verificationNote[lang]}</span>
        </p>
      ) : null}
    </div>
  );
}
