import React from "react";
import Sns from "./Sns";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <Sns />
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">
            © {currentYear} Miho Kinoshita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
