# 🃏 Joker's Giveaway Wheel

Custom Twitch stream giveaway wheel for **jokers_stream_** — built with vanilla HTML/JS and deployed on Render.

---

## Features

- **Live Google Sheets sync** via OAuth 2.0 (Sheets API v4) — no more CSV flickering
- **Auto-elimination mode** — set a spin count and the wheel eliminates down to one winner
- **Winner confirmation** — countdown timer prompts "Yo, [username], you here?" before confirming
- **V-Bucks integration** — auto-logs winner to Google Apps Script on YES confirmation
- **Audio** — spin sound, horn on landing, BATZ win/no clips
- **Confetti** on winner confirmation
- OAuth auto-refresh to keep token alive during long streams

---

## Project Structure

```
├── index.html      # Main wheel app (self-contained)
├── server.js       # Express static server for Render
├── package.json
├── .gitignore
└── README.md
```

---

## Deployment (Render)

1. Push to GitHub
2. In Render dashboard → **New Web Service** → connect your repo
3. Set **Build Command:** `npm install`
4. Set **Start Command:** `node server.js`
5. Render auto-deploys on every push to `main`

---

## Google Sheets Setup

1. On the wheel, expand the **Google Sheets** section
2. Click **Sign in with Google** and authorize
3. Paste your **Spreadsheet ID** (from the URL: `/d/SPREADSHEET_ID/edit`)
4. Set range (default: `Sheet1!A:A`)
5. Click **Connect**

The wheel auto-syncs participants until you start a giveaway, at which point sync pauses to lock the entries.

---

## V-Bucks Integration

When a winner confirms YES, the wheel fires a GET request to the Google Apps Script backend:

```
?username=[winner]&amount=[vbucks]&sender=G_Wheel_Bot
```

This logs the winner to the V-Bucks tracking sheet under **Column E: G_Wheel_Bot**.

V-Bucks amounts available: **400 / 500 / 800 / 1000** — select before spinning.

---

## Audio Files (Cloudflare R2)

| Trigger | File |
|---|---|
| Spin start | `Giveaway_Spin.wav` (loops) |
| Wheel lands | `Giveaway_Horn.wav` |
| YES confirmed | `Winner_Lets_Go_BATZ.wav` |
| NO / timeout | `Yeah_Nah_Next_BATZ.wav` |
