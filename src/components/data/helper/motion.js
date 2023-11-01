export const slideInFromLeft = {
  hidden: { x: '-100%' },
  visible: { x: '0%' },
};

export const listVAriatns = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, x: -300 },
};

export const listVAriatns2 = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: -100 },
};
