import type { LocalizedText } from "./types";

export const seo: {
  pageTitle: LocalizedText;
  metaDescription: LocalizedText;
  ogDescription: LocalizedText;
  keywords: { en: string[]; es: string[] };
} = {
  pageTitle: {
    en: "Christopher Rodríguez | English Teacher, ESL Specialist and Curriculum Designer",
    es: "Christopher Rodríguez | Profesor de Inglés, Especialista en ESL y Diseñador Curricular",
  },
  metaDescription: {
    en: "Professional portfolio of Christopher Rodríguez, an English educator and ESL specialist with 28 years of experience. Currently teaching online through IMMERSION, working with adult learners at UNET and leading Survival English.",
    es: "Portafolio profesional de Christopher Rodríguez, educador de inglés y especialista en ESL con 28 años de experiencia. Actualmente enseña mediante IMMERSION, trabaja con estudiantes adultos en la UNET y dirige Survival English.",
  },
  ogDescription: {
    en: "Discover Christopher Rodríguez's experience in online English education, university continuing education, Business English, English for logistics, curriculum design and professional language training.",
    es: "Conoce la experiencia de Christopher Rodríguez en enseñanza de inglés en línea, formación universitaria continua, inglés empresarial, inglés para logística, diseño curricular y capacitación lingüística profesional.",
  },
  keywords: {
    en: [
      "Christopher Rodríguez English teacher",
      "Online English teacher",
      "ESL specialist",
      "English teacher Venezuela",
      "English teacher San Cristóbal",
      "Business English instructor",
      "Survival English",
      "UNET English teacher",
      "English for logistics",
      "English for shipping and receiving",
      "English curriculum designer",
      "Adult English education",
    ],
    es: [
      "Profesor de inglés en línea",
      "Profesor de inglés Venezuela",
      "Inglés empresarial",
      "Inglés para logística",
      "Enseñanza de ESL",
      "Capacitación profesional en inglés",
    ],
  },
};
