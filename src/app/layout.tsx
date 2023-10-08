import styles from "./page.module.css";
import { Providers } from "./providers";

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
