# Përshkrimi i Projektit - BrainQuest

**Emri i Projektit:** BrainQuest - Aplikacion Edukativ Interaktiv  
**Data e Fillimit:** [Data]  
**Kohëzgjatja:** 10 Javë  
**Studentët:** [Emri Studenti 1], [Emri Studenti 2]  
**Mentori/Profesori:** [Emri]

---

## 1. Përmbledhje Ekzekutive

BrainQuest është një aplikacion web edukativ i dizajnuar për adoleshentë të moshës 13-18 vjeç. Aplikacioni ofron një përvojë të gamifikuar të të mësuarit përmes kuizeve interaktive në katër kategori kryesore: Shkenca (Science), Historia (History), Letërsia (Literature), dhe Të Menduarit Kritik (Critical Thinking).

Projekti synon të kombinojë edukimin me argëtimin duke përdorur animacione, feedback vizual, dhe një ndërfaqe moderne që inkurajon përdoruesit të testojnë dhe zgjerojnë njohuritë e tyre.

---

## 2. Objektivat e Projektit

### Objektivat Kryesore:
1. **Edukimi Interaktiv**: Të krijojë një mjedis argëtues për të mësuar dhe testuar njohuri
2. **Shumëgjuhësia**: Të mbështesë gjuhën angleze dhe shqipe për audiencë më të gjerë
3. **Gamifikimi**: Të përdorë elementë loje për të rritur angazhimin e përdoruesve
4. **Përshtatshmëria**: Të ofrojë nivele të ndryshme vështirësie për aftësi të ndryshme
5. **Aksesueshmëria**: Të jetë i përdorshëm në të gjitha pajisjet (desktop, tablet, mobile)

### Objektivat Pedagogjike:
- Të forcojë njohuritë e fituara në shkollë
- Të nxisë kuriozitetin dhe dëshirën për të mësuar
- Të zhvillojë aftësitë e të menduarit kritik
- Të ofrojë feedback të menjëhershëm për të ndihmuar në procesin e të mësuarit

---

## 3. Grupi i Synuar (Target Audience)

### Përdoruesit Kryesorë:
- **Mosha:** 13-18 vjeç (nxënës të shkollave të mesme)
- **Niveli Arsimor:** Klasa 8-12
- **Interesi:** Studentë që dëshirojnë të testojnë njohuritë e tyre jashtë mjedisit shkollor

### Përdorues Sekondarë:
- Mësues që kërkojnë mjete edukative
- Prindër që dëshirojnë të mbështesin mësimin e fëmijëve
- Çdo person që dëshiron të testojë njohuritë e përgjithshme

---

## 4. Veçoritë Kryesore (Core Features)

### 4.1 Zgjedhja e Kategorisë
- 4 kategori kryesore: Science, History, Literature, Critical Thinking
- Çdo kategori ka sfond të animuar unik
- Dizajn i kartelave me efekte hover interaktive

### 4.2 Sistema e Shumëgjuhëshe
- Mbështetje për gjuhën angleze dhe shqipe
- Butona për zgjedhjen e gjuhës në faqen kryesore
- Mundësia për të ndërruar gjuhën në çdo pyetje
- Përkthime të plota për UI dhe përmbajtje

### 4.3 Nivelet e Vështirësisë
- **Easy (Lehtë)**: Pyetjet 1-5 - Njohuri bazë që mësohen në shkollë
- **Medium (Mesatare)**: Pyetjet 6-10 - Njohuri të thella që kërkojnë mendim
- **Hard (Të vështira)**: Pyetjet 11-15 - Pyetje komplekse që sfidojnë

Çdo pyetje tregon nivelin e saj të vështirësisë me badge (Easy/Medium/Hard).

### 4.4 Feedback Vizual Interaktiv
- **Përgjigje e Saktë**: Shfaqet imazh i një mace me thumbs up
- **Përgjigje e Gabuar**: Shfaqet imazh i një mace të mërzitur
- Animacione smooth për transicionet
- Ngjyra që tregojnë saktësinë (e gjelbër për të saktë, e kuqe për gabim)

### 4.5 Progress Tracking
- Progress bar që tregon përparimin nëpër pyetje
- Counter i pyetjeve (p.sh. "Pyetja 5/15")
- Rezultati final me përqindje dhe mesazh motivues

