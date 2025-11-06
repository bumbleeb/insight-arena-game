# Struktura e Kodit Burimor - BrainQuest

**Data e Krijimit:** Java 1 - Faza e Planifikimit  
**Studentët:** [Emri Studenti 1], [Emri Studenti 2]

---

## Përmbledhje e Arkitekturës

BrainQuest është ndërtuar duke përdorur React 18.3.1 me TypeScript, Vite si build tool, dhe Tailwind CSS për stilizim. Aplikacioni përdor një arkitekturë komponentësh modulare me ndarje të qartë të përgjegjësive.

---

## Struktura e Direktoriumeve

```
brainquest/
├── public/                          # Asetet statike
│   ├── Plan_i_Punes_BrainQuest.docx
│   ├── Plan_i_Punes_BrainQuest_Plotesuar.md
│   └── robots.txt
│
├── src/
│   ├── assets/                      # Imazhe dhe media
│   │   ├── cat-thumbs-up.png       # Feedback pozitiv
│   │   └── cat-annoyed.png         # Feedback negativ
│   │
│   ├── components/                  # Komponentët e ri-përdorshëm
│   │   ├── AnimatedBackground.tsx   # Sfond i animuar për faqen kryesore
│   │   ├── AnimatedTitle.tsx        # Titulli i animuar i aplikacionit
│   │   ├── CategoryCard.tsx         # Kartela për çdo kategori kuizi
│   │   ├── QuizQuestion.tsx         # Komponenti i pyetjes me opsione
│   │   ├── ScoreDisplay.tsx         # Shfaqja e rezultatit final
│   │   │
│   │   ├── backgrounds/             # Sfondet specifike për kategori
│   │   │   ├── BrainBackground.tsx  # Sfond për Critical Thinking
│   │   │   ├── ScienceBackground.tsx # Sfond për Science
│   │   │   ├── HistoryBackground.tsx # Sfond për History
│   │   │   └── LiteratureBackground.tsx # Sfond për Literature
│   │   │
│   │   └── ui/                      # Komponentët shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ... (të gjithë komponentët e UI)
│   │
│   ├── contexts/                    # React Context për state management
│   │   └── LanguageContext.tsx      # Menaxhimi i gjuhës (EN/SQ)
│   │
│   ├── data/                        # Të dhënat statike
│   │   ├── questions.ts             # Pyetjet e kuizit (15 pyetje × 4 kategori)
│   │   └── translations.ts          # Përkthimet për UI
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Detektimi i paisjeve mobile
│   │   └── use-toast.ts             # Toast notifications
│   │
│   ├── pages/                       # Faqet kryesore të aplikacionit
│   │   ├── Index.tsx                # Faqja kryesore (zgjedhja e kategorisë)
│   │   ├── Quiz.tsx                 # Faqja e kuizit
│   │   └── NotFound.tsx             # Faqja 404
│   │
│   ├── lib/                         # Utility functions
│   │   └── utils.ts                 # Helper functions (cn, etc.)
│   │
│   ├── App.tsx                      # Komponenti kryesor i aplikacionit
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # Stilet globale dhe design tokens
│   └── vite-env.d.ts               # TypeScript declarations
│
├── index.html                       # HTML template
├── tailwind.config.ts              # Konfigurimi i Tailwind CSS
├── vite.config.ts                  # Konfigurimi i Vite
├── tsconfig.json                   # Konfigurimi i TypeScript
├── eslint.config.js                # Konfigurimi i ESLint
└── package.json                    # Dependencitë e projektit
```

---

## Komponentët Kryesorë

### 1. **Faqja Kryesore (Index.tsx)**
- Shfaq titullin e animuar të aplikacionit
- Ofron zgjedhjen e gjuhës (Shqip/Anglisht)
- Prezanton 4 kartela kategorish: Science, History, Literature, Critical Thinking
- Navigon tek faqja e kuizit kur zgjedhet një kategori

### 2. **Faqja e Kuizit (Quiz.tsx)**
- Shfaq pyetjet në mënyrë sekuenciale
- Menaxhon logjikën e kuizit dhe state management
- Tregon progres bar
- Shfaq rezultatin final me ScoreDisplay
- Përdor sfondet e animuara specifike për çdo kategori

