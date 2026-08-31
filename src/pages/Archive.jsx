import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import event from "../assets/event_management.png";
import job from "../assets/job_app.png";
import ticTacToeImg from "../assets/tic tac toe.png";
import dmDelayImg from "../assets/dm_delay.png";
import moodMailingImg from "../assets/mood mailing (1).png";
import nxt_trends from "../assets/nxt_trends.png";
import Checklist from "../assets/todo_list.png";
import Restaurant from "../assets/restaurant_app.png";
import plannerImg from "../assets/planer.png";

const allProjects = [
  {
    index: "01",
    title: "EVENT-MANGEMENT",
    description: "A high-performance MERN architecture designed for massive scale of small business, man resource, part-time work platform for seamless communication.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    category: "Enterprise",
    image: event,
    link: "https://event-management-1-rs9y.onrender.com",
  },
  {
    index: "02",
    title: "job_portal",
    description: "Developed a Job Portal application using React that enables users to browse jobs, submit applications, and track their application status efficiently.",
    tech: ["HTML5", "React", "CSS3", "javascript", "restAPI", ""],
    category: "Productivity",
    image: job,
    link: "https://enhancement-of-jobby-app-peach.vercel.app",
  },
  {
    index: "03",
    title: "tic tac toe",
    description: "Advanced AI-powered game logic with move prediction and minimax algorithm implementation in a sleek responsive layout.",
    tech: ["React", "Tailwind CSS", "Algorithm"],
    category: "Gaming/AI",
    image: ticTacToeImg,
    link: "https://tic-tac-tai.netlify.app",
  },
  {
    index: "04",
    title: "dm-delay",
    description: "DM-Delay is a React-based web application designed to manage, track, and visualize delay-related data through an interactive and user-friendly dashboard.",
    tech: ["React", "CSS3", "Logic Engine"],
    category: "communication",
    image: dmDelayImg,
    link: "https://dm-delay.netlify.app",
  },
  {
    index: "05",
    title: "mood mailing",
    description: "Sentiment analysis tool for email communication that suggests improvements based on detected tone and emotional impact.",
    tech: ["NLP", "React", "Sentiment API"],
    category: "Productivity",
    image: moodMailingImg,
    link: "https://mood-mailing.netlify.app",
  },
  {
    index: "06",
    title: "checkList",
    description: "A simple and responsive task management application built with React for managing everyday activities.",
    tech: ["HTML5", "React", "CSS3", "usestate"],
    category: "Productivity",
    image: Checklist,
    link: "https://simple-todo-n6hg.vercel.app",
  },
  {
    index: "07",
    title: "Restaurant_app",
    description: "A premium dining platform featuring dynamic menu selection, real-time table reservations, and seamless order management.",
    tech: ["HTML5", "React", "CSS3", "javascript", "restAPI", ""],
    category: "Productivity",
    image: Restaurant,
    link: "https://enhancement-restaurant-app-7gni.vercel.app",
  },
  {
    index: "08",
    title: "E-commerce",
    description: "Real-time interactive shopping platform featuring secure checkouts, inventory management, and adaptive UI animations.",
    tech: ["React", "Redux", "Node.js", "Stripe"],
    image: nxt_trends,
    category: "Fintech",
    link: "https://glazzium.netlify.app",
  },
  {
    index: "09",
    title: "planner visualizing",
    description: "A visual task orchestration system that maps project timelines into interactive 3D graphs for better workflow insight.",
    tech: ["Three.js", "React", "D3.js"],
    image: plannerImg,
    category: "Visualization",
    link: "https://time-tracke.netlify.app",
  },
];

export default function Archive() {
  return (
    <section className="min-h-screen bg-background-base py-24 md:py-36">
      <div className="container">
        <div className="mb-12 md:mb-16">
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
            <span className="editorial-label">Full Archive</span>
          </div>
          <h1 className="mt-6 font-anton text-5xl uppercase leading-[1.02] text-white-highlight md:text-8xl">
            Project <span className="text-electric-green">Catalog.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-text">
            A comprehensive list of every digital creation and experiment.
          </p>
        </div>

        <motion.div
          className="border-t border-border-faint"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.07 },
            },
          }}
        >
          {allProjects.map((project) => {
            const content = (
              <>
                <div className="grid grid-cols-1 items-center gap-6 py-8 transition-colors duration-500 lg:grid-cols-12 lg:gap-8">
                  <span className="font-anton text-xs tracking-[0.2em] text-electric-green lg:col-span-1 lg:text-sm">
                    {project.index}
                  </span>

                  <h2 className="font-anton text-3xl uppercase tracking-tight text-white-highlight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:text-5xl lg:col-span-4 lg:text-[44px]">
                    {project.title}
                  </h2>

                  <div className="hidden flex-wrap gap-2 lg:col-span-4 lg:flex">
                    {project.tech.filter(Boolean).map((t) => (
                      <span
                        key={t}
                        className="border border-border-subtle px-3 py-1.5 font-anton text-[10px] uppercase tracking-[0.2em] text-muted-text transition-colors duration-500 group-hover:border-electric-green/40 group-hover:text-electric-green"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="lg:col-span-2">
                    <span className="font-anton text-[10px] uppercase tracking-[0.25em] text-muted-text/70">
                      {project.category}
                    </span>
                  </div>

                  <div className="lg:col-span-1 lg:flex lg:justify-end">
                    <ArrowUpRight className="size-6 text-muted-text transition-all duration-500 group-hover:rotate-45 group-hover:text-electric-green" />
                  </div>
                </div>

                {/* thumb strip */}
                <div className="pointer-events-none -mt-4 pb-6 lg:hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover opacity-80 grayscale transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              </>
            );

            const wrapClass =
              "group relative block border-b border-border-faint lg:h-auto lg:overflow-hidden lg:hover:bg-surface-elevated/50";

            if (project.link?.startsWith("http")) {
              return (
                <motion.div
                  key={project.title}
                  variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="OPEN"
                    className={wrapClass}
                  >
                    {content}
                  </a>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={project.title}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
              >
                <Link to={project.link || "/#contact"} className={wrapClass} data-cursor-label="OPEN">
                  {content}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 flex">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 font-anton text-xs uppercase tracking-[0.25em] text-muted-text transition-colors duration-500 hover:text-electric-green"
          >
            <span className="h-px w-10 bg-border-subtle transition-colors duration-500 group-hover:bg-electric-green" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}