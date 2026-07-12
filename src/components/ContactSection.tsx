import { Mail, MessageCircle } from "lucide-react";
import { useApp } from "../context/AppContext";
import { profile } from "../data/profile";

export default function ContactSection() {
  const { t } = useApp();
  const whatsappHref = `${profile.contact.whatsappUrl}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  return (
    <section id="contact" className="section container-page py-20" aria-labelledby="contact-title">
      <div className="card mx-auto max-w-2xl p-8 text-center">
        <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--text-muted)]">{t.contact.text}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.contact.whatsappOption} ${t.common.externalLinkSr}`}
            className="btn btn-primary"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t.contact.whatsappOption}
          </a>
          <a href={profile.contact.emailUrl} className="btn btn-secondary">
            <Mail size={18} aria-hidden="true" />
            {t.contact.emailOption}
          </a>
        </div>
      </div>
    </section>
  );
}
