import Reveal from "./Reveal";
import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-head">
        <Reveal>
          <span className="section-code">[ 07 · build config ]</span>
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="grad-text">Foundation</span>
          </h2>
        </Reveal>
      </div>

      <div className="edu-wrap">
        <Reveal>
          <div className="glass-gloss edu-card">
            <div className="focus-tile tint-b edu-logo">
              <img
                className="edu-logo-img"
                src="/chitkara-university-logo.png"
                alt="Chitkara University"
                width="235"
                height="78"
              />
            </div>
            <div className="edu-info">
              <span className="edu-chip">B.E.</span>
              <h3>{EDUCATION.degree}</h3>
              <p className="edu-org">{EDUCATION.school}</p>
              <p className="edu-meta">{EDUCATION.meta}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}