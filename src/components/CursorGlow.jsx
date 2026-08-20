import { useEffect, useRef } from "react";
import { TECH_TERMS } from "../data";

const CELL = 160;

function hashCell(cx, cy) {
  let h = (cx * 374761393 + cy * 668265263) | 0;
  h = (h ^ (h >> 13)) * 1274126177 | 0;
  return ((h ^ (h >> 16)) >>> 0);
}

export default function CursorGlow() {
  const glowRef = useRef(null);
  const termRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const term = termRef.current;
    if (!glow || !term) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf;
    let lastIdx = -1;
    let idleTimer;

    const pickTerm = (px, py) => {
      const gx = Math.floor(px / CELL);
      const gy = Math.floor(py / CELL);
      let idx = hashCell(gx, gy) % TECH_TERMS.length;
      if (idx === lastIdx) idx = (idx + 1) % TECH_TERMS.length;
      lastIdx = idx;
      term.textContent = TECH_TERMS[idx];
    };

    const onMouseMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      pickTerm(x, y);
      glow.classList.add("is-active");
      term.classList.add("is-visible");
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        term.classList.remove("is-visible");
        glow.classList.remove("is-active");
      }, 2000);
    };

    const tick = () => {
      cx += (x - cx) * 0.09;
      cy += (y - cy) * 0.09;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy}px`;
      term.style.left = `${cx}px`;
      term.style.top = `${cy + 96}px`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-term" ref={termRef} aria-hidden="true" />
    </>
  );
}