import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

function App() {
  return (
    <div className="relative">
      {/* Compact top navigation for quick section jumps. */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="font-serif text-xl font-bold tracking-wide text-primary">
            NG ZHENG A.K.A Nutz
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a className="transition-colors hover:text-primary" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-primary" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container space-y-20 pb-20 pt-10 md:space-y-24 md:pt-14">
        {/* Section composition keeps the homepage modular and reusable. */}
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
