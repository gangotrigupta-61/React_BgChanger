# Background Changer

A small, polished React app that lets users change the page background color from a friendly palette. Built with Vite, React (useState), and Tailwind-style utility classes for quick styling. The app is lightweight, easy to extend, and ideal as a portfolio piece to demonstrate React fundamentals, UI design, and attention to developer experience.

**Live demo:** Run locally with `npm run dev` (instructions below).

**Highlights:**
- **Tech:** React, Vite, Tailwind utilities (tailwindcss listed in dependencies), ESLint.
- **UX:** Click or keyboard-focus buttons to instantly change the background color.
- **Code:** Simple, single-component structure (`src/App.jsx`) using `useState` for state management — easy to extend into a multi-component app.

**Screenshot**

![Background Changer preview](./screenshot.png)

---

**Table of Contents**
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How it Works](#how-it-works)
- [Extending & Improvements](#extending--improvements)
- [Notes for Recruiters](#notes-for-recruiters)

## About

Background Changer is an interactive demo app that showcases UI interactivity in React. It provides a set of color buttons; clicking a button updates the page background color in real time. The project is intentionally minimal so the code is easy to read during interviews or code reviews.

## Features

- Clickable color palette with a dozen colors.
- Instant visual feedback — background updates without page reload.
- Lightweight, zero backend — purely client-side.
- Easy to customize: add colors, keyboard shortcuts, or persist the last color to localStorage.

## Tech Stack

- React 19 (functional components + hooks)
- Vite (dev server + build)
- Tailwind-style utility classes (project lists `tailwindcss` in dependencies)
- ESLint with relevant plugins (project includes ESLint config)

## Getting Started

Prerequisites: Node.js (v16+ recommended) and npm.

Install and run locally:

```bash
cd BgChanger
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `index.html` — app entry HTML
- `src/main.jsx` — React entry (mounts the app)
- `src/App.jsx` — main component with the color palette and state
- `src/index.css` — global styles
- `package.json` — scripts and dependencies

See the implementation in `src/App.jsx` for the core logic.

## How it Works

The app uses React's `useState` hook to keep the current color in state. Each color button calls the setter to update the color, and that value is applied inline on the root `div` as `style={{ backgroundColor: color }}` for immediate effect. The UI uses utility classes for spacing, rounded buttons and a centered layout.

Snippet (conceptual):

```jsx
const [color, setColor] = useState('olive')

<button onClick={() => setColor('red')}>Red</button>
// root element: <div style={{ backgroundColor: color }}>
```

## Extending & Improvements

- Persist selected color in `localStorage` so the choice survives reloads.
- Extract a `ColorButton` component for reusability and automated tests.
- Add keyboard navigation and ARIA attributes for improved accessibility.
- Add unit tests (Jest + React Testing Library) and a simple CI workflow.
- Deploy to Vercel, Netlify, or GitHub Pages for a live demo link.

## Notes for Recruiters

- Code is intentionally small and readable — easy to review during interviews.
- Demonstrates: React hooks, component-driven UI, dependency-managed modern toolchain (Vite), and attention to developer tooling (ESLint).
- Ready to be extended into a larger app (persisted state, theming, animations).

---

If you'd like, I can:

- add a deploy workflow (GitHub Actions) to publish a live demo,
- extract components and add unit tests, or
- improve accessibility and responsive layout.

Tell me which one you'd like next.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
