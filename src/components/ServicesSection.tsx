import { useApp } from "../context/AppContext";
import { services, servicesAvailabilityNote } from "../data/services";

export default function ServicesSection() {
  const { t, lang } = useApp();

  return (
    <section
      id="services"
      className="section container-page py-20"
      aria-labelledby="services-title"
    >
      <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.services.title}
      </h2>
      <p className="mt-3 max-w-2xl text-[var(--text-muted)]">{servicesAvailabilityNote[lang]}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="card p-6">
            <h3 className="font-bold text-[var(--text)]">{service.title[lang]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {service.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
