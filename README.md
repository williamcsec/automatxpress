# ⚡ AutomatXpress

<div align="center">

![AutomatXpress](https://img.shields.io/badge/AutomatXpress-AI%20CRM-6d28d9?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

**The future of CRM — an AI-powered business automation platform with stunning 3D Spline visuals.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Pages](#-pages)

</div>

---

## 📖 Overview

AutomatXpress is a premium SaaS marketing website for an AI CRM platform built for modern businesses. The site features immersive 3D Spline scenes, smooth Framer Motion animations, and a complete multi-page experience covering the product's features, pricing, case studies, and contact flow — all backed by Supabase for lead capture.

---

## ✨ Features

- 🌐 **Multi-Page Website** — Home, About, Pricing, Case Studies, Contact
- 🎨 **3D Spline Scenes** — Interactive 3D visualizations embedded throughout the site
- 🎬 **Framer Motion Animations** — Smooth page transitions and scroll-triggered reveals
- 📬 **Lead Capture** — Contact forms powered by Supabase
- 🧩 **shadcn/ui Components** — Polished, accessible UI components
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Next.js App Router** — Fast, server-rendered pages with RSC support
- 🔒 **Type-Safe** — Full TypeScript with strict mode

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript 5 | Type-safe development |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Page and scroll animations |
| Spline (@splinetool/react-spline) | 3D scene embedding |
| Supabase | Database + Auth + Storage |
| shadcn/ui + Radix UI | UI component library |
| React Hook Form + Zod | Form validation |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Installation

```bash
git clone https://github.com/williamcsec/automatxpress.git
cd automatxpress
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Running

```bash
# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page with 3D Spline CRM visualization |
| `/about` | Company story and team |
| `/pricing` | Subscription tier comparison |
| `/case-studies` | Customer success stories |
| `/contact` | Lead capture form with Supabase backend |

---

## 📁 Project Structure

```
automatxpress/
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout with fonts and metadata
│       ├── page.tsx          # Home page
│       ├── about/            # About page
│       ├── pricing/          # Pricing page
│       ├── case-studies/     # Case studies
│       └── contact/          # Contact + lead form
├── components/               # Reusable components
├── lib/                      # Supabase client, utilities
├── public/                   # Static assets
└── supabase/                 # Supabase types and config
```

---

## 📄 License

MIT © williamcsec
