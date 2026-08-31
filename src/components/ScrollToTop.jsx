import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToTop } from "../lib/scroll";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          data-cursor-label="TOP"
          className="fixed bottom-8 right-8 z-[90] hidden h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface-elevated/90 text-electric-green backdrop-blur transition-colors duration-500 hover:bg-electric-green hover:text-cta-text-on-green md:flex"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}