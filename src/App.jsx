import { lazy, Suspense } from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Scene3D = lazy(() => import("./components/Scene3D"));

export default function App() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <div className="grain" aria-hidden="true" />
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}