---
name: Frontend Designer Expert
description: Skill de diseño frontend premium con estándares Glassmorphism, animaciones, responsive design y sistemas de diseño modernos.
---

# 🎨 SKILL: Frontend Designer Expert

> Expertise en diseño frontend de alto impacto. Cada interfaz debe sentirse premium, moderna y alive.

---

## 🚨 REGLA DE ORO

**"Si el usuario no dice 'WOW' al verlo, no está terminado."**

Nunca entregar diseños genéricos, planos o con colores por defecto del browser.

---

## 🎯 Cuándo Activar Este Skill

- Al crear landing pages, dashboards, o cualquier UI visible al usuario final
- Al diseñar componentes de Nexus CRM o cualquier proyecto del ecosistema
- Al implementar animaciones, transiciones o micro-interacciones
- Al evaluar/auditar la calidad visual de una interfaz existente

---

## 🏗️ Core Design System — AntiGravity Aesthetic

### Color Palette

```css
:root {
  /* Primary Gradient */
  --gradient-primary: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  --gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-dark: linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 100%);
  --gradient-gold: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
  
  /* Neutrals */
  --bg-dark: #0a0a1a;
  --bg-card: rgba(255, 255, 255, 0.05);
  --bg-card-hover: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.4);
  
  /* Semantic */
  --success: #00e676;
  --warning: #ffab00;
  --error: #ff5252;
  --info: #40c4ff;
  
  /* Borders */
  --border-glass: 1px solid rgba(255, 255, 255, 0.12);
  --border-glow: 1px solid rgba(106, 17, 203, 0.4);
}
```

### Glassmorphism Standard

```css
.glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-card-elevated {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Light mode alternative */
.glass-card-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
```

### Typography

```css
/* Primary: Inter (clean, modern) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Alternative: Montserrat (geometric, bold headers) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

/* Display: Outfit (trendy, premium feel) */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Outfit', 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Type Scale */
.text-hero    { font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; font-weight: 800; }
.text-display { font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.15; font-weight: 700; }
.text-h1      { font-size: clamp(1.75rem, 3vw, 2.5rem); line-height: 1.2; }
.text-h2      { font-size: clamp(1.25rem, 2.5vw, 1.75rem); line-height: 1.3; }
.text-h3      { font-size: clamp(1.1rem, 2vw, 1.35rem); line-height: 1.4; }
.text-body    { font-size: 1rem; line-height: 1.6; }
.text-small   { font-size: 0.875rem; line-height: 1.5; }
.text-caption  { font-size: 0.75rem; line-height: 1.4; letter-spacing: 0.04em; text-transform: uppercase; }
```

### Spacing System

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
  --space-section: 8rem; /* 128px */
}
```

---

## ✨ Animation & Micro-Interaction Patterns

### Smooth Entrances

```css
/* Fade up on scroll — apply via JS IntersectionObserver */
.animate-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: 80ms; }
.stagger > *:nth-child(3) { transition-delay: 160ms; }
.stagger > *:nth-child(4) { transition-delay: 240ms; }
.stagger > *:nth-child(5) { transition-delay: 320ms; }
```

### Hover Effects

```css
/* Scale lift */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

