# Source Code Setup - Java 1

## Data: Jave e Parë e Zhvillimit
**Përgjegjës:** Blerton

---

## 1. Objektivi i Java 1

Krijimi i strukturës fillestare të projektit BrainQuest me teknologjitë moderne të zhvillimit web:
- ✅ Setup i mjedisit të zhvillimit (Vite + React)
- ✅ Konfigurimi i TypeScript për type safety
- ✅ Integrimi i Tailwind CSS për styling
- ✅ Krijimi i strukturës së folderave

---

## 2. Setup i Projektit me Vite

### 2.1 Krijimi i Projektit
```bash
# Komanda e përdorur për krijimin e projektit
npm create vite@latest brainquest -- --template react-ts

# Instalimi i dependencies
cd brainquest
npm install
```

### 2.2 Përse Vite?
| Avantazh | Përshkrimi |
|----------|------------|
| **Speed** | Build super i shpejtë, HMR (Hot Module Replacement) instant |
| **Modern** | Përdor ES modules native, optimized për browser-ë modernë |
| **Simple** | Konfigurimi minimal, works out of the box |
| **TypeScript** | Native support për TypeScript pa konfigurimin kompleks |

### 2.3 File i Konfigurimit: `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

**Shpjegimi:**
- `plugins: [react()]` - Aktivizon React plugin për JSX transformation dhe Fast Refresh
- `server.port: 3000` - Development server runs në port 3000

---

## 3. Konfigurimi i TypeScript

### 3.1 Përse TypeScript?
- ✅ **Type Safety**: Catch errors gjatë development, jo runtime
- ✅ **Autocomplete**: IDE support më i mirë për IntelliSense
- ✅ **Refactoring**: Rename dhe refactor me siguri
- ✅ **Documentation**: Types shërbejnë si dokumentacion i kodit

### 3.2 Konfigurimi: `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Settings Kryesore:**
- `strict: true` - Aktivizon të gjitha strict type checks
- `noUnusedLocals: true` - Error për variablat e papërdorur
- `jsx: "react-jsx"` - Përdor React 17+ JSX transform

---

## 4. Setup i Tailwind CSS

### 4.1 Instalimi i Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4.2 Konfigurimi: `tailwind.config.ts`
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

**Design System Approach:**
- Përdor CSS custom properties për ngjyrat (HSL format)
- Lejon theme switching (dark/light mode)
- Consistent color palette në të gjithë aplikacionin

### 4.3 `src/index.css` - Base Styles
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  
  --secondary: 270 60% 50%;
  --secondary-foreground: 210 40% 98%;
  
  --accent: 180 100% 50%;
  --accent-foreground: 222.2 47.4% 11.2%;
  
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 217.2 91.2% 59.8%;
  
  --radius: 0.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               "Roboto", "Oxygen", "Ubuntu", "Cantarell",
               sans-serif;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

---

## 5. Struktura e Folderave

### 5.1 Folder Structure
```
brainquest/
├── public/                   # Static assets
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/              # Images, fonts, etc.
│   │   ├── cat-annoyed.png
│   │   └── cat-thumbs-up.png
│   │
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── AnimatedBackground.tsx
│   │   ├── AnimatedTitle.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── QuizQuestion.tsx
│   │   └── ScoreDisplay.tsx
│   │
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   ├── Quiz.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/               # Static data
│   │   ├── questions.ts
│   │   └── translations.ts
│   │
│   ├── contexts/           # React Context
│   │   └── LanguageContext.tsx
│   │
│   ├── hooks/              # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   │
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite types
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

### 5.2 Përshkrimi i Folderave

#### `/src/components/`
**Qëllimi:** Komponentë të ripërdorshëm UI

**Komponentët kryesorë:**
- `AnimatedBackground.tsx` - Background me animacione për faqet
- `AnimatedTitle.tsx` - Titull me efekte animacioni
- `CategoryCard.tsx` - Karta për kategoritë e quiz-it
- `QuizQuestion.tsx` - Display i pyetjeve dhe opsioneve
- `ScoreDisplay.tsx` - Shfaqja e score-it final

#### `/src/components/ui/`
**Qëllimi:** Shadcn UI components (button, card, dialog, etc.)

Këto janë komponentë të pre-built që përdorin Radix UI dhe Tailwind CSS:
- Konsistencë në dizajn
- Accessible by default
- Customizable përmes Tailwind classes

#### `/src/pages/`
**Qëllimi:** Full page components

- `Index.tsx` - Homepage me zgjedhjen e kategorive
- `Quiz.tsx` - Faqja ku luhet quiz-i
- `NotFound.tsx` - 404 error page

#### `/src/data/`
**Qëllimi:** Static data që nuk ndryshon gjatë runtime

- `questions.ts` - Array me pyetje për çdo kategori
- `translations.ts` - Object me përkthime EN/SQ

#### `/src/contexts/`
**Qëllimi:** React Context providers për global state

- `LanguageContext.tsx` - Menaxhon gjuhën aktuale (EN/SQ)

#### `/src/hooks/`
**Qëllimi:** Custom React hooks

- `use-mobile.tsx` - Hook për të detektuar mobile devices
- `use-toast.ts` - Hook për toast notifications

#### `/src/lib/`
**Qëllimi:** Utility functions (helpers)

- `utils.ts` - Helpers si `cn()` për class name merging

---

## 6. Dependencies të Instaluara (Java 1)

### 6.1 Production Dependencies
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "lucide-react": "^0.462.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

**Shpjegimi:**
- **react**, **react-dom**: Core React library
- **react-router-dom**: Client-side routing
- **lucide-react**: Icon library (modern, lightweight)
- **class-variance-authority**: Për krijimin e variant-based components
- **clsx** + **tailwind-merge**: Utility për Tailwind class merging
- **tailwindcss-animate**: Animation utilities për Tailwind

### 6.2 Development Dependencies
```json
{
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.11",
    "typescript": "~5.6.2",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.18.0",
    "@typescript-eslint/eslint-plugin": "^8.18.2",
    "eslint-plugin-react-hooks": "^5.1.0"
  }
}
```

---

## 7. Scripts në package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

**Përdorimi:**
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build për production (output në `/dist`)
- `npm run preview` - Preview i production build lokalisht
- `npm run lint` - Run ESLint për code quality check

---

## 8. Git Setup

### 8.1 `.gitignore`
```
# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

