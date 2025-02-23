import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Features.module.css';
import Image from 'next/image';

export default function Features() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>特徴・強み | しごと探検隊</title>
        <meta name="description" content="しごと探検隊の特徴と強みをご紹介します。バーチャル職業体験ならではの魅力や他サービスとの違いをご覧ください。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>しごと探検隊の特徴</h1>
        <p className={styles.heroSubtitle}>子どもたちに夢と学びを届けるための4つの強み</p>
      </motion.section>

      {/* 特徴セクション */}
      <section className={styles.featuresGrid}>
        {/* 特徴1 */}
        <motion.div
          className={styles.featureCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/interactive-experience.png"
            alt="インタラクティブな体験(準備中)"
            width={100}
            height={100}
          />
          <h2>🎮 インタラクティブな体験</h2>
          <p>
            ゲーミフィケーション要素を取り入れ、子どもたちが楽しみながら学べる設計。実際に仕事を「体験」できるコンテンツが充実。
          </p>
        </motion.div>

        {/* 特徴2 */}
        <motion.div
          className={styles.featureCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/supportive-learning.png"
            alt="特別支援対応(準備中)"
            width={100}
            height={100}
          />
          <h2>🤝 特別支援対応</h2>
          <p>
            特別支援学校にも対応したカリキュラムで、一人ひとりの個性やペースに合わせた職業体験が可能です。
          </p>
        </motion.div>

        {/* 特徴3 */}
        <motion.div
          className={styles.featureCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/realistic-scenarios.png"
            alt="リアルなシナリオ(準備中)"
            width={100}
            height={100}
          />
          <h2>🏗️ リアルなシナリオ</h2>
          <p>
            実際の職場をモデルにしたバーチャル空間で、リアルな仕事の流れや課題を体験。現場感を大切にしています。
          </p>
        </motion.div>

        {/* 特徴4 */}
        <motion.div
          className={styles.featureCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/flexible-integration.png"
            alt="学校・自治体との連携(準備中)"
            width={100}
            height={100}
          />
          <h2>🏫 学校・自治体との連携</h2>
          <p>
            教育機関や自治体と連携した導入支援。教育現場に合わせたカスタマイズが可能です。
          </p>
        </motion.div>
      </section>
    </>
  );
}
