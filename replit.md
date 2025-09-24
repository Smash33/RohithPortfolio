# Overview

This is a React-based portfolio website for Rohith S V, a Frontend Developer with 2 years of experience. The project is built using modern web technologies with a focus on simplicity and performance. It features a minimal, old-school aesthetic similar to maxmynter.com, with a monospace font and clean layout. The portfolio includes sections for work experience, projects, blog posts, and personal information, all sourced from structured data files.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript support via Vite build system
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **Styling**: Custom CSS with CSS variables for theming, plus Tailwind CSS for utility classes
- **UI Components**: Comprehensive shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Build Tool**: Vite with hot module replacement and development optimizations

## Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful endpoints with `/api` prefix
- **Database Integration**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Express sessions with PostgreSQL session storage via connect-pg-simple
- **Development**: Hot reload with Vite middleware integration in development mode

## Data Management
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User authentication system with username/password structure
- **Content**: Static JSON files for profile data and Markdown files for blog posts
- **File Structure**: Organized data directory with profile.json and posts/*.md files

## Styling System
- **Design Tokens**: CSS custom properties for colors, typography, and spacing
- **Typography**: Monospace font stack for retro aesthetic
- **Responsive Design**: Mobile-first approach with grid layouts
- **Component Styling**: Combination of utility classes and custom CSS modules
- **Theme Variables**: Comprehensive color system with light/dark mode support

## External Dependencies

- **UI Framework**: Radix UI primitives for accessible component foundations
- **Database**: Neon Database (PostgreSQL) for cloud-hosted data storage
- **Development Tools**: ESBuild for production bundling, TSX for TypeScript execution
- **Utility Libraries**: Class Variance Authority for conditional styling, Clsx for className management
- **Date Handling**: date-fns for date formatting and manipulation
- **Form Management**: React Hook Form with Zod validation resolvers
- **Icons**: Lucide React for consistent iconography
- **Embla Carousel**: For image/content carousels if needed
- **Deployment**: Optimized for Replit hosting with development banner and cartographer plugins