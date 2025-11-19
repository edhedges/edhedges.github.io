# Free Preview Deployment Options

This guide covers **three free options** for automatically previewing pull requests before merging. All options are completely free and work automatically once configured.

---

## 🏆 Recommended: Cloudflare Pages (Best Free Option)

**Why Cloudflare Pages?**
- ✅ **Truly unlimited** - No build minute limits, no bandwidth limits
- ✅ **Automatic PR previews** - Every PR gets a unique URL
- ✅ **Blazing fast** - Global CDN with edge caching
- ✅ **Zero configuration** - Detects Gatsby automatically
- ✅ **Free forever** - No credit card required

### Setup (5 minutes)

1. **Connect Repository**
   - Go to https://dash.cloudflare.com/sign-up (free account)
   - Navigate to "Workers & Pages" → "Pages"
   - Click "Connect to Git"
   - Select your GitHub repository

2. **Configure Build**
   - Framework preset: **Gatsby**
   - Build command: `npm run build`
   - Build output: `public`
   - Click "Save and Deploy"

3. **Done!**
   - Every PR will automatically get a preview URL
   - Format: `https://abc123.edhedges-dev.pages.dev`
   - Comment posted on PR with preview link
   - Updates on every push

### Configuration File

Already included: `wrangler.toml`

---

## ⚡ Option 2: Automated Surge.sh via GitHub Actions

**Why Surge.sh?**
- ✅ **No account needed** - Works without SURGE_TOKEN
- ✅ **Fully automated** - GitHub Actions handles everything
- ✅ **PR comments** - Preview URL posted automatically
- ✅ **Free for public sites** - No limits for open source
- ✅ **Zero setup** - Just enable GitHub Actions

### Setup (Already Done!)

The GitHub Actions workflow is **already configured** in this PR:

`.github/workflows/preview.yml`

**How it works:**
1. PR is opened/updated
2. GitHub Actions builds your site
3. Deploys to `eddie-hedges-pr-{NUMBER}.surge.sh`
4. Comments on PR with preview URL
5. Updates automatically on new commits

**To enable:**
- ✅ No action needed - it's already set up!
- 📝 Optional: Add `SURGE_TOKEN` secret for private previews

### Get a Surge Token (Optional)

For private deployments or rate limit protection:

```bash
# Install surge
npm install -g surge

# Create account and get token
surge token
```

Then add token to GitHub:
1. Go to repo Settings → Secrets → Actions
2. Create new secret: `SURGE_TOKEN`
3. Paste your token

---

## 🌐 Option 3: Netlify (Already Configured)

**Why Netlify?**
- ✅ **Industry standard** - Most popular for static sites
- ✅ **300 build minutes/month** - Free tier
- ✅ **100GB bandwidth/month** - Free tier
- ✅ **Automatic PR previews**
- ✅ **CMS OAuth included** - For Netlify CMS auth

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

### Configuration File

Already included: `netlify.toml`

---

## 📊 Comparison

| Feature | Cloudflare Pages | Surge.sh | Netlify |
|---------|-----------------|----------|---------|
| **Build Minutes** | ✅ Unlimited | ✅ Unlimited | 300/month |
| **Bandwidth** | ✅ Unlimited | ✅ Unlimited | 100GB/month |
| **PR Previews** | ✅ Automatic | ✅ Via Actions | ✅ Automatic |
| **Setup Time** | 5 min | 0 min (done!) | 5 min |
| **Account Required** | Yes (free) | No | Yes (free) |
| **PR Comments** | ✅ Built-in | ✅ Via Actions | ✅ Built-in |
| **Custom Domains** | ✅ Yes | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| **CMS OAuth** | ⚠️ Manual | ⚠️ Manual | ✅ Built-in |

---

## 🚀 Quick Start: Use Surge.sh (Zero Setup)

The easiest option **is already working** in this PR!

1. **This PR already has preview deployment configured**
2. **When you open/update the PR, GitHub Actions will:**
   - Build your site
   - Deploy to `eddie-hedges-pr-{NUMBER}.surge.sh`
   - Comment with preview URL
3. **Click the URL in the PR comment to preview**

No setup, no account, no configuration needed!

---

## 🎯 Recommended Workflow

### For This PR (Immediate)
Use **Surge.sh** (already configured):
- ✅ No setup required
- ✅ Works immediately
- ✅ Preview URL in PR comments

### For Long-Term (After Merge)
Set up **Cloudflare Pages**:
- ✅ Best performance
- ✅ Unlimited everything
- ✅ Professional CDN
- ✅ No usage limits ever

---

## 📝 Preview URL Formats

Each service provides a unique preview URL:

### Cloudflare Pages
```
https://abc123.edhedges-dev.pages.dev
https://pr-123.edhedges-dev.pages.dev
```

### Surge.sh
```
https://eddie-hedges-pr-123.surge.sh
```

### Netlify
```
https://deploy-preview-123--eddie-hedges.netlify.app
```

---

## 🧪 Testing Your Preview

Once deployed, test these critical areas:

### Content Verification
- [ ] All 22 blog posts load correctly
- [ ] Markdown renders properly
- [ ] Code blocks have syntax highlighting
- [ ] Images load and display correctly

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

### Surge.sh Preview Fails

**"Error: Not Found"**
- This is normal on first deploy
- Wait 2-3 minutes for DNS propagation
- Refresh the page

**"Rate limited"**
- Add `SURGE_TOKEN` secret to GitHub
- See "Get a Surge Token" section above

### Cloudflare Pages Build Fails

**"Module not found"**
- Check Node version is set to 20
- Verify `package.json` scripts are correct
- Look at build logs in Cloudflare dashboard

**"Build exceeded timeout"**
- Free tier has 20-minute timeout (plenty for Gatsby)
- Check for infinite loops in gatsby-node.js

### Netlify Build Fails

**"Build exceeded limit"**
- Free tier: 300 minutes/month
- Check usage in Netlify dashboard
- Consider Cloudflare Pages (unlimited)

**"Module not found"**
- Add `.npmrc` to repo (already done)
- Verify all dependencies in `package.json`

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
- Preview: `https://eddie-hedges-pr-{NUMBER}.surge.sh`

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

### Surge.sh Issues
- Docs: https://surge.sh/help
- GitHub Actions logs: Check workflow run details

### Cloudflare Pages Issues
- Docs: https://developers.cloudflare.com/pages
- Dashboard: https://dash.cloudflare.com

### Netlify Issues
- Docs: https://docs.netlify.com
- Dashboard: https://app.netlify.com

---

## 🎉 Summary

You have **three free options** for preview deployments:

1. **Surge.sh** ← Already configured! Zero setup!
2. **Cloudflare Pages** ← Best long-term (unlimited)
3. **Netlify** ← Good for CMS OAuth integration

**For this PR:** Surge.sh preview will work automatically when you open the PR.

**After merging:** Set up Cloudflare Pages for unlimited, production-grade previews.

All three are free forever. Choose based on your needs!
