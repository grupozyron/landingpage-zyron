/** Curva “produto” — arranque rápido, desaceleração longa e estável */
const cubic = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: cubic },
  },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

export const staggerFast = {
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: cubic },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: cubic },
  },
};
