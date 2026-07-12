import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, type LucideIcon } from "lucide-react";
import type { LanguageCode, ProfessionalRole } from "../data/types";
import { ActiveStatusBadge } from "./ActiveStatusBadge";
import { ExternalInstitutionLink } from "./ExternalInstitutionLink";
import { institutionLinks, immersionAboutTitle } from "../data/institutions";
import { useApp } from "../context/AppContext";

type CurrentRoleCardProps = {
  role: ProfessionalRole;
  lang: LanguageCode;
  Icon: LucideIcon;
};

export function CurrentRoleCard({ role, lang, Icon }: CurrentRoleCardProps) {
  const { t } = useApp();
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const statusLabel = role.founder ? t.common.founderStatus : t.common.currentStatus;
  const links = institutionLinks[role.id] ?? [];

  return (
    <div className="card flex h-full flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] text-[var(--accent)]"
          >
            <Icon size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {role.organization}
            </p>
            {role.organizationLabel ? (
              <p className="text-xs text-[var(--text-muted)]">{role.organizationLabel[lang]}</p>
            ) : null}
          </div>
        </div>
        <ActiveStatusBadge label={statusLabel} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-[var(--text)]">{role.role[lang]}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{role.location[lang]}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {role.workFormat ? <span className="tag">{role.workFormat[lang]}</span> : null}
          <span className="tag">{role.dates[lang]}</span>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-[var(--text)]">{role.shortDescription[lang]}</p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
      >
        {expanded ? t.currentTeaching.showLess : t.currentTeaching.learnMore}
        <ChevronDown
          aria-hidden="true"
          size={16}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-[var(--border)] pt-4">
              <p className="text-sm leading-relaxed text-[var(--text)]">
                {role.fullDescription[lang]}
              </p>

              {role.achievement ? (
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {role.achievement[lang]}
                </p>
              ) : null}

              {role.teachingFocus?.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {t.currentTeaching.focusLabel}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {role.teachingFocus.map((focus, index) => (
                      <li key={index} className="tag">
                        {focus[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {role.institutionContext ? (
                <details className="rounded-lg border border-[var(--border)] p-3">
                  <summary className="cursor-pointer text-sm font-semibold text-[var(--text)]">
                    {immersionAboutTitle[lang]}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {role.institutionContext[lang]}
                  </p>
                  {role.attributionNote ? (
                    <p className="mt-3 flex items-start gap-1.5 text-xs leading-snug text-[var(--text-muted)]">
                      <span aria-hidden="true">ⓘ</span>
                      <span>{role.attributionNote[lang]}</span>
                    </p>
                  ) : null}
                </details>
              ) : null}

              {links.length ? (
                <div className="flex flex-wrap gap-2">
                  {links.map((link) => (
                    <ExternalInstitutionLink
                      key={link.id}
                      link={link}
                      lang={lang}
                      externalSrSuffix={t.common.externalLinkSr}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
