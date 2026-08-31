import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [heroStarted, setHeroStarted] = useState(false);

  const handleComplete = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (reduceMotion || loaded) {
      const delay = reduceMotion ? 0 : 100;
      const t = setTimeout(() => setHeroStarted(true), delay);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [loaded, reduceMotion]);

  return (
    <main>
      {!reduceMotion && (
        <AnimatePresence>
          {!loaded && <Preloader onComplete={handleComplete} />}
        </AnimatePresence>
      )}

      <Hero started={heroStarted} />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}