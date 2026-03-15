import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 z-50 transition-all duration-500 ${
            scrolled ? "py-4 glass border-b border-white/[0.05]" : "py-8 bg-transparent"
        }`}>
            <Link to="/" className="text-3xl font-extrabold text-gradient tracking-tight hover:scale-105 transition-transform duration-300">
                ABISHEKK.C
            </Link>
            
            {/* Desktop Menu */}
            <motion.div 
                className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-[0.2em]"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.5
                        }
                    }
                }}
            >
                {navItems.map((item) => (
                    <motion.a
                        key={item}
                        href={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            show: { opacity: 1, y: 0 }
                        }}
                        className={`transition-all duration-500 relative group ${
                            location.pathname === "/" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-white"
                        }`}
                    >
                        {item}
                        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-500 group-hover:w-full"></span>
                    </motion.a>
                ))}
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-3xl text-white p-3 glass rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl md:hidden z-[60] flex flex-col items-center justify-center gap-10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <button 
                            className="absolute top-8 right-8 text-3xl text-white p-3 glass rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            <HiX />
                        </button>
                        <motion.div 
                            className="flex flex-col items-center gap-8"
                            initial="hidden"
                            animate="show"
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
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item}
                                    href={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    className="text-4xl font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-violet-500 transition-all hover:scale-110 active:scale-95"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
