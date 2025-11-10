# Database Status - Java 1

## Data: Jave e Parë e Zhvillimit

---

## 1. Statusi i Bazës së të Dhënave

### 1.1 Statusi Aktual
**Status:** ❌ **E Pa-Implementuar**

Në **Java 1**, projekti BrainQuest **nuk ka bazë të dhënash**. Të gjitha të dhënat janë **statike** dhe të vendosura në kodin burimor.

---

## 2. Arsyet për Vonesën e Implementimit

### 2.1 Faza e Zhvillimit
Java 1 është **faza e setup-it dhe planifikimit**, që përqendrohet në:
- ✅ Krijimi i strukturës së projektit
- ✅ Konfigurimi i teknologjive (Vite, React, TypeScript, Tailwind)
- ✅ Dizajni i UI/UX (wireframes, paleta ngjyrash)
- ✅ Dokumentimi i kërkesave funksionale

**Baza e të dhënave nuk është prioritet në këtë fazë.**

### 2.2 Approach i Zhvillimit: Static-First
Për projekte të vogla dhe MVP (Minimum Viable Product), është best practice të fillosh me **hardcoded data**:

| Static Data | Database |
|-------------|----------|
| ✅ Setup i shpejtë | ⏳ Kërkon konfigurimin e backend |
| ✅ Zero dependencies | ⏳ Kërkon hosting për DB |
| ✅ Ideal për prototyping | ⏳ Overhead për projekte të vogla |
| ✅ Performancë e lartë (no queries) | ⏳ Network latency |

**Vendimi:** Start me static data në `src/data/questions.ts` dhe migrim në database vetëm nëse projekti rritet.

---

## 3. Datasources Aktuale (Java 1)

### 3.1 Questions Data: `src/data/questions.ts`

**Struktura:**
```typescript
interface Question {
  id: number;
  category: 'science' | 'history' | 'literature' | 'art';
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'science',
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    correctAnswer: 0,
  },
  // ... 60 total questions (15 per category)
];
```

**Storage:**
- ✅ File-based (TypeScript file)
- ✅ Type-safe me TypeScript interfaces
- ✅ Version controlled (Git)
- ✅ No external dependencies

**Limitimet:**
- ❌ Nuk mund të update-ohen dinamikisht
- ❌ Nuk mund të shtohen pyetje nga admin panel
- ❌ Nuk mblidhen statistika (leaderboard, scores)

---

### 3.2 Translations Data: `src/data/translations.ts`

**Struktura:**
```typescript
interface Translations {
  en: {
    title: string;
    selectCategory: string;
    startQuiz: string;
    // ... more keys
  };
  sq: {
    title: string;
    selectCategory: string;
    startQuiz: string;
    // ... more keys
  };
}

export const translations: Translations = {
  en: {
    title: 'BrainQuest',
    selectCategory: 'Select a Category',
    startQuiz: 'Start Quiz',
  },
  sq: {
    title: 'BrainQuest',
    selectCategory: 'Zgjidh Kategorinë',
    startQuiz: 'Fillo Quiz-in',
  },
};
```

**Storage:**
- ✅ File-based (TypeScript file)
- ✅ Shumëgjuhësi (EN/SQ) built-in
- ✅ Type-safe keys

**Limitimet:**
- ❌ Nuk mund të shtohen gjuhë të reja pa modifikuar kodin
- ❌ Nuk ka fallback dinamik për përkthime të munguara

---

## 4. State Management (Java 1)

### 4.1 Local State (React useState)
**Përdorimi:** Për state të komponentëve individual (quiz progress, score, etc.)

**Shembull:**
```typescript
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [answers, setAnswers] = useState<number[]>([]);
```

**Pro:**
- ✅ Simple
- ✅ No external libraries
- ✅ Ideal për komponente të vogla

**Con:**
- ❌ Nuk persiston pas refresh
- ❌ Nuk share-ohet ndërmjet faqeve

---

### 4.2 Context API (React Context)
**Përdorimi:** Për global state (gjuhë aktuale, theme)

**Shembull:**
```typescript
// LanguageContext.tsx
const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
});
```

**Pro:**
- ✅ Share state ndërmjet komponentëve
- ✅ No external dependencies
- ✅ Built into React

**Con:**
- ❌ Nuk persiston pas refresh (pa localStorage)
- ❌ Re-renders të tepërta nëse nuk optimizohet

