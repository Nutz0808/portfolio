import { Code2, Gauge, Paintbrush, Smartphone } from "lucide-react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { label: "React + TypeScript", icon: Code2 },
  { label: "Tailwind CSS", icon: Paintbrush },
  { label: "Performance Optimization", icon: Gauge },
  { label: "Responsive UI", icon: Smartphone },
  { label: "Minimalistic Designs", icon: Paintbrush },
  { label: "Accessible Components", icon: Code2 },
];

export function AboutSection() {
  return (
    // About section combines a short bio with a compact skill list.
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="About"
        title="Designing clarity into every page"
        description="I enjoy building products that feel calm, readable, and purposeful on every screen size."
      />

      <Card>
        <CardContent className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am NG ZHENG, a frontend developer focused on clean website experiences. My workflow balances design
              detail with maintainable code, so teams can ship quickly without losing visual quality.
            </p>
            <p>
              Recent work includes portfolio websites, product landing pages, and business sites where performance,
              readability, and mobile responsiveness are equally important.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Badge key={skill.label} variant="outline" className="gap-1.5 px-3 py-1">
                    {Icon ? <Icon className="h-3.5 w-3.5 text-primary" /> : null}
                    {skill.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
