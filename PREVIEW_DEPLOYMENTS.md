# Preview Deployments with Cloudflare Pages

This repository is configured to use **Cloudflare Pages** for automatic preview deployments on every pull request.

---

## ✅ Current Setup: Cloudflare Pages

**Status:** Active and configured

Cloudflare Pages automatically creates preview deployments for:
- Every push to a non-production branch
- Every pull request to the `dev` branch

### How It Works

1. **Push to any branch** (other than `dev`)
2. **Cloudflare automatically builds** your site
3. **Preview URL is generated** - Format: `https://<commit-hash>.<site-name>.pages.dev`
4. **Cloudflare comments on your PR** with the preview link
5. **Updates automatically** on every new commit

### Finding Your Preview URL

**Option 1: Cloudflare Dashboard**
1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → Your site
3. Click **Deployments** tab
4. Find your branch/PR deployment

**Option 2: GitHub PR**
- Cloudflare automatically comments on PRs with preview URLs
- Check the PR conversation for the deployment comment

### Configuration

The `wrangler.toml` file in this repository configures:
- Build command: `npm run build`
- Build output directory: `public`
- Node version: 20
- Environment-specific settings

---

## 🎯 Benefits of Cloudflare Pages

- ✅ **Truly unlimited** - No build minute limits, no bandwidth limits
- ✅ **Automatic PR previews** - Every PR gets a unique URL
- ✅ **Blazing fast** - Global CDN with edge caching
- ✅ **Custom headers support** - PDFs render inline in browser
- ✅ **Zero maintenance** - Fully managed by Cloudflare
- ✅ **Free forever** - No credit card required

---

## 🌐 Alternative: Netlify

If you need Netlify-specific features (like built-in CMS OAuth), you can also use Netlify:

### Setup (5 minutes)

1. **Connect Repository**
   - Go to https://app.netlify.com/signup (free account)
   - Click "Add new site" → "Import from Git"
   - Select your GitHub repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `public`
   - Click "Deploy"

3. **Enable Deploy Previews**
   - Go to Site Settings → Build & Deploy
   - Deploy contexts → Deploy Previews
   - Enable "Any pull request against your production branch"

**Configuration file:** `netlify.toml` (already included)

---

## 📊 Comparison

| Feature | Cloudflare Pages (Active) | Netlify |
|---------|--------------------------|---------|
| **Build Minutes** | ✅ Unlimited | 300/month |
| **Bandwidth** | ✅ Unlimited | 100GB/month |
| **PR Previews** | ✅ Automatic | ✅ Automatic |
| **Setup Time** | ✅ Done | 5 min |
| **PR Comments** | ✅ Built-in | ✅ Built-in |
| **Custom Headers** | ✅ Yes | ✅ Yes |
| **Custom Domains** | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Automatic | ✅ Automatic |
| **CMS OAuth** | ⚠️ Manual | ✅ Built-in |

---

## 🧪 Testing Your Preview

Once deployed, test these critical areas:

### Content Verification
- [ ] All 22 blog posts load correctly
- [ ] Markdown renders properly
- [ ] Code blocks have syntax highlighting
- [ ] Images load and display correctly
- [ ] Resume PDF renders inline in browser

### URL Structure
- [ ] Blog post URLs match pattern `/blog/YYYY/MM/DD/slug`
- [ ] Home page loads at `/`
- [ ] Blog archive loads at `/blog`
- [ ] 404 page works for invalid URLs

### Visual Regression
- [ ] CSS loads and applies correctly
- [ ] Fonts (Nunito) load properly
- [ ] Colors match production (#f2864a links, #273640 text)
- [ ] Layout is responsive (test mobile, tablet, desktop)
- [ ] Header and footer display correctly

### Functionality
- [ ] Internal links work
- [ ] External links open correctly
- [ ] Social media links in header work
- [ ] Page navigation works

### CMS (if testing admin)
- [ ] `/admin` endpoint loads
- [ ] CMS interface displays
- [ ] Can view blog posts in CMS
- [ ] Markdown editor loads

### Performance
- [ ] Pages load quickly
- [ ] No console errors in browser DevTools
- [ ] Images are optimized
- [ ] JavaScript loads without errors

---

## 🔧 Troubleshooting

### Cloudflare Pages Build Fails

**"Module not found"**
- Check Node version is set to 20 in Cloudflare dashboard
- Verify `package.json` scripts are correct
- Review build logs in Cloudflare dashboard

**"Build exceeded timeout"**
- Free tier has 20-minute timeout (plenty for Gatsby)
- Check for infinite loops in gatsby-node.js
- Review build logs for specific errors

**Preview not updating**
- Clear Cloudflare cache in dashboard
- Force rebuild from Cloudflare dashboard
- Check GitHub webhook is configured correctly

### Netlify Build Fails

**"Build exceeded limit"**
- Free tier: 300 minutes/month
- Check usage in Netlify dashboard
- Consider using Cloudflare Pages (unlimited)

**"Module not found"**
- Verify all dependencies in `package.json`
- Check Node version in Netlify dashboard
- Review build logs for specific errors

---

## 💡 Pro Tips

### 1. Test Before Merging
Always preview PRs before merging to catch:
- Build failures
- Broken links
- Missing images
- CSS regressions
- JavaScript errors

### 2. Compare Side-by-Side
Open two browser windows:
- Production: `https://eddiehedges.dev`
- Preview: `https://<commit>.edhedges-dev.pages.dev`

Compare to ensure identical appearance.

### 3. Mobile Testing
Preview URLs work on any device:
- Open preview URL on your phone
- Test mobile CMS at `{preview-url}/admin`
- Verify responsive layout

### 4. Share with Others
Preview URLs are public - share for review:
- Send to collaborators
- Get feedback before merging
- Test on different devices/browsers

---

## 🆘 Need Help?

### Cloudflare Pages
- Docs: https://developers.cloudflare.com/pages
- Dashboard: https://dash.cloudflare.com
- Build logs: Available in deployment details

### Netlify
- Docs: https://docs.netlify.com
- Dashboard: https://app.netlify.com

---

## 🎉 Summary

**Current Setup:**
- ✅ Cloudflare Pages is configured and active
- ✅ Preview deployments happen automatically on every PR
- ✅ Unlimited builds and bandwidth
- ✅ Custom headers enabled (PDFs render inline)

**How to Use:**
1. Push to any branch or open a PR
2. Cloudflare automatically builds and deploys
3. Check PR comments or Cloudflare dashboard for preview URL
4. Test your changes before merging

**Production Deployment:**
- Production site deploys from `dev` branch
- Manual deployment: `npm run deploy` (pushes to `master` branch)
- GitHub Pages serves production site from `master` branch
