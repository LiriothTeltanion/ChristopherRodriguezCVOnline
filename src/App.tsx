import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { AppProvider, useApp } from "./context/AppContext";
import { seo } from "./data/seo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CurrentTeachingSection from "./components/CurrentTeachingSection";
import ProfessionalEcosystem from "./components/ProfessionalEcosystem";
import ExperienceTimeline from "./components/ExperienceTimeline";
import InternationalExperience from "./components/InternationalExperience";
import SurvivalEnglishSection from "./components/SurvivalEnglishSection";
import ServicesSection from "./components/ServicesSection";
import TeachingPhilosophy from "./components/TeachingPhilosophy";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function DocumentMeta() {
  const { lang } = useApp();

  useEffect(() => {
    document.title = seo.pageTitle[lang];

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", seo.metaDescription[lang]);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute("content", seo.ogDescription[lang]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute("content", seo.pageTitle[lang]);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    ogLocale?.setAttribute("content", lang === "en" ? "en_US" : "es_ES");

    const keywords = document.querySelector('meta[name="keywords"]');
    keywords?.setAttribute("content", seo.keywords[lang].join(", "));
  }, [lang]);

  return null;
}

function AppShell() {
  return (
    <>
      <DocumentMeta />
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <CurrentTeachingSection />
        <ProfessionalEcosystem />
        <ExperienceTimeline />
        <InternationalExperience />
        <SurvivalEnglishSection />
        <ServicesSection />
        <TeachingPhilosophy />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MotionConfig reducedMotion="user">
        <AppShell />
      </MotionConfig>
    </AppProvider>
  );
}
