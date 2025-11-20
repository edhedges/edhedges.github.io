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
- ✅ **Fully automated** - GitHub Actions handles everything
- ✅ **PR comments** - Preview URL posted automatically
- ✅ **Free for public sites** - No limits for open source
- ✅ **Fast setup** - 2 minutes to configure

### Setup (2 minutes)

**⚠️ SURGE_TOKEN Required:** Surge.sh now requires authentication for deployments.

**Step 1: Get Your Surge Token**

```bash
# Install surge globally
npm install -g surge

# Create account and get token (follow prompts)
surge token
```

This will:
1. Prompt you to create a free Surge.sh account (email + password)
2. Display your authentication token
3. Copy the token for the next step

**Step 2: Add Token to GitHub**

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `SURGE_TOKEN`
5. Value: Paste the token from Step 1
6. Click **Add secret**

**Step 3: Done!**

The GitHub Actions workflow is already configured in `.github/workflows/preview.yml`

**How it works:**
1. PR is opened/updated
2. GitHub Actions builds your site
3. Deploys to `eddie-hedges-pr-{NUMBER}.surge.sh`
4. Comments on PR with preview URL
5. Updates automatically on new commits

**Workflow Configuration:**

The workflow automatically:
- ✅ Checks for `SURGE_TOKEN` secret
- ✅ Deploys if token exists, skips if missing
- ✅ Posts helpful comment with artifact download link if token not configured
- ✅ Updates PR with preview URL on successful deployment

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
| **Setup Time** | 5 min | 2 min (token) | 5 min |
| **Account Required** | Yes (free) | Yes (free) | Yes (free) |
| **PR Comments** | ✅ Built-in | ✅ Via Actions | ✅ Built-in |
| **Custom Headers** | ✅ Yes | ❌ No | ✅ Yes |
| **Custom Domains** | ✅ Yes | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| **CMS OAuth** | ⚠️ Manual | ⚠️ Manual | ✅ Built-in |

---

## 🚀 Quick Start: Use Surge.sh (2-Minute Setup)

The workflow is already configured - just add your token!

1. **Get your Surge token:**
   ```bash
   npm install -g surge && surge token
   ```

2. **Add to GitHub Secrets:**
   - Go to repo **Settings** → **Secrets and variables** → **Actions**
   - Create secret: `SURGE_TOKEN` with your token

3. **Done! When you open/update the PR, GitHub Actions will:**
   - Build your site
   - Deploy to `eddie-hedges-pr-{NUMBER}.surge.sh`
   - Comment on PR with preview URL

---

## 🎯 Recommended Workflow

### For This PR (Immediate)
Use **Surge.sh** (workflow pre-configured):
- ✅ Minimal setup - just add token
- ✅ Works in 2 minutes
- ✅ Preview URL in PR comments
- ✅ Free forever for public sites

### For Long-Term (After Merge)
Set up **Cloudflare Pages**:
- ✅ Best performance
- ✅ Unlimited everything
- ✅ Professional CDN
- ✅ No usage limits ever
- ✅ Automatic PR previews

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

**"Project Not Found" or deployment skipped**
- **Cause:** `SURGE_TOKEN` not configured
- **Fix:** Add your Surge token to GitHub Secrets
  1. Run: `npm install -g surge && surge token`
  2. Copy the token
  3. Add to GitHub: Settings → Secrets → Actions → New secret
  4. Name: `SURGE_TOKEN`, Value: [your token]

**"Error: Not Found" after successful deployment**
- This is normal on first deploy
- Wait 2-3 minutes for DNS propagation
- Refresh the page

**Build artifacts available but no live preview**
- Check GitHub Actions logs for SURGE_TOKEN message
- Download artifacts from workflow run to test locally
- Add SURGE_TOKEN to enable live previews

**PDF files download instead of rendering inline**
- **Limitation:** Surge.sh doesn't support custom HTTP headers
- **Effect:** PDFs (like Resume) will download instead of displaying in browser
- **Workaround:** Production (GitHub Pages) serves PDFs inline correctly
- **Alternative:** Use Netlify or Cloudflare Pages for previews (both support custom headers)
- **Note:** This only affects preview deployments, not production

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

1. **Surge.sh** ← Workflow configured! Add token in 2 minutes!
2. **Cloudflare Pages** ← Best long-term (unlimited)
3. **Netlify** ← Good for CMS OAuth integration

**For this PR:**
- Add `SURGE_TOKEN` to GitHub Secrets (see "Quick Start" above)
- Surge.sh preview will deploy automatically on every commit

**After merging:**
- Set up Cloudflare Pages for unlimited, production-grade previews
- Or continue using Surge.sh if it meets your needs

All three are free forever. Choose based on your needs!

### SURGE_TOKEN Setup Reminder

```bash
# Quick setup (2 minutes):
npm install -g surge && surge token
# Copy the token, add to GitHub Secrets as SURGE_TOKEN
```
