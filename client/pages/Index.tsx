import { portfolioData } from "@/data/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillGroup from "@/components/SkillGroup";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Index() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shubham_Upadhyay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 sm:py-32 overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <p className="text-sm font-medium text-primary">
                Welcome to my portfolio
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shubham
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full-stack developer & AI/ML enthusiast building innovative
              solutions with modern technologies. Let's create something amazing
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                Python
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <p>html</p>
              </Badge>
            </div>
          </div>
        </div>

        <ImageCarousel />
      </section>

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="My journey in tech and what drives me"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate computer science student with hands-on experience
              in AI/ML, web development, and automation. Currently pursuing dual
              degrees in Computer Science and Artificial Intelligence & Machine
              Learning at India's leading tech institutes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with a curiosity about how things work. I've
              since built award-winning projects including an autonomous
              vehicle, developed full-stack web applications, and contributed to
              cutting-edge ML research.
            </p>

            <div className="space-y-4 pt-6 border-t border-border">
              <h3 className="text-xl font-bold text-foreground">Key Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">
                    Major Projects
                  </p>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <p className="text-3xl font-bold text-secondary">3</p>
                  <p className="text-sm text-muted-foreground">
                    Awards & Recognition
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {portfolioData.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white border border-border rounded-lg p-6"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {edu.degree}
                </h4>
                <p className="text-primary font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Where I've worked and what I've learned"
        className="bg-white"
      >
        <div className="space-y-6">
          {portfolioData.experience.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Showcasing my best work and innovations"
      >
        <div className="space-y-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Technologies"
        subtitle="Technologies and tools I work with"
        className="bg-white"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <SkillGroup
              category="Programming Languages"
              skills={portfolioData.skills.languages}
            />
          </div>
          <div className="space-y-8">
            <SkillGroup
              category="Developer Tools"
              skills={portfolioData.skills.tools}
            />
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.competencies &&
              portfolioData.skills.competencies.map((comp) => (
                <Badge
                  key={comp}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border-primary/30 px-4 py-2 text-sm font-medium"
                >
                  {comp}
                </Badge>
              ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Let's Work Together"
        subtitle="I'd love to hear from you. Reach out for opportunities or just to chat!"
        className="text-center bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're interested in collaborating on a project, have an
            internship opportunity, or just want to grab coffee and discuss
            tech, feel free to get in touch.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="mailto:ubhupendra90@gmail.com">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                <Mail className="mr-2 w-4 h-4" />
                Send Me an Email
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/shubham-upadhyay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Connect on LinkedIn
              </Button>
            </a>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-4">
              📧{" "}
              <a
                href="mailto:ubhupendra90@gmail.com"
                className="text-primary hover:underline"
              >
                ubhupendra90@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground mb-4">
              📍 Pune, Maharashtra, India
            </p>
            <p className="text-muted-foreground">
              🔗{" "}
              <a
                href="https://linkedin.com/in/shubham-upadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/shubham-upadhyay
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
