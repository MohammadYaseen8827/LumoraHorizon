# Lumora Horizon Logistics

## Overview

Lumora Horizon is a professional shipping and logistics company website built with Vue.js 3 and Vite. The application serves as a comprehensive platform showcasing various logistics services including ocean freight, air freight, land transport, warehousing, and custom clearance services.

## System Architecture

### Frontend Architecture
- **Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite 6.3.5 for fast development and optimized builds
- **Routing**: Vue Router 4 for single-page application navigation
- **Styling**: Tailwind CSS 4 with custom design system and PostCSS processing
- **Component Structure**: Modular Vue components with clear separation of concerns

### Key Components

#### Core Application Structure
- **App.vue**: Main application wrapper with navigation and footer
- **Router**: Centralized routing configuration for all pages
- **Components**: Reusable UI components (Navbar, Footer, Hero)
- **Views**: Page-level components for different services and sections

#### Design System
- **Custom Colors**: Brand colors (lumora-beige: #f9d6a5, lumora-red: #8c1b1c)
- **Typography**: Inter font family for consistent branding
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Animations**: CSS animations for enhanced user experience

#### Service Pages
- Ocean Freight Services
- Air Freight Services  
- Land Transport Services
- Warehousing Services
- Custom Clearance Services
- Information Center
- FAQ System

## Data Flow

### Static Content Architecture
- All content is currently static and embedded within Vue components
- Image assets stored in `/src/assets/images/` as SVG files
- Service information and company details hardcoded in templates
- Contact forms use Vue reactive data binding

### Navigation Flow
- Vue Router handles client-side routing
- Dropdown menus for service navigation
- Smooth scrolling and transition effects
- Mobile-responsive navigation with hamburger menu

## External Dependencies

### Core Dependencies
- **Vue 3.5.16**: Main frontend framework
- **Vue Router 4.5.1**: Client-side routing
- **Vite 6.3.5**: Build tool and development server
- **Tailwind CSS 4.1.8**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefixing

### Development Tools
- **@vitejs/plugin-vue**: Vue SFC support for Vite
- **@tailwindcss/forms**: Enhanced form styling
- **@tailwindcss/postcss**: PostCSS integration

## Deployment Strategy

### Development Environment
- **Port**: 5000 (configured in Vite and Replit)
- **Host**: 0.0.0.0 for external access
- **CORS**: Configured for development with wildcard origins
- **Hot Module Replacement**: Enabled for fast development

### Build Configuration
- **Output Directory**: dist/
- **Asset Directory**: assets/
- **Static Assets**: Optimized and fingerprinted
- **Code Splitting**: Automatic for better performance

### Replit Configuration
- **Runtime**: Node.js 20 with Nix package management
- **Workflow**: Parallel execution with Vite development server
- **Port Mapping**: Local port 5000 mapped to external port 80

## Recent Changes

- June 21, 2025: Implemented complete 7-service architecture with comprehensive content
  - Created all 7 services in correct order: Air Freight, Sea Freight, Land Freight, Customs Clearance, Domestic Transportation, Packing/Storage/Insurance, Global Network
  - Updated navbar dropdowns with new service structure and proper routing
  - Redesigned homepage services section with 7 service cards in 4+3 grid layout
  - Updated complete Services page with all 7 services and Iraq-focused content
  - Created individual service pages with detailed content for each service
  - Updated router configuration with all new service routes
- June 21, 2025: Updated branding with professional Lumora Horizon logos
  - Replaced SVG placeholder with authentic company logos
  - Implemented main logo in navbar and footer
  - Added logo variants for different use cases
  - Optimized logo sizing and positioning for responsive design
- June 21, 2025: Completely removed track shipment functionality
  - Removed TrackShipment.vue component and all related routes
  - Cleaned up navbar and footer track shipment links
  - Updated content to remove tracking references throughout site
  - Moved hero content from above slider to below for better flow
- June 21, 2025: Updated About Us page with new company positioning
  - Emphasized new-generation logistics with young energy and decade of experience
  - Added WCA, GLA, and JCTrans partnership mentions
  - Updated mission and vision to reflect Iraq-focused global trade
  - Added tagline "Local commitment. Global knowledge. Built for today."
- June 21, 2025: Enhanced Ocean Freight page with comprehensive service details
  - Added FCL/LCL shipping options with detailed descriptions
  - Implemented insurance coverage section with full-value policies
  - Created global shipping network section featuring partnerships
  - Added detailed network benefits and routing information
- June 21, 2025: Improved homepage slider functionality
  - Removed navigation arrows for cleaner auto-advance experience
  - Enhanced responsive design for mobile devices
  - Maintained 5-second auto-change with dot navigation
- June 21, 2025: Initial setup and branding updates

## User Preferences

Preferred communication style: Simple, everyday language.