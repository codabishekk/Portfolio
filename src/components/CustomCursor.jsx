import { useRef, useState, useEffect } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pressedRef = useRef(false);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return fine && !reduce && window.innerWidth >= 768;
  });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || window.innerWidth < 768) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let raf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let visible = false;

    const apply = (el, x, y, scale = 1) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = 1;
        ring.style.opacity = 1;
      }
      apply(dot, mx, my);
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      apply(ring, rx, ry, pressedRef.current ? 0.85 : 1);
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (target) {
        setHover(true);
        setLabel(target.getAttribute("data-cursor-label") || "VIEW");
        ring.classList.add("is-hover");
      } else {
        setHover(false);
        ring.classList.remove("is-hover");
      }
    };

    const onDown = () => {
      pressedRef.current = true;
    };
    const onUp = () => {
      pressedRef.current = false;
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = 0;
      ring.style.opacity = 0;
    };

    document.body.classList.add("has-custom-cursor");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-label">{hover ? label : ""}</span>
      </div>
    </>
  );
}