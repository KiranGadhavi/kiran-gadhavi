"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <header className="py-6 px-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Kiran Gadhavi
        </motion.h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>

      <main className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="my-8 text-center"
        >
          <Image
            src="/picture.jpg"
            width={200}
            height={200}
            alt="Kiran Gadhavi"
            className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
          />
          <h2 className="text-4xl font-bold mb-2">Full Stack Developer</h2>
          <p className="text-xl">
            Crafting elegant solutions for complex problems
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="my-8"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Full Stack Developer with a passion for creating elegant, efficient
            solutions across the entire web development stack.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="my-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Image
              src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
              width={30}
              height={30}
              alt="Skills"
            />
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              {
                src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
                alt: "JavaScript",
              },
              {
                src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
                alt: "TypeScript",
              },
              {
                src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
                alt: "React",
              },
              {
                src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
                alt: "Next.js",
              },
              {
                src: "https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
                alt: "Node.js",
              },
              {
                src: "https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white",
                alt: "Express",
              },
              {
                src: "https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
                alt: "PostgreSQL",
              },
              {
                src: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white",
                alt: "AWS",
              },
              {
                src: "https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
                alt: "Docker",
              },
              {
                src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
                alt: "Git",
              },
              {
                src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
                alt: "Jest",
              },
              {
                src: "https://img.shields.io/badge/-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white",
                alt: "Supabase",
              },
              {
                src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
                alt: "Tailwind CSS",
              },
              {
                src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
                alt: "Vercel",
              },
            ].map((skill, index) => (
              <Image
                key={index}
                src={skill.src}
                alt={skill.alt}
                width={50}
                height={50}
              />
            ))}
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="my-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold">Project {project}</h3>
                <p>Innovative solution leveraging cutting-edge technologies.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="my-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer at School Of Code
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2024 - Present
              </p>
              <p>
                Led development of scalable web applications using React and
                Node.js.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="my-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: kirangadhavi@hotmail.com</p>
          <p>LinkedIn: linkedin.com/in/kiran-gadhavi7</p>
          <p>GitHub: github.com/KiranGadhavi</p>
        </motion.section>
      </main>

      <footer className="py-4 px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link
            href="https://linkedin.com/in/kiran-gadhavi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/KiranGadhavi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
          >
            GitHub
          </Link>
        </div>
        <Link
          href="/kiran_gadhavi_resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mb-4"
        >
          Download Resume
        </Link>
        <p>&copy; 2024 Kiran Gadhavi. All rights reserved.</p>
      </footer>
    </div>
  );
}
