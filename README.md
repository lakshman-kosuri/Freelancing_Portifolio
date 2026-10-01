# Kosuri Lakshmana Rao — Developer Portfolio

A modern 3D animated developer portfolio built with **React + Vite**, featuring glassmorphism design, particle animations, 3D CSS transforms, and smooth Framer Motion transitions.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| 3D Effects | CSS 3D Transforms + Canvas API |
| Fonts | Space Grotesk + JetBrains Mono |

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root: loader + navbar + footer
    ├── index.css             # Global styles + CSS variables + keyframes
    ├── data/
    │   └── resume.js         # ✅ Single source of truth from resume
    ├── components/
    │   ├── Background3D.jsx  # Canvas particle system + mouse glow
    │   ├── Navbar.jsx        # Fixed nav with scroll highlight + mobile menu
    │   ├── LoadingScreen.jsx # Animated loading screen with progress bar
    │   ├── Hero3D.jsx        # Typing effect + orbit rings + stats
    │   ├── About3D.jsx       # Rotating CSS cube + summary card
    │   ├── SkillsOrbit.jsx   # Skill groups with color-coded tags
    │   ├── Projects3D.jsx    # 3D tilt cards with mouse tracking
    │   ├── ServicesSection.jsx     # Hover glow service cards
    │   └── Contact3D.jsx     # Contact form + info cards
    └── pages/
        └── Home.jsx          # Assembles all sections
```

---

## ⚙️ Setup & Installation

### 1. Clone / Download

```bash
# If using git
git clone <your-repo-url>
cd portfolio

# Or just navigate into the folder
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `react` + `react-dom`
- `framer-motion`
- `vite` + `@vitejs/plugin-react`
- `tailwindcss` + `autoprefixer` + `postcss`

> **Note:** `@react-three/fiber`, `@react-three/drei`, and `three` are listed in package.json for future 3D scene upgrades. The current build uses CSS 3D transforms + Canvas API for maximum performance and zero bundle bloat.

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy to Vercel, Netlify, or GitHub Pages.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customisation

### Update Personal Info
Edit **`src/data/resume.js`** — this is the single source of truth for all content:

```js
export const personal = {
  name: 'Kosuri Lakshmana Rao',
  email: 'kosurilakshman88@gmail.com',
  phone: '+91 80081 90520',
  github: 'https://github.com/kosurilakshman',
  linkedin: '...',
  // ...
}
```

All sections auto-update from this file.

### Change Theme Colors
Edit CSS variables in **`src/index.css`**:

```css
:root {
  --cyan:   #00f5ff;   /* Primary accent */
  --purple: #a855f7;   /* Secondary accent */
  --green:  #10ffa0;   /* Success / Mobile */
  --orange: #ff6b35;   /* Warning / Database */
  --bg:     #020d18;   /* Main background */
}
```

### Add New Projects
In `src/data/resume.js`, add to the `projects` array:

```js
{
  icon: '🚀',
  title: 'My New Project',
  description: 'Project description here.',
  tech: ['React', 'Node.js'],
  techColors: ['cyan', 'purple'],
  github: 'https://github.com/...',
  live: 'https://myproject.com',
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the /dist folder into Netlify dashboard
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://<username>.github.io/<repo>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

---

## ✨ Features

- 🌌 **Particle canvas** — 130 floating particles with mouse-reactive glow and connection lines
- 🌀 **Orbit rings** — Three animated CSS rings in the hero avatar
- 🎲 **Rotating 3D cube** — CSS preserve-3d cube showcasing core tech in About section
- ⌨️ **Typing effect** — Cycles through role titles with blink cursor
- 📜 **Scroll animations** — Framer Motion fade-up triggered by Intersection Observer
- 🃏 **3D tilt cards** — Mouse-tracked perspective tilt on project cards
- 📱 **Fully responsive** — Mobile hamburger menu, fluid grid layouts
- 🔢 **Loading screen** — Animated progress bar with staged loading messages
- 🎨 **Glassmorphism** — Consistent glass card aesthetic throughout

---

## 📄 License

MIT — free to use and customise for your own portfolio.
