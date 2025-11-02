import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import { Beaker, BookOpen, Brain, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const Index = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      title: t.science,
      icon: Beaker,
      color: "bg-gradient-primary",
      category: "science",
    },
    {
      title: t.history,
      icon: Clock,
      color: "bg-gradient-secondary",
      category: "history",
    },
    {
      title: t.literature,
      icon: BookOpen,
      color: "bg-gradient-accent",
      category: "literature",
    },
    {
      title: t.criticalThinking,
      icon: Brain,
      color: "bg-gradient-success",
      category: "critical-thinking",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container max-w-6xl mx-auto py-12 relative z-10">
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          <Button
            variant={language === "en" ? "default" : "outline"}
            onClick={() => setLanguage("en")}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            English
          </Button>
          <Button
            variant={language === "sq" ? "default" : "outline"}
            onClick={() => setLanguage("sq")}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            Shqip
          </Button>
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <AnimatedTitle />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t.subtitle}
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
