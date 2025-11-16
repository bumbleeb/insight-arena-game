# Source Code Setup - Java 2

**Studenti:** Blerton  
**Projekti:** BrainQuest Quiz App

---

## Detyrat e Java 2

✅ Krijimi i sistemit te dizajnit ne src/index.css  
✅ Definimi i CSS variables per ngjyra  
✅ Krijimi i gradienteve dhe hijesave custom  
✅ Implementimi i animacioneve CSS  
✅ Testimi i dark mode dhe light mode

---

## 1. Design System - src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

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

---

## 2. Tailwind Config - tailwind.config.ts (Extended Animations)

```typescript
export default {
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-up": "slide-up 0.4s ease-out"
      }
    }
  }
}
```

---

## Design System Features

**Ngjyrat:**
- Primary: Vjollcë (#8B5CF6)
- Secondary: Kaltër (#3B82F6)
- Accent: Rozë (#EC4899)
- Success: Jeshile (#10B981)

**Gradientet:**
- gradient-primary: Vjollcë → Kaltër
- gradient-secondary: Kaltër → Cyan
- gradient-accent: Rozë → Vjollcë
- gradient-success: Jeshile → Teal

**Hije:**
- shadow-glow: Shkëlqim për primary
- shadow-card: Hije për card components

**Animacione:**
- fade-in: Shfaqje me fade
- scale-in: Shfaqje me scale
- slide-up: Lëvizje nga poshtë
- accordion-down/up: Expand/collapse

**Dark Mode:**
- Te gjitha variables jane te definuara per dark mode
- Automatikisht aplikohet me class="dark"

---

**Statusi:** ✅ E Plotësuar  
**Koha:** ~20 orë
