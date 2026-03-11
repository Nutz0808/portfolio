type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-muted-foreground">{description}</p>
    </div>
  );
}
