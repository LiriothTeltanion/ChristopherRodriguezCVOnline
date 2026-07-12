import { useApp } from "../context/AppContext";
import { getVisibleMetrics } from "../data/metrics";
import { VerificationAwareMetric } from "./VerificationAwareMetric";

export default function StatsSection() {
  const { t, lang } = useApp();
  const visibleMetrics = getVisibleMetrics();

  return (
    <section id="stats" className="section container-page py-20" aria-labelledby="stats-title">
      <h2 id="stats-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.stats.title}
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleMetrics.map((metric) => (
          <VerificationAwareMetric key={metric.id} metric={metric} lang={lang} />
        ))}
      </div>
    </section>
  );
}
