import { motion } from 'framer-motion';
import styles from './AnimatedButton.module.css';

type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      className={styles.animatedButton}
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: '#4c9aff' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
