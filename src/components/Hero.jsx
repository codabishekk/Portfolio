import { motion } from "framer-motion";
import heroBg from "../assets/hero-new.jpg";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh pt-32 pb-20 md:pt-20">
            {/* Background decorative elements */}
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-violet-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse z-0"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600/10 rounded-full blur-[70px] md:blur-[100px] animate-pulse delay-1000 z-0"></div>

            <div className="container flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 z-10 relative">
                <motion.div
                    className="flex-[1.2] text-center md:text-left order-2 md:order-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 glass-light rounded-full mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">Available for Projects</span>
                    </motion.div>

                    <motion.h1 
                        className="text-6xl sm:text-7xl md:text-9xl lg:text-[120px] font-extrabold mb-8 leading-[0.9] tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Crafting <br />
                        <span className="text-gradient text-glow">Digital</span> <br />
                        Excellence.
                    </motion.h1>

                    <motion.p 
                        className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        I am a full-stack engineer and designer specialized in creating premium, high-performance web applications that make an impact.
                    </motion.p>

                    <motion.div 
                        className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-12 mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <a href="/#projects" className="px-10 md:px-12 py-5 md:py-6 bg-foreground text-background font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all duration-500 premium-shadow text-base md:text-lg hover:-translate-y-1">
                            SELECTED WORKS
                        </a>
                        <a href="/#contact" className="px-10 md:px-12 py-5 md:py-6 glass hover:bg-white/[0.08] text-white font-bold rounded-2xl transition-all duration-500 text-base md:text-lg hover:-translate-y-1">
                            GET IN TOUCH
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Photo as a Floating Element */}
                <motion.div
                    className="flex-1 flex justify-center relative order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <div className="relative group p-3 md:p-4 border border-white/[0.05] rounded-[30px] md:rounded-[40px] glass-light">
                        <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-[35px] md:rounded-[45px] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                        <img
                            src={heroBg}
                            alt="Abishekk"
                            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-[24px] md:rounded-[32px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
