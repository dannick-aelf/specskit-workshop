# SpecsKit Workshop

A ChatGPT-inspired dark mode design system built with Tailwind CSS.

## Overview

This project implements a comprehensive design system based on ChatGPT's UI/UX style and theme, optimized for dark mode. It includes:

- **Complete color palette** with ChatGPT's signature teal accent (#10A37F)
- **Typography system** using Inter font family
- **Component library** (buttons, cards, forms, chat messages, code blocks)
- **Glassmorphism effects** for modern overlays
- **Smooth animations** with optimized timing
- **Accessibility-first** design (WCAG 2.1 AA compliant)

## Design System Documentation

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design system specifications, including:
- Brand identity and color palette
- Component specifications
- Spacing and typography scales
- Animation guidelines
- Accessibility standards

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see the design system showcase.

## Build

Build for production:
```bash
npm run build
```

## Preview

Preview the production build:
```bash
npm run preview
```

## Design System Features

### Colors
- **Primary**: #10A37F (ChatGPT Teal)
- **Background**: #212121 (Dark Gray)
- **Surface**: #2D2D2D (Charcoal)
- **Text**: #ECECEC (Light Gray)

### Components
- Buttons (Primary, Secondary, Text, Icon)
- Form inputs (Text, Textarea)
- Cards (Standard, Elevated, Glassmorphic)
- Chat message bubbles
- Code blocks
- Badges and tags

### Usage

#### Buttons
```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-text">Text Button</button>
<button class="btn-icon">...</button>
```

#### Forms
```html
<input type="text" class="input" placeholder="Enter text...">
<textarea class="textarea" placeholder="Enter longer text..."></textarea>
```

#### Cards
```html
<div class="card">Standard Card</div>
<div class="card-elevated">Elevated Card</div>
<div class="card-glass">Glassmorphic Card</div>
```

#### Chat Messages
```html
<div class="message-ai">AI message</div>
<div class="message-user">User message</div>
```

## Tailwind Configuration

The design system is fully integrated with Tailwind CSS through:
- Custom color palette in `tailwind.config.js`
- Component classes in `src/input.css`
- CSS custom properties for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

