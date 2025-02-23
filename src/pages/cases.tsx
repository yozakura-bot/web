import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Cases.module.css';
import Image from 'next/image';

export default function Cases() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>導入事例 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊を導入した学校や自治体の成功事例をご紹介します。実際の導入効果や生徒の声をご覧ください。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>導入事例【準備中】</h1>
        <p className={styles.heroSubtitle}>しごと探検隊を導入した教育現場の声をご紹介します。</p>
      </motion.section>

      {/* 導入事例カード一覧 */}
      <section className={styles.casesGrid}>
        {/* 事例1 */}
        <motion.div
          className={styles.caseCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/case-school.jpg"
            alt="○○小学校の導入事例"
            width={400}
            height={250}
            className={styles.caseImage}
          />
          <h2>🏫 ○○小学校</h2>
          <p>
            「しごと探検隊」の導入により、児童の職業理解が深まり、将来の夢について考える時間が増えました。
          </p>
          <span className={styles.caseTag}>小学校</span>
        </motion.div>

        {/* 事例2 */}
        <motion.div
          className={styles.caseCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/case-special-education.jpg"
            alt="△△特別支援学校の導入事例"
            width={400}
            height={250}
            className={styles.caseImage}
          />
          <h2>🤝 △△特別支援学校</h2>
          <p>
            特別支援教育に対応したコンテンツで、生徒が自分のペースで職業体験に取り組めました。
          </p>
          <span className={styles.caseTag}>特別支援学校</span>
        </motion.div>

        {/* 事例3 */}
        <motion.div
          className={styles.caseCard}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/case-city.jpg"
            alt="□□市教育委員会の導入事例"
            width={400}
            height={250}
            className={styles.caseImage}
          />
          <h2>🏙️ □□市教育委員会</h2>
          <p>
            市内全小学校での導入を実現。自治体と連携し、地域全体でのキャリア教育を強化しました。
          </p>
          <span className={styles.caseTag}>自治体</span>
        </motion.div>
      </section>
    </>
  );
}
