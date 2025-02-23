import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ロゴ */}
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="しごと探検隊" width={50} height={50} />
          <span>しごと探検隊</span>
        </Link>

        {/* ハンバーガーメニュー (モバイル用) */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        </button>

        {/* ナビゲーションメニュー */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><Link href="/about">会社概要</Link></li>
            <li><Link href="/mission">理念</Link></li>
            <li><Link href="/services">サービス</Link></li>
            <li><Link href="/features">特徴</Link></li>
            <li><Link href="/cases">導入事例</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact" className={styles.contactButton}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
