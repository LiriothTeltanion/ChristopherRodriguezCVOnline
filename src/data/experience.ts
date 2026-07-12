import type { ProfessionalRole } from "./types";

/**
 * Previous, concluded roles — kept separate from currentRoles.ts. Ordered
 * per spec section 12 "Previous Experience Order" (most recent first).
 * Descriptions are limited to what the long biography (section 10) states;
 * no additional specifics were invented for roles without further detail.
 */
export const previousExperience: ProfessionalRole[] = [
  {
    id: "active-english-colombia",
    role: {
      en: "Online English Teacher",
      es: "Profesor de Inglés en Línea",
    },
    organization: "Active English",
    location: {
      en: "Colombia",
      es: "Colombia",
    },
    workFormat: {
      en: "Online Education",
      es: "Educación Virtual",
    },
    dates: {
      en: "2022 – 2026",
      es: "2022 – 2026",
    },
    startDate: "2022",
    endDate: "2026",
    current: false,
    founder: false,
    displayOrder: 1,
    shortDescription: {
      en: "Christopher worked in online English education in Colombia through Active English.",
      es: "Christopher trabajó en educación virtual de inglés en Colombia a través de Active English.",
    },
    fullDescription: {
      en: "As part of his international teaching journey, Christopher worked in online education in Colombia, teaching English through Active English before beginning his current roles at IMMERSION, UNET and Survival English.",
      es: "Como parte de su trayectoria docente internacional, Christopher trabajó en educación virtual en Colombia, enseñando inglés a través de Active English antes de iniciar sus roles actuales en IMMERSION, la UNET y Survival English.",
    },
    verification: ["cvReported"],
  },
  {
    id: "colegio-calasanz",
    role: {
      en: "Secondary Education English Teacher",
      es: "Profesor de Inglés en Educación Secundaria",
    },
    organization: "Colegio Calasanz",
    location: {
      en: "Venezuela",
      es: "Venezuela",
    },
    dates: {
      en: "March 2018 – December 2018",
      es: "Marzo de 2018 – Diciembre de 2018",
    },
    startDate: "2018-03",
    endDate: "2018-12",
    current: false,
    founder: false,
    displayOrder: 2,
    shortDescription: {
      en: "Christopher taught English in secondary education at Colegio Calasanz.",
      es: "Christopher enseñó inglés en educación secundaria en el Colegio Calasanz.",
    },
    fullDescription: {
      en: "Christopher taught secondary education English at Colegio Calasanz, contributing to his broader background across primary, secondary, university, adult, corporate and online education.",
      es: "Christopher enseñó inglés en educación secundaria en el Colegio Calasanz, sumando esta etapa a su trayectoria en educación primaria, secundaria, universitaria, de adultos, corporativa y virtual.",
    },
    verification: ["cvReported"],
  },
  {
    id: "fesc",
    role: {
      en: "English for Business and International Trade Instructor",
      es: "Instructor de Inglés para Negocios y Comercio Internacional",
    },
    organization: "FESC — Formación de Estudios Superiores Comfanorte",
    location: {
      en: "Colombia",
      es: "Colombia",
    },
    dates: {
      en: "February 2015 – December 2015",
      es: "Febrero de 2015 – Diciembre de 2015",
    },
    startDate: "2015-02",
    endDate: "2015-12",
    current: false,
    founder: false,
    displayOrder: 3,
    shortDescription: {
      en: "Christopher taught English for Business and International Trade at FESC.",
      es: "Christopher enseñó inglés para Negocios y Comercio Internacional en FESC.",
    },
    fullDescription: {
      en: "At FESC (Formación de Estudios Superiores Comfanorte), Christopher taught English for Business and International Trade, an early step in the professionally oriented English instruction he continues today through Survival English.",
      es: "En FESC (Formación de Estudios Superiores Comfanorte), Christopher enseñó inglés para Negocios y Comercio Internacional, una etapa inicial de la enseñanza de inglés orientada al ámbito profesional que continúa hoy a través de Survival English.",
    },
    verification: ["cvReported"],
  },
  {
    id: "randolph-county-schools",
    role: {
      en: "ESL Teacher, Elementary Education",
      es: "Profesor de ESL en Educación Primaria",
    },
    organization: "Randolph County Schools",
    location: {
      en: "North Carolina, United States",
      es: "Carolina del Norte, Estados Unidos",
    },
    dates: {
      en: "July 2002 – July 2003",
      es: "Julio de 2002 – Julio de 2003",
    },
    startDate: "2002-07",
    endDate: "2003-07",
    current: false,
    founder: false,
    displayOrder: 4,
    shortDescription: {
      en: "Christopher taught English as a Second Language in elementary schools within Randolph County Schools, North Carolina.",
      es: "Christopher enseñó inglés como segunda lengua en escuelas primarias de Randolph County Schools, Carolina del Norte.",
    },
    fullDescription: {
      en: "Early in his career, Christopher taught English as a Second Language in elementary schools within Randolph County Schools in North Carolina, under the ESL teaching licensure issued through the North Carolina Board of Education.",
      es: "Al inicio de su carrera, Christopher enseñó inglés como segunda lengua en escuelas primarias de Randolph County Schools, en Carolina del Norte, bajo la licencia de enseñanza de ESL emitida por el Consejo de Educación de Carolina del Norte.",
    },
    verification: ["cvReported"],
  },
];
