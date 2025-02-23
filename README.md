shigoto-tankentai/
├── public/                       # 静的ファイル (画像・アイコンなど)
│   ├── images/                   # イメージ素材
│   │   └── logo.png
│   └── favicon.ico               # Favicon
│
├── src/                          # ソースコード
│   ├── pages/                    # Next.js ページルーティング
│   │   ├── index.tsx             # トップページ (/)
│   │   ├── about.tsx             # 会社概要 (/about)
│   │   ├── mission.tsx           # サービス理念 (/mission)
│   │   ├── services.tsx          # サービス紹介 (/services)
│   │   ├── features.tsx          # 特徴・強み (/features)
│   │   ├── cases.tsx             # 導入事例 (/cases)
│   │   ├── faq.tsx               # よくある質問 (/faq)
│   │   ├── recruit.tsx           # 採用情報 (/recruit)
│   │   ├── contact.tsx           # お問い合わせ (/contact)
│   │   ├── privacy-policy.tsx    # プライバシーポリシー (/privacy-policy)
│   │   └── _app.tsx              # ページ共通設定
│   │   └── _document.tsx         # カスタムドキュメント (HTML構造)
│
│   ├── components/               # 再利用可能なコンポーネント
│   │   ├── Header.tsx            # ヘッダー
│   │   ├── Footer.tsx            # フッター
│   │   ├── TwitterEmbed.tsx      # X(旧Twitter) 埋め込み
│   │   ├── PageTransition.tsx    # ページ遷移アニメーション
│   │   └── Layout.tsx            # 共通レイアウト
│
│   ├── styles/                   # グローバル・モジュールスタイル
│   │   ├── globals.css           # グローバルスタイル (Tailwind CSS)
│   │   └── Header.module.css     # ヘッダー専用スタイル
│
│   ├── hooks/                    # カスタムフック
│   │   └── useForm.ts            # フォームバリデーション用
│
│   ├── utils/                    # ユーティリティ関数
│   │   └── formValidation.ts     # お問い合わせフォーム用バリデーション
│
│   ├── assets/                   # フォントやSVGなどのアセット
│   │   └── fonts/                # フォントファイル
│   │   └── icons/                # アイコン素材
│
│   └── lib/                      # 外部サービス・APIとの連携
│       └── emailjs.ts            # EmailJS 設定 (お問い合わせ用)
│
├── tailwind.config.js            # Tailwind CSS 設定
├── postcss.config.js             # PostCSS 設定
├── tsconfig.json                 # TypeScript 設定
├── package.json                  # プロジェクト設定
└── next.config.js                # Next.js 設定
"# web" 
