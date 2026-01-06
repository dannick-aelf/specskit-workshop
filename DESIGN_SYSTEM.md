# ChatGPT-Inspired Dark Mode Design System

> **Project-Specific Design Rules**
> This extends the global UI/UX rules with ChatGPT-inspired dark mode styling.

---

## Project Brand Identity

### Project Name
SpecsKit Workshop (ChatGPT Dark Mode Theme)

### Brand Colors
- **Primary**: #10A37F (ChatGPT Teal - main accent)
- **Secondary**: #5EEAD4 (Cyan - secondary accent)
- **Accent**: #00D9FF (Bright Cyan - highlights)
- **Background**: #212121 (Dark Gray - main background)
- **Surface**: #2D2D2D (Charcoal - cards, panels)
- **Surface Elevated**: #3A3A3A (Lighter surface for elevated elements)
- **Text Primary**: #ECECEC (Light Gray - primary text)
- **Text Secondary**: #A0A0A0 (Medium Gray - secondary text)
- **Text Tertiary**: #6B6B6B (Muted Gray - disabled/placeholder)
- **Border**: #404040 (Border color for dividers)
- **Success**: #10A37F (Teal - success states)
- **Warning**: #F5A623 (Amber - warnings)
- **Error**: #EF4444 (Red - errors)
- **Info**: #3B82F6 (Blue - informational)

### Typography
- **Primary Font**: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Secondary Font**: 'Inter', sans-serif (monospace for code)
- **Font Weights Available**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Theme Concept
- **Visual Style**: Modern, Minimalist, AI-Focused
- **Mood**: Professional, Calm, Intelligent, Futuristic
- **Aesthetic Keywords**: clean, minimal, glassmorphic, smooth, tech-forward

---

## Component Overrides

### Buttons

#### Primary Button (Override)
- **Height**: 44px (base allows: 48-56px, but ChatGPT uses 44px)
- **Border Radius**: 8px (base allows: 8-12px)
- **Background**: #10A37F (ChatGPT Teal)
- **Text Color**: #FFFFFF (White)
- **Font**: Inter, 14px, 500 (Medium)
- **Padding**: 12px 20px horizontal
- **Pressed State**: 0.85 opacity OR scale(0.98) (base: 0.8 opacity)
- **Shadow**: 0 2px 8px rgba(16, 163, 127, 0.25)
- **Hover State** (desktop): Background #0D8A6D (slightly darker teal)
- **Disabled**: 0.4 opacity, #404040 background

#### Secondary Button (Override)
- **Height**: 44px
- **Border Radius**: 8px
- **Border**: 1px solid #404040
- **Background**: Transparent
- **Text Color**: #ECECEC
- **Pressed State**: Background #2D2D2D (subtle fill)
- **Hover State**: Border #10A37F, background rgba(16, 163, 127, 0.1)

#### Text Button (Override)
- **Height**: 44px
- **Text Color**: #10A37F (Teal)
- **Underline**: No underline, color change on hover
- **Hover State**: #5EEAD4 (lighter teal)

#### Icon Button (Override)
- **Size**: 40x40px (ChatGPT style - slightly smaller than base 44px)
- **Border Radius**: 8px
- **Background**: Transparent or #2D2D2D on hover
- **States**: Default (transparent), Hover (#2D2D2D), Active (#10A37F background)

#### Custom Button Variants
- **Ghost Button**: Transparent background, teal text, hover fill
- **Gradient Button**: Linear gradient from #10A37F to #5EEAD4 (for special actions)

### Cards

#### Standard Card (Override)
- **Border Radius**: 12px (base allows: 12-16px)
- **Padding**: 16px (base allows: 16-20px)
- **Background**: #2D2D2D (Charcoal surface)
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.3)
- **Border**: 1px solid #404040 (subtle border)
- **Hover**: Slight elevation, border #10A37F at 30% opacity

#### Elevated Card (Override)
- **Border Radius**: 12px
- **Padding**: 20px
- **Background**: #3A3A3A (Elevated surface)
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.4)
- **Use for**: Modals, important information, featured content

#### Glassmorphic Card (ChatGPT Style)
- **Border Radius**: 12px
- **Padding**: 20px
- **Background**: rgba(45, 45, 45, 0.7) with backdrop-filter: blur(10px)
- **Border**: 1px solid rgba(255, 255, 255, 0.1)
- **Use for**: Overlays, floating panels

