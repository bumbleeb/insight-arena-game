import { Trophy } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  total: number;
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  return (
    <div className="flex items-center gap-3 bg-gradient-primary px-6 py-3 rounded-full shadow-glow">
      <Trophy className="w-6 h-6 text-white" />
      <span className="text-2xl font-bold text-white">
        {score} / {total}
      </span>
    </div>
  );
};
