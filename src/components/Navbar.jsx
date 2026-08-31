import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import resumeFile from "../assets/resume.pdf";
import { Download } from "lucide-react";
import Magnetic from "./Magnetic";
import { scrollToId, scrollToTop } from "../lib/scroll";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function NavLink({ item, active, onClick }) {
  return (
    <Magnetic strength={0.25}>
      <a
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        data-cursor-label="OPEN"
        className={`group relative block py-2 font-anton text-[11px] uppercase tracking-[0.24em] transition-colors duration-500 ${active ? "text-white-highlight" : "text-muted-text hover:text-white-highlight"
          }`}
        aria-current={active ? "true" : undefined}
      >
        <span className="relative z-10">{item.label}</span>
        <span
          className={`absolute bottom-0 left-0 h-[1.5px] bg-electric-green transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${active ? "w-full" : "w-0 group-hover:w-full"
            }`}
        />
      </a>
    </Magnetic>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((id) => {
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      window.location.href = `/#${id}`;
    }
  }, [location.pathname]);

  const goTop = useCallback(() => {
    if (location.pathname === "/") {
      scrollToTop();
      setActive("home");
    } else {
      window.location.href = "/#home";
    }
  }, [location.pathname]);

  const closeMobile = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[120] w-full transition-all duration-700 ${scrolled
            ? "border-b border-border-faint bg-background-base/80 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-6 md:py-8"
          }`}
      >
        <div className="container flex items-center justify-between">
          <Magnetic strength={0.2}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goTop();
              }}
              data-cursor-label="TOP"
              className="font-anton text-xl md:text-2xl uppercase tracking-[0.08em] text-white-highlight"
            >
              ABISHEKK<span className="text-electric-green">.C</span>
            </a>
          </Magnetic>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.id} item={item} active={active === item.id} onClick={() => goTo(item.id)} />
            ))}
            <Magnetic strength={0.3}>
              <a
                href={resumeFile}
                download="Abishek_C_Resume.pdf"
                data-cursor-label="SAVE"
                className="group ml-2 flex items-center gap-2 border border-border-subtle px-5 py-2.5 font-anton text-[11px] uppercase tracking-[0.24em] text-foreground-text transition-colors duration-500 hover:border-electric-green hover:text-electric-green"
              >
                <Download className="text-sm transition-transform duration-500 group-hover:translate-y-0.5" />
                Resume
              </a>
            </Magnetic>
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex h-12 w-12 flex-col items-center justify-center gap-[7px] border border-border-subtle bg-surface-elevated lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`burger-line w-5 ${isOpen ? "translate-y-[8.5px] rotate-45" : ""}`}
            />
            <span
              className={`burger-line w-5 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`burger-line w-5 ${isOpen ? "-translate-y-[8.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col justify-between bg-background-base lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pt-28 px-6 md:px-10">
              <motion.p
                className="editorial-label mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
              >
                NAVIGATION
              </motion.p>
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="overflow-hidden border-b border-border-faint"
                    initial={{ y: "110%" }}
                    animate={{ y: 0, transition: { delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobile();
                        setTimeout(() => goTo(item.id), 350);
                      }}
                      className="group flex items-center justify-between py-5"
                    >
                      <span className="font-anton text-5xl uppercase tracking-tight text-white-highlight transition-colors duration-300 group-active:text-electric-green">
                        {item.label}
                      </span>
                      <span className="font-anton text-sm uppercase tracking-widest text-faint-text">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              className="px-6 md:px-10 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55 } }}
            >
              <div className="flex flex-col gap-4">
                <a
                  href={resumeFile}
                  download="Abishek_C_Resume.pdf"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-3 bg-electric-green py-5 font-anton text-sm uppercase tracking-[0.3em] text-cta-text-on-green"
                >
                  <Download className="text-lg" />
                  Download Resume
                </a>
                <p className="editorial-label text-center">
                  abishekkc923@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}