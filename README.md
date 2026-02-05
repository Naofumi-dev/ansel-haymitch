# 🎬 Ansel Haymitch M. Vivas - Christening Celebration V2

> *"May the odds be ever in your favor!"*

A modern, interactive christening invitation web app combining **Baby Driver** and **The Hunger Games** themes. Built with Next.js 14, Tailwind CSS, Framer Motion, and React Three Fiber for 3D elements.

## ✨ What's New in V2

- **3D Interactive Icons**: Animated SVG icons with optional 3D rendering using React Three Fiber
- **Embedded Google Maps**: Interactive maps for ceremony and reception venues
- **Modern Dark Theme**: Sleek glassmorphism design with gradient accents
- **Photo Gallery**: Lightbox gallery with navigation and thumbnails
- **Functional Trivia Game**: 6-question quiz with scoring
- **Gift Message Section**: Beautiful quote replacing the registry

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
ansel-christening-v2/
├── app/
│   ├── api/rsvp/route.ts    # RSVP API endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Icons3D.tsx          # 3D/SVG animated icons
│   ├── HeroSection.tsx      # Hero with countdown
│   ├── EventDetails.tsx     # Venues with embedded maps
│   ├── RSVPForm.tsx         # RSVP form with validation
│   ├── PhotoGallery.tsx     # Image gallery with lightbox
│   ├── TriviaGame.tsx       # Interactive quiz
│   ├── GiftMessage.tsx      # Quote section
│   ├── Navigation.tsx       # Sticky nav
│   ├── Footer.tsx           # Site footer
│   └── LoadingScreen.tsx    # Animated loader
├── public/images/           # Ansel's photos
└── package.json
```

## 🎨 Features

| Feature | Description |
|---------|-------------|
| 3D Icons | Animated car, bird, fire, arrow icons |
| Countdown | Live countdown to February 15, 2026 |
| Embedded Maps | Google Maps for both venues |
| Photo Gallery | Lightbox with navigation |
| Trivia Game | 6-question quiz with scoring |
| RSVP Form | Validated form with API endpoint |
| Responsive | Mobile-first design |
| Accessible | ARIA labels throughout |

## 🚀 Deploy to Vercel

### Option 1: GitHub + Vercel Dashboard

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ansel-christening-v2.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 📷 Adding More Photos

Add images to `/public/images/` and update `PhotoGallery.tsx`:

```typescript
const GALLERY_IMAGES = [
  { id: 1, src: '/images/newphoto.jpg', alt: 'Description', caption: 'Caption' },
  // ...
]
```

## 🗺️ Updating Map Embeds

The maps use Google Maps Embed API. To update locations, replace the iframe `src` in `EventDetails.tsx` with new embed URLs from Google Maps.

## 📝 Event Details

- **Date**: February 15, 2026
- **Ceremony**: Our Lady of La Salette Quasi-Parish, 10:00 AM
- **Reception**: 3M's Garden Resort and Pavilion, 12:00 PM onwards

---

Made with 💛 for Ansel's special day
