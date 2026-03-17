# The Silent Scale

> **Status:** 🚧 In Development - Week 1 of 2  
> **Client:** FHW Venture Solutions LLC (Feven Haddis)  
> **Developer:** Jenni M Martin  
> **Started:** March 16, 2026

A minimal, conversion-focused landing page for creator monetization services. Single-page React site with custom CSS and subtle scroll-triggered shimmer animations.

---

## 🎯 Project Goal

Help micro-influencers (10k-100k followers) understand The Silent Scale's "Shadow Operator" service - building digital products behind the scenes while creators stay visible.

**Key Success Metrics:**

- Clear value proposition (what we do)
- Social proof (results achieved)
- Easy application process (contact form)
- Professional, trustworthy aesthetic

---

## 🛠 Tech Stack

- [x] React 18
- [x] Vite (development server)
- [x] Vanilla CSS (custom design system)
- [x] Google Fonts (Inter)
- [x] Intersection Observer API (shimmer animations)
- [ ] Formspree/Netlify Forms (contact form)

---

## 📋 Build Roadmap

### **WEEK 1: Foundation & Core Build**

#### ✅ Day 1: Setup & Planning (March 16)

- [x] Create Vite React project
- [x] Set up CSS system with color variables
- [x] Define color palette (#330C2F purple, #FFFFFF white, #6B6B6B gray)
- [x] Create README as task list
- [x] Review all client materials
- [ ] Clarify business name (Silent Scale vs Quiet Scale?)
- [ ] Confirm primary domain

#### Day 2: HTML Structure & Components (March 17)

- [x] Build ShimmerLine component (divider structure)
- [x] Implement Intersection Observer logic
- [x] Test scroll-triggered animation ✨
- [x] Create component folder structure
- [ ] Build NavBar component
- [ ] Build Hero component (headline, subtitle, CTA)
- [ ] Build ProofSection component (stats: $240K, 120%, 24.5%)
- [ ] Build ServicesSection component (3-phase process cards)
- [ ] Build CaseStudy component (Matthew Knight story)
- [ ] Wire up all components in App.jsx

**Success Check:** All content visible (ugly but structured)

#### Day 3: CSS Styling (March 18)

- [ ] Style navigation (fixed header, clean links)
- [ ] Style Hero section (64px heading, centered content)
- [ ] Style stats section (large numbers, grid layout)
- [ ] Style process cards (3-column grid, hover states)
- [ ] Style case study section (dark purple background option?)
- [ ] Style footer (dark background, centered)
- [ ] Add responsive breakpoints (mobile, tablet, desktop)

**Success Check:** Site looks professional on all devices

#### Day 4: Shimmer Line Animation (March 19)

- [ ] Implement Intersection Observer in ShimmerLine.jsx
- [ ] Add scroll-triggered shimmer animation
- [ ] Fine-tune timing (1.2 seconds)
- [ ] Test on scroll (shimmer triggers at 50% viewport)
- [ ] Add shimmer lines between all major sections
- [ ] Test shimmer effect on mobile

**Success Check:** Shimmer lines work smoothly on scroll

#### Day 5: Interactivity & Polish (March 20)

- [ ] Add smooth scroll between sections
- [ ] Add CTA button hover states
- [ ] Add process card hover effects (lift + border)
- [ ] Test all navigation links
- [ ] Add logo SVG to navigation
- [ ] Optimize logo for web (compress if needed)
- [ ] Add favicon

**Success Check:** All interactions smooth, logo integrated

---

### **WEEK 2: Content, Forms & Launch**

#### Day 6: Content Refinement (March 23)

- [ ] Review all copy with Feven
- [ ] Replace placeholder content with final text
- [ ] Confirm Matthew Knight case study is approved
- [ ] Add real testimonials (if available)
- [ ] Proofread ALL text for typos
- [ ] Update meta title and description

**Success Check:** All content final and approved

#### Day 7: Contact Form Integration (March 24)

- [ ] Build ContactForm component
- [ ] Style form (match design system)
- [ ] Add form validation (required fields)
- [ ] Choose form service (Formspre/Netlify/EmailJS)
- [ ] Integrate form backend
- [ ] Test form submission
- [ ] Add success/error messages
- [ ] Test email delivery to Feven's email

**Success Check:** Form works, emails arrive

#### Day 8: Performance & SEO (March 25)

- [ ] Optimize all images (compress, resize)
- [ ] Add alt text to all images
- [ ] Write meta description for SEO
- [ ] Add Open Graph tags (social sharing preview)
- [ ] Run Lighthouse audit
- [ ] Fix any performance issues (target 90+ score)
- [ ] Test page speed on slow connection
- [ ] Add schema markup (optional)

**Success Check:** Lighthouse score 90+, fast loading

#### Day 9: Final Polish & Testing (March 26)

- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (real phone)
- [ ] Tablet testing
- [ ] Test all links (internal and external)
- [ ] Test all buttons
- [ ] Final proofread
- [ ] Take screenshots for portfolio
- [ ] Record shimmer effect GIF

**Success Check:** Works perfectly everywhere

#### Day 10: Deployment (March 27)

- [ ] Build production version (`npm run build`)
- [ ] Choose hosting (Netlify/Vercel/GoDaddy)
- [ ] Deploy to hosting
- [ ] Set up custom domain (www.thesilentscale.com)
- [ ] Set up SSL (HTTPS)
- [ ] Test live site thoroughly
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)

