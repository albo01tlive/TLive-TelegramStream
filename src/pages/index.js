import { useState, useRef } from "react";
import styles from "../styles/globals.module.css";

const COMMISSION_ADDR = "UQA9obsFO32tQGb5PmXWY8PjqaPbILQN7N488MzB9SLIF2tY";

export default function Home() {
  const [streaming, setStreaming] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [isSavedFav, setIsSavedFav] = useState(false);
  const [isSavedChan, setIsSavedChan] = useState(false);
  const [isSentChat, setIsSentChat] = useState(false);
  const videoRef = useRef(null);

  const startStream = async () => {
    setStreaming(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  const sendComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const connectWallet = () => {
    setWalletConnected(true);
  };

  const donate = () => {
    if (!donationAmount) return;
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) return alert("Введите сумму");
    const commission = Math.ceil(amount * 0.03 * 100) / 100;
    const toStreamer = Math.ceil(amount * 0.97 * 100) / 100;
    alert(
      `Донат: ${toStreamer} стримеру, комиссия ${commission} отправлена на ${COMMISSION_ADDR}`
    );
  };

  const saveStreamToFavorites = () => {
    setIsSavedFav(true);
    setTimeout(() => setIsSavedFav(false), 2000);
  };
  const saveStreamToChannel = () => {
    setIsSavedChan(true);
    setTimeout(() => setIsSavedChan(false), 2000);
  };
  const sendStreamInChat = () => {
    setIsSentChat(true);
    setTimeout(() => setIsSentChat(false), 2000);
  };

  return (
    <div className={styles.walletContainer}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="TLive" width={48} />
        <h2>TLive Stream</h2>
      </header>
      <main>
        {!streaming && (
          <button className={styles.btnPrimary} onClick={startStream}>
            Начать эфир
          </button>
        )}
        <video ref={videoRef} width="100%" height="210" autoPlay muted className={styles.video} />
        <div className={styles.stats}>
          <span>Зрителей: {viewers}</span>
        </div>
        <div className={styles.commentBlock}>
          <input
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Ваш комментарий…"
            className={styles.input}
          />
          <button className={styles.btnSecondary} onClick={sendComment}>Отправить</button>
        </div>
        <ul className={styles.comments}>
          {comments.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
        <div className={styles.walletControls}>
          <button className={styles.btnSecondary} onClick={connectWallet} disabled={walletConnected}>
            {walletConnected ? "Кошелек привязан" : "Привязать Telegram кошелек"}
          </button>
          <input
            type="number"
            min="1"
            value={donationAmount}
            onChange={e => setDonationAmount(e.target.value)}
            className={styles.input}
            placeholder="Сумма доната"
          />
          <button className={styles.btnPrimary} onClick={donate}>Задонатить</button>
        </div>
        <hr />
        <div className={styles.actionRow}>
          <button
            className={styles.btnOutline}
            onClick={saveStreamToFavorites}
            style={isSavedFav ? { background: "#0088cc", color: "#fff" } : {}}
          >
            {isSavedFav ? "Сохранено!" : "В избранное"}
          </button>
          <button
            className={styles.btnOutline}
            onClick={saveStreamToChannel}
            style={isSavedChan ? { background: "#0088cc", color: "#fff" } : {}}
          >
            {isSavedChan ? "Сохранено!" : "В канал"}
          </button>
          <button
            className={styles.btnOutline}
            onClick={sendStreamInChat}
            style={isSentChat ? { background: "#0088cc", color: "#fff" } : {}}
          >
            {isSentChat ? "Отправлено!" : "В чат"}
          </button>
        </div>
      </main>
    </div>
  );
}