/* Glow border */
.hover-glow {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.hover-glow:hover {
  border-color: rgba(106, 17, 203, 0.6);
  box-shadow: 0 0 20px rgba(106, 17, 203, 0.15);
}

/* Gradient shift button */
.btn-gradient {
  background: var(--gradient-primary);
  background-size: 200% 200%;
  animation: none;
  transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
  background-position: 0% 50%;
}
.btn-gradient:hover {
  background-position: 100% 50%;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 17, 203, 0.35);
}
```

### Loading States

```css
/* Skeleton shimmer */
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Pulse dot */
.pulse-dot {
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
```

### Scroll-Triggered Animation (JS Helper)

```javascript
// IntersectionObserver for scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

---

## 📐 Layout Patterns

### Responsive Grid

```css
/* Auto-fit cards grid */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: var(--space-lg);
}

/* Feature grid (2-3 cols) */
.grid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}

/* Hero split layout */
.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
  min-height: 80vh;
  padding: var(--space-4xl) var(--space-xl);
}

@media (max-width: 768px) {
  .hero-split {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: var(--space-2xl) var(--space-md);
  }
}
```

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.container-narrow { max-width: 800px; }
.container-wide   { max-width: 1440px; }
```

---

## 🧩 Component Patterns

### Premium CTA Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: var(--gradient-primary);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 17, 203, 0.4);
}

.btn-primary:hover::before { opacity: 1; }
.btn-primary:active { transform: translateY(0); }
```

### Glass Navigation Bar

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
  background: rgba(10, 10, 26, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 26, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

### Toast Notification

```css
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-size: 0.9rem;
  transform: translateY(100px);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.4s ease;
  z-index: 9999;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

.toast.success { border-left: 3px solid var(--success); }
.toast.error   { border-left: 3px solid var(--error); }
.toast.warning { border-left: 3px solid var(--warning); }
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
/* sm: 640px  — Large phones */
/* md: 768px  — Tablets */
/* lg: 1024px — Small desktops */
/* xl: 1280px — Standard desktops */
/* 2xl: 1536px — Large screens */

@media (max-width: 768px) {
  :root {
    --space-section: 4rem;
    --space-4xl: 3rem;
    --space-3xl: 2rem;
  }
}
```

---

## ✅ Pre-Delivery Checklist

Antes de marcar un UI como "terminado", verificar:

- [ ] **Visual WOW factor** — ¿Se ve premium, no genérico?
- [ ] **Glassmorphism aplicado** — ¿Cards usan blur + border glass?
- [ ] **Gradients en CTAs** — ¿Botones principales tienen gradient, no solid color?
- [ ] **Hover effects** — ¿Todos los elementos interactivos tienen feedback?
- [ ] **Typography** — ¿Usa Inter/Outfit/Montserrat, nunca defaults?
- [ ] **Responsive** — ¿Funciona en mobile (375px), tablet (768px), desktop (1280px)?
- [ ] **Animations** — ¿Scroll reveals, stagger, micro-interactions presentes?
- [ ] **Loading states** — ¿Skeletons o spinners donde hay data async?
- [ ] **Dark mode** — ¿Background oscuro con contraste suficiente (WCAG AA)?
- [ ] **Performance** — ¿No hay layout shifts, imágenes optimizadas?
- [ ] **SEO** — ¿Meta tags, headings jerárquicos, semantic HTML?
- [ ] **Unique IDs** — ¿Interactive elements tienen IDs descriptivos?

---

## 🚫 Anti-Patterns (NUNCA HACER)

| ❌ Anti-Pattern | ✅ Correcto |
|----------------|-------------|
| Color `blue`, `red`, `green` del browser | Usar palette curada con HSL/gradients |
| `font-family: Arial, sans-serif` | `'Inter', -apple-system, sans-serif` |
| Botones planos sin hover effect | `transition + transform + box-shadow` |
| Cards sin borde glass ni blur | `backdrop-filter: blur(12px) + border glass` |
| Secciones sin espaciado consistente | Usar `--space-section` (8rem/128px) |
| Todo aparece de golpe | IntersectionObserver + `.animate-in` |
| Color de texto blanco puro sobre fondos claros | Usar `rgba(255,255,255,0.7)` para secondary text |
| `border-radius: 5px` | Mínimo `12px` para cards, `8px` para inputs |
| Imágenes sin `loading="lazy"` | Siempre lazy load bajo el fold |
| Placeholder images ("lorem picsum") | Usar `generate_image` tool o assets reales |

---

## 🎨 Paletas Temáticas Pre-Aprobadas

### Real Estate (Torres Apex, Bonita Beach)
```css
--re-primary: #1a365d;     /* Deep navy */
--re-accent: #c9a84c;      /* Gold */
--re-gradient: linear-gradient(135deg, #1a365d 0%, #2d5a8e 100%);
--re-bg: #0f1923;
```

### CRM / SaaS (NexusRD)
```css
--crm-primary: #6a11cb;    /* Purple */
--crm-accent: #2575fc;     /* Blue */
--crm-gradient: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
--crm-bg: #0a0a1a;
```

### Marketing / Landing Pages
```css
--mk-primary: #ff6b6b;     /* Coral */
--mk-accent: #ffd93d;      /* Warm yellow */
--mk-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
--mk-bg: #1a1a2e;
```

---

## 📁 Metadata

- **Creado:** 2026-02-11
- **Versión:** 1.0
- **Autor:** Howard (MBOS369 Ecosystem)
- **Aplicable a:** Todos los proyectos frontend del ecosistema
- **Dependencias:** Nexus-UI (extends), UX-Flow-Master (complementa)
