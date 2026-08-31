import { useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import { services } from "../data/services";
import { ArrowUpRight } from "lucide-react";

function ServiceRow({ service, hovered, dim, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      data-cursor-label="OPEN"
      className={`service-row relative flex items-baseline justify-between gap-6 border-b border-border-faint py-8 transition-opacity duration-500 md:py-12 ${
        dim ? "opacity-20" : "opacity-100"
      }`}
    >
      <div className="flex items-baseline gap-6 md:gap-12">
        <span className="font-anton text-xs tracking-[0.2em] text-electric-green transition-colors duration-500 md:text-sm">
          0{service.index}
        </span>
        <h3
          className={`font-anton text-3xl uppercase tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-4xl md:text-[64px] ${
            hovered ? "translate-x-2 text-electric-green md:translate-x-4" : "translate-x-0 text-white-highlight"
          }`}
        >
          {service.title}
        </h3>
      </div>

      <div
        className={`flex items-center gap-6 transition-all duration-500 ${
          hovered ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
        }`}
      >
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-text md:block">
          {service.description}
        </p>
        <ArrowUpRight className="size-6 shrink-0 text-electric-green md:size-8" />
      </div>

      {/* mobile description */}
      <p
        className={`absolute -bottom-3 left-7 right-0 text-xs leading-snug text-muted-text transition-all duration-500 md:hidden ${
          hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(-1);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-row",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        ".services-ghost",
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
    <section id="services" ref={sectionRef} className="relative overflow-hidden py-24 md:py-40">
      <span
        className="services-ghost pointer-events-none absolute -right-4 top-10 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02]"
        aria-hidden="true"
      >
        05
      </span>

      <div className="container relative z-10">
        <div className="mb-6 flex items-center gap-6 md:mb-12">
          <span className="font-anton text-sm tracking-[0.25em] text-electric-green">05</span>
          <span className="hairline w-16" />
          <span className="editorial-label">What I Build</span>
        </div>

        <h2 className="mb-10 font-anton text-5xl uppercase leading-[1.02] text-white-highlight md:mb-20 md:text-7xl">
          What I build.
        </h2>

        <div>
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={service}
              hovered={hovered === i}
              dim={hovered !== -1 && hovered !== i}
              onHover={() => setHovered(i)}
              onLeave={() => setHovered(-1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}