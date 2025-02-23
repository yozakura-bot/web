import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '導入に関すること', // デフォルトカテゴリー
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // フォーム入力管理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォーム送信
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('全ての必須項目を入力してください。');
      return;
    }

    // 仮送信処理
    console.log('送信データ:', formData);
    setStatus('メッセージが送信されました！ありがとうございました✨');

    // フォームリセット
    setFormData({
      name: '',
      email: '',
      category: '導入に関すること',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>お問い合わせ | しごと探検隊</title>
        <meta name="description" content="しごと探検隊へのお問い合わせはこちらからどうぞ。" />
      </Head>

      {/* ヒーローセクション */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>お問い合わせ</h1>
        <p className={styles.heroSubtitle}>ご不明点や資料請求など、お気軽にお問い合わせください。</p>
      </motion.section>

      {/* お問い合わせフォーム */}
      <section className={styles.formSection}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          
          {/* 名前 */}
          <label htmlFor="name">お名前 *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* メールアドレス */}
          <label htmlFor="email">メールアドレス *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* カテゴリー選択 */}
          <label htmlFor="category">お問い合わせの種類 *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="導入に関すること">🏫 導入に関すること</option>
            <option value="資料請求">📄 資料請求</option>
            <option value="一般的な質問">📋 一般的な質問</option>
            <option value="サービスに関するお問い合わせ">🛠️ サービスに関するお問い合わせ</option>
            <option value="ボランティア参加希望">🤝 ボランティア参加希望</option>
            <option value="技術的なサポート">🧑‍💻 技術的なサポート</option>
          </select>

          {/* 件名 */}
          <label htmlFor="subject">件名</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          {/* メッセージ */}
          <label htmlFor="message">メッセージ *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* ステータスメッセージ */}
          {status && <p className={styles.statusMessage}>{status}</p>}

          {/* 送信ボタン */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.submitButton}
          >
            送信する
          </motion.button>
        </form>
      </section>
    </>
  );
}
