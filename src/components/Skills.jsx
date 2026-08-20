import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { SKILL_CATEGORIES } from "../data";

const TINTS = ["o", "g", "b"];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <Reveal>
          <span className="section-code">[ 03 · dependency graph ]</span>
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            Tech <span className="grad-text">Arsenal</span>
          </h2>
          <p className="section-sub">
            Real logos for every technology — hover to grow them.
          </p>
        </Reveal>
      </div>

      <div className="skill-deck">
        {SKILL_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.name} delay={Math.min(i * 0.04, 0.25)}>
            <div className={`glass-gloss skill-card tint-${TINTS[i % 3]}`}>
              <div className="skill-card-top">
                <span className="skill-card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{cat.name}</h3>
                <span className="skill-count">{cat.items.length}</span>
              </div>
              <div className="skill-chip-list">
                {cat.items.map(([name, icon]) => (
                  <span className="skill-chip" key={name} title={name}>
                    <SkillIcon icon={icon} size={24} />
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}