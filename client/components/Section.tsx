import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-32 scroll-mt-20 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
