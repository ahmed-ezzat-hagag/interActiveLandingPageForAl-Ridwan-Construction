# Al-Ridwan Construction - Premium Landing Page

A modern, luxury construction company landing page built with React, Tailwind CSS, and Framer Motion animations.

## 🎨 Features

- **Modern Design**: Premium dark navy, white, and gold color palette
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility
- **Performance**: Optimized bundle size with Vite
- **Professional**: Industry-standard construction/engineering visuals

## 📋 Sections

1. **Hero Section** - Full-width hero with CTA buttons and statistics
2. **About Us** - Company background and achievements
3. **Services** - 6 service cards with icons and hover effects
4. **Portfolio** - Project showcase with category filters
5. **Why Choose Us** - Key differentiators and features
6. **Testimonials** - Client testimonials slider
7. **Process Timeline** - 4-step project workflow
8. **Contact** - Contact form and company information
9. **Footer** - Navigation and social links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **React Icons** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── ProcessTimeline.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   └── index.css        # Global styles
├── data/                # Data files (optional)
├── App.jsx
└── main.jsx

public/                  # Static files
index.html              # Entry HTML
```

## 🎯 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
- Primary: `#1a1f2e` (Dark Navy)
- Gold: `#d4af37`
- Accent: `#f39c12`

### Content
Update content in each component's JSX file. Component data is hardcoded for easy customization.

### Contact Information
Update these placeholders:
- Phone: `+971 XX XXX XXXX`
- Email: `info@alridwan.com`
- Address: `Dubai, UAE`
- WhatsApp link: Replace `your-phone-number` in CTA buttons

### Google Map
Update the iframe src in `Contact.jsx` with your actual location

## 🎨 Design System

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Components
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button with border
- `.glass-effect` - Frosted glass effect
- `.card-hover` - Card hover animations
- `.gradient-text` - Gold gradient text

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Features

- ✅ Modern luxury design
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Clean, reusable components
- ✅ Easy to customize
- ✅ Professional construction theme

## 🔧 Performance Optimization

- Code splitting with Vite
- Lazy loading with React.lazy (optional)
- Optimized images and SVGs
- Minimal dependencies
- Production-ready build

## 📄 License

This project is open source and available for commercial use.

## 🤝 Support

For customization or modifications, all components are well-structured and documented. Feel free to modify the components, styling, and content to match your specific needs.

---

**Built with ❤️ for Al-Ridwan Construction**
