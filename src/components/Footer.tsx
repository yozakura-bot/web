import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ロゴ & サービス名 */}
        <div className={styles.logoSection}>
          <img src="/images/logo.png" alt="しごと探検隊" className={styles.logo} />
          <h3>しごと探検隊</h3>
        </div>

        {/* ナビゲーションリンク */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/about">会社概要</Link></li>
            <li><Link href="/privacy-policy">プライバシーポリシー</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>

        {/* SNSリンク */}
        <div className={styles.sns}>
          <a href="https://twitter.com/your_x_account" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.png" alt="X (旧Twitter)" />
          </a>
        </div>
      </div>

      {/* 著作権表示 */}
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} しごと探検隊. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