### 4.6 Animacionet e Personalizuara
Çdo kategori ka sfond të animuar që pasqyron temën:
- **Science**: Atome dhe grimca që lëvizin
- **History**: Shkronja dhe ingranazhë që rrotullohen
- **Literature**: Libra dhe shkronja që fluturojnë
- **Critical Thinking**: Rrjet neural me lidhje të animuara

### 4.7 Design Responsive
- Optimizuar për desktop, tablet, dhe mobile
- Layout që përshtatet automatikisht
- Touch-friendly interface për paisje mobile

---

## 5. Arkitektura Teknike

### 5.1 Frontend Framework
- **React 18.3.1**: Library moderne për ndërtimin e UI
- **TypeScript**: Type safety dhe developer experience të përmirësuar
- **Vite**: Build tool i shpejtë me Hot Module Replacement

### 5.2 Styling dhe UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Komponentë UI të aksesueshmërisë bazuar në Radix UI
- **Custom Design System**: Tokens për ngjyra, tipografi, dhe animacione

### 5.3 Routing
- **React Router DOM v6**: Client-side routing
- Navigim i thjeshtë ndërmjet faqeve

### 5.4 State Management
- **React Context API**: Menaxhimi i gjendjes së gjuhës
- **useState Hook**: State lokal për komponentë
- **URL Parameters**: Kalimi i kategorisë përmes URL

### 5.5 Cilësia e Kodit
- **ESLint**: Linting për të zbuluar gabime dhe të ruajtur konsistencë
- **TypeScript Strict Mode**: Type checking rigoroz

---

## 6. Struktura e Përmbajtjes

### Pyetjet e Kuizit

**Total: 60 pyetje** të ndara në:

#### Science (15 pyetje)
- Kimi, Fizikë, Biologji, Astronomi
- Nivele: 5 easy, 5 medium, 5 hard

#### History (15 pyetje)
- Historia botërore dhe shqiptare
- Ngjarje historike, personalitete, data të rëndësishme
- Nivele: 5 easy, 5 medium, 5 hard

#### Literature (15 pyetje)
- Autorë dhe vepra të famshme
- Gjini letrare, personazhe, citate
- Nivele: 5 easy, 5 medium, 5 hard

#### Critical Thinking (15 pyetje)
- Logjikë, puzzle, problem solving
- Analiza dhe sinteza e informacionit
- Nivele: 5 easy, 5 medium, 5 hard

**Shënim:** Të gjitha emrat ligjorë (si emrat e autorëve, shkencëtarëve, vendeve) mbahen në formën e tyre origjinale pa përkthim.

---

## 7. User Flow (Rrjedha e Përdoruesit)

```
1. Landing Page (Faqja Kryesore)
   ↓
2. Zgjedhja e Gjuhës (EN/SQ)
   ↓
3. Zgjedhja e Kategorisë (Science, History, Literature, Critical Thinking)
   ↓
4. Fillimi i Kuizit
   ↓
5. Përgjigjja në 15 Pyetje
   - Shikimi i pyetjes
   - Zgjedhja e opsionit
   - Feedback vizual (mace)
   - Ndërrimi i gjuhës (opsionale)
   - Vazhdimi tek pyetja tjetër
   ↓
6. Rezultati Final
   - Shfaqja e rezultatit (X/15)
   - Mesazh motivues
   - Opsioni për të filluar kuiz tjetër
   ↓
7. Kthimi në Faqen Kryesore
```

---

## 8. Design System

### 8.1 Paletë Ngjyrash