### Forms

#### Input Fields (Override)
- **Border Radius**: 8px (base allows: 8-12px)
- **Height**: 44px (base allows: 48-56px, ChatGPT uses 44px)
- **Background**: #2D2D2D (Surface color)
- **Border**: 1px solid #404040
- **Focus Border**: 2px solid #10A37F (Teal)
- **Placeholder Color**: #6B6B6B (Muted gray)
- **Text Color**: #ECECEC (Light gray)
- **Font Size**: 14px (prevents iOS zoom)
- **Padding**: 12px 16px

#### Labels (Override)
- **Font**: Inter, 13px, 500 (Medium)
- **Color**: #A0A0A0 (Secondary text)
- **Spacing**: 8px above input

#### Textarea (Override)
- **Min Height**: 100px
- **Padding**: 12px 16px
- **Resize**: Vertical only
- **Same styling as Input Fields**

### Spacing Overrides

#### Mobile Padding
- **Screen Edge Padding**: 16px (base allows: 20-24px, ChatGPT uses tighter spacing)
- **Section Spacing**: 24px vertical (standard)

#### Custom Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Border Radius Overrides
- **Buttons**: 8px
- **Cards**: 12px
- **Inputs**: 8px
- **Modals**: 16px (top corners)
- **Badges**: 12px (pill shape)
- **Avatars**: 50% (circular)

---

## Animation Overrides

### Custom Animation Timings
- **Button Press**: 150ms (base: 150ms, ChatGPT is snappy)
- **Modal Open**: 200ms (base: 300ms, faster for modern feel)
- **Page Transition**: 250ms
- **List Item**: 150ms
- **Hover**: 200ms

### Custom Easing
- **Primary Easing**: cubic-bezier(0.4, 0, 0.2, 1) (Material Design standard)
- **Enter Animation**: cubic-bezier(0.4, 0, 0.2, 1)
- **Exit Animation**: cubic-bezier(0.4, 0, 0.6, 1)

### Custom Animations
- **Fade In**: opacity 0 → 1, 200ms
- **Slide Up**: transform translateY(10px) → 0, 200ms
- **Scale In**: transform scale(0.95) → 1, 200ms
- **Shimmer**: Background gradient animation for loading states

---

## Project-Specific Components

### Chat Message Bubble
- **Description**: Message container for chat interface
- **User Message**:
  - Background: #10A37F (Teal)
  - Text: #FFFFFF
  - Border Radius: 12px 12px 4px 12px (rounded except bottom-left)
  - Padding: 12px 16px
  - Max Width: 85% of container
  - Align: Right
- **AI Message**:
  - Background: #2D2D2D (Surface)
  - Text: #ECECEC
  - Border Radius: 12px 12px 12px 4px (rounded except bottom-right)
  - Padding: 12px 16px
  - Max Width: 85% of container
  - Align: Left
- **Spacing**: 12px between messages

### Sidebar Navigation
- **Description**: Left sidebar for navigation (ChatGPT style)
- **Width**: 260px (collapsed: 0px)
- **Background**: #212121 (Main background)
- **Border**: 1px solid #404040 (right border)
- **Padding**: 16px
- **Item Height**: 44px
- **Item Padding**: 12px 16px
- **Hover**: Background #2D2D2D
- **Active**: Background #2D2D2D, border-left 3px solid #10A37F

### Code Block
- **Description**: Code display with syntax highlighting
- **Background**: #1A1A1A (Darker than surface)
- **Border**: 1px solid #404040
- **Border Radius**: 8px
- **Padding**: 16px
- **Font**: 'Fira Code', 'Monaco', monospace
- **Font Size**: 13px
- **Line Height**: 1.6

### Tooltip
- **Description**: Contextual help text
- **Background**: #3A3A3A (Elevated surface)
- **Text**: #ECECEC
- **Padding**: 8px 12px
- **Border Radius**: 6px
- **Font Size**: 12px
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.4)
- **Arrow**: 6px triangle

