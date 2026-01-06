# Data Model: SpecKit Guide Presentation

**Date**: 2025-01-27
**Feature**: SpecKit Guide Presentation Update

## Overview

This feature uses a content-driven architecture. All content is stored in a TypeScript object (`lib/content.ts`) that drives the presentation. No database or API is required - this is a static content model.

## Content Model Structure

### Root Content Model

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

## Entity Definitions

### HeroContent

**Purpose**: Hero section at top of page with title and one-sentence definition

**Fields**:
- `title: string` - "SpecKit, in plain English"
- `definition: string` - One-sentence definition of SpecKit
- `ctaText?: string` - Optional call-to-action text
- `ctaLink?: string` - Optional call-to-action link

**Example**:
```typescript
{
  title: "SpecKit, in plain English",
  definition: "SpecKit helps teams turn ideas into working software through structured planning and clear communication.",
  ctaText: "Get Started",
  ctaLink: "#get-started"
}
```

### ProblemContent

**Purpose**: Before/after comparison showing what problem SpecKit solves

**Fields**:
- `title: string` - Section title
- `before: BeforeAfterItem` - The "before" state (problem)
- `after: BeforeAfterItem` - The "after" state (solution)

**BeforeAfterItem**:
- `title: string` - Title of the state
- `description: string` - Description text
- `points: string[]` - Bullet points

**Example**:
```typescript
{
  title: "What Problem Does SpecKit Solve?",
  before: {
    title: "Before SpecKit",
    description: "Teams struggle with...",
    points: ["Unclear requirements", "Miscommunication", "Rework"]
  },
  after: {
    title: "With SpecKit",
    description: "Teams have...",
    points: ["Clear specifications", "Aligned understanding", "Efficient workflow"]
  }
}
```

### WorkflowContent

**Purpose**: 5-step workflow explanation with timeline

**Fields**:
- `title: string` - Section title
- `description: string` - Introduction text
- `steps: WorkflowStep[]` - Array of 5 workflow steps

**WorkflowStep**:
- `number: number` - Step number (1-5)
- `name: string` - Step name (e.g., "Constitution", "Specify")
- `description: string` - What happens in this step
- `icon?: string` - Optional icon identifier

**Example**:
```typescript
{
  title: "The 5-Step Workflow",
  description: "SpecKit follows a structured process...",
  steps: [
    {
      number: 1,
      name: "Constitution",
      description: "Define project principles and rules..."
    },
    // ... 4 more steps
  ]
}
```

### ExampleContent

**Purpose**: Mini example showing one feature through all 5 steps

**Fields**:
- `title: string` - Section title
- `featureName: string` - Name of example feature (e.g., "Forgot Password")
- `description: string` - Brief description of the feature
- `steps: ExampleStep[]` - Example content for each of the 5 steps

**ExampleStep**:
- `stepNumber: number` - Which workflow step (1-5)
- `stepName: string` - Name of the step
- `content: string` - Text-only content showing what happens in this step for the example

**Example**:
```typescript
{
  title: "A Real-World Example",
  featureName: "Forgot Password Feature",
  description: "Let's see how SpecKit works with a simple example...",
  steps: [
    {
      stepNumber: 1,
      stepName: "Constitution",
      content: "First, we define that all features must be accessible..."
    },
    // ... 4 more steps
  ]
}
```

### RolesContent

**Purpose**: Who does what in the SpecKit process

**Fields**:
- `title: string` - Section title
- `description: string` - Introduction text
- `roles: Role[]` - Array of role definitions

**Role**:
- `name: string` - Role name (e.g., "Product Manager", "Designer", "Engineer")
- `responsibilities: string[]` - List of responsibilities for this role
- `icon?: string` - Optional icon identifier

**Example**:
```typescript
{
  title: "Who Does What?",
  description: "Each team member has specific responsibilities...",
  roles: [
    {
      name: "Product Manager",
      responsibilities: [
        "Define feature requirements",
        "Write user stories",
        "Prioritize features"
      ]
    },
    // ... more roles
  ]
}
```

### MisconceptionsContent

**Purpose**: Common misconceptions formatted as myth vs reality

**Fields**:
- `title: string` - Section title
- `description: string` - Introduction text
- `items: MisconceptionItem[]` - Array of myth/reality pairs

**MisconceptionItem**:
- `myth: string` - The misconception/myth
- `reality: string` - The reality/correct understanding

**Example**:
```typescript
{
  title: "Common Misconceptions",
  description: "Let's clear up some common misunderstandings...",
  items: [
    {
      myth: "SpecKit is only for engineers",
      reality: "SpecKit is designed for everyone - PMs, designers, and engineers all participate in the process."
    },
    // ... more items
  ]
}
```

### ChecklistContent

**Purpose**: Quick start checklist items

**Fields**:
- `title: string` - Section title
- `description: string` - Introduction text
- `items: ChecklistItem[]` - Array of checklist items

**ChecklistItem**:
- `text: string` - Checklist item text
- `optional?: boolean` - Whether this item is optional (default: false)

**Example**:
```typescript
{
  title: "Quick Start Checklist",
  description: "Follow these steps to get started with SpecKit...",
  items: [
    { text: "Read the workflow section to understand the process" },
    { text: "Identify a small feature to try SpecKit with" },
    { text: "Start with the Constitution step", optional: true }
  ]
}
```

### FAQContent

**Purpose**: Frequently asked questions and answers

**Fields**:
- `title: string` - Section title
- `description?: string` - Optional introduction text
- `items: FAQItem[]` - Array of FAQ items

**FAQItem**:
- `question: string` - The question
- `answer: string` - The answer (plain text, no technical jargon)

**Example**:
```typescript
{
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Do I need to know how to code?",
      answer: "No! SpecKit is designed for everyone. You write in plain English, and SpecKit helps structure it."
    },
    // ... more items
  ]
}
```

### EngineersContent

**Purpose**: Technical content for engineers (shown in collapsed accordion)

**Fields**:
- `title: string` - Accordion title ("For Engineers")
- `description: string` - Introduction text
- `sections: EngineerSection[]` - Array of technical sections

**EngineerSection**:
- `title: string` - Section title
- `content: string` - Technical content (can include code examples)
- `commands?: string[]` - Optional array of CLI commands

**Example**:
```typescript
{
  title: "For Engineers",
  description: "Technical setup and CLI commands...",
  sections: [
    {
      title: "Setup",
      content: "SpecKit is integrated into your development workflow...",
      commands: [
        "/speckit.specify I want to add user authentication",
        "/speckit.plan",
        "/speckit.tasks"
      ]
    }
  ]
}
```

## Content Relationships

- All content is flat (no nested relationships)
- Sections are independent (can be reordered without breaking references)
- Content model is the single source of truth
- Components receive content via props (no global state)

## Content Validation

**Rules**:
- All required fields must be present
- Workflow must have exactly 5 steps
- Example must show all 5 steps
- FAQ items must have both question and answer
- Checklist items must have text

**Type Safety**:
- TypeScript interfaces enforce structure at compile time
- No runtime validation needed (static content)
- Type errors catch content issues during development

## Future Enhancements

- Content could be moved to CMS (Contentful, Sanity) with same structure
- Could add content versioning
- Could add content preview/editing interface
- Could add i18n support (multiple languages)






