import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import projects from "../data/projets";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id); // Find project by id

  if (!project) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <div className="flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-4xl font-bold">{project.title}</h1>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    View Live
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-8">{project.fullDescription}</p>

                {project.challenges && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                    <ul className="list-disc list-inside mb-8">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="mb-2">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.solutions && (
                  <>
                    <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                    <ul className="list-disc list-inside mb-8">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="mb-2">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
