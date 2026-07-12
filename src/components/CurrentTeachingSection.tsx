import { motion } from "framer-motion";
import { Compass, GraduationCap, Globe } from "lucide-react";
import { useApp } from "../context/AppContext";
import { currentRoles } from "../data/currentRoles";
import { CurrentRoleCard } from "./CurrentRoleCard";

const roleIcons: Record<string, typeof Globe> = {
  immersion: Globe,
  unet: GraduationCap,
  "survival-english": Compass,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: "easeOut" as const },
  }),
};

export default function CurrentTeachingSection() {
  const { t, lang } = useApp();
  const orderedRoles = [...currentRoles].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section
      id="current-teaching"
      className="section container-page py-20"
      aria-labelledby="current-teaching-title"
    >
      <h2 id="current-teaching-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.currentTeaching.title}
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-[var(--text-muted)]">
        {t.currentTeaching.subtitle}
      </p>

      <div className="mt-6 max-w-3xl space-y-3">
        {t.currentTeaching.introduction.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-[var(--text)]">
            {paragraph}
          </p>
        ))}
      </div>

      <div
        role="list"
        aria-label={t.currentTeaching.title}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {orderedRoles.map((role, index) => (
          <motion.div
            key={role.id}
            role="listitem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={index * 0.12}
            variants={fadeUp}
          >
            <CurrentRoleCard role={role} lang={lang} Icon={roleIcons[role.id] ?? Globe} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
