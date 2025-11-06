# Hulumtimi dhe Planifikimi i Dizajnit - Java 1

## Data: Jave e Parë e Zhvillimit

---

## 1. Analiza e Nevojave

### 1.1 Qëllimi i Aplikacionit
BrainQuest është një aplikacion quiz interaktiv që synon të:
- Ofrojë një platformë argëtuese për testimin e njohurive
- Mbështesë shumëgjuhësinë (Anglisht dhe Shqip)
- Krijojë një përvojë vizuale tërheqëse me animacione
- Jetë i aksesueshëm nga të gjitha pajisjet (desktop, tablet, mobile)

### 1.2 Audienca e Synuar
- **Mosha**: 12+ vjeç
- **Interesi**: Nxënës, studentë, dhe entuziastë të njohurive të përgjithshme
- **Niveli teknik**: Përdorues të thjeshtë pa njohuri teknike
- **Pajisje**: Desktop, tablet, dhe mobile

---

## 2. Hulumtimi i Konkurencës

### 2.1 Aplikacione të Ngjashme të Analizuara
1. **Kahoot!**
   - ✅ Pikat e forta: Interface i thjeshtë, multiplayer
   - ❌ Pikat e dobëta: Kërkon moderator, jo self-paced

2. **Quizlet**
   - ✅ Pikat e forta: Shumë mënyra testimi, content i gjerë
   - ❌ Pikat e dobëta: Interface kompleks, subscription i nevojshëm për features

3. **Trivia Crack**
   - ✅ Pikat e forta: Vizuale tërheqëse, kategori të ndryshme
   - ❌ Pikat e dobëta: Ads të shumta, multiplayer i detyrueshëm

### 2.2 Avantazhet e BrainQuest
- ✨ **Shumëgjuhësi**: Përkrahje native për Anglisht dhe Shqip
- ✨ **Single-player**: Testimi individual pa presion kohor
- ✨ **Vizuale unike**: Animacione custom për çdo kategori
- ✨ **Feedback humoristik**: Imazhe të maceve për përgjigje (thumbs up / annoyed)
- ✨ **Pa reklamë**: Përvojë e pastër pa ndërprerje

---

## 3. Vendime të Dizajnit

### 3.1 Arkitektura e Informacionit
```
BrainQuest
│
├── Faqja Kryesore (Index)
│   ├── Zgjedhja e gjuhës (EN/SQ)
│   ├── 4 Kategori Quiz
│   │   ├── Shkencë
│   │   ├── Histori
│   │   ├── Letërsi
│   │   └── Arte
│   └── Animated Background (BrainBackground)
│
├── Faqja e Quiz
│   ├── Progress Bar (1/15)
│   ├── Pyetja aktuale
│   ├── 4 Opsione përgjigje
│   ├── Feedback vizual (mace)
│   ├── Score display
│   └── Animated Background (specifik për kategorinë)
│
└── Faqja e Rezultateve
    ├── Score final
    ├── Mesazh vlerësimi
    ├── Butoni "Provo Përsëri"
    └── Butoni "Kryefaqe"
```

### 3.2 User Flow
1. **Hyrja**: Përdoruesi shikon faqen kryesore me 4 kategori
2. **Zgjedhja e gjuhës**: Toggle në krye të faqes (EN/SQ)
3. **Zgjedhja e kategorisë**: Click në një nga 4 kartat
4. **Quiz flow**:
   - Shfaqet pyetja 1/15
   - Përdoruesi zgjedh një përgjigje
   - Shfaqet feedback (mace + ngjyrë)
   - Auto-advance në pyetjen tjetër pas 1.5s
5. **Rezultati**: Shfaqet score-i final me mesazh motivues
6. **Përsëritja**: Mundësi për të provuar përsëri ose të kthehet në home

### 3.3 Principet e Dizajnit
- **Minimalizëm**: Interface i pastër pa elemente të panevojshme
- **Vizuale tërheqëse**: Animacione të buta që nuk shpërqendrojnë
- **Feedback i menjëhershëm**: Përdoruesi merr feedback instant për përgjigjet
- **Konsistencë**: Dizajn i njëtrajtshëm në të gjitha faqet
- **Aksesibilitet**: Kontrast i mirë, tekst i lexueshëm, responsive design

---

## 4. Specifikime Teknike (Vendosur në Java 1)

### 4.1 Stack Teknologjik i Zgjedhur
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Routing**: React Router DOM v6

### 4.2 Arsyet e Zgjedhjeve
| Teknologjia | Arsyeja e Zgjedhjes |
|------------|---------------------|
| React | Ekosistem i gjerë, performance i mirë, dokumentim i shkëlqyer |
| Vite | Build super i shpejtë, HMR instant |
| Tailwind CSS | Utility-first, responsive design i lehtë, design system i integruar |
| TypeScript | Type safety, më pak bugs, autocomplete më i mirë |

### 4.3 Struktura e Projektit
```
src/
├── components/        # Komponentë UI
├── pages/            # Faqet kryesore
├── data/             # Static data (questions, translations)
├── contexts/         # React Context (LanguageContext)
├── hooks/            # Custom hooks
├── lib/              # Utility functions
└── assets/           # Images, fonts
```

---

## 5. Deliverables të Javës 1

### ✅ Dokumentacioni i Plotësuar
- [x] Analiza e nevojave dhe audiences
- [x] Hulumtimi i konkurencës
- [x] Arkitektura e informacionit
- [x] User flow diagram
- [x] Vendime teknike

### 📋 Dokumente të Krijuara
1. ✅ Hulumtimi dhe Dizajni (ky dokument)
2. ⏳ Wireframes dhe Mock-ups
3. ⏳ Paleta e Ngjyrave dhe Tipografia
4. ⏳ Kërkesat Funksionale
5. ⏳ ESLint Setup

---

## 6. Next Steps (Java 2)

Pas përfundimit të Javës 1, do të vazhdohet me:
1. Zhvillimi i komponentëve bazë (Button, Card, etc.)
2. Implementimi i faqes kryesore (Index)
3. Integrimi i LanguageContext
4. Setup i routing me React Router

---

**Statusi**: ✅ E Plotësuar  
**Data e Finalizimit**: Java 1  
**Autor**: Ekipi i Zhvillimit BrainQuest
