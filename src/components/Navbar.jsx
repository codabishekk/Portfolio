import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-6 glass z-50 transition-all duration-300">
            <h1 className="text-2xl font-extrabold text-gradient tracking-tight">ABISHEKK.C</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-[12px] font-bold uppercase tracking-[0.2em]">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`/#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-all duration-500 relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-violet-500 transition-all duration-500 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-3xl text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full glass md:hidden py-8 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            className="text-lg font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
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


