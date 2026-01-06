# SpecKit Guide Presentation

A responsive single-page presentation explaining SpecKit to non-technical stakeholders, built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This project provides a comprehensive guide to SpecKit, helping non-technical team members (PMs, designers, ops, marketing, HR) understand:
- What SpecKit is and why it matters
- The 5-step workflow (constitution → specify → plan → tasks → implement)
- How to use SpecKit in their work
- Common misconceptions and FAQs

## Features

- **ChatGPT dark mode styling** - Charcoal background, subtle borders, soft cards, muted text
- **Content-driven architecture** - Easy-to-edit TypeScript content model
- **Responsive design** - Mobile-first, works on all screen sizes
- **Accessibility** - WCAG AA compliant with keyboard navigation and focus indicators
- **Reading mode toggle** - Increases font size and line height for better readability

## Project Structure

The SpecKit presentation is located in the `speckit-guide/` directory:

```
speckit-guide/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main presentation page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Section components
│   ├── ui/               # UI components
│   └── engineers/        # Technical content
├── lib/
│   └── content.ts        # Content model (easy to edit!)
└── types/
    └── content.ts        # TypeScript types
```

## Setup

Navigate to the SpecKit guide directory:

```bash
cd speckit-guide
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the SpecKit presentation.

## Build

Build for production:

```bash
cd speckit-guide
npm run build
```

## Preview

Preview the production build:

```bash
cd speckit-guide
npm run start
```

## Editing Content

All content is stored in `speckit-guide/lib/content.ts`. You can edit the content without touching any component code. The content model includes:

- Hero section
- Problem section (before/after)
- 5-step workflow
- Real-world example
- Team roles
- Common misconceptions
- Quick start checklist
- FAQ (25+ questions)
- Technical content for engineers

## Design System

The presentation uses ChatGPT dark mode styling:
- **Background**: #212121 (Charcoal)
- **Surface**: #2D2D2D (Cards)
- **Primary**: #10A37F (ChatGPT Teal)
- **Text**: #ECECEC (Primary), #A0A0A0 (Secondary)

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design system documentation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

