import { ContentModel } from '@/types/content';

export const content: ContentModel = {
  hero: {
    title: "SpecKit, in plain English",
    definition: "SpecKit helps teams turn ideas into working software through structured planning and clear communication.",
    ctaText: "Get Started",
    ctaLink: "#get-started",
  },
  problem: {
    title: "What Problem Does SpecKit Solve?",
    before: {
      title: "Before SpecKit",
      description: "Teams struggle with unclear requirements, miscommunication, and wasted effort.",
      points: [
        "Unclear requirements lead to rework",
        "Miscommunication between team members",
        "Features built that don't match expectations",
        "Time wasted on back-and-forth clarifications",
      ],
    },
    after: {
      title: "With SpecKit",
      description: "Teams have clear specifications, aligned understanding, and an efficient workflow.",
      points: [
        "Clear specifications everyone can understand",
        "Aligned understanding across all team members",
        "Features built right the first time",
        "Time saved through structured communication",
      ],
    },
  },
  workflow: {
    title: "The 5-Step Workflow",
    description: "SpecKit follows a structured process that guides teams from idea to implementation. Each step builds on the previous one, ensuring nothing gets missed.",
    steps: [
      {
        number: 1,
        name: "Constitution",
        description: "Define your project's principles and rules. This is like creating a foundation that guides all future decisions.",
      },
      {
        number: 2,
        name: "Specify",
        description: "Write down what you want to build in plain English. Describe the feature, who it's for, and why it matters.",
      },
      {
        number: 3,
        name: "Plan",
        description: "Break down the specification into a technical plan. Identify what needs to be built, what data is needed, and how everything connects.",
      },
      {
        number: 4,
        name: "Tasks",
        description: "Convert the plan into specific, actionable tasks. Each task is clear, testable, and can be worked on independently.",
      },
      {
        number: 5,
        name: "Implement",
        description: "Build the feature following the tasks. As you build, verify everything matches the original plan.",
      },
    ],
  },
  example: {
    title: "A Real-World Example",
    featureName: "Employee Onboarding Portal",
    description: "Let's see how SpecKit works with a relatable business example. We'll walk through all 5 steps to show how an idea becomes a working feature.",
    steps: [
      {
        stepNumber: 1,
        stepName: "Constitution",
        content: "First, we define that all features must be user-friendly and accessible. New employees should have a smooth onboarding experience, and HR should be able to track progress easily.",
      },
      {
        stepNumber: 2,
        stepName: "Specify",
        content: "We write: 'New employees need a portal where they can complete onboarding tasks like reading company policies, setting up their profile, and submitting required documents. HR needs a dashboard to see who has completed what and send reminders if needed.'",
      },
      {
        stepNumber: 3,
        stepName: "Plan",
        content: "We plan: Create an employee portal with a task checklist, build a document upload system, create an HR dashboard to view employee progress, add email notifications for reminders, and ensure everything is mobile-friendly.",
      },
      {
        stepNumber: 4,
        stepName: "Tasks",
        content: "We break it down: Task 1 - Design employee portal interface, Task 2 - Build document upload feature, Task 3 - Create HR dashboard, Task 4 - Set up email notification system, Task 5 - Make it mobile-responsive.",
      },
      {
        stepNumber: 5,
        stepName: "Implement",
        content: "We build each task, testing as we go. When complete, we verify the feature works as specified: new employees can complete onboarding easily, and HR can track progress and send reminders.",
      },
    ],
  },
  roles: {
    title: "Who Does What?",
    description: "Each team member has specific responsibilities in the SpecKit process. Understanding your role helps you contribute effectively.",
    roles: [
      {
        name: "Product Manager",
        responsibilities: [
          "Define feature requirements and user needs",
          "Write user stories in plain English",
          "Prioritize features and manage the backlog",
          "Ensure specifications match business goals",
        ],
      },
      {
        name: "Designer",
        responsibilities: [
          "Understand technical constraints early",
          "Contribute to feature specifications",
          "Ensure design requirements are captured",
          "Create visual designs that match specifications",
        ],
      },
      {
        name: "Engineer",
        responsibilities: [
          "Create technical plans from specifications",
          "Break plans down into actionable tasks",
          "Build features following the tasks",
          "Verify implementation matches the plan",
        ],
      },
    ],
  },
  misconceptions: {
    title: "Common Misconceptions",
    description: "Let's clear up some common misunderstandings about SpecKit so you can use it effectively.",
    items: [
      {
        myth: "SpecKit is only for engineers",
        reality: "SpecKit is designed for everyone. Product managers, designers, and engineers all participate in the process. Each role has important contributions.",
      },
      {
        myth: "You need to know how to code",
        reality: "No coding knowledge required! You write in plain English, and SpecKit helps structure it. The technical parts are handled by engineers.",
      },
      {
        myth: "SpecKit slows down development",
        reality: "SpecKit actually speeds things up. By catching misunderstandings early and ensuring everyone is aligned, you avoid costly rework later.",
      },
      {
        myth: "It's too complicated for small features",
        reality: "SpecKit works for features of any size. For small features, the process is quick and simple. For large features, it provides essential structure.",
      },
    ],
  },
  checklist: {
    title: "Quick Start Checklist",
    description: "Follow these steps to get started with SpecKit. Start with a small feature to learn the process.",
    items: [
      { text: "Ensure prerequisites are installed (engineers: uv must be installed - see 'For Engineers' section)" },
      { text: "Read the workflow section to understand the 5-step process" },
      { text: "Identify a small feature or improvement you want to build" },
      { text: "Start with the Constitution step - define your project principles" },
      { text: "Write a specification in plain English describing your feature" },
      { text: "Work with your team to create a plan and break it into tasks" },
      { text: "Build the feature following the tasks, verifying as you go" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need to know how to code?",
        answer: "No! SpecKit is designed for everyone. You write in plain English, and SpecKit helps structure it into a format that both technical and non-technical team members can understand.",
      },
      {
        question: "How do I get started?",
        answer: "Start simple! Pick a small feature or improvement you want to build, then follow the 5-step workflow. Begin with the Constitution step to define your principles, then write a specification in plain English. Don't worry about being perfect—you can always refine it as you go.",
      },
      {
        question: "Will this slow me down?",
        answer: "Actually, SpecKit speeds things up! While it takes 30-60 minutes upfront to create a specification and plan, it saves hours or days of rework later. You catch misunderstandings early instead of discovering them after weeks of work.",
      },
      {
        question: "What if I make a mistake?",
        answer: "Mistakes are part of learning! SpecKit makes it easy to update your specification or plan as you learn more. The process is designed to be flexible—you can always go back and refine earlier steps.",
      },
      {
        question: "Do I need training?",
        answer: "No formal training needed! The workflow is straightforward and uses plain English. Start with a small feature to learn the process, and you'll get comfortable quickly. The 5 steps are designed to be intuitive.",
      },
      {
        question: "Can I skip steps?",
        answer: "You can, but we don't recommend it. Each step builds on the previous one, so skipping steps can lead to missing important details. However, for very small features, you might combine some steps. Start with the full process to learn it, then adapt as needed.",
      },
      {
        question: "What if I don't have time?",
        answer: "Think of SpecKit as an investment. Spending 30-60 minutes upfront prevents hours of rework later. For urgent requests, you can create a quick specification—even a brief one is better than none. You can always expand it later.",
      },
      {
        question: "Is this just more paperwork?",
        answer: "No! SpecKit is about clear communication, not bureaucracy. The documents you create are practical tools that help your team stay aligned. They're living documents that guide your work, not paperwork that sits in a folder.",
      },
      {
        question: "What if my team doesn't want to use it?",
        answer: "Start small and show the value. Try SpecKit on one feature and demonstrate how it prevents misunderstandings and saves time. Once your team sees the benefits, they'll likely want to use it more. You can also use it individually to improve your own work.",
      },
      {
        question: "Is this mandatory?",
        answer: "SpecKit is a tool to help you, not a requirement. Use it when it makes sense for your project. Some teams use it for all features, others use it for complex or important features. You decide what works best for your situation.",
      },
      {
        question: "What if I'm working alone?",
        answer: "SpecKit still helps! Even solo, writing a clear specification helps you think through your feature before building it. It's like making a plan before a trip—you might change it, but having it helps you stay focused.",
      },
      {
        question: "How long does it take?",
        answer: "For a small feature, creating a specification and plan typically takes 30-60 minutes. The time investment upfront saves hours or days of rework later. For larger features, it might take a few hours, but the time saved is usually much more.",
      },
      {
        question: "Can I change the plan later?",
        answer: "Absolutely! Plans are living documents. As you learn more or requirements change, you can update the specification and plan. SpecKit helps track these changes so everyone stays informed. Flexibility is built into the process.",
      },
      {
        question: "What if requirements change?",
        answer: "That's normal! SpecKit makes it easy to update your specification and plan when requirements change. The process helps you identify what needs to change and communicate those changes clearly to your team.",
      },
      {
        question: "What if I'm not sure about something?",
        answer: "That's exactly what SpecKit is for! The specification process helps you identify what you don't know yet. You can mark areas as 'needs clarification' and work with your team to figure it out before building. It's better to ask questions early than discover problems later.",
      },
      {
        question: "What if I don't understand something technical?",
        answer: "You don't need to understand the technical details! That's the engineer's job. Your job is to describe what you want in plain English—what problem you're solving, who it's for, and why it matters. The engineer will figure out the technical how.",
      },
      {
        question: "How do I know if I'm doing it right?",
        answer: "If your specification is clear enough that someone else can understand what you want to build, you're doing it right! Start simple and refine as you go. The workflow section and example can guide you, but there's no perfect way—just clear communication.",
      },
      {
        question: "What if I'm not good at writing?",
        answer: "You don't need to be a great writer! Just write in plain, simple language. Describe what you want like you're explaining it to a friend. Use bullet points, short sentences, and don't worry about perfect grammar. Clarity matters more than style.",
      },
      {
        question: "Do I need to learn new terminology?",
        answer: "Not really! SpecKit uses simple terms like 'specification' (what you want to build) and 'plan' (how to build it). The workflow steps have clear names like 'Specify' and 'Plan'. If you see a term you don't know, it's explained in plain English.",
      },
      {
        question: "How does this help me in my role?",
        answer: "SpecKit helps you communicate clearly, avoid misunderstandings, and ensure what gets built matches what you wanted. Whether you're a PM defining requirements, a designer ensuring design needs are captured, or someone else on the team, SpecKit helps you contribute effectively.",
      },
      {
        question: "What if the engineer doesn't follow the plan?",
        answer: "The plan is a guide, not a strict rule. Engineers might find better ways to build something, and that's okay! The important thing is that everyone understands what needs to be built and why. If the engineer suggests changes, discuss them together.",
      },
      {
        question: "Can I use this for small tasks?",
        answer: "Yes! SpecKit works for features of any size. For small tasks, you might create a brief specification in just a few minutes. For larger features, you'll spend more time. Use the level of detail that makes sense for the task.",
      },
      {
        question: "How is this different from what we do now?",
        answer: "SpecKit provides structure and consistency. Instead of ad-hoc planning that varies from project to project, SpecKit gives you a clear process that everyone can follow. It ensures nothing gets missed and everyone stays aligned.",
      },
      {
        question: "What if the specification is wrong?",
        answer: "That's okay! Specifications are your best understanding at the time. As you learn more, you update them. The process helps you catch mistakes early, before they become expensive problems. Think of it as a living document that improves over time.",
      },
      {
        question: "Is SpecKit only for software projects?",
        answer: "While SpecKit was designed for software development, the principles can apply to any project that benefits from structured planning and clear communication. If you're planning something that involves multiple people and steps, SpecKit can help.",
      },
      {
        question: "Do I need special tools or software?",
        answer: "No special tools required! SpecKit works with the tools you already use. You can write specifications in any text editor, and the process works with any project management system. It's about the process, not the tools.",
      },
    ],
  },
  engineers: {
    title: "For Engineers",
    description: "Technical setup and CLI commands for using SpecKit in your development workflow.",
    sections: [
      {
        title: "Prerequisites",
        content: "Before you can use SpecKit, you need to install `uv`, a fast Python package installer. If you don't have it installed, you'll see an error like 'command not found: uv' when trying to run SpecKit commands.",
        commands: [
          "# Check if uv is installed",
          "uv --version",
          "",
          "# If not installed, install uv:",
          "# macOS/Linux:",
          "curl -LsSf https://astral.sh/uv/install.sh | sh",
          "",
          "# Or using Homebrew (macOS):",
          "brew install uv",
        ],
        images: [
          {
            src: "/images/uv-not-found.png",
            alt: "Terminal showing uv command not found error",
            caption: "If you see this error, you need to install uv first",
          },
        ],
      },
      {
        title: "Initial Setup",
        content: "Once uv is installed, initialize SpecKit in your project directory. This will set up the necessary template files and directory structure.",
        commands: [
          "# Navigate to your project directory",
          "cd your-project",
          "",
          "# Initialize SpecKit",
          "specify init .",
        ],
        images: [
          {
            src: "/images/specify-init.png",
            alt: "Specify init command with confirmation prompt",
            caption: "Initialize SpecKit in your project - you'll be asked to confirm",
          },
          {
            src: "/images/specify-version.png",
            alt: "Specify CLI version information",
            caption: "Check your SpecKit version with 'specify version'",
          },
        ],
      },
      {
        title: "Getting Started",
        content: "SpecKit is integrated into your development workflow through Cursor commands. All specifications, plans, and tasks are stored in `.specify/` directories, keeping your project organized.",
        commands: [
          "# Create a feature specification",
          "/speckit.specify I want to add user authentication",
          "",
          "# Generate implementation plan",
          "/speckit.plan",
          "",
          "# Break down into tasks",
          "/speckit.tasks",
        ],
        images: [
          {
            src: "/images/next-steps.png",
            alt: "SpecKit workflow commands guide",
            caption: "The core SpecKit workflow commands",
          },
        ],
      },
      {
        title: "Workflow Commands",
        content: "The SpecKit workflow consists of several commands that guide you through the process. You can access these commands in Cursor's command palette.",
        commands: [
          "/speckit.specify - Create or update feature specification",
          "/speckit.plan - Generate technical implementation plan",
          "/speckit.tasks - Break plan into actionable tasks",
          "/speckit.analyze - Check consistency across artifacts",
          "/speckit.implement - Execute implementation tasks",
        ],
        images: [
          {
            src: "/images/ai-assistant-selection.png",
            alt: "AI assistant selection menu",
            caption: "Choose your AI assistant (Cursor is recommended)",
          },
          {
            src: "/images/command-palette.png",
            alt: "SpecKit commands in Cursor command palette",
            caption: "Access SpecKit commands from the command palette",
          },
        ],
      },
      {
        title: "Project Structure",
        content: "SpecKit organizes your project with a clear structure. Each feature gets its own directory under `specs/` with all related documents. After running commands, you'll see files like spec.md, plan.md, and tasks.md created automatically.",
        commands: [
          "specs/[number]-[feature-name]/",
          "├── spec.md          # Feature specification",
          "├── plan.md          # Technical plan",
          "├── tasks.md          # Task breakdown",
          "├── data-model.md     # Data structures",
          "└── quickstart.md    # Setup guide",
        ],
        images: [
          {
            src: "/images/file-structure.png",
            alt: "File explorer showing SpecKit spec files",
            caption: "SpecKit creates organized spec files in your project",
          },
        ],
      },
      {
        title: "Script Type Selection",
        content: "When setting up SpecKit, you'll be asked to choose a script type. Select 'sh (POSIX Shell)' for macOS and Linux, or 'ps (PowerShell)' for Windows.",
        images: [
          {
            src: "/images/script-type-selection.png",
            alt: "Script type selection menu",
            caption: "Choose your script type based on your operating system",
          },
        ],
      },
    ],
  },
};

