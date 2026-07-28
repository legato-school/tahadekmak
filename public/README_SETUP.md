# Setup Instructions

## Required Files

Before deploying, add these files to the `/public` directory:

### 1. Profile Images
- `profile.jpg` - Main hero profile image (recommended: 800x1000px)
- `profile-about.jpg` - About section image (recommended: 800x800px)
- `og-image.jpg` - Open Graph image for social sharing (recommended: 1200x630px)

You can use your LinkedIn profile picture or the image from your CV.

### 2. CV File
- `Taha-Dekmak-CV.pdf` - Your resume/CV in PDF format

### 3. Favicon
- `favicon.ico` - Website icon (16x16px or 32x32px)

## Image Optimization Tips

1. Compress images using tools like TinyPNG or Squoosh
2. Use WebP format for better performance
3. Keep file sizes under 500KB for faster loading

## DNS Setup

After deployment to Amplify:
1. Add custom domain: `tahadekmak.com`
2. Configure DNS records as per Amplify instructions
3. Wait for SSL certificate provisioning (~15 minutes)

## Blog Integration

The `/blogs` route will redirect to your Ghost CMS instance at:
- IP: 52.49.181.64
- After DNS: http://tahadekmak.com/blogs

Make sure Ghost is configured with the correct URL.
