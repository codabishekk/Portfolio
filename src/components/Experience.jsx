import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import { experiences } from "../data/experience";

export default function Experience() {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      /* progressive timeline draw */
      gsap.fromTo(
        ".exp-rule-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 1,
          },
        }
      );

      /* rows reveal sequentially */
      gsap.fromTo(
        ".exp-row",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".exp-list", start: "top 78%" },
        }
      );

      gsap.fromTo(
        ".exp-ghost",
        { yPercent: 32 },
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
    <section id="experience" ref={sectionRef} className="relative overflow-hidden py-24 md:py-40">
      <span
        className="exp-ghost pointer-events-none absolute -right-4 top-10 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02]"
        aria-hidden="true"
      >
        03
      </span>

      <div className="container relative z-10">
        <div className="mb-6 flex items-center gap-6 md:mb-12">
          <span className="font-anton text-sm tracking-[0.25em] text-electric-green">03</span>
          <span className="hairline w-16" />
          <span className="editorial-label">Experience</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left sticky rail */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-anton text-4xl uppercase leading-[1.02] text-white-highlight md:text-5xl">
                The journey
                <br />
                so far.
              </h2>
              <div className="relative mt-10 h-32 w-px overflow-hidden bg-border-faint">
                <div className="exp-rule-fill h-full w-full origin-top bg-electric-green" />
              </div>
              <p className="editorial-label mt-6 max-w-[220px] leading-relaxed">
                Where engineering meets intent.
              </p>
            </div>
          </div>

          {/* Entries */}
          <div className="exp-list lg:col-span-9">
            {experiences.map((exp) => (
              <article key={exp.index} className="exp-row group relative lg:pl-8">
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 bg-surface-elevated opacity-0 transition-opacity duration-700 group-hover:opacity-60" />

                <div className="relative grid grid-cols-1 gap-6 border-b border-border-faint py-10 sm:grid-cols-12 md:py-14">
                  <div className="flex items-center gap-4 sm:col-span-4 md:col-span-3">
                    <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-electric-green transition-transform duration-500 group-hover:scale-150" />
                    <span className="editorial-label">{exp.period}</span>
                  </div>

                  <div className="sm:col-span-8 md:col-span-9">
                    <p className="mb-2 font-anton text-[11px] uppercase tracking-[0.3em] text-electric-green">
                      {exp.company}
                    </p>
                    <h3 className="font-anton text-3xl uppercase text-white-highlight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:text-5xl">
                      {exp.role}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-text md:text-lg">
                      {exp.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="translate-y-3 border border-border-subtle px-3 py-1.5 font-anton text-[10px] uppercase tracking-[0.2em] text-muted-text opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:border-electric-green/50 group-hover:text-electric-green group-hover:opacity-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ghost index */}
                  <span
                    className="pointer-events-none absolute -right-2 bottom-4 select-none font-anton text-[64px] leading-none text-white-highlight/[0.04] transition-all duration-700 group-hover:text-electric-green/20 md:text-[100px]"
                    aria-hidden="true"
                  >
                    {exp.index}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}