export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    }
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay
      }
    }
  };
};
