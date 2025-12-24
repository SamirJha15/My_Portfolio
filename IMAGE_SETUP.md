# Portfolio - Image Setup Guide

## Local Image Configuration

Your profile image is now configured to use a **local file** instead of an external CDN. This prevents future issues with external links.

### How to Add Your Profile Image:

1. **Prepare your image:**
   - Recommended format: `.jpg`, `.jpeg`, or `.png`
   - Recommended size: Square image (1024x1024px or larger)
   - Name it: `profile.jpg` (or keep any name, just update the import)

2. **Place the image in the assets folder:**
   ```
   src/assets/profile.jpg
   ```

3. **The image is imported at the top of Portfolio.jsx:**
   ```jsx
   import profileImage from '../assets/profile.jpg';
   ```

4. **If you want to use a different filename:**
   - Just update the import statement in [src/pages/Portfolio.jsx](src/pages/Portfolio.jsx#L6)
   - Change `profile.jpg` to your filename

### Current Setup:
- Image path: `src/assets/profile.jpg`
- Image component: Hero section (line 84-89)
- Image dimensions: 256px × 256px (circular)

### To Use:
Simply copy your profile photo to the `src/assets/` folder with the name `profile.jpg` and the portfolio will display it!
