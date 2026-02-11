---
name: scroll-animations
description: Expert in premium scroll-triggered animations. GSAP ScrollTrigger, Intersection Observer, parallax layers, reveal effects. 60fps patterns with mobile-safe fallbacks.
---

# Scroll Animations Expert

> Load this skill when building: landing pages, hero sections, parallax effects, scroll-triggered reveals, sticky sections, or any scroll-based interaction.

---

## Technology Stack Priority

1. **CSS-only** (prefer when possible — zero JS cost)
2. **Intersection Observer** (lightweight JS, broad support)
3. **GSAP + ScrollTrigger** (complex choreography, premium feel)
4. **Lenis/Locomotive Scroll** (smooth scroll override — use sparingly)

---

## Pattern Library

### 1. Fade-In on Scroll (CSS + Intersection Observer)

```html
<section class="reveal" data-reveal="fade-up">
  <h2>Premium Real Estate</h2>
</section>
```

```css
/* Base state — hidden */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variants */
.reveal[data-reveal="fade-left"] {
  transform: translateX(-40px);
}
.reveal[data-reveal="fade-right"] {
  transform: translateX(40px);
}
.reveal[data-reveal="zoom"] {
  transform: scale(0.9);
}

/* Stagger children */
.reveal .stagger-child {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.is-visible .stagger-child:nth-child(1) { transition-delay: 0.1s; }
.reveal.is-visible .stagger-child:nth-child(2) { transition-delay: 0.2s; }
.reveal.is-visible .stagger-child:nth-child(3) { transition-delay: 0.3s; }
.reveal.is-visible .stagger-child:nth-child(4) { transition-delay: 0.4s; }
.reveal.is-visible .stagger-child {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Lightweight reveal observer — add once, works everywhere
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // Fire once
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
```

---

### 2. Parallax Background Layers

```css
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  inset: -20% 0; /* Extra height for parallax room */
  background-image: url('/hero-bg.webp');
  background-size: cover;
  background-position: center;
  will-change: transform;
}
```

```javascript
// Lightweight parallax (no library needed)
function initParallax() {
  const parallaxEls = document.querySelectorAll('.parallax-bg');
  
  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed || 0.3);
      const rect = el.parentElement.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (inView) {
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      }
    });
    requestAnimationFrame(updateParallax);
  }
  requestAnimationFrame(updateParallax);
}
```

---

### 3. GSAP ScrollTrigger — Sticky Section with Pin

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```

```javascript
gsap.registerPlugin(ScrollTrigger);

// Pin a section while content animates
gsap.to('.hero-content', {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: '+=500',
    pin: true,
    scrub: 1, // Smooth tie to scroll position
  }
});

// Horizontal scroll section
const horizontalSections = gsap.utils.toArray('.panel');
gsap.to(horizontalSections, {
  xPercent: -100 * (horizontalSections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    snap: 1 / (horizontalSections.length - 1),
    end: () => '+=' + document.querySelector('.horizontal-container').offsetWidth,
  }
});
```

---

### 4. Counter Animation on Scroll

```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Trigger on scroll
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
```

```html
<span data-target="350" data-suffix="+">0</span> Unidades Vendidas
<span data-target="98" data-suffix="%">0</span> Satisfacción
```

---

### 5. Progress Bar on Scroll

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef);
  transform-origin: left;
  transform: scaleX(0);
  z-index: 9999;
  transition: none;
}
```

```javascript
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrolled / total})`;
}, { passive: true });
```

---

### 6. Text Reveal (Word by Word)

```javascript
function splitTextToWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((word, i) => 
    `<span class="word" style="--delay: ${i * 0.05}s">${word}</span>`
  ).join(' ');
}

// CSS
// .word {
//   display: inline-block;
//   opacity: 0;
//   transform: translateY(20px);
//   transition: opacity 0.4s var(--delay, 0s), transform 0.4s var(--delay, 0s);
// }
// .is-visible .word {
//   opacity: 1;
//   transform: translateY(0);
// }
```

---

## Performance Rules (MANDATORY)

| Rule | Why |
|---|---|
| Use `transform` and `opacity` ONLY for animations | These are GPU-composited. `top`, `left`, `width` cause layout thrashing. |
| Add `will-change: transform` to animated elements | Hints GPU to prepare a layer. Remove after animation if static. |
| Use `translate3d()` not `translateY()` | Forces GPU acceleration on all browsers. |
| Add `{ passive: true }` to scroll listeners | Prevents jank from scroll blocking. |
| Use `requestAnimationFrame` for scroll handlers | Debounces naturally to screen refresh rate. |
| Test at 4x CPU throttle in DevTools | If smooth at 4x slowdown, it's smooth everywhere. |
| Set `overflow: hidden` on parallax containers | Prevents content bleed during transform. |

---

## Mobile Safety

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .parallax-bg,
  .word {
    transition: none !important;
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

/* Disable parallax on mobile (saves battery + prevents jank) */
@media (max-width: 768px) {
  .parallax-bg {
    position: relative;
    inset: auto;
    transform: none !important;
  }
}
```

---

## CDN Links (Copy-Paste Ready)

```html
<!-- GSAP + ScrollTrigger (most common) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>

<!-- Optional: Smooth scroll (Lenis) -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest"></script>

<!-- Optional: Split text (SplitType) -->
<script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4"></script>
```

---

## Checklist Before Delivery

- [ ] All animations use `transform`/`opacity` only
- [ ] `prefers-reduced-motion` media query present
- [ ] Mobile fallbacks tested (no parallax on touch)
- [ ] No scroll listener without `{ passive: true }`
- [ ] Lighthouse Performance > 90
- [ ] No layout shift (CLS < 0.1) caused by animations
- [ ] Scroll progress indicator works full page length
