import { ICONS } from "../lib/iconsData";

// Brand logos that are dark and invisible on dark glass — render them on a
// light badge with a forced dark color so they always pop.
const LIGHT_BADGE = {
  "logos:express": "#111111",
  "logos:rust": "#1a1a1a",
  "logos:kafka": "#17171a",
  "logos:puppeteer": "#222222",
  "logos:elasticsearch": "#141414",
  "simple-icons:github": "#0d1117",
  "simple-icons:amazonwebservices": "#131921",
  "simple-icons:vercel": "#000000",
  "simple-icons:langchain": "#1c1917",
  "simple-icons:owasp": "#234b3a",
  "simple-icons:cursor": "#0b0d10",
  "simple-icons:claudecode": "#1a1a1a",
  "simple-icons:opencode": "#101014",
  "simple-icons:trae": "#0d1117"
};

export default function SkillIcon({ icon, size = 22, className = "", color }) {
  const data = ICONS[icon];
  if (!data) return <span className={`skill-fallback ${className}`.trim()}>?</span>;

  const badge = LIGHT_BADGE[icon];
  const fill = badge ? badge : color || "currentColor";
  const isLight = badge !== undefined;

  // Size by HEIGHT so square logos and wide wordmarks all look the same size.
  const w = data.width || size;
  const h = data.height || size;
  const svgWidth = Math.round(size * (w / h) * 100) / 100;

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" ` +
    `width="${svgWidth}" height="${size}" fill="${fill}" aria-hidden="true">${data.body}</svg>`;

  return (
    <span
      className={`skill-icon ${isLight ? "light-badge" : ""} ${className}`.trim()}
      style={{ height: size, ...(badge ? { color: fill } : {}) }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}