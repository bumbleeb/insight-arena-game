# PLANI I ZHVILLIMIT TË PROJEKTIT - BRAINQUEST

## PËRSHKRIMI I PROJEKTIT

BrainQuest është një aplikacion edukativ interaktiv i dizajnuar për adoleshentët (13-18 vjeç) që kombinon elemente të gamifikimit me përmbajtje arsimore. Projekti trajton sfidën e angazhimit të studentëve në mësim përmes një platforme moderne dhe argëtuese që ofron kuize interaktive në katër fusha kryesore: Shkenca, Historia, Letërsia dhe Mendimi Kritik.

Aplikacioni përdor animacione të avancuara, një sistem pikësh motivues, dhe një dizajn të ngjashëm me platformë si Duolingo dhe Kahoot për të krijuar një përvojë mësimore tërheqëse. Përdoruesit mund të zgjedhin kategori të ndryshme, të përgjigjen në pyetje me zgjedhje të shumëfishta, të marrin feedback të menjëhershëm, dhe të ndjekin progresin e tyre në kohë reale.

## KËRKESAT E SISTEMIT

### Hardware (Pajisjet):
- **Kompjuteri**: CPU dual-core 2.0 GHz ose më i lartë, 4GB RAM minimum (8GB rekomandohet)
- **Ekrani**: Rezolucioni minimal 1280x720 pikselë
- **Lidhja me internet**: Për instalimin e varësive dhe testimin e aplikacionit
- **Hapësira ruajtëse**: Minimum 500MB për projektin dhe varësitë

### Software (Programet):
- **Node.js**: Versioni 18.0 ose më i lartë
- **npm** ose **bun**: Menaxhues paketash për instalimin e varësive
- **Code Editor**: Visual Studio Code (rekomandohet) ose ndonjë IDE tjetër
- **Git**: Për kontroll versioni (opsionale por e rekomanduar)
- **Browser modern**: Chrome, Firefox, Safari, ose Edge (versioni më i fundit)
- **React Developer Tools**: Ekstension për debugging (opsionale)

### Teknologjitë e përdorura:
- React 18.3.1
- TypeScript
- Vite (build tool)
- Tailwind CSS
- React Router DOM
- Lucide React (ikonat)
- Radix UI (komponentët)

---

## PLANI I PUNËS SIPAS JAVËVE

### JAVA 1: Planifikimi dhe Setup i Projektit

**Studenti 1:**
- Krijimi i strukturës fillestare të projektit me Vite dhe React
- Instalimi dhe konfigurimi i TypeScript
- Setup i Tailwind CSS dhe konfigurimi i tailwind.config.ts
- Krijimi i strukturës së folderave (components, pages, data, hooks, lib)
- Inicializimi i Git repository dhe setup i .gitignore

**Studenti 2:**
- Hulumtimi dhe planifikimi i dizajnit të aplikacionit
- Krijimi i wireframes dhe mock-ups për faqet kryesore
- Zgjedhja e paletës së ngjyrave dhe tipografisë
- Dokumentimi i kërkesave funksionale të aplikacionit
- Setup i ESLint dhe konfigurimi i rregullave për cilësinë e kodit

**Deliverables:** Projekti i inicializuar, dokumentacioni i dizajnit, struktura e folderave

---

### JAVA 2: Sistemi i Dizajnit dhe Komponentët Bazë

**Studenti 1:**
- Krijimi i sistemit të dizajnit në src/index.css
- Definimi i CSS variables për ngjyra (--primary, --secondary, --background, etj.)
- Krijimi i gradientëve dhe hijesave custom (--gradient-primary, --shadow-glow)
- Implementimi i animacioneve CSS (fade-in, scale-in, hover effects)
- Testimi i dark mode dhe light mode

**Studenti 2:**
- Instalimi dhe setup i Radix UI komponentëve (Button, Card, Progress)
- Krijimi i src/components/ui/button.tsx me variants të ndryshme
- Krijimi i src/components/ui/card.tsx për container components
- Krijimi i src/components/ui/progress.tsx për progress bar
- Implementimi i class-variance-authority për menaxhimin e variants

**Deliverables:** Sistemi i plotë i dizajnit, komponentët bazë UI

---

### JAVA 3: Routing dhe Strukturat e Faqeve

**Studenti 1:**
- Instalimi dhe konfigurimi i React Router DOM
- Krijimi i src/App.tsx me routing setup
- Implementimi i BrowserRouter dhe Routes
- Krijimi i src/pages/Index.tsx (landing page)
- Krijimi i src/pages/Quiz.tsx (quiz page skeleton)

**Studenti 2:**
- Krijimi i src/pages/NotFound.tsx (404 page)
- Implementimi i navigimit midis faqeve
- Setup i QueryClient për @tanstack/react-query
- Krijimi i layout structure për faqet
- Testimi i navigation flow

**Deliverables:** Routing i funksional, skeletonet e faqeve kryesore

---

### JAVA 4: Animacionet e Background dhe Efektet Vizuale

**Studenti 1:**
- Krijimi i src/components/AnimatedBackground.tsx
- Implementimi i HTML5 Canvas për animacione
- Krijimi i sistemit të particles (80 particles me lëvizje dinamike)
- Implementimi i orbs me efekt glow dhe pulse
- Krijimi i wave patterns dhe trail effects

