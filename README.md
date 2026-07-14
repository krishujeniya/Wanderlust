
# 🌍 Wanderlust: AI Travel Planner Agent

A clean, responsive static landing page for an AI-powered Travel Planner, featuring a fully integrated IBM watsonx Orchestrate chat widget. 

**[View Live Demo](https://krishujeniya.github.io/Wanderlust/)**

---

## 📖 About the Project

Wanderlust is a modern front-end interface built to showcase AI agent integration. It combines a sleek, travel-focused design system with smooth scroll animations and a floating AI assistant. 

The project is built entirely with pure HTML, CSS, and Vanilla JavaScript, making it lightweight and lightning-fast. It also uses a custom GitHub Actions workflow to securely inject IBM Watson configurations during deployment, keeping the public repository clean of hardcoded environment data.

## ✨ Features

* **Modern Travel Aesthetic:** Ocean blues, crisp whites, and glassmorphism UI effects.
* **Fully Responsive:** Mobile-first design that scales perfectly to tablets and desktop monitors.
* **Scroll Animations:** Built with Intersection Observer for smooth, lightweight reveal effects.
* **Dynamic Counters:** Animated statistics in the hero section that count up on scroll.
* **AI Integration:** Floating chat widget powered by IBM watsonx Orchestrate.
* **Zero Dependencies:** No heavy frameworks or libraries to slow down the page.

---

## 🚀 How to Run Locally

If you want to run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/krishujeniya/Wanderlust.git](https://github.com/krishujeniya/Wanderlust.git)
   cd Wanderlust
   ```

2. **Add your credentials**
Open `index.html` and replace the placeholder text in the `<script>` block at the bottom of the file with your actual IBM watsonx Orchestrate IDs.
3. **Launch the site**
Open `index.html` in your browser, or use a tool like VS Code Live Server for a better development experience.

---

## 📁 Project Structure

```text
Wanderlust/
├── .github/
│   └── workflows/
│       └── static.yml    # Deployment pipeline & secret injection
├── assets/               # Images and icons
├── index.html            # Main HTML structure and chat loader
├── style.css             # Design system and responsive layouts
├── script.js             # Navigation logic and scroll animations
└── README.md

```

---

## 📄 License

This project is licensed under the MIT License.

