import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/FAQ.module.css';

const faqs = [
  {
    question: '「しごと探検隊」とはどのようなサービスですか？',
    answer: '「しごと探検隊」は、学生向けのバーチャル職業体験サービスです。実際の職業を仮想空間で体験しながら、将来のキャリアについて考えるきっかけを提供します。',
  },
  {
    question: '特別支援学校にも対応していますか？',
    answer: 'はい、特別支援学校向けのカリキュラムや機能にも対応しており、個々の生徒のニーズに合わせた職業体験が可能です。',
  },
  {
    question: '学校単位での導入は可能ですか？',
    answer: 'もちろんです。学校単位や自治体単位での導入が可能で、カスタマイズにも対応しています。詳しくはお問い合わせください。',
  },
  {
    question: '必要な推奨環境はありますか？',
    answer: 'Webブラウザ（Google ChromeやMicrosoft Edgeなど）がインストールされたPCがあればご利用いただけます。高性能なPCは必須ではありません。',
  },
  {
    question: '料金プランについて教えてください。',
    answer: '料金は学校・自治体ごとに異なる場合があります。詳しくはお問い合わせページからご連絡ください。',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* SEO設定 */}
      <Head>
        <title>よくある質問 | しごと探検隊</title>
        <meta name="description" content="しごと探検隊に関するよくある質問とその回答を掲載しています。不明点があればこちらをご覧ください。" />
      </Head>

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>よくある質問</h1>
        <p className={styles.heroSubtitle}>「しごと探検隊」に関するよくあるご質問にお答えします。</p>
      </section>

      {/* FAQセクション */}
      <section className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <span className={styles.toggleIcon}>{activeIndex === index ? '-' : '+'}</span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </>
  );
}
