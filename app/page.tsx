"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectComponent from "./components/projects/ProjectComponent";
import SkillsComponents from "./components/Skills/SkillsComponents";

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
      <header className="py-6 px-4 flex justify-between items-center pb-4">
        <h1 className="text-2xl mx-auto font-bold ">Kiran Gadhavi</h1>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>
      <hr />

      <main className="container mx-auto px-4 max-w-3xl">
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
          <h2 className="text-3xl font-bold mb-2">Full Stack Developer</h2>
          <p className="text-xl mb-3">
            Crafting elegant solutions for complex problems
          </p>
          <hr />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className=" my-4 "
        >
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            <Image
              src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif "
              width={42}
              height={42}
              alt="About"
            />
            <h2 className="text-2xl font-semibold"> About Me</h2>
          </div>
          <p>
            I’m a Full Stack Developer with a passion for building complete web
            solutions, from dynamic front-end interfaces to robust back-end
            systems. My expertise lies in creating responsive, user-friendly
            applications using technologies like React, JavaScript, and Tailwind
            CSS on the front-end, while also working with Node.js, PostgreSQL,
            and RESTful APIs to power the back-end.
          </p>
        </motion.section>
        <SkillsComponents title={"Skills & Technologies"}></SkillsComponents>
        <ProjectComponent title={"Projects"}></ProjectComponent>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="my-8 text-center"
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
          className="py-6 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: kirangadhavi@hotmail.com</p>
          <p>LinkedIn: linkedin.com/in/kiran-gadhavi7</p>
          <p>GitHub: github.com/KiranGadhavi</p>
        </motion.section>
      </main>
      <hr />
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
