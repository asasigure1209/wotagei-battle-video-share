import { Metadata } from "next";
import styles from "./page.module.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "エルニーニョ vol. 8 | 動画配布フォーム",
  description: "ヲタ芸バトルイベント「エルニーニョ」の動画配布サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
