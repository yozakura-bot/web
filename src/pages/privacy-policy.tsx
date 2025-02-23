import Head from 'next/head';
import styles from '../styles/PrivacyPolicy.module.css';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>プライバシーポリシー | しごと探検隊</title>
        <meta name="description" content="しごと探検隊のプライバシーポリシーをご確認ください。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>プライバシーポリシー</h1>
        <p className={styles.heroSubtitle}>しごと探検隊の個人情報保護方針についてご説明します。</p>
      </motion.section>

      {/* 本文セクション */}
      <section className={styles.content}>
        <h2>1. 個人情報の取得について</h2>
        <p>
          当サイトでは、サービス提供のために必要な範囲でユーザーの個人情報を取得することがあります。
        </p>

        <h2>2. 個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的で利用いたします。</p>
        <ul>
          <li>サービスの提供・運営</li>
          <li>お問い合わせへの対応</li>
          <li>資料請求への対応</li>
          <li>サービス改善のための分析</li>
        </ul>

        <h2>3. 個人情報の第三者提供</h2>
        <p>
          当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
        </p>

        <h2>4. 個人情報の管理</h2>
        <p>
          個人情報への不正アクセス、紛失、改ざん、漏洩を防ぐため、適切な安全管理措置を講じます。
        </p>

        <h2>5. プライバシーポリシーの変更</h2>
        <p>
          本ポリシーは、法令の改正や運営方針の変更により、事前の予告なく改定する場合があります。
        </p>

        <h2>6. お問い合わせ</h2>
        <p>
          本ポリシーに関するお問い合わせは、<a href="/contact">お問い合わせフォーム</a> よりご連絡ください。
        </p>

        <p className={styles.updatedDate}>最終更新日: 2025年2月23日</p>
      </section>
    </>
  );
}
