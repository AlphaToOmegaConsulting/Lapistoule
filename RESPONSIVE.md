# 📱 Guide Responsive Design - Lapistoule

Ce document décrit le système de design responsive de niveau industriel implémenté pour le site Lapistoule.

## 📐 Architecture

### Méthodologie
- **Mobile-first** : Tous les styles commencent par mobile (320px+)
- **Progressive enhancement** : Les features s'enrichissent sur écrans plus larges
- **ITCSS** : Architecture CSS en couches (Inverted Triangle CSS)

### Ordre d'imports CSS
```css
0. tokens.css       (design tokens)
1. base.css         (reset + typography)
2. layout.css       (grid + containers)
3. components.css   (boutons, cards, etc.)
4. header.css       (navigation)
5. footer.css       (pied de page)
6. utilities.css    (classes utilitaires - override layer)
7. pages/*.css      (styles spécifiques aux pages)
```

## 🎯 Breakpoints Standardisés

| Nom | Valeur | Usage | Devices |
|-----|--------|-------|---------|
| **xs** | 375px | Très petits mobiles | iPhone SE |
| **sm** | 640px | Grands mobiles | iPhone 12+, Galaxy S21 |
| **md** | 768px | Tablettes portrait | iPad, tablettes Android |
| **lg** | 1024px | Tablettes landscape + small desktop | iPad Pro, laptops |
| **xl** | 1280px | Desktop standard | Monitors 1280px+ |
| **2xl** | 1536px | Large desktop | Monitors 1920px+ |

### Nomenclature des Classes

```html
<!-- Base : mobile (320px - 639px) -->
<div class="grid-cols-1">

<!-- sm: 640px+ -->
<div class="grid-cols-1 sm:grid-cols-2">

<!-- md: 768px+ -->
<div class="grid-cols-1 md:grid-cols-3">

<!-- lg: 1024px+ -->
<div class="grid-cols-1 lg:grid-cols-4">
```

## 🎨 Design Tokens

### Espacement (Spacing Scale)

```css
--space-xs: 0.5rem;      /* 8px */
--space-sm: 0.75rem;     /* 12px */
--space-md: 1rem;        /* 16px */
--space-lg: 1.5rem;      /* 24px */
--space-xl: 2rem;        /* 32px */
--space-2xl: 3rem;       /* 48px */
--space-3xl: 4rem;       /* 64px */
--space-4xl: 6rem;       /* 96px */
--space-5xl: 8rem;       /* 128px */
```

### Espacement Fluide (Responsive)

```css
/* S'adapte automatiquement du mobile au desktop */
--spacing-section: clamp(2rem, 5vw, 8rem);
--spacing-gap: clamp(1rem, 3vw, 4rem);
--container-padding: clamp(1rem, 2vw, 1.5rem);
```

### Typography Fluide

```css
/* Headings - scaling automatique */
--text-xs: clamp(0.75rem, 1.5vw, 0.875rem);      /* 12-14px */
--text-sm: clamp(0.875rem, 1.8vw, 1rem);         /* 14-16px */
--text-base: clamp(1rem, 2vw, 1.125rem);         /* 16-18px */
--text-lg: clamp(1.125rem, 2.5vw, 1.25rem);      /* 18-20px */
--text-xl: clamp(1.25rem, 3vw, 1.5rem);          /* 20-24px */
--text-2xl: clamp(1.5rem, 4vw, 2rem);            /* 24-32px */
--text-3xl: clamp(2rem, 5vw, 3rem);              /* 32-48px */
--text-4xl: clamp(2.5rem, 6vw, 4rem);            /* 40-64px */
--text-5xl: clamp(3rem, 8vw, 5rem);              /* 48-80px */
```

### Touch Targets (Accessibilité)

```css
--touch-target-min: 44px;          /* WCAG AA minimum */
--touch-target-comfortable: 48px;  /* WCAG AAA recommandé */
--button-min-height: 44px;
```

## 🔧 Classes Utilitaires

### Display Responsive

