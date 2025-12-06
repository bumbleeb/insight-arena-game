import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Trophy, Medal, Award, Globe } from "lucide-react";

interface LeaderboardEntry {
  id: string;
  username: string;
  category: string;
  score: number;
  total_questions: number;
  percentage: number;
  completed_at: string;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: language === "en" ? "All Categories" : "Të gjitha" },
    { value: "science", label: t.science },
    { value: "history", label: t.history },
    { value: "literature", label: t.literature },
    { value: "critical-thinking", label: t.criticalThinking },
  ];

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedCategory]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    let query = supabase
      .from("leaderboard")
      .select(`
        id,
        category,
        score,
        total_questions,
        percentage,
        completed_at,
        profiles!leaderboard_user_id_fkey(username)
      `)
      .order("percentage", { ascending: false })
      .order("completed_at", { ascending: true })
      .limit(50);

    if (selectedCategory !== "all") {
      query = query.eq("category", selectedCategory);
    }

    const { data, error } = await query;

    if (!error && data) {
      const formatted = data.map((entry: any) => ({
        id: entry.id,
        username: entry.profiles?.username || "Unknown",
        category: entry.category,
        score: entry.score,
        total_questions: entry.total_questions,
        percentage: entry.percentage,
        completed_at: entry.completed_at,
      }));
      setEntries(formatted);
    }
    setLoading(false);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "science": return t.science;
      case "history": return t.history;
      case "literature": return t.literature;
      case "critical-thinking": return t.criticalThinking;
      default: return category;
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-400" />;
    if (index === 2) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">{index + 1}</span>;
  };

  return (
    <div className="min-h-screen bg-background p-4 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <Button
          variant={language === "en" ? "default" : "outline"}
          onClick={() => setLanguage("en")}
          size="sm"
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          EN
        </Button>
        <Button
          variant={language === "sq" ? "default" : "outline"}
          onClick={() => setLanguage("sq")}
          size="sm"
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          SQ
        </Button>
      </div>

      <div className="container max-w-4xl mx-auto py-12 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === "en" ? "Leaderboard" : "Renditja"}
          </h1>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.value)}
              size="sm"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              {language === "en" ? "Top Scores" : "Rezultatet më të mira"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-muted-foreground py-8">
                {language === "en" ? "Loading..." : "Duke ngarkuar..."}
              </p>
            ) : entries.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {language === "en" ? "No scores yet. Be the first!" : "Nuk ka rezultate ende. Bëhu i pari!"}
              </p>
            ) : (
              <div className="space-y-3">
                {entries.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      index < 3 ? "bg-primary/10" : "bg-muted/50"
                    }`}
                  >
                    {getRankIcon(index)}
                    <div className="flex-1">
                      <p className="font-semibold">{entry.username}</p>
                      <p className="text-sm text-muted-foreground">
                        {getCategoryLabel(entry.category)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">{entry.percentage}%</p>
                      <p className="text-sm text-muted-foreground">
                        {entry.score}/{entry.total_questions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
