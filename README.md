# AJ PIX — Portfolio Website
### Arjun M · Full Stack Developer

A cinematic, space-themed portfolio built with **React + Vite + Three.js + GSAP + Framer Motion + Lenis**.

---

## ✨ Features

- 🚀 **Cinematic Loading Screen** — UFO animation + live progress percentage counter
- 🌌 **Three.js Star Field** — 3000 procedural stars + 4 ringed planets with parallax on scroll
- 🧑‍🚀 **Pixel Astronaut (Boy SVG)** — Fully hand-crafted SVG astronaut with floating orbit rings
- 🎯 **GSAP ScrollTrigger** — Every section reveals with staggered, parallax animations
- 🖱️ **Custom Cursor** — Glowing dot + smooth follower ring
- 📜 **Lenis Smooth Scroll** — Buttery 60fps smooth scrolling throughout
- 🖥️ **Project Browser Mockups** — Each project shown in a real browser chrome mockup
- 📸 **Scroll-to-Flip Images** — Frames play forward as you scroll through each project
- 🔗 **All Links Live** — Every GitHub and Live Demo link is functional
- ⚡ **5 Full Projects** — AJ Sentinel, AJGolfHeroes, Focus Flow, Talkify, AJ Thrift Store
- 📱 **Space Font Stack** — Orbitron + Space Mono + Rajdhani

---

## 📁 Folder Structure

```
ajpix-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css
    ├── hooks/
    │   ├── useLenis.js
    │   └── useScrollAnimation.js
    ├── components/
    │   ├── LoadingScreen.jsx    ← UFO + progress bar
    │   ├── CustomCursor.jsx     ← Glowing cursor
    │   ├── StarField.jsx        ← Three.js stars + planets
    │   ├── Navbar.jsx           ← Fixed nav with active state
    │   ├── ProjectCard.jsx      ← Browser mockup + scroll images
    │   └── Footer.jsx
    ├── sections/
    │   ├── HeroSection.jsx      ← Astronaut + GSAP parallax
    │   ├── AboutSection.jsx     ← JSON-style profile card
    │   ├── ProjectsSection.jsx  ← All 5 projects
    │   ├── SkillsSection.jsx    ← Tech arsenal grid
    │   └── ContactSection.jsx   ← Contact links
    └── assets/
        └── projects/
            ├── sentinel/    → sentinel1-6.png
            ├── golf/        → golf1-5.png
            ├── focusflow/   → focus1-5.png
            ├── talkify/     → talkify1-3.png
            └── commerce/    → commerce1-6.png
```

---

## 🚀 Setup (from scratch)

### 1. Create the project

```bash
npm create vite@latest ajpix-portfolio -- --template react
cd ajpix-portfolio
```

### 2. Install dependencies

```bash
npm install @studio-freight/lenis framer-motion gsap three
```

### 3. Copy source files

Replace `src/` and `public/` with the files provided, then place project photos:

```bash
mkdir -p src/assets/projects/{sentinel,golf,focusflow,talkify,commerce}
```

### 4. Rename & place photos (from your unzipped photos_.zip)

```bash
# Sentinel
cp "Sentinel photo 1.png"   src/assets/projects/sentinel/sentinel1.png
cp "Sentinel Photo 2.png"   src/assets/projects/sentinel/sentinel2.png
cp "Sentinel photo 3.png"   src/assets/projects/sentinel/sentinel3.png
cp "Sentinel photo 4.png"   src/assets/projects/sentinel/sentinel4.png
cp "Sentinel photo 5.png"   src/assets/projects/sentinel/sentinel5.png
cp "Sentinel photo 6.png"   src/assets/projects/sentinel/sentinel6.png

# Golf
cp "golf heroes photo1.png"    src/assets/projects/golf/golf1.png
cp "golf heroes photo 2.png"   src/assets/projects/golf/golf2.png
cp "Golf herores photo 3.png"  src/assets/projects/golf/golf3.png
cp "golf heroes photo 4.png"   src/assets/projects/golf/golf4.png
cp "Golf heroes photo 5.png"   src/assets/projects/golf/golf5.png

# FocusFlow
cp "Focus Flow Photo 1.png"  src/assets/projects/focusflow/focus1.png
cp "Focusflow Photo 2.png"   src/assets/projects/focusflow/focus2.png
cp "Focusflow photo 3.png"   src/assets/projects/focusflow/focus3.png
cp "Focusflow photo 4.png"   src/assets/projects/focusflow/focus4.png
cp "Focusflow photo 5.png"   src/assets/projects/focusflow/focus5.png

# Talkify
cp "talkify photo 1.png"  src/assets/projects/talkify/talkify1.png
cp "talkify photo 2.png"  src/assets/projects/talkify/talkify2.png
cp "talkify photo 3.png"  src/assets/projects/talkify/talkify3.png

# Commerce
cp "Commerce Photo 1.png"  src/assets/projects/commerce/commerce1.png
cp "Commerce photo 2.png"  src/assets/projects/commerce/commerce2.png
cp "Commerce Photo 3.png"  src/assets/projects/commerce/commerce3.png
cp "Commerce photo 4.png"  src/assets/projects/commerce/commerce4.png
cp "commerce photo 5.png"  src/assets/projects/commerce/commerce5.png
cp "Commerce phtot 6.png"  src/assets/projects/commerce/commerce6.png
```

### 5. Run dev server

```bash
npm run dev
```

Open → **http://localhost:5173** 🚀

### 6. Build for production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import on [vercel.com](https://vercel.com) — zero config needed.

---

## 🎨 Customisation

| What to change | File |
|---|---|
| Name, bio, stats | `src/sections/HeroSection.jsx` |
| Profile card data | `src/sections/AboutSection.jsx` |
| Projects + links | `src/sections/ProjectsSection.jsx` |
| Skills list | `src/sections/SkillsSection.jsx` |
| Contact info | `src/sections/ContactSection.jsx` |
| Colors / fonts | `src/styles/globals.css` (CSS variables) |
| LinkedIn / GitHub URLs | `src/components/Navbar.jsx` + `Footer.jsx` |

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `vite` | Build tool |
| `three` | 3D star field + planets |
| `gsap` | Scroll animations + parallax |
| `framer-motion` | UI transitions + micro-animations |
| `@studio-freight/lenis` | Smooth scroll |

---

*Built with ❤️ from Arjun 🚀*

<!-- cd "C:\Users\arjun\Downloads\Documents\Arjun Main Portfolio"
npm install
npm run dev -->