import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-40 bg-[#020202]">
            <div className="container max-w-5xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
                            <div className="h-[2px] w-12 bg-violet-500"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Contact</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight">Let's craft <br /><span className="text-gradient">the future.</span></h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Currently available for selective collaborations and high-impact full-time roles.
                            If you have a project that demands excellence, let's talk.
                        </p>

                        <div className="space-y-6 flex flex-col items-center lg:items-start">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-md lg:max-w-none">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Direct Email</p>
                                    <p className="text-base md:text-lg font-bold text-gray-200 hover:text-violet-400 transition-colors">abishekkc923@gmail.com</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Contact</p>
                                    <p className="text-base md:text-lg font-bold text-gray-200 hover:text-violet-400 transition-colors">9047943317</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">LinkedIn</p>
                                    <p className="text-base md:text-lg font-bold text-gray-200 hover:text-violet-400 transition-colors truncate">linkedin.com/in/abishekk-c-5457b4227</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Github</p>
                                    <p className="text-base md:text-lg font-bold text-gray-200 hover:text-violet-400 transition-colors">github.com/codabishekk</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <div className="glass p-8 md:p-12 rounded-[30px] md:rounded-[40px] relative">
                            <form className="grid gap-6 md:gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Full Identity</label>
                                    <input type="text" placeholder="Johnathan Doe" className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[20px] px-6 md:px-8 py-4 md:py-5 focus:border-violet-500/50 focus:bg-white/[0.04] outline-none transition-all duration-500 font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Electronic Mail</label>
                                    <input type="email" placeholder="john@studio.com" className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[20px] px-6 md:px-8 py-4 md:py-5 focus:border-violet-500/50 focus:bg-white/[0.04] outline-none transition-all duration-500 font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">The Message</label>
                                    <textarea rows="4" placeholder="Tell me about your vision..." className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[20px] px-6 md:px-8 py-4 md:py-5 focus:border-violet-500/50 focus:bg-white/[0.04] outline-none transition-all duration-500 font-medium resize-none"></textarea>
                                </div>
                                <button className="w-full py-5 md:py-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold rounded-[20px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 premium-shadow uppercase tracking-widest text-[11px]">
                                    Initialize Brief →
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-24 md:mt-32 pt-16 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                        <a href="/#home" className="hover:text-white transition-colors">HOME</a>
                        <a href="/#about" className="hover:text-white transition-colors">ABOUT</a>
                        <a href="/#contact" className="hover:text-white transition-colors">CONTACT</a>
                    </div>
                    <div className="flex gap-8">
                        <a href="mailto:abishekkc923@gmail.com" className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-xl md:text-2xl">
                            <FaEnvelope />
                        </a>
                        <a href="tel:9047943317" className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-xl md:text-2xl">
                            <FaPhone />
                        </a>
                        <a href="https://www.linkedin.com/in/abishekk-c-5457b4227" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-xl md:text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/codabishekk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-xl md:text-2xl">
                            <FaGithub />
                        </a>
                    </div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center">© 2026 ABISHEK.C — ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </section>
    );
}


