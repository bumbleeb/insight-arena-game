import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

export const CategoryCard = ({ title, icon: Icon, color, onClick }: CategoryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`${color} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-glow p-8 flex flex-col items-center justify-center gap-4 border-0 animate-scale-in`}
    >
      <Icon className="w-16 h-16 text-white" />
      <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
    </Card>
  );
};
