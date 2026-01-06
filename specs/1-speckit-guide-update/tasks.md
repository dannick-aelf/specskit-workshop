# Tasks: SpecKit Guide Presentation Update

**Input**: Design documents from `/specs/1-speckit-guide-update/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, research.md, quickstart.md

**Tests**: Tests are OPTIONAL - not included as this is a static presentation site. Focus on manual testing and QA checklist.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `app/` at repository root
- **Components**: `components/` at repository root
- **Library**: `lib/` at repository root
- **Types**: `types/` at repository root

## Dependencies

**User Story Completion Order**:
1. US1 (P1) - Understand SpecKit Basics → Can be tested independently
2. US2 (P1) - Learn 5-Step Workflow → Can be tested independently
3. US3 (P2) - See Real-World Application → Depends on US2 (uses workflow steps)
4. US4 (P2) - Understand Team Roles → Can be tested independently
5. US5 (P3) - Clarify Misconceptions → Can be tested independently
6. US6 (P2) - Get Started Quickly → Can be tested independently
7. US7 (P3) - Find Answers to FAQs → Can be tested independently
8. US8 (P3) - Access Technical Details → Can be tested independently

**Parallel Opportunities**:
- US4, US5, US6, US7, US8 can be implemented in parallel after US1 and US2 are complete
- UI components (StepTimeline, Callout, MythReality, Checklist, FAQAccordion) can be built in parallel
- Section components can be built in parallel after foundational components are done

## Implementation Strategy

**MVP Scope**: US1 + US2 (Hero, Problem, Workflow sections) - This delivers core understanding of SpecKit and the workflow.

**Incremental Delivery**:
1. MVP: US1 + US2 (core understanding)
2. Increment 1: US3 + US4 (example and roles)
3. Increment 2: US5 + US6 (misconceptions and checklist)
4. Increment 3: US7 + US8 (FAQ and engineers section)

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize Next.js project and configure development environment

- [ ] T001 Create Next.js project with TypeScript and Tailwind: `npx create-next-app@latest speckit-guide --typescript --tailwind --app --no-src-dir`
- [ ] T002 Navigate to project directory: `cd speckit-guide`
- [ ] T003 Verify project structure exists: Check that `app/`, `components/`, `lib/`, `types/` directories can be created
- [ ] T004 Create directory structure: `mkdir -p app components/{layout,sections,ui,engineers} lib types public`
- [ ] T005 [P] Install Inter font: Update `app/layout.tsx` to import Inter font using `next/font/google`
- [ ] T006 [P] Configure Tailwind with ChatGPT theme: Update `tailwind.config.ts` with ChatGPT color palette, border radius, and custom utilities
- [ ] T007 [P] Create global styles: Update `app/globals.css` with Tailwind directives, ChatGPT dark mode base styles, CSS variables for reading mode, and focus styles
- [ ] T008 [P] Create TypeScript content types: Create `types/content.ts` with all content model interfaces (HeroContent, ProblemContent, WorkflowContent, etc.)
- [ ] T009 [P] Create constants file: Create `lib/constants.ts` with ChatGPT color values and spacing constants
- [ ] T010 Verify setup: Run `npm run dev` and confirm Next.js dev server starts on http://localhost:3000

---

## Phase 2: Foundational Components (Blocking Prerequisites)

**Purpose**: Build core layout and navigation components required by all sections

- [ ] T011 Create reading mode context: Create `app/reading-mode-provider.tsx` with React context for reading mode state
- [ ] T012 Create Layout component: Create `components/layout/Layout.tsx` that wraps page content, provides reading mode context, and applies global styles
- [ ] T013 Create TopNav component: Create `components/layout/TopNav.tsx` with sticky navigation, anchor links to sections, and responsive hamburger menu
- [ ] T014 Implement smooth scroll in TopNav: Add smooth scroll behavior to anchor links in `components/layout/TopNav.tsx` with proper offset for sticky nav
- [ ] T015 Implement active section highlighting: Add Intersection Observer API to `components/layout/TopNav.tsx` to highlight active section in nav
- [ ] T016 Create SectionCard component: Create `components/sections/SectionCard.tsx` as reusable wrapper with ChatGPT card styling (rounded-card, bg-background-surface, border, padding)
- [ ] T017 Create ReadingModeToggle component: Create `components/ui/ReadingModeToggle.tsx` button that toggles reading mode context and updates CSS variables
- [ ] T018 Add ReadingModeToggle to TopNav: Integrate `components/ui/ReadingModeToggle.tsx` into `components/layout/TopNav.tsx`
- [ ] T019 Create root layout: Update `app/layout.tsx` with metadata, Inter font, and ReadingModeProvider wrapper
- [ ] T020 Test foundational components: Verify Layout, TopNav, and SectionCard render correctly with ChatGPT styling

---

## Phase 3: User Story 1 - Understand SpecKit Basics (Priority: P1)

**Story Goal**: Non-technical stakeholders understand what SpecKit is and why it matters

**Independent Test**: Have a non-technical person read hero and problem sections, then ask them to explain SpecKit in their own words. They should articulate what it is and why it matters without technical jargon.

- [ ] T021 [US1] Create Hero component: Create `components/sections/Hero.tsx` that displays title and one-sentence definition from content model
- [ ] T022 [US1] Create ProblemSection component: Create `components/sections/ProblemSection.tsx` that displays before/after comparison
- [ ] T023 [US1] Create Callout component: Create `components/ui/Callout.tsx` for distinct card styling (bg-background-elevated or accent border)
- [ ] T024 [US1] Populate hero content: Add hero content to `lib/content.ts` with title "SpecKit, in plain English" and one-sentence definition
- [ ] T025 [US1] Populate problem content: Add problem content to `lib/content.ts` with before/after comparison showing what problem SpecKit solves
- [ ] T026 [US1] Integrate Hero in main page: Add Hero component to `app/page.tsx` and pass hero content as props
- [ ] T027 [US1] Integrate ProblemSection in main page: Add ProblemSection component to `app/page.tsx` and pass problem content as props
- [ ] T028 [US1] Wrap sections in Layout: Wrap all sections in `app/page.tsx` with Layout component and TopNav
- [ ] T029 [US1] Test US1 independently: Verify hero and problem sections display correctly, content is in plain English, and ChatGPT styling is applied

---

## Phase 4: User Story 2 - Learn the 5-Step Workflow (Priority: P1)

**Story Goal**: Non-technical stakeholders understand the 5-step SpecKit workflow (constitution → specify → plan → tasks → implement)

**Independent Test**: Have a user read the workflow section with step timeline, then ask them to list the 5 steps in order. They should name each step and understand what happens in each phase.

- [ ] T030 [US2] Create StepTimeline component: Create `components/ui/StepTimeline.tsx` that visually displays 5 steps with connecting lines/arrows, numbered steps, and responsive layout
- [ ] T031 [US2] Create WorkflowSection component: Create `components/sections/WorkflowSection.tsx` that displays workflow title, description, and uses StepTimeline component
- [ ] T032 [US2] Populate workflow content: Add workflow content to `lib/content.ts` with title, description, and array of 5 workflow steps (constitution, specify, plan, tasks, implement)
- [ ] T033 [US2] Integrate WorkflowSection in main page: Add WorkflowSection component to `app/page.tsx` and pass workflow content as props
- [ ] T034 [US2] Test StepTimeline responsiveness: Verify StepTimeline displays correctly on mobile (stacked) and desktop (horizontal)
- [ ] T035 [US2] Test US2 independently: Verify workflow section displays all 5 steps in correct order, timeline is visually clear, and content explains each step

---

## Phase 5: User Story 3 - See Real-World Application (Priority: P2)

**Story Goal**: Non-technical stakeholders see a complete example of how SpecKit works with a real feature

**Independent Test**: Have a user read the mini example section, then ask them to explain how they would apply the same process to a feature from their own work. They should map their feature to the 5-step process.

- [ ] T036 [US3] Create ExampleSection component: Create `components/sections/ExampleSection.tsx` that displays example feature name, description, and shows content for each of the 5 workflow steps
- [ ] T037 [US3] Populate example content: Add example content to `lib/content.ts` with feature name (e.g., "Forgot Password"), description, and example content for each of the 5 steps (text-only, no code)
- [ ] T038 [US3] Integrate ExampleSection in main page: Add ExampleSection component to `app/page.tsx` and pass example content as props
- [ ] T039 [US3] Test US3 independently: Verify example section shows one feature through all 5 steps, content is text-only and easy to follow, and progression is clear

---

## Phase 6: User Story 4 - Understand Team Roles (Priority: P2)

**Story Goal**: Non-technical stakeholders understand what PMs, designers, and engineers do in the SpecKit process

**Independent Test**: Have a user read the "who does what" section, then ask them to identify their role's responsibilities. They should list at least 2-3 responsibilities for their role.

- [ ] T040 [P] [US4] Create RolesSection component: Create `components/sections/RolesSection.tsx` that displays title, description, and role cards with responsibilities
- [ ] T041 [P] [US4] Populate roles content: Add roles content to `lib/content.ts` with title, description, and array of roles (PM, Designer, Engineer) with their responsibilities
- [ ] T042 [P] [US4] Integrate RolesSection in main page: Add RolesSection component to `app/page.tsx` and pass roles content as props
- [ ] T043 [P] [US4] Test US4 independently: Verify roles section displays all roles clearly, responsibilities are listed for each role, and content is in plain English

---

## Phase 7: User Story 5 - Clarify Misconceptions (Priority: P3)

**Story Goal**: Non-technical stakeholders see common misconceptions about SpecKit addressed

**Independent Test**: Have a user read the misconceptions section, then ask if they had any of those misconceptions. They should recognize and correct any false assumptions.

- [ ] T044 [P] [US5] Create MythReality component: Create `components/ui/MythReality.tsx` that displays myth vs reality comparison (side-by-side on desktop, stacked on mobile) with distinct styling
- [ ] T045 [P] [US5] Create MisconceptionsSection component: Create `components/sections/MisconceptionsSection.tsx` that displays title, description, and uses MythReality component for each misconception
- [ ] T046 [P] [US5] Populate misconceptions content: Add misconceptions content to `lib/content.ts` with title, description, and array of myth/reality pairs
- [ ] T047 [P] [US5] Integrate MisconceptionsSection in main page: Add MisconceptionsSection component to `app/page.tsx` and pass misconceptions content as props
- [ ] T048 [P] [US5] Test MythReality responsiveness: Verify MythReality displays correctly on mobile (stacked) and desktop (side-by-side)
- [ ] T049 [P] [US5] Test US5 independently: Verify misconceptions section clearly shows myth vs reality contrast, content addresses common concerns, and formatting is easy to scan

---

## Phase 8: User Story 6 - Get Started Quickly (Priority: P2)

**Story Goal**: Non-technical stakeholders have a quick start checklist to begin using SpecKit immediately

**Independent Test**: Have a user read the quick start checklist, then attempt to follow it. They should complete at least the first 2-3 items without additional help.

- [ ] T050 [P] [US6] Create Checklist component: Create `components/ui/Checklist.tsx` that displays checklist items with visual checkboxes or indicators
- [ ] T051 [P] [US6] Create ChecklistSection component: Create `components/sections/ChecklistSection.tsx` that displays title, description, and uses Checklist component
- [ ] T052 [P] [US6] Populate checklist content: Add checklist content to `lib/content.ts` with title, description, and array of checklist items (text and optional flag)
- [ ] T053 [P] [US6] Integrate ChecklistSection in main page: Add ChecklistSection component to `app/page.tsx` and pass checklist content as props
- [ ] T054 [P] [US6] Test US6 independently: Verify checklist section displays items clearly, items are actionable and specific, and formatting is easy to scan

---

## Phase 9: User Story 7 - Find Answers to FAQs (Priority: P3)

**Story Goal**: Non-technical stakeholders can quickly find answers to common questions

**Independent Test**: Have a user with a question check the FAQ section. They should find an answer or determine their question isn't covered.

- [ ] T055 [P] [US7] Create FAQAccordion component: Create `components/ui/FAQAccordion.tsx` that displays expandable/collapsible FAQ items with question and answer, keyboard accessible (Enter/Space to expand, Escape to close)
- [ ] T056 [P] [US7] Create FAQSection component: Create `components/sections/FAQSection.tsx` that displays title, optional description, and uses FAQAccordion component for each FAQ item
- [ ] T057 [P] [US7] Populate FAQ content: Add FAQ content to `lib/content.ts` with title, optional description, and array of FAQ items (question and answer in plain English)
- [ ] T058 [P] [US7] Integrate FAQSection in main page: Add FAQSection component to `app/page.tsx` and pass FAQ content as props
- [ ] T059 [P] [US7] Test FAQAccordion interactivity: Verify FAQ items expand/collapse on click, keyboard navigation works (Enter/Space/Escape), and focus indicators are visible
- [ ] T060 [P] [US7] Test US7 independently: Verify FAQ section displays questions clearly, answers are in plain English, and accordion functionality works correctly

---

## Phase 10: User Story 8 - Access Technical Details (Priority: P3)

**Story Goal**: Engineers can access CLI commands and technical setup instructions in a collapsed accordion

**Independent Test**: Have an engineer expand the "For engineers" accordion and verify CLI commands are present and accurate.

- [ ] T061 [P] [US8] Create EngineersAccordion component: Create `components/engineers/EngineersAccordion.tsx` that displays collapsed accordion (collapsed by default) with technical content and CLI commands
- [ ] T062 [P] [US8] Populate engineers content: Add engineers content to `lib/content.ts` with title "For Engineers", description, and sections with technical content and optional CLI commands array
- [ ] T063 [P] [US8] Integrate EngineersAccordion in main page: Add EngineersAccordion component to `app/page.tsx` (can be in Get Started section or separate section) and pass engineers content as props
- [ ] T064 [P] [US8] Test EngineersAccordion default state: Verify accordion is collapsed by default, non-technical users don't see technical content unless expanded
- [ ] T065 [P] [US8] Test US8 independently: Verify engineers accordion expands to show technical content, CLI commands are present and formatted correctly, and accordion doesn't break layout when expanded

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Final polish, responsive design, accessibility, and performance optimization

- [ ] T066 Verify all sections are integrated: Check `app/page.tsx` contains all 8 sections (Hero, Problem, Workflow, Example, Roles, Misconceptions, Checklist, FAQ) plus EngineersAccordion
- [ ] T067 Test responsive design - mobile: Test on mobile viewport (320px+) - verify layout stacks correctly, nav is accessible, no horizontal scrolling, all components readable
- [ ] T068 Test responsive design - tablet: Test on tablet viewport (768px+) - verify layout adapts appropriately, side-by-side elements work correctly
- [ ] T069 Test responsive design - desktop: Test on desktop viewport (1024px+) - verify full layout with side-by-side elements, optimal spacing
- [ ] T070 Test sticky navigation: Verify TopNav stays sticky on scroll, anchor links scroll smoothly to sections with proper offset, active section highlights correctly
- [ ] T071 Test anchor scrolling: Verify clicking nav links scrolls smoothly to correct section, URL updates with hash, browser back/forward works
- [ ] T072 Test contrast ratios: Use browser dev tools or contrast checker to verify all text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] T073 Test focus rings: Verify all interactive elements (links, buttons, accordions) have visible focus indicators (2px teal outline with offset)
- [ ] T074 Test keyboard navigation: Test Tab navigation through all interactive elements, Enter/Space activates buttons/accordions, Escape closes accordions
- [ ] T075 Verify no jargon in copy: Review all content in `lib/content.ts` - ensure plain English, no technical jargon except in engineers section
- [ ] T076 Test accordion functionality: Verify FAQAccordion and EngineersAccordion expand/collapse correctly, keyboard accessible, focus indicators visible
- [ ] T077 Test reading mode toggle: Verify ReadingModeToggle increases font size and line height, smooth transition, state persists (optional: localStorage)
- [ ] T078 Test without JavaScript: Disable JavaScript and verify all content still displays (progressive enhancement), though interactive features won't work
- [ ] T079 Performance check: Run `npm run build` and verify build succeeds, check bundle size, test production build locally with `npm run start`
- [ ] T080 Lighthouse audit: Run Lighthouse audit and verify performance score > 90, accessibility score 100, best practices score 100
- [ ] T081 Cross-browser testing: Test in Chrome, Firefox, Safari, Edge (latest 2 versions) - verify consistent appearance and functionality
- [ ] T082 Final QA checklist: Complete final QA checklist (see below)

---

## Final QA Checklist

**Run these checks before considering the feature complete:**

- [ ] **Responsive desktop**: Page displays correctly on desktop (1024px+), all sections visible, proper spacing, side-by-side elements work
- [ ] **Sticky nav works + anchor scroll**: TopNav stays sticky on scroll, clicking nav links smoothly scrolls to correct section with proper offset, active section highlights in nav
- [ ] **Good contrast + focus rings**: All text meets WCAG AA contrast (4.5:1 normal, 3:1 large), all interactive elements have visible 2px teal focus rings with offset
- [ ] **No jargon in copy**: All content in hero, problem, workflow, example, roles, misconceptions, checklist, and FAQ sections uses plain English with no technical jargon (engineers section can have technical terms)
- [ ] **Accordion works**: FAQAccordion and EngineersAccordion expand/collapse on click, keyboard accessible (Enter/Space to expand, Escape to close), focus indicators visible, EngineersAccordion collapsed by default

**Additional checks:**
- [ ] All 8 sections display correctly with content from content model
- [ ] ChatGPT dark mode styling applied consistently (charcoal background, teal accents, muted text)
- [ ] StepTimeline displays 5 steps correctly with visual progression
- [ ] Reading mode toggle works and increases font size/line height
- [ ] Page loads in < 2 seconds on 3G connection
- [ ] Smooth scrolling at 60fps
- [ ] No console errors or warnings
- [ ] Semantic HTML structure (h1, h2, h3, nav, main, section)
- [ ] Screen reader can navigate content (test with VoiceOver/NVDA)

---

## Task Summary

**Total Tasks**: 82
**Tasks by Phase**:
- Phase 1 (Setup): 10 tasks
- Phase 2 (Foundational): 10 tasks
- Phase 3 (US1): 9 tasks
- Phase 4 (US2): 6 tasks
- Phase 5 (US3): 4 tasks
- Phase 6 (US4): 4 tasks
- Phase 7 (US5): 6 tasks
- Phase 8 (US6): 5 tasks
- Phase 9 (US7): 6 tasks
- Phase 10 (US8): 5 tasks
- Phase 11 (Polish): 17 tasks

**Parallel Opportunities**:
- Phase 1: T005-T009 can run in parallel
- Phase 2: T011-T019 can run in parallel after T010
- Phase 6-10: All can run in parallel after Phase 4 (US2) is complete
- UI components (StepTimeline, Callout, MythReality, Checklist, FAQAccordion) can be built in parallel

**Suggested MVP Scope**: Phase 1 + Phase 2 + Phase 3 (US1) + Phase 4 (US2) = 35 tasks
This delivers core understanding of SpecKit (what it is, why it matters, and the 5-step workflow).

**Independent Test Criteria**:
- US1: Non-technical person can explain SpecKit in their own words after reading hero and problem sections
- US2: User can list all 5 workflow steps in correct order after reading workflow section
- US3: User can map a feature from their work to the 5-step process after reading example
- US4: User can identify 2-3 responsibilities for their role after reading roles section
- US5: User can recognize and correct misconceptions after reading misconceptions section
- US6: User can complete first 2-3 checklist items without additional help
- US7: User can find answer to their question in FAQ section
- US8: Engineer can access CLI commands by expanding engineers accordion

**Format Validation**: ✅ All tasks follow checklist format: `- [ ] [TaskID] [P?] [Story?] Description with file path`






