import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-label="OPEN"
        className="group/link relative inline-flex items-center gap-2 font-anton text-xs uppercase tracking-[0.25em] text-foreground-text transition-colors duration-300 hover:text-electric-green"
      >
        Live Demo
        <ArrowUpRight className="size-4 transition-transform duration-500 group-hover/link:rotate-45" />
        <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-electric-green transition-transform duration-500 group-hover/link:scale-x-100" />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-label="GITHUB"
        className="group/link relative inline-flex items-center gap-2 font-anton text-xs uppercase tracking-[0.25em] text-muted-text transition-colors duration-300 hover:text-white-highlight"
      >
        <GitHubIcon className="size-4" />
        GitHub
      </a>
    </div>
  );
}

function ProjectBlock({ project, index }) {
  const blockRef = useRef(null);
  const floatRef = useRef(null);
  const badgeRef = useRef(null);
  const reduce = prefersReducedMotion();
  const imageLeft = index % 2 === 1;

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      /* cinematic scene: clip reveal + stagger */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 78%",
        },
        defaults: { ease: "power3.out" },
      });

      gsap.fromTo(
        ".project-clip",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: blockRef.current, start: "top 78%" },
        }
      );

      tl.fromTo(
        ".project-meta [data-reveal]",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }
      )
        .fromTo(
          ".project-title",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.5"
        )
        .fromTo(
          ".project-desc",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.8"
        )
        .fromTo(
          ".project-tags > *",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06 },
          "-=0.6"
        )
        .fromTo(
          ".project-links",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );

      /* inner parallax */
      gsap.to(".project-parallax", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, blockRef);
    return () => ctx.revert();
  }, [reduce]);

  const onMouseMove = (e) => {
    const rect = blockRef.current.querySelector(".project-clip").getBoundingClientRect();
    if (!rect || window.innerWidth < 768) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(floatRef.current, { x: x * 0.03, y: y * 0.03, duration: 0.6, ease: "power3.out" });
    gsap.to(badgeRef.current, { x: x * 0.16, y: y * 0.16, duration: 0.8, ease: "power3.out" });
  };

  return (
    <article ref={blockRef} className="relative py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Info */}
        <div className={`lg:col-span-5 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <div className="project-meta mb-8 flex items-center gap-6">
            <span className="font-anton text-sm tracking-[0.25em] text-electric-green" data-reveal>
              {project.index}
            </span>
            <span className="hairline w-16" data-reveal />
            <span className="editorial-label" data-reveal>
              Selected Project
            </span>
          </div>

          <h3
            className="project-title max-w-lg font-anton text-5xl uppercase leading-[0.95] text-white-highlight md:text-[72px]"
            aria-label={project.title}
          >
            <span className="line-mask block">
              <span className="block">{project.title}</span>
            </span>
          </h3>

          <p className="project-desc mt-8 max-w-md text-base leading-relaxed text-muted-text md:text-lg">
            {project.description}
          </p>

          <div className="project-tags mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-border-subtle px-3 py-1.5 font-anton text-[10px] uppercase tracking-[0.2em] text-muted-text"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="project-links mt-10">
            <ProjectLinks project={project} />
          </div>
        </div>

        {/* Image */}
        <div className={`lg:col-span-7 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onMouseMove}
            data-cursor-label="VIEW"
            className="group relative block"
            aria-label={`Open ${project.title} live demo`}
          >
            <div className="project-clip relative aspect-[16/11] overflow-hidden border border-border-subtle bg-surface-elevated">
              {/* cursor parallax layer */}
              <div ref={floatRef} className="relative h-full w-full will-change-transform">
                <div className="project-parallax relative h-full w-full">
                  <img
                    src={project.image}
                    alt={`${project.title} — project preview`}
                    loading="lazy"
                    decoding="async"
                    className="project-img h-full w-full object-cover opacity-90 grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* gradient wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-base/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* cursor-following VIEW badge (desktop) */}
              <div
                ref={badgeRef}
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-electric-green opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 md:flex"
              >
                <span className="rotate-[-90deg] font-anton text-xs uppercase tracking-[0.2em] text-cta-text-on-green">
                  View
                </span>
              </div>

              {/* static mobile label */}
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5 md:hidden">
                <span className="font-anton text-[10px] uppercase tracking-[0.3em] text-white-highlight/80">
                  {project.index} — Open Live
                </span>
                <ArrowUpRight className="size-5 text-electric-green" />
              </div>

              {/* corner index */}
              <span
                className="pointer-events-none absolute right-5 top-4 select-none font-anton text-xs uppercase tracking-[0.3em] text-white-highlight/50"
                aria-hidden="true"
              >
                {project.index} / 03
              </span>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-head [data-reveal]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".projects-head", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".projects-ghost",
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
    <section id="projects" ref={sectionRef} className="relative overflow-hidden py-24 md:py-40">
      <span
        className="projects-ghost pointer-events-none absolute -left-2 top-10 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02]"
        aria-hidden="true"
      >
        04
      </span>

      <div className="container relative z-10">
        {/* Header */}
        <div className="projects-head mb-10 md:mb-20">
          <div className="mb-6 flex items-center gap-6" data-reveal>
            <span className="font-anton text-sm tracking-[0.25em] text-electric-green">04</span>
            <span className="hairline w-16" />
            <span className="editorial-label">Selected Projects</span>
          </div>
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <h2
              className="font-anton text-5xl uppercase leading-[1.02] text-white-highlight md:col-span-8 md:text-7xl"
              data-reveal
            >
              Selected work.
            </h2>
            <Link
              to="/archive"
              data-cursor-label="OPEN"
              className="group inline-flex w-fit items-center gap-3 font-anton text-xs uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green md:col-span-4 md:justify-self-end"
              data-reveal
            >
              Browse Full Archive
              <span className="inline-block text-base transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Project scenes */}
        <div className="mt-6 md:mt-10">
          {projects.map((project, i) => (
            <ProjectBlock key={project.index} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}