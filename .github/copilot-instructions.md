# GitHub Copilot Instructions for E-Portfolio

## Project Overview

This is a personal portfolio website built with React 19, Vite, and Framer Motion. The focus is on smooth animations, modern design aesthetics, and showcasing frontend development skills with personality.

## Architecture & Structure

- **Build Tool**: Vite (not Create React App) - use `npm run dev` for development
- **Component Pattern**: Functional components with hooks, exported as named exports (e.g., `export const Hero = () => {}`)
- **Animation Library**: Framer Motion for all animations - avoid CSS keyframes
- **Styling**: Plain CSS in App.css with CSS variables, no Tailwind or CSS modules
- **File Organization**: Components in `src/components/`, all component-specific logic stays within component files

## Code Style Requirements

### Component Structure

```jsx
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const ComponentName = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.section>
  );
};
```

### Key Patterns

- **Arrow Functions Only**: All components and utilities use arrow function syntax
- **Named Exports**: Components use `export const ComponentName` (not default exports except App.jsx)
- **Framer Motion**: Use `motion` wrapper for all animated elements with `whileInView` for scroll-triggered animations
- **Animation Variants**: Define reusable animation objects at the component level (fadeInUp, staggerContainer)
- **eslint Comments**: Add `//eslint-disable-next-line no-unused-vars` for motion import if unused in variable declarations

### CSS Architecture

- **CSS Variables**: All colors and theme values defined in `:root` in App.css
- **Color Palette**: Purple-pink gradient theme (`--primary-color: #d16cff`, `--secondary-color: #ff5fa2`)
- **Dark Theme**: Default dark background (`--background: #0b0614`)
- **Viewport-based Animations**: Use `viewport={{ once: true }}` to prevent re-triggering on scroll
- **Hover Effects**: Combine CSS transitions with Framer Motion `whileHover` for smooth interactivity

## Critical Workflows

### Development

```bash
npm run dev       # Start dev server (Vite HMR on port 5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

### Environment Variables

EmailJS integration requires environment variables in `.env.local`:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

Access with `import.meta.env.VITE_*` (Vite convention, not `process.env`)

### Contact Form Pattern

The Contact component demonstrates the project's form handling approach:
- Use `useState` for form data and submission status
- EmailJS initialized in App.jsx with `emailjs.init()` on mount
- Handle loading/success/error states explicitly in UI
- Clear form after successful submission

## Component-Specific Notes

### Hero.jsx
- Uses `react-syntax-highlighter` with `vscDarkPlus` theme for code display
- TypeScript code snippet is hardcoded string (not actual TypeScript)
- Floating card uses infinite animation: `transition={{ duration: 4, repeat: Infinity }}`

### Projects.jsx
- Import images directly from assets: `import ImageName from "../assets/filename.png"`
- Use `backgroundImage` style for project thumbnails
- React Icons for GitHub/external links (`react-icons/fa`)

### Skills.jsx
- Uses React Icons extensively for technology logos (`react-icons/fa`, `react-icons/si`)
- Grid layout for skill cards with icon + label pattern

### App.jsx
- Global fade-in on load with `.app.loaded` class toggle
- EmailJS initialized here once on mount
- Footer included at app level, not separate component

## Accessibility & UX

- Smooth scroll enabled via CSS: `html { scroll-behavior: smooth; }`
- Custom scrollbar styling in index.css
- Icon-only links should include `aria-label` or visible text with icon
- Semantic HTML: use `<section>`, `<nav>`, `<footer>` appropriately

## Common Gotchas

- **Motion Import**: ESLint may flag unused `motion` import - suppress with comment
- **Vite Env Vars**: Must prefix with `VITE_` and access via `import.meta.env`
- **Animation Performance**: Use `viewport={{ once: true }}` to prevent repeated animations
- **Named Exports**: Don't use default exports for components (except App.jsx)
- **ESLint Config**: Uses flat config format (`eslint.config.js`), not `.eslintrc`

## Testing & Quality

- No test files present - this is a portfolio showcase project
- ESLint rule for unused vars: allows uppercase variables (React component pattern)
- Focus on visual polish and animation smoothness over test coverage
