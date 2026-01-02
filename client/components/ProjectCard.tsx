import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  year: string;
  achievement?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  highlights,
  year,
  achievement,
}: ProjectCardProps) {
  return (
    <div className="group bg-white border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg hover:border-primary transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
          {title}
        </h3>
        <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">
          {year}
        </span>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {achievement && (
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-start gap-3 border border-primary/20">
          <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm font-medium text-foreground">{achievement}</p>
        </div>
      )}

      {highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Highlights:
          </h4>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex gap-3"
              >
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
