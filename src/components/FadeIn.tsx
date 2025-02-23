import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
