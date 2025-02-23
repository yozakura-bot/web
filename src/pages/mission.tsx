import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Mission.module.css';
import Image from 'next/image';

export default function Mission() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>サービス理念 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊のサービス理念ページです。私たちのミッション、ビジョン、そして大切にしている価値観をご紹介します。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>未来をつくる、職業体験。</h1>
        <p className={styles.heroSubtitle}>すべての子どもたちに、夢を描くきっかけを。</p>
        <Image
          src="/images/mission-hero.jpg"
          alt="バーチャル職業体験のイメージ"
          width={1200}
          height={600}
          className={styles.heroImage}
          priority
        />
      </motion.section>

      {/* ミッション・ビジョン・バリュー */}
      <section className={styles.missionSection}>
        <motion.div
          className={styles.missionBlock}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>ミッション</h2>
          <p>「しごと探検隊」は、子どもたちに多様な職業体験を通して、未来を切り拓く力を育むことを目指します。</p>
        </motion.div>

        <motion.div
          className={styles.missionBlock}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>ビジョン</h2>
          <p>誰もが平等にキャリア教育を受けられる社会を創り出し、子どもたちの可能性を最大限に引き出します。</p>
        </motion.div>

        <motion.div
          className={styles.missionBlock}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>バリュー</h2>
          <ul>
            <li>🎯 学びを楽しく — ゲーミフィケーション要素を活用</li>
            <li>🤝 みんなで体験 — 先生・親・仲間と協力する学び</li>
            <li>🌏 多様性を尊重 — すべての子どもたちにチャンスを</li>
          </ul>
        </motion.div>
      </section>
    </>
  );
}
