// Content model type definitions for SpecKit Guide Presentation

export interface HeroContent {
  title: string;
  definition: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface BeforeAfterItem {
  title: string;
  description: string;
  points: string[];
}

export interface ProblemContent {
  title: string;
  before: BeforeAfterItem;
  after: BeforeAfterItem;
}

export interface WorkflowStep {
  number: number;
  name: string;
  description: string;
  icon?: string;
}

export interface WorkflowContent {
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export interface ExampleStep {
  stepNumber: number;
  stepName: string;
  content: string;
}

export interface ExampleContent {
  title: string;
  featureName: string;
  description: string;
  steps: ExampleStep[];
}

export interface Role {
  name: string;
  responsibilities: string[];
  icon?: string;
}

export interface RolesContent {
  title: string;
  description: string;
  roles: Role[];
}

export interface MisconceptionItem {
  myth: string;
  reality: string;
}

export interface MisconceptionsContent {
  title: string;
  description: string;
  items: MisconceptionItem[];
}

export interface ChecklistItem {
  text: string;
  optional?: boolean;
}

export interface ChecklistContent {
  title: string;
  description: string;
  items: ChecklistItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  description?: string;
  items: FAQItem[];
}

export interface EngineerImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface EngineerSection {
  title: string;
  content: string;
  commands?: string[];
  images?: EngineerImage[];
}

export interface EngineersContent {
  title: string;
  description: string;
  sections: EngineerSection[];
}

export interface ContentModel {
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

