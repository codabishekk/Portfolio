import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Atom,
  Blocks,
  Bot,
  Boxes,
  Braces,
  Cloud,
  CodeXml,
  Database,
  Flame,
  GitBranch,
  Hexagon,
  LayoutGrid,
  Leaf,
  Package,
  Palette,
  Rocket,
  Route,
  Server,
  Sparkles,
  Terminal,
  Triangle,
  Webhook,
  Wind,
  Zap,
} from "lucide-react";
import { GitHubIcon } from "../components/BrandIcons";

const CAT_ICON = "size-8";

const skillCategories = [
  {
    index: "01",
    title: "Frontend Development",
    note: "Interface engineering & motion",
    skills: [
      { name: "React", icon: <Atom className={CAT_ICON} /> },
      { name: "JavaScript (ES6+)", icon: <Braces className={CAT_ICON} /> },
      { name: "Tailwind CSS", icon: <Wind className={CAT_ICON} /> },
      { name: "Bootstrap", icon: <LayoutGrid className={CAT_ICON} /> },
      { name: "HTML5", icon: <CodeXml className={CAT_ICON} /> },
      { name: "CSS3", icon: <Palette className={CAT_ICON} /> },
      { name: "Framer Motion", icon: <Zap className={CAT_ICON} /> },
      { name: "Redux / Context API", icon: <Boxes className={CAT_ICON} /> },
    ],
  },
  {
    index: "02",
    title: "Backend & Database",
    note: "APIs, logic & data flows",
    skills: [
      { name: "Node.js", icon: <Hexagon className={CAT_ICON} /> },
      { name: "Express.js", icon: <Server className={CAT_ICON} /> },
      { name: "MongoDB", icon: <Database className={CAT_ICON} /> },
      { name: "Mongoose", icon: <Leaf className={CAT_ICON} /> },
      { name: "RESTful APIs", icon: <Webhook className={CAT_ICON} /> },
      { name: "Python", icon: <Terminal className={CAT_ICON} /> },
    ],
  },
  {
    index: "03",
    title: "AI Integration",
    note: "Language models & integrations",
    skills: [
      { name: "OpenAI APIs", icon: <Sparkles className={CAT_ICON} /> },
      { name: "Claude", icon: <Bot className={CAT_ICON} /> },
      { name: "OpenRouter", icon: <Route className={CAT_ICON} /> },
    ],
  },
  {
    index: "04",
    title: "Tools & DevOps",
    note: "Workflow & deployment",
    skills: [
      { name: "Git & GitHub", icon: <GitHubIcon className={CAT_ICON} /> },
      { name: "NPM", icon: <Package className={CAT_ICON} /> },
      { name: "Vite", icon: <Rocket className={CAT_ICON} /> },
      { name: "Vercel / Netlify", icon: <Triangle className={CAT_ICON} /> },
      { name: "Webpack", icon: <Blocks className={CAT_ICON} /> },
      { name: "Firebase", icon: <Flame className={CAT_ICON} /> },
      { name: "Cloud Hosting", icon: <Cloud className={CAT_ICON} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-background-base py-24 md:py-36">
      <div className="container">
        <Link
          to="/"
          className="group inline-flex items-center gap-3 font-anton text-xs uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-all duration-500 group-hover:border-electric-green group-hover:bg-electric-green group-hover:text-cta-text-on-green">
            <ArrowLeft className="size-4" />
          </span>
          Back to Home
        </Link>

        <div className="mt-14 flex items-center gap-6">
          <span className="font-anton text-sm tracking-[0.25em] text-electric-green">01</span>
          <span className="hairline w-16" />
          <span className="editorial-label">Expertise</span>
        </div>
        <h1 className="mt-6 font-anton text-5xl uppercase leading-[1.02] text-white-highlight md:text-8xl">
          Technical <span className="text-electric-green">Arsenal.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-text">
          A comprehensive overview of my technical stack and the professional tools I use to
          bring digital ideas to life.
        </p>

        <motion.div
          className="mt-16 space-y-16 md:mt-20 md:space-y-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-5 lg:sticky lg:top-24">
                  <span className="font-anton text-xs tracking-[0.2em] text-electric-green">
                    {category.index}
                  </span>
                  <div>
                    <h2 className="font-anton text-2xl uppercase tracking-tight text-white-highlight md:text-3xl">
                      {category.title}
                    </h2>
                    <p className="editorial-label mt-3 opacity-60">{category.note}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden border border-border-faint bg-border-faint sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={`${category.title}-${skill.name}-${index}`}
                    className="group flex min-h-[120px] items-center justify-between bg-background-base px-6 py-7 transition-colors duration-500 hover:bg-surface-elevated"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center grayscale transition-all duration-500 group-hover:grayscale-0"
                        style={{ color: "var(--color-foreground-text)" }}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="font-anton text-base uppercase tracking-wide text-foreground-text transition-colors duration-500 group-hover:text-white-highlight">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-electric-green opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 flex flex-col items-start gap-8 md:mt-32">
          <div className="flex items-center gap-6">
            <span className="h-px w-10 bg-border-subtle" />
            <p className="font-anton text-sm uppercase tracking-[0.25em] text-muted-text">
              Have a project in mind?
            </p>
          </div>
          <Link
            to="/#contact"
            data-cursor-label="OPEN"
            className="group inline-flex items-center gap-4 font-anton text-sm uppercase tracking-[0.25em] text-electric-green transition-colors duration-500"
          >
            Let's talk
            <span className="inline-block text-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}