# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 web application that serves as a minimalist CV/portfolio website with two main sections:
1. A personal resume/CV page at the root path
2. A presentation about AI-assisted coding at `/vibecoding`

The app uses TypeScript, React 18, Tailwind CSS, and shadcn/ui components. It includes GraphQL support via Apollo Server and Type-GraphQL.

## Development Commands

```bash
# Install dependencies (using yarn)
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## Architecture

### Directory Structure
- `/src/app/` - Next.js app router pages and layouts
  - `page.tsx` - Main CV/resume page
  - `/vibecoding/` - AI coding presentation with slides
  - `/graphql/` - GraphQL API endpoint
- `/src/components/` - Reusable React components
  - `/ui/` - shadcn/ui components (button, card, dialog, etc.)
- `/src/data/` - Resume data configuration
- `/src/apollo/` - GraphQL resolvers and type definitions
- `/public/` - Static assets including logos and images

### Key Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configuration, shadcn/ui components
- **Language**: TypeScript with decorators enabled for Type-GraphQL
- **GraphQL**: Apollo Server with Type-GraphQL for schema definition
- **Analytics**: Vercel Analytics integration

### Configuration Files
- `next.config.js` - Next.js configuration with HTTPS redirect for production domain (glebov.cv)
- `tailwind.config.js` - Tailwind CSS configuration with custom color scheme and animations
- `tsconfig.json` - TypeScript configuration with decorators enabled, path alias `@/*` for `/src/*`

### Data Configuration
The main resume data is configured in `/src/data/resume-data.tsx`. This single file contains all personal information, work experience, education, projects, and skills displayed on the CV page.

### Special Features
- **Print-friendly layout**: The CV page includes print-specific CSS classes
- **Command menu**: Interactive command palette for navigation (CommandMenu component)
- **Dark mode support**: Theme switching implemented in the vibecoding presentation
- **Internationalization**: Language switching (EN/PT) in the vibecoding presentation

## Important Notes
- The project uses Yarn as the package manager (yarn.lock present)
- TypeScript decorators are enabled for Type-GraphQL functionality
- The app includes a Docker setup (Dockerfile and docker-compose.yaml) for containerized deployment
- Images are configured to allow avatars.githubusercontent.com as a remote source