**Arsyeja:** Këto files nuk duhet të commit-ohen në Git sepse:
- `node_modules/` - Too large, reinstall me `npm install`
- `dist/` - Generated code, rebuild me `npm run build`
- `.env` - Secrets dhe API keys

---

## 9. Development Workflow (Java 1)

### 9.1 Starting Development
```bash
# Clone repository
git clone [repo-url]
cd brainquest

# Install dependencies
npm install

# Start dev server
npm run dev
```

### 9.2 Making Changes
1. Krijo një branch të ri: `git checkout -b feature/feature-name`
2. Shkruaj kod në `/src`
3. Test locally me `npm run dev`
4. Run linting: `npm run lint`
5. Commit changes: `git commit -m "Add feature X"`
6. Push: `git push origin feature/feature-name`

---

## 10. Deliverables të Java 1 (Blerton)

### ✅ Setup Completed
- [x] Vite project initialized me React + TypeScript template
- [x] TypeScript configured (`tsconfig.json`)
- [x] Tailwind CSS installed dhe configured
- [x] Folder structure created (`components/`, `pages/`, `data/`, etc.)
- [x] Base dependencies installed (React Router, Lucide Icons, etc.)
- [x] Development scripts configured (`dev`, `build`, `lint`)
- [x] Git repository initialized me `.gitignore`

### ✅ Configuration Files
- [x] `vite.config.ts` - Vite configuration
- [x] `tailwind.config.ts` - Tailwind design system
- [x] `tsconfig.json` - TypeScript compiler options
- [x] `eslint.config.js` - ESLint rules
- [x] `package.json` - Dependencies dhe scripts

### ✅ Base Styles
- [x] `src/index.css` - Global styles me CSS custom properties
- [x] Design tokens defined (colors, spacing, typography)
- [x] Dark theme as default

---

## 11. Technical Decisions Explained

### 11.1 Përse Vite (jo Create React App)?
| Aspekt | Vite | CRA |
|--------|------|-----|
| **Build Speed** | 10-100x më shpejtë | I ngadaltë për projekte të mëdha |
| **HMR** | Instant (ES modules) | Ngadalë (rebundle everything) |
| **Bundle Size** | Optimized me tree-shaking | Më i madh |
| **Config** | Minimal | Complex ejecting |
| **Maintenance** | Actively maintained | Deprecated (2023) |

### 11.2 Përse TypeScript?
- **Type Safety**: Catch 15% më shumë bugs para runtime
- **IDE Support**: Autocomplete, go-to-definition, refactoring
- **Self-Documenting**: Types janë dokumentacion i kodit
- **Team Collaboration**: Easier onboarding, clear contracts

### 11.3 Përse Tailwind CSS?
- **Utility-First**: Build UI shpejt pa shkruar custom CSS
- **Consistency**: Design system i built-in (spacing, colors, etc.)
- **Performance**: Purge unused styles automatikisht
- **Responsive**: Mobile-first breakpoints out of the box
- **Dark Mode**: Built-in dark mode support

---

## 12. Next Steps (Java 2)

Pas përfundimit të Java 1, do të vazhdojmë me:

### Java 2: Zhvillimi i Komponentëve Bazë
- Implementimi i `LanguageContext` për EN/SQ switching
- Krijimi i `CategoryCard` component
- Implementimi i `AnimatedBackground` components
- Setup i React Router për navigation
- Krijimi i faqes `Index.tsx` (homepage)

---

**Statusi**: ✅ E Plotësuar  
**Data e Finalizimit**: Java 1  
**Përgjegjës:** Blerton  
**Koha e Shpenzuar:** ~4 orë (setup + konfigurimi + dokumentimi)

---

## References

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
