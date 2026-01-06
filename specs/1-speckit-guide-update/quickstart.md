# Quick Start: SpecKit Guide Presentation

**Date**: 2025-01-27
**Feature**: SpecKit Guide Presentation Update

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)
- Code editor (VS Code recommended)

## Setup Steps

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest speckit-guide --typescript --tailwind --app --no-src-dir
cd speckit-guide
```

**Options selected**:
- TypeScript: Yes
- Tailwind CSS: Yes
- App Router: Yes (default in Next.js 14+)
- src/ directory: No (keep app/ at root)

### 2. Install Dependencies

```bash
npm install
# No additional dependencies needed for MVP
```

### 3. Configure Tailwind for ChatGPT Theme

Update `tailwind.config.ts` to extend with ChatGPT colors:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#212121',
          surface: '#2D2D2D',
          elevated: '#3A3A3A',
        },
        text: {
          primary: '#ECECEC',
          secondary: '#A0A0A0',
          tertiary: '#6B6B6B',
        },
        border: {
          DEFAULT: '#404040',
        },
        primary: {
          DEFAULT: '#10A37F',
          hover: '#0D8A6D',
        },
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
      // ... more ChatGPT theme extensions
    },
  },
}
```

### 4. Create Project Structure

```bash
mkdir -p app components/{layout,sections,ui,engineers} lib types
```

### 5. Set Up Content Model

Create `types/content.ts` with TypeScript interfaces (see data-model.md for full structure).

Create `lib/content.ts` with content object (populate with actual content).

### 6. Create Global Styles

Update `app/globals.css`:
- Import Tailwind directives
- Add ChatGPT dark mode base styles
- Add CSS variables for reading mode
- Add focus styles for accessibility

### 7. Build Components

Follow this order:
1. `components/layout/Layout.tsx` - Root layout wrapper
2. `components/layout/TopNav.tsx` - Sticky navigation
3. `components/ui/SectionCard.tsx` - Reusable section wrapper
4. `components/sections/Hero.tsx` - Hero section
5. `components/ui/StepTimeline.tsx` - Timeline component
6. Continue with remaining sections and UI components

### 8. Create Main Page

Update `app/page.tsx`:
- Import all section components
- Pass content from `lib/content.ts` as props
- Wrap in Layout component
- Add ReadingModeProvider

### 9. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and verify:
- All sections render correctly
- Navigation works (smooth scroll, active highlighting)
- Responsive design (test mobile, tablet, desktop)
- Reading mode toggle works
- Accordions expand/collapse
- Keyboard navigation works

### 10. Build for Production

```bash
npm run build
npm run start
```

Verify production build works correctly.

## Testing Checklist

### Functionality
- [ ] All 8 sections display correctly
- [ ] Navigation scrolls to correct sections
- [ ] Active section highlights in nav
- [ ] Reading mode toggle works
- [ ] FAQ accordion expands/collapses
- [ ] Engineers accordion is collapsed by default
- [ ] All links work

### Responsive Design
- [ ] Mobile (320px+): Layout stacks correctly, nav is accessible
- [ ] Tablet (768px+): Layout adapts appropriately
- [ ] Desktop (1024px+): Full layout with side-by-side elements

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible (2px teal outline)
- [ ] Screen reader can navigate content
- [ ] Contrast ratios meet WCAG AA
- [ ] Semantic HTML structure (h1, h2, h3, nav, main, section)

### Performance
- [ ] Page loads in < 2 seconds on 3G
- [ ] Smooth scrolling at 60fps
- [ ] No layout shift during load
- [ ] Lighthouse performance score > 90

### Content
- [ ] All content from content model displays
- [ ] No placeholder text remains
- [ ] All sections have proper headings
- [ ] Content is in plain English (no jargon except engineers section)

## Common Issues & Solutions

### Issue: Tailwind styles not applying
**Solution**: Ensure `tailwind.config.ts` is properly configured and `globals.css` imports Tailwind directives

### Issue: TypeScript errors in content model
**Solution**: Check that all interfaces match the content structure in `lib/content.ts`

### Issue: Navigation not highlighting active section
**Solution**: Verify Intersection Observer is set up correctly and sections have proper IDs

### Issue: Reading mode not persisting
**Solution**: Add localStorage persistence (optional enhancement)

## Next Steps After Quick Start

1. Populate content model with actual SpecKit content
2. Add any missing sections or components
3. Polish styling to match ChatGPT aesthetic exactly
4. Test with real users (non-technical stakeholders)
5. Gather feedback and iterate
6. Deploy to production

## Deployment Options

- **Vercel**: Recommended for Next.js (automatic deployments)
- **Netlify**: Also supports Next.js well
- **Self-hosted**: Any Node.js hosting (requires `npm run build` and `npm run start`)

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS documentation: https://tailwindcss.com/docs
- Review design system: `DESIGN_SYSTEM.md`






