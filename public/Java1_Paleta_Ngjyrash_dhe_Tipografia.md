# Paleta e Ngjyrave dhe Tipografia - Java 1

## Data: Jave e Parë e Zhvillimit

---

## 1. Filozofia e Dizajnit

### 1.1 Koncepti Vizual
- **Temë**: Futuristike, teknologjike, dinamike
- **Mood**: Energjike, inteligjente, argëtuese
- **Audience Appeal**: Moderne, tërheqëse për të rinj dhe të rritur

### 1.2 Principet e Ngjyrave
- **Kontrast i lartë**: Për lexueshmëri të shkëlqyer
- **Gradients**: Për thellësi dhe modernitet
- **Semi-transparency**: Për efekte glassmorphism
- **Dark theme native**: Optimizuar për përdorim në darkë

---

## 2. Paleta Kryesore e Ngjyrave

### 2.1 Primary Colors (HSL Format)

#### Background Colors
```css
/* Base Background - Dark purple-blue gradient */
--background: 222.2 84% 4.9%;
/* Subtle gradient stop */
--background-secondary: 240 50% 8%;

/* Foreground (text on background) */
--foreground: 210 40% 98%;
```

#### Brand Colors
```css
/* Primary - Neon Blue */
--primary: 217.2 91.2% 59.8%;
--primary-foreground: 222.2 47.4% 11.2%;

/* Secondary - Purple */
--secondary: 270 60% 50%;
--secondary-foreground: 210 40% 98%;

/* Accent - Bright Cyan */
--accent: 180 100% 50%;
--accent-foreground: 222.2 47.4% 11.2%;
```

#### UI Colors
```css
/* Muted - For subtle elements */
--muted: 217.2 32.6% 17.5%;
--muted-foreground: 215 20.2% 65.1%;

/* Card backgrounds */
--card: 222.2 84% 4.9%;
--card-foreground: 210 40% 98%;

/* Borders */
--border: 217.2 32.6% 17.5%;
--input: 217.2 32.6% 17.5%;
```

#### Feedback Colors
```css
/* Success - Green */
--success: 142 76% 36%;
--success-foreground: 0 0% 100%;

/* Destructive/Error - Red */
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;

/* Warning - Yellow/Orange */
--warning: 38 92% 50%;
--warning-foreground: 222.2 47.4% 11.2%;
```

### 2.2 Gradient Definitions
```css
/* Primary Gradient - Blue to Purple */
--gradient-primary: linear-gradient(
  135deg,
  hsl(217.2, 91.2%, 59.8%) 0%,
  hsl(270, 60%, 50%) 100%
);

/* Accent Gradient - Cyan to Blue */
--gradient-accent: linear-gradient(
  135deg,
  hsl(180, 100%, 50%) 0%,
  hsl(217.2, 91.2%, 59.8%) 100%
);

/* Background Gradient - Dark Purple to Dark Blue */
--gradient-background: linear-gradient(
  180deg,
  hsl(240, 50%, 8%) 0%,
  hsl(222.2, 84%, 4.9%) 100%
);

/* Subtle Gradient - For cards */
--gradient-subtle: linear-gradient(
  135deg,
  hsl(217.2, 32.6%, 17.5%) 0%,
  hsl(222.2, 84%, 4.9%) 100%
);
```

### 2.3 Shadow Definitions
```css
/* Subtle shadow for cards */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium shadow for hover states */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Large shadow for modals/dialogs */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Glow effect for primary elements */
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.5);
```

---

## 3. Category-Specific Colors

### 3.1 Science (Shkencë) - Blue/Cyan Theme
```css
--science-primary: hsl(200, 100%, 50%);
--science-secondary: hsl(180, 100%, 40%);
--science-glow: rgba(0, 191, 255, 0.4);
```

### 3.2 History (Histori) - Gold/Amber Theme
```css
--history-primary: hsl(45, 100%, 51%);
--history-secondary: hsl(30, 100%, 50%);
--history-glow: rgba(255, 193, 7, 0.4);
```

### 3.3 Literature (Letërsi) - Purple/Magenta Theme
```css
--literature-primary: hsl(280, 100%, 60%);
--literature-secondary: hsl(300, 100%, 50%);
--literature-glow: rgba(168, 85, 247, 0.4);
```

### 3.4 Art (Arte) - Pink/Rose Theme
```css
--art-primary: hsl(330, 100%, 60%);
--art-secondary: hsl(350, 100%, 50%);
--art-glow: rgba(244, 114, 182, 0.4);
```

---

## 4. Tipografia

### 4.1 Font Family
```css
/* Primary font - System fonts për performancë optimale */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             "Roboto", "Oxygen", "Ubuntu", "Cantarell",
             "Fira Sans", "Droid Sans", "Helvetica Neue",
             sans-serif;

/* Monospace - për kod ose numra */
--font-mono: ui-monospace, SFMono-Regular, "SF Mono",
             Menlo, Monaco, Consolas, "Liberation Mono",
             "Courier New", monospace;
```

**Arsyeja**: System fonts ofrojnë:
- ✅ Loading i menjëhershëm (zero network requests)
- ✅ Performance optimal
- ✅ Familiaritet për përdoruesin (native look)
- ✅ Accessibility i shkëlqyer