### Loading Spinner
- **Description**: Loading indicator
- **Size**: 20px
- **Color**: #10A37F (Teal)
- **Animation**: Rotate 1s linear infinite
- **Stroke Width**: 2px

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Brand Colors */
  --color-primary: #10A37F;
  --color-secondary: #5EEAD4;
  --color-accent: #00D9FF;
  --color-background: #212121;
  --color-surface: #2D2D2D;
  --color-surface-elevated: #3A3A3A;
  --color-text-primary: #ECECEC;
  --color-text-secondary: #A0A0A0;
  --color-text-tertiary: #6B6B6B;
  --color-border: #404040;
  --color-success: #10A37F;
  --color-warning: #F5A623;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Spacing */
  --spacing-mobile: 16px;
  --spacing-tablet: 20px;
  --spacing-desktop: 24px;
  
  /* Border Radius */
  --radius-button: 8px;
  --radius-card: 12px;
  --radius-input: 8px;
  --radius-modal: 16px;
  --radius-badge: 12px;
  
  /* Button States */
  --button-pressed-opacity: 0.85;
  --button-pressed-scale: 0.98;
  --button-disabled-opacity: 0.4;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-button: 0 2px 8px rgba(16, 163, 127, 0.25);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 13px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  
  /* Animation */
  --animation-fast: 150ms;
  --animation-normal: 200ms;
  --animation-slow: 300ms;
  --easing-primary: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 0.6, 1);
}
```

---

## Usage Notes

- All base rules from global UI/UX rules apply unless overridden above
- ChatGPT uses a more compact spacing system (16px vs 20-24px)
- Buttons are 44px height (slightly smaller than base 48-56px)
- Maintain high contrast for accessibility (WCAG 2.1 AA minimum)
- Use glassmorphism sparingly for special overlays
- Keep animations fast and snappy (150-200ms)
- Test on real devices, especially dark mode displays

---

## Project-Specific Patterns

### Chat Interface Pattern
- **When to use**: Conversational interfaces, AI interactions
- **Implementation**: 
  - Left-aligned AI messages (gray background)
  - Right-aligned user messages (teal background)
  - Message bubbles with rounded corners
  - Timestamp in muted text below messages
- **Example**: See Chat Message Bubble component

### Glassmorphism Pattern
- **When to use**: Overlays, floating panels, modals
- **Implementation**: 
  - Semi-transparent background (rgba)
  - backdrop-filter: blur(10px)
  - Subtle white border (rgba(255, 255, 255, 0.1))
- **Example**: See Glassmorphic Card component

### Minimal Navigation Pattern
- **When to use**: Sidebars, navigation menus
- **Implementation**:
  - Clean, minimal design
  - Icon + text labels
  - Hover states with subtle background
  - Active state with teal accent
- **Example**: See Sidebar Navigation component

---

## Brand Guidelines

### Logo Usage
- Place logo in top-left of navigation
- Minimum size: 32px height
- Use white/light version on dark background
- Maintain 16px spacing around logo

### Imagery Style
- Minimal, clean imagery
- Dark backgrounds with light accents
- Subtle gradients when needed
- Avoid bright, saturated colors (except teal accent)

### Voice & Tone
- Professional yet approachable
- Clear and concise
- Helpful and intelligent
- Modern and tech-forward

---

## Component Library Reference

### Interactive Elements
- Buttons: Primary, Secondary, Text, Icon variants
- Inputs: Text, Textarea, Select, Checkbox, Radio
- Navigation: Sidebar, Top Bar, Tabs
- Feedback: Toast, Tooltip, Modal, Alert

### Content Display
- Cards: Standard, Elevated, Glassmorphic
- Lists: Simple, With icons, With avatars
- Code: Inline code, Code blocks
- Messages: Chat bubbles, System messages

### Data Display
- Tables: Minimal borders, hover states
- Charts: Dark theme compatible colors
- Badges: Status indicators, Tags
- Progress: Linear, Circular

---

## Accessibility Checklist

- ✅ All text meets WCAG AA contrast (4.5:1 minimum)
- ✅ Interactive elements minimum 44x44px touch target
- ✅ Focus indicators visible (2px teal outline)
- ✅ Keyboard navigation support
- ✅ Screen reader labels on icons
- ✅ Reduced motion support (prefers-reduced-motion)
- ✅ Color not sole indicator (use icons/labels)

---

## Implementation Priority

1. **Phase 1**: Core tokens, buttons, inputs, cards
2. **Phase 2**: Navigation, forms, typography
3. **Phase 3**: Special components (chat, code blocks)
4. **Phase 4**: Animations, glassmorphism, polish

---

*Last Updated: 2024*
*Based on ChatGPT UI/UX Design Language*