```html
<div class="hidden md:block">Visible sur tablette+</div>
<div class="block md:hidden">Visible sur mobile uniquement</div>
<nav class="flex md:grid">Flex sur mobile, grid sur tablette+</nav>
```

### Order (Réorganisation)

```html
<div class="grid grid-2">
  <div class="order-2 md:order-1">Premier sur desktop, second sur mobile</div>
  <div class="order-1 md:order-2">Second sur desktop, premier sur mobile</div>
</div>
```

### Gap (Espacement entre éléments)

```html
<div class="grid gap-md md:gap-xl lg:gap-2xl">
  <!-- Gap s'agrandit progressivement -->
</div>

<!-- Gap responsive automatique -->
<div class="grid gap-responsive">
  <!-- Utilise clamp: 1rem → 4rem -->
</div>
```

### Typography

```html
<h1 class="text-3xl md:text-4xl lg:text-5xl">Titre responsive</h1>
<p class="text-base md:text-lg">Paragraphe qui grandit sur desktop</p>
```

### Grid Columns

```html
<!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```

### Grid Auto-Responsive (Sans media queries)

```html
<!-- S'adapte automatiquement - pas besoin de media queries -->
<div class="grid grid-auto-fit">
  <!-- Crée autant de colonnes que possible avec min 280px -->
</div>

<div class="grid grid-auto-fit-sm">
  <!-- Min 200px par colonne -->
</div>

<div class="grid grid-auto-fit-lg">
  <!-- Min 350px par colonne -->
</div>
```

## 🎯 Composants Responsive

### Hero Section

```css
.hero {
  /* Mobile : hauteur limitée pour éviter scroll excessif */
  min-height: 500px;
  height: clamp(500px, 100vh, 800px);
}

/* Tablet+ : pleine hauteur */
@media (min-width: 768px) {
  .hero {
    height: 100vh;
    min-height: 600px;
  }
}

/* Variant court */
.hero--short {
  min-height: 400px;
}

@media (min-width: 768px) {
  .hero--short {
    height: 60vh;
    min-height: 500px;
  }
}
```

### Buttons avec Touch Targets

```css
.btn {
  /* Padding fluide */
  padding: clamp(0.625rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  min-height: var(--button-min-height);  /* 44px minimum */
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
}

/* Touch devices : target plus large */
@media (max-width: 639px) and (pointer: coarse) {
  .btn {
    min-height: var(--touch-target-comfortable);  /* 48px */
    padding-block: 0.875rem;
  }
}
```

### Images Responsive

```html
<!-- Classe utilitaire -->
<img src="photo.jpg" alt="Photo" class="img-card-light">

<!-- Avec aspect-ratio moderne -->
<div class="aspect-square">
  <img src="photo.jpg" alt="Photo" class="w-full h-full object-cover">
</div>

<div class="aspect-video">
  <img src="video-thumb.jpg" alt="Video" class="w-full h-full object-cover">
</div>

<div class="aspect-portrait">
  <!-- 2/3 ratio - parfait pour bouteilles -->
  <img src="bottle.jpg" alt="Bouteille" class="w-full h-full object-contain">
</div>
```

### Wine Cards avec Aspect Ratio

```css
.wine-image-wrapper {
  /* Mobile : ratio 4/5 (plus carré) */
  aspect-ratio: 4 / 5;
}

@media (min-width: 768px) {
  .wine-image-wrapper {
    /* Desktop : ratio 3/4 (plus vertical) */
    aspect-ratio: 3 / 4;
  }
}

/* Fallback navigateurs anciens */
@supports not (aspect-ratio: 1) {
  .wine-image-wrapper {
    height: 300px;
  }

  @media (min-width: 768px) {
    .wine-image-wrapper {
      height: 450px;
    }
  }
}
```

## ♿ Accessibilité

### Focus States

```css
/* Navigation au clavier */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Touch devices : pas d'outline au tap */
@media (hover: none) and (pointer: coarse) {
  button:focus:not(:focus-visible),
  a:focus:not(:focus-visible) {
    outline: none;
  }
}
```

### Reduced Motion

