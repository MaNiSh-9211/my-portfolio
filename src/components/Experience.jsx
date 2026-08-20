import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { EXPERIENCE, LEADERSHIP } from "../data";

export default function Experience() {
  return (
    <>
      <section className="section" id="experience">
        <div className="section-head">
          <Reveal>
            <span className="section-code">[ 05 · deployment log ]</span>
            <span className="section-tag">Experience</span>
            <h2 className="section-title">
              The <span className="grad-text">Journey</span>
            </h2>
          </Reveal>
        </div>

        <div className="journey">
          <Reveal>
            <div className="journey-item">
              <div className="journey-rail">
                <span className="journey-dot" />
                <span className="journey-date">{EXPERIENCE.period}</span>
              </div>
              <div className="glass-grain journey-card">
                <div className="journey-card-head">
                  <div className="focus-tile tint-o">
                    <SkillIcon icon="mdi:briefcase-outline" size={22} color="#ffffff" />
                  </div>
                  <div>
                    <h3>{EXPERIENCE.role}</h3>
                    <p className="journey-org">{EXPERIENCE.org}</p>
                    <span className="journey-mode">{EXPERIENCE.mode}</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  {EXPERIENCE.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tag-cloud">
                  {EXPERIENCE.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="journey-docs">
              <span className="docs-label">Documents</span>
              <a
                className="glass-grain doc-card"
                href="/Gokloud_Offer_Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="focus-tile tint-o">
                  <SkillIcon icon="mdi:file-document-outline" size={22} color="#ffffff" />
                </div>
                <div className="doc-card-info">
                  <span className="doc-card-type">OFFER</span>
                  <h4>Offer Letter</h4>
                  <p>Gokloud Technologies</p>
                </div>
                <SkillIcon icon="mdi:arrow-up-right" size={18} color="#c2621a" />
              </a>
              <a
                className="glass-grain doc-card"
                href="/Gokloud_Relieving_Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="focus-tile tint-g">
                  <SkillIcon icon="mdi:certificate-outline" size={22} color="#ffffff" />
                </div>
                <div className="doc-card-info">
                  <span className="doc-card-type">CERTIFICATE</span>
                  <h4>Internship Certificate</h4>
                  <p>Gokloud Technologies</p>
                </div>
                <SkillIcon icon="mdi:arrow-up-right" size={18} color="#10b981" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="section-head">
          <Reveal>
            <span className="section-code">[ 06 · orchestration ]</span>
            <span className="section-tag">Leadership &amp; Strategy</span>
            <h2 className="section-title">
              Beyond the <span className="grad-text">Code</span>
            </h2>
          </Reveal>
        </div>

        <div className="lead-grid">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.1}>
              <div className={`glass-gloss lead-card tint-${l.tint}`}>
                <div className={`focus-tile tint-${l.tint}`}>
                  <SkillIcon icon={l.icon} size={24} color="#ffffff" />
                </div>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}