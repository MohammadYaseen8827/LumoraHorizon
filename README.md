# Lumora Horizon Logistics Website

A professional logistics company website built with Vue.js 3, showcasing comprehensive shipping and transportation services across Iraq and worldwide.

## 🚀 Features

- **7 Core Services**: Air Freight, Sea Freight, Land Freight, Customs Clearance, Domestic Transportation, Packing/Storage/Insurance, Global Network
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Single Page Application**: Vue.js 3 with Vue Router for smooth navigation
- **Professional UI**: Clean, modern interface optimized for logistics industry
- **GitHub Pages Ready**: Configured for static site deployment

## 📦 Services Offered

1. **Air Freight** - Fast international shipping via Baghdad, Erbil, and Basra airports
2. **Sea Freight** - Cost-effective ocean shipping through Umm Qasr and Khor Al-Zubair ports
3. **Land Freight** - Reliable overland transport across Iraq and neighboring countries
4. **Customs Clearance** - Expert handling of import/export documentation and procedures
5. **Domestic Transportation** - Local delivery and distribution throughout Iraq
6. **Packing, Storage & Insurance** - Comprehensive cargo protection and warehousing
7. **Global Network** - Worldwide logistics partnerships and coverage

## 🛠️ Technology Stack

- **Frontend**: Vue.js 3, Vue Router 4
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite 6.x
- **Deployment**: GitHub Pages with GitHub Actions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohammadYaseen8827/LumoraHorizon.git
   cd LumoraHorizon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser and visit**: `http://localhost:5000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment**: 
   - GitHub Actions will automatically build and deploy your site
   - Site will be available at: `https://mohammadyaseen8827.github.io/LumoraHorizon/`

### Manual Deployment (Alternative):

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages

## 📁 Project Structure

```
LumoraHorizon/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── 404.html           # SPA routing fallback
├── src/
│   ├── assets/images/     # Logo and service icons
│   ├── components/        # Reusable Vue components
│   ├── views/            # Page components
│   ├── router/           # Vue Router configuration
│   ├── App.vue           # Root component
│   ├── main.js           # Application entry point
│   └── style.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors & Branding
- Primary colors are defined in `tailwind.config.js`
- Company branding assets are in `src/assets/images/`

### Content Updates
- Service descriptions can be updated in individual view files under `src/views/`
- Contact information is centralized in components

### Adding New Services
1. Create new view component in `src/views/`
2. Add route in `src/router/index.js`
3. Update navigation in `src/components/Navbar.vue`

## 📞 Contact Information

- **Phone**: +964 771 754 7000 (WhatsApp available)
- **Email**: info@lumorahorizon.com
- **Address**: Baghdad, Iraq

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Lumora Horizon Logistics** - Your trusted partner for comprehensive shipping and logistics solutions across Iraq and beyond.