# Status i Bazës së të Dhënave - Java 1

## Studentja: Ledia
## Data: Java e Parë e Zhvillimit

---

## 1. Executive Summary

Në **Java 1** të projektit BrainQuest, nuk është implementuar asnjë bazë të dhënash (database). Të gjitha të dhënat janë statike dhe ruhen në file-a TypeScript brenda kodit burimor.

---

## 2. Arsyet për Mungesën e Database në Java 1

### 2.1 Fokusi i Java 1: Planning & Design
Java 1 është fokusuar në:
- ✅ Hulumtim dhe planifikim
- ✅ Dizajn dhe wireframes
- ✅ Setup i mjedisit të zhvillimit
- ✅ Dokumentim i kërkesave

**Implementimi i database nuk ishte pjesë e scope-it të Java 1.**

### 2.2 Përparësitë e Static Data për Prototyping
Përdorimi i static data në fazën fillestare ka avantazhet e veta:

| Avantazh | Përshkrimi |
|----------|------------|
| **Simplicity** | Nuk kërkon setup të database, authentication, hosting |
| **Speed** | Zhvillim më i shpejtë pa backend complexity |
| **Testing** | Më lehtë për të testuar UI/UX pa varësi nga backend |
| **Prototyping** | Focus në design dhe user experience |

---

## 3. Struktura Aktuale e të Dhënave (Static Data)

### 3.1 File: `src/data/questions.ts`

Ky file përmban të gjitha pyetjet e quiz-it për 4 kategoritë:

```typescript
// Struktura e një pyetjeje
interface Question {
  id: number;
  question: {
    en: string;  // Pyetja në Anglisht
    sq: string;  // Pyetja në Shqip
  };
  options: {
    en: string[];  // 4 opsione në Anglisht
    sq: string[];  // 4 opsione në Shqip
  };
  correct: number;  // Index i përgjigjes së saktë (0-3)
  difficulty: 'easy' | 'medium' | 'hard';  // Niveli i vështirësisë
}

// Struktura e kategorive
interface CategoryQuestions {
  science: Question[];    // 15 pyetje
  history: Question[];    // 15 pyetje
  literature: Question[]; // 15 pyetje
  art: Question[];        // 15 pyetje
}
```

**Shembull i një pyetjeje:**
```typescript
{
  id: 1,
  question: {
    en: "What is the smallest unit of life?",
    sq: "Cila është njësia më e vogël e jetës?"
  },
  options: {
    en: ["Atom", "Cell", "Molecule", "Organism"],
    sq: ["Atomi", "Qeliza", "Molekula", "Organizmi"]
  },
  correct: 1,  // "Cell" / "Qeliza"
  difficulty: "easy"
}
```

### 3.2 File: `src/data/translations.ts`

Ky file përmban të gjitha translation strings për UI:

```typescript
interface Translations {
  en: {
    title: string;
    selectCategory: string;
    categories: {
      science: string;
      history: string;
      literature: string;
      art: string;
    };
    quiz: {
      question: string;
      submit: string;
      next: string;
      // ... më shumë
    };
    results: {
      score: string;
      tryAgain: string;
      home: string;
      // ... më shumë
    };
  };
  sq: {
    // ... i njëjti strukture në Shqip
  };
}
```

---

## 4. Kur Do të Nevojitet Database?

### 4.1 Features që Kërkojnë Database (Javet e Ardhshme)

Nëse në të ardhmen vendoset të shtohen këto features, do të nevojitet database:

1. **User Accounts**
   - Registration dhe authentication
   - User profiles
   - Login/logout functionality

2. **Progress Tracking**
   - Ruajtja e score-ve të përdoruesve
   - History e quiz-eve të luajtur
   - Leaderboards

3. **Dynamic Content**
   - Admin panel për të shtuar pyetje të reja
   - Content management system
   - Update të pyetjeve pa rivendosur aplikacionin

4. **Analytics**
   - Tracking i performance për çdo pyetje
   - Statistics për përdoruesit
   - Most/least difficult questions

5. **Social Features**
   - Sharing results me miqtë
   - Multiplayer mode
   - Comments dhe reviews

### 4.2 Zgjedhja e Database (Recommendation për të Ardhmen)

Nëse vendoset të implementohet database, rekomandimi është:

**Option 1: Supabase (Recommended)**
- ✅ PostgreSQL database
- ✅ Built-in authentication
- ✅ Real-time subscriptions
- ✅ File storage
- ✅ Auto-generated REST API
- ✅ Free tier generous

