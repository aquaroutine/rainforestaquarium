# Rainforest Aquarium

A standalone frontend demo inspired by the lush, aquatic-craft aesthetic of a Bengaluru aquascaping studio. Built with Vite, React, TypeScript, and Tailwind CSS — no backend, all mock data.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

If the site stops loading on port **5199**, restart the dev server from the repo root: `bash scripts/restart-rainforestaquarium-dev.sh` (serves **http://127.0.0.1:5199/**).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Sections

- **Hero** — full-viewport intro with CTAs and quick stats
- **Services** — eight expertise cards (planted tanks, ponds, vivariums, etc.)
- **Gallery** — masonry-style project showcase
- **Shop** — tabbed product categories with mock inventory
- **About** — studio story, stats, founder quote
- **Contact** — map embed, address, phone, email
- **Footer** — navigation and copyright

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- Google Fonts: Cormorant Garamond (display) + Outfit (body)

## Adding your own images

Place photos in **`public/images/`** — Vite serves them at `/images/...`. See [`public/images/README.md`](public/images/README.md) for the full folder layout and expected filenames.

| Folder | Files |
|--------|-------|
| `public/images/hero/` | `background.jpg` |
| `public/images/about/` | `background.jpg`, `founder.jpg` |
| `public/images/services/` | `planted-tanks.jpg`, `koi-ponds.jpg`, `rainforest.jpeg`, `terrariums.jpeg`, `maintenance.jpg`, `custom.jpg`, `store.png` |
| `public/images/gallery/` | `01.jpg` … `06.jpg` |

Paths are defined in `src/lib/siteImages.ts`. Until you drop in real files, the site falls back to Unsplash placeholders automatically.

## Notes

This is a **UI demo only**. Product prices, contact email, and commerce actions are static placeholders. Do not use in production without wiring real data and checkout flows.
