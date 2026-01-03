import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Shubham Upadhyay
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about building innovative
              solutions with AI/ML and modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Skills", id: "skills" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shubham-upadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Shubhupadhyay23"
                target="_blank"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ubhupendra90@gmail.com"
                className="p-2 bg-muted hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Shubham Upadhyay. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