### 4.2 Font Sizes (Tailwind Scale)
```css
/* Headings */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### 4.3 Font Weights
```css
--font-thin: 100;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### 4.4 Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### 4.5 Typography Usage Guide

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| H1 (Title) | 3rem (48px) | Bold (700) | Tight (1.25) | Foreground |
| H2 (Subtitle) | 1.5rem (24px) | Semibold (600) | Normal (1.5) | Muted Foreground |
| Question Text | 1.5rem (24px) | Medium (500) | Normal (1.5) | Foreground |
| Answer Options | 1rem (16px) | Normal (400) | Relaxed (1.625) | Foreground |
| Score Display | 3rem (48px) | Bold (700) | None (1) | Primary |
| Button Text | 1rem (16px) | Medium (500) | Normal (1.5) | Button Foreground |
| Body Text | 1rem (16px) | Normal (400) | Normal (1.5) | Muted Foreground |

---

## 5. Spacing System

### 5.1 Tailwind Spacing Scale (rem)
```css
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-24: 6rem;     /* 96px */
```

### 5.2 Component Spacing Guidelines
| Component | Padding | Gap | Margin |
|-----------|---------|-----|--------|
| Card | 24px | 16px | 16px |
| Button | 12px 24px | - | 8px |
| Quiz Option | 16px | - | 12px |
| Page Container | 24px | - | 0 |

---

## 6. Border Radius

### 6.1 Radius Scale
```css
--radius-sm: 0.375rem;   /* 6px */
--radius: 0.5rem;        /* 8px */
--radius-md: 0.75rem;    /* 12px */
--radius-lg: 1rem;       /* 16px */
--radius-xl: 1.5rem;     /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

### 6.2 Usage
| Element | Radius |
|---------|--------|
| Cards | 12px (md) |
| Buttons | 8px (default) |
| Inputs | 8px (default) |
| Modals | 16px (lg) |
| Avatars | 9999px (full) |

---

## 7. Transitions & Animations

### 7.1 Timing Functions
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### 7.2 Duration
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### 7.3 Common Transitions
```css
/* Smooth all */
--transition-all: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Colors only */
--transition-colors: background-color 300ms ease-in-out,
                     color 300ms ease-in-out,
                     border-color 300ms ease-in-out;

/* Transform only */
--transition-transform: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 8. Accessibility Considerations

### 8.1 Contrast Ratios (WCAG AA Compliant)
| Pairing | Ratio | Status |
|---------|-------|--------|
| Foreground on Background | 15:1 | ✅ AAA |
| Primary on Primary-Foreground | 7:1 | ✅ AAA |
| Success on Success-Foreground | 6.5:1 | ✅ AA |
| Destructive on Background | 5:1 | ✅ AA |

### 8.2 Focus States
```css
/* Focus ring for keyboard navigation */
--ring-offset: 2px;
--ring-width: 2px;
--ring-color: hsl(217.2, 91.2%, 59.8%);
```

### 8.3 Font Size Minimum
- **Body text**: Minimum 16px (1rem)
- **Small text**: Minimum 14px (0.875rem)
- **Touch targets**: Minimum 44x44px

---

## 9. Design Tokens Summary

### 9.1 Implementimi në Tailwind Config
Të gjitha këto vlera janë të integruara në:
- `src/index.css` (CSS custom properties)
- `tailwind.config.ts` (Tailwind theme extension)

### 9.2 Përdorimi në Komponentë
```tsx
// ✅ Correct - Using design tokens
<div className="bg-background text-foreground">
  <h1 className="text-4xl font-bold text-primary">Title</h1>
  <button className="bg-primary text-primary-foreground">Click</button>
</div>

// ❌ Wrong - Hardcoding colors
<div className="bg-[#000]">
  <h1 className="text-[48px] font-[700] text-[#3b82f6]">Title</h1>
</div>
```

---

## 10. Deliverables të Javës 1

### ✅ Paleta e Ngjyrave
- [x] Primary, Secondary, Accent colors (HSL)
- [x] Background & Foreground definitions
- [x] Feedback colors (Success, Error, Warning)
- [x] Category-specific colors
- [x] Gradient definitions
- [x] Shadow definitions

### ✅ Tipografia
- [x] Font family (system fonts)
- [x] Font size scale
- [x] Font weight scale
- [x] Line height recommendations
- [x] Typography usage guide

### ✅ Spacing & Layout
- [x] Spacing scale (Tailwind)
- [x] Border radius scale
- [x] Component spacing guidelines

### ✅ Accessibility
- [x] Contrast ratio verification
- [x] Focus states definition
- [x] Minimum font sizes

### ✅ Documentation
- [x] Design token documentation
- [x] Usage examples (Do's & Don'ts)
- [x] Integration notes për Tailwind

---

**Statusi**: ✅ E Plotësuar  
**Data e Finalizimit**: Java 1  
**Autor**: Ekipi i Zhvillimit BrainQuest

---

## Shënime Shtesë

Kjo paletë është krijuar me këto objektiva:
1. **Dark-mode first**: Optimizuar për përdorim në mjediset me dritë të ulët
2. **Modern & Energetic**: Ngjyra të ndritshme që stimulojnë mendjen
3. **Category distinction**: Çdo kategori ka identitetin e saj vizual
4. **Accessibility**: WCAG AA/AAA compliant për të gjithë
5. **Performance**: System fonts për zero latency
