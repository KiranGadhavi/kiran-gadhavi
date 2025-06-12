"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectComponent from "./components/projects/ProjectComponent";
import SkillsComponents from "./components/Skills/SkillsComponents";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };
  const [copyStatus, setCopyStatus] = useState<string | null>(null); // State to manage copy status

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus(text); // Set the copied text as the status
        setTimeout(() => setCopyStatus(null), 2000); // Clear the status after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
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
      <header className="py-4 px-4 flex justify-between items-center pb-4 fixed w-full z-10  top-0 bg-background dark:bg-gray-900 shadow-md">
        <h1 className="text-2xl mx-auto font-bold transition-colors duration-300 hover:text-blue-500">
          {/* Kiran Gadhavi */}
          <img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+I'm+Kiran+Gadhavi;Welcome+to+my+Portfolio!&center=true&size=24" />
          <p className="text-sm text-green-600 font-medium">
            Open to Full-Time Roles | Full Stack / Frontend Developer | Based in
            the UK (Visa Ready)
          </p>
        </h1>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>
      <hr className="relative w-full top-28 " />

      <main className="container mx-auto px-4 max-w-3xl mt-32">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="my-8 text-center"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            className="rounded-lg bg-green-50 p-4 shadow-lg  bg-opacity-10 backdrop-blur-lg"
          >
            <Image
              src="/picture.jpg"
              width={200}
              height={200}
              alt="Kiran Gadhavi"
              className="rounded-full mx-auto mb-4 w-40 h-40  shadow-xl object-cover"
            />
            <h2 className="text-3xl font-bold mb-2 transition-colors duration-300 hover:text-blue-500">
              Full Stack Developer
            </h2>
            <p className="text-xl mb-3">
              Crafting elegant solutions for complex problems
            </p>
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
              href="/Developer.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mb-4"
            >
              Download Resume
            </Link>

            <hr />
          </motion.div>
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
            <h2 className="text-2xl font-semibold transition-colors duration-300 hover:text-blue-500">
              {" "}
              About Me
            </h2>
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
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <Image
              src="https://media.giphy.com/media/cj87CxfRtrUifF3Ryk/giphy.gif"
              width={30}
              height={30}
              alt="Work Experience"
            />
            <h2 className="text-2xl font-semibold transition-colors duration-300 hover:text-blue-500">
              {" "}
              Work Experience
            </h2>
          </div>

          <div className="space-y-4">
            <div className="py-2">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Full Stack Developer at Anima People
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  London, UK • Full-time • Internship | Nov 2024 – May 2025
                </p>
                <p>
                  Built and optimized full-stack features using Next.js, React,
                  Node.js, Fastify, Prisma, and PostgreSQL. Collaborated across
                  teams to deliver scalable, responsive web applications with a
                  strong focus on performance and usability.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Full Stack Developer at School of Code
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  West Midlands, UK • Full-time • Jun 2024 – Oct 2024
                </p>
                <p>
                  Created scalable web apps using React, Next.js, Tailwind,
                  Node.js, and PostgreSQL. Built full-stack projects including a
                  Recipe API and a quiz app with API integration. Employed CI/CD
                  pipelines (GitHub Actions, Docker) and TDD with Vitest and
                  Playwright.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Developer at Pearl Organisation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  India • Full-time • Aug 2020 – Apr 2023
                </p>
                <p>
                  Developed React-based e-commerce and admin dashboard apps.
                  Improved UX, reduced load times by 30%, and implemented unit
                  tests. Used Kanban (JIRA), Figma, and GitHub for collaborative
                  development.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  IT Trainer at Cyber Radix
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  India • Full-time • Jan 2018 – Jun 2020
                </p>
                <p>
                  Delivered training on web development (HTML, CSS, JavaScript,
                  Bootstrap) and programming fundamentals (Java, Python, C++).
                  Emphasized hands-on project work and practical application.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Developer at Innotical Solutions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  India • Full-time • Jul 2016 – Nov 2017
                </p>
                <p>
                  Developed responsive and user-friendly web interfaces using
                  HTML, Bootstrap CSS, and JavaScript.
                </p>
              </div>

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
          <div className="flex flex-col items-center">
            {" "}
            {/* Centering the entire content */}
            <div className="flex">
              <Image
                src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif"
                width={30}
                height={20}
                alt="Contact"
                className="w-12 h-10"
              />
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>{" "}
            </div>
            {/* Add a title for the section */}
            <ul className="list-none space-y-4 text-gray-500 text-sm">
              {" "}
              {/* Space between list items */}
              <li className="flex items-center justify-between bg-gray-800 p-4 rounded shadow-md w-full max-w-md">
                <span>
                  Email: <span id="email">kirangadhavi@hotmail.com</span>
                </span>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                  onClick={() => copyToClipboard("kirangadhavi@hotmail.com")}
                >
                  {copyStatus === "kirangadhavi@hotmail.com"
                    ? "Copied"
                    : "Copy"}
                </button>
              </li>
              <li className="flex items-center justify-between bg-gray-800 p-4  gap-2 rounded shadow-md w-full max-w-md">
                <span>
                  LinkedIn:{" "}
                  <span id="linkedin">
                    https://www.linkedin.com/in/kiran-gadhavi7/
                  </span>
                </span>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                  onClick={() =>
                    copyToClipboard("https://linkedin.com/in/kiran-gadhavi7/")
                  }
                >
                  {copyStatus === "https://linkedin.com/in/kiran-gadhavi7/"
                    ? "Copied"
                    : "Copy"}
                </button>
              </li>
              <li className="flex items-center justify-between bg-gray-800 p-4 rounded shadow-md w-full max-w-md mb-4">
                <span>
                  GitHub:{" "}
                  <span id="github">https://github.com/KiranGadhavi</span>
                </span>
                <button
                  className="bg-blue-500 items-center justify-center text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                  onClick={() =>
                    copyToClipboard("https://github.com/KiranGadhavi")
                  }
                >
                  {copyStatus === "https://github.com/KiranGadhavi"
                    ? "Copied"
                    : "Copy"}
                </button>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
      <hr />
      <footer className="py-4 px-4 text-center">
        <p className="transition-colors duration-300 hover:text-blue-500">
          &copy; 2024 Kiran Gadhavi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
