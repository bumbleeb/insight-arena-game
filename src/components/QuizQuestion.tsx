import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import catThumbsUp from "@/assets/cat-thumbs-up.png";
import catAnnoyed from "@/assets/cat-annoyed.png";

interface QuizQuestionProps {
  question: string;
  questionSq: string;
  options: string[];
  optionsSq: string[];
  correctAnswer: number;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  showResult: boolean;
}

export const QuizQuestion = ({
  question,
  questionSq,
  options,
  optionsSq,
  correctAnswer,
  selectedAnswer,
  onAnswerSelect,
  showResult,
}: QuizQuestionProps) => {
  const [questionLang, setQuestionLang] = useState<'en' | 'sq'>('en');
  const { language } = useLanguage();
  const t = translations[language];

  const displayQuestion = questionLang === 'sq' ? questionSq : question;
  const displayOptions = questionLang === 'sq' ? optionsSq : options;
  
  const isCorrect = selectedAnswer === correctAnswer;
  const showCat = showResult && selectedAnswer !== null;

  return (
    <Card className="p-8 shadow-card border-border animate-fade-in relative">
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant={questionLang === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setQuestionLang('en')}
          className="gap-2"
        >
          <Languages className="w-4 h-4" />
          {t.switchToEnglish}
        </Button>
        <Button
          variant={questionLang === 'sq' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setQuestionLang('sq')}
          className="gap-2"
        >
          <Languages className="w-4 h-4" />
          {t.switchToAlbanian}
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-foreground">{displayQuestion}</h2>
      
      <div className="space-y-3">
        {displayOptions.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === correctAnswer;
          const showCorrect = showResult && isCorrectOption;
          const showIncorrect = showResult && isSelected && !isCorrectOption;

          return (
            <Button
              key={index}
              onClick={() => !showResult && onAnswerSelect(index)}
              disabled={showResult}
              variant="outline"
              className={`w-full justify-start text-left p-6 text-lg transition-all duration-300 ${
                showCorrect
                  ? "bg-success text-success-foreground border-success"
                  : showIncorrect
                  ? "bg-destructive text-destructive-foreground border-destructive"
                  : isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-muted"
              }`}
            >
              <span className="flex-1">{option}</span>
              {showCorrect && <CheckCircle2 className="w-6 h-6" />}
              {showIncorrect && <XCircle className="w-6 h-6" />}
            </Button>
          );
        })}
      </div>

      {showCat && (
        <div className="mt-6 flex justify-center animate-fade-in">
          <img 
            src={isCorrect ? catThumbsUp : catAnnoyed} 
            alt={isCorrect ? "Happy cat with thumbs up" : "Annoyed cat"} 
            className="w-48 h-36 object-contain rounded-lg"
          />
        </div>
      )}
    </Card>
  );
};
