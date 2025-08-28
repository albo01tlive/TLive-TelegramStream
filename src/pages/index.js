import Head from "next/head";
import styles from "../styles/globals.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TLive Telegram Stream</title>
        <meta name="description" content="Стрим с донатами и Telegram-ботом" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <img src="/logo.svg" alt="TLive Logo" width={80} height={80} />
        <h1>Добро пожаловать на TLive Stream!</h1>
        <p>Здесь будет стрим с донатами и интеграцией с Telegram.</p>
        <p>Бот: пример в <code>bot/bot.py</code></p>
      </main>
      <footer className={styles.footer}>
        © 2025 TLive-TelegramStream
      </footer>
    </div>
  );
}