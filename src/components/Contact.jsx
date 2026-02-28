import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 md:py-40 bg-black overflow-hidden group/session">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full delay-1000"></div>
            </div>

            {/* Horizontal Side Text */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block">
                <p className="text-[10px] font-black uppercase tracking-[1em] text-gray-800 vertical-text origin-center -rotate-90 whitespace-nowrap">
                    DISPATCH / SYSTEM 2.0
                </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block">
                <p className="text-[10px] font-black uppercase tracking-[1em] text-gray-800 vertical-text origin-center rotate-90 whitespace-nowrap">
                    EST. 2026 / ABISHEK.C
                </p>
            </div>

            <div className="container max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left Column: Intro & Meta */}
                    <motion.div
                        className="lg:w-[40%] flex flex-col justify-between"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            <div className="mb-12 flex items-center gap-4">
                                <span className="h-[1px] w-12 bg-violet-500"></span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-violet-500/80">Electronic Dispatch</span>
                            </div>
                            
                            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
                                Let's <br />
                                <span className="text-gradient text-glow">Craft</span> <br />
                                Future.
                            </h2>
                            
                            <p className="text-gray-400 text-lg md:text-xl mb-16 font-medium leading-relaxed max-w-md border-l-2 border-white/5 pl-8 ml-2">
                                Curating high-performance digital architectures for a hyper-connected world. 
                                Currently open for selective engineering partnerships.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                                <div className="group/item cursor-pointer">
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3 group-hover/item:text-violet-400 transition-colors">PRIMARY CHANNEL</p>
                                    <p className="text-xl font-bold text-gray-200 transition-all group-hover/item:translate-x-2 underline decoration-white/10 underline-offset-8">abishekkc923@gmail.com</p>
                                </div>
                                <div className="group/item cursor-pointer">
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3 group-hover/item:text-violet-400 transition-colors">SECURE LINE</p>
                                    <p className="text-xl font-bold text-gray-200 transition-all group-hover/item:translate-x-2 underline decoration-white/10 underline-offset-8">9047943317</p>
                                </div>
                                <div className="pt-6">
                                    <a 
                                        href="/resume.pdf" 
                                        download 
                                        className="group/resume relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-500"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 translate-x-[-100%] group-hover/resume:translate-x-0 transition-transform duration-500"></div>
                                        <FaFileDownload className="text-violet-500 text-xl relative z-10" />
                                        <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-200 relative z-10">Download Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        className="lg:w-[60%] relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <div className="relative glass-dark p-8 md:p-16 rounded-[40px] border border-white/5 group/card overflow-hidden h-full flex flex-col justify-center">
                            {/* Card Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000"></div>
                            
                            <form className="relative z-10 grid gap-10">
                                <div className="relative group/field">
                                    <input type="text" id="name" name="name" className="peer w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-violet-500 transition-all font-bold text-2xl text-white placeholder-transparent" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-active:top-[-20px] peer-active:text-[10px] peer-active:text-violet-400 peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-violet-400 pointer-events-none">Full Identity</label>
                                </div>

                                <div className="relative group/field">
                                    <input type="email" id="email" name="email" className="peer w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-violet-500 transition-all font-bold text-2xl text-white placeholder-transparent" placeholder="Email" />
                                    <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-active:top-[-20px] peer-active:text-[10px] peer-active:text-violet-400 peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-violet-400 pointer-events-none">Secure Dispatch</label>
                                </div>

                                <div className="relative group/field">
                                    <textarea id="message" name="message" rows="3" className="peer w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-violet-500 transition-all font-bold text-2xl text-white placeholder-transparent resize-none" placeholder="Message"></textarea>
                                    <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-active:top-[-20px] peer-active:text-[10px] peer-active:text-violet-400 peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-violet-400 pointer-events-none">The Vision</label>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group/btn relative w-full py-8 bg-white text-black font-black rounded-2xl overflow-hidden premium-shadow"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4 text-[14px] uppercase tracking-[0.3em]">
                                        Initialize Brief
                                        <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                                    </span>
                                    <div className="absolute inset-0 bg-violet-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    <span className="absolute inset-0 z-20 flex items-center justify-center gap-4 text-[14px] uppercase tracking-[0.3em] text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                                        Initialize Brief
                                        <span>→</span>
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Refined Footer */}
                <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
                        <a href="/#home" className="hover:text-white transition-colors">Home</a>
                        <a href="/#about" className="hover:text-white transition-colors">Catalog</a>
                        <a href="/#projects" className="hover:text-white transition-colors">Manifesto</a>
                    </div>
                    
                    <div className="flex gap-10">
                        {[
                            { icon: FaEnvelope, href: "mailto:abishekkc923@gmail.com" },
                            { icon: FaPhone, href: "tel:9047943317" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/abishekk-c-5457b4227" },
                            { icon: FaGithub, href: "https://github.com/codabishekk" }
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-violet-500 transition-colors text-2xl"
                                whileHover={{ y: -5, scale: 1.2 }}
                            >
                                <item.icon />
                            </motion.a>
                        ))}
                    </div>
                    
                    <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">© 2026 ABISHEK.C — ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </section>
    );
}