**Studenti 2:**
- Optimizimi i performance të canvas animations
- Implementimi i requestAnimationFrame për smooth animations
- Krijimi i responsive canvas që përshtatet me madhësinë e ekranit
- Testimi i animacioneve në browser të ndryshëm
- Fine-tuning i parameters (speed, opacity, colors)

**Deliverables:** AnimatedBackground component i plotë dhe i optimizuar

---

### JAVA 5: Komponenti i Titullit Animuar dhe Kategorive

**Studenti 1:**
- Krijimi i src/components/AnimatedTitle.tsx
- Implementimi i typing effect me state management
- Krijimi i cursor blinking animation
- Implementimi i glow effect dhe text shadows
- Integrimi i AnimatedTitle në Index page

**Studenti 2:**
- Krijimi i src/components/CategoryCard.tsx
- Implementimi i hover effects dhe scale transformations
- Krijimi i layout për grid të kategorive
- Implementimi i onClick handlers për navigation
- Integrimi i Lucide React icons (Beaker, Scroll, BookOpen, Brain)

**Deliverables:** Komponentët AnimatedTitle dhe CategoryCard të plotë

---

### JAVA 6: Struktura e të Dhënave dhe Logjika e Quiz

**Studenti 1:**
- Krijimi i src/data/questions.ts
- Definimi i Question interface (id, category, question, options, correctAnswer)
- Krijimi i 20 pyetjeve për kategorinë Science (5 pyetje)
- Krijimi i 20 pyetjeve për kategorinë History (5 pyetje)
- Implementimi i sistemit të filtrimit të pyetjeve sipas kategorisë

**Studenti 2:**
- Krijimi i pyetjeve për kategorinë Literature (5 pyetje)
- Krijimi i pyetjeve për kategorinë Critical Thinking (5 pyetje)
- Validimi i të gjitha pyetjeve (gramatika, saktësia)
- Krijimi i diversitetit në vështirësinë e pyetjeve
- Dokumentimi i sources për pyetjet

**Deliverables:** 20 pyetje të sakta në 4 kategori

---

### JAVA 7: Quiz Component dhe Logjika e Përgjigjeve

**Studenti 1:**
- Krijimi i src/components/QuizQuestion.tsx
- Implementimi i display të pyetjeve dhe opsioneve
- Krijimi i visual feedback për përgjigje (correct/incorrect)
- Implementimi i disabled state pas përzgjedhjes
- Integrimi i Lucide icons (CheckCircle2, XCircle)

**Studenti 2:**
- Implementimi i color coding për përgjigjet (success, destructive, primary)
- Krijimi i transition animations për state changes
- Implementimi i hover states për butonët
- Testimi i accessibility (keyboard navigation)
- Fine-tuning i UX për mobile devices

**Deliverables:** QuizQuestion component i plotë me visual feedback

---

### JAVA 8: State Management dhe Quiz Flow

**Studenti 1:**
- Implementimi i useState hooks në Quiz.tsx
- Krijimi i state për currentQuestionIndex, selectedAnswer, score
- Implementimi i handleAnswerSelect function
- Krijimi i logjikës për kalkulimin e score
- Implementimi i showResult state dhe conditional rendering

**Studenti 2:**
- Implementimi i handleNextQuestion function
- Krijimi i progress tracking (currentQuestionIndex / total)
- Implementimi i quiz completion logic
- Krijimi i handleRestart function
- Integrimi i useNavigate për back navigation

**Deliverables:** Quiz logic i plotë dhe funksional

---

### JAVA 9: Score Display, Progress Bar dhe Results Screen

**Studenti 1:**
- Krijimi i src/components/ScoreDisplay.tsx
- Implementimi i real-time score tracking
- Integrimi i Progress component për quiz progress
- Krijimi i percentage calculation
- Styling i score display me gradient text

**Studenti 2:**
- Krijimi i quiz completion screen
- Implementimi i results display me Trophy icon
- Krijimi i percentage calculation dhe display
- Implementimi i "Try Again" dhe "Back to Categories" buttons
- Krijimi i animate-scale-in effect për results card

**Deliverables:** Score system i plotë dhe results screen

---

### JAVA 10: Testing, Bug Fixes dhe Polish Final

**Studenti 1:**
- Testing i plotë i të gjithë flow të aplikacionit
- Bug fixing (edge cases, state issues)
- Optimizimi i performance (lazy loading, memoization)
- Testimi në devices të ndryshme (desktop, tablet, mobile)
- Testimi i dark mode dhe light mode

**Studenti 2:**
- Code cleanup dhe refactoring
- Krijimi i README.md me udhëzime instalimi
- Dokumentimi i komponentëve dhe functions
- Final polish i animations dhe transitions
- Deployment preparation dhe build testing

**Deliverables:** Aplikacion i plotë, i testuar dhe gati për deployment

---

**Shënim:** Çdo javë përfshin takime të rregullta midis dy studentëve për code review, pair programming sessions, dhe integrimin e punës së tyre në një repository të përbashkët Git.

Punoi: [Studenti 1] dhe [Studenti 2]  
Programi lëndor: Kurs Laboratorik LAB 803  
Data: Tetor-Dhjetor 2025
