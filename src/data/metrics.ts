import type { ProfessionalMetric } from "./types";

/**
 * Content integrity gate (spec section 20). When false, metrics whose
 * sourceStatus is "verificationRecommended" are excluded from headline
 * stat counters. The underlying data is never deleted — only filtered at
 * render time — so it can be re-enabled the moment Christopher confirms it.
 * Statistics like "95% satisfaction", "20% participation growth", "15%
 * fluency improvement" and "90% pass rate" are intentionally NOT modeled
 * as headline metrics; the one figure with a reported source (20%
 * participation growth) is surfaced with cautious wording inside the UNET
 * role's `achievement` field instead (see currentRoles.ts).
 */
export const SHOW_UNVERIFIED_METRICS = false;

export const metrics: ProfessionalMetric[] = [
  {
    id: "years-experience",
    value: "28+",
    label: {
      en: "Years of Teaching Experience",
      es: "Años de Experiencia Docente",
    },
    sourceStatus: "cvReported",
    featured: true,
  },
  {
    id: "professionals-trained",
    value: "500+",
    label: {
      en: "Professionals Trained",
      es: "Profesionales Capacitados",
    },
    sourceStatus: "cvReported",
    featured: true,
    verificationNote: {
      en: "Reported in Christopher's current professional CV; figures can be updated once records are verified.",
      es: "Reportado en el currículo profesional actual de Christopher; la cifra puede actualizarse una vez verificados los registros.",
    },
  },
  {
    id: "countries-connected",
    value: "3",
    label: {
      en: "Countries Connected to His Teaching Career",
      es: "Países Vinculados a su Trayectoria Docente",
    },
    sourceStatus: "cvReported",
    featured: true,
    detail: {
      en: "Venezuela, Colombia, United States",
      es: "Venezuela, Colombia, Estados Unidos",
    },
  },
  {
    id: "current-active-roles",
    value: "3",
    label: {
      en: "Current Active Teaching Roles",
      es: "Roles Docentes Activos Actualmente",
    },
    sourceStatus: "userConfirmed",
    featured: true,
  },
];

export function getVisibleMetrics(): ProfessionalMetric[] {
  return metrics.filter(
    (metric) => SHOW_UNVERIFIED_METRICS || metric.sourceStatus !== "verificationRecommended",
  );
}
