import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Code,
  Palette,
  Layout,
  ExternalLink,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import Sns from "../components/Sns";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with a focus on user experience.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Building responsive and performant web applications using modern technologies.",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Product Design",
      description:
        "Designing end-to-end product experiences that solve real user problems.",
    },
  ];

  const featuredWorks = [
    {
      id: "ai-email-builder",
      title: "AI Email Builder",
      description:
        "An intuitive email builder powered by AI to help create professional emails quickly and efficiently.",
      image: "/swiftmail_ai_ss.png",
      tags: ["Next.js", "Convex", "AI Integration"],
      link: "https://ai-email-builder-omega.vercel.app/",
    },
    {
      id: "design-system",
      title: "Design System",
      description:
        "A comprehensive design system built for scalability and consistency across digital products.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
      tags: ["Design System", "UI/UX", "Documentation"],
      link: "#",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing design and development work with dark mode and i18n support.",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/50 to-white dark:from-primary-900/30 dark:to-neutral-900" />
          <img
            src={"/white_image.jpg"}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-50">
              {t("home.title")}
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
              {t("home.subtitle")}
            </p>
            <div className="mt-10">
              <motion.a
                href="#profile"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#A29C68] hover:bg-[#BBB791] md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/profire_picture.jpeg"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">About Me</h2>
              <Sns />
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                I'm a passionate designer and developer with expertise in
                creating user-centered digital experiences. With a background in
                both design and development, I bridge the gap between aesthetics
                and functionality.
              </p>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Let's Work Together
                  <Send size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section id="featured-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              A selection of my recent projects showcasing my expertise in UI/UX
              design and frontend development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={work} /> {/* Use ProjectCard component */}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-neutral-900 transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
