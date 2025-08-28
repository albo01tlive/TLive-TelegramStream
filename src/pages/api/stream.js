// Пример API-заглушки
export default function handler(req, res) {
  res.status(200).json({ message: "Stream API работает! Реализуйте обработку донатов и сообщений." });
}