# Jerry Lokoroi - Portfolio Website

My personal portfolio website showcasing my work as a Full-Stack Developer and Systems Administrator.

## About

This is my professional portfolio built with modern web technologies. It features my projects, skills, work experience, and client testimonials.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- JavaScript/ES6+

## Features

- Responsive design for all devices
- Smooth scroll animations
- Interactive portfolio gallery
- Contact form with email integration
- Dynamic typing effects
- Testimonials carousel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/jerrylokoroi/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
src/
 ├── components/     # React components
 ├── data/          # Content data files
 ├── hooks/         # Custom React hooks
 ├── App.jsx        # Main app component
 ├── main.jsx       # Entry point
 └── index.css      # Global styles
```

## Configuration

### Update Personal Information

Edit the files in `src/data/` to customize:
- `personalInfo.js` - Contact details and bio
- `portfolio.js` - Project showcase
- `services.js` - Services offered
- `testimonials.js` - Client feedback
- `resume.js` - Education and experience
- `skills.js` - Technical skills

### Email Configuration

Set up EmailJS credentials in `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

The built application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Azure Static Web Apps

## Contact

Jerry Lokoroi
- Email: jerrylokoroi@gmail.com
- Website: www.jerrylokoroi.com
- GitHub: [@jerrylokoroi](https://github.com/jerrylokoroi)
- LinkedIn: [jerry-lokoroi](https://www.linkedin.com/in/jerry-lokoroi/)

## License

© 2025 Jerry Lokoroi. All rights reserved.
- Name, title, contact information
- Social media links
- About section content

### Update Portfolio Items
Edit `src/data/portfolio.js` to add/modify portfolio projects.

### Update Skills
Edit `src/data/skills.js` to modify skills and percentages.

### Update Services
Edit `src/data/services.js` to modify services offered.

### Update Testimonials
Edit `src/data/testimonials.js` to add/modify client testimonials.

### Update Resume
Edit `src/data/resume.js` to update education and work experience.

### Colors & Styling
Modify `tailwind.config.js` and `src/index.css` to customize colors and styling.

## 📝 Notes

- Assets (images) should be placed in the `public/assets/` directory
- The project uses CSS variables for theming (defined in `src/index.css`)
- All animations and interactions are handled through React hooks
- The design matches the original HTML/CSS/JS template but is now fully React-based

## 📄 License

This project is based on the iPortfolio template by BootstrapMade.

## 👤 Author

Jerry Lokoroi - Full-Stack Developer & Systems Administrator

