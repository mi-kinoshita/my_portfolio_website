import { Github, Linkedin, Notebook, Twitter } from "lucide-react";
import React from "react";

function Sns() {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/mi-kinoshita"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/miho-kinoshita"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://x.com/mi__kinoshita"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://note.com/mi_kinoshita"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
      >
        <Notebook size={24} />
      </a>
    </div>
  );
}

export default Sns;
