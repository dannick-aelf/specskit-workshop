# Image Setup Guide

## Required Images

To complete the SpecKit presentation, you need to add the following images to `public/images/`:

### 1. uv-not-found.png
**Location in presentation**: Prerequisites section (For Engineers accordion)
**Description**: Terminal screenshot showing "command not found: uv" error
**Purpose**: Shows what happens if uv is not installed

### 2. specify-init.png
**Location in presentation**: Initial Setup section (For Engineers accordion)
**Description**: Terminal screenshot of `specify init .` command with confirmation prompt
**Purpose**: Shows the initialization process

### 3. specify-version.png
**Location in presentation**: Initial Setup section (For Engineers accordion)
**Description**: Terminal screenshot showing `specify version` output with CLI information
**Purpose**: Shows how to check SpecKit version

### 4. next-steps.png
**Location in presentation**: Getting Started section (For Engineers accordion)
**Description**: Screenshot showing SpecKit workflow commands guide
**Purpose**: Visual guide to the core workflow commands

### 5. ai-assistant-selection.png
**Location in presentation**: Workflow Commands section (For Engineers accordion)
**Description**: Screenshot of AI assistant selection menu (showing Cursor selected)
**Purpose**: Shows how to select your AI assistant

### 6. command-palette.png
**Location in presentation**: Workflow Commands section (For Engineers accordion)
**Description**: Screenshot of Cursor command palette showing SpecKit commands
**Purpose**: Shows where to find SpecKit commands in Cursor

### 7. file-structure.png
**Location in presentation**: Project Structure section (For Engineers accordion)
**Description**: Screenshot of file explorer showing SpecKit spec files (spec.md, plan.md, tasks.md, etc.)
**Purpose**: Shows the organized file structure SpecKit creates

### 8. script-type-selection.png
**Location in presentation**: Script Type Selection section (For Engineers accordion)
**Description**: Screenshot of script type selection menu (showing sh/ps options)
**Purpose**: Shows the script type selection during setup

## Image Requirements

- **Format**: PNG (recommended) or JPG
- **Optimization**: Compress images for web (aim for < 500KB each)
- **Dimensions**: Minimum 800px width recommended for clarity
- **Naming**: Use exact filenames as listed above (case-sensitive)

## Adding Images

1. Save your screenshots with the exact filenames listed above
2. Place them in `speckit-guide/public/images/`
3. The images will automatically appear in the presentation

## Fallback Behavior

If an image is missing, the ImageCard component will show a broken image placeholder. Make sure all images are added before deploying to production.

## Testing

After adding images:
1. Run `npm run dev` in the `speckit-guide/` directory
2. Navigate to the "For Engineers" accordion
3. Expand each section to verify images display correctly
4. Test on mobile to ensure responsive image display works






