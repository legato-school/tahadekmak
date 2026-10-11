# 🚀 Deployment Guide - Taha Dekmak Portfolio

Complete step-by-step guide to deploy your portfolio to AWS Amplify and configure the domain.

---

## ✅ What's Been Done

1. ✅ Created GitHub repository: `taha-digico/tahadekmak`
2. ✅ Built React portfolio with AWS-themed design
3. ✅ Pushed code to GitHub
4. ✅ Configured blog redirect to Ghost CMS (52.49.181.64)

---

## 📝 Before You Deploy

### Add Required Files to `/public` folder:

1. **Profile Image**:
   - Copy your photo to: `/public/taha.jpeg` (recommended: 800x800px or higher)
   - This will be used for both Hero and About sections

2. **CV/Resume**:
   - Add your CV as: `/public/TahaDekmakSSA2026.pdf`

3. **Social Share Image (Optional)**:
   - Copy social image to: `/public/og-image.jpg` (1200x630px for social sharing)

4. **Favicon**:
   - Add favicon as: `/public/favicon.ico` (32x32px)

**Quick command to copy your files:**
```bash
# Navigate to project
cd /Users/tahadekmak/Documents/logixdev/7jezle/tahadekmak/public

# Copy your images here
cp ~/path-to-your-photo.jpeg taha.jpeg
cp ~/path-to-your-cv.pdf TahaDekmakSSA2026.pdf
cp ~/path-to-og-image.jpg og-image.jpg  # optional
```

Then commit and push:
```bash
cd /Users/tahadekmak/Documents/logixdev/7jezle/tahadekmak
git add public/*
git commit -m "Add profile image and CV"
git push
```

---

## 🌐 Step 1: Deploy to AWS Amplify

### 1.1 Access AWS Amplify Console

1. Log into AWS Console: https://console.aws.amazon.com/
2. Region: **EU West (Ireland)** - eu-west-1
3. Search for and open: **AWS Amplify**

### 1.2: Create New App

1. Click: **"New app"** → **"Host web app"**

2. **Connect Repository**:
   - Source: **GitHub**
   - Click **"Authorize AWS Amplify"**
   - Select repository: **taha-digico/tahadekmak**
   - Branch: **main**
   - Click **"Next"**

3. **Configure Build Settings**:
   - App name: `tahadekmak-portfolio`
   - Build settings are auto-detected from `amplify.yml`
   - Click **"Next"**

4. **Review & Deploy**:
   - Review all settings
   - Click **"Save and deploy"**

5. **Wait for deployment** (~3-5 minutes):
   - Provision ✅
   - Build ✅
   - Deploy ✅
   - Verify ✅

6. **Get Amplify URL**:
   - You'll get a URL like: `https://main.d1234abcd.amplify.aws.com`
   - Test the site!

---

## 🎯 Step 2: Add Custom Domain (tahadekmak.com)

### 2.1: In Amplify Console

1. In your Amplify app, go to: **"Domain management"** (left menu)
2. Click: **"Add domain"**
3. Enter domain: `tahadekmak.com`
4. Click: **"Configure domain"**

5. **Domain settings**:
   - Root: `tahadekmak.com` → `main`
   - Subdomain: `www.tahadekmak.com` → `main`
   - Click: **"Save"**

6. **SSL Certificate**:
   - Amplify will automatically provision an SSL certificate
   - Status: "Creating SSL certificate..."
   - This takes ~15 minutes

7. **Get DNS Records**:
   - Amplify will show you DNS records to add
   - **Copy these records** - you'll need them for Spaceship

---

### 2.2: Configure DNS on Spaceship

1. Go to: https://www.spaceship.com/
2. Log in to your account
3. Navigate to: **Domains** → **tahadekmak.com** → **DNS Management**

4. **Add these records** (from Amplify):

   **Example records** (your actual records will be shown in Amplify):

   **Record 1 - CNAME for www:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `<value-from-amplify>.cloudfront.net`
   - TTL: `300` or Auto

   **Record 2 - ANAME/ALIAS for root** (if Spaceship supports it):
   - Type: `ANAME` or `ALIAS`
   - Name: `@` (root)
   - Value: `<value-from-amplify>.cloudfront.net`
   - TTL: `300` or Auto

   **OR if Spaceship doesn't support ANAME/ALIAS, use A record:**
   - Type: `A`
   - Name: `@`
   - Value: `<IP-from-amplify>`
   - TTL: `300`

5. **Remove any conflicting records**:
   - Remove old A records pointing to Ghost IP (52.49.181.64)
   - We'll handle Ghost separately

6. **Save changes**

---

### 2.3: Verify Domain Setup

