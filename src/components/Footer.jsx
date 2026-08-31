import Magnetic from "./Magnetic";
import { scrollToTop } from "../lib/scroll";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile } from "../data/profile";

const SOCIALS = [
  { label: "Github", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-faint pt-12 pb-10 md:pt-16">
      <div className="container flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="font-anton text-2xl uppercase tracking-[0.08em] text-white-highlight">
            ABISHEK<span className="text-electric-green">.C</span>
          </p>
          <p className="editorial-label mt-3">© 2026 — All Rights Reserved</p>
        </div>

        <nav className="flex flex-wrap items-center gap-8" aria-label="Social">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-cursor-label="OPEN"
              className="group flex items-center gap-2 font-anton text-[11px] uppercase tracking-[0.22em] text-muted-text transition-colors duration-500 hover:text-electric-green"
            >
              <s.icon className="size-4" />
              {s.label}
              <span className="h-px w-0 bg-electric-green transition-all duration-500 group-hover:w-6" />
            </a>
          ))}
        </nav>

        <Magnetic strength={0.35}>
          <button
            type="button"
            onClick={scrollToTop}
            data-cursor-label="TOP"
            aria-label="Back to top"
            className="group flex items-center gap-3 font-anton text-[11px] uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green"
          >
            Back to top
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle transition-all duration-500 group-hover:border-electric-green group-hover:bg-electric-green group-hover:text-cta-text-on-green">
              <ArrowUp className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}