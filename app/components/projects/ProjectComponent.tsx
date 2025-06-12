import React, { useState } from "react"; // Import useState to manage state
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Projects data array

const projects = [
  {
    id: 1,
    title: "kreactify",
    description:
      "A web application built with React, JavaScript, and CSS. Our user-friendly interface simplifies the booking process, allowing you to secure your ideal accommodation in just a few clicks.",
    projectImage: "/reactifyImg.png", // Add project image
    href: "https://kreactify.vercel.app/",
    githubLink: "https://github.com/KiranGadhavi/reactify",
    technologies: [
      {
        src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        alt: "Next.js",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Motion-092E20?style=flat-square&logo=motion&logoColor=white",
        alt: "Motion",
      },
      {
        src: "https://img.shields.io/badge/-Google_Maps-4285F4?style=flat-square&logo=google-maps&logoColor=white",
        alt: "Google Maps",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "An admin dashboard built with React, TypeScript, and SCSS. It allows users to manage users, products, and orders.",
    href: "https://admin-dashboard-phi-sand.vercel.app/",
    githubLink: "https://github.com/KiranGadhavi/Admin_dashboard",
    projectImage: "/adminImg.png",
    technologies: [
      {
        src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
        alt: "TypeScript",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
  {
    id: 3,
    title: "Airbnb Replica",
    description:
      "A web application built with React, JavaScript, and Tailwind CSS. It allows users to book and manage their Airbnb stays.",
    href: "https://kirangadhavi.github.io/airbnb-replica/",
    githubLink: "https://github.com/kirangadhavi/airbnb-replica",
    // gitlabLink: "https://github.com/KiranGadhavi/airbnb-replica",
    projectImage: "/airbnbImg.png",
    technologies: [
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },

      {
        src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github&logoColor=white",
        alt: "Github",
      },
    ],
  },

  {
    id: 4,
    title: "DreamCatcher",
    description:
      "A web application built with React, JavaScript, and CSS. It allows users to create and share their dreams with others. It also includes a feature to track user activity and provide personalized recommendations.",
    href: "https://final-project-the-mad-hackers.vercel.app/",
    githubLink: "https://github.com/kirangadhavi/final-project-the-mad-hackers",
    projectImage: "/dreamImg.png", // Add project image
    technologies: [
      {
        src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        alt: "Next.js",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white",
        alt: "Supabase",
      },
      {
        src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
        alt: "Jest",
      },

      {
        src: "https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
        alt: "Node.js",
      },
      {
        src: "https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
        alt: "PostgreSQL",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
  {
    id: 5,
    title: "QuizQuest",
    description:
      "A quiz application built HTML, JavaScript, and CSS. It allows users to create and take quizzes on various topics. It also includes a leaderboard feature to track user scores.",
    projectImage: "/quiz.png",
    href: "https://kirangadhavi.github.io/QuizQuest/",
    githubLink: "https://github.com/kirangadhavi/QuizQuest",
    technologies: [
      {
        src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
        alt: "HTML5",
      },
      {
        src: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
        alt: "CSS3",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github&logoColor=white",
        alt: "Github",
      },
    ],
  },
  {
    id: 6,
    title: "Banking App",
    description:
      "Welcome to the Banking App! This project is a modern web application designed to provide users with a streamlined experience for managing their banking transactions.",
    href: "https://banking-app-ten.vercel.app/",
    githubLink: "https://github.com/kirangadhavi/banking-app",
    projectImage: "/bankApp.png",
    technologies: [
      {
        src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        alt: "Next.js",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
        alt: "Typescript",
      },
      {
        src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github&logoColor=white",
        alt: "Github",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
  {
    id: 7,
    title: "trickr_street",
    description:
      "Trickr Street is a Next.js application that features an interactive Google Map with custom markers and a night mode theme. It's designed to provide a visually appealing and user-friendly map experience.",
    href: "https://trickrstreet.vercel.app",
    githubLink: "https://github.com/KiranGadhavi/trickr_street",
    projectImage: "/trick.png",
    technologies: [
      {
        src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        alt: "Next.js",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
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
        src: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github&logoColor=white",
        alt: "Github",
      },
      {
        src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
        alt: "Jest",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
  {
    id: 8,
    title: "Hope_Clinic",
    description:
      "Currently building a web app for a Hope clinic with email-based appointment booking, contact options, and an interactive map. Focused on clean design, responsive layout, and intuitive UX using EmailJS and React Leaflet.",
    href: "https://dun-hope-clinic.vercel.app/",
    githubLink: "https://github.com/KiranGadhavi/hopeClinic",
    projectImage: "/project_clinic.png",
    technologies: [
      {
        src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        alt: "Next.js",
      },
      {
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
        alt: "React",
      },
      {
        src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
        alt: "TypeScript",
      },
      {
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
      {
        src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/-Github-181717?style=flat-square&logo=github&logoColor=white",
        alt: "Github",
      },
      {
        src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
        alt: "Jest",
      },
      {
        src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
        alt: "Vercel",
      },
    ],
  },
];

const cardVariants = {
  hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" },
  tap: { scale: 0.95 },
};

const ProjectComponent = ({ title }: { title: string }) => {
  // Step 1: Initialize state to manage the number of projects to display
  const [visibleProjects, setVisibleProjects] = useState(4); // Show 4 projects initially

  // Step 2: Create a function to toggle the number of projects shown
  const toggleProjects = () => {
    setVisibleProjects((prev) =>
      prev === projects.length ? 4 : projects.length
    ); // Show all or reset to 4
  };

  return (
    <div className="container mx-auto py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center space-x-3"
        >
          <Image
            src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
            alt="Projects"
            width={30}
            height={30}
            className="inline-block"
          />
          <h2 className="text-3xl font-bold transition-colors duration-300 hover:text-blue-500">
            {title}
          </h2>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.slice(0, visibleProjects).map(
          (
            project // Step 3: Use slice to control visible projects
          ) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-white border border-gray-200 bg-green-50 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              {project.projectImage && (
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={project.projectImage}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-fit transition-transform duration-300 transform hover:scale-110"
                  />
                </motion.div>
              )}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl text-gray-400 font-bold mb-3 transition-colors duration-300 hover:text-blue-500">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Image
                      key={index}
                      src={tech.src}
                      alt={tech.alt}
                      width={30}
                      height={30}
                      className="inline-block"
                    />
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  {project.href && (
                    <Link href={project.href}>
                      <p className="text-gray-400 font-small hover:underline hover:text-blue-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          className="mr-2"
                        >
                          <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6V3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-6h-2v6H5V5z" />
                        </svg>
                        Live Demo &rarr;
                      </p>
                    </Link>
                  )}

                  {project.githubLink && (
                    <Link href={project.githubLink}>
                      <p className="text-gray-400 font-small hover:underline hover:text-blue-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="mr-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .296c-6.624 0-12 5.376-12 12 0 5.304 3.438 9.8 8.205 11.385.6.111.82-.261.82-.581v-2.188c-3.338.724-4.04-1.616-4.04-1.616-.547-1.385-1.336-1.754-1.336-1.754-1.091-.745.082-.729.082-.729 1.205.083 1.839 1.238 1.839 1.238 1.072 1.834 2.809 1.304 3.494.997.109-.775.42-1.305.763-1.605-2.664-.303-5.466-1.332-5.466-5.931 0-1.311.469-2.383 1.238-3.225-.123-.303-.537-1.521.118-3.17 0 0 1.009-.324 3.303 1.23.957-.267 1.984-.4 3.004-.405 1.02.005 2.047.138 3.006.405 2.292-1.554 3.299-1.23 3.299-1.23.657 1.649.243 2.867.119 3.17.772.842 1.238 1.914 1.238 3.225 0 4.609-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .323.219.694.827.576 4.767-1.589 8.201-6.084 8.201-11.385 0-6.624-5.376-12-12-12z" />
                        </svg>
                        View Code
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Step 4: Add Show More/Less button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleProjects}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
        >
          {visibleProjects === projects.length
            ? "Show Less Projects"
            : "Show More Projects"}{" "}
          {/* Dynamic button text */}
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
