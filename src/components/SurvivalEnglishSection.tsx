import { Briefcase } from "lucide-react";
import { useApp } from "../context/AppContext";
import { currentRoles, survivalEnglishExtras } from "../data/currentRoles";
import { institutionLinks } from "../data/institutions";
import { YoutubeIcon } from "./icons/BrandIcons";

export default function SurvivalEnglishSection() {
  const { t, lang } = useApp();
  const survivalEnglish = currentRoles.find((role) => role.id === "survival-english")!;
  const youtubeLink = institutionLinks["survival-english"];

  return (
    <section
      id="survival-english"
      className="section container-page py-20"
      aria-labelledby="survival-english-title"
    >
      <div className="card overflow-hidden p-8">
        <div className="flex items-center gap-2 text-[var(--accent)]">
          <Briefcase size={20} aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-wide">
            {survivalEnglishExtras.organizationType[lang]}
          </p>
        </div>

        <h2
          id="survival-english-title"
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {survivalEnglish.organization}
        </h2>
        <p className="gradient-text mt-1 text-lg font-semibold">
          {survivalEnglishExtras.brandPurpose[lang]}
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--text)]">
          {survivalEnglish.fullDescription[lang]}
        </p>

        {survivalEnglish.achievement ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            {survivalEnglish.achievement[lang]}
          </p>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {t.survivalEnglish.programAreasTitle}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {survivalEnglish.teachingFocus?.map((area, index) => (
                <li key={index} className="tag">
                  {area[lang]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {t.survivalEnglish.trainingApproachTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
              {survivalEnglishExtras.trainingApproach[lang]}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={youtubeLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${youtubeLink.ariaLabel[lang]} ${t.common.externalLinkSr}`}
            className="btn btn-primary"
          >
            <YoutubeIcon size={18} aria-hidden="true" />
            {t.survivalEnglish.cta}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.survivalEnglish.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
