import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import RevealText from "./RevealText";

export default function About() {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      /* vertical rule draws as you scroll through */
      gsap.fromTo(
        ".about-rule-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 55%",
            scrub: 1,
          },
        }
      );

      /* headline line reveal */
      gsap.fromTo(
        ".about-headline .line-mask > span",
        { yPercent: 108 },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".about-headline",
            start: "top 78%",
          },
        }
      );

      /* stats + link slide up */
      gsap.fromTo(
        ".about-children",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 84%",
          },
        }
      );

      gsap.fromTo(
        ".about-ghost",
        { yPercent: 30 },
        {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-40"
    >
      {/* Ghost section number */}
      <span
        className="about-ghost pointer-events-none absolute -right-4 top-6 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02] md:-right-8"
        aria-hidden="true"
      >
        01
      </span>

      <div className="container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left rail */}
        <div className="flex flex-col items-start gap-8 lg:col-span-2">
          <div className="relative h-28 w-px overflow-hidden bg-border-faint">
            <div className="about-rule-fill h-full w-full origin-top bg-electric-green" />
          </div>
          <p className="editorial-label vertical-rl hidden lg:block">
            About — The Story
          </p>
        </div>

        {/* Main */}
        <div className="lg:col-span-10">
          <div className="mb-10 flex items-center gap-6 md:mb-14">
            <span className="font-anton text-sm tracking-[0.25em] text-electric-green">
              01
            </span>
            <span className="hairline w-16" />
            <span className="editorial-label">About — The Story</span>
          </div>

          <p className="about-headline font-anton text-[34px] uppercase leading-[1.05] text-white-highlight sm:text-[44px] md:text-[64px] lg:text-[72px]">
            <span className="line-mask">
              <span className="block">Pushing the</span>
            </span>
            <span className="line-mask">
              <span className="block">boundaries of</span>
            </span>
            <span className="line-mask">
              <span className="block text-electric-green">digital potential.</span>
            </span>
          </p>

          <div className="mt-12 grid max-w-4xl gap-10 border-l border-border-subtle pl-6 md:mt-16 md:gap-14 md:pl-12">
            <RevealText
              text="I am ABISHEKK.C, a MERN stack developer dedicated to architecting high-end digital experiences. My approach combines technical precision with a relentless focus on aesthetics and user psychology."
              className="text-xl leading-[1.6] text-foreground-text md:text-[28px] md:leading-[1.5]"
            />
            <RevealText
              text="With over 1 year of experience in the MERN ecosystem, I've delivered several projects ranging from sophisticated social platforms to high-performance e-commerce solutions."
              className="text-lg leading-[1.7] text-muted-text"
            />
          </div>

          {/* Stats */}
          <div className="about-stats mt-16 grid grid-cols-2 gap-10 border-t border-border-faint pt-10 md:mt-24 md:max-w-xl">
            <div className="about-children">
              <h3 className="font-anton text-5xl text-electric-green md:text-7xl">
                2+
              </h3>
              <p className="editorial-label mt-3">
                Years of Learning & Growth
              </p>
            </div>
            <div className="about-children border-l border-border-faint pl-8 md:pl-12">
              <h3 className="font-anton text-5xl text-electric-green md:text-7xl">
                10+
              </h3>
              <p className="editorial-label mt-3">
                Projects Delivered
              </p>
            </div>
          </div>

          <div className="about-children mt-14">
            <Link
              to="/skills"
              data-cursor-label="OPEN"
              className="group inline-flex items-center gap-4 font-anton text-sm uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green"
            >
              View Full Expertise
              <span className="inline-block text-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}