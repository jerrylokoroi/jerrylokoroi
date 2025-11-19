# GitHub Pages Deployment Guide

## ⚠️ IMPORTANT: Environment Variables Setup

GitHub Pages is a static hosting service and **cannot access environment variables** from your local `.env` file.

### For EmailJS to work on GitHub Pages:

**Option 1: Use GitHub Secrets (Recommended for CI/CD)**
Not applicable for direct `gh-pages` deployment.

**Option 2: Hardcode values (Only for PUBLIC keys)**
Since EmailJS public keys are safe to expose, you can hardcode them:

```javascript
// In src/components/Contact.jsx, replace:
import.meta.env.VITE_EMAILJS_SERVICE_ID
// with:
'service_dafmcwp'

// And so on for other env variables
```

**Option 3: Use a backend API**
Set up a serverless function (Netlify/Vercel Functions) to handle email sending.

## 📋 Pre-Deployment Checklist

✅ All configuration files updated
✅ `gh-pages` package installed
✅ `.env` removed from git tracking
✅ Base path set to `/jerrylokoroi/`
✅ Deploy scripts added

## 🚀 Deployment Steps

### 1. Build and test locally:
```bash
npm run build
npm run preview
```

### 2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Create/update `gh-pages` branch
- Push the `dist` folder contents to GitHub Pages

### 3. Configure GitHub Repository:
1. Go to: https://github.com/jerrylokoroi/jerrylokoroi/settings/pages
2. Set **Source** to: `Deploy from a branch`
3. Select **Branch**: `gh-pages` and folder: `/ (root)`
4. Click **Save**

### 4. Access your site:
Your portfolio will be live at:
**https://jerrylokoroi.github.io/jerrylokoroi/**

## ⚡ Quick Commands

```bash
# Deploy to GitHub Pages
npm run deploy

# Build only
npm run build

# Local development
npm run dev
```

## 🔧 Troubleshooting

**Issue: Contact form not working**
- Solution: See "Environment Variables Setup" above

**Issue: 404 on refresh**
- Solution: This is normal for GitHub Pages with client-side routing
- Users should navigate from the home page

**Issue: Images not loading**
- Solution: Ensure all image paths start with `/assets/` (already configured)

**Issue: Deployment failed**
- Solution: Make sure you've committed all changes first:
  ```bash
  git add .
  git commit -m "Prepare for GitHub Pages deployment"
  git push origin main
  npm run deploy
  ```

## 📝 Notes

- The `dist` folder is auto-generated and shouldn't be committed to `main`
- The `gh-pages` branch is auto-managed by the deploy script
- Always test locally with `npm run preview` before deploying
- GitHub Pages may take 5-10 minutes to update after deployment
