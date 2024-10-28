// Updated fadeIn animation for more dynamic motion
export const fadeIn = (direction: string, delay: number) => ({
  hidden: {
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    opacity: 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay,
      duration: 1,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
