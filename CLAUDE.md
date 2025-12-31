# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run develop      # Start dev server at localhost:8000
npm run build        # Production build
npm run type-check   # TypeScript checking (tsc --noEmit)
npm run format       # Prettier formatting
npm run clean        # Clear Gatsby cache
```

## Deployment

Pushes to `dev` branch auto-deploy to Cloudflare Pages. Feature branches get preview URLs.

## Architecture

This is a Gatsby 5 personal website with React 18 and TypeScript.

### Content System
- Blog posts live in `src/blog/` as Markdown files
- Frontmatter requires: `path`, `date`, `title`, `tags`
- `gatsby-node.js` generates pages from Markdown using `src/templates/blogTemplate.tsx`
- The `path` frontmatter field determines the URL (e.g., `/blog/2025/06/21/the-ai-tension`)

### Key Files
- `gatsby-config.js` - Site metadata and plugin configuration
- `gatsby-node.js` - Page generation from Markdown
- `src/templates/blogTemplate.tsx` - Blog post template with GraphQL query
- `src/pages/index.tsx` - Homepage with About, LatestBlogs, Methodology, Portfolio sections
- `src/pages/blog.tsx` - Blog archive listing
- `src/components/layout.tsx` - Shared layout wrapper

### Data Flow
Pages use GraphQL queries (via `gatsby-transformer-remark`) to fetch Markdown content. The `allMarkdownRemark` query sorted by date is the primary data source for blog listings.
