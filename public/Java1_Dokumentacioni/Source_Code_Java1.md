# Source Code - Java 1

## Blerton - Setup Teknik

### 1. Struktura e Folderave
```
brainquest/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
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

### 3. tailwind.config.ts (Bazik)
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(217, 91%, 60%)",
        secondary: "hsl(280, 80%, 60%)",
        accent: "hsl(180, 80%, 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 4. src/main.tsx
```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### 5. src/App.tsx (Bazik)
```typescript
const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-center py-12">
        BrainQuest
      </h1>
    </div>
  );
};

export default App;
```

### 6. src/lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Ledia - Design System & ESLint

### 1. index.css (Design System Bazik)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --primary: 217 91% 60%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 280 80% 60%;
    --accent: 180 80% 50%;
  }

  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: system-ui, -apple-system, sans-serif;
  }
}
```

### 2. eslint.config.js
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

### 3. Dokumentimi i Design System
**Ngjyrat:**
- Primary: Blue (#2563eb)
- Secondary: Purple
- Accent: Cyan
- Science: Blue
- History: Gold
- Literature: Purple
- Critical Thinking: Pink

**Tipografia:**
- Font: System font stack
- H1: 48px (3rem)
- H2: 32px (2rem)
- Body: 16px (1rem)

---

## Paketët e Instaluara (package.json dependencies)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "eslint": "^8.57.0",
    "typescript-eslint": "^7.0.0"
  }
}
```

---

**Shënim:** Ky është kodi minimal i Java 1. Në javët e ardhshme do të shtohen komponente, routing, state management, etj.
