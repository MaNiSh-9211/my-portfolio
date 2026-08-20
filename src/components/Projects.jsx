import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { PROJECTS, LINKS } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <Reveal>
          <span className="section-code">[ 04 · shipped features ]</span>
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Featured <span className="grad-text">Work</span>
          </h2>
        </Reveal>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className={`glass-gloss project-card tint-${["o", "g", "b"][i]}`}>
              <div className="project-glow" />
              <div className="project-top">
                <span className="project-num">{p.num}</span>
                <span className="project-badge">{p.badge}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tag-cloud">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="project-link" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                View on GitHub <SkillIcon icon="mdi:arrow-up-right" size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}