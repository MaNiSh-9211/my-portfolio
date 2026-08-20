import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SkillIcon from "./SkillIcon";
import { DISTRIBUTED_LINES } from "../data";
import { NODES, LINKS, MAIN_PATH, DETAILS } from "../archData";

function pos(box) {
  return {
    left: `${box.x / 16}%`,
    top: `${box.y / 9}%`,
    width: `${box.w / 16}%`,
    height: `${box.h / 9}%`
  };
}

function CanvasNode({ node, onOpen }) {
  return (
    <button
      type="button"
      className={`arch-canvas-node glass-gloss tint-${node.tint}`}
      style={pos(node)}
      onClick={() => onOpen(node.id)}
      title={`${node.title} — click for full details`}
      aria-label={`${node.title} details`}
    >
      <span className="acn-ico">
        <SkillIcon icon={node.icon} size={22} color="#fff" />
      </span>
      <span className="acn-body">
        <strong>{node.title}</strong>
        <small>{node.sub}</small>
        {node.tags.length > 0 && (
          <span className="acn-tags">
            {node.tags.map((t) => (
              <i key={t}>{t}</i>
            ))}
          </span>
        )}
      </span>
      <span className="acn-hint">details</span>
    </button>
  );
}

function DetailModal({ node, onClose }) {
  const d = DETAILS[node.id];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="arch-modal-overlay" onClick={onClose}>
      <div
        className={`arch-modal glass-gloss tint-${node.tint}`}
        role="dialog"
        aria-modal="true"
        aria-label={node.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="arch-modal-close" onClick={onClose} aria-label="Close details">
          ×
        </button>

        <div className="arch-modal-head">
          <span className="acn-ico">
            <SkillIcon icon={node.icon} size={26} color="#fff" />
          </span>
          <div>
            <h3>{node.title}</h3>
            <p>{d.tagline}</p>
          </div>
        </div>

        <div className="arch-modal-body">
          <section>
            <h4>What it does</h4>
            <p>{d.what}</p>
          </section>

          <section>
            <h4>How it works</h4>
            <ul>
              {d.how.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Failure handling</h4>
            <ul className="arch-modal-fail">
              {d.fail.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {d.spec && (
            <section>
              <h4>Specs</h4>
              <dl className="arch-modal-spec">
                {d.spec.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Architecture() {
  const [active, setActive] = useState(null);

  const open = (id) => setActive(id);
  const close = () => setActive(null);

  return (
    <section className="section" id="architecture">
      <div className="section-head">
        <Reveal>
          <span className="section-code">[ 02 · distributed core ]</span>
          <span className="section-tag">Architecture</span>
          <h2 className="section-title">
            The <span className="grad-text">Distributed</span> Layer
          </h2>
          <p className="section-sub">
            One request's full journey — from browser to database — through the systems I design
            and operate. Click any component to inspect it to the deepest detail.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="glass-grain arch-panel">
          <div className="arch-legend">
            <span className="arch-flow-label">
              <span className="flow-legend-dot" /> live request flow
            </span>
            <span>edge → gateway → services → pgBouncer → shards · click a component for details</span>
          </div>

          <div className="arch-canvas-wrap">
            <div className="arch-canvas">
              <svg className="arch-svg" viewBox="0 0 1600 900" aria-hidden="true">
                <defs>
                  <marker id="arr-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0 0 L10 5 L0 10 z" fill="#10b981" />
                  </marker>
                  <marker id="arr-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0 0 L10 5 L0 10 z" fill="rgba(255,255,255,0.4)" />
                  </marker>
                  <linearGradient id="mainGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="55%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {LINKS.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.6"
                    strokeDasharray="4 5"
                    strokeLinecap="round"
                    markerEnd="url(#arr-d)"
                    className="arch-link-path"
                  />
                ))}

                <path
                  d={MAIN_PATH}
                  fill="none"
                  stroke="url(#mainGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  markerEnd="url(#arr-s)"
                  className="arch-main-path"
                />

                <circle r="5.5" fill="#fff" className="arch-travel-dot">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path={MAIN_PATH} rotate="auto" />
                </circle>
              </svg>

              {NODES.map((n) => (
                <CanvasNode key={n.id} node={n} onOpen={open} />
              ))}
            </div>
          </div>

          <div className="arch-scroll-hint" aria-hidden="true">
            <span className="sh-arrow">→</span> scroll to explore the full system
          </div>

          <div className="arch-spec">
            <span className="spec-item">
              <span className="spec-k">p95 latency</span>
              <span className="spec-v">&lt; 6s config propagation</span>
            </span>
            <span className="spec-item">
              <span className="spec-k">reload</span>
              <span className="spec-v">zero-downtime</span>
            </span>
            <span className="spec-item">
              <span className="spec-k">sessions</span>
              <span className="spec-v">instant revocation</span>
            </span>
          </div>

          <div className="arch-resume">
            <h3>{DISTRIBUTED_LINES.heading}</h3>
            <p className="arch-resume-intro">{DISTRIBUTED_LINES.intro}</p>
            <ul className="arch-resume-list">
              {DISTRIBUTED_LINES.items.map((item, i) => (
                <li key={item}>
                  <span className={`resume-bullet tint-${["o", "g", "b"][i % 3]}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {active && <DetailModal node={NODES.find((n) => n.id === active)} onClose={close} />}
    </section>
  );
}