**Option 2: Firebase**
- ✅ NoSQL database (Firestore)
- ✅ Authentication
- ✅ Real-time updates
- ✅ Hosting included
- ❌ Vendor lock-in

**Option 3: MongoDB Atlas**
- ✅ NoSQL flexibility
- ✅ Free tier
- ✅ Good for document-based data
- ❌ Requires separate auth solution

---

## 5. Database Schema (Proposal për të Ardhmen)

Nëse implementohet database, kjo është skema e propozuar:

### 5.1 Table: `users`
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5.2 Table: `questions`
```sql
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,  -- 'science', 'history', 'literature', 'art'
  question_en TEXT NOT NULL,
  question_sq TEXT NOT NULL,
  options_en TEXT[] NOT NULL,     -- Array of 4 options
  options_sq TEXT[] NOT NULL,     -- Array of 4 options
  correct_index INTEGER NOT NULL, -- 0-3
  difficulty VARCHAR(10) NOT NULL, -- 'easy', 'medium', 'hard'
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 5.3 Table: `quiz_attempts`
```sql
CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  category VARCHAR(50) NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW()
);
```

### 5.4 Table: `question_responses`
```sql
CREATE TABLE question_responses (
  id SERIAL PRIMARY KEY,
  quiz_attempt_id INTEGER REFERENCES quiz_attempts(id),
  question_id INTEGER REFERENCES questions(id),
  selected_option INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  answered_at TIMESTAMP DEFAULT NOW()
);
```

---

## 6. Migration Plan (Për të Ardhmen)

Nëse vendoset të migrojmë nga static data në database:

### Step 1: Setup Database
1. Krijimi i Supabase project (ose zgjedhja tjetër)
2. Setup i environment variables për connection string
3. Instalimi i Supabase client library

### Step 2: Migrate Data
1. Export i `questions.ts` në SQL format
2. Populate database me existing questions
3. Testing i data integrity

### Step 3: Update Code
1. Refactor components që lexojnë nga `questions.ts`
2. Implementimi i API calls në vend të static imports
3. Error handling për network requests
4. Loading states për async data

### Step 4: Authentication
1. Implementimi i signup/login pages
2. Setup i protected routes
3. User session management

### Step 5: Testing
1. E2E testing me real database
2. Performance testing
3. Error handling testing

---

## 7. Kostot dhe Maintenance

### 7.1 Static Data (Current Approach)
- **Kosto**: $0
- **Hosting**: Included në static hosting (Vercel, Netlify, etc.)
- **Maintenance**: Minimal - update manual në code

### 7.2 Database (Future Approach)
- **Kosto Fillestare**: $0 (free tiers)
- **Kosto Mujore** (pas free tier):
  - Supabase: $25/month për Pro plan
  - Firebase: Pay-as-you-go
  - MongoDB Atlas: $0-$57/month
- **Maintenance**: Medium - database backups, migrations, monitoring

---

## 8. Deliverables të Java 1 (Database Status)

### ✅ Dokumentacioni
- [x] Dokumentimi i strukturës aktuale (static data)
- [x] Proposal për database schema (future)
- [x] Migration plan (future)
- [x] Cost analysis (current vs future)

### ✅ Vendime Arkitekturore
- [x] Vendimi për të përdorur static data në Java 1
- [x] Rekomandimi për Supabase si database solution (future)
- [x] Database schema design (future-ready)

---

## 9. Konkluzioni

Në **Java 1**, projekti BrainQuest nuk ka nevojë për database sepse:
1. Fokusi është në design dhe setup
2. Static data mjafton për prototyping
3. Simplicity lehtëson zhvillimin fillestar

Megjithatë, është krijuar një **plan i detajuar** për implementimin e database në të ardhmen, duke përfshirë:
- Database schema design
- Migration strategy
- Technology recommendations
- Cost analysis

Ky dokumentacion shërben si **blueprint** për fazat e ardhshme të zhvillimit kur vendoset të implementohen features që kërkojnë persistent data storage.

---

**Statusi**: ✅ E Dokumentuar  
**Database Implementuar**: ❌ Jo (Static Data)  
**Database Planifikuar**: ✅ Po (Për Java të Ardhshme)  
**Studentja**: Ledia  

---

## References

- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Database Design Best Practices](https://www.databasestar.com/database-design-best-practices/)
- [Firebase vs Supabase Comparison](https://supabase.com/alternatives/supabase-vs-firebase)