**Success Check:** Site live, HTTPS working

---

## 🎨 Design System

### Color Palette

```css
--primary-600: #330C2F  /* Dark purple - text, lines, CTAs */
--primary-500: #3E2F5B  /* Mid purple - accents */
--white: #FFFFFF        /* Main background */
--grey-100: #F8F8F8     /* Section backgrounds */
--grey-600: #6B6B6B     /* Secondary text */
--gold-500: #C9A961     /* Shimmer effect (minimal use) */
```

### Typography

- **Headings:** Inter, 700 weight, Dark Purple
- **Body:** Inter, 400 weight, Gray
- **H1:** 64px → 40px (mobile) → 32px (small mobile)
- **Body:** 18px (1.125rem)

### Key Features

- **Shimmer Lines:** 1px dark purple, 2/3 page width, subtle white shimmer on scroll
- **Minimal Animations:** Scroll-triggered only, no constant movement
- **Mobile-First:** Responsive from 320px to 1440px+

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
the-silent-scale/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ShimmerLine.jsx
│   │   ├── ProofSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css          # All styles here
│   └── main.jsx
├── public/
│   └── logo.svg
├── docs/
│   └── css-guide.pdf      # Reference documentation
├── index.html
├── package.json
└── README.md              # This file
```

---

## 📝 Content Sections

1. **Hero**

   - Headline: "Turn Your Influence Into Automated Revenue"
   - Subtitle: "We build and manage digital products for creators"
   - CTA: "Book Free Audit"

2. **Shimmer Line** (divider)

3. **Proof/Stats**

   - $240K Annual Revenue
   - 120% Growth Rate
   - 24.5% Conversion Rate

4. **Shimmer Line** (divider)

5. **Services** (3-Phase Process)

   - Phase 01: Audit
   - Phase 02: Build
   - Phase 03: Scale

6. **Shimmer Line** (divider)

7. **Case Study**

   - Matthew Knight: $1K → $12K monthly

8. **Shimmer Line** (divider)

9. **Final CTA**

   - "Ready to Scale?"
   - Application form or link

10. **Footer**
    - Copyright, links

---

## 🐛 Known Issues

- [ ] None yet (will track here as they arise)

---

## ❓ Open Questions for Client

- [ ] Business name: "The Silent Scale" or "The Quiet Scale"?
- [ ] Primary domain: thesilentscale.com or thequietscale.com?
- [ ] Is Matthew Knight case study real/approved?
- [ ] Do you have real testimonials to add?
- [ ] Service pricing: show on site or keep "apply to learn more"?
- [ ] Form destination: Feven's email (haddisfeven@gmail.com)?

---

## 📸 Screenshots

_Will add as project progresses_

- [ ] Desktop view
- [ ] Mobile view
- [ ] Shimmer effect GIF
- [ ] Form interaction

---

## 🤝 Handoff Checklist

Before giving to client:

- [ ] All content approved
- [ ] Form tested and working
- [ ] Site live on chosen domain
- [ ] SSL certificate active
- [ ] Analytics set up (optional)
- [ ] Brief "how to update" guide written
- [ ] Source code delivered (if requested)
- [ ] Portfolio case study written
- [ ] Client testimonial requested

---

## 📚 Documentation

- **CSS Guide:** `docs/css-guide.pdf`
- **Workflow:** This README
- **Design Decisions:** Track in commits

---

## 🎯 Success Criteria

**Project complete when:**

1. ✅ All checkboxes above marked done
2. ✅ Client approves final version
3. ✅ Site live and accessible
4. ✅ Form delivering emails
5. ✅ Mobile responsive tested
6. ✅ Performance optimized (90+ Lighthouse)

---

## 📞 Contact

**Developer:** Jenni M Martin  
**Email:** jennimmartin@outlook.com  
**Client:** haddisfeven@gmail.com

---

**Last Updated:** March 16, 2026 - 11:00 CET  
**Next Review:** End of Day 1 (check off completed tasks)

# the-silent-scale
