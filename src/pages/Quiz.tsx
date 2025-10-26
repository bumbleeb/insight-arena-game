import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { QuizQuestion } from "@/components/QuizQuestion";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { questions, Question } from "@/data/questions";
import { ArrowLeft, Trophy, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "science";

  const categoryQuestions = questions.filter((q) => q.category === category);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = categoryQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / categoryQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = (score / categoryQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container max-w-2xl mx-auto py-8">
          <Card className="p-8 text-center shadow-card animate-scale-in">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4 text-foreground">Quiz Complete!</h1>
            <div className="mb-6">
              <p className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {score} / {categoryQuestions.length}
              </p>
              <p className="text-xl text-muted-foreground">
                You scored {percentage.toFixed(0)}%
              </p>
            </div>
            <div className="space-y-3">
              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Categories
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container max-w-3xl mx-auto py-8">
        <div className="mb-6 flex items-center justify-between">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <ScoreDisplay score={score} total={categoryQuestions.length} />
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2 text-sm text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {categoryQuestions.length}</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          showResult={showResult}
        />

        {showResult && (
          <div className="mt-6 animate-fade-in">
            <Button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-primary hover:opacity-90"
              size="lg"
            >
              {currentQuestionIndex < categoryQuestions.length - 1
                ? "Next Question"
                : "View Results"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
