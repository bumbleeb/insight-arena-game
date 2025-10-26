import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  showResult: boolean;
}

export const QuizQuestion = ({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  onAnswerSelect,
  showResult,
}: QuizQuestionProps) => {
  return (
    <Card className="p-8 shadow-card border-border animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-foreground">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showIncorrect = showResult && isSelected && !isCorrect;

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
    </Card>
  );
};
