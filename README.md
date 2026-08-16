# 🚀 FlyRank AI Dashboard

A premium, responsive AI analytics dashboard built with **Next.js 16**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

This project was developed as part of the **FlyRank Front-end AI Engineering Internship** and demonstrates modern frontend engineering practices, App Router architecture, reusable components, responsive UI design, animation, accessibility considerations, and production-ready project structure.

---

## ✨ Features

### 🎨 Premium UI

- Modern dark-themed interface
- Glassmorphism cards
- Gradient backgrounds and typography
- Responsive layouts
- Smooth hover interactions
- Premium visual hierarchy
- Consistent spacing and component styling

### ⚡ Next.js App Router

The application uses the modern Next.js App Router architecture with:

- Server Components by default
- Client Components only where interactivity is required
- File-system based routing
- Shared application layout
- Static and dynamic rendering support

### 🎬 Animations

The dashboard uses **Framer Motion** for interactive animations, including:

- Page entrance animations
- Staggered dashboard cards
- Hover effects
- Animated statistics counters
- Animated progress bars
- Scroll-triggered sections
- Smooth UI transitions

### 📊 AI Analytics Dashboard

The dashboard displays:

- Active Projects
- AI Models
- Team Members
- Success Rate
- Recent Activity
- Project Status
- Animated progress indicators

Statistics animate from their initial state to their final values instead of appearing instantly.

---

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/about` | Project and application information |
| `/dashboard` | AI analytics dashboard |
| `/contact` | Contact page |
| `/health` | Application health/status page |
| `/api/health` | Health-check API endpoint |

---

## 🛠️ Technology Stack

### Frontend

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### Development

- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **Cursor**

### Architecture

- Next.js App Router
- Reusable React components
- Server Components by default
- Client Components for interactive UI
- Responsive-first design
- Component-based styling

---

## 📁 Project Structure

```text
flyrank-nextjs-capstone/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   │
│   │   ├── health/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       └── AnimatedCounter.tsx
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── LICENSE
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── package-lock.json