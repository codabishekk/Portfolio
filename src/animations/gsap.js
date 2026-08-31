import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const EASE_CURTAIN = "power4.inOut";
export const EASE_EXPO = "expo.out";
export const EASE_OUT = "power3.out";
export const EASE_INOUT = "power2.inOut";
export const EASE_SOFT = [0.16, 1, 0.3, 1];

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);