# 📊 Positional Trading Log App

A full-stack application for positional traders to manually log trades, track their progress, and receive actionable Telegram notifications — without relying on broker APIs or live trading platforms.

---

## 🔧 Tech Stack

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| Frontend      | React (Vite) + Tailwind CSS       |
| Backend       | NestJS (Node.js)                  |
| Database      | Prisma ORM + SQLite/PostgreSQL    |
| Scheduling    | `@nestjs/schedule` or `node-cron` |
| Notifications | Telegram Bot API                  |
| Price Data    | Yahoo Finance / Twelve Data API   |

---

## ✅ Feature Checklist

- [ ] User can log a new trade with symbol, entry price, target, stop loss, and notes
- [ ] User can view all logged trades with key info (entry, target, stop loss, current price)
- [ ] Trades are grouped by open and closed status in the UI
- [ ] System periodically fetches and updates the latest price for each open trade
- [ ] UI displays % distance to target and stop loss for each trade
- [ ] User can manually close a trade with an exit price and date
- [ ] Telegram bot sends an end-of-day summary of all open trades
- [ ] Telegram bot sends alerts when a trade is near its target or stop loss (within 5%)
