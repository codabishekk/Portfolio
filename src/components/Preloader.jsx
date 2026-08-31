import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap, prefersReducedMotion } from "../animations/gsap";

const PANELS = 3;

const containerVariants = {
  exit: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.45,
    },
  },
};

const panelVariants = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? 100 : 0));
  const doneRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return undefined;
    }

    const shake = { value: 0 };
    const tl = gsap.timeline({
      onUpdate: () => setCount(Math.round(shake.value)),
    });

    tl.to(shake, {
      value: 100,
      duration: 1.7,
      ease: "power2.inOut",
    })
      .to({}, { duration: 0.35 })
      .add(() => {
        if (!doneRef.current) {
          doneRef.current = true;
          onComplete();
        }
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex overflow-hidden bg-background-base"
      variants={containerVariants}
      initial="initial"
      exit="exit"
      aria-hidden="true"
    >
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-x-0 bg-background-base"
          style={{ top: `${(i * 100) / PANELS}%`, height: `${100 / PANELS}%` }}
          variants={panelVariants}
        />
      ))}

      {/* Center brand */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
        exit={{ opacity: 0, y: -24, transition: { duration: 0.4, ease: "power2.in" } }}
      >
        <div className="overflow-hidden">
          <motion.p
            className="font-anton uppercase tracking-[0.42em] text-white-highlight text-lg md:text-2xl"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            ABISHEK<span className="text-electric-green">.C</span>
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            className="editorial-label mt-3 opacity-70"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital Architect
          </motion.p>
        </div>

        {/* Progress line */}
        <div className="relative mt-8 h-px w-44 md:w-56 overflow-hidden bg-border-subtle">
          <motion.div
            className="absolute inset-y-0 left-0 bg-electric-green"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.12 }}
          />
        </div>
      </motion.div>

      {/* Counter */}
      <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-10 md:right-12">
        <motion.div
          className="overflow-hidden"
          exit={{ opacity: 0, y: 40, transition: { duration: 0.35, ease: "power2.in" } }}
        >
          <span className="font-anton text-[56px] md:text-[110px] leading-none tracking-tight text-white-highlight/90 tabular-nums">
            {String(count).padStart(3, "0")}
          </span>
        </motion.div>
        <motion.p
          className="editorial-label mt-2 text-right"
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}