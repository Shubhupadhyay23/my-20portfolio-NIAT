import { MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

export default function ExperienceCard({
  title,
  company,
  duration,
  location,
  description,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
            {duration}
          </span>
        </div>
        <p className="text-lg font-semibold text-primary mb-3">{company}</p>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {highlights.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Key Responsibilities:
          </h4>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex gap-3"
              >
                <span className="text-primary font-bold">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
