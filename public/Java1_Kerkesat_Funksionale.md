# Kërkesat Funksionale - Java 1

## Data: Jave e Parë e Zhvillimit

---

## 1. Përmbledhje Ekzekutive

### 1.1 Qëllimi i Dokumentit
Ky dokument përcakton të gjitha kërkesat funksionale për aplikacionin BrainQuest. Ai shërben si referencë për:
- Zhvilluesit (për implementim)
- Testuesit (për verifikim)
- Stakeholders (për aprovim)

### 1.2 Scope
Aplikacioni BrainQuest është një quiz platform interaktiv që ofron:
- 4 kategori quizesh (Shkencë, Histori, Letërsi, Arte)
- 15 pyetje për kategori
- Mbështetje për 2 gjuhë (EN/SQ)
- Feedback vizual interaktiv
- Score tracking

---

## 2. User Stories

### 2.1 Përdoruesi si Vizitor

#### US-001: Përzgjedhja e Gjuhës
**Si** vizitor  
**Dua** të zgjedh gjuhën e interface-it (Anglisht ose Shqip)  
**Që** të përdor aplikacionin në gjuhën time të preferuar

**Kriteret e Pranimit:**
- [ ] Language toggle është i dukshëm në top-right të çdo faqeje
- [ ] Klikimi në toggle ndryshon gjuhën menjëherë
- [ ] Të gjitha tekstet (pyetje, opcione, mesazhe) ndryshohen
- [ ] Zgjedhja e gjuhës ruhet gjatë sesionit
- [ ] Default gjuha është Anglisht

**Prioriteti:** 🔴 HIGH

---

#### US-002: Shikimi i Kategorive
**Si** vizitor  
**Dua** të shoh të gjitha kategoritë e disponueshme në faqen kryesore  
**Që** të zgjedh kategorinë që më intereson

**Kriteret e Pranimit:**
- [ ] 4 kategori janë të dukshme: Shkencë, Histori, Letërsi, Arte
- [ ] Çdo kategori ka icon, titull, dhe numër pyetjesh
- [ ] Hover effect në cards (scale + shadow)
- [ ] Cards janë responsive (1 column mobile, 4 columns desktop)
- [ ] Animated background është i dukshëm pas cards

**Prioriteti:** 🔴 HIGH

---

#### US-003: Fillimi i një Quiz
**Si** vizitor  
**Dua** të klikoj në një kategori  
**Që** të filloj quiz-in për atë kategori

**Kriteret e Pranimit:**
- [ ] Klikimi në card navigon në `/quiz/:category`
- [ ] Smooth transition me fade effect
- [ ] Background ndryshohet sipas kategorisë
- [ ] Pyetja e parë shfaqet menjëherë
- [ ] Progress bar fillon nga 0% (0/15)

**Prioriteti:** 🔴 HIGH

---

### 2.2 Përdoruesi si Pjesëmarrës në Quiz

#### US-004: Leximi i Pyetjes
**Si** pjesëmarrës  
**Dua** të lexoj pyetjen aktuale qartë  
**Që** të kuptoj çfarë po më pyetet

**Kriteret e Pranimit:**
- [ ] Pyetja është centered dhe me font të madh (24px)
- [ ] Question counter shfaqet lart (e.g., "Pyetja 5/15")
- [ ] Progress bar tregon përparimin (e.g., 33%)
- [ ] Background animation nuk e shpërqendron leximin
- [ ] Kontrast i mjaftueshëm mes tekstit dhe background-it

**Prioriteti:** 🔴 HIGH

---

#### US-005: Zgjedhja e Përgjigjes
**Si** pjesëmarrës  
**Dua** të klikoj në një nga 4 opsionet  
**Që** të paraqes përgjigjen time

**Kriteret e Pranimit:**
- [ ] 4 opcione janë të dukshme (A, B, C, D)
- [ ] Hover effect në options (background change)
- [ ] Klikimi në një option e bën atë unclickable (disable)
- [ ] Të gjitha opsionet e tjera bëhen unclickable pas zgjedhjes
- [ ] Touch-friendly në mobile (min 44px height)

**Prioriteti:** 🔴 HIGH

---

