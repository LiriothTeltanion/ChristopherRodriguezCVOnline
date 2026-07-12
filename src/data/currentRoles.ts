import type { LocalizedText, ProfessionalRole } from "./types";
import { immersionAttributionNote, immersionInstitutionalContext } from "./institutions";

/**
 * The three roles Christopher currently, simultaneously holds. displayOrder
 * is manually controlled (NOT derived from startDate) so Survival English's
 * 2017 start date never sorts it above IMMERSION's 2026 start date — see
 * spec section 12.
 */
export const currentRoles: ProfessionalRole[] = [
  {
    id: "immersion",
    role: {
      en: "Online English Teacher",
      es: "Profesor de Inglés en Línea",
    },
    organization: "IMMERSION",
    organizationLabel: {
      en: "American Online English School",
      es: "Escuela Estadounidense de Inglés en Línea",
    },
    organizationUrl: "https://www.immersion-school.com/",
    location: {
      en: "New York, United States",
      es: "Nueva York, Estados Unidos",
    },
    workFormat: {
      en: "Remote · Online Education",
      es: "Remoto · Educación en Línea",
    },
    dates: {
      en: "March 2026 – Present",
      es: "Marzo de 2026 – Actualidad",
    },
    startDate: "2026-03",
    endDate: null,
    current: true,
    founder: false,
    displayOrder: 1,
    shortDescription: {
      en: "Since March 2026, Christopher has worked as an online English teacher at IMMERSION, an American online English school associated with New York.",
      es: "Desde marzo de 2026, Christopher trabaja como profesor de inglés en línea en IMMERSION, una escuela estadounidense de inglés en línea asociada con Nueva York.",
    },
    fullDescription: {
      en: "Christopher currently teaches English remotely through IMMERSION. In this role, he supports learners in developing practical language skills for communication, comprehension, confidence, and everyday interaction. His teaching experience allows him to adapt lesson delivery to different learning objectives, proficiency levels, communication needs, and professional contexts. His work at IMMERSION forms part of his current international online teaching activity and complements his university and independent educational roles.",
      es: "Christopher enseña actualmente inglés de forma remota a través de IMMERSION. En este rol, acompaña a los estudiantes en el desarrollo de habilidades lingüísticas prácticas para la comunicación, la comprensión, la confianza y la interacción cotidiana. Su experiencia docente le permite adaptar las clases a diferentes objetivos de aprendizaje, niveles de dominio, necesidades comunicativas y contextos profesionales. Su trabajo en IMMERSION forma parte de su actividad docente internacional en línea y complementa sus funciones universitarias y su emprendimiento educativo independiente.",
    },
    teachingFocus: [
      { en: "Practical English communication", es: "Comunicación práctica en inglés" },
      { en: "Listening comprehension", es: "Comprensión auditiva" },
      { en: "Speaking confidence", es: "Confianza al hablar" },
      { en: "Vocabulary development", es: "Desarrollo de vocabulario" },
      { en: "Learner-centered instruction", es: "Enseñanza centrada en el estudiante" },
      { en: "Online language education", es: "Educación de idiomas en línea" },
      { en: "Real-world language use", es: "Uso del idioma en situaciones reales" },
      { en: "Individual learning objectives", es: "Objetivos individuales de aprendizaje" },
    ],
    institutionContext: immersionInstitutionalContext,
    attributionNote: immersionAttributionNote,
    verification: ["userConfirmed", "cvReported"],
  },
  {
    id: "unet",
    role: {
      en: "English Teacher, Continuing Education Division",
      es: "Profesor de Inglés, Decanato de Formación Permanente",
    },
    organization: "Universidad Nacional Experimental del Táchira — UNET",
    location: {
      en: "San Cristóbal, Venezuela",
      es: "San Cristóbal, Venezuela",
    },
    workFormat: {
      en: "University Continuing Education",
      es: "Formación Universitaria Continua",
    },
    dates: {
      en: "Present",
      es: "Actualidad",
    },
    endDate: null,
    current: true,
    founder: false,
    displayOrder: 2,
    shortDescription: {
      en: "Christopher currently teaches Level 4 English to adult learners through the Continuing Education Division of UNET.",
      es: "Christopher imparte actualmente Inglés Nivel 4 a estudiantes adultos a través del Decanato de Formación Permanente de la UNET.",
    },
    fullDescription: {
      en: "Christopher continues his university teaching activity through the Continuing Education Division of Universidad Nacional Experimental del Táchira. He facilitates Level 4 English instruction for adult learners and applies communicative competence frameworks to encourage participation, interaction, practical language use, and greater speaking confidence. His approach combines structured learning objectives with activities that help students use English actively rather than limiting instruction to memorization or passive grammar study.",
      es: "Christopher continúa su actividad docente universitaria a través del Decanato de Formación Permanente de la Universidad Nacional Experimental del Táchira. Imparte Inglés Nivel 4 a estudiantes adultos y aplica enfoques de competencia comunicativa para promover la participación, la interacción, el uso práctico del idioma y una mayor confianza al hablar. Su enfoque combina objetivos de aprendizaje estructurados con actividades que ayudan a los estudiantes a utilizar el inglés activamente, en lugar de limitar la enseñanza a la memorización o al estudio pasivo de la gramática.",
    },
    achievement: {
      en: "Reported approximately 20% growth in student participation through the implementation of communicative teaching strategies.",
      es: "Reportó un crecimiento aproximado del 20% en la participación estudiantil mediante la implementación de estrategias de enseñanza comunicativa.",
    },
    teachingFocus: [
      { en: "Adult education", es: "Educación de adultos" },
      { en: "Communicative competence", es: "Competencia comunicativa" },
      { en: "Level-based English instruction", es: "Enseñanza de inglés por niveles" },
      { en: "Active student participation", es: "Participación activa del estudiante" },
      { en: "Practical language application", es: "Aplicación práctica del idioma" },
      { en: "Confidence development", es: "Desarrollo de la confianza" },
      { en: "Continuing education", es: "Formación continua" },
      { en: "Learner-centered activities", es: "Actividades centradas en el estudiante" },
    ],
    verification: ["userConfirmed", "cvReported", "verificationRecommended"],
  },
  {
    id: "survival-english",
    role: {
      en: "Founder & English Instructor",
      es: "Fundador e Instructor de Inglés",
    },
    organization: "Survival English",
    organizationLabel: {
      en: "Independent English Education Venture",
      es: "Emprendimiento Independiente de Enseñanza de Inglés",
    },
    location: {
      en: "Independent Educational Venture",
      es: "Emprendimiento Educativo Independiente",
    },
    workFormat: {
      en: "Professional Training · Independent Education",
      es: "Capacitación Profesional · Educación Independiente",
    },
    dates: {
      en: "2017 – Present",
      es: "2017 – Actualidad",
    },
    startDate: "2017",
    endDate: null,
    current: true,
    founder: true,
    displayOrder: 3,
    shortDescription: {
      en: "Christopher founded Survival English in 2017 and continues actively developing and teaching its practical English programs.",
      es: "Christopher fundó Survival English en 2017 y continúa desarrollando e impartiendo activamente sus programas de inglés práctico.",
    },
    fullDescription: {
      en: "Survival English is Christopher's independent educational venture, created to make English learning practical, focused, and relevant to real professional and everyday situations. Through this initiative, he develops and teaches specialized English programs for professionals, adult learners, and individuals who need language skills connected to their work or personal objectives. The project reflects his experience in curriculum design, intensive learning formats, English for Specific Purposes, Business English, logistics, shipping and receiving, workplace communication, and practical language development. Christopher remains active as both the founder and instructor of Survival English.",
      es: "Survival English es el emprendimiento educativo independiente de Christopher, creado para convertir el aprendizaje del inglés en una experiencia práctica, enfocada y relevante para situaciones profesionales y cotidianas reales. Mediante esta iniciativa, desarrolla e imparte programas especializados de inglés para profesionales, estudiantes adultos y personas que necesitan habilidades lingüísticas relacionadas con su trabajo o sus objetivos personales. El proyecto refleja su experiencia en diseño curricular, formatos intensivos de aprendizaje, inglés con fines específicos, inglés empresarial, logística, envíos y recepción, comunicación laboral y desarrollo práctico del idioma. Christopher continúa activo como fundador e instructor de Survival English.",
    },
    achievement: {
      en: "Reported that more than 500 professionals have participated in specialized programs and bootcamps developed through Survival English.",
      es: "Reportó que más de 500 profesionales han participado en programas especializados y bootcamps desarrollados mediante Survival English.",
    },
    teachingFocus: [
      { en: "Business English", es: "Inglés Empresarial" },
      { en: "English for Logistics", es: "Inglés para Logística" },
      { en: "Shipping and Receiving English", es: "Inglés para Envíos y Recepción" },
      { en: "Workplace Communication", es: "Comunicación Laboral" },
      { en: "Professional Vocabulary", es: "Vocabulario Profesional" },
      { en: "Practical ESL Bootcamps", es: "Bootcamps Prácticos de ESL" },
      { en: "English for Specific Purposes", es: "Inglés con Fines Específicos" },
      { en: "Communication-Based Training", es: "Capacitación Basada en la Comunicación" },
      { en: "Customized Professional Programs", es: "Programas Profesionales Personalizados" },
    ],
    verification: ["userConfirmed", "cvReported", "verificationRecommended"],
  },
];

export const survivalEnglishExtras: {
  organizationType: LocalizedText;
  brandPurpose: LocalizedText;
  trainingApproach: LocalizedText;
} = {
  organizationType: {
    en: "Independent English Education Venture",
    es: "Emprendimiento Independiente de Enseñanza de Inglés",
  },
  brandPurpose: {
    en: "Practical English for real professional situations",
    es: "Inglés práctico para situaciones profesionales reales",
  },
  trainingApproach: {
    en: "Survival English programs are presented as focused learning experiences that connect vocabulary, communication practice, professional scenarios, listening, speaking, and practical application.",
    es: "Los programas de Survival English se presentan como experiencias de aprendizaje enfocadas que conectan vocabulario, práctica comunicativa, situaciones profesionales, comprensión auditiva, expresión oral y aplicación práctica.",
  },
};
