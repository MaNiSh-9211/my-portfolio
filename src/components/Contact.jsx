import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { LINKS } from "../data";

const CONTACT = [
  { icon: "simple-icons:whatsapp", label: "Phone", value: LINKS.phone, href: LINKS.phoneHref },
  { icon: "simple-icons:gmail", label: "Email", value: LINKS.email, href: LINKS.emailHref },
  { icon: "simple-icons:github", label: "GitHub", value: "@MaNiSh-9211", href: LINKS.github },
  { icon: "simple-icons:linkedin", label: "LinkedIn", value: "/in/manish9211", href: LINKS.linkedin }
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="glass-grain contact-card">
          <span className="section-code">[ 08 · endpoint ]</span>
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's Build Something <span className="grad-text">Amazing</span>
          </h2>
          <p className="section-sub">
            Open to software engineering roles, system design and AI-application work.
          </p>

          <div className="contact-grid">
            {CONTACT.map((c) => (
              <a
                className="contact-item"
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="contact-ico">
                  <SkillIcon icon={c.icon} size={22} color="#edf1f7" />
                </div>
                <div>
                  <strong>{c.label}</strong>
                  <span>{c.value}</span>
                </div>
              </a>
            ))}
          </div>

          <a className="btn btn-primary" href={LINKS.emailHref}>
            Start a Conversation
          </a>
        </div>
      </Reveal>
    </section>
  );
}