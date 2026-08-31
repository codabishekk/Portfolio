let lenisInstance = null;

export function setLenis(l) {
  lenisInstance = l;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToId(id, offset = -72) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function stopScroll() {
  if (lenisInstance) lenisInstance.stop();
}

export function startScroll() {
  if (lenisInstance) lenisInstance.start();
}