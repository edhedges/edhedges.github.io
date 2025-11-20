# Preview Deployments with Cloudflare Pages

This repository uses **Cloudflare Pages** for automatic preview deployments on every pull request.

---

## ✅ How It Works

Cloudflare Pages automatically creates preview deployments for:
- Every push to a non-production branch
- Every pull request to the `dev` branch

### Automatic Process

1. **Push to any branch** (other than `dev`)
2. **Cloudflare automatically builds** your site
3. **Preview URL is generated** - Format: `https://<commit-hash>.<site-name>.pages.dev`
4. **Cloudflare comments on your PR** with the preview link
5. **Updates automatically** on every new commit

---

## 🔍 Finding Your Preview URL

### Option 1: Cloudflare Dashboard
1. Go to https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → Your site
3. Click **Deployments** tab
4. Find your branch/PR deployment

### Option 2: GitHub PR
- Cloudflare automatically comments on PRs with preview URLs
- Check the PR conversation for the deployment comment

---

## ⚙️ Configuration

The `wrangler.toml` file in this repository configures:

```toml
[build]
  command = "npm run build"
  publish = "public"

[build.environment]
  NODE_VERSION = "20"

[env.production]
  NODE_ENV = "production"

[env.preview]
  NODE_ENV = "development"
```

---

## 🎯 Benefits

- ✅ **Truly unlimited** - No build minute limits, no bandwidth limits
- ✅ **Automatic PR previews** - Every PR gets a unique URL
- ✅ **Blazing fast** - Global CDN with edge caching
- ✅ **Custom headers support** - PDFs render inline in browser
- ✅ **Zero maintenance** - Fully managed by Cloudflare
- ✅ **Free forever** - No credit card required
- ✅ **No GitHub Actions needed** - Cloudflare handles everything

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

### Build Fails

**"Module not found"**
- Check Node version is set to 20 in Cloudflare dashboard
- Verify `package.json` scripts are correct
- Review build logs in Cloudflare dashboard

**"Build exceeded timeout"**
- Free tier has 20-minute timeout (plenty for Gatsby)
- Check for infinite loops in gatsby-node.js
- Review build logs for specific errors

### Preview Not Updating

- Clear Cloudflare cache in dashboard
- Force rebuild from Cloudflare dashboard
- Check GitHub webhook is configured correctly

### Preview URL Not Found

- Wait 2-3 minutes for first deployment
- Check Cloudflare dashboard for build status
- Verify branch name doesn't conflict with production

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

**Cloudflare Pages Documentation**
- Docs: https://developers.cloudflare.com/pages
- Dashboard: https://dash.cloudflare.com
- Build logs: Available in deployment details

**Common Issues**
- Build logs show detailed error messages
- Check Node version matches `.nvmrc` (20)
- Verify all dependencies are in `package.json`
- Clear cache and retry if needed

---

## 🎉 Summary

**Current Setup:**
- ✅ Cloudflare Pages is configured and active
- ✅ Preview deployments happen automatically on every PR
- ✅ Unlimited builds and bandwidth
- ✅ Custom headers enabled (PDFs render inline)
- ✅ No maintenance required

**How to Use:**
1. Push to any branch or open a PR
2. Cloudflare automatically builds and deploys
3. Check PR comments or Cloudflare dashboard for preview URL
4. Test your changes before merging

**Production Deployment:**
- Production site deploys from `dev` branch to Cloudflare Pages
- Cloudflare automatically deploys on push to `dev`
- Your custom domain points to Cloudflare Pages
