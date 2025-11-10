# Project Overview - BrainQuest

## Data e Krijimit: Java 1
**Ekipi:** Blerton (Backend/Setup) & Ledia (Frontend/Design)

---

## 1. Informacioni Bazë i Projektit

### 1.1 Emri i Projektit
**BrainQuest**

### 1.2 Tipi i Projektit
Web Application - Single Page Application (SPA)

### 1.3 Qëllimi Kryesor
BrainQuest është një aplikacion quiz interaktiv që ofron një platformë argëtuese për testimin e njohurive në 4 kategori të ndryshme (Shkencë, Histori, Letërsi, Arte), me përkrahje për dy gjuhë (Anglisht dhe Shqip).

### 1.4 Audienca e Synuar
- **Mosha:** 12+ vjeç
- **Grupi Demografik:** Nxënës, studentë, dhe entuziastë të njohurive të përgjithshme
- **Niveli Teknik:** Përdorues të thjeshtë pa njohuri teknike të avancuara
- **Pajisje:** Desktop, tablet, dhe mobile devices

---

## 2. Vizoni i Projektit

### 2.1 Problemi që Zgjidhet
Shumica e aplikacioneve të quiz-it në treg kanë këto probleme:
- ❌ **Reklamë të shumta** që shpërqendrojnë përvojën
- ❌ **Multiplayer i detyrueshëm** që kërkon moderator ose lojtarë të tjerë
- ❌ **Interface kompleks** që konfuzon përdoruesit e rinj
- ❌ **Mungesa e shumëgjuhësisë** - fokus vetëm në Anglisht
- ❌ **Subscription model** që kufizon features bazë

### 2.2 Zgjidhja e BrainQuest
- ✅ **Pa reklamë** - Përvojë e pastër dhe e pandërprerë
- ✅ **Single-player focus** - Test veten pa presion nga të tjerët
- ✅ **Interface minimalist** - Clean dhe i thjeshtë për t'u përdorur
- ✅ **Shumëgjuhësi native** - Anglisht dhe Shqip built-in
- ✅ **Free to use** - Të gjitha features-at në dispozicion pa pagesë

---

## 3. Objektivat e Projektit (Java 1)

### 3.1 Objektivat Teknike
- ✅ Setup i projektit me Vite + React + TypeScript
- ✅ Konfigurimi i Tailwind CSS për styling
- ✅ Krijimi i strukturës së folderave dhe arkitekturës
- ✅ Setup i ESLint për code quality
- ✅ Definition i design system (colors, typography, spacing)

### 3.2 Objektivat e Dizajnit
- ✅ Krijimi i wireframes për 3 faqe kryesore (Index, Quiz, Results)
- ✅ Përzgjedhja e paletës së ngjyrave (dark theme)
- ✅ Definition i tipografisë dhe spacing system
- ✅ Dizajni i animacioneve për background

### 3.3 Objektivat e Dokumentimit
- ✅ Dokumentimi i kërkesave funksionale
- ✅ User stories dhe acceptance criteria
- ✅ Technical documentation (setup, config, architecture)

---

## 4. Karakteristikat Kryesore (Features)

### 4.1 Core Features (Java 1 - Planifikuar)

#### 1. **Zgjedhja e Gjuhës**
- Toggle EN/SQ në header
- Përkthim dinamik i të gjithë UI
- Persistence në localStorage (future)

#### 2. **Zgjedhja e Kategorisë**
- 4 kategori të disponueshme:
  - 🔬 Shkencë (Science)
  - 📜 Histori (History)
  - 📚 Letërsi (Literature)
  - 🎨 Arte (Art)
- Karta interaktive me hover effects

#### 3. **Quiz Gameplay**
- 15 pyetje për çdo kategori
- 4 opsione për çdo pyetje
- Feedback i menjëhershëm (correct/incorrect)
- Progress bar (X/15)
- Score tracking

#### 4. **Visual Feedback**
- Imazhe të maceve për feedback:
  - 👍 Mace thumbs-up për përgjigje korrekte
  - 😾 Mace annoyed për përgjigje të gabuara
- Color-coded feedback (green/red)

#### 5. **Rezultatet Finale**
- Display i score-it final (X/15)
- Mesazh motivues bazuar në performancë:
  - 13-15: Excellent! 🎉
  - 10-12: Great job! 👏
  - 7-9: Good effort! 💪
  - 0-6: Keep practicing! 📚
- Buttons: "Try Again" dhe "Home"

---

### 4.2 UI/UX Features

#### Animacione
- Animated background me particles/neurons
- Hover effects në karta
- Smooth transitions ndërmjet pyetjeve
- Fade-in animations për komponentë

#### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Touch-friendly buttons (min 44x44px)

#### Accessibility
- WCAG AA contrast ratios (minimum 4.5:1)
- Keyboard navigation support
- Focus states për interactive elements
- Semantic HTML (header, main, section, etc.)

---

## 5. Teknologjitë e Përdorura

