import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { LanguageCode, ProfessionalRole } from "../data/types";
import { ActiveStatusBadge } from "./ActiveStatusBadge";
import { ColombiaFlagIcon, UsaFlagIcon, VenezuelaFlagIcon } from "./icons/FlagIcons";

const FLAG_ICONS = {
  us: UsaFlagIcon,
  ve: VenezuelaFlagIcon,
  co: ColombiaFlagIcon,
};

type ExperienceDetailsProps = {
  role: ProfessionalRole;
  lang: LanguageCode;
  learnMoreLabel: string;
  showLessLabel: string;
  activeLabel: string;
  founderLabel: string;
};

/**
 * Single timeline entry (current or previous). Renders as a connected
 * vertical timeline node with an expandable detail panel — reused for both
 * groups in ExperienceTimeline so current vs. previous share one
 * accessible interaction pattern instead of two bespoke ones.
 */
export function ExperienceDetails({
  role,
  lang,
  learnMoreLabel,
  showLessLabel,
  activeLabel,
  founderLabel,
}: ExperienceDetailsProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const FlagIcon = role.locationFlag ? FLAG_ICONS[role.locationFlag] : null;

  return (
    <li className="relative pb-8 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-4 left-[5px] h-[calc(100%-1rem)] w-px bg-[var(--border)] last:hidden"
      />

      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-bold text-[var(--text)]">{role.role[lang]}</h3>
        {role.current ? (
          <ActiveStatusBadge label={role.founder ? founderLabel : activeLabel} />
        ) : null}
      </div>
      <p className="text-sm font-medium text-[var(--text-muted)]">{role.organization}</p>
      <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
        {FlagIcon ? <FlagIcon size={14} className="rounded-[2px]" aria-hidden="true" /> : null}
        {role.location[lang]} · {role.dates[lang]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
        {role.shortDescription[lang]}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
      >
        {expanded ? showLessLabel : learnMoreLabel}
        <ChevronDown
          aria-hidden="true"
          size={14}
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
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {role.fullDescription[lang]}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
