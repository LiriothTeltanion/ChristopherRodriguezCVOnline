import { BookOpen } from "lucide-react";
import { useApp } from "../context/AppContext";
import { publications } from "../data/publications";

export default function AboutSection() {
  const { t, lang } = useApp();

  return (
    <section id="about" className="section container-page py-20" aria-labelledby="about-title">
      <h2 id="about-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.about.title}
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {t.about.biography.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-[var(--text)]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="card h-fit p-6">
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <BookOpen size={20} aria-hidden="true" />
            <h3 className="font-semibold">{t.about.publicationsTitle}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {publications.map((publication) => (
              <li key={publication.id}>
                <p className="font-medium text-[var(--text)]">"{publication.title}"</p>
                <p className="text-sm text-[var(--text-muted)]">{publication.type[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
