---
name: responsive-images
description: Image and media optimization. WebP/AVIF conversion, responsive srcset, lazy loading, blur-up placeholders, video optimization, and CDN patterns.
---

# Responsive Images & Media

> Load this skill when working with: image optimization, galleries, hero videos, lazy loading, or any media-heavy page.

---

## Image Format Priority

| Format | Use Case | Savings vs JPG |
|---|---|---|
| **WebP** | Default for all images | ~30% smaller |
| **AVIF** | Where supported (progressive) | ~50% smaller |
| **SVG** | Icons, logos, illustrations | Infinite scalability |
| **JPG** | Fallback only | Baseline |

---

## Responsive Image Pattern

```html
<picture>
  <!-- Desktop (large) -->
  <source srcset="/img/hero-1920.avif" media="(min-width: 1200px)" type="image/avif">
  <source srcset="/img/hero-1920.webp" media="(min-width: 1200px)" type="image/webp">
  <!-- Tablet -->
  <source srcset="/img/hero-1024.webp" media="(min-width: 768px)" type="image/webp">
  <!-- Mobile -->
  <source srcset="/img/hero-640.webp" type="image/webp">
  <!-- Fallback -->
  <img src="/img/hero-1024.jpg" alt="Descriptive text" width="1920" height="1080" loading="lazy">
</picture>
```

---

## Lazy Loading with Blur-Up

```html
<div class="img-wrapper">
  <img 
    src="/img/placeholder-tiny.webp"
    data-src="/img/gallery-01.webp"
    alt="Living room"
    class="lazy-img"
    width="800" height="600"
    loading="lazy"
  >
</div>
```

```css
.lazy-img {
  filter: blur(20px);
  transition: filter 0.5s ease;
}
.lazy-img.loaded {
  filter: blur(0);
}
```

```javascript
const lazyImages = document.querySelectorAll('.lazy-img');
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.addEventListener('load', () => img.classList.add('loaded'));
      imgObserver.unobserve(img);
    }
  });
}, { rootMargin: '200px' });

lazyImages.forEach(img => imgObserver.observe(img));
```

---

## Hero Video Pattern

```html
<!-- Optimized hero video -->
<video autoplay muted loop playsinline preload="metadata" poster="/img/hero-poster.webp">
  <source src="/video/hero-720.mp4" type="video/mp4">
</video>
```

```
Video optimization rules:
- Max resolution: 1080p (720p preferred for web)
- Format: MP4 (H.264) — universal support
- Max file size: 5MB for hero, 2MB for backgrounds
- Always provide poster image (shows before video loads)
- Use playsinline for iOS support
- Compress with: ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast output.mp4
```

---

## Performance Targets

| Metric | Target |
|---|---|
| Hero image | < 200KB |
| Gallery thumbnails | < 50KB each |
| Total page images | < 1.5MB |
| Hero video | < 5MB |
| All images have `width`/`height` | ✅ (prevents CLS) |
| All below-fold images | `loading="lazy"` |
