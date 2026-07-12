import type { ExternalLink, LocalizedText } from "./types";

/**
 * Institutional context is the organization's own public-facing description
 * of itself — not a list of Christopher's personal duties. Always pair with
 * immersionAttributionNote when displaying immersionInstitutionalContext.
 */
export const immersionInstitutionalContext: LocalizedText = {
  en: "IMMERSION presents itself as an American online English school focused on practical communication, cultural immersion, listening comprehension, speaking confidence, and American pronunciation. The school offers flexible online instruction through Zoom. Its public programs include individual lessons, small-group classes of approximately two to three students, conversational English, American pronunciation training, English for companies, and programs adapted to student goals and proficiency levels. The school states that group teaching may follow the World English program and that personalized learning programs can also be created according to individual needs.",
  es: "IMMERSION se presenta como una escuela estadounidense de inglés en línea enfocada en la comunicación práctica, la inmersión cultural, la comprensión auditiva, la confianza al hablar y la pronunciación estadounidense. La escuela ofrece enseñanza flexible en línea mediante Zoom. Sus programas públicos incluyen clases individuales, grupos pequeños de aproximadamente dos a tres estudiantes, inglés conversacional, formación en pronunciación estadounidense, inglés para empresas y programas adaptados a los objetivos y niveles de los estudiantes. La institución indica que la enseñanza grupal puede utilizar el programa World English y que también pueden crearse programas personalizados de acuerdo con las necesidades individuales.",
};

export const immersionAttributionNote: LocalizedText = {
  en: "The information above describes the school's general educational offering and does not imply that Christopher personally delivers every listed program.",
  es: "La información anterior describe la oferta educativa general de la institución y no implica que Christopher imparta personalmente todos los programas mencionados.",
};

export const immersionAboutTitle: LocalizedText = {
  en: "About IMMERSION",
  es: "Acerca de IMMERSION",
};

export const institutionLinks: Record<string, ExternalLink[]> = {
  immersion: [
    {
      id: "immersion-website",
      label: {
        en: "Visit the IMMERSION Website",
        es: "Visitar el Sitio de IMMERSION",
      },
      url: "https://www.immersion-school.com/",
      ariaLabel: {
        en: "Open the official IMMERSION website",
        es: "Abrir el sitio oficial de IMMERSION",
      },
      verified: true,
    },
  ],
  "survival-english": [
    {
      id: "survival-english-youtube",
      label: {
        en: "Visit Survival English on YouTube",
        es: "Visitar Survival English en YouTube",
      },
      url: "https://www.youtube.com/@Inglesdesupervivencia/featured",
      ariaLabel: {
        en: "Open the official Survival English YouTube channel",
        es: "Abrir el canal oficial de YouTube de Survival English",
      },
      verified: true,
    },
    {
      id: "survival-english-tiktok",
      label: {
        en: "Visit Survival English on TikTok",
        es: "Visitar Survival English en TikTok",
      },
      url: "https://www.tiktok.com/@inglesdesupervivencia",
      ariaLabel: {
        en: "Open the official Survival English TikTok profile",
        es: "Abrir el perfil oficial de TikTok de Survival English",
      },
      verified: true,
    },
    {
      id: "survival-english-instagram",
      label: {
        en: "Visit Survival English on Instagram",
        es: "Visitar Survival English en Instagram",
      },
      url: "https://www.instagram.com/inglesdesupervivencia/",
      ariaLabel: {
        en: "Open the official Survival English Instagram profile",
        es: "Abrir el perfil oficial de Instagram de Survival English",
      },
      verified: true,
    },
  ],
};
