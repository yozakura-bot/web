import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Services.module.css';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>サービス紹介 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊が提供するバーチャル職業体験サービスをご紹介します。学生向け、特別支援学校向け、教育機関向けの多様なサービスを展開しています。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>しごと探検隊のサービス</h1>
        <p className={styles.heroSubtitle}>子どもたちが未来を描くための多様な職業体験を提供します。</p>
      </motion.section>

      {/* サービスカード一覧 */}
      <section className={styles.servicesGrid}>
        {/* サービス1 */}
        <motion.div
          className={styles.serviceCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/virtual-experience.jpg"
            alt="バーチャル職業体験"
            width={400}
            height={250}
            className={styles.serviceImage}
          />
          <h2>🎮 バーチャル職業体験</h2>
          <p>
            ゲーミフィケーション要素を取り入れたインタラクティブな職業体験で、子どもたちが楽しく学べます。
          </p>
        </motion.div>

        {/* サービス2 */}
        <motion.div
          className={styles.serviceCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/support-education.jpg"
            alt="特別支援学校向けプログラム(準備中)"
            width={400}
            height={250}
            className={styles.serviceImage}
          />
          <h2>🤝 特別支援学校向けプログラム</h2>
          <p>
            一人ひとりの特性に合わせた学びをサポートする、特別支援学校向けの職業体験プログラムを提供します。
          </p>
        </motion.div>

        {/* サービス3 */}
        <motion.div
          className={styles.serviceCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/teacher-support.jpg"
            alt="教育機関向け導入支援(準備中)"
            width={400}
            height={250}
            className={styles.serviceImage}
          />
          <h2>🏫 教育機関向け導入支援</h2>
          <p>
            学校や自治体と連携し、職業体験の導入や運用をサポートします。カスタマイズプランにも対応。
          </p>
        </motion.div>
      </section>
    </>
  );
}
