import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { toast } from "sonner";
import { Brain, Globe } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(language === "en" ? "Invalid email or password" : "Email ose fjalëkalim i gabuar");
      }
    } else {
      if (!username.trim()) {
        toast.error(language === "en" ? "Username is required" : "Emri i përdoruesit kërkohet");
        setLoading(false);
        return;
      }
      const { error } = await signUp(email, password, username);
      if (error) {
        if (error.message.includes("already registered")) {
          toast.error(language === "en" ? "Email already registered" : "Email-i është regjistruar tashmë");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success(language === "en" ? "Account created successfully!" : "Llogaria u krijua me sukses!");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
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

      <Card className="w-full max-w-md relative z-10 bg-card/95 backdrop-blur-sm border-primary/20">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Brain className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BrainQuest
            </CardTitle>
          </div>
          <CardDescription>
            {isLogin 
              ? (language === "en" ? "Sign in to continue" : "Identifikohu për të vazhduar")
              : (language === "en" ? "Create an account" : "Krijo një llogari")
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username">
                  {language === "en" ? "Username" : "Emri i përdoruesit"}
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={language === "en" ? "Enter your username" : "Shkruani emrin tuaj"}
                  required={!isLogin}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "en" ? "Enter your email" : "Shkruani email-in tuaj"}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                {language === "en" ? "Password" : "Fjalëkalimi"}
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={language === "en" ? "Enter your password" : "Shkruani fjalëkalimin tuaj"}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading 
                ? (language === "en" ? "Loading..." : "Duke ngarkuar...")
                : isLogin 
                  ? (language === "en" ? "Sign In" : "Identifikohu")
                  : (language === "en" ? "Sign Up" : "Regjistrohu")
              }
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin 
                ? (language === "en" ? "Don't have an account? Sign up" : "Nuk keni llogari? Regjistrohuni")
                : (language === "en" ? "Already have an account? Sign in" : "Keni llogari? Identifikohuni")
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
