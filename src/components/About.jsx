import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
    const skills = [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Express.js", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "JavaScript", category: "Language" },
        { name: "Python ", category: "Language" },
        { name: "Framer Motion", category: "Animation" },
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-[#020202]">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mb-6 flex items-center justify-center lg:justify-start gap-4">
                            <div className="h-[2px] w-12 bg-violet-500"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">The Story</span>
                        </motion.div>

                        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-[1.1]">
                            Pushing the boundaries of <br className="hidden md:block" />
                            <span className="text-gradient">digital potential.</span>
                        </motion.h2>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                            <p>
                                I am Abishek, a MERN stack developer dedicated to architecting high-end digital experiences.
                                My approach combines technical precision with a relentless focus on aesthetics and user psychology.
                            </p>
                            <p>
                                With over 1 year of experience in the MERN ecosystem, I've delivered several projects ranging from
                                sophisticated social platforms to high-performance e-commerce solutions.
                            </p>
                        </motion.div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-16 flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12">
                            <div>
                                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2">2+ years</h4>
                                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">Learning & Growth</p>
                            </div>
                            <div className="hidden sm:block h-12 w-[1px] bg-white/10 self-center"></div>
                            <div>
                                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2">10+ PROJECTS</h4>
                                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">Success Deliveries</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="glass p-8 md:p-12 rounded-[30px] md:rounded-[40px] relative overflow-hidden">
                            <h3 className="text-xl md:text-2xl font-bold mb-10 tracking-tight text-center lg:text-left">The Technical Knowledge</h3>
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                            >
                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                                        className="group p-4 md:p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-violet-500/30 transition-all duration-500"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[11px] text-violet-400 font-bold uppercase tracking-widest">{skill.category}</span>
                                            <div className="h-1.5 w-1.5 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <div className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="mt-12 flex justify-center">
                                <Link to="/skills" className="glass-light px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-violet-500 hover:text-white transition-all border border-white/10 hover:border-violet-500">
                                    View Full Expertise ↗
                                </Link>
                            </div>

                            {/* Sophisticated decorative glow */}
                            <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-violet-600/10 rounded-full blur-[60px] md:blur-[80px]"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

