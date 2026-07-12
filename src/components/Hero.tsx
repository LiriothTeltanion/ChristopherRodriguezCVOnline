import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { t } = useApp();
  const whatsappHref = `${profile.contact.whatsappUrl}?text=${encodeURIComponent(t.hero.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className="section hero-glow relative flex min-h-[88vh] items-center overflow-hidden pt-28 pb-16"
      aria-label={t.nav.about}
    >
      <div className="container-page">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="tag mb-6 w-fit"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={fadeUp}
          className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.12}
          variants={fadeUp}
          className="gradient-text mt-3 max-w-2xl text-xl font-semibold sm:text-2xl"
        >
          {t.hero.headlineAlt}
        </motion.p>

        <div className="mt-6 max-w-2xl space-y-4">
          {t.hero.description.map((paragraph, index) => (
            <motion.p
              key={index}
              initial="hidden"
              animate="visible"
              custom={0.18 + index * 0.06}
              variants={fadeUp}
              className="text-lg text-[var(--text-muted)]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.32}
          variants={fadeUp}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#current-teaching" className="btn btn-primary">
            {t.hero.primaryCta}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.secondaryCta}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.hero.whatsappCta} ${t.common.externalLinkSr}`}
            className="btn btn-secondary"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t.hero.whatsappCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
