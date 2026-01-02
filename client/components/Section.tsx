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
    <section
      id={id}
      className={`py-16 sm:py-24 scroll-mt-20 ${className}`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}
