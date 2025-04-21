![github-submission-banner](https://github.com/user-attachments/assets/a1493b84-e4e2-456e-a791-ce35ee2bcf2f)


# 🚀 FlowPilot

> AI-Powered Focus Analytics System – Real-time screen/audio-based productivity insights with rewards

---

## 📌 Problem Statement

**Problem Statement 5 (Updated) – Power Productivity with Terminator (replacing Screenpipe)**

Track screen/audio/app events to monitor & enhance productivity using:
- Local-first logging via **Terminator**
- Real-time event processing via **Fluvio**
- Summarization and scoring via **Groq**
- Secure storage with **Supabase**
- Optional rewards using **Base**, **Stellar**
- Dashboard UI using **React + Vite + Tailwind**

---

## 🎯 Objective

FlowPilot helps students, remote workers, and developers maintain digital focus by analyzing screen and app behavior locally. It scores productivity and optionally rewards users with tokens/NFTs for hitting daily goals. No cloud upload or invasive tracking — everything runs locally with modular privacy-first design.

---

## 🧠 Team & Approach

### Team Name:"Solo"

### Team Members:
- Satkar Devidas Garje

### Our Approach:
- Chose this problem for its real-world use and modular scope
- Replaced Screenpipe with **Terminator** due to SDK limitations
- Built fully local-first pipeline from log capture to AI scoring
- Modularized folders for frontend/backend/AI/scripts
- Integrated Web3 rewards as optional gamification layer

---

## 🛠️ Tech Stack

### Core Technologies Used:
- Frontend: React, Vite, TailwindCSS, Recharts, shadcn/ui
- Backend: Node.js, Fluvio, Supabase, FastAPI (for AI proxy)
- Database: Supabase (PostgreSQL)
- APIs: Groq (AI summarization), OpenAI Whisper (speech-to-text)
- Hosting: Local-first; optionally Dockerized for deployment

### Sponsor Technologies Used:
- ✅ **Groq:** For summarization, AI responses
- ✅ **Fluvio:** Real-time stream of focus events
- ✅ **Base:** MetaMask login via Ethereum testnet
- ✅ **Stellar:** Issue rewards on productivity scores
- ❌ **Monad:** Not used
- ❌ **Screenpipe:** Replaced with Terminator

---

## ✨ Key Features

- ✅ Event-based logging of screen/audio/activity using Terminator
- ✅ AI-powered OCR + summarization of on-screen content
- ✅ Real-time productivity score streaming using Fluvio
- ✅ Dashboard with charts, summaries, and reward insights
- ✅ Optional Stellar-based daily token rewards
- ✅ Scripts for 24h cleanup, log compression, and IPFS backup

---

## 📽️ Demo & Deliverables
 
- **Pitch Deck / PPT Link:** [Coming Soon]

---

## ✅ Tasks & Bonus Checklist

- [x] Followed official channels and filled task form
- [ ] Bonus Task 1 - Shared badges ✅
- [ ] Bonus Task 2 - Signed up for Sprint.dev ✅

---

## 🧪 How to Run the Project

### Requirements:
- Node.js (v18+), Python 3.9+, Docker, Rust
- Supabase Project URL + Service Key
- MetaMask wallet (Base testnet), Stellar testnet key

### Local Setup:
```bash
# Clone the repo
https://github.com/focusforge/flowpilot.git
cd flowpilot

# Frontend
cd frontend
npm install && npm run dev

# Backend
cd ../backend
npm install
node fluvio/consumer.js  # To listen for focus events

# AI module
cd ../ai
pip install -r requirements.txt
python summarize_audio.py --input sample.wav

# Fluvio Setup (in WSL2 or Linux shell)
fluvio cluster start
fluvio topic create focus-events
```

---

## 🧬 Future Scope

- 📈 Add time tracking, distraction patterns, and smart nudges
- 🌐 Sync across devices with encrypted backup
- 🧠 Train custom ML model for productivity prediction
- 🎯 Public leaderboard with anonymous stats (opt-in)

---

## 📎 Resources / Credits

- Terminator SDK (Open Source)
- Groq API
- OpenAI Whisper (for transcription)
- Supabase.io for backend and auth
- Stellar + Base testnets for token testing
- Fluvio for real-time event pipeline

---

## 🏁 Final Words

FlowPilot taught us how to combine real-time streaming, AI, and privacy-first principles into a single cohesive system. We learned how to pivot quickly (from Screenpipe to Terminator), design for modularity, and integrate both core and sponsor technologies in a clean, low-resource architecture. 🚀

