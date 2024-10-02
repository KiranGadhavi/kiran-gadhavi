import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "kreactify",
    description:
      "A web application built with React, JavaScript, and CSS. Our user-friendly interface simplifies the booking process, allowing you to secure your ideal accommodation in just a few clicks.",
    projectImage: "/reactifyImg.png", // Add project image
    href: "https://kreactify.vercel.app/",
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
    projectImage: "/admin.png",
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
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
        alt: "Git",
      },
    ],
  },
];
const cardVariants = {
  hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" },
  tap: { scale: 0.95 },
};

// export default ProjectComponent;
const ProjectComponent = ({ title }: { title: string }) => {
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
        {projects.map((project) => (
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

              {/* Project Link */}
              {project.href && (
                <Link href={project.href}>
                  <p className="text-blue-500 font-medium hover:underline">
                    Visit Project &rarr;
                  </p>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
