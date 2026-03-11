export type Project = {
  title: string;
  description: string;
  images: string[];
  liveUrl: string;
  tags: string[];
};

// Replace these entries with your real websites and screenshot paths.
export const projects: Project[] = [
  {
    title: "AI Bill Splitter",
    description:
      "A bill splitter web app that uses AI to fairly divide expenses among friends, with a simple interface and real-time calculations.",
    images: [
      "/images/nutzsplit-home.png",
      "/images/nutzsplit-create.png",
      "/images/nutzsplit-dashboard.png",
    ],
    liveUrl: "https://nutzsplit.vercel.app/",
    tags: ["React", "TypeScript", "AI Integration"],
  },
];
