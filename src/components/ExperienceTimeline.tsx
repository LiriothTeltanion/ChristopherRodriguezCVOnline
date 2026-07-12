import { useApp } from "../context/AppContext";
import { currentRoles } from "../data/currentRoles";
import { previousExperience } from "../data/experience";
import { ExperienceDetails } from "./ExperienceDetails";

export default function ExperienceTimeline() {
  const { t, lang } = useApp();
  const orderedCurrent = [...currentRoles].sort((a, b) => a.displayOrder - b.displayOrder);
  const orderedPrevious = [...previousExperience].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section
      id="experience"
      className="section container-page py-20"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.experience.title}
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            {t.experience.currentGroupTitle}
          </h3>
          <ul className="space-y-0">
            {orderedCurrent.map((role) => (
              <ExperienceDetails
                key={role.id}
                role={role}
                lang={lang}
                learnMoreLabel={t.currentTeaching.learnMore}
                showLessLabel={t.currentTeaching.showLess}
                activeLabel={t.common.currentStatus}
                founderLabel={t.common.founderStatus}
              />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold tracking-wide text-[var(--text-muted)] uppercase">
            {t.experience.previousGroupTitle}
          </h3>
          <ul className="space-y-0">
            {orderedPrevious.map((role) => (
              <ExperienceDetails
                key={role.id}
                role={role}
                lang={lang}
                learnMoreLabel={t.currentTeaching.learnMore}
                showLessLabel={t.currentTeaching.showLess}
                activeLabel={t.common.currentStatus}
                founderLabel={t.common.founderStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
