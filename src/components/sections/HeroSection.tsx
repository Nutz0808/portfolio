import { ArrowDownRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    // Hero section introduces identity and gives primary navigation CTAs.
    <section id="home" className="grid items-center gap-10 pt-4 md:grid-cols-2 md:pt-10">
      <div className="animate-fade-up space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          <Sparkles className="h-4 w-4" />
          Frontend Developer Portfolio
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">NG ZHENG</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          I craft clear, high-performance websites with minimal layouts, expressive typography, and thoughtful motion.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      <Card className="animate-fade-up overflow-hidden border-primary/20 bg-card/90" style={{ animationDelay: "120ms" }}>
        <CardContent className="space-y-5 p-6 md:p-8">
          <img
            src="/images/profile-pic.png"
            alt="Profile photo of NG ZHENG"
            className="aspect-[5/3] w-full rounded-lg border border-border/70 bg-muted/30 object-contain"
          />
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Currently focused on</p>
            <p className="text-base text-muted-foreground">
              Building responsive interfaces with React, TypeScript, Tailwind CSS, and shadcn/ui-inspired component systems.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