#### US-006: Marrja e Feedback-ut për Përgjigje
**Si** pjesëmarrës  
**Dua** të shoh nëse përgjigja ime ishte e saktë apo jo  
**Që** të mësoj nga gabimet

**Kriteret e Pranimit:**
- [ ] Përgjigja e zgjedhur ndryshon ngjyrën:
  - ✅ E gjelbër nëse është e saktë
  - ❌ E kuqe nëse është e gabuar
- [ ] Nëse gabuar, përgjigja e saktë shfaqet me të gjelbër
- [ ] Cat image shfaqet pranë përgjigjes:
  - 😸 Thumbs up nëse saktë
  - 😾 Annoyed nëse gabuar
- [ ] Feedback shfaqet për 1.5 sekonda
- [ ] Auto-advance në pyetjen tjetër pas feedback-ut

**Prioriteti:** 🔴 HIGH

---

#### US-007: Ndiqja e Progresit
**Si** pjesëmarrës  
**Dua** të shoh sa pyetje kam përgjigjur dhe sa më kanë mbetur  
**Që** të di ku jam në quiz

**Kriteret e Pranimit:**
- [ ] Progress bar në top shfaqet gjatë gjithë quiz-it
- [ ] Width e progress bar përditësohet çdo pyetje
- [ ] Question counter përditësohet (e.g., 5/15 → 6/15)
- [ ] Score aktual shfaqet në fund (e.g., "Score: 4/6")
- [ ] Smooth transitions për çdo update

**Prioriteti:** 🟡 MEDIUM

---

#### US-008: Kthimi në Faqen Kryesore
**Si** pjesëmarrës  
**Dua** të mund të dal nga quiz-i në çdo moment  
**Që** të zgjedh një kategori tjetër

**Kriteret e Pranimit:**
- [ ] Back button (←) në top-left të quiz page
- [ ] Klikimi hap konfirmim dialog (optional në Java 1)
- [ ] Navigimi në home page (`/`)
- [ ] Score aktual humbet (nuk ruhet)
- [ ] Smooth transition

**Prioriteti:** 🟡 MEDIUM

---

### 2.3 Përdoruesi si Përfundues i Quiz-it

#### US-009: Shikimi i Rezultatit Final
**Si** përfundues  
**Dua** të shoh score-in tim final pas 15 pyetjeve  
**Që** të vlerësoj performancën time

**Kriteret e Pranimit:**
- [ ] Pas pyetjes së 15-të, navigim në results page
- [ ] Score shfaqet i madh në qendër (e.g., "12/15")
- [ ] Përqindja shfaqet poshtë (e.g., "80%")
- [ ] Mesazh motivues bazuar në score:
  - 87%+: "Performancë e shkëlqyer!"
  - 67%-86%: "Mjaft mirë! Vazhdo kështu!"
  - 47%-66%: "Jo keq! Ke hapësirë për përmirësim."
  - <47%: "Vazhdo të mësosh! Provo përsëri!"
- [ ] Emoji përshkruese për çdo range

**Prioriteti:** 🔴 HIGH

---

#### US-010: Provimi Përsëri i Quiz-it
**Si** përfundues  
**Dua** të provoj përsëri të njëjtin quiz  
**Që** të përmirësoj score-in tim

**Kriteret e Pranimit:**
- [ ] Butoni "🔄 Provo Përsëri" është i dukshëm
- [ ] Klikimi restart-on quiz-in e njëjtë kategori
- [ ] Navigim në `/quiz/:category`
- [ ] Score riset në 0
- [ ] Pyetjet janë të njëjta (në këtë version, random në të ardhmen)

**Prioriteti:** 🔴 HIGH

---

#### US-011: Kthimi në Faqen Kryesore
**Si** përfundues  
**Dua** të kthehem në home për të zgjedhur kategori tjetër  
**Që** të provoj quiz tjetër

**Kriteret e Pranimit:**
- [ ] Butoni "🏠 Kthehu në Kryefaqe" është i dukshëm
- [ ] Klikimi navigon në `/`
- [ ] Category cards janë të dukshme
- [ ] Language preference ruhet

**Prioriteti:** 🔴 HIGH

