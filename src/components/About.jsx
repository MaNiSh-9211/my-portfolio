import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { ABOUT_POINTS, FOCUS } from "../data";

function SectionHead({ tag, title, sub }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="section-tag">{tag}</span>
        <h2 className="section-title">{title}</h2>
        {sub ? <p className="section-sub">{sub}</p> : null}
      </Reveal>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead
        tag="About"
        title={
          <>
            Building <span className="grad-text">High-Performance</span> Software
          </>
        }
      />

      <div className="bento">
        <Reveal className="bento-cell">
          <div className="glass-grain about-bio">
            <span className="section-code">[ 01 · kernel ]</span>
            <span className="about-bio-tag">Who I Am</span>
            <h3>Software engineer obsessed with systems that scale.</h3>
            <p>
              Strong experience in backend development, distributed systems, and AI-powered
              applications. I focus on robust, scalable, secure platforms using modern web
              technologies, cloud-native development, and LLM-based systems.
            </p>
            <ul className="about-points">
              {ABOUT_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="bento-cell">
          <div className="focus-grid">
            {FOCUS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className={`glass-grain focus-card tint-${f.tint}`}>
                  <div className={`focus-tile tint-${f.tint}`}>
                    <SkillIcon icon={f.icon} size={22} color="#ffffff" />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}