### 5.1 Frontend Stack

| Teknologjia | Versioni | Qëllimi |
|------------|----------|---------|
| **React** | 18.3.1 | UI library për komponente |
| **TypeScript** | 5.6.2 | Type safety dhe developer experience |
| **Vite** | 6.0.11 | Build tool dhe dev server |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **React Router** | 6.30.1 | Client-side routing |

### 5.2 UI Libraries

| Library | Qëllimi |
|---------|---------|
| **Lucide React** | Icon library (modern, tree-shakeable) |
| **Radix UI** | Headless UI components (accessible) |
| **Tailwind Animate** | Animation utilities për Tailwind |
| **CVA** | Class variance authority për component variants |

### 5.3 Development Tools

| Tool | Qëllimi |
|------|---------|
| **ESLint** | Code linting dhe quality checks |
| **TypeScript** | Static type checking |
| **Vite HMR** | Hot module replacement për fast refresh |

---

## 6. Arkitektura e Aplikacionit

### 6.1 Folder Structure
```
brainquest/
├── src/
│   ├── components/       # UI components
│   ├── pages/           # Full page components
│   ├── data/            # Static data (questions, translations)
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
```

### 6.2 Component Hierarchy
```
App
├── LanguageContext.Provider
│   ├── Index (Homepage)
│   │   ├── AnimatedTitle
│   │   ├── CategoryCard (x4)
│   │   └── AnimatedBackground
│   │
│   ├── Quiz (Quiz Page)
│   │   ├── QuizQuestion
│   │   ├── ScoreDisplay
│   │   └── AnimatedBackground (category-specific)
│   │
│   └── NotFound (404 Page)
```

### 6.3 Data Flow
```
Static Data (questions.ts)
    ↓
Quiz Page (selects category)
    ↓
Local State (useState) → Current question, score, answers
    ↓
QuizQuestion Component → Display & handle answers
    ↓
Results → Final score calculation
```

---

## 7. Design System Overview

### 7.1 Paleta e Ngjyrave

#### Primary Colors
- **Primary (Neon Blue):** `hsl(217.2, 91.2%, 59.8%)`
- **Secondary (Purple):** `hsl(270, 60%, 50%)`
- **Accent (Cyan):** `hsl(180, 100%, 50%)`

#### Background
- **Background:** `hsl(222.2, 84%, 4.9%)` (Dark purple-blue)
- **Foreground:** `hsl(210, 40%, 98%)` (Off-white text)

#### Category Colors
- **Science:** Blue/Cyan theme
- **History:** Gold/Amber theme
- **Literature:** Purple/Magenta theme
- **Art:** Pink/Rose theme

### 7.2 Tipografia
- **Font Family:** System fonts (native, zero-latency)
- **Headings:** 48px (3rem), Bold (700)
- **Body:** 16px (1rem), Normal (400)
- **Buttons:** 16px (1rem), Medium (500)

### 7.3 Spacing
- **Base unit:** 4px (0.25rem)
- **Common values:** 8px, 12px, 16px, 24px, 32px, 48px

---

## 8. Roadmap (8 Javë)

### ✅ Java 1: Planifikimi dhe Setup (Current)
- Setup i projektit (Vite, React, TS, Tailwind)
- Dizajni i wireframes dhe mockups
- Zgjedhja e paletës së ngjyrave
- Dokumentimi i kërkesave funksionale
- ESLint configuration

### 📅 Java 2: Komponentët Bazë
- Implementimi i LanguageContext
- CategoryCard component
- AnimatedBackground components
- React Router setup
- Index page (homepage)

### 📅 Java 3: Quiz Logic
- QuizQuestion component
- Quiz page implementation
- Score tracking logic
- Answer validation

### 📅 Java 4: Visual Feedback
- Cat feedback images integration
- Color-coded answers (green/red)
- Smooth transitions
- Progress bar

### 📅 Java 5: Results Page
- Results page design
- Score display component
- Motivational messages
- Try Again / Home buttons

### 📅 Java 6: Animations
- Background animations (category-specific)
- Hover effects
- Fade-in/out transitions
- Loading states

### 📅 Java 7: Polish & Testing
- Responsive design fixes
- Accessibility improvements
- Cross-browser testing
- Performance optimization

### 📅 Java 8: Deployment
- Build për production
- Deployment në hosting platform
- Final documentation
- Project presentation

---

## 9. Success Metrics

### 9.1 Technical Metrics (Java 1)
- ✅ Zero build errors
- ✅ ESLint passing (0 errors)
- ✅ TypeScript strict mode enabled
- ✅ Lighthouse score > 90 (Performance, Accessibility)

### 9.2 Design Metrics
- ✅ Wireframes për 3 faqe completed
- ✅ Color palette defined (10+ colors)
- ✅ Responsive breakpoints defined (3 sizes)
- ✅ WCAG AA contrast compliance