---

## 3. Kërkesat Funksionale të Detajuara

### 3.1 Menaxhimi i Gjuhës

#### FR-001: Language Toggle
**Përshkrimi:** Përdoruesi mund të ndryshojë gjuhën në çdo faqe.

**Input:** Klikim në toggle button (EN/SQ)

**Process:**
1. Detect language state nga Context
2. Toggle between 'en' dhe 'sq'
3. Update Context state
4. Re-render të gjitha komponentët me translation të re

**Output:** Interface në gjuhën e zgjedhur

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

#### FR-002: Translation Loading
**Përshkrimi:** Të gjitha tekstet ngarkohen nga `translations.ts`.

**Input:** Language code ('en' ose 'sq')

**Process:**
1. Access translations object
2. Lookup translations[language]
3. Return translation për key të dhënë

**Output:** Translated text

**Exceptions:** Fallback to English nëse translation mungon

**Prioriteti:** 🔴 HIGH

---

### 3.2 Quiz Logic

#### FR-003: Question Loading
**Përshkrimi:** Pyetjet ngarkohen nga `questions.ts` bazuar në kategorinë.

**Input:** Category name ('science', 'history', 'literature', 'art')

**Process:**
1. Filter questions array by category
2. Return 15 questions për kategorinë
3. Load në quiz state

**Output:** Array of Question objects

**Exceptions:** Nëse kategoria nuk ekziston, redirect në home

**Prioriteti:** 🔴 HIGH

---

#### FR-004: Answer Validation
**Përshkrimi:** Sistemi verifikon nëse përgjigja e përdoruesit është e saktë.

**Input:** 
- Pyetja aktuale (Question object)
- Përgjigja e zgjedhur (string: 'A', 'B', 'C', 'D')

**Process:**
1. Compare selected answer me question.correctAnswer
2. Nëse match: isCorrect = true
3. Nëse jo match: isCorrect = false
4. Update score nëse isCorrect
5. Show feedback (cat image + color)

**Output:** 
- isCorrect: boolean
- Updated score

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

#### FR-005: Progress Tracking
**Përshkrimi:** Sistemi ndjek përparimin e përdoruesit gjatë quiz-it.

**Input:** 
- currentQuestionIndex: number
- totalQuestions: number (15)
- score: number

**Process:**
1. Calculate progress percentage: (currentQuestionIndex / totalQuestions) * 100
2. Update progress bar width
3. Update question counter text
4. Update score display

**Output:** 
- Progress percentage (0-100%)
- Question counter (e.g., "5/15")
- Score (e.g., "4/5")

**Exceptions:** Asnjë

**Prioriteti:** 🟡 MEDIUM

---

#### FR-006: Quiz Navigation
**Përshkrimi:** Sistemi navigon automatikisht në pyetjen tjetër pas feedback-ut.

**Input:** 
- isAnswered: boolean
- currentQuestionIndex: number

**Process:**
1. Pas 1.5s feedback display
2. Increment currentQuestionIndex
3. Nëse currentQuestionIndex < 15: load pyetja tjetër
4. Nëse currentQuestionIndex === 15: navigate to results

**Output:** 
- Next question ose results page

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

### 3.3 Score Calculation

#### FR-007: Score Increment
**Përshkrimi:** Score-i rritet vetëm për përgjigje të sakta.

**Input:** 
- isCorrect: boolean
- currentScore: number

**Process:**
1. Nëse isCorrect === true: score += 1
2. Nëse isCorrect === false: score unchanged
3. Update state

**Output:** Updated score

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

#### FR-008: Final Score Display
**Përshkrimi:** Score-i final dhe përqindja shfaqen në results page.

**Input:** 
- finalScore: number
- totalQuestions: number (15)

**Process:**
1. Calculate percentage: (finalScore / totalQuestions) * 100
2. Determine performance message based on percentage:
   - 87%+: "Performancë e shkëlqyer!"
   - 67%-86%: "Mjaft mirë!"
   - 47%-66%: "Jo keq!"
   - <47%: "Vazhdo të mësosh!"
3. Display emoji based on range

**Output:** 
- Score text (e.g., "12/15")
- Percentage (e.g., "80%")
- Performance message

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

