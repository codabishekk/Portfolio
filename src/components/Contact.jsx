import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";
import Magnetic from "./Magnetic";
import resumeFile from "../assets/resume.pdf";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile } from "../data/profile";

const LINKS = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    cursor: "EMAIL",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInIcon,
    cursor: "OPEN",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GitHubIcon,
    cursor: "OPEN",
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: Phone,
    cursor: "CALL",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const reduce = prefersReducedMotion();

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-headline .line-mask > span",
        { yPercent: 112 },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: "expo.out",
          scrollTrigger: { trigger: ".contact-headline", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".contact-sub > *",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-sub", start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".contact-pill",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".contact-pill", start: "top 88%" },
        }
      );

      gsap.fromTo(
        ".contact-links [data-reveal]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-links", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-ghost",
        { yPercent: 30 },
        {
          yPercent: -10,
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
    <section id="contact" ref={sectionRef} className="relative overflow-hidden py-28 md:py-44">
      <span
        className="contact-ghost pointer-events-none absolute -left-4 top-10 select-none font-anton text-[34vw] leading-none text-white-highlight/[0.02]"
        aria-hidden="true"
      >
        06
      </span>

      {/* vertical side text */}
      <p className="editorial-label vertical-rl pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-70 xl:block">
        EST. 2026 / ABISHEKK.C
      </p>

      <div className="container relative z-10">
        <div className="mb-8 flex items-center gap-6 md:mb-14">
          <span className="font-anton text-sm tracking-[0.25em] text-electric-green">06</span>
          <span className="hairline w-16" />
          <span className="editorial-label">Contact</span>
        </div>

        {/* Headline */}
        <h2 className="contact-headline font-anton uppercase leading-[1.02] text-white-highlight">
          <span className="line-mask block">
            <span className="block text-[13vw] leading-[1] md:text-[9vw]">
              Have a project
            </span>
          </span>
          <span className="line-mask block">
            <span className="block text-[13vw] leading-[1] md:text-[9vw]">
              in <span className="text-electric-green">mind?</span>
            </span>
          </span>
        </h2>

        {/* Sub copy */}
        <div className="contact-sub mt-10 max-w-xl md:mt-14">
          <p className="font-anton text-xl uppercase tracking-[0.08em] text-white-highlight md:text-2xl">
            Let's build something meaningful.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-text md:text-lg">
            Curating high-performance digital architectures for a hyper-connected world.
            Currently open for selective engineering partnerships.
          </p>
        </div>

        {/* Pill CTA */}
        <div className="contact-pill relative z-20 mt-14 md:mt-20">
          <Magnetic strength={0.4}>
            <a
              href={`mailto:${profile.email}?subject=Project%20Opportunity`}
              data-cursor-label="SEND"
              className="group inline-flex items-center gap-6 rounded-full border border-border-subtle bg-surface-elevated py-6 pl-10 pr-6 transition-colors duration-700 hover:bg-electric-green md:py-8 md:pl-14 md:pr-8"
            >
              <span className="font-anton text-xl uppercase tracking-[0.12em] text-white-highlight transition-colors duration-700 group-hover:text-cta-text-on-green md:text-3xl">
                Get in touch
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-electric-green text-electric-green transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-hover:border-cta-text-on-green group-hover:bg-cta-text-on-green group-hover:text-electric-green md:h-16 md:w-16">
                <ArrowRight className="size-5 md:size-7" />
              </span>
            </a>
          </Magnetic>
        </div>

        {/* Links */}
        <div className="contact-links mt-20 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-border-faint pt-10 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-cursor-label={link.cursor}
              data-reveal
              className="group flex items-center justify-between border-b border-border-faint pb-4 font-anton text-sm uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:border-electric-green hover:text-electric-green"
            >
              <span className="flex items-center gap-3">
                <link.icon className="size-4" />
                {link.label}
              </span>
              <ArrowUpRight className="size-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* Resume download */}
        <div className="contact-resume mt-12 md:mt-16">
          <a
            href={resumeFile}
            download="Abishek_C_Resume.pdf"
            data-cursor-label="SAVE"
            data-reveal
            className="group inline-flex items-baseline gap-3 font-anton text-sm uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green"
          >
            <span className="h-px w-10 bg-border-subtle transition-colors duration-500 group-hover:bg-electric-green" />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}