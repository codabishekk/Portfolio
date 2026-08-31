import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../animations/gsap";
import portrait from "../assets/hero-new.jpg";
import resumeFile from "../assets/resume.pdf";
import { profile } from "../data/profile";

const LINE_1 = "FULL STACK";
const LINE_2 = "DEVELOPER";

function splitChars(text) {
  return text.split("").map((c, i) => ({
    char: c === " " ? "\u00A0" : c,
    id: `${i}-${c}`,
  }));
}

export default function Hero({ started }) {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  /* Preload hidden state so the intro can animate from it */
  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.set(".hero-char", { y: "112%" });
      gsap.set(".hero-meta [data-reveal]", { y: -16, opacity: 0 });
      gsap.set(".hero-body > *", { y: 28, opacity: 0 });
      gsap.set(".hero-foot [data-reveal]", { y: 18, opacity: 0 });
      gsap.set(".hero-portrait", { y: 40, opacity: 0 });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  /* Intro timeline */
  useLayoutEffect(() => {
    if (!started) return undefined;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(
          ".hero-meta [data-reveal], .hero-body > *, .hero-foot [data-reveal], .hero-portrait",
          { y: 0, opacity: 1 }
        );
        gsap.set(".hero-char", { y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(".hero-meta [data-reveal]", { y: 0, opacity: 1, duration: 1, stagger: 0.1 })
        .to(".hero-char", { y: 0, duration: 1.4, stagger: 0.026 }, "-=0.6")
        .to(
          ".hero-body > *",
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 },
          "-=1.0"
        )
        .to(
          ".hero-foot [data-reveal]",
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          "-=0.8"
        )
        .to(".hero-portrait", { y: 0, opacity: 1, duration: 1.4 }, "-=1.3");
    }, sectionRef);
    return () => ctx.revert();
  }, [started, reduce]);

  /* Mouse drift */
  useEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      const glowX = gsap.quickTo(".hero-glow", "x", { duration: 1.2, ease: "power3.out" });
      const glowY = gsap.quickTo(".hero-glow", "y", { duration: 1.2, ease: "power3.out" });
      const pX = gsap.quickTo(".hero-portrait", "x", { duration: 1.4, ease: "power3.out" });
      const pY = gsap.quickTo(".hero-portrait", "y", { duration: 1.4, ease: "power3.out" });

      const onMove = (e) => {
        if (window.innerWidth < 768) return;
        const dx = (e.clientX / window.innerWidth - 0.5) * 2;
        const dy = (e.clientY / window.innerHeight - 0.5) * 2;
        glowX(dx * 26);
        glowY(dy * 18);
        pX(dx * 12);
        pY(dy * 10);
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  /* Scroll parallax */
  useEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.to(".hero-watermark", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-parallax-img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-content", {
        yPercent: -8,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "72% top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-background-base pt-28 md:pt-36"
    >
      {/* Watermark */}
      <div
        className="hero-watermark hero-glow pointer-events-none absolute left-[-2%] bottom-[-7%] z-0 select-none whitespace-nowrap font-anton uppercase leading-none text-[26vw] text-white-highlight/[0.025]"
        aria-hidden="true"
      >
        ABISHEKK.C
      </div>

      {/* Soft accent glow */}
      <div
        className="hero-glow pointer-events-none absolute right-[-12%] top-[-18%] z-0 h-[46vw] w-[46vw] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,80,1) 0%, rgba(0,240,80,0) 65%)",
        }}
        aria-hidden="true"
      />

      {/* Top metadata */}
      <div className="hero-meta container hero-content relative z-10 mb-10 flex items-center justify-between md:mb-16">
        <p className="editorial-label" data-reveal>
          {profile.name} — Portfolio © 2026
        </p>
        <p className="editorial-label text-right" data-reveal>
          Available for opportunities
        </p>
      </div>

      {/* Heading */}
      <div className="container hero-content relative z-10">
        <div className="line-mask">
          <p
            className="hero-intro mb-4 flex items-center gap-3 font-anton text-[12px] uppercase tracking-[0.3em] text-electric-green md:mb-6 md:text-sm"
            data-reveal
          >
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-electric-green" />
            Hi, I'm {profile.firstName} —
          </p>
        </div>

        <h1
          className="font-anton uppercase leading-[0.95] tracking-[-0.01em]"
          aria-label={`${LINE_1} ${LINE_2}`}
        >
          <span className="line-mask block">
            <span className="block will-change-transform">
              {splitChars(LINE_1).map((c) => (
                <span
                  key={c.id}
                  className="hero-char inline-block text-[15vw] text-white-highlight md:text-[10vw] lg:text-[8.8vw]"
                  aria-hidden="true"
                >
                  {c.char}
                </span>
              ))}
            </span>
          </span>
          <span className="line-mask block">
            <span className="block will-change-transform">
              {splitChars(LINE_2).map((c) => (
                <span
                  key={c.id}
                  className="hero-char stroke-text inline-block text-[15vw] md:text-[10vw] lg:text-[8.8vw]"
                  aria-hidden="true"
                >
                  {c.char}
                </span>
              ))}
              <span className="hero-char inline-block text-[15vw] text-electric-green md:text-[10vw] lg:text-[8.8vw]" aria-hidden="true">
                .
              </span>
            </span>
          </span>
        </h1>
      </div>

      {/* Body + portrait */}
      <div className="container hero-content relative z-10 mt-12 grid flex-1 grid-cols-1 gap-14 md:mt-20 lg:grid-cols-12">
        <div className="hero-body lg:col-span-6">
          <p className="max-w-md text-lg leading-relaxed text-muted-text md:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 h-10 w-px bg-border-subtle" aria-hidden="true" />
        </div>

        <div className="lg:col-span-6">
          <div className="hero-portrait relative ml-auto w-full max-w-[300px] md:max-w-[340px]">
            <div className="border border-border-subtle bg-surface-elevated p-2">
              <div className="hero-parallax-img overflow-hidden">
                <img
                  src={portrait}
                  alt="Portrait of Abishekk C — full stack developer"
                  className="h-[320px] w-full object-cover grayscale md:h-[400px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex items-center justify-between px-1 pt-3 pb-1">
                <span className="font-anton text-[10px] uppercase tracking-[0.25em] text-muted-text">
                  ABISHEKK.C
                </span>
                <span className="font-anton text-[10px] uppercase tracking-[0.25em] text-electric-green">
                  (01)
                </span>
              </div>
            </div>
            <div
              className="absolute -right-3 -top-3 h-12 w-12 border-r border-t border-electric-green/60"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="container hero-content relative z-10 mt-16 flex items-end justify-between gap-8 pb-16 md:pb-20">
        <div className="hero-foot flex items-center gap-4" data-reveal>
          <div className="scroll-track h-16 w-px overflow-hidden bg-border-subtle">
            <span className="scroll-dot block h-1/2 w-full bg-electric-green" />
          </div>
          <span className="editorial-label">Scroll</span>
        </div>

        <div className="hero-foot hidden items-center gap-8 md:flex" data-reveal>
          {["Based in India", "MERN Stack", "AI / Full Stack"].map((m, i) => (
            <span key={m} className="flex items-center gap-8">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-border-subtle" />}
              <span className="font-anton text-[11px] uppercase tracking-[0.25em] text-muted-text">
                {m}
              </span>
            </span>
          ))}
        </div>

        <a
          href={resumeFile}
          download="Abishek_C_Resume.pdf"
          data-cursor-label="SAVE"
          className="hero-foot group hidden items-center gap-2 font-anton text-[11px] uppercase tracking-[0.25em] text-muted-text transition-colors hover:text-electric-green lg:flex"
          data-reveal
        >
          Resume
          <span className="inline-block transition-transform duration-500 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}