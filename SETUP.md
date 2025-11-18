# Setup Instructions

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- **Components** (`src/components/`) - All React components
- **Data** (`src/data/`) - Content configuration files
- **Hooks** (`src/hooks/`) - Custom React hooks
- **Styles** (`src/index.css`) - Global styles

## Customization

### Content Updates

Update content in `src/data/`:
- `personalInfo.js` - Personal information and contact
- `portfolio.js` - Project showcase
- `services.js` - Service offerings
- `testimonials.js` - Client testimonials
- `resume.js` - Education and work history
- `skills.js` - Technical skills

### Email Setup

Configure EmailJS in `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get credentials from [EmailJS](https://www.emailjs.com/)

## Deployment

1. Build:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting

## Assets

Place images in `public/assets/img/`

Access as: `/assets/img/your-image.jpg`

## Notes

- The project uses Vite for fast development and optimized builds
- All animations and interactions are handled through React hooks
- The design matches the original template but is now fully React-based
- No backend required - it's a static site that can be deployed anywhere

