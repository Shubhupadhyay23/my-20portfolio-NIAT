import { Badge } from "@/components/ui/badge";

interface SkillGroupProps {
  category: string;
  skills: string[];
}

export default function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
