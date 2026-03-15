import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Project Preview Images
import moodMailingImg from "../assets/mood mailing (1).png";
import plannerImg from "../assets/planer.png";
import dmDelayImg from "../assets/dm_delay.png";
import ticTacToeImg from "../assets/tic tac toe.png";
import nxt_trends  from "../assets/nxt_trends.png";
import Checklist from "../assets/todo_list.png";
import Restaurant from "../assets/restaurant_app.png";
import job from "../assets/job_app.png";
import event from "../assets/event_management.png";

export default function Archive() {
    const allProjects = [
        {
            title: "EVENT-MANGEMENT",
            description: "A high-performance MERN architecture designed for massive scale of small business, man resource, part-time work platform for seamless communication.",
            tech: ["React", "Express", "MongoDB", "Node.js"],
            category: "Enterprise",
            image: event,
            link: "https://event-management-1-rs9y.onrender.com"
        },
        {
            title: "job_portal",
            description: "Developed a Job Portal application using React that enables users to browse jobs, submit applications, and track their application status efficiently.",
            tech: ["HTML5", "React", "CSS3","javascript", "restAPI",""],
            category: "Productivity",
            image:job,
            link:"https://enhancement-of-jobby-app-peach.vercel.app"
        },
        {
            title: "tic tac toe",
            description: "Advanced AI-powered game logic with move prediction and minimax algorithm implementation in a sleek responsive layout.",
            tech: ["React", "Tailwind CSS", "Algorithm"],
            image: ticTacToeImg,
            category: "Gaming/AI",
            link:"https://tic-tac-tai.netlify.app"
        },
        {
            title: "dm-delay",
            description: "DM-Delay is a React-based web application designed to manage, track, and visualize delay-related data through an interactive and user-friendly dashboard.",
            tech: ["React", "CSS3", "Logic Engine"],
            image: dmDelayImg,
            category: "communication",
            link:"https://dm-delay.netlify.app"
        },
        {
            title: "mood mailing",
            description: "Sentiment analysis tool for email communication that suggests improvements based on detected tone and emotional impact.",
            tech: ["NLP", "React", "Sentiment API"],
            image: moodMailingImg,
            category: "Productivity",
            link:"https://mood-mailing.netlify.app"
        },
        {
            title: "checkList",
            description: "A simple and responsive task management application built with React for managing everyday activities.",
            tech: ["HTML5", "React", "CSS3","usestate"],
            category: "Productivity",
            image: Checklist,
            link:"https://simple-todo-n6hg.vercel.app"
        },
        {
            title: "Restaurant_app",
            description: "A premium dining platform featuring dynamic menu selection, real-time table reservations, and seamless order management.",
            tech: ["HTML5", "React", "CSS3","javascript", "restAPI",""],
            category: "Productivity",
            image: Restaurant,
            link:"https://enhancement-restaurant-app-7gni.vercel.app"
        },
         {
           title: "E-commerce",
            description: "Real-time interactive shopping platform featuring secure checkouts, inventory management, and adaptive UI animations.",
            tech: ["React", "Redux", "Node.js", "Stripe"],
            image:nxt_trends ,
            category: "Fintech",
            link: "https://glazzium.netlify.app"
        },
        {
            title: "planner visualizing",
            description: "A visual task orchestration system that maps project timelines into interactive 3D graphs for better workflow insight.",
            tech: ["Three.js", "React", "D3.js"],
            image: plannerImg,
            category: "Visualization",
            link:"https://time-tracke.netlify.app"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-mesh min-h-screen">
            <div className="container">
                <div className="mb-12 md:mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-lg font-medium">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[2px] w-8 md:w-12 bg-violet-500"></div>
                        <span className="text-[12px] md:text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Full Archive</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6">Project <span className="text-gradient">Catalog.</span></h1>
                    <p className="text-gray-400 max-w-xl text-lg md:text-xl font-medium leading-relaxed">A comprehensive list of every digital creation and experiment.</p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group relative glass rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-700 hover:-translate-y-4"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="h-48 md:h-64 bg-violet-500/5 flex items-center justify-center group-hover:bg-violet-500/10 transition-all duration-700 overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100" />
                                ) : (
                                    <div className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-700 grayscale group-hover:grayscale-0">
                                        {project.emoji}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 md:p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-2 flex-wrap max-w-[80%]">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-[11px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[10px] md:text-[11px] font-black uppercase text-violet-500/50 tracking-tighter shrink-0">{project.category}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors tracking-tight uppercase truncate">{project.title}</h3>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium h-24 line-clamp-3">
                                    {project.description}
                                </p>
                                {project.link?.startsWith('http') ? (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-3 font-semibold text-[12px] md:text-sm tracking-widest text-white/30 group-hover:text-white transition-all uppercase"
                                    >
                                        View Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </a>
                                ) : (
                                    <Link 
                                        to={project.link || "/#contact"} 
                                        className="inline-flex items-center gap-3 font-semibold text-[12px] md:text-sm tracking-widest text-white/30 group-hover:text-white transition-all uppercase"
                                    >
                                        View Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </Link>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex justify-center mt-12 md:mt-20">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-lg font-medium">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
