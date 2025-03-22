# Yourserved.com Clone

This is a complete functional clone of the yourserved.com website, built with React, Vite, and Tailwind CSS.

## Features

- Fully responsive design that works on all device sizes
- Interactive navigation with mobile-friendly menu
- Contact form with validation and captcha
- All pages and sections from the original site

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+

### Installation

```bash
# Using npm
npm install

# Using Bun (recommended)
bun install
```

### Development

```bash
# Using npm
npm run dev

# Using Bun
bun run dev
```

### Build

```bash
# Using npm
npm run build

# Using Bun
bun run build
```

## Deployment Instructions

### Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to Cloudflare Dashboard
3. Navigate to Pages and create a new project
4. Connect to your GitHub repository
5. Configure the build settings:
   - Framework preset: Vite
   - Build command: `bun run build` or `npm run build`
   - Build output directory: `dist`
6. Deploy!

### Vercel

1. Push your code to a GitHub repository
2. Log in to Vercel Dashboard
3. Create a new project and import your repository
4. Configure the build settings:
   - Framework preset: Vite
   - Build command: `bun run build` or `npm run build`
   - Output directory: `dist`
5. Deploy!

### Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify Dashboard
3. Create a new site from Git
4. Connect to your GitHub repository
5. Configure the build settings:
   - Build command: `bun run build` or `npm run build`
   - Publish directory: `dist`
6. Deploy!

## Project Structure

- `/src` - React application source code
  - `/components` - Reusable UI components
  - `/layouts` - Page layout components
  - `/pages` - Individual page components
- `/public` - Static assets and images

## License

This project is licensed under the MIT License.
