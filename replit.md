# Portfolio Application

## Overview

This is a full-stack portfolio website built with React, Express, and PostgreSQL. The application showcases a developer's professional profile including education, skills, projects, internships, and achievements. It features a modern, responsive design with dark/light theme support, smooth animations, and a contact form for potential employers or collaborators to reach out.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management with built-in caching and synchronization
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming, custom animations, and responsive design
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations and migrations
- **Session Management**: Express sessions with PostgreSQL storage using connect-pg-simple
- **API Design**: RESTful endpoints with structured error handling and request/response logging
- **Development**: Hot module replacement and development middleware integration

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Data Models**: User authentication system with username/password storage
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Authentication & Security
- **Session-based Authentication**: Server-side session management with secure cookie storage
- **Password Security**: Encrypted password storage (implementation pending)
- **CORS Configuration**: Cross-origin resource sharing setup for API access
- **Input Validation**: Form validation using React Hook Form with Zod schema validation

### Development & Deployment
- **Development Server**: Vite dev server with Express API proxy
- **Build Process**: Separate client and server builds with esbuild for server bundling
- **Environment Configuration**: Environment-based configuration for database connections and API endpoints
- **Error Handling**: Comprehensive error boundaries and server error middleware
- **Logging**: Structured logging for API requests with performance metrics

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@tanstack/react-query**: Server state management with caching and synchronization
- **wouter**: Lightweight routing library for client-side navigation

### UI Component Libraries
- **@radix-ui/***: Comprehensive collection of accessible, unstyled UI primitives including dialogs, dropdowns, forms, and navigation components
- **tailwindcss**: Utility-first CSS framework for rapid styling and responsive design
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility for dynamic styling

### Development Tools
- **vite**: Modern build tool with fast HMR and optimized production builds
- **typescript**: Static type checking for improved development experience
- **esbuild**: Fast bundler for server-side code compilation
- **tsx**: TypeScript execution environment for development server

### Form & Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for external validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

### Utility Libraries
- **date-fns**: Modern date utility library for date manipulation and formatting
- **nanoid**: Secure URL-friendly unique string ID generator
- **connect-pg-simple**: PostgreSQL session store for Express sessions