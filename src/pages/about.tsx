import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>会社概要 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊の会社概要ページです。私たちのミッション、ビジョン、そして提供する価値をご紹介します。" />
      </Head>

      {/* メインコンテンツ */}
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>会社概要</h1>

        <section className={styles.section}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            私たちのミッション
          </motion.h2>
          <p>
            しごと探検隊は、学生が将来のキャリアを楽しく学べる「バーチャル職業体験」を提供しています。  
            特別支援学校の先生方とも連携し、多様な学びの場を創出しています。
          </p>
        </section>

        <section className={styles.section}>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            ビジョン
          </motion.h2>
          <p>
            誰もが自分の未来にワクワクできる社会を目指し、すべての学生に等しいキャリア体験の機会を届けます。
          </p>
        </section>

        <section className={styles.section}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            会社情報
          </motion.h2>

          <ul className={styles.companyInfo}>
            <li><strong>会社名:</strong> しごと探検隊</li>
            <li><strong>設立:</strong> 2025年4月</li>
            <li><strong>所在地:</strong> 千葉県長生郡長南町佐坪661</li>
            <li><strong>代表者:</strong> 山﨑 亮汰</li>
            <li><strong>事業内容:</strong> バーチャル職業体験サービスの開発・運営</li>
          </ul>
        </section>

        <motion.div
          className={styles.imageWrapper}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src="/images/team-photo.jpg"
            alt="しごと探検隊のチーム写真"
            width={800}
            height={500}
            className={styles.teamImage}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
