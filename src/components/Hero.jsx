import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { STATS, LINKS, HERO_STACK, ALL_STACK } from "../data";

const SOCIALS = [
  { icon: "simple-icons:github", href: LINKS.github },
  { icon: "simple-icons:linkedin", href: LINKS.linkedin },
  { icon: "simple-icons:gmail", href: LINKS.emailHref }
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-socials">
        {SOCIALS.map((s) => (
          <a
            key={s.icon}
            className="social-rail-btn glass"
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.icon.split(":")[1]}
          >
            <SkillIcon icon={s.icon} size={18} color="#edf1f7" />
          </a>
        ))}
        <span className="social-rail-line" />
      </div>

      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-left">
            <Reveal>
              <span className="hero-tag">
                <span className="pulse-dot" /> Available for opportunities
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="hero-title">
                Manish
                <span className="grad-text"> Kumar</span>
                <span className="hero-scribe">Software Engineer</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="hero-lead">
                Backend · Distributed Systems · AI-Powered Applications
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="hero-desc">
                An overthinker obsessed with distributed systems, keep brainstorming about all
                edge cases, scale-first design approach — I never design for the traffic I expect
                today. When one architecture handles more scale for the same financial and compute
                resources, I choose the one that scales to the most users.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View My Work
                </a>
                <a
                  className="btn-glass"
                  href="/Manish_Kumar_Resume.pdf"
                  download="Manish_Kumar_Resume.pdf"
                >
                  <SkillIcon icon="mdi:file-download-outline" size={18} color="#fff" />
                  Download Resume
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Get in Touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="hero-chips">
                {STATS.map((s) => (
                  <div className="hero-chip glass-gloss" key={s.label}>
                    <strong>{s.num}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hero-right-wrap">
            <div className="profile-card glass-gloss">
              <div className="profile-avatar">MK</div>
              <h3>Manish Kumar</h3>
              <p className="profile-role">Software Engineer</p>

              <div className="profile-status">
                <span className="pulse-dot" /> Open to work
              </div>

              <div className="profile-stack">
                <span>Core stack</span>
                <div className="profile-logos">
                  {HERO_STACK.slice(0, 6).map(([name, icon]) => (
                    <SkillIcon key={name} icon={icon} size={36} title={name} />
                  ))}
                </div>
              </div>

              <div className="profile-stat-row">
                <div><strong>8.77</strong><span>CGPA</span></div>
                <div><strong>3</strong><span>Platforms</span></div>
                <div><strong>10+</strong><span>Languages</span></div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((dup) => (
              <div className="ticker-group" key={dup}>
                {ALL_STACK.map(([name, icon]) => (
                  <div className="ticker-item glass-gloss" key={`${dup}-${name}`}>
                    <SkillIcon icon={icon} size={26} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}