import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectImageCarouselProps = {
  images: string[];
  projectTitle: string;
};

export function ProjectImageCarousel({ images, projectTitle }: ProjectImageCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    if (images.length === 0) {
      return;
    }

    const normalizedIndex = (index + images.length) % images.length;
    const viewport = viewportRef.current;

    setActiveIndex(normalizedIndex);

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      left: normalizedIndex * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const slideWidth = viewport.clientWidth || 1;
    const nextIndex = Math.round(viewport.scrollLeft / slideWidth);

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  if (images.length === 0) {
    return (
      <div className="flex h-60 items-center justify-center bg-muted/40 text-sm text-muted-foreground md:h-72">
        Add project screenshots
      </div>
    );
  }

  return (
    // Each project card can display multiple screenshots in a horizontal scroll carousel.
    <div className="relative overflow-hidden border-b border-border/70">
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <img
            key={`${projectTitle}-${index + 1}`}
            src={image}
            alt={`${projectTitle} screenshot ${index + 1}`}
            className="h-80 w-full shrink-0 basis-full object-contain"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => goToSlide(activeIndex - 1)}
            className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/90 p-0"
            aria-label={`Previous ${projectTitle} image`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => goToSlide(activeIndex + 1)}
            className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/90 p-0"
            aria-label={`Next ${projectTitle} image`}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/80 px-2 py-1">
            {images.map((_, index) => (
              <button
                key={`dot-${projectTitle}-${index}`}
                type="button"
                aria-label={`Go to screenshot ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full bg-muted-foreground/45 transition-all",
                  activeIndex === index && "w-4 bg-primary",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
