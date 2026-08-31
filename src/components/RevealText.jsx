import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../animations/gsap";

export default function RevealText({ text, className = "" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const words = ref.current.querySelectorAll(".rv-word");
    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.045,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            end: "center 42%",
            scrub: 0.6,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="rv-word inline-block will-change-transform" aria-hidden="true">
          {word}
          {"\u00A0"}
        </span>
      ))}
    </p>
  );
}