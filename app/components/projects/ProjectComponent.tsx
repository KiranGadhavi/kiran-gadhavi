import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
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
];
const ProjectComponent = ({ title }: { title: string }) => {
  return (
    <div className="grid grid-cols gap-4 text-center">
      <div className="flex items-center justify-center">
        <Image
          src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
          width={30}
          height={30}
          alt="Prrojects"
        />
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      </div>

      {projects.map((project) => (
        <motion.section
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="my-8 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

          {/* Project Image */}
          {project.projectImage && (
            <Image
              src={project.projectImage}
              alt={`${project.title} Image`}
              width={600}
              height={300}
              className="rounded-lg mb-4 w-full h-46 object-cover"
            />
          )}
          {/* Project Description */}
          <p className="text-gray-600">{project.description}</p>
          {/* Mapping through the technologies array */}
          <div className="flex space-x-2 my-2">
            {project.technologies.map((tech, index) => (
              <Image
                key={index}
                src={tech.src}
                alt={tech.alt}
                width={50}
                height={50}
              />
            ))}
          </div>

          {/* Link to the project */}
          {project.href && (
            <Link href={project.href} passHref>
              <p className="text-blue-500 underline">Visit Project</p>
            </Link>
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default ProjectComponent;
