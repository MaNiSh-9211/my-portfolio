import { useEffect, useRef } from "react";
import * as THREE from "three";

const ORANGE = 0xf59e0b;
const GREEN = 0x10b981;
const BLUE = 0x3b82f6;
const FOG = 0x070b14;

const C1 = new THREE.Color(ORANGE);
const C2 = new THREE.Color(GREEN);
const C3 = new THREE.Color(BLUE);

function gradColor(t) {
  if (t < 0.5) return C1.clone().lerp(C2, t * 2);
  return C2.clone().lerp(C3, (t - 0.5) * 2);
}

export default function Scene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer;
    let frameId;
    let disposed = false;

    try {
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(FOG, 10, 26);

      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 1.4, 8);
      camera.lookAt(0, -1, 0);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      /* ---- Gradient wireframe grid (the "mesh") ---- */
      const SIZE = 34;
      const DIV = 34;
      const HALF = SIZE / 2;
      const step = SIZE / DIV;
      const gPos = [];
      const gCol = [];
      const tmp = new THREE.Color();

      for (let i = 0; i <= DIV; i++) {
        const a = -HALF + i * step;
        // line along z at x = a
        gPos.push(a, 0, -HALF, a, 0, HALF);
        tmp.copy(gradColor((a + HALF) / SIZE));
        gCol.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
        // line along x at z = a
        gPos.push(-HALF, 0, a, HALF, 0, a);
        tmp.copy(gradColor((a + HALF) / SIZE));
        gCol.push(tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b);
      }

      const gridGeo = new THREE.BufferGeometry();
      gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(gPos, 3));
      gridGeo.setAttribute("color", new THREE.Float32BufferAttribute(gCol, 3));
      const grid = new THREE.LineSegments(
        gridGeo,
        new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.34,
          depthWrite: false
        })
      );
      grid.position.y = -3.1;
      scene.add(grid);

      /* ---- Animated wireframe "graph" surface with gradient ---- */
      const W = 48;
      const H = 30;
      const planeGeo = new THREE.PlaneGeometry(W, H, 120, 80);
      planeGeo.rotateX(-Math.PI / 2);
      const posAttr = planeGeo.attributes.position;
      const base = new Float32Array(posAttr.array);
      const pCol = new Float32Array(posAttr.count * 3);
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const t = (x + W / 2) / W;
        const c = gradColor(t);
        pCol[i * 3] = c.r;
        pCol[i * 3 + 1] = c.g;
        pCol[i * 3 + 2] = c.b;
      }
      planeGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
      const graph = new THREE.Mesh(
        planeGeo,
        new THREE.MeshBasicMaterial({
          wireframe: true,
          vertexColors: true,
          transparent: true,
          opacity: 0.16,
          depthWrite: false
        })
      );
      graph.position.set(0, -1.4, -4);
      scene.add(graph);

      /* ---- Thin gradient rings for depth ---- */
      const rings = [];
      const ringDefs = [
        { r: 2.6, pos: [-4.2, 1.6, -2.5], rot: [0.6, 0, 0.5], color: ORANGE },
        { r: 2.1, pos: [4.4, 0.8, -3.0], rot: [0.4, 0.3, 0], color: GREEN },
        { r: 1.6, pos: [0.2, 3.2, -4.5], rot: [0.9, 0.2, 0.6], color: BLUE }
      ];

      ringDefs.forEach((d) => {
        const pts = [];
        for (let i = 0; i <= 120; i++) {
          const a = (i / 120) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(a) * d.r, Math.sin(a) * d.r, 0));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({
            color: d.color,
            transparent: true,
            opacity: 0.22,
            depthWrite: false
          })
        );
        line.position.set(d.pos[0], d.pos[1], d.pos[2]);
        line.rotation.set(d.rot[0], d.rot[1], d.rot[2]);
        scene.add(line);
        rings.push({ line, rot: d.rot, seed: Math.random() * 10 });
      });

      /* ---- Lights ---- */
      const lights = [
        new THREE.PointLight(ORANGE, 2.2, 30),
        new THREE.PointLight(GREEN, 2.0, 30),
        new THREE.PointLight(BLUE, 1.8, 30)
      ];
      lights[0].position.set(-5, 3, 4);
      lights[1].position.set(5, -2, 3);
      lights[2].position.set(0, -4, 3);
      lights.forEach((l) => scene.add(l));

      const mouse = { x: 0, y: 0 };
      const onMouseMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      let targetX = 0;
      let targetY = 0;

      const animate = () => {
        if (disposed) return;
        frameId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // undulate the graph surface
        const p = graph.geometry.attributes.position;
        const c = graph.geometry.attributes.color;
        for (let i = 0; i < p.count; i++) {
          const x = p.getX(i);
          const z = p.getZ(i);
          const wave =
            Math.sin(x * 0.32 + t * 0.7) * 0.55 * Math.sin(z * 0.5 + t * 0.5) +
            Math.cos(x * 0.16 + t * 0.3) * 0.25;
          p.setY(i, base[i * 3 + 1] + wave);
        }
        p.needsUpdate = true;
        c.needsUpdate = true;

        rings.forEach((r) => {
          r.line.rotation.x = r.rot[0] + Math.sin(t * 0.3 + r.seed) * 0.15;
          r.line.rotation.y = r.rot[1] + t * 0.1;
          r.line.position.y = r.pos[1] + Math.sin(t * 0.5 + r.seed) * 0.25;
        });

        targetX += (mouse.x * 0.9 - targetX) * 0.04;
        targetY += (-mouse.y * 0.6 - targetY) * 0.04;
        camera.position.x = targetX;
        camera.position.y = 1.4 + targetY;
        camera.lookAt(0, -1, 0);

        renderer.render(scene, camera);
      };

      animate();
    } catch (err) {
      console.warn("3D scene failed to init", err);
    }

    return () => {
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return <div className="bg-canvas" ref={containerRef} aria-hidden="true" />;
}