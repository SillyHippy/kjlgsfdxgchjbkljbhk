# YourServed Clone

This is a clone of the [yourserved.com](https://yourserved.com) website built with Next.js. The site is fully static and can be deployed to various platforms such as Cloudflare Pages, Vercel, and Netlify.

## Local Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build the site
bun run build
```

## Deployment Instructions

### Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Go to Workers & Pages > Create application > Pages
3. Connect your GitHub repository
4. Configure the build settings:
   - Framework preset: Next.js
   - Build command: `bun run build`
   - Build output directory: `out`
5. Set environment variables if needed
6. Deploy

### Vercel

1. Log in to your Vercel dashboard
2. Import your GitHub repository
3. The build settings should be automatically detected
4. Deploy

### Netlify

1. Log in to your Netlify dashboard
2. Add new site > Import an existing project
3. Connect to your GitHub repository
4. Configure the build settings:
   - Build command: `bun run build`
   - Publish directory: `out`
5. Deploy

## Static Export

The site is configured to use static export mode in Next.js, making it compatible with all static hosting providers. The build output is in the `out` directory.

## Project Structure

- `/src/app` - App router pages and layouts
- `/public/images` - Static images
- `/src/components` - React components
- `/src/components/layout` - Layout components like header and footer
