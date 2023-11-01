export const slideInFromLeft = {
  hidden: { x: '-100%' },
  visible: { x: '0%' },
};

export const listVariants = {
  visible: i => ({
    opacity: 1,

    x: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, x: -300 },
};
