# Implementation Plan: SpecKit Guide Presentation Update

**Branch**: `1-speckit-guide-update` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/1-speckit-guide-update/spec.md`

## Summary

Build a responsive single-page presentation explaining SpecKit to non-technical stakeholders using Next.js App Router, TypeScript, and Tailwind CSS. The site will feature a content-driven architecture with a TypeScript content model, ChatGPT dark mode styling, and reusable components for sections, timelines, callouts, and interactive elements. Optional reading mode toggle for improved accessibility.

## Technical Context

**Language/Version**: TypeScript 5.x, Next.js 14+ (App Router)
**Primary Dependencies**: Next.js, React, Tailwind CSS, TypeScript
**Storage**: N/A (static content, no database)
**Testing**: Jest + React Testing Library (optional, not required for MVP)
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
**Project Type**: web (single-page application)
**Performance Goals**: 
- Initial page load < 2 seconds on 3G connection (per SC-004)
- Smooth scrolling at 60fps
- Lighthouse performance score > 90
**Constraints**: 
- Must be accessible (WCAG AA minimum)
- Must work without JavaScript for content display (progressive enhancement)
- Must be responsive (320px+ screen widths)
- Must maintain ChatGPT dark mode aesthetic
**Scale/Scope**: 
- Single page with 8 content sections
- ~10-15 reusable components
- Content model with ~50-100 content items
- No backend or API required

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Note**: Constitution file not found in workspace. Proceeding with standard web development practices:
- Use semantic HTML
- Maintain accessibility standards
- Keep code maintainable and well-structured
- Follow React/Next.js best practices

## Project Structure

### Documentation (this feature)

```text
specs/1-speckit-guide-update/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
└── contracts/           # Phase 1 output (/speckit.plan command) - N/A for static site
```

### Source Code (Next.js App Router structure)

```text
app/
├── layout.tsx                    # Root layout with metadata, fonts
├── page.tsx                      # Main presentation page
├── globals.css                   # Global styles + ChatGPT dark mode theme
└── reading-mode-provider.tsx     # Context provider for reading mode toggle

components/
├── layout/
│   ├── Layout.tsx               # Main layout wrapper
│   └── TopNav.tsx               # Sticky navigation component
├── sections/
│   ├── SectionCard.tsx          # Reusable section container
│   ├── Hero.tsx                 # Hero section
│   ├── ProblemSection.tsx      # Before/after problem section
│   ├── WorkflowSection.tsx      # 5-step workflow with timeline
│   ├── ExampleSection.tsx      # Mini example through 5 steps
│   ├── RolesSection.tsx         # Who does what
│   ├── MisconceptionsSection.tsx # Myth vs reality
│   ├── ChecklistSection.tsx     # Quick start checklist
│   └── FAQSection.tsx           # FAQ accordion
├── ui/
│   ├── StepTimeline.tsx         # Visual 5-step timeline component
│   ├── Callout.tsx              # Callout card component
│   ├── MythReality.tsx          # Myth vs reality card component
│   ├── Checklist.tsx            # Checklist card component
│   ├── FAQAccordion.tsx         # FAQ accordion component
│   └── ReadingModeToggle.tsx    # Reading mode toggle button
└── engineers/
    └── EngineersAccordion.tsx   # Collapsed technical content

lib/
├── content.ts                    # Content model (TypeScript object)
└── constants.ts                  # Constants (colors, spacing, etc.)

types/
└── content.ts                    # TypeScript types for content model