### 3.4 Visual Feedback

#### FR-009: Answer Feedback Display
**Përshkrimi:** Feedback vizual shfaqet pas zgjedhjes së përgjigjes.

**Input:** 
- isCorrect: boolean
- selectedAnswer: string
- correctAnswer: string

**Process:**
1. Nëse isCorrect:
   - Selected option → green background
   - Cat thumbs up image fade in
2. Nëse !isCorrect:
   - Selected option → red background
   - Correct option → green background
   - Cat annoyed image fade in
3. Display për 1.5s
4. Fade out dhe next question

**Output:** Visual feedback components

**Exceptions:** Asnjë

**Prioriteti:** 🔴 HIGH

---

#### FR-010: Animated Backgrounds
**Përshkrimi:** Çdo kategori ka background të animuar specifik.

**Input:** Category name

**Process:**
1. Load BrainBackground në home
2. Load category-specific background në quiz:
   - Science: ScienceBackground
   - History: HistoryBackground
   - Literature: LiteratureBackground
   - Art: (placeholder, same as others në Java 1)
3. SVG animations run continuously

**Output:** Animated SVG background

**Exceptions:** Fallback to BrainBackground nëse mungon

**Prioriteti:** 🟡 MEDIUM

---

## 4. Kërkesat Jo-Funksionale

### 4.1 Performance

#### NFR-001: Load Time
- Faqja kryesore duhet të ngarkohet brenda 2 sekondave
- Transition between pages: max 300ms
- Animation frame rate: minimum 30fps

#### NFR-002: Responsiveness
- Touch response time: max 100ms
- Smooth scrolling në të gjitha pajisjet
- No lag në animations

---

### 4.2 Usability

#### NFR-003: Accessibility
- WCAG 2.1 Level AA compliance
- Kontrast minimum 4.5:1 për text
- Keyboard navigation support
- Focus states të qarta

#### NFR-004: Mobile Friendliness
- Touch targets minimum 44x44px
- Swipe gestures (optional në Java 1)
- Portrait & landscape orientation support

---

### 4.3 Compatibility

#### NFR-005: Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### NFR-006: Device Support
- iOS 13+
- Android 8+
- Desktop (Windows, macOS, Linux)
- Tablet (iPad, Android tablets)

---

### 4.4 Reliability

#### NFR-007: Error Handling
- Graceful handling nëse data nuk ngarkohet
- Fallback për animations që nuk funksionojnë
- No crashes për input të pavlefshëm

#### NFR-008: Data Integrity
- State consistency gjatë gjithë sesionit
- No score manipulation (client-side validation)

---

## 5. Kufizime të Scope-it (Out of Scope për Java 1)

Këto features NUK janë pjesë e Javës 1:

❌ User authentication / login  
❌ Database integration  
❌ Leaderboard  
❌ Multiplayer mode  
❌ Custom quiz creation  
❌ Question randomization  
❌ Difficulty selection  
❌ Timer per question  
❌ Hints system  
❌ Save progress (persistent storage)  

---

## 6. Deliverables të Javës 1

### ✅ User Stories
- [x] 11 user stories të shkruara
- [x] Kriteret e pranimit të përcaktuara
- [x] Prioritetet të vendosura

### ✅ Kërkesat Funksionale
- [x] 10 functional requirements (FR-001 to FR-010)
- [x] Input/Process/Output të dokumentuara
- [x] Exceptions handling të specifikuara

### ✅ Kërkesat Jo-Funksionale
- [x] Performance requirements
- [x] Usability requirements
- [x] Compatibility requirements
- [x] Reliability requirements

### ✅ Scope Definition
- [x] In-scope features listuar
- [x] Out-of-scope features specifikuar

---

**Statusi**: ✅ E Plotësuar  
**Data e Finalizimit**: Java 1  
**Autor**: Ekipi i Zhvillimit BrainQuest

---

## Approval

| Roli | Emri | Nënshkrimi | Data |
|------|------|------------|------|
| Product Owner | [Emri] | __________ | ____ |
| Tech Lead | [Emri] | __________ | ____ |
| QA Lead | [Emri] | __________ | ____ |