```css
/* Respecte les préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Touch Targets

**Règles WCAG :**
- **Minimum AA :** 44×44px
- **Recommandé AAA :** 48×48px

```html
<!-- Tous les boutons respectent le minimum -->
<button class="btn">Bouton conforme WCAG</button>

<!-- Mobile : 48px automatique sur touch devices -->
<a href="#" class="nav-link">Navigation</a>
```

## 📊 Exemples Concrets

### Layout Page Domaine

```html
<section class="section">
  <div class="container">
    <div class="grid grid-2 gap-xl">
      <!-- Sur mobile : empilé verticalement -->
      <!-- Sur tablette+ : 2 colonnes côte à côte -->

      <div class="order-2 md:order-1">
        <h2 class="text-3xl md:text-4xl">Histoire</h2>
        <p class="text-base md:text-lg">Texte qui s'agrandit sur desktop</p>
      </div>

      <div class="order-1 md:order-2">
        <img src="photo.jpg" alt="Photo" class="img-card-light">
      </div>
    </div>
  </div>
</section>
```

### Navigation Responsive

```html
<header class="main-header">
  <div class="container flex items-center justify-between">
    <h1 class="header-logo">Lapistoule</h1>

    <!-- Desktop nav -->
    <nav class="hidden md:flex gap-lg">
      <a href="/" class="nav-link">Accueil</a>
      <a href="/vins" class="nav-link">Vins</a>
      <a href="/domaine" class="nav-link">Domaine</a>
    </nav>

    <!-- Mobile menu button -->
    <button class="mobile-menu-btn md:hidden">
      <i data-lucide="menu"></i>
    </button>
  </div>
</header>
```

## 🧪 Tests Recommandés

### Devices à Tester

| Device | Viewport | Priorité |
|--------|----------|----------|
| iPhone SE | 375×667 | 🔴 Critique |
| iPhone 14 | 390×844 | 🔴 Critique |
| Samsung Galaxy S21 | 360×800 | 🔴 Critique |
| iPad | 768×1024 | 🔴 Critique |
| MacBook Air | 1280×800 | 🔴 Critique |
| Desktop 1920px | 1920×1080 | ⚠️ Haute |

### Checklist Responsive

- [ ] Le site fonctionne de 320px à 2560px+
- [ ] Pas de scroll horizontal sur mobile
- [ ] Touch targets ≥ 44px (mobile)
- [ ] Typography lisible sur tous devices
- [ ] Images optimisées (WebP, srcset)
- [ ] Hero ne prend pas trop de hauteur sur mobile
- [ ] Navigation mobile fonctionnelle
- [ ] Forms utilisables sur mobile (input 16px min)
- [ ] Focus keyboard visible
- [ ] Animations respectent prefers-reduced-motion

## 🔍 Debugging Responsive

### Chrome DevTools

```
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Tester chaque breakpoint (375, 640, 768, 1024, 1280)
3. Vérifier touch targets avec "Show rulers"
4. Performance → Mobile throttling
```

### Utilities Debug

```html
<!-- Afficher le breakpoint actuel -->
<style>
  body::before {
    content: 'xs';
    position: fixed;
    top: 0;
    left: 0;
    background: red;
    color: white;
    padding: 4px 8px;
    z-index: 9999;
  }

  @media (min-width: 640px) {
    body::before { content: 'sm'; background: orange; }
  }

  @media (min-width: 768px) {
    body::before { content: 'md'; background: yellow; }
  }

  @media (min-width: 1024px) {
    body::before { content: 'lg'; background: green; }
  }

  @media (min-width: 1280px) {
    body::before { content: 'xl'; background: blue; }
  }
</style>
```

## 📚 Ressources

### Documentation
- [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS clamp() Calculator](https://clamp.font-size.app/)

### Outils
- [Responsively App](https://responsively.app/) - Test multi-devices
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibilité

---

**Version :** 2.0
**Dernière mise à jour :** 29 novembre 2025
**Auteur :** Claude Code - Industrial-Grade Responsive Implementation
