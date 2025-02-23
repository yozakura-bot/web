import Head from 'next/head';
import FadeIn from '../components/FadeIn';
import AnimatedButton from '../components/AnimatedButton';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* SEO対策用のヘッド */}
      <Head>
        <title>しごと探検隊 | 学生向けバーチャル職業体験</title>
        <meta
          name="description"
          content="しごと探検隊は、学生向けにリアルなバーチャル職業体験を提供するWebサービスです。特別支援学校の先生方とも連携し、多様なキャリア教育をサポートします。"
        />
        <meta
          name="keywords"
          content="バーチャル職業体験, キャリア教育, 学生, 特別支援学校, しごと探検隊"
        />
        <meta property="og:title" content="しごと探検隊 | 学生向けバーチャル職業体験" />
        <meta
          property="og:description"
          content="学生向けにリアルなバーチャル職業体験を提供。多様なキャリア教育を支援します。"
        />
        <meta property="og:image" content="/images/ogp-image.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="しごと探検隊 | 学生向けバーチャル職業体験" />
        <meta
          name="twitter:description"
          content="学生向けにリアルなバーチャル職業体験を提供するWebサービス。"
        />
        <meta name="twitter:image" content="/images/ogp-image.png" />
      </Head>

      {/* メインコンテンツ */}
      <div className={styles.hero}>
        <FadeIn>
          <h1>しごと探検隊へようこそ！</h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p>バーチャルで体験する「未来のしごと」。</p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <AnimatedButton>職業体験をはじめる</AnimatedButton>
        </FadeIn>

        <FadeIn delay={0.9}>
          <Image
            src="/images/virtual-career.png"
            alt="バーチャル職業体験のイメージ"
            width={600}
            height={400}
          />
        </FadeIn>
      </div>

      {/* 特徴セクション */}
      <section className={styles.features}>
        <FadeIn>
          <h2>しごと探検隊の特徴</h2>
        </FadeIn>

        <div className={styles.featureList}>
          <FadeIn delay={0.3}>
            <div className={styles.featureItem}>
              <Image src="/images/feature1.png" alt="リアルな体験" width={100} height={100} />
              <h3>リアルなバーチャル体験</h3>
              <p>3D空間で実際の仕事を体験できます。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className={styles.featureItem}>
              <Image src="/images/feature2.png" alt="多様な職種" width={100} height={100} />
              <h3>多様な職業ラインナップ</h3>
              <p>医療・建築・ITなど幅広い業界をカバー。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className={styles.featureItem}>
              <Image src="/images/feature3.png" alt="教育支援" width={100} height={100} />
              <h3>特別支援学校にも対応</h3>
              <p>先生方と協力し、多様な学びを支援します。</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
