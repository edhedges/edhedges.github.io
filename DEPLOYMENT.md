# Deployment with Cloudflare Pages

This site deploys automatically to Cloudflare Pages.

## How It Works

**Simple workflow:**
1. Make changes locally
2. Commit to `dev` branch (or feature branch)
3. Push to GitHub
4. Cloudflare Pages automatically builds and deploys

## Production Deployment

**Production URL:** https://eddiehedges.dev

**Deployment:**
- Push to `dev` branch
- Cloudflare Pages automatically builds and deploys to production
- Usually takes 2-3 minutes

## Preview Deployments

**Feature branches** automatically get preview URLs:
- Format: `https://<commit-hash>.edhedges-dev.pages.dev`
- Cloudflare comments on PRs with preview link
- Updates automatically on every push

## Configuration

See `wrangler.toml` for Cloudflare Pages configuration:
- Build command: `npm run build`
- Output directory: `public`
- Node version: 20

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run develop
# Visit http://localhost:8000

# Build for production
npm run build

# Type check
npm run type-check
```

## No Manual Deployment Needed

Everything is automatic - just push to GitHub!
