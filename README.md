# Background Changer

Simple React app that lets users change the page background color from a predefined palette.

Key points:
- Built with React + Vite.
- Uses `useState` for color state and simple utility classes for layout.
- No backend — client-side only and easy to extend.

Quick start:

```bash
cd BgChanger
npm install
npm run dev
```

Files to check:
- `src/App.jsx` — main component and color buttons
- `src/main.jsx` — app entry
- `package.json` — scripts and dependencies

Suggestions: persist the selected color to `localStorage`, extract a `ColorButton` component, or add keyboard accessibility.

If you want, I can add tests or a CI deploy workflow next.

---

## ✨ About

Background Changer is a small interactive demo that demonstrates basic React concepts and UI interactions. It provides a horizontal palette of color buttons; clicking a button updates the entire page background immediately.

## 🚀 Features

- 🎨 Clickable color palette with instant visual feedback
- ⚡ Lightweight single-page app, zero backend
- 🛠️ Easy to read and extend — suitable for experimentation and learning

## 🧰 Tech & tools

- ⚛️ React (functional components + hooks)
- Vite for fast dev/build
- 🌈 Tailwind CSS v4 is integrated through `@tailwindcss/vite` and `@import "tailwindcss"`
- 🧹 ESLint configured in the repo for consistent code quality

## 🎯 Tailwind CSS Integration

This project already includes Tailwind CSS v4 support. The integration is handled in two places:

- `vite.config.js` adds the `@tailwindcss/vite` plugin
- `src/index.css` imports Tailwind with `@import "tailwindcss";`

That means you can use Tailwind utility classes directly in your JSX without adding extra config files.

### 📦 Installation

If you are setting this up in a fresh Vite + React project, install Tailwind with:

```bash
npm install tailwindcss @tailwindcss/vite
```

Then enable it in `vite.config.js` and import Tailwind in your main CSS file:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
})
```

```css
@import "tailwindcss";
```

## ▶️ Usage

Run locally:

```bash
cd BgChanger
npm install
npm run dev
```

Open http://localhost:5173 (or the port output by Vite) and click color buttons to change the background.

## 📍 Where to look in the code

- `src/App.jsx` — main UI and state management
- `src/main.jsx` — React mount point
- `package.json` — scripts and dependency list

## 🧠 Implementation notes

The app stores the active color in a `useState` hook and applies it inline as an element style (e.g., `style={{ backgroundColor: color }}`). The UI uses Tailwind utility classes for spacing, layout, and rounded buttons so the visual structure is compact and responsive.

## 💡 Next ideas 

- Persist the selected color to `localStorage` so it survives reloads
- Add keyboard navigation and ARIA attributes for accessibility
- Extract a `ColorButton` component and add unit tests (Jest + React Testing Library)
- Add a small CI workflow to build and deploy the app to Netlify/Vercel

If you want me to implement any of the ideas above, tell me which one and I will only edit `README.md` or create code changes if you approve.
