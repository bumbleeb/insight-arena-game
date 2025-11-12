# Source Code Setup - Java 1

**Studenti:** Blerton  
**Projekti:** BrainQuest Quiz App

---

## Detyrat e Java 1

✅ Krijimi i struktures fillestare te projektit me Vite dhe React  
✅ Instalimi dhe konfigurimi i TypeScript  
✅ Setup i Tailwind CSS dhe konfigurimi i tailwind.config.ts  
✅ Krijimi i struktures se folderave (components, pages, data, hooks, lib)

---

## Setup i Projektit

### 1. Krijimi i Projektit
```bash
npm create vite@latest brainquest -- --template react-swc-ts
npm install
```

### 2. vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### 3. tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### 4. src/lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Struktura e Folderave

```
src/
├── components/ui/
├── pages/
├── data/
├── hooks/
├── lib/
├── contexts/
├── App.tsx
└── main.tsx
```

---

## Paketët e Instaluara

**Dependencies:**
- react, react-dom
- react-router-dom
- @tanstack/react-query
- clsx, tailwind-merge
- lucide-react

**Dev Dependencies:**
- vite
- typescript
- tailwindcss

---

**Statusi:** ✅ E Plotësuar  
**Koha:** ~15 orë
