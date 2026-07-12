/**
 * UI chrome copy that is not tied to a specific data record (nav labels,
 * buttons, section titles/subtitles, accessibility strings). Content bound
 * to a specific role/service/metric lives alongside that record in
 * currentRoles.ts / experience.ts / services.ts / metrics.ts instead, using
 * the shared LocalizedText shape so nothing is duplicated here.
 */
export type TranslationDictionary = typeof translations.en;

export const translations = {
  en: {
    meta: {
      htmlLang: "en",
    },
    skipLink: "Skip to main content",
    nav: {
      about: "About",
      currentTeaching: "Currently Teaching",
      experience: "Experience",
      services: "Services",
      philosophy: "Philosophy",
      contact: "Contact",
    },
    languageSwitcher: {
      label: "Language",
      switchTo: "Switch to Spanish",
      announce: "Language changed to English",
    },
    themeToggle: {
      label: "Toggle theme",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
    },
    hero: {
      eyebrow: "English education for real-world communication",
      headline: "Helping learners communicate with confidence",
      headlineAlt: "Practical English education shaped by 28 years of experience",
      description: [
        "Christopher Rodríguez is an English educator, ESL specialist, curriculum designer, entrepreneur, and published author with 28 years of experience across primary, secondary, university, adult, corporate, and online education.",
        "He currently teaches English online at IMMERSION, works with adult learners through the Continuing Education Division of UNET, and leads Survival English, the educational venture he founded to provide practical and career-oriented English training.",
      ],
      primaryCta: "Explore My Teaching Experience",
      secondaryCta: "Contact Christopher",
      whatsappCta: "Ask About English Lessons",
      whatsappMessage:
        "Hello Christopher. I visited your professional portfolio and would like information about your English lessons or training programs.",
    },
    about: {
      title: "About Christopher",
      biography: [
        "Christopher Rodríguez is an English educator, ESL specialist, curriculum designer, entrepreneur, and published author with 28 years of experience in language education.",
        "His professional journey includes teaching in primary schools, secondary education, university programs, adult education, online learning environments, and professional training contexts.",
        "He has worked with learners and educational institutions connected to Venezuela, Colombia, and the United States.",
        "Christopher currently teaches English online at IMMERSION, an American online English school associated with New York. He also remains active at Universidad Nacional Experimental del Táchira through its Continuing Education Division, where he works with adult learners in Level 4 English.",
        "Alongside his institutional teaching roles, he continues leading Survival English, the educational venture he founded in 2017. Through Survival English, he creates practical language programs, intensive bootcamps, and specialized training connected to Business English, logistics, shipping and receiving, workplace communication, and real professional situations.",
        "Christopher holds a Bachelor of Arts in Education with a specialization in English from Universidad de Los Andes. His professional background also includes ESL teaching licensure issued through the North Carolina Board of Education.",
        "Earlier in his career, he taught English as a Second Language in elementary schools within Randolph County Schools in North Carolina. He has also worked in online education in Colombia, secondary education at Colegio Calasanz, and English for Business and International Trade at FESC.",
        "His teaching philosophy emphasizes communication, immersion, participation, practical application, individualized guidance, and student confidence.",
        "Beyond the classroom, Christopher is also the author of literary works including “Letters to an Impossible Love,” “Romantic Adventures of an English Knight,” and “Luna, la chica del Jardín.”",
      ],
      shortBio:
        "Christopher Rodríguez is an English educator and ESL specialist with 28 years of experience. He currently teaches through IMMERSION and UNET while leading Survival English, his independent professional English training venture.",
      mediumBio: [
        "Christopher Rodríguez is an English educator, ESL specialist, curriculum designer, and published author with 28 years of professional experience.",
        "He currently teaches English online at IMMERSION, works with adult learners through the Continuing Education Division of UNET, and continues developing practical and professionally oriented programs through Survival English, the educational venture he founded in 2017.",
        "His experience includes primary, secondary, university, adult, corporate, and online education across Venezuela, Colombia, and the United States.",
      ],
      publicationsTitle: "Published Works",
    },
    currentTeaching: {
      title: "Currently Teaching",
      subtitle:
        "Three active educational roles connected by one purpose: helping learners use English with confidence in real situations.",
      introduction: [
        "Christopher currently combines international online education, university continuing education, and independent professional English training.",
        "His current work allows him to teach different types of learners while applying practical, communicative, and learner-centered methodologies.",
      ],
      focusLabel: "Teaching focus",
      learnMore: "Learn more",
      showLess: "Show less",
      visitWebsite: "Visit website",
      aboutInstitution: "About the institution",
    },
    ecosystem: {
      title: "One Educator, Three Active Learning Environments",
      description: [
        "Christopher's current teaching activity connects three complementary educational environments:",
        "IMMERSION expands his international online teaching experience.",
        "UNET connects his work with adult university-level continuing education.",
        "Survival English allows him to design and deliver independent, specialized, and professionally oriented English programs.",
      ],
      nodes: {
        immersion: { name: "IMMERSION", focus: "International Online Teaching" },
        unet: { name: "UNET", focus: "University Continuing Education" },
        survivalEnglish: { name: "Survival English", focus: "Independent Professional Training" },
      },
      centerLabel: "Christopher Rodríguez",
    },
    experience: {
      title: "Experience Timeline",
      currentGroupTitle: "Current Roles",
      previousGroupTitle: "Previous Experience",
    },
    internationalExperience: {
      title: "An International Teaching Journey",
      description: [
        "Christopher's professional journey connects educational experiences in Venezuela, Colombia, and the United States.",
        "His background includes classroom teaching, elementary ESL instruction, secondary education, university continuing education, online English education, Business English, English for International Trade, and independent professional training.",
      ],
      countries: {
        venezuela: {
          name: "Venezuela",
          items: [
            "Universidad Nacional Experimental del Táchira",
            "Colegio Calasanz",
            "Survival English",
            "Universidad de Los Andes",
          ],
        },
        colombia: {
          name: "Colombia",
          items: ["Active English", "FESC"],
        },
        unitedStates: {
          name: "United States",
          items: [
            "Randolph County Schools, North Carolina",
            "IMMERSION, New York-associated online school",
          ],
        },
      },
      remoteNote: "Remote role — teaching is performed online, not from a New York office.",
    },
    philosophy: {
      title: "Teaching for Communication, Confidence and Real Use",
      text: [
        "Christopher's teaching approach is based on the idea that language becomes meaningful when learners can use it confidently in real situations.",
        "His work combines communication, guided practice, immersion, practical vocabulary, clear learning objectives, active participation and individualized support.",
        "Rather than treating English as a collection of isolated grammar rules, he helps students connect structure, vocabulary, listening and speaking with the situations they may encounter in everyday life, education and professional environments.",
      ],
      valuesTitle: "Core Values",
      values: [
        "Practicality",
        "Communication",
        "Confidence",
        "Participation",
        "Adaptability",
        "Clarity",
        "Individual Guidance",
        "Professional Relevance",
        "Cultural Awareness",
        "Continuous Learning",
      ],
    },
    stats: {
      title: "Christopher in Numbers",
    },
    services: {
      title: "Professional Services",
    },
    survivalEnglish: {
      cta: "Explore Survival English",
      secondaryCta: "Ask About Professional Training",
      programAreasTitle: "Program Areas",
      trainingApproachTitle: "Training Approach",
    },
    contact: {
      title: "Let's Talk About Your English Goals",
      text: "Contact Christopher to discuss online English lessons, professional language training, Business English, English for logistics, specialized programs or educational collaboration.",
      whatsappOption: "WhatsApp",
      emailOption: "Email",
      whatsappMessage:
        "Hello Christopher. I visited your professional portfolio and would like information about your English lessons or training programs.",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
      youtubeLabel: "Survival English on YouTube (opens in a new tab)",
    },
    common: {
      currentStatus: "Currently Active",
      founderStatus: "Founder · Currently Active",
      currentStatusSr: "Active status:",
      externalLinkSr: "(opens in a new tab)",
      readMore: "Read more",
      readLess: "Read less",
      present: "Present",
      remote: "Remote",
      founder: "Founder",
      toggleMenu: "Toggle navigation menu",
    },
  },
  es: {
    meta: {
      htmlLang: "es",
    },
    skipLink: "Saltar al contenido principal",
    nav: {
      about: "Acerca de",
      currentTeaching: "Actividad Docente",
      experience: "Experiencia",
      services: "Servicios",
      philosophy: "Filosofía",
      contact: "Contacto",
    },
    languageSwitcher: {
      label: "Idioma",
      switchTo: "Cambiar a inglés",
      announce: "Idioma cambiado a español",
    },
    themeToggle: {
      label: "Cambiar tema",
      switchToLight: "Cambiar a tema claro",
      switchToDark: "Cambiar a tema oscuro",
    },
    hero: {
      eyebrow: "Educación en inglés para la comunicación real",
      headline: "Ayudando a los estudiantes a comunicarse con confianza",
      headlineAlt: "Educación práctica en inglés respaldada por 28 años de experiencia",
      description: [
        "Christopher Rodríguez es educador de inglés, especialista en ESL, diseñador curricular, emprendedor y autor publicado, con 28 años de experiencia en educación primaria, secundaria, universitaria, de adultos, corporativa y virtual.",
        "Actualmente enseña inglés en línea en IMMERSION, trabaja con estudiantes adultos a través del Decanato de Formación Permanente de la UNET y dirige Survival English, el emprendimiento educativo que fundó para ofrecer formación práctica en inglés orientada al desarrollo profesional.",
      ],
      primaryCta: "Conocer Mi Experiencia Docente",
      secondaryCta: "Contactar a Christopher",
      whatsappCta: "Consultar sobre Clases de Inglés",
      whatsappMessage:
        "Hola Christopher. Visité tu portafolio profesional y quisiera información sobre tus clases de inglés o programas de capacitación.",
    },
    about: {
      title: "Acerca de Christopher",
      biography: [
        "Christopher Rodríguez es educador de inglés, especialista en ESL, diseñador curricular, emprendedor y autor publicado, con 28 años de experiencia en la enseñanza de idiomas.",
        "Su trayectoria profesional incluye educación primaria, secundaria, universitaria, formación de adultos, entornos de aprendizaje en línea y programas de capacitación profesional.",
        "Ha trabajado con estudiantes e instituciones educativas vinculadas a Venezuela, Colombia y Estados Unidos.",
        "Actualmente enseña inglés en línea en IMMERSION, una escuela estadounidense de inglés en línea asociada con Nueva York. También continúa activo en la Universidad Nacional Experimental del Táchira mediante su Decanato de Formación Permanente, donde trabaja con estudiantes adultos de Inglés Nivel 4.",
        "Junto con sus funciones institucionales, continúa dirigiendo Survival English, el emprendimiento educativo que fundó en 2017. Mediante Survival English, crea programas prácticos de idiomas, bootcamps intensivos y formación especializada relacionada con inglés empresarial, logística, envíos y recepción, comunicación laboral y situaciones profesionales reales.",
        "Christopher es Licenciado en Educación con especialización en Inglés por la Universidad de Los Andes. Su trayectoria profesional también incluye una licencia para la enseñanza de ESL emitida por el Consejo de Educación de Carolina del Norte.",
        "Durante una etapa anterior de su carrera, enseñó inglés como segunda lengua en escuelas primarias pertenecientes a Randolph County Schools, en Carolina del Norte. También ha trabajado en educación virtual en Colombia, educación secundaria en el Colegio Calasanz e inglés para Negocios y Comercio Internacional en FESC.",
        "Su filosofía docente enfatiza la comunicación, la inmersión, la participación, la aplicación práctica, la orientación individualizada y la confianza del estudiante.",
        "Además de su trabajo educativo, Christopher es autor de obras literarias como “Letters to an Impossible Love”, “Romantic Adventures of an English Knight” y “Luna, la chica del Jardín”.",
      ],
      shortBio:
        "Christopher Rodríguez es educador de inglés y especialista en ESL con 28 años de experiencia. Actualmente enseña mediante IMMERSION y la UNET mientras dirige Survival English, su emprendimiento independiente de capacitación profesional en inglés.",
      mediumBio: [
        "Christopher Rodríguez es educador de inglés, especialista en ESL, diseñador curricular y autor publicado, con 28 años de experiencia profesional.",
        "Actualmente enseña inglés en línea en IMMERSION, trabaja con estudiantes adultos mediante el Decanato de Formación Permanente de la UNET y continúa desarrollando programas prácticos orientados al entorno profesional a través de Survival English, el emprendimiento educativo que fundó en 2017.",
        "Su experiencia abarca educación primaria, secundaria, universitaria, de adultos, corporativa y virtual en Venezuela, Colombia y Estados Unidos.",
      ],
      publicationsTitle: "Obras Publicadas",
    },
    currentTeaching: {
      title: "Actividad Docente Actual",
      subtitle:
        "Tres roles educativos activos unidos por un mismo propósito: ayudar a los estudiantes a utilizar el inglés con confianza en situaciones reales.",
      introduction: [
        "Christopher combina actualmente la educación internacional en línea, la formación universitaria continua y la capacitación profesional independiente en inglés.",
        "Su trabajo actual le permite enseñar a distintos tipos de estudiantes mediante metodologías prácticas, comunicativas y centradas en el alumno.",
      ],
      focusLabel: "Enfoque docente",
      learnMore: "Saber más",
      showLess: "Ver menos",
      visitWebsite: "Visitar sitio web",
      aboutInstitution: "Acerca de la institución",
    },
    ecosystem: {
      title: "Un Educador, Tres Entornos Activos de Aprendizaje",
      description: [
        "La actividad docente actual de Christopher conecta tres entornos educativos complementarios:",
        "IMMERSION amplía su experiencia internacional en enseñanza en línea.",
        "La UNET vincula su trabajo con la formación universitaria continua para adultos.",
        "Survival English le permite diseñar e impartir programas independientes, especializados y orientados al inglés profesional.",
      ],
      nodes: {
        immersion: { name: "IMMERSION", focus: "Enseñanza Internacional en Línea" },
        unet: { name: "UNET", focus: "Formación Universitaria Continua" },
        survivalEnglish: {
          name: "Survival English",
          focus: "Capacitación Profesional Independiente",
        },
      },
      centerLabel: "Christopher Rodríguez",
    },
    experience: {
      title: "Línea de Tiempo Profesional",
      currentGroupTitle: "Roles Actuales",
      previousGroupTitle: "Experiencia Anterior",
    },
    internationalExperience: {
      title: "Una Trayectoria Docente Internacional",
      description: [
        "La trayectoria profesional de Christopher conecta experiencias educativas en Venezuela, Colombia y Estados Unidos.",
        "Su experiencia incluye enseñanza presencial, instrucción de ESL en educación primaria, educación secundaria, formación universitaria continua, enseñanza de inglés en línea, inglés empresarial, inglés para comercio internacional y capacitación profesional independiente.",
      ],
      countries: {
        venezuela: {
          name: "Venezuela",
          items: [
            "Universidad Nacional Experimental del Táchira",
            "Colegio Calasanz",
            "Survival English",
            "Universidad de Los Andes",
          ],
        },
        colombia: {
          name: "Colombia",
          items: ["Active English", "FESC"],
        },
        unitedStates: {
          name: "Estados Unidos",
          items: [
            "Randolph County Schools, Carolina del Norte",
            "IMMERSION, escuela en línea asociada con Nueva York",
          ],
        },
      },
      remoteNote:
        "Rol remoto — la enseñanza se realiza en línea, no desde una oficina en Nueva York.",
    },
    philosophy: {
      title: "Enseñar para Comunicar, Ganar Confianza y Utilizar el Idioma",
      text: [
        "El enfoque docente de Christopher parte de la idea de que un idioma adquiere verdadero significado cuando los estudiantes pueden utilizarlo con confianza en situaciones reales.",
        "Su trabajo combina comunicación, práctica guiada, inmersión, vocabulario práctico, objetivos claros de aprendizaje, participación activa y acompañamiento individualizado.",
        "En lugar de tratar el inglés como una colección de reglas gramaticales aisladas, ayuda a los estudiantes a conectar estructuras, vocabulario, comprensión auditiva y expresión oral con situaciones que pueden encontrar en la vida cotidiana, la educación y los entornos profesionales.",
      ],
      valuesTitle: "Valores Fundamentales",
      values: [
        "Practicidad",
        "Comunicación",
        "Confianza",
        "Participación",
        "Adaptabilidad",
        "Claridad",
        "Orientación Individual",
        "Relevancia Profesional",
        "Conciencia Cultural",
        "Aprendizaje Continuo",
      ],
    },
    stats: {
      title: "Christopher en Números",
    },
    services: {
      title: "Servicios Profesionales",
    },
    survivalEnglish: {
      cta: "Conocer Survival English",
      secondaryCta: "Consultar sobre Capacitación Profesional",
      programAreasTitle: "Áreas de Programas",
      trainingApproachTitle: "Enfoque de Capacitación",
    },
    contact: {
      title: "Conversemos sobre tus Objetivos con el Inglés",
      text: "Contacta a Christopher para conversar sobre clases de inglés en línea, capacitación lingüística profesional, inglés empresarial, inglés para logística, programas especializados o colaboración educativa.",
      whatsappOption: "WhatsApp",
      emailOption: "Correo electrónico",
      whatsappMessage:
        "Hola Christopher. Visité tu portafolio profesional y quisiera información sobre tus clases de inglés o programas de capacitación.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
      youtubeLabel: "Survival English en YouTube (se abre en una pestaña nueva)",
    },
    common: {
      currentStatus: "Actualmente Activo",
      founderStatus: "Fundador · Actualmente Activo",
      currentStatusSr: "Estado activo:",
      externalLinkSr: "(se abre en una pestaña nueva)",
      readMore: "Leer más",
      readLess: "Leer menos",
      present: "Actualidad",
      remote: "Remoto",
      founder: "Fundador",
      toggleMenu: "Alternar menú de navegación",
    },
  },
} as const;
