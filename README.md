# 🌍 AI Travel Planner Agent

A beautiful, responsive static landing page for an AI-powered Travel Planner Agent, featuring an integrated IBM watsonx Orchestrate chat widget.

**[Live Demo →](#)** *(update with your GitHub Pages URL)*

---

## 🚀 Quick Start

### 1. Clone & Configure

```bash
git clone https://github.com/krishujeniya/Travel_Planner_Agent.git
cd Travel_Planner_Agent
```

### 2. Set Up Credentials

```bash
cp config.example.js config.js
```

Edit `config.js` with your IBM watsonx Orchestrate credentials. This file is **git-ignored** and will never be pushed.

### 3. Deploy to GitHub Pages

Push all files (except `config.js`) to your repository. For the chat widget to work on GitHub Pages, you'll need to commit `config.js` **or** inline the config — see the Security section below.

---

## 📁 Project Structure

```
Travel_Planner_Agent/
├── index.html          # Main HTML page
├── style.css           # Design system & responsive styles
├── script.js           # Animations, navigation & chat loader
├── config.js           # 🔒 IBM credentials (git-ignored)
├── config.example.js   # Template for config.js
├── .gitignore          # Keeps config.js out of repo
├── assets/
│   ├── hero-bg.png     # Hero background image
│   ├── dest-santorini.png
│   ├── dest-bali.png
│   ├── dest-tokyo.png
│   └── dest-swiss.png
└── README.md
```

---

## 🔐 Security Note

Since GitHub Pages serves **static files only**, there's no server-side environment variable support. Two approaches:

| Approach | Pros | Cons |
|---|---|---|
| **Commit `config.js`** | Chat works on GitHub Pages | Credentials visible in repo & browser |
| **Keep `config.js` git-ignored** | Credentials not in git history | Chat won't load on GitHub Pages (only local) |

> **Recommendation**: For production, IBM watsonx Orchestrate credentials are designed to be client-side. The `orchestrationID` and `agentId` are meant to be public-facing. Commit `config.js` if you want the chat to work on GitHub Pages.

---

## ✨ Features

- **Modern Travel Aesthetic** — Ocean blues, crisp whites, glassmorphism
- **Fully Responsive** — Mobile-first, looks great on all devices
- **Scroll Animations** — Intersection Observer-powered reveal effects
- **Counter Animation** — Animated statistics in the hero section
- **IBM watsonx Chat** — AI agent integration via watsonx Orchestrate
- **SEO Optimized** — Meta tags, semantic HTML, proper heading hierarchy
- **Zero Dependencies** — Pure HTML, CSS, and Vanilla JavaScript

---

## 📄 License

MIT
