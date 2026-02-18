import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            title: "EVENT-MANGEMENT",
            description: "A high-performance MERN architecture designed for massive scale of samll business, man resource, parti-time work both company and employee platform in online and seamless communication job opperunities.",
            tech: ["React", "Express", "MongoDB", "JavaScript"],
            emoji: "💎",
            link: "https://event-management-1-rs9y.onrender.com"
        },
        {
            title: "E-commerce",
            description: "Real-time interactive platform featuring low-latency communication and adaptive UI.",
            tech: ["React", "Node.js", "MongoDB", "JavaScript"],
            emoji: "🎭",
            link: "/archive"
        },
        {
            title: "tic tac toe",
            description: "Advanced Ai model for real-time game analytics and move prediction play with AI in responsive design.",
            tech: ["React(vite)", "TailWind CSS", "Claude", "OpenRouterAPI"],
            emoji: "📊",
            link: "/archive"
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
                        <Link to="/archive" className="glass-light px-8 py-4 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/[0.05] transition-all whitespace-nowrap">
                            Browse Full Archive ↗
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group relative glass rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-700 hover:-translate-y-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="h-48 md:h-64 bg-violet-500/5 flex items-center justify-center group-hover:bg-violet-500/10 transition-all duration-700">
                                <div className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-700 grayscale group-hover:grayscale-0">
                                    {project.emoji}
                                </div>
                            </div>

                            <div className="p-6 md:p-10">
                                <div className="flex gap-2 mb-6 flex-wrap">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 md:px-4 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded-full text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-500">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors tracking-tight uppercase truncate">{project.title}</h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-medium">
                                    {project.description}
                                </p>
                                {project.link.startsWith('http') ? (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-3 font-semibold text-[10px] md:text-xs tracking-widest text-white/50 group-hover:text-white transition-all uppercase"
                                    >
                                        Explore Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </a>
                                ) : (
                                    <Link to={project.link} className="inline-flex items-center gap-3 font-semibold text-[10px] md:text-xs tracking-widest text-white/50 group-hover:text-white transition-all uppercase">
                                        Explore Project <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </Link>
                                )}

                            </div>

                            {/* Refined hover state logic */}
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


