# Deploying to Cloudflare Pages

This guide provides detailed instructions for deploying the Yourserved clone to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier is sufficient)
- A GitHub repository with your code pushed to it

## Deployment Steps

1. **Push your code to GitHub**:
   Make sure all the code is committed and pushed to your GitHub repository.

2. **Log in to Cloudflare Dashboard**:
   Visit https://dash.cloudflare.com and log in to your account.

3. **Navigate to Pages**:
   From the sidebar, click on "Pages".

4. **Create a new project**:
   Click on "Create a project" button and select "Connect to Git".

5. **Connect your GitHub account**:
   Follow the prompts to connect your GitHub account and select the repository where your code is hosted.

6. **Configure build settings**:
   - **Project name**: Choose a name for your project (e.g., "yourserved-clone")
   - **Production branch**: Select the branch you want to deploy (usually "main" or "master")
   - **Framework preset**: Select "Vite"
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: Leave blank or set to `/` (root of repository)

7. **Environment variables**:
   Add the following environment variable:
   - `NODE_VERSION`: `16`

8. **Deploy**:
   Click on "Save and Deploy" to start the deployment process.

9. **Monitor deployment**:
   You'll see a deployment log showing the progress. The first deployment may take a few minutes.

10. **Access your site**:
    Once deployment is successful, you'll see a URL (e.g., `https://yourserved-clone.pages.dev`) where your site is available.

## Troubleshooting

If you encounter any issues during deployment, check the following:

### Build command not found
Make sure `vite` is in your `dependencies` (not just `devDependencies`) in package.json.

### Routing issues
If pages aren't loading correctly when accessed directly, ensure the `_redirects` file is properly formatted.

### Assets not loading
Check that the paths to assets in your code are correct. Remember that Cloudflare Pages serves from the root, so paths should begin with `/`.

### Node.js version errors
If you see Node.js compatibility errors, you may need to downgrade some dependencies or set the `NODE_VERSION` environment variable to a compatible version.

## Useful Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)
- [Troubleshooting Cloudflare Pages Deployments](https://developers.cloudflare.com/pages/platform/troubleshooting/)
