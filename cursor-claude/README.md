# SMG Trade Group - Inventory Liquidation Website

A modern, high-end website for SMG Trade Group, built with React, Tailwind CSS, and GSAP animations.

## Design Philosophy

**Design Archetype**: Corporate/Enterprise with Modern Edge
- Clean, professional, and trust-building
- Strong industrial imagery (shipping containers, warehouses)
- Clear conversion-focused hierarchy
- Sophisticated color palette

**Typography**:
- **Headings**: Space Grotesk (bold, geometric, modern)
- **Body**: Plus Jakarta Sans (clean, highly readable)

**Color Palette**:
- Off-white Background: `#FAFAF8`
- Deep Navy: `#0F172A`  
- Terracotta Accent: `#D97757`
- Charcoal: `#1E293B`
- Muted Gray: `#64748B`

## Features

### Sections Built
1. **Header** - Fixed navigation with smooth scroll behavior
2. **Hero** - Large headline with warehouse imagery, stats, and dual CTAs
3. **About** - "Why Choose Us" section with feature highlights
4. **Services** - 6 service cards with keywords optimized for SEO
5. **Process** - 4-step liquidation process with visual timeline
6. **CTA** - Bold call-to-action section with trust badges
7. **Contact** - Full contact form with business information
8. **Footer** - Comprehensive footer with links and copyright

### SEO Optimization

The content is optimized around these primary keywords from your keyword list:
- liquidate inventory
- sell excess inventory
- inventory liquidation
- overstock buyers
- warehouse liquidation
- bulk inventory buyers
- excess inventory buyer
- sell overstock inventory
- inventory liquidation services
- surplus inventory liquidation

### Technologies

- **React 19** - Modern React with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **Lucide React** - Beautiful icon system
- **Vite** - Fast build tool and dev server

## Getting Started

### Installation

```bash
cd Cursor-Auto
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Animations

The site features GSAP-powered animations:
- Staggered reveals on scroll
- Smooth section transitions
- Interactive hover states
- Timeline animations for process steps

## Customization

### Images
Currently using Unsplash placeholder images. Replace with client images in:
- `Hero.jsx` - Hero background and featured image
- `About.jsx` - About section image
- `CTA.jsx` - CTA background pattern

### Content
All content can be updated in the respective component files:
- `src/components/Hero.jsx` - Hero headline and stats
- `src/components/Services.jsx` - Service descriptions and keywords
- `src/components/Contact.jsx` - Contact information and form

### Colors
Update colors in `tailwind.config.js`:

```javascript
colors: {
  'warm-white': '#FAFAF8',
  'deep-navy': '#0F172A',
  'terracotta': '#D97757',
  'charcoal': '#1E293B',
  'muted-gray': '#64748B',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images via Unsplash CDN
- Code splitting via Vite
- Minified CSS and JS in production
- Lazy-loaded animations

## Next Steps

1. Replace placeholder images with client-provided assets
2. Add real contact form submission (integrate with backend/service)
3. Add Google Analytics tracking
4. Set up custom domain
5. Configure SEO meta tags for each section
6. Add schema markup for better SEO

## Support

For questions or issues, contact the development team.

---

Built with ❤️ for SMG Trade Group