---

## 5. Nevoja për Database (Javat e Ardhshme)

### 5.1 Kur Nevojitet Database?

**Skenarët që kërkojnë DB:**
1. **User Authentication**
   - Login/signup
   - Profile management
   - Password reset

2. **Dynamic Content**
   - Admin panel për CRUD operations në pyetje
   - User-generated content

3. **Leaderboard / Statistics**
   - Track scores per user
   - Global leaderboard
   - Analytics (most missed questions, etc.)

4. **Progress Tracking**
   - Save quiz progress
   - Resume incomplete quizzes
   - History of past quizzes

---

### 5.2 Recommended Database Solutions

#### Option 1: **Supabase** (Recommended)
- ✅ PostgreSQL database
- ✅ Built-in authentication
- ✅ Real-time subscriptions
- ✅ Free tier generous
- ✅ Auto-generated REST API

**Setup:**
```bash
npm install @supabase/supabase-js
```

**Sample Schema:**
```sql
-- Users table (handled by Supabase Auth)

-- Questions table
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User scores table
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  category VARCHAR(50),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

#### Option 2: **Firebase Firestore**
- ✅ NoSQL document database
- ✅ Real-time updates
- ✅ Easy to setup
- ✅ Good for rapid prototyping

**Con:**
- ❌ Pricing mund të jetë i lartë për scale
- ❌ Less flexible për complex queries

---

#### Option 3: **Local Storage (Browser)**
- ✅ No backend needed
- ✅ Instant setup
- ✅ Works offline

**Con:**
- ❌ Data humbet nëse user clear-on cookies
- ❌ Limited storage (5-10MB)
- ❌ Nuk share-ohet ndërmjet devices

**Use Case:** Temporary state persistence (saved progress, language preference)

---

## 6. Migration Path (Static → Database)

### 6.1 Phase 1: Static Data (Java 1) ✅ Current
- Hardcoded questions në `src/data/questions.ts`
- Hardcoded translations në `src/data/translations.ts`

### 6.2 Phase 2: Local Storage (Java 3-4)
- Save user preferences (language, theme)
- Save quiz progress (current question, score)

### 6.3 Phase 3: Backend API (Java 5-6)
- Setup Supabase project
- Migrate questions to database
- Add authentication

### 6.4 Phase 4: Advanced Features (Java 7-8)
- Leaderboard
- User profiles
- Admin panel për managing questions

---

## 7. Data Management Best Practices

### 7.1 Current Approach (Java 1)
```typescript
// ✅ GOOD - Type-safe data
export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [ /* ... */ ];
```

### 7.2 Future Approach (me Database)
```typescript
// ✅ GOOD - Abstract data source
export async function getQuestions(category: Category): Promise<Question[]> {
  // Fetch from Supabase instead of hardcoded array
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('category', category);
  
  if (error) throw error;
  return data;
}
```

**Benefit:** Kod i komponentëve nuk ndryshon, vetëm data layer.

---

## 8. Deliverables të Java 1

### ✅ Data Structure Defined
- [x] `Question` interface created në TypeScript
- [x] 60 hardcoded questions (15 per category)
- [x] Translations për EN dhe SQ

### ✅ Documentation
- [x] Arsyet për static data approach
- [x] Migration path për database (future)
- [x] Recommended database solutions

### ❌ Database NOT Implemented (As Planned)
- [ ] No Supabase setup
- [ ] No backend API
- [ ] No authentication

---

## 9. Next Steps (Javat e Ardhshme)

### Java 3-4: Local Storage
- Implement localStorage për:
  - Language preference
  - Quiz progress (opsionale)
  - Dark mode toggle (future feature)

### Java 5-6: Database Integration
1. Setup Supabase project
2. Create `questions` table
3. Migrate data nga `questions.ts` në DB
4. Update data layer për të fetch nga API

### Java 7-8: Advanced Features
- User authentication (sign up, login)
- Leaderboard (top scores per category)
- Admin panel për managing questions

---

**Statusi**: ✅ Dokumentuar  
**Database Status**: ❌ E Pa-Implementuar (As Planned)  
**Data e Finalizimit**: Java 1  
**Vlerësim:** Static data është appropriate për MVP

---

## 10. References

- [Supabase Documentation](https://supabase.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Web Storage API (localStorage)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [React Context API](https://react.dev/reference/react/useContext)
