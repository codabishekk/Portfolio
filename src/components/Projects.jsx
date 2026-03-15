import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import event from "../assets/event_management.png";
import ticTacToeImg from "../assets/tic tac toe.png";
import job from "../assets/job_app.png";

export default function Projects() {
    const projects = [
        {
            title: "EVENT-MANGEMENT",
            description: "A high-performance MERN architecture designed for massive scale of samll business, man resource, parti-time work both company and employee platform in online and seamless communication job opperunities.",
            tech: ["React", "Express", "MongoDB", "JavaScript"],
            image: event,
            link: "https://event-management-1-rs9y.onrender.com"
        },
        {
            title: "job_portal",
            description: "Developed a Job Portal application using React that enables users to browse jobs, submit applications, and track their application status efficiently.",
            tech: ["HTML5", "React", "CSS3","javascript", "restAPI"],
            category: "Productivity",
            image:job,
            link:"https://enhancement-of-jobby-app-peach.vercel.app"
        },
        {
            title: "tic tac toe",
            description: "Advanced Ai model for real-time game analytics and move prediction play with AI in responsive design.",
            tech: ["React(vite)", "TailWind CSS", "Claude", "OpenRouterAPI"],
            image: ticTacToeImg,
            link: "https://tic-tac-tai.netlify.app"
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-mesh min-h-screen">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <div className="mb-6 flex items-center justify-center md:justify-start gap-4">
                            <div className="h-[2px] w-12 bg-violet-500"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Selected <span className="text-gradient">Innovations.</span></h2>
                        <p className="text-gray-400 max-w-xl text-base md:text-lg font-medium leading-relaxed mx-auto md:mx-0">A curated collection of digital solutions where form perfectly follows function.</p>
                    </div>
                    <div className="w-full md:w-auto flex justify-center">
                        <Link to="/archive" className="glass-light px-10 py-5 rounded-full text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-white/[0.05] transition-all whitespace-nowrap">
                            Browse Full Archive ↗
                        </Link>
                    </div>
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
                    {projects.map((project, index) => (
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
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                                    />
                                ) : (
                                    <div className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-700 grayscale group-hover:grayscale-0">
                                        {project.emoji || "🚀"}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 md:p-10">
                                <div className="flex gap-2 mb-6 flex-wrap">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 md:px-4 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded-full text-[11px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-500">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors tracking-tight uppercase truncate">{project.title}</h3>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
                                    {project.description}
                                </p>
                                {project.link.startsWith('http') ? (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-3 font-semibold text-[12px] md:text-sm tracking-widest text-white/50 group-hover:text-white transition-all uppercase">
                                        Explore Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </a>
                                ) : (
                                    <Link to={project.link} className="inline-flex items-center gap-3 font-semibold text-[12px] md:text-sm tracking-widest text-white/50 group-hover:text-white transition-all uppercase">
                                        Explore Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </Link>
                                )}

                            </div>

                            {/* Refined hover state logic */}
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}



