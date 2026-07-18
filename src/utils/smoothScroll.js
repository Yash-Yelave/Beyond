const easeInOutCubic = (t) => (
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
);

export function scrollToElementId(id, { offset = 72, duration = 950 } = {}) {
  const target = document.getElementById(id);
  if (!target) return false;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - offset;
  const distance = targetY - startY;
  const startTime = window.performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
  return true;
}