### 9.3 Documentation Metrics
- ✅ 5+ dokumente të plota (Markdown)
- ✅ User stories (5+)
- ✅ Technical setup guide
- ✅ Design system documentation

---

## 10. Challenges dhe Zgjidhjet

### 10.1 Challenges Teknike

#### Challenge 1: State Management
**Problem:** Si të menaxhohet state ndërmjet faqeve (quiz progress)?

**Solution:**
- Use React Router state për passing data
- Context API për global state (gjuha)
- localStorage për persistence (future)

#### Challenge 2: Responsive Design
**Problem:** Dizajn që duket mirë në të gjitha pajisjet

**Solution:**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl)
- Test në device emulator (Chrome DevTools)

---

### 10.2 Challenges të Dizajnit

#### Challenge 1: Dark Theme Readability
**Problem:** Kontrast i dobët ndërmjet tekstit dhe background

**Solution:**
- Use foreground color `hsl(210, 40%, 98%)` për text
- Ensure 15:1 contrast ratio (AAA level)
- Test me Contrast Checker tools

#### Challenge 2: Animation Performance
**Problem:** Animacione të rënda që ngadalësojnë app-in

**Solution:**
- Use CSS transforms (GPU-accelerated)
- Debounce scroll/resize events
- Optimize particle count në background

---

## 11. Team Roles & Responsibilities

### 11.1 Blerton (Backend/Setup)
**Përgjegjësi Java 1:**
- ✅ Vite project setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ Folder structure creation
- ✅ Dependencies installation

**Skills:**
- React + TypeScript
- Build tools (Vite)
- Package management (npm)

---

### 11.2 Ledia (Frontend/Design)
**Përgjegjësi Java 1:**
- ✅ Wireframes & mockups
- ✅ Color palette selection
- ✅ Typography choices
- ✅ Functional requirements documentation
- ✅ ESLint configuration

**Skills:**
- UI/UX Design
- Figma / Wireframing
- CSS (Tailwind)
- Documentation

---

## 12. Deliverables Java 1

### ✅ Code Deliverables
- [x] Vite + React + TypeScript project initialized
- [x] Tailwind CSS configured
- [x] Folder structure created
- [x] ESLint rules configured
- [x] Git repository setup

### ✅ Design Deliverables
- [x] Wireframes për 3 faqe (Index, Quiz, Results)
- [x] High-fidelity mockups (optional)
- [x] Color palette (HSL values)
- [x] Typography scale
- [x] Spacing system

### ✅ Documentation Deliverables
- [x] Project overview (ky dokument)
- [x] Functional requirements
- [x] Technical setup guide
- [x] Design system documentation
- [x] ESLint configuration explanation

---

## 13. Risks dhe Mitigations

### 13.1 Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Browser compatibility issues | Medium | Low | Test në multiple browsers (Chrome, Firefox, Safari) |
| Performance problems (animations) | Medium | Medium | Use CSS transforms, optimize particle count |
| TypeScript steep learning curve | Low | Medium | Pair programming, documentation |

### 13.2 Timeline Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Scope creep (extra features) | High | Medium | Stick to MVP, defer nice-to-haves |
| Underestimating complexity | Medium | Medium | Weekly progress reviews |
| Team member unavailability | High | Low | Clear role division, documentation |

---

## 14. Future Enhancements (Post Java 8)

### 14.1 Features të Mundshme
- 🔐 **User Authentication** - Login/signup, profile
- 📊 **Leaderboard** - Top scores globally ose per category
- 🎮 **Multiplayer Mode** - Challenge friends
- 📝 **Custom Quizzes** - User-created questions
- 🌍 **More Languages** - French, German, Spanish, etc.
- 🎨 **Theme Switcher** - Light mode opsioni
- 📱 **Progressive Web App (PWA)** - Offline support
- 🔔 **Daily Challenge** - Pyetje e re çdo ditë

### 14.2 Technical Improvements
- **Database Integration** - Supabase për dynamic content
- **Admin Panel** - Manage questions, users
- **Analytics** - Track user behavior (Google Analytics)
- **SEO Optimization** - Meta tags, sitemap
- **i18n Library** - react-i18next për scaling translations

---

## 15. Conclusion

**BrainQuest Java 1** ka arritur me sukses objektivat e planifikuara:
- ✅ Setup teknik i kompletuar
- ✅ Dizajni i planifikuar me detaje
- ✅ Kërkesat funksionale të dokumentuara
- ✅ Foundation solid për Java 2-8

**Next Steps:** Fillimi i zhvillimit të komponentëve në Java 2.

---

**Statusi**: ✅ E Plotësuar  
**Data e Finalizimit**: Java 1  
**Ekipi:** Blerton & Ledia  
**Kohëzgjatja:** 1 javë (planifikuar)

---

## 16. References & Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Design Resources
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)
- [Lucide Icons](https://lucide.dev/) - Icon library

### Tutorials
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [TypeScript + React Best Practices](https://react-typescript-cheatsheet.netlify.app/)
