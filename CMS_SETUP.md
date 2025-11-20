# Decap CMS Setup Guide

This site now includes Decap CMS (formerly Netlify CMS) for easy content management, including mobile publishing!

## What is Decap CMS?

Decap CMS is a Git-based content management system that allows you to:
- Create and edit blog posts from any device (desktop, tablet, mobile)
- Use a user-friendly visual editor instead of manually editing markdown
- Publish directly from your phone's web browser
- All changes are committed directly to your GitHub repository

## Quick Start

### 1. Access the CMS

After deploying this site, navigate to:
```
https://eddiehedges.dev/admin
```

### 2. Authenticate with GitHub

The first time you visit, you'll be prompted to log in with GitHub. This uses OAuth, so you'll need to:

1. Click "Login with GitHub"
2. Authorize the application
3. You'll be redirected back to the CMS

### 3. Create a New Blog Post

1. Click "New Blog Post"
2. Fill in the fields:
   - **Path**: Format must be `/blog/YYYY/MM/DD/slug` (e.g., `/blog/2025/11/18/my-new-post`)
   - **Title**: Your post title
   - **Publish Date**: Auto-fills with today's date
   - **Tags**: Add relevant tags (AI, Software, etc.)
   - **Body**: Write your post using the markdown editor

3. Click "Publish" when ready

## Mobile Publishing Workflow

### From iPhone/Android:

1. Open your browser (Safari, Chrome, etc.)
2. Navigate to `https://eddiehedges.dev/admin`
3. Login with GitHub (only needed once - browser will remember)
4. Tap "New Blog Post"
5. Fill in the form using the mobile-optimized interface
6. Tap "Publish"
7. Decap commits the markdown file to GitHub
8. GitHub Pages automatically rebuilds your site (takes 1-2 minutes)

## Setup Requirements

### Enable GitHub OAuth (One-Time Setup)

To use Decap CMS with GitHub, you need to set up OAuth authentication:

#### Option 1: Use Netlify's OAuth Gateway (Easiest)

1. Create a free Netlify account at https://netlify.com
2. Go to https://app.netlify.com/sites/YOUR_SITE/settings/identity
3. Enable Identity
4. Under "Services" > "Git Gateway", enable it
5. Under "Registration preferences", select "Invite only" or "Open"

This allows Decap CMS to use Netlify's authentication proxy without deploying on Netlify.

#### Option 2: Self-Hosted OAuth Server

If you prefer not to use Netlify:

1. Deploy a GitHub OAuth proxy: https://github.com/vencax/netlify-cms-github-oauth-provider
2. Update `static/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: edhedges/edhedges.github.io
     branch: master
     base_url: https://your-oauth-server.com
     auth_endpoint: auth
   ```

#### Option 3: Local Development Only

For testing locally:

1. Uncomment `local_backend: true` in `static/admin/config.yml`
2. Run: `npx decap-server`
3. Run: `gatsby develop`
4. Access CMS at `http://localhost:8000/admin`

## CMS Features

### Rich Text Editor
- WYSIWYG markdown editing
- Image uploads
- Code syntax highlighting
- Preview mode

### Mobile-Optimized
- Responsive design works on all screen sizes
- Touch-friendly interface
- Save drafts
- Works offline (drafts saved locally)

### Git-Based
- All content stored in your GitHub repo
- Full version history
- No database required
- Easy to migrate or backup

## File Structure

```
src/
  blog/                          # Your markdown blog posts
    2025-06-21-the-ai-tension.md
  cms/
    cms.js                       # CMS initialization
static/
  admin/
    config.yml                   # CMS configuration
```

## Customization

Edit `static/admin/config.yml` to customize:

- Collections (add new content types beyond blog posts)
- Fields (change what metadata is required)
- Widgets (customize the editing experience)
- Preview templates

See: https://decapcms.org/docs/configuration-options/

## Troubleshooting

### "Failed to load config"
- Check that `static/admin/config.yml` is valid YAML
- Ensure the repo name matches exactly

### "Authentication failed"
- Verify GitHub OAuth is set up correctly
- Check that you have push access to the repo

### "Cannot read property of undefined"
- Clear browser cache
- Try incognito/private browsing mode
- Check browser console for specific errors

### Posts not appearing after publish
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check GitHub Actions for build errors
- Verify the post's frontmatter matches the expected format

## Security Notes

- Only users with GitHub write access to your repo can publish
- All edits are logged in Git history with author attribution
- OAuth tokens are stored securely in browser localStorage
- No content is stored on Decap's servers (it's all Git-based)

## Support

- Decap CMS Docs: https://decapcms.org/docs/
- Community: https://github.com/decaporg/decap-cms/discussions
- File issues: https://github.com/decaporg/decap-cms/issues
