# 🎬 Ansel Haymitch M. Vivas - Christening Celebration

> *"May the odds be ever in your favor!"*

A stunning, themed christening invitation web app combining the high-octane style of **Baby Driver** with the epic rebellion vibes of **The Hunger Games**. Built with Next.js, Tailwind CSS, and Framer Motion.

![Theme Preview](https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&h=400&fit=crop)

## ✨ Features

### 🏎️ Baby Driver Inspired
- Cool blues and reds color palette
- Racing stripe accents
- Music-sync aesthetic elements
- Getaway vibes with animated cars

### 🏹 Hunger Games Inspired
- Earthy forest greens and fire oranges
- Mockingjay-style emblems
- District-themed sections
- "Tribute" language throughout

### 🎉 Event Features
- **Hero Section**: Dramatic countdown timer with animated elements
- **Event Details**: Ceremony & reception info with themed cards
- **RSVP Form**: Full form with validation and themed styling
- **Photo Gallery**: Lightbox gallery with category filters
- **Trivia Game**: Fun quiz mixing movie trivia with baby themes
- **Gift Registry**: Themed gift suggestions and registry links
- **Mobile Responsive**: Fully optimized for all devices
- **Smooth Animations**: Framer Motion powered interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
```bash
cd ansel-christening-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ansel-christening-app/
├── app/
│   ├── api/
│   │   └── rsvp/
│   │       └── route.ts      # RSVP API endpoint
│   ├── globals.css           # Global styles & custom CSS
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── EventDetails.tsx      # Ceremony & reception info
│   ├── Footer.tsx            # Site footer
│   ├── GiftRegistry.tsx      # Gift suggestions & links
│   ├── HeroSection.tsx       # Hero with countdown
│   ├── LoadingScreen.tsx     # Animated loading state
│   ├── Navigation.tsx        # Sticky navigation
│   ├── PhotoGallery.tsx      # Image gallery with lightbox
│   ├── RSVPForm.tsx          # RSVP form with validation
│   └── TriviaGame.tsx        # Interactive trivia quiz
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts        # Tailwind with custom theme
└── tsconfig.json
```

## 🎨 Customization

### Event Details
Edit the configuration objects in each component:

**Hero Section** (`components/HeroSection.tsx`):
```typescript
const EVENT_CONFIG = {
  childName: 'Ansel Haymitch M. Vivas',
  eventDate: new Date('2026-03-15T10:00:00'),
  tagline: "Gear Up for Ansel's Epic Baptism Adventure!",
}
```

**Event Details** (`components/EventDetails.tsx`):
```typescript
const EVENT_DETAILS = {
  date: 'March 15, 2026',
  time: '10:00 AM',
  ceremony: {
    venue: 'St. Mary\'s Cathedral',
    address: '1111 Gough Street, San Francisco, CA 94109',
  },
  // ... more options
}
```

### Colors
The theme colors are defined in `tailwind.config.ts`:
- `driver-*`: Baby Driver inspired (blues, reds, chrome)
- `games-*`: Hunger Games inspired (forest, fire, gold)
- `ansel-*`: Combined palette

### Photos
Replace the placeholder images in `components/PhotoGallery.tsx`:
```typescript
const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/your-photo.jpg', // Add to public folder
    alt: 'Description',
    caption: 'Caption text',
    category: 'baby'
  },
  // ...
]
```

## 📝 RSVP Integration

The RSVP form currently logs submissions to the console. For production:

### Option 1: Formspree (Easiest)
1. Create a form at [formspree.io](https://formspree.io)
2. Update `components/RSVPForm.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Option 2: Google Sheets
1. Create a Google Apps Script web app
2. Add webhook URL to `.env.local`
3. Uncomment the Google Sheets code in `app/api/rsvp/route.ts`

### Option 3: Database
1. Set up MongoDB, PostgreSQL, or Supabase
2. Add database client to the API route
3. Store RSVPs in your database

## 🚀 Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/ansel-christening.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login & Deploy**
```bash
vercel login
vercel
```

3. **Follow the prompts**
   - Select your project
   - Confirm settings
   - Wait for deployment

### Environment Variables
Add any required environment variables in the Vercel dashboard:
- Settings → Environment Variables

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 🙏 Credits

- **Fonts**: Playfair Display, Oswald, Source Sans 3 (Google Fonts)
- **Icons**: Emoji icons
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Images**: Unsplash (placeholders)

## 📄 License

This project is created for personal use. Feel free to use it as inspiration for your own events!

---

Made with 💛 for Ansel's special day

*"May the odds be ever in your favor!"*
