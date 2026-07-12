import { Wifi } from "lucide-react";
import { useApp } from "../context/AppContext";
import { ColombiaFlagIcon, UsaFlagIcon, VenezuelaFlagIcon } from "./icons/FlagIcons";

export default function InternationalExperience() {
  const { t } = useApp();
  const { countries } = t.internationalExperience;
  const countryList = [
    { ...countries.venezuela, Flag: VenezuelaFlagIcon },
    { ...countries.colombia, Flag: ColombiaFlagIcon },
    { ...countries.unitedStates, Flag: UsaFlagIcon },
  ];

  return (
    <section
      id="international-experience"
      className="section container-page py-20"
      aria-labelledby="international-experience-title"
    >
      <h2
        id="international-experience-title"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {t.internationalExperience.title}
      </h2>
      <div className="mt-4 max-w-3xl space-y-2">
        {t.internationalExperience.description.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-[var(--text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {countryList.map((country) => (
          <div key={country.name} className="card p-6">
            <div className="flex items-center gap-2">
              <country.Flag size={20} className="rounded-[2px]" aria-hidden="true" />
              <h3 className="font-bold text-[var(--text)]">{country.name}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {country.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 flex items-start gap-2 text-sm text-[var(--text-muted)]">
        <Wifi size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" />
        <span>{t.internationalExperience.remoteNote}</span>
      </p>
    </section>
  );
}
