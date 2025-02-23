import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Recruit.module.css';

export default function Recruit() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>採用情報 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊の無給ボランティア募集ページです。エンジニアやサポートスタッフとして教育に貢献したい方を募集しています。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>無給ボランティア募集</h1>
        <p className={styles.heroSubtitle}>教育の未来を一緒に創る仲間を募集しています。</p>
      </motion.section>

      {/* 募集要項セクション */}
      <section className={styles.jobsContainer}>
        {/* 無給ボランティア - エンジニア */}
        <motion.div
          className={styles.jobCard}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>🌟 無給ボランティア - エンジニア</h2>
          <ul>
            <li><strong>活動内容:</strong> Webサービスの開発補助（React/Next.js）</li>
            <li><strong>参加条件:</strong> 初心者OK！学びながら貢献したい方歓迎</li>
            <li><strong>活動場所:</strong> フルリモート</li>
            <li><strong>特典:</strong> メンタリング、修了証の発行、ポートフォリオへの掲載可</li>
          </ul>
        </motion.div>

        {/* 無給ボランティア - サポートスタッフ */}
        <motion.div
          className={styles.jobCard}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>🌟 無給ボランティア - サポートスタッフ</h2>
          <ul>
            <li><strong>活動内容:</strong> 職業体験イベントのサポート、資料作成補助</li>
            <li><strong>参加条件:</strong> 教育や社会貢献に関心がある方（経験不問）</li>
            <li><strong>活動場所:</strong> オンライン・イベント会場</li>
            <li><strong>特典:</strong> 修了証の発行、将来の有償プロジェクトへの優先招待</li>
          </ul>
        </motion.div>
      </section>

      {/* 応募方法セクション */}
      <section className={styles.applySection}>
        <h2>📩 応募方法</h2>
        <p>
          ご興味のある方は、<a href="/contact">お問い合わせページ</a>よりご連絡ください。応募理由やこれまでの経験などを簡単にご記入ください。
        </p>
      </section>
    </>
  );
}
