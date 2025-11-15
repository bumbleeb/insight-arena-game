# Source Code - Java 1 (Ledia)

## Detyrat e Ledia në Java 1

1. ✅ Hulumtimi dhe planifikimi i dizajnit të aplikacionit
2. ✅ Krijimi i wireframes dhe mock-ups për faqet kryesore
3. ✅ Zgjedhja e paletës së ngjyrave dhe tipografisë
4. ✅ Dokumentimi i kërkesave funksionale të aplikacionit
5. ✅ Setup i ESLint dhe konfigurimi i rregullave për cilësinë e kodit

---

## 1. Design System (index.css)

Ledia ka krijuar sistemin e dizajnit me ngjyra semantike, gradients, shadows dhe transitions.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    --background: 250 100% 97%;
    --foreground: 260 60% 15%;

    --card: 0 0% 100%;
    --card-foreground: 260 60% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 260 60% 15%;

    --primary: 262 83% 58%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 100% 60%;
    --secondary-foreground: 0 0% 100%;

    --muted: 250 40% 94%;
    --muted-foreground: 260 20% 45%;

    --accent: 330 100% 65%;
    --accent-foreground: 0 0% 100%;

    --success: 142 76% 45%;
    --success-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 250 30% 88%;
    --input: 250 30% 88%;
    --ring: 262 83% 58%;

    --radius: 1rem;

    --gradient-primary: linear-gradient(135deg, hsl(262 83% 58%), hsl(220 100% 60%));
    --gradient-secondary: linear-gradient(135deg, hsl(220 100% 60%), hsl(190 100% 55%));
    --gradient-accent: linear-gradient(135deg, hsl(330 100% 65%), hsl(262 83% 58%));
    --gradient-success: linear-gradient(135deg, hsl(142 76% 45%), hsl(160 84% 39%));
    
    --shadow-glow: 0 0 30px hsl(262 83% 58% / 0.3);
    --shadow-card: 0 4px 20px hsl(262 40% 40% / 0.1);
    
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dark {
    --background: 260 50% 8%;
    --foreground: 250 100% 97%;

    --card: 260 40% 12%;
    --card-foreground: 250 100% 97%;

    --popover: 260 40% 12%;
    --popover-foreground: 250 100% 97%;

    --primary: 262 83% 58%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 100% 60%;
    --secondary-foreground: 0 0% 100%;

    --muted: 260 30% 20%;
    --muted-foreground: 250 20% 70%;

    --accent: 330 100% 65%;
    --accent-foreground: 0 0% 100%;

    --success: 142 76% 45%;
    --success-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 260 30% 20%;
    --input: 260 30% 20%;
    --ring: 262 83% 58%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### Paleta e Ngjyrave
**Kategoritë:**
- 🔬 Shkencë: Blue (`hsl(220 100% 60%)`)
- 📜 Histori: Gold (`hsl(45 93% 47%)`)
- 📚 Letërsi: Purple (`hsl(262 83% 58%)`)
- 🧠 Mendim Kritik: Pink (`hsl(330 100% 65%)`)

**UI Elements:**
- Background: Light purple tint
- Foreground: Dark purple
- Primary: Purple gradient
- Secondary: Blue
- Accent: Pink

---

## 2. Tailwind Configuration (tailwind.config.ts)

Ledia ka konfiguruar Tailwind CSS me colors, gradients, shadows, animations dhe keyframes.

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-success': 'var(--gradient-success)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### Animacionet e Krijuara:
- `fade-in` - Fade in me translateY
- `slide-up` - Slide nga poshtë
- `scale-in` - Scale në fillim
- `pulse-slow` - Pulse i ngadaltë për efekte

---

## 3. ESLint Configuration (eslint.config.js)

Ledia ka konfiguruar ESLint për cilësinë e kodit dhe best practices.

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
```

### ESLint Rules:
- React Hooks recommended rules
- React Refresh për hot module replacement
- TypeScript recommended configuration
- No unused vars disabled për development

---

## 4. Tipografia dhe Spacing

**Fonts:**
- Heading: System font stack
- Body: System font stack

**Font Sizes:**
- H1: 48px (3rem)
- H2: 32px (2rem)
- H3: 24px (1.5rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

**Spacing Scale:**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

---

## 5. Wireframes Dokumentuar

**Faqja Kryesore (Index):**
- Header me titull "BrainQuest"
- Language toggle (EN/SQ)
- 4 kartela për kategoritë me ikona
- Design minimal dhe i pastër
- Gradient backgrounds

**Faqja e Quiz:**
- Header me navigation
- Progress bar (1/15)
- Zona e pyetjes
- 4 butona për përgjigjet
- Score display në real-time
- Animated background per kategori

**Faqja e Rezultateve:**
- Score total me animacion
- Mesazh përfundimi bazuar në score
- Imazhe feedback (cat thumbs up/annoyed)
- Butona: "Provo Përsëri" dhe "Kthehu"

---

## 6. Kërkesat Funksionale

**User Stories:**
1. Si përdorues, dua të zgjedh një kategori quiz
2. Si përdorues, dua të përgjigjem pyetje me 4 opsione
3. Si përdorues, dua të shoh rezultatin tim në fund
4. Si përdorues, dua të ndërroj gjuhën (EN/SQ)
5. Si përdorues, dua të shoh progress gjatë quiz

**Vështirësia:**
- Easy: 5 pyetje (kategoritë fillestare)
- Medium: 5 pyetje  
- Hard: 5 pyetje (pyetje më komplekse)
- Total: 15 pyetje për kategori

**Feedback Vizual:**
- ✅ Correct answer: Green highlight + congratulatory message
- ❌ Wrong answer: Red highlight + correct answer shown
- 🏆 Final score: Animated counter + custom message
- 🐱 Cat reactions: Thumbs up (good score) / Annoyed (low score)

---

**Statusi:** ✅ Java 1 e plotësuar - Design system, ESLint, wireframes dhe dokumentimi i kërkesave funksionale.
