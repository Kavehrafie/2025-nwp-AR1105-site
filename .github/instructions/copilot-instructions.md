# AI Coding Guidelines for AR1105 Course Site

## Project Overview
This is an Astro + Starlight documentation site for AR1105: Introduction to the History of Global Art I. It uses MDX content files for syllabus and course materials, with custom Astro components for course-specific features.

## Architecture
- **Framework**: Astro 5.x with Starlight integration
- **Content**: MDX files in `src/content/docs/` using content collections
- **Components**: Custom Astro components in `src/components/` (Hero, CourseDetails, GradeBrk, NWPLogo)
- **Styling**: Starlight theme with custom CSS overrides
- **Deployment**: Static site hosted at `25ar1105.kavehrafie.com` (configured in `astro.config.mjs`)

## Key Patterns
- **Custom Hero**: Override default with `./src/components/Hero.astro` to support `leadingText` frontmatter field
- **Component Imports**: Use `src/components/index.ts` to export components for MDX usage (e.g., `import { CourseDetails, GradeBrk } from '../../../components'`)
- **Grade Validation**: `GradeBrk.astro` component validates assignment weights total 100% and shows error aside if not
- **Frontmatter Extensions**: Content schema extended with optional `leadingText` string for hero customization
- **Responsive Design**: Components use CSS Grid with clamp() for fluid typography and layouts

## Development Workflow
- **Local Dev**: `npm run dev --host` (exposes to network for testing)
- **Build**: `npm run build` outputs to `./dist/`
- **Preview**: `npm run preview` serves built site locally
- **Content Editing**: Edit `.mdx` files in `src/content/docs/` with frontmatter for metadata
- **Component Development**: Place reusable components in `src/components/` and export via `index.ts`

## Conventions
- **File Structure**: Follow Astro conventions - components in `src/components/`, content in `src/content/docs/`
- **TypeScript**: Strict config (`astro/tsconfigs/strict`) - use interfaces for component props
- **Styling**: Use `@layer starlight.core` for theme overrides, CSS custom properties for consistency. Use starlight CSS variables (e.g., `var(--sl-color-primary)`)
- **Imports**: Prefer relative imports for components, absolute for Starlight components
- **Error Handling**: Use Starlight's `Aside` component for warnings/errors (e.g., grade weight validation)
- **Accessibility**: Ensure alt text for images, semantic HTML structure
- **Simplicity over Complexity**: Strive for simple solutions and avoid unnecessary complexity in design and implementation.

## Deployment
- **Domain**: `25ar1105.kavehrafie.com` via CNAME in `public/`
- **Build Output**: Static files in `./dist/` ready for any static host
- **Assets**: Images in `src/assets/`, static files in `public/`

Reference: `astro.config.mjs` for site config, `content.config.ts` for collections, `src/components/Hero.astro` for custom hero implementation.</content>
<parameter name="filePath">/home/tg/Desktop/Github/2025-nwp-AR1105/site/.github/copilot-instructions.md
