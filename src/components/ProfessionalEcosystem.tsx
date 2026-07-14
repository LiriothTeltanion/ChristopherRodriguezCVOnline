import { Compass, GraduationCap, Globe } from "lucide-react";
import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";
import survivalEnglishLogo from "../assets/survival-english-logo.jpg";

export default function ProfessionalEcosystem() {
  const { t } = useApp();
  const { nodes } = t.ecosystem;

  const items = [
    {
      id: "immersion",
      Icon: Globe,
      logo: null,
      name: nodes.immersion.name,
      focus: nodes.immersion.focus,
    },
    {
      id: "unet",
      Icon: GraduationCap,
      logo: null,
      name: nodes.unet.name,
      focus: nodes.unet.focus,
    },
    {
      id: "survival-english",
      Icon: Compass,
      logo: survivalEnglishLogo,
      name: nodes.survivalEnglish.name,
      focus: nodes.survivalEnglish.focus,
    },
  ];

  return (
    <section
      id="ecosystem"
      className="section container-page py-20"
      aria-labelledby="ecosystem-title"
    >
      <h2 id="ecosystem-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.ecosystem.title}
      </h2>
      <div className="mt-4 max-w-3xl space-y-2">
        {t.ecosystem.description.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-[var(--text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="card mt-10 flex flex-col items-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-lg font-bold text-white"
          >
            CR
          </div>
          <p className="text-sm font-semibold text-[var(--text)]">{t.ecosystem.centerLabel}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
          {items.map((item, index) => (
            <div key={item.id} className="flex w-full flex-col items-center md:w-auto md:flex-row">
              {index > 0 ? <div className="ecosystem-connector" aria-hidden="true" /> : null}
              <div className="flex w-full max-w-[13rem] flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-5 py-4 text-center">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                ) : (
                  <item.Icon aria-hidden="true" size={22} className="text-[var(--accent)]" />
                )}
                <p className="text-sm font-bold text-[var(--text)]">{item.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{item.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">{profile.fullName}</p>
    </section>
  );
}
