import { useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import { Link } from "react-router-dom";
import { skillCategories } from "../data/skills";

// eslint-disable-next-line no-unused-vars
function TechRow({ name, icon: Icon, hovered, dim, onHover, onLeave }) {
  const rowRef = useRef(null);
  const iconRef = useRef(null);

  const onMove = (e) => {
    if (window.innerWidth < 768 || !hovered || !iconRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 26;
    const y = e.clientY - rect.top - 26;
    gsap.to(iconRef.current, { x, y, duration: 0.5, ease: "power3.out" });
  };

  return (
    <div
      ref={rowRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      className={`tech-row relative flex items-baseline justify-between border-b border-border-faint py-5 transition-opacity duration-500 md:py-7 ${
        dim ? "opacity-20" : "opacity-100"
      }`}
    >
      <span
        className={`font-anton text-4xl uppercase tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl md:text-[64px] ${
          hovered ? "translate-x-4 text-electric-green md:translate-x-6" : "translate-x-0 text-foreground-text"
        }`}
      >
        {name}
      </span>
      <span
        className={`editorial-label hidden transition-opacity duration-300 sm:block ${
          hovered ? "text-electric-green opacity-100" : "opacity-40"
        }`}
      >
        {hovered ? "— In Motion" : "Hover"}
      </span>

      {/* Cursor-following icon */}
      <span
        ref={iconRef}
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 flex h-13 w-13 items-center justify-center text-electric-green transition-opacity duration-300 ${
          hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Icon className="size-7" strokeWidth={1.6} />
      </span>
    </div>
  );
}

function CategoryBlock({ category }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(-1);

  return (
    <div ref={ref} className="tech-cat mt-14 md:mt-20">
      <div className="mb-2 flex items-end justify-between gap-6 border-b border-border-subtle pb-4">
        <div className="flex items-baseline gap-6">
          <span className="font-anton text-xs tracking-[0.2em] text-electric-green">
            {category.index}
          </span>
          <h3 className="font-anton text-lg uppercase tracking-[0.22em] text-muted-text md:text-xl">
            {category.title}
          </h3>
        </div>
        <p className="editorial-label hidden opacity-50 md:block">{category.note}</p>
      </div>

      <div>
        {category.items.map((item, i) => (
          <TechRow
            key={item.name}
            {...item}
            hovered={hovered === i}
            dim={hovered !== -1 && hovered !== i}
            onHover={() => setHovered(i)}
            onLeave={() => setHovered(-1)}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(sectionRef.current.querySelectorAll(".tech-cat"));
      gsap.fromTo(
        rows,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        }
      );

      gsap.fromTo(
        ".tech-ghost",
        { yPercent: 34 },
        {
          yPercent: -14,
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
    <section id="tech" ref={sectionRef} className="relative overflow-hidden py-24 md:py-40">
      <span
        className="tech-ghost pointer-events-none absolute -left-2 top-10 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02]"
        aria-hidden="true"
      >
        02
      </span>

      <div className="container relative z-10">
        <div className="mb-6 flex items-center gap-6 md:mb-14">
          <span className="font-anton text-sm tracking-[0.25em] text-electric-green">02</span>
          <span className="hairline w-16" />
          <span className="editorial-label">Tech Stack</span>
        </div>

        <h2 className="max-w-3xl font-anton text-5xl uppercase leading-[1.02] text-white-highlight md:text-7xl">
          The tools I build with.
        </h2>

        <div className="mt-4">
          {skillCategories.map((cat) => (
            <CategoryBlock key={cat.title} category={cat} />
          ))}
        </div>

        <div className="mt-16 md:mt-24">
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
    </section>
  );
}