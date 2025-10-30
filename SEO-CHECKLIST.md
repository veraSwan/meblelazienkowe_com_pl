# SEO Checklist for meblelazienkowe.com.pl

## ✅ Completed SEO Improvements

### Meta Tags & Structured Data
- ✅ Title, description, and keywords configured
- ✅ OpenGraph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Canonical URL configured
- ✅ Language set to Polish (`lang="pl"`)
- ✅ Robots meta tags (currently set to noindex/nofollow)

### Semantic HTML
- ✅ Proper heading hierarchy (h1, h2)
- ✅ Semantic HTML5 elements (header, main, section, footer, nav)
- ✅ ARIA labels for accessibility
- ✅ Microdata attributes (itemProp) for contact info

### Technical SEO
- ✅ robots.txt created (currently blocking all - ready for launch)
- ✅ sitemap.xml created
- ✅ Removed "use client" from main page for better SSG/SEO
- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with next/font

## 🔨 TODO Before Launch

### Required Files
1. **Favicon & Icons** - Add these files to `/public`:
   - `/favicon.ico` (16x16, 32x32, 48x48)
   - `/icon.svg` (scalable vector icon)
   - `/apple-icon.png` (180x180)
   - `/icon-192.png` and `/icon-512.png` for PWA

2. **Open Graph Image** - Currently using logo, but you should create:
   - Dedicated OG image: 1200x630px
   - Place at `/public/og-image.jpg` or `/public/og-image.png`
   - Update metadata in `app/layout.tsx` to reference correct path

### Configuration Changes for Launch

1. **Update robots.txt** (`/public/robots.txt`):
   ```txt
   User-agent: *
   Allow: /
   Sitemap: https://www.meblealazienkowe.com.pl/sitemap.xml
   ```

2. **Update metadata** in `app/layout.tsx`:
   ```typescript
   robots: {
     index: true,  // Change from false
     follow: true  // Change from false
   }
   ```

3. **Add verification codes** (when ready):
   - Google Search Console: Add verification code to metadata
   - Yandex Webmaster (optional for Polish market)

4. **Update sitemap.xml** as you add more pages

### Performance Optimisation
- ✅ Font preloading with `display: "swap"`
- Consider adding more images with proper alt text
- Consider lazy loading for below-fold content
- Test Core Web Vitals before launch

### Recommended Tools to Use

1. **Google Search Console** - Submit sitemap, monitor indexing
2. **Google PageSpeed Insights** - Test performance
3. **Schema Markup Validator** - Test structured data
4. **SEO Meta Inspector** - Verify all meta tags
5. **Mobile-Friendly Test** - Ensure mobile optimisation

## 📝 Notes

- Current setup is optimised for a "coming soon" page
- Robots are blocked to prevent premature indexing
- All SEO foundations are in place for launch
- Phone number: +48 786 886 819
- Email: kontakt@meblealazienkowe.com.pl

## 🚀 Launch Checklist

- [ ] Create favicon and app icons
- [ ] Create proper OG image (1200x630)
- [ ] Update robots.txt to allow indexing
- [ ] Change robots meta to index: true, follow: true
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google Search Console
- [ ] Test all meta tags with SEO tools
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Test mobile responsiveness
- [ ] Check Core Web Vitals
- [ ] Set up Google Analytics (optional)

