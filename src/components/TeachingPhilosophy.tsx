import { useApp } from "../context/AppContext";

export default function TeachingPhilosophy() {
  const { t } = useApp();

  return (
    <section
      id="philosophy"
      className="section container-page py-20"
      aria-labelledby="philosophy-title"
    >
      <h2 id="philosophy-title" className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        {t.philosophy.title}
      </h2>

      <div className="mt-6 max-w-3xl space-y-4">
        {t.philosophy.text.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-[var(--text)]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          {t.philosophy.valuesTitle}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {t.philosophy.values.map((value) => (
            <li key={value} className="tag">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
