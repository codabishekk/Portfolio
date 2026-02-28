import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React", icon: "⚛️" },
                {
                    name: "JavaScript (ES6+)", icon: (<svg viewBox="0 0 128 128" fill="currentColor" className="w-10 h-10 text-yellow-400">
                        <path d="M0 0h128v128H0z" />
                        <path fill="#000" d="M67.2 100.4c1.7 2.8 3.9 4.9 7.8 4.9 3.3 0 5.4-1.6 5.4-3.9 0-2.7-2.1-3.6-5.6-5.2l-1.9-.8c-5.5-2.3-9.1-5.2-9.1-11.3 0-5.6 4.3-9.9 11-9.9 4.8 0 8.2 1.7 10.7 6l-5.9 3.8c-1.3-2.3-2.7-3.2-4.8-3.2-2.2 0-3.6 1.4-3.6 3.2 0 2.3 1.4 3.2 4.6 4.6l1.9.8c6.5 2.8 10.1 5.6 10.1 12 0 6.9-5.4 10.7-12.7 10.7-7.1 0-11.6-3.4-13.8-7.8z" />
                    </svg>
                    )
                },
                { name: "Tailwind CSS", icon: "🎨" },
                {
                    name: "Bootstrap",
                    icon: (
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-10 h-10 text-blue-500">
                            <path d="M6.747 1.16 3 3.128V12.98l4.757 2.183 4.708-2.086V3.128zm3.361 7.424h-1.39v2.544H6.556V4.496h1.574c1.192 0 1.974.607 1.974 1.547 0 .61-.31 1.053-.82 1.303.626.23.998.78.998 1.455 0 1.01-.84 1.783-2.174 1.783z" />
                        </svg>
                    )
                },
                {
                    name: "HTML5", icon: (<svg viewBox="0 0 128 128" fill="currentColor" className="w-10 h-10 text-orange-500">
                        <path d="M19 3l9 101 36 10 36-10 9-101z" />
                    </svg>)
                },
                {
                    name: "CSS3", icon: (<svg viewBox="0 0 128 128" fill="currentColor" className="w-10 h-10 text-blue-500">
                        <path d="M19 3l9 101 36 10 36-10 9-101z" />
                    </svg>)
                },
                {
                    name: "Framer Motion", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-pink-500">
                        <path d="M6 3h12v6H6zM6 9h6v12H6zM12 9h6l-6 6z" />
                    </svg>)
                },
                {
                    name: "Redux / Context API", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-purple-500">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    </svg>)
                }
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", icon: "🟢" },
                {
                    name: "Express.js", icon: "🚀"
                },
                { name: "MongoDB", icon: "🍃" },
                {
                    name: "RESTful APIs",  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-500">
                        <path d="M10 14a5 5 0 007.07 0l1.41-1.41-2.83-2.83-1.41 1.41a1 1 0 01-1.42 0 1 1 0 010-1.42l1.41-1.41-2.83-2.83-1.41 1.41A5 5 0 0010 14z" />
                    </svg>
                },
                { name: "Python", icon: "🐍" },
                { name: "Mongoose", icon: "🦅" }
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                {
                    name: "Git & GitHub", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9" />
                    </svg>
                },
                {
                    name: "Vite / Webpack", icon: "⚡"
                },
                {
                    name: "NPM / Yarn", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-red-600">
                        <path d="M2 8h20v8H2z" />
                    </svg>)
                },
                {
                    name: "Vercel / Netlify", icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black">
                        <path d="M12 3l10 18H2z" />
                    </svg>)
                },
                { name: "Firebase",  icon: "🔥" }
            ]
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-mesh min-h-screen font-outfit">
            <div className="container">
                <div className="mb-12 md:mb-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-8 md:w-12 bg-violet-500"></div>
                        <span className="text-[12px] md:text-sm font-bold uppercase tracking-[0.3em] text-gray-500">Expertise</span>
                        <div className="h-[2px] w-8 md:w-12 bg-violet-500"></div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 md:mb-8">Technical <span className="text-gradient">Arsenal.</span></h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        A comprehensive overview of my technical stack and the professional tools I use to bring digital ideas to life.
                    </p>
                </div>

                <div className="space-y-16 md:space-y-24">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 flex items-center gap-4">
                                <span className="text-violet-500">#</span> {category.title}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:grid-cols-2">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] hover:-translate-y-2 transition-all duration-500 border border-white/[0.05] hover:border-violet-500/30 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (catIndex * 3 + index) * 0.05, duration: 0.8 }}
                                    >
                                        <div className="flex justify-between items-start mb-4 md:mb-6">
                                            <div className="text-3xl md:text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 bg-white/5 p-3 rounded-2xl flex items-center justify-center overflow-hidden w-14 h-14 md:w-16 md:h-16">
                                                {skill.image ? (
                                                    <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                                                ) : (
                                                    skill.icon
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors uppercase tracking-tight">{skill.name}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-8 mt-24 md:mt-32">
                    <p className="text-gray-500 font-medium text-lg md:text-xl">Want to discuss a project?</p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto items-center">
                        <Link to="/" className="glass-light px-10 py-5 rounded-full text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-white/[0.05] transition-all text-center w-full max-w-[200px] sm:w-auto">
                            Back to Home
                        </Link>
                        <a href="/#contact" className="bg-violet-600 px-10 py-5 rounded-full text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-violet-700 transition-all shadow-[0_0_40px_rgba(124,58,237,0.3)] text-center w-full max-w-[200px] sm:w-auto">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            <Contact />
        </section>
    );
}

