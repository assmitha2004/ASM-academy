// =======================================
// Premium Motion System
// Optimized for smooth rendering
// =======================================

const premiumEase = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: premiumEase,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      ease: premiumEase,
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      ease: premiumEase,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
) => ({
  hidden: {},

  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/* =======================================
   HERO TEXT REVEAL
   Removed blur for clean rendering
======================================= */

export const heroTextReveal = {
  hidden: {
    opacity: 0,
    y: 36,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 12,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -12,

    transition: {
      duration: 0.25,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
  },

  hover: {
    y: -4,
    scale: 1.01,

    transition: {
      duration: 0.3,
      ease: premiumEase,
    },
  },
};