import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

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
            <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-[0.2em]">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
                        className={`transition-all duration-500 relative group ${
                            location.pathname === "/" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-white"
                        }`}
                    >
                        {item}
                        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-500 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-3xl text-white p-3 glass rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl md:hidden z-[60] flex flex-col items-center justify-center gap-10 animate-in fade-in duration-300">
                    <button 
                        className="absolute top-8 right-8 text-3xl text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <HiX />
                    </button>
                    {navItems.map((item, index) => (
                        <a
                            key={item}
                            href={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
                            className="text-4xl font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-violet-500 transition-colors"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
