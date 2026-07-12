import type { LocalizedText } from "./types";

export const profile = {
  displayName: "Christopher Rodríguez",
  fullName: "Jack Christopher Rodríguez Belandria",

  primaryTitle: {
    en: "English Educator · ESL Specialist · Curriculum Designer",
    es: "Educador de Inglés · Especialista en ESL · Diseñador Curricular",
  } satisfies LocalizedText,

  extendedProfessionalLine: {
    en: "Online English Teacher at IMMERSION and UNET · Founder of Survival English · Published Author",
    es: "Profesor de Inglés en IMMERSION y la UNET · Fundador de Survival English · Autor Publicado",
  } satisfies LocalizedText,

  shortMobileLine: {
    en: "Teaching at IMMERSION, UNET and Survival English",
    es: "Profesor en IMMERSION, UNET y Survival English",
  } satisfies LocalizedText,

  keywords: {
    en: [
      "English Educator",
      "ESL Instructor",
      "Online English Teacher",
      "Business English Trainer",
      "Curriculum Designer",
      "Adult Education Specialist",
      "English for Specific Purposes",
      "Professional English Instructor",
      "Language Bootcamp Creator",
      "Published Author",
    ],
    es: [
      "Educador de Inglés",
      "Instructor de ESL",
      "Profesor de Inglés en Línea",
      "Instructor de Inglés Empresarial",
      "Diseñador Curricular",
      "Especialista en Educación de Adultos",
      "Inglés con Fines Específicos",
      "Instructor de Inglés Profesional",
      "Creador de Bootcamps de Idiomas",
      "Autor Publicado",
    ],
  },

  location: {
    en: "San Cristóbal, Venezuela",
    es: "San Cristóbal, Venezuela",
  } satisfies LocalizedText,

  contact: {
    whatsappUrl: "https://wa.me/584247518938",
    whatsappNumberDisplay: "+58 424 751 8938",
    emailUrl: "mailto:inglesdesupervivenciaa@gmail.com",
    email: "inglesdesupervivenciaa@gmail.com",
  },

  socialLinks: {
    youtube: "https://www.youtube.com/@Inglesdesupervivencia/featured",
  },

  statusLabel: {
    en: "Currently Active",
    es: "Actualmente Activo",
  } satisfies LocalizedText,

  founderStatusLabel: {
    en: "Founder · Currently Active",
    es: "Fundador · Actualmente Activo",
  } satisfies LocalizedText,
};