**Dark Theme (Primary):**
- Background: Ngjyrë e errët (#0a0f1e ose e ngjashme)
- Primary: Blu i ndritshëm (#3b82f6)
- Secondary: Gri-blu i errët
- Accent: Blu më i hapur
- Text: E bardhë/gri e hapur

**Gradient për Titull:**
- Yellow → Orange → Pink (Gradient i ndritshëm për dukshmëri)

### 8.2 Tipografia
- Font Familie: System font stack për performancë optimale
- Madhësi: Utility classes të Tailwind (text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl)
- Pesha: Regular (400), Medium (500), Semibold (600), Bold (700)

### 8.3 Hapësirat dhe Layout
- Padding dhe margin konsistente duke përdorur scale të Tailwind
- Grid dhe Flexbox për layout responsive
- Container classes për përmbajtje të qendruara

### 8.4 Animacionet
- Fade in/out
- Scale effects
- Slide transitions
- Accordion animations
- Hover states interaktive

---

## 9. Wireframes dhe Mock-ups (Javaå 1)

### 9.1 Faqja Kryesore (Landing Page)
```
┌────────────────────────────────────────────┐
│                                            │
│         [BrainQuest - Animated Title]      │
│         [Gradient colorful text]           │
│                                            │
│         [EN Button]  [SQ Button]           │
│                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │          │  │          │  │          │ │
│  │ Science  │  │ History  │  │Literature│ │
│  │  Card    │  │  Card    │  │  Card    │ │
│  │          │  │          │  │          │ │
│  └──────────┘  └──────────┘  └──────────┘ │
│                                            │
│         ┌──────────┐                       │
│         │ Critical │                       │
│         │Thinking  │                       │
│         │  Card    │                       │
│         └──────────┘                       │
│                                            │
│      [Animated Background - Brains]        │
└────────────────────────────────────────────┘
```

### 9.2 Faqja e Kuizit (Quiz Page)
```
┌────────────────────────────────────────────┐
│ [Category Name]          [EN/SQ Buttons]   │
│                                            │
│ [Progress Bar: ████████░░░░░░░░] 8/15     │
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │  Question 8                 [Medium]   │ │
│ │                                        │ │
│ │  What is the capital of France?       │ │
│ │                                        │ │
│ │  ○ London                              │ │
│ │  ○ Paris                               │ │
│ │  ○ Berlin                              │ │
│ │  ○ Madrid                              │ │
│ │                                        │ │
│ │         [Cat Image - Feedback]         │ │
│ └────────────────────────────────────────┘ │
│                                            │
│           [Next Question Button]           │
│                                            │
│    [Category-Specific Animated Bg]         │
└────────────────────────────────────────────┘
```

### 9.3 Faqja e Rezultatit (Results Page)
```
┌────────────────────────────────────────────┐
│                                            │
│         Quiz Completed! / Kuizi Përfundoi! │
│                                            │
│              Your Score / Rezultati        │
│                                            │
│                   12/15                    │
│                   80%                      │
│                                            │
│         Great job! / Punë e shkëlqyer!     │
│                                            │
│         [Try Another Quiz Button]          │
│         [Back to Home Button]              │
│                                            │
└────────────────────────────────────────────┘
```

---

## 10. Kërkesat Funksionale

### 10.1 Kërkesat e Detyrueshme (Must Have)
✅ Zgjedhja e kategorisë së kuizit  
✅ Shfaqja e 15 pyetjeve për kategori  
✅ 3 nivele vështirësie (5 easy, 5 medium, 5 hard)  
✅ Mbështetje për 2 gjuhë (EN/SQ)  
✅ Ndërrimi i gjuhës në nivel pyetjeje  
✅ Feedback vizual me imazhe  
✅ Progress tracking  
✅ Rezultati final me përqindje  
✅ Design responsive  
✅ Animacione për çdo kategori  

### 10.2 Kërkesat e Dëshirueshme (Should Have)
⚠️ Ruajtja e rezultateve në localStorage (për implementim të ardhshëm)  
⚠️ Timer për çdo pyetje (opsionale)  
⚠️ Sounds effects për feedback (opsionale)  

### 10.3 Kërkesat e Mundshme (Could Have)
○ Autentifikimi i përdoruesve  
○ Leaderboard global  
○ Achievement system  
○ Pyetje të personalizuara nga përdoruesit  
○ Social sharing të rezultateve  

---

## 11. Kërkesat Jo-Funksionale

### 11.1 Performanca
- Koha e ngarkimit të faqes < 2 sekonda
- Animacionet smooth (60 FPS)
- Optimizimi i imazheve

### 11.2 Aksesueshmëria
- Keyboard navigation
- ARIA labels për screen readers
- Kontrast i dukshëm i ngjyrave
- Focus states të qarta

### 11.3 Kompatibiliteti
- Shfletuesit modern (Chrome, Firefox, Safari, Edge)
- Paisje mobile dhe tablet
- Rezolucione të ndryshme ekrani

### 11.4 Mirëmbajtja
- Kod i pastër dhe i komentuar
- Strukture modulare
- Dokumentacion i plotë

---

## 12. Plani i Testimit

### 12.1 Unit Testing
- Testimi i komponentëve individual
- Testimi i funksioneve utility

### 12.2 Integration Testing
- Testimi i routing-ut
- Testimi i context providers

### 12.3 User Acceptance Testing (UAT)
- Testimi nga përdorues realë të grupit të synuar
- Feedback dhe përmirësime

### 12.4 Cross-Browser Testing
- Testimi në shfletues të ndryshëm
- Testimi në paisje të ndryshme

---

## 13. Metrkat e Suksesit

### Kriteret e Pranimit:
✅ Të gjitha 60 pyetjet funksionojnë si duhet  
✅ Ndërrimi i gjuhës funksionon pa probleme  
✅ Animacionet janë smooth dhe pa lag  
✅ Aplikacioni është responsive në të gjitha pajisjet  
✅ Feedback vizual shfaqet saktë  
✅ Rezultati llogaritet dhe shfaqet saktë  
✅ Kodi është i pastër dhe i dokumentuar  
✅ ESLint nuk ka errors  

---

## 14. Risqet dhe Mitigimi

| Risku | Probabiliteti | Impakti | Strategjia e Mitigimit |
|-------|--------------|---------|----------------------|
| Vonesë në deadline | I mesëm | I lartë | Planifikim i mirë i taskeve, daily standups |
| Probleme teknike | I ulët | I mesëm | Dokumentacion i mirë, backup të rregullta |
| Përmbajtje jo e saktë | I ulët | I lartë | Rishikim nga mentori, kërkime të kujdesshme |
| Probleme të performancës | I mesëm | I mesëm | Testim i rregullt, optimizime të vazhdueshme |

---

## 15. Timeline dhe Deliverables

**Kohëzgjatja Totale:** 10 Javë

### Faza 1: Planifikimi dhe Setup (Java 1)
- ✅ Hulumtimi dhe dizajni
- ✅ Wireframes dhe mock-ups
- ✅ Setup i projektit dhe tooling
- ✅ Zgjedhja e paletës së ngjyrave

### Faza 2: Zhvillimi Fillestar (Java 2-4)
- ✅ Implementimi i design system
- ✅ Krijimi i komponentëve bazë
- ✅ Setup i routing
- ✅ Implementimi i animacioneve

### Faza 3: Funksionaliteti Kryesor (Java 5-7)
- ✅ Struktura e të dhënave për pyetjet
- ✅ Logjika e kuizit
- ✅ Sistema e shumëgjuhëshe
- ✅ Feedback vizual

### Faza 4: Përfundimi dhe Testimi (Java 8-10)
- ✅ Debugging dhe optimizime
- ✅ Testing i plotë
- ✅ Dokumentacioni final
- ✅ Deployment

---

## 16. Referencat dhe Burimet

### Dokumentacioni Teknik:
- React Documentation: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Vite Guide: https://vitejs.dev/guide/

### Design Inspiration:
- Behance, Dribbble për UI inspiration
- Google Material Design guidelines
- Apple Human Interface Guidelines

### Përmbajtja Edukative:
- Libra shkollorë për nivelin 13-18 vjeç
- Resurse online edukative
- Verifikim nga mësues/mentorë

---

## 17. Përfundim

BrainQuest është një projekt ambicioz që kombinon edukim me teknologji moderne për të krijuar një përvojë angazhuese për të rinjtë. Projekti demonstron aftësitë teknike të studentëve në zhvillimin e aplikacioneve web moderne, duke përdorur best practices të industrisë.

Aplikacioni është dizajnuar për të qenë i zgjerueshëm, duke lejuar shtimin e funksionaliteteve të reja në të ardhmen si autentifikim, leaderboards, dhe menaxhim dinamik i përmbajtjes.

---

**Aprovuar nga:**  
_____________________________  
[Emri i Mentorit/Profesorit]  
[Data]

**Studentët:**  
_____________________________  
[Emri Studenti 1]

_____________________________  
[Emri Studenti 2]

---

*Ky dokument është krijuar gjatë Javës 1 të projektit BrainQuest dhe përfaqëson planifikimin dhe vizionin fillestar të aplikacionit. Dokumenti do të përditësohet gjatë zhvillimit të projektit.*
