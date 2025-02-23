import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {/* ヘッダー */}
      <Header />

      {/* ページ遷移アニメーション */}
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          className={styles.mainContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* フッター */}
      <Footer />
    </div>
  );
};

export default Layout;
