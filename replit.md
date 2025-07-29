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
- **Custom Colors**: Brand colors (lumora-beige: #8c1b1c, lumora-red: #f9d6a5) - colors swapped per user request
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

- July 27, 2025: Comprehensive image optimization with 80% quality compression
  - Compressed hapag-lloyd-ship.webp from 3.6MB to 665KB (82% reduction)
  - Optimized container-ship-port.jpg from 2.0MB to 526KB (74% reduction)
  - Compressed PNG images: air-cargo-loading.png and custom-clearance-example.png from 1.7MB to 204KB each (88% reduction)
  - Applied quality optimization to modern-warehouse.webp, red-truck.webp, truck-queue-customs.webp, warehouse-storage.webp, and fragile-packaging.webp
  - Maintained excellent visual quality while significantly reducing bandwidth usage
  - Hot module replacement automatically updated all compressed images across the website
  - Note: lumora-logo-final.webp requires special handling due to extremely large dimensions (11811x11811 pixels)
- July 27, 2025: Compressed team member images for optimal performance
  - Compressed emily.webp from 12MB to 54KB (99.5% reduction)
  - Compressed michel.webp from 12MB to 41KB (99.7% reduction)
  - Compressed sarah.webp from 8.9MB to 53KB (99.4% reduction)
  - Maintained high image quality while dramatically reducing page load times
  - Updated images used across Home and About pages with optimized versions
- July 27, 2025: Reverted to progressive video loading and implemented homepage performance optimizations
  - Reverted from simultaneous video loading back to progressive loading strategy to resolve heavy loading issues
  - Implemented optimized progressive loading: first video loads before auto-slide starts, others load staggered
  - Enhanced lazy loading for homepage images (testimonial photos, client logos)
  - Simplified client logos section: removed complex SVG graphics and hover animations
  - Removed heavy CSS animations (fade-in-up, card-hover-subtle, stagger effects) throughout homepage
  - Reduced component padding and sizes to speed up rendering
  - Changed video preload from "auto" to "metadata" for lighter initial loading
  - Optimized homepage components to reduce overall loading burden beyond just video slider
- July 27, 2025: Updated global networking video playback speed in homepage slider
  - Increased global networking video playback speed from 2.5x to 3x for faster presentation
  - Enhanced user experience with quicker video transitions in the hero slider
- July 27, 2025: Successfully completed migration from Replit Agent to Replit environment (fourth migration)
  - Upgraded Vite from 6.3.5 to 7.0.6 for improved compatibility and performance
  - Installed all required Node.js dependencies via package manager
  - Verified Vue.js 3 application functioning properly with Vite development server on port 5000
  - Confirmed hot module replacement and live reloading working correctly
  - Validated server running with proper host configuration (0.0.0.0) for external access
  - All existing functionality preserved including logistics services, branding, and contact information
  - Migration completed without any code errors or security vulnerabilities
- July 27, 2025: Enhanced global network branding and advanced performance optimization
  - Implemented professional global network map image across all locations: GlobalNetwork page header, Services page section, and Homepage services section
  - Updated Global Network page with prominent network visualization showing logistics connections and nodes
  - Applied new global network image to Services page Global Network section for consistent branding
  - Updated Homepage Specialized Services section with new global network background image
  - Implemented advanced lazy loading system for homepage videos using data-src attributes and on-demand loading
  - Added smart video preloading that loads only current and next 2 videos, dramatically reducing initial load time
  - Enhanced slider performance with optimized loading sequence: first video loads immediately, others load progressively
  - Reduced homepage initial bandwidth usage by up to 80% while maintaining smooth user experience
  - Added global networking video to homepage slider with 2.5x playback speed
  - Updated global networking image with new professional network visualization across all locations
  - Implemented comprehensive performance optimizations: lazy loading, reduced CSS animations, optimized video loading sequence
  - Enhanced homepage loading speed with requestIdleCallback and intelligent resource management
  - Compressed all homepage videos from 61MB to 1.6MB (97% reduction) using FFmpeg with optimized H.264 encoding
  - Replaced heavy image sections with lightweight placeholder elements to dramatically reduce initial load time
  - Streamlined content sections and reduced padding for faster rendering
- July 27, 2025: Standardized page headers and optimized video loading performance
  - Standardized all page headers (Contact, About, FAQ, Information Center, Global Network) to match Services page header style
  - Updated headers with consistent solid lumora-red background, white text, and lumora-beige description text
  - Applied clean, uniform design matching Services page: centered layout with no background images for professional consistency
  - Restored call and email icons/buttons to Contact page with proper styling and functionality
  - Added "Get in Touch" section with Call Now and Email Us buttons using brand colors
- July 27, 2025: Successfully completed migration from Replit Agent to Replit environment (third migration)
  - Fixed Vite configuration to allow current Replit domain (effd7dce-a22a-4f2d-9b8d-58e8b401b141-00-3mtmqoiwo1n37.kirk.replit.dev)
  - Installed all required Node.js dependencies via package manager
  - Simplified Vite config for better compatibility and removed legacy settings
  - Verified Vue.js 3 application functioning properly with Vite development server
  - Confirmed server running on port 5000 with hot module replacement
  - Resolved host blocking issues for seamless external access
  - All existing functionality preserved including logos, branding, and contact information
- July 27, 2025: Performance optimization and UI consistency improvements
  - Removed Department dropdown from Contact page form for streamlined user experience
  - Standardized all page headers (Contact, About, FAQ, Information Center) with consistent lumora-red background, font styling, and center alignment
  - Removed 13 unused image assets from src/assets/images/ directory to reduce bundle size
  - Optimized all 6 homepage slider videos with preload="metadata" for faster loading performance
  - Enhanced video loading efficiency while maintaining smooth transitions and visual quality
  - Cleaned up codebase and resolved CSS reference errors for improved development experience
- July 27, 2025: Enhanced branding with authentic partnership logos and consistent color scheme
  - Updated Contact page buttons (Call Now, Email Us) to use red/beige color scheme matching app identity
  - Updated FAQ page search button font color to red/beige for consistency
  - Replaced placeholder logos with authentic partnership logos in Global Network page: GLA, WCA, and JCtrans official logos
  - Updated About page Global Network section with authentic world map showing network connections and partner locations
  - Enhanced visual consistency across all partnership displays with professional logo integration
- July 27, 2025: Consistent header styling and Contact page cleanup
  - Applied creamy background (lumora-red color) to FAQ and Contact page headers for consistent branding across all pages
  - Removed logo section from Contact page header for cleaner presentation
  - Streamlined Contact page by removing Find Us map section, Book to Phone, View FAQ, and Download Company Brochure buttons
  - Maintained essential contact functionality with form and office information only
- July 27, 2025: Final design refinements for clean professional presentation
  - Removed caption from first slider slide to show only logo image for minimal branding impact
  - Updated Domestic Transportation service page sub-image to red-truck.webp for consistent truck fleet representation
  - Redesigned About page header with creamy background (lumora-red color) instead of warehouse image for cleaner appearance
  - Streamlined About page "Who We Are" section: removed logo image, converted to centered full-width text layout for better readability
  - Maintained professional styling with enhanced typography and spacing throughout About page
- July 27, 2025: Updated Domestic Transportation and Packing & Storage service images across website
  - Used truck-queue-customs.webp for Domestic Transportation across Home page services section, Services page section, and Domestic Transportation service page
  - Applied modern-warehouse.webp from home page services to Packing, Storage & Insurance page header and Services page section with caption "Professional packing, secure warehousing, and comprehensive cargo insurance"
  - Maintained consistent professional image branding across all service displays
- July 27, 2025: Major UI improvements and logo enhancements across website
  - Made logo full-size in first slider slide, taking entire slide area for maximum brand impact with restored company branding caption
  - Enlarged navbar and footer logos without red background for cleaner, more professional appearance
  - Updated footer: removed Privacy Policy, Terms of Service, Cookie Policy links; updated copyright to "© 2025 Lumora Horizon. All rights reserved."; removed social network icons
  - Cleaned up "Specialized Shipping Services to Iraq" section by removing all icons above captions, keeping only background image, caption text, and "Learn More" button for streamlined design
  - Applied icon removal to all 7 service cards maintaining consistent clean presentation
- July 27, 2025: Updated Custom Clearance service images across website with professional airport operations
  - Replaced Customs Clearance background image in Home page "Specialized Shipping Services" section with customs-clearance-main.webp
  - Updated Services page Customs Clearance section with main customs clearance image
  - Enhanced Customs Clearance service page with professional airport operations as hero background
  - Added new custom clearance example image showing cargo handling operations
  - Replaced main service image with customs clearance operations at Iraqi airports
  - Removed fragile packaging image and updated with authentic customs clearance visuals
  - Maintained consistent professional customs clearance branding across all service displays
- July 27, 2025: Updated Land Freight service images across website with professional red truck
  - Replaced Land Freight background image in Home page "Specialized Shipping Services" section
  - Updated Services page Land Freight section with new red truck image
  - Enhanced Land Freight service page main image with professional red truck photo
  - Switched images in Land Freight service page: red truck now as hero background, border crossing as main service image
  - Maintained consistent branding across all Land Freight service displays
  - All images now use red-truck.webp for cohesive Land Freight service representation
- July 27, 2025: Enhanced hero slider with comprehensive video content for all logistics services
  - Integrated 6 custom videos showcasing different logistics operations
  - Processed videos with FFmpeg for optimal 5-second slider timing: Air Freight (5s), Sea Freight (5.47s), Land Freight (5.4s), Customs Clearance (5.06s, 3x speed), Domestic Transportation (5s), Storage (5.1s, 2x speed)
  - Replaced static images with dynamic video content for engaging user experience
  - Configured autoplay, muted, and loop settings for seamless video presentation
  - Maintained all text overlays, styling, and navigation functionality
  - Updated Air Freight service page and Services page to use Emirates aircraft image from home page "Specialized Shipping Services" section for consistent branding
  - Enhanced Air Freight service page with airport-terminal.jpg and qatar-cargo.webp images to showcase professional aviation facilities and cargo operations
- July 27, 2025: Successfully completed migration from Replit Agent to Replit environment (third migration)
  - Installed all required Node.js dependencies via package manager
  - Verified Vue.js 3 application functioning properly with Vite development server
  - Confirmed server running on port 5000 with hot module replacement
  - No code errors detected during migration process
  - All existing functionality preserved including logos, branding, and contact information
- July 27, 2025: Complete website updates with logo, color scheme, contact information, and team restructuring
  - Replaced all placeholder logos with user-provided final logo (logo_1753606376561.jpg)
  - Updated navbar, footer, and home page hero slider with new logo
  - Swapped main color scheme: lumora-beige now uses red (#8c1b1c), lumora-red now uses creamy beige (#f9d6a5)
  - Color reversal affects all components throughout website automatically via Tailwind configuration
  - Updated all contact numbers to +964 771 754 7000 throughout the website
  - Updated WhatsApp and Telegram floating buttons with new number
  - Updated footer communication number and Contact page call button
  - Updated FAQ page contact information with authentic phone number
  - Removed Department Contacts section from Contact page per user request
  - Updated business hours to Sunday-Thursday 9:00 AM - 5:00 PM (Erbil Office)
  - Added Michael Hanna as Finance Manager to leadership team in About page
  - Expanded leadership grid from 4 to 5 members with updated layout
  - Maintained brand-consistent backgrounds and professional styling with new color palette
  - All logo implementations use JPG format with optimal quality and sizing
- July 25, 2025: Completed migration from Replit Agent to Replit environment
  - Successfully migrated Vue.js project with all dependencies installed
  - Removed Resources & Downloads section from Information Center page per user request
  - Removed Latest News & Updates section from Home page per user request
  - Added authentic professional team member photos to "Trusted by Industry Leaders" section
  - Replaced placeholder gray circles with real headshots of Sarah, Emily, and Michel
  - Updated all address information to Erbil Iraq location: "West Park Complex, 40 Meter, Next to Italian Village 1, Second Floor, Office 17, Erbil, Iraq"
  - Replaced leadership team with authentic members: Mahmoud Shaker (Founder), Ibrahem Ghanem (CEO), Lubna Al Omari (Operation Manager), Ahmed Ghanem (Key Account Manager)
  - Configured leadership section with 4-person grid layout and professional descriptions
  - Updated Information Center with enhanced equipment specifications and INCOTERMS details
  - Removed Ocean Tracking, Air Tracking, and Shipping Terms sections from Information Center
  - Removed action buttons from Equipment Size and INCOTERMS sections
  - Added comprehensive container specifications, land transport dimensions, and air freight ULD details
  - Enhanced INCOTERMS section with detailed explanations of key terms and risk transfer points
  - Implemented new PNG logos throughout website with brand-consistent backgrounds
  - Updated navbar logo with lumora-beige background for visibility and branding
  - Enhanced footer logo with subtle background styling
  - Updated home page hero slider with professional logo presentation and company tagline
  - Added branded logo elements to Contact and About pages with appropriate styling
  - All logos now use PNG format with consistent Lumora Horizon brand identity (beige/red theme)
  - Verified all components working correctly in standard Replit environment
  - Server running successfully on port 5000 with hot module replacement enabled
- July 23, 2025: Enhanced website with authentic logistics images
  - Added real air cargo, container ship, warehouse, and trucking images
  - Updated Air Freight page with airport terminal and cargo loading photos
  - Enhanced Sea Freight page with container ship and port operation images
  - Added warehouse photos to Warehousing page showing modern facilities
  - Updated Land Freight page with truck border crossing imagery
  - Created operations showcase section on homepage with authentic photos
- June 24, 2025: Completed migration from Replit Agent to standard Replit environment
  - Successfully migrated Vue.js project with all dependencies
  - Added Telegram contact button alongside WhatsApp (+964 771 754 7000)
  - Updated content across all service pages per user specifications
  - Modified truck fleet specifications and coverage areas
  - Replaced terminology for customs clearance and specialized cargo
  - Removed door-to-door delivery references throughout site
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