public/
└── (no assets needed for MVP, but structure ready for future)
```

**Structure Decision**: Next.js App Router with component-based architecture. Content model in `lib/content.ts` drives all sections, making content easy to edit without touching component code. Components are organized by purpose (layout, sections, ui) for maintainability.

## Phase 0: Research & Decisions

### Technology Choices

**Decision**: Use Next.js App Router
**Rationale**: 
- Server-side rendering for better initial load performance
- Built-in routing and layout system
- Excellent TypeScript support
- Optimized production builds
- Meets performance goal of < 2s load time

**Alternatives considered**:
- Vite + React: Faster dev experience but requires more setup for SSR/SSG
- Remix: Similar to Next.js but smaller ecosystem
- Static HTML: Would work but loses React component benefits and maintainability

**Decision**: TypeScript for type safety
**Rationale**: 
- Catches errors at compile time
- Better IDE support
- Self-documenting code through types
- Required per user requirements

**Decision**: Tailwind CSS for styling
**Rationale**: 
- Utility-first approach matches ChatGPT aesthetic
- Easy to maintain consistent design system
- No additional CSS files to manage
- Can extend with custom utilities for dark mode theme

**Decision**: Content model as TypeScript object
**Rationale**: 
- Easy to edit without touching component code
- Type-safe content structure
- Can be moved to CMS later if needed
- Single source of truth for all content

**Decision**: Optional reading mode toggle
**Rationale**: 
- Improves accessibility for users who need larger text
- Simple feature that adds significant value
- Can be implemented with CSS variables and context

### Design System Integration

**Decision**: Extend existing ChatGPT dark mode design system
**Rationale**: 
- Design system already defined in `DESIGN_SYSTEM.md`
- Colors, spacing, typography already established
- Need to map to Tailwind config
- Maintains visual consistency

**Implementation approach**:
- Extend `tailwind.config.js` with ChatGPT color palette
- Create custom Tailwind utilities for ChatGPT components
- Use CSS variables for theming (supports reading mode)

## Phase 1: Design & Architecture

### Content Model Structure

The content model (`lib/content.ts`) will be a TypeScript object with the following structure:

```typescript
interface ContentModel {
  hero: HeroContent;
  problem: ProblemContent;
  workflow: WorkflowContent;
  example: ExampleContent;
  roles: RolesContent;
  misconceptions: MisconceptionsContent;
  checklist: ChecklistContent;
  faq: FAQContent;
  engineers: EngineersContent;
}
```

Each section has its own interface defining the content structure. This allows:
- Type-safe content editing
- Easy content updates without code changes
- Potential future migration to CMS
- Clear content structure documentation

### Component Architecture

**Layout Component**: Wraps entire page, provides reading mode context, handles global styles

**TopNav Component**: 
- Sticky navigation with smooth scroll to sections
- Highlights active section based on scroll position
- Responsive (hamburger menu on mobile)
- Uses Intersection Observer API for active state

**Section Components**: 
- Each section is a separate component
- Receives content from content model via props
- Uses SectionCard wrapper for consistent styling
- Semantic HTML structure (h1, h2, h3)

**UI Components**:
- **StepTimeline**: Visual representation of 5-step workflow with connecting lines/arrows
- **Callout**: Distinct card style for important information
- **MythReality**: Side-by-side or stacked comparison format
- **Checklist**: Interactive or visual checklist items
- **FAQAccordion**: Expandable/collapsible FAQ items
- **ReadingModeToggle**: Button to toggle reading mode (increases font size/line height)

### Styling Approach

**ChatGPT Dark Mode Theme**:
- Background: `#212121` (charcoal)
- Surface: `#2D2D2D` (cards)
- Elevated Surface: `#3A3A3A` (elevated cards)
- Text Primary: `#ECECEC` (light gray)
- Text Secondary: `#A0A0A0` (muted)
- Border: `#404040` (subtle borders)
- Primary Accent: `#10A37F` (ChatGPT teal)

**Tailwind Configuration**:
- Extend theme with ChatGPT colors
- Custom utilities for card styles, borders, shadows
- Typography scale matching ChatGPT design system
- Responsive breakpoints (mobile-first)

**Reading Mode**:
- CSS variables for font size and line height
- Context provider to toggle reading mode state
- Applies to all text content
- Smooth transition when toggling

### Performance Optimizations

- Next.js automatic code splitting
- Image optimization (if images added later)
- Font optimization (Inter font from Google Fonts)
- Minimal JavaScript bundle (no heavy libraries)
- Static generation for fast initial load

### Accessibility Features

- Semantic HTML throughout
- ARIA labels for interactive components
- Keyboard navigation support
- Focus indicators (2px teal outline)
- WCAG AA contrast ratios
- Screen reader friendly structure
- Reduced motion support (respects `prefers-reduced-motion`)

## Phase 2: Implementation Phases

### Phase 2.1: Setup & Foundation
- Initialize Next.js project with TypeScript
- Configure Tailwind with ChatGPT theme
- Set up project structure
- Create content model types
- Implement reading mode context

### Phase 2.2: Core Components
- Build Layout and TopNav components
- Create SectionCard wrapper
- Implement basic section components (Hero, Problem)
- Set up smooth scrolling and navigation

### Phase 2.3: UI Components
- Build StepTimeline component
- Create Callout, MythReality, Checklist components
- Implement FAQAccordion
- Add ReadingModeToggle

### Phase 2.4: Content Integration
- Populate content model with all section content
- Connect content to components
- Implement remaining sections (Workflow, Example, Roles, etc.)
- Add EngineersAccordion

### Phase 2.5: Polish & Optimization
- Responsive design testing (mobile, tablet, desktop)
- Accessibility audit and fixes
- Performance optimization
- Cross-browser testing

## Complexity Tracking

No constitution violations. This is a standard web application following React/Next.js best practices.






