# TLive-TelegramStream

**TLive-TelegramStream** — веб-приложение для стриминга с донатами и интеграцией с Telegram-ботом и кошельком (макет).  
Сделано на Next.js, деплой на Vercel.

## Запуск локально

```bash
npm install
npm run dev
```

## Production

Достаточно залить на Vercel (https://vercel.com/import/git).

## Структура

- `src/pages/index.js` — главная страница стрима
- `src/styles/globals.module.css` — стили
- `src/pages/api/stream.js` — API-заглушка
- `public/logo.svg` — логотип
- `.gitignore` — игнорируемые файлы
- `vercel.json` — конфиг для Vercel
- `bot/bot.py` — Telegram-бот (пример)
- `bot/.env` — переменные окружения для бота

## Важно

- Для реального доната и интеграции с Telegram потребуются доработки backend и фронта.