### 3. **QuizQuestion.tsx**
- Shfaq pyetjen dhe opsionet e përgjigjeve
- Lejon ndërrimin e gjuhës për çdo pyetje (butona EN/SQ)
- Tregon nivelin e vështirësisë (Easy/Medium/Hard)
- Shfaq feedback vizual me imazhe macesh:
  - Përgjigje e saktë: Mace me thumbs up
  - Përgjigje e gabuar: Mace e mërzitur
- Ndalon zgjedhjen pas përgjigjës

### 4. **AnimatedBackground Components**
- **BrainBackground.tsx**: Rrjet neural i animuar për Critical Thinking
- **ScienceBackground.tsx**: Atome dhe grimca për Science
- **HistoryBackground.tsx**: Shkronja dhe ingranazhë për History
- **LiteratureBackground.tsx**: Libra dhe shkronja për Literature

### 5. **LanguageContext**
- Menaxhon gjendjen globale të gjuhës
- Lejon ndërrimin ndërmjet Anglishtes dhe Shqipes
- Përdoret në të gjithë aplikacionin për përkthime

---

## Struktura e të Dhënave

### questions.ts
```typescript
interface Question {
  id: number;
  question: string;
  questionSq: string;      // Pyetja në shqip
  options: string[];
  optionsSq: string[];     // Opsionet në shqip
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'science' | 'history' | 'literature' | 'critical-thinking';
}
```

**Struktura e Pyetjeve:**
- 4 kategori (Science, History, Literature, Critical Thinking)
- 15 pyetje për kategori
- 5 pyetje Easy (ID: 1-5)
- 5 pyetje Medium (ID: 6-10)
- 5 pyetje Hard (ID: 11-15)
- Niveli i përshtatshëm për moshën 13-18 vjeç

---

## Sistema e Dizajnit

### Paletë Ngjyrash (index.css)
```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  --accent: 217.2 91.2% 69.8%;
  --destructive: 0 62.8% 30.6%;
  --muted: 217.2 32.6% 17.5%;
  --border: 217.2 32.6% 17.5%;
}
```

### Tipografia
- Font Familie: System fonts (sans-serif stack)
- Përdorimi i utility classes të Tailwind për madhësi dhe peshë

### Animacionet
- Accordion animations
- Fade in/out effects
- Scale animations
- Slide transitions
- Hover effects

---

## Routing

Aplikacioni përdor React Router DOM v6:
- `/` - Faqja kryesore (zgjedhja e kategorisë)
- `/quiz/:category` - Faqja e kuizit për kategorinë e zgjedhur
- `*` - Faqja 404 (NotFound)

---

## State Management

1. **Local State**: useState për state lokal të komponentëve
2. **Context API**: LanguageContext për gjendjen globale të gjuhës
3. **URL Parameters**: Kategoria e kuizit kalon përmes URL params

---

## Veçoritë Kryesore të Implementuara

✅ Zgjedhja e kategorisë me animacione  
✅ Sistema e shumëgjuhëshe (Anglisht/Shqip)  
✅ Ndërrimi i gjuhës në nivel pyetjeje  
✅ 3 nivele vështirësie (Easy, Medium, Hard)  
✅ Feedback vizual me imazhe macesh  
✅ Sfondet e animuara për çdo kategori  
✅ Progress tracking  
✅ Rezultati final me përqindje  
✅ Design responsive  
✅ ESLint configuration për cilësinë e kodit  

---

## Teknologjitë e Përdorura

- **React 18.3.1**: Library kryesore e UI
- **TypeScript**: Type safety dhe developer experience
- **Vite**: Build tool i shpejtë
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Lucide React**: Ikona
- **Radix UI**: Komponentë të aksesueshmërisë (shadcn/ui)
- **ESLint**: Linting për cilësinë e kodit

---

## Best Practices të Implementuara

1. **Component-Based Architecture**: Komponentë të vegjël, të fokusuar
2. **TypeScript Strict Mode**: Type safety maksimale
3. **Semantic HTML**: Përdorimi i tagëve semantike
4. **Accessibility**: ARIA attributes dhe keyboard navigation
5. **Responsive Design**: Mobile-first approach
6. **Code Quality**: ESLint rules dhe consistent formatting
7. **Design System**: Semantic tokens për ngjyra dhe stilizim

---

**Shënime:**  
Ky dokument përfaqëson strukturën e kodit burimor të projektit BrainQuest të krijuar gjatë Javës 1-10 të zhvillimit. Kodi është i organizuar në mënyrë modulare dhe lehtësisht të zgjerueshme për veçori të ardhshme.
