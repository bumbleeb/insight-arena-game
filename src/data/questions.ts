export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  // Science Questions
  {
    id: 1,
    category: "science",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    correctAnswer: 1,
  },
  {
    id: 2,
    category: "science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2,
  },
  {
    id: 3,
    category: "science",
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
  },
  {
    id: 4,
    category: "science",
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
  },
  {
    id: 5,
    category: "science",
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
  },

  // History Questions
  {
    id: 6,
    category: "history",
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
  },
  {
    id: 7,
    category: "history",
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correctAnswer: 1,
  },
  {
    id: 8,
    category: "history",
    question: "Which ancient civilization built the pyramids?",
    options: ["Romans", "Greeks", "Egyptians", "Mayans"],
    correctAnswer: 2,
  },
  {
    id: 9,
    category: "history",
    question: "What year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correctAnswer: 2,
  },
  {
    id: 10,
    category: "history",
    question: "Who was known as the Iron Lady?",
    options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Angela Merkel"],
    correctAnswer: 1,
  },

  // Literature Questions
  {
    id: 11,
    category: "literature",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
  },
  {
    id: 12,
    category: "literature",
    question: "What is the first book in the Harry Potter series?",
    options: [
      "Chamber of Secrets",
      "Prisoner of Azkaban",
      "Philosopher's Stone",
      "Goblet of Fire",
    ],
    correctAnswer: 2,
  },
  {
    id: 13,
    category: "literature",
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"],
    correctAnswer: 0,
  },
  {
    id: 14,
    category: "literature",
    question: "What is the name of the hobbit in 'The Lord of the Rings'?",
    options: ["Gandalf", "Aragorn", "Frodo", "Legolas"],
    correctAnswer: 2,
  },
  {
    id: 15,
    category: "literature",
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Alice Walker"],
    correctAnswer: 0,
  },

  // Critical Thinking Questions
  {
    id: 16,
    category: "critical-thinking",
    question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: ["Yes", "No", "Sometimes", "Cannot be determined"],
    correctAnswer: 0,
  },
  {
    id: 17,
    category: "critical-thinking",
    question: "A farmer has 17 sheep, and all but 9 die. How many are left?",
    options: ["8", "9", "0", "17"],
    correctAnswer: 1,
  },
  {
    id: 18,
    category: "critical-thinking",
    question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "38"],
    correctAnswer: 1,
  },
  {
    id: 19,
    category: "critical-thinking",
    question: "My brother ate a hamburger and then got sick. The hamburger must have made him sick.",
    options: [
      "It is based on emotional reasoning.",
      "It attacks the person instead of the argument.",
      "It assumes cause and effect without proof.",
      "It uses a sample size that is too small.",
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    category: "critical-thinking",
    question: "Which statement is a logical fallacy? 'Everyone else is doing it, so it must be right.'",
    options: [
      "Ad hominem",
      "Bandwagon fallacy",
      "Straw man",
      "False dilemma",
    ],
    correctAnswer: 1,
  },
];
