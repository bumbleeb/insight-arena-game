# Baza e të Dhënave - BrainQuest

**Data e Krijimit:** Java 1 - Faza e Planifikimit  
**Studentët:** [Emri Studenti 1], [Emri Studenti 2]

---

## Statusi Aktual

**Aktualisht, aplikacioni BrainQuest NUK përdor bazë të dhënash.**

Aplikacioni është ndërtuar si një aplikacion **client-side** i plotë që operon me të dhëna statike të ruajtura në file-at e kodit burimor.

---

## Të Dhënat Statike

### Vendndodhja e të Dhënave

Të gjitha të dhënat e aplikacionit ruhen në:
- **`src/data/questions.ts`**: Përmban të gjitha pyetjet e kuizit
- **`src/data/translations.ts`**: Përmban përkthimet e ndërfaqes së përdoruesit

### Struktura e të Dhënave të Pyetjeve

```typescript
// src/data/questions.ts

interface Question {
  id: number;                    // Identifikuesi unik i pyetjes
  question: string;              // Teksti i pyetjes në anglisht
  questionSq: string;            // Teksti i pyetjes në shqip
  options: string[];             // Array e opsioneve në anglisht (4 opsione)
  optionsSq: string[];           // Array e opsioneve në shqip (4 opsione)
  correctAnswer: number;         // Indeksi i përgjigjjes së saktë (0-3)
  difficulty: 'easy' | 'medium' | 'hard';  // Niveli i vështirësisë
  category: 'science' | 'history' | 'literature' | 'critical-thinking';
}

// Shembull
const question: Question = {
  id: 1,
  question: "What is the chemical symbol for water?",
  questionSq: "Cili është simboli kimik për ujin?",
  options: ["H2O", "CO2", "O2", "NaCl"],
  optionsSq: ["H2O", "CO2", "O2", "NaCl"],
  correctAnswer: 0,
  difficulty: "easy",
  category: "science"
};
```

### Organizimi i të Dhënave

**60 Pyetje Totale:**
- **Science**: 15 pyetje (5 easy, 5 medium, 5 hard)
- **History**: 15 pyetje (5 easy, 5 medium, 5 hard)
- **Literature**: 15 pyetje (5 easy, 5 medium, 5 hard)
- **Critical Thinking**: 15 pyetje (5 easy, 5 medium, 5 hard)

**Përparësitë e Qasjes Statike:**
✅ Nuk ka nevojë për server ose bazë të dhënash  
✅ Koha e ngarkimit më e shpejtë  
✅ Kostot e hosting-ut më të ulëta  
✅ Deployment i thjeshtë  
✅ Offline functionality  

**Disavantazhet:**
❌ Nuk mund të shtohen pyetje dinamikisht  
❌ Nuk ruhen rezultatet e përdoruesve  
❌ Nuk ka autentifikim përdoruesish  
❌ Nuk ka leaderboard ose statistika  

---

## Planifikimi i Ardhshëm (Faza 2 - Opcionale)

Nëse në të ardhmen vendoset të shtohet funksionaliteti i bazës së të dhënave, rekomandohet përdorimi i **Supabase** ose **Firebase** për të menaxhuar:

### Tabelat e Propozuara

#### 1. **Tabela `users`**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  total_score INTEGER DEFAULT 0
);
```

#### 2. **Tabela `quiz_attempts`**
```sql
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  category VARCHAR(50) NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. **Tabela `questions` (Dinamike)**
```sql
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question_text_en TEXT NOT NULL,
  question_text_sq TEXT NOT NULL,
  options_en JSONB NOT NULL,
  options_sq JSONB NOT NULL,
  correct_answer INTEGER NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);
```

#### 4. **Tabela `leaderboard`**
```sql
CREATE TABLE leaderboard (
  user_id UUID REFERENCES users(id),
  category VARCHAR(50) NOT NULL,
  best_score INTEGER NOT NULL,
  best_score_date TIMESTAMP,
  PRIMARY KEY (user_id, category)
);
```

### Veçoritë e Ardhshme me Bazë të Dhënash

1. **Autentifikimi i Përdoruesve**
   - Regjistrim dhe login
   - Ruajtja e profilit të përdoruesit
   - Menaxhimi i sesioneve

2. **Ruajtja e Rezultateve**
   - Historie e tentativave të kuizeve
   - Statistika personale
   - Progres tracking

3. **Leaderboard**
   - Renditja e përdoruesve sipas kategorisë
   - Rezultatet më të mira
   - Krahasimi me përdorues të tjerë

4. **Menaxhimi Dinamik i Pyetjeve**
   - Shtimi i pyetjeve të reja nga admin
   - Editimi i pyetjeve ekzistuese
   - Aktivizimi/Çaktivizimi i pyetjeve

5. **Analytics**
   - Statistika mbi vështirësinë e pyetjeve
   - Përgjigjjet më të shpeshta
   - Analiza e performancës

---

## Përfundim

Për momentin, aplikacioni BrainQuest funksionon si një aplikacion **stateless** me të dhëna të hard-coded. Kjo qasje është e përshtatshme për:
- Prototipim të shpejtë
- Demo projekti
- Aplikacione edukative të thjeshta
- Mjedise pa lidhje në internet

Nëse aplikacioni zgjerohet në të ardhmen me veçori të tilla si autentifikim, leaderboard, ose menaxhim dinamik i përmbajtjes, implementimi i një baze të dhënash do të bëhet i nevojshëm.

---

**Data e Rishikimit:** [Data]  
**Statusi:** Dokumentacion i Planifikimit - Faza 1  
**Aprovuar nga:** [Emri i Profesorit/Mentorit]
