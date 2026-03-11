import { ArrowUpRight } from "lucide-react";

import { ProjectImageCarousel } from "@/components/sections/ProjectImageCarousel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const hasSingleProject = projects.length === 1;

  return (
    // Projects are displayed in a responsive grid with subtle hover feedback.
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Website Work"
        description="A showcase of recent projects that highlight my focus on clarity, performance, and responsive design."
      />

      <div className={cn("grid gap-6", !hasSingleProject && "md:grid-cols-2")}>
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className={cn(
              "overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-mellow",
              hasSingleProject && "mx-auto w-full max-w-4xl",
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <ProjectImageCarousel images={project.images} projectTitle={project.title} />
            <CardHeader className="space-y-3">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
