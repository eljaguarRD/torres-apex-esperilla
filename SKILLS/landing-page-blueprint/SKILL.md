---
name: landing-page-blueprint
description: Complete playbook for building premium $10K+ landing pages. Section architecture, real estate patterns, SEO, performance budgets, and WhatsApp CTA integration.
---

# Landing Page Blueprint

> Load this skill when building: landing pages, marketing sites, real estate websites, product pages, or any single-page promotional site.

---

## Section Architecture (Top to Bottom)

Every premium landing page follows this proven structure:

```
┌─────────────────────────────────────┐
│  1. NAVBAR (sticky, glassmorphism)  │
├─────────────────────────────────────┤
│  2. HERO (full viewport, video/img) │
│     - Headline + Subline            │
│     - CTA Button                    │
│     - Scroll indicator              │
├─────────────────────────────────────┤
│  3. TRUST BAR (logos, numbers)      │
├─────────────────────────────────────┤
│  4. FEATURES / AMENITIES            │
│     - Icon grid or card layout      │
│     - Staggered reveal on scroll    │
├─────────────────────────────────────┤
│  5. GALLERY / SHOWCASE              │
│     - Image carousel or grid        │
│     - Lightbox on click             │
├─────────────────────────────────────┤
│  6. FLOOR PLANS / UNITS (if RE)     │
│     - Tab selector by type          │
│     - Price + specs per unit        │
├─────────────────────────────────────┤
│  7. LOCATION / MAP                  │
│     - Embedded map                  │
│     - Nearby points of interest     │
├─────────────────────────────────────┤
│  8. TESTIMONIALS / SOCIAL PROOF     │
│     - Carousel or grid              │
├─────────────────────────────────────┤
│  9. CTA SECTION (conversion)        │
│     - Form OR WhatsApp button       │
│     - Urgency element               │
├─────────────────────────────────────┤
│ 10. FOOTER                          │
│     - Contact info, social links    │
│     - Legal, privacy               │
└─────────────────────────────────────┘
```

---

## Navbar Pattern

```html
<nav class="navbar" id="navbar">
  <a href="#" class="navbar-logo">
    <img src="/logo.webp" alt="Project Name" width="140" height="40">
  </a>
  <div class="navbar-links">
    <a href="#features">Amenidades</a>
    <a href="#gallery">Galería</a>
    <a href="#units">Apartamentos</a>
    <a href="#location">Ubicación</a>
  </div>
  <a href="#contact" class="navbar-cta">Cotizar Ahora</a>
  <button class="navbar-toggle" aria-label="Menu">☰</button>
</nav>
```

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(15, 15, 20, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.3s ease, padding 0.3s ease;
}

.navbar.scrolled {
  background: rgba(15, 15, 20, 0.95);
  padding: 0.6rem 2rem;
}
```

```javascript
// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });
```

---

## Hero Section Pattern

```html
<section class="hero" id="hero">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="/hero.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Tu Nuevo Hogar<br>Te Espera</h1>
    <p class="hero-subtitle">Apartamentos de lujo desde $244,000</p>
    <div class="hero-ctas">
      <a href="#contact" class="btn btn-primary">Solicitar Información</a>
      <a href="https://wa.me/18091234567" class="btn btn-whatsapp" target="_blank">
        <svg><!-- WhatsApp icon --></svg> WhatsApp
      </a>
    </div>
  </div>
  <div class="scroll-indicator">
    <span>Descubre más</span>
    <div class="scroll-arrow"></div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
```

---

## WhatsApp CTA Integration

```html
<!-- Floating WhatsApp Button (always visible) -->
<a href="https://wa.me/1XXXXXXXXXX?text=Hola%2C%20me%20interesa%20información%20sobre%20el%20proyecto"
   class="whatsapp-float"
   target="_blank"
   rel="noopener"
   aria-label="Contactar por WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
  </svg>
</a>
```

```css
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
}

/* Pulse animation */
.whatsapp-float::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #25D366;
  animation: wa-pulse 2s ease-in-out infinite;
}

@keyframes wa-pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.15); opacity: 0; }
}
```

---

## SEO Checklist (Mandatory)

```html
<head>
  <!-- Required Meta -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Project Name] — Apartamentos de Lujo en [Location]</title>
  <meta name="description" content="Descubre [Project Name]: apartamentos de lujo desde $XXX,XXX en [Location]. Amenidades premium, ubicación estratégica. ¡Solicita información hoy!">
  
  <!-- Open Graph -->
  <meta property="og:title" content="[Project Name] — Apartamentos de Lujo">
  <meta property="og:description" content="Apartamentos desde $XXX,XXX en [Location]">
  <meta property="og:image" content="https://[domain]/og-image.jpg">
  <meta property="og:url" content="https://[domain]">
  <meta property="og:type" content="website">
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/hero.webp" as="image">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "[Project Name]",
    "description": "Apartamentos de lujo en [Location]",
    "url": "https://[domain]",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "244000"
    }
  }
  </script>
</head>
```

---

## Performance Budget

| Metric | Target | Tool |
|--------|--------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Lighthouse |
| **FID** (First Input Delay) | < 100ms | Lighthouse |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| **Total Page Weight** | < 2MB | DevTools Network |
| **Images** | WebP, lazy loaded | `loading="lazy"` |
| **Fonts** | ≤ 2 families, `font-display: swap` | CSS |
| **JS Bundle** | < 100KB (excluding GSAP) | Minified |

---

## Image Optimization Rules

```html
<!-- Hero image: preloaded, WebP with fallback -->
<picture>
  <source srcset="/hero-1920.webp" media="(min-width: 1200px)" type="image/webp">
  <source srcset="/hero-1024.webp" media="(min-width: 768px)" type="image/webp">
  <source srcset="/hero-640.webp" type="image/webp">
  <img src="/hero-1024.jpg" alt="[Project Name] exterior view" width="1920" height="1080">
</picture>

<!-- Gallery images: lazy loaded -->
<img src="/gallery/01.webp" alt="Sala de estar" loading="lazy" width="800" height="600">
```

---

## Responsive Breakpoints

```css
/* Mobile first */
:root {
  --container: 90%;
  --max-width: 1200px;
}

.container {
  width: var(--container);
  max-width: var(--max-width);
  margin: 0 auto;
}

/* Tablet */
@media (min-width: 768px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 3.5rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .features-grid { grid-template-columns: repeat(3, 1fr); }
  .navbar-toggle { display: none; }
  .navbar-links { display: flex; }
}

/* Large */
@media (min-width: 1440px) {
  .features-grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Deployment Checklist

- [ ] All images optimized (WebP, proper sizes)
- [ ] Meta tags complete (title, description, OG, schema.org)
- [ ] Google Analytics / Meta Pixel installed
- [ ] WhatsApp CTA functional with correct number
- [ ] Favicon and apple-touch-icon present
- [ ] Mobile responsive tested (320px → 1440px)
- [ ] Lighthouse score > 90 across all metrics
- [ ] All links functional (no 404s)
- [ ] Form submission tested (if applicable)
- [ ] `robots.txt` and `sitemap.xml` present
- [ ] HTTPS enforced
- [ ] Custom 404 page
