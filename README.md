# Taha Dekmak - Personal Portfolio

Professional portfolio website showcasing my expertise as an AWS Solutions Architect and DevSecOps Engineer.

## 🚀 Features

- **Modern React Application** built with Vite for optimal performance
- **AWS-Themed Design** with custom animations and gradients
- **Fully Responsive** - works perfectly on all devices
- **SEO Optimized** with meta tags and Open Graph support
- **Fast Loading** with optimized assets and lazy loading
- **Blog Integration** - `/blogs` redirects to Ghost CMS instance

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom AWS theme
- **Icons**: React Icons
- **Hosting**: AWS Amplify
- **Blog**: Ghost CMS (separate instance)

## 📋 Sections

1. **Hero** - Introduction with animated AWS icons
2. **About** - Professional background and journey
3. **Experience** - Work history and achievements
4. **Certifications** - AWS Golden Jacket (12x), Kubestronaut (5x), HashiCorp Terraform
5. **Skills** - Technical expertise across cloud, DevOps, and development
6. **Contact** - Ways to get in touch

## 🏗️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/taha-digico/tahadekmak.git
cd tahadekmak

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🌐 Deployment

This site is deployed on **AWS Amplify** with automatic deployments from the `main` branch.

### Blog Setup

The `/blogs` route is configured in `amplify.yml` to redirect to the Ghost CMS instance at `http://tahadekmak.com/blogs` (hosted separately on EC2).

## 📱 Contact

- **Email**: tahadekmakl4@gmail.com
- **Phone**: +961 70 356 025
- **LinkedIn**: [linkedin.com/in/taha-dekmak](https://www.linkedin.com/in/taha-dekmak/)
- **Location**: Beirut, Lebanon

## 📄 License

© 2026 Taha Dekmak. All rights reserved.
