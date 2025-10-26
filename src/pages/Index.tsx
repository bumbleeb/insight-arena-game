import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { Beaker, BookOpen, Brain, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Science",
      icon: Beaker,
      color: "bg-gradient-primary",
      category: "science",
    },
    {
      title: "History",
      icon: Clock,
      color: "bg-gradient-secondary",
      category: "history",
    },
    {
      title: "Literature",
      icon: BookOpen,
      color: "bg-gradient-accent",
      category: "literature",
    },
    {
      title: "Critical Thinking",
      icon: Brain,
      color: "bg-gradient-success",
      category: "critical-thinking",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container max-w-6xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            BrainQuest
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself with engaging questions across Science, History, Literature, and Critical Thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          {categories.map((cat, index) => (
            <div
              key={cat.category}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                title={cat.title}
                icon={cat.icon}
                color={cat.color}
                onClick={() => navigate(`/quiz?category=${cat.category}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
