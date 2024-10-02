import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillsComponents({ title }: { title: string }) {
  return (
    <div>
      <div className="overflow-hidden">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="my-8"
        >
          <div className="flex flex-wrap gap-2 py-4 justify-center">
            <Image
              src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
              width={30}
              height={30}
              alt="Skills"
            />
            <h2 className="text-2xl font-semibold transition-colors duration-300 hover:text-blue-500">
              {title}
            </h2>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              <div className="flex justify-center gap-3 mt-4">
                {[
                  {
                    id: 1,
                    src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
                    alt: "JavaScript",
                  },
                  {
                    id: 2,
                    src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
                    alt: "TypeScript",
                  },
                  {
                    id: 3,
                    src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
                    alt: "React",
                  },
                  {
                    id: 4,
                    src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
                    alt: "Next.js",
                  },
                  {
                    id: 5,
                    src: "https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
                    alt: "Node.js",
                  },
                  {
                    id: 6,
                    src: "https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white",
                    alt: "Express",
                  },
                  {
                    id: 7,
                    src: "https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
                    alt: "PostgreSQL",
                  },
                  {
                    id: 8,
                    src: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white",
                    alt: "AWS",
                  },
                  {
                    id: 9,
                    src: "https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
                    alt: "Docker",
                  },
                  {
                    id: 10,
                    src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
                    alt: "Git",
                  },
                  {
                    id: 11,
                    src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
                    alt: "Jest",
                  },
                  {
                    id: 12,
                    src: "https://img.shields.io/badge/-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white",
                    alt: "Supabase",
                  },
                  {
                    id: 13,
                    src: "https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
                    alt: "Tailwind CSS",
                  },
                  {
                    id: 14,
                    src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
                    alt: "Vercel",
                  },
                ].map((skill) => (
                  <Image
                    key={skill.id}
                    src={skill.src}
                    alt={skill.alt}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
