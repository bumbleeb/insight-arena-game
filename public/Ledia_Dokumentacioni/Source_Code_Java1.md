# Source Code - Java 1 (Ledia)

## Detyrat e Ledia në Java 1

### 1. Design System (index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Ngjyrat Bazë */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    /* Ngjyrat Kryesore */
    --primary: 217 91% 60%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 280 80% 60%;
    --accent: 180 80% 50%;
    
    /* Kategoritë */
    --science: 217 91% 60%;
    --history: 45 93% 47%;
    --literature: 280 80% 60%;
    --critical: 330 80% 60%;
  }

  body {
    @apply bg-background text-foreground;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
}
```

### 2. Paleta e Ngjyrave
**Kategoritë:**
- 🔬 Shkencë: Blue (`#2563eb`)
- 📜 Histori: Gold (`#f59e0b`)
- 📚 Letërsi: Purple (`#9333ea`)
- 🧠 Mendim Kritik: Pink (`#ec4899`)

**UI Elements:**
- Background: White
- Text: Dark gray
- Buttons: Primary blue

### 3. Tipografia
```
Fonts:
- Heading: System font stack
- Body: System font stack

Sizes:
- H1: 48px (3rem)
- H2: 32px (2rem)
- H3: 24px (1.5rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

Spacing:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
```

### 4. ESLint Configuration (eslint.config.js)
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

### 5. Wireframes Dokumentuar

**Faqja Kryesore (Index):**
- Header me titull "BrainQuest"
- 4 kartela për kategoritë
- Design minimal dhe i pastër

**Faqja e Quiz:**
- Header me navigation
- Progress bar
- Zona e pyetjes
- 4 butona për përgjigjet
- Score display

**Faqja e Rezultateve:**
- Score total
- Mesazh përfundimi
- Butona: "Provo Përsëri" dhe "Kthehu"

### 6. Kërkesat Funksionale

**User Stories:**
1. Si përdorues, dua të zgjedh një kategori quiz
2. Si përdorues, dua të përgjigjem pyetje
3. Si përdorues, dua të shoh rezultatin tim
4. Si përdorues, dua të ndërroj gjuhën (EN/SQ)

**Vështirësia:**
- Easy: 5 pyetje
- Medium: 5 pyetje  
- Hard: 5 pyetje
- Total: 15 pyetje për kategori

---

**Statusi:** ✅ Java 1 e plotësuar - Design system, ESLint, dhe dokumentimi i kërkesave.
