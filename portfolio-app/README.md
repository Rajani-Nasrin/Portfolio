# Rajani Nasrin — Portfolio

React + Tailwind CSS portfolio (Vite-powered).

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/` — deploy that folder to
Vercel, Netlify, GitHub Pages, or any static host.

## Edit content

All text content (name, projects, skills, experience, education, contact
info) lives in `src/Portfolio.jsx` as plain JS arrays near the top of the
file — edit those directly, no other files need to change.

## Notes

- Dark/light mode toggle is in the sidebar, defaults to dark.
- Tailwind dark mode is class-based (`darkMode: "class"` in
  `tailwind.config.js`), toggled by adding/removing a `dark` class.
- Icons from `lucide-react`.
