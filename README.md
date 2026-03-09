# Clarioon – Communications Coaching Website

A modern, clean React + Vite + React Router website for Clarioon, a communications coaching and personal clarity brand.

## Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool & dev server
- **React Router v6** – Client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css   – Fixed top navigation
│   └── Footer.jsx / Footer.css   – Site footer
├── pages/
│   ├── Home.jsx / Home.css       – Landing page
│   ├── About.jsx / About.css     – About & team
│   ├── Services.jsx / Services.css – Programs & services
│   └── Contact.jsx / Contact.css – Contact form & FAQ
├── App.jsx                        – Routes
├── App.css                        – App shell styles
├── index.css                      – Global styles & design tokens
└── main.jsx                       – Entry point
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, pillars, programs, testimonials, stats, CTA |
| `/about` | About | Founder story, CLARA Method, team, press |
| `/services` | Services | 6 detailed service offerings |
| `/contact` | Contact | Booking form, contact info, FAQ |

## Brand Colors

| Name | Hex |
|------|-----|
| Sky Blue | `#2196f3` |
| Deep Blue | `#0d47a1` |
| Light Blue | `#e3f2fd` |
| Soft Yellow | `#fff9c4` |
| White | `#ffffff` |

## Design Decisions

- **No external images** – All visual elements use CSS, SVG, and emoji icons
- **CSS custom properties** – All brand colors defined as variables in `index.css`
- **Mobile-first responsive** – Breakpoints at 600px and 900px
- **Sticky navbar** – Scrolls with frosted glass effect
- **Accessible** – Semantic HTML, ARIA labels, keyboard-navigable
- **Performance** – Zero runtime dependencies beyond React and React Router
