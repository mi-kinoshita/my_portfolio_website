import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
}

const projects: Project[] = [
  {
    id: "ai-email-builder",
    title: "AI Email Builder",
    description:
      "An intuitive email builder powered by AI to help create professional emails quickly and efficiently.",
    image: "/swiftmail_ai_ss.png",
    tags: ["Next.js", "Convex", "AI Integration", "Tailwind CSS"],
    link: "https://ai-email-builder-omega.vercel.app/",
    fullDescription: `
      The AI Email Builder is a sophisticated tool that combines artificial intelligence with user-friendly interface design
      to streamline the email creation process. This project showcases my ability to integrate complex AI functionality
      while maintaining a simple and intuitive user experience.
    `,
    challenges: [
      "Implementing real-time AI suggestions",
      "Optimizing response times for better user experience",
      "Creating an intuitive interface for complex functionality",
    ],
    solutions: [
      "Utilized efficient state management for real-time updates",
      "Implemented request debouncing and caching",
      "Conducted extensive user testing to refine the interface",
    ],
  },
  {
    id: "design-system",
    title: "Design System",
    description:
      "A comprehensive design system built for scalability and consistency across digital products.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    tags: ["Design System", "UI/UX", "Documentation"],
    fullDescription: `
    A modern portfolio website showcasing design and development work with dark mode and i18n support.
  `,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing design and development work with dark mode and i18n support.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    fullDescription: `
    A modern portfolio website showcasing design and development work with dark mode and i18n support.
  `,
  },
  // Add more projects here
];

export default projects;