1. Back in Amplify Console:
   - Wait for "Domain status" to show: **"Available"**
   - This can take 15-48 hours (usually ~1 hour)

2. **Check DNS propagation**:
   ```bash
   dig tahadekmak.com
   dig www.tahadekmak.com
   ```

3. **Test your site**:
   - https://tahadekmak.com ✅
   - https://www.tahadekmak.com ✅
   - Both should work with SSL!

---

## 📝 Step 3: Configure Blog Redirect

The blog redirect is already configured in the code (`public/_redirects`), but you need to update Ghost:

### 3.1: Update Ghost Configuration

SSH into your Ghost server:
```bash
ssh -i ~/Downloads/ghost-cms-key-ireland.pem ubuntu@52.49.181.64
```

Update the Ghost URL:
```bash
cd /opt/ghost
nano docker-compose.yml
```

Change:
```yaml
GHOST_URL=http://tahadekmak.com
```
to:
```yaml
GHOST_URL=https://tahadekmak.com/blogs
```

Restart Ghost:
```bash
docker-compose down
docker-compose up -d
```

### 3.2: Test Blog Access

After DNS propagation:
1. Go to: https://tahadekmak.com/blogs
2. It should redirect to your Ghost instance
3. Admin panel: https://tahadekmak.com/blogs/ghost

---

## 🔧 Step 4: Configure Amplify Rewrites (Advanced)

If the `_redirects` file doesn't work, configure rewrites in Amplify Console:

1. In Amplify app → **"Rewrites and redirects"**
2. Click: **"Edit"**
3. Add this rule:

   ```
   Source: /blogs/<*>
   Target: http://52.49.181.64/blogs/<*>
   Type: 200 (Proxy/Rewrite)
   ```

4. Click: **"Save"**

---

## 🎨 Step 5: Customize (Optional)

### Update Content

1. Edit files in `/src/components/` for any changes
2. Update stats, project counts, etc.
3. Commit and push - Amplify auto-deploys!

### Update Colors

Edit `/tailwind.config.js`:
```javascript
colors: {
  'aws-orange': '#FF9900',
  'aws-dark': '#232F3E',
  'aws-blue': '#146EB4',
}
```

---

## ✅ Final Checklist

- [ ] Added profile images to `/public`
- [ ] Added CV PDF to `/public`
- [ ] Added favicon to `/public`
- [ ] Pushed images to GitHub
- [ ] Deployed to Amplify
- [ ] Added custom domain in Amplify
- [ ] Configured DNS on Spaceship
- [ ] Waited for DNS propagation
- [ ] SSL certificate active
- [ ] Updated Ghost URL configuration
- [ ] Tested: https://tahadekmak.com ✅
- [ ] Tested: https://tahadekmak.com/blogs ✅
- [ ] Downloaded CV link works ✅

---

## 🆘 Troubleshooting

### Domain Not Working

**Issue**: "Domain not found" or "This site can't be reached"

**Solution**:
1. Check DNS propagation: https://dnschecker.org/
2. Verify Amplify domain status is "Available"
3. Wait up to 48 hours for full propagation (usually 1-2 hours)

### Blog Redirect Not Working

**Issue**: /blogs shows 404 or doesn't redirect

**Solution**:
1. Check `public/_redirects` file exists
2. Verify Ghost server is running: `ssh ubuntu@52.49.181.64 "cd /opt/ghost && docker-compose ps"`
3. Add Amplify rewrite rule (see Step 4)
4. Check Ghost URL is set to `https://tahadekmak.com/blogs`

### SSL Certificate Issues

**Issue**: "Your connection is not private"

**Solution**:
1. Wait 15-30 minutes for certificate provisioning
2. Check Amplify Console → Domain management → SSL status
3. Force refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Images Not Loading

**Issue**: Broken image icons on the site

**Solution**:
1. Verify images exist in `/public` folder
2. Check filenames match exactly:
   - `taha.jpeg` (profile photo)
   - `TahaDekmakSSA2026.pdf` (CV)
   - `og-image.jpg` (optional social share image)
3. Push to GitHub and redeploy

---

## 📞 Support

If you encounter issues:
- Check Amplify build logs in Console
- Review browser console for errors (F12)
- Verify all files are committed and pushed to GitHub

---

## 🎉 Success!

Your portfolio is now live at:
- **Main Site**: https://tahadekmak.com
- **Blog**: https://tahadekmak.com/blogs

**Cost**: AWS Amplify free tier covers:
- 1000 build minutes/month
- 15 GB storage
- 15 GB served/month

Perfect for a portfolio site!

---

**Deployed**: 2026-07-28  
**Stack**: React + Vite + Tailwind + AWS Amplify + Ghost CMS  
**Region**: EU West (Ireland)
