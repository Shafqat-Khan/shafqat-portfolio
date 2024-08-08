import React from "react";
import { projects } from "./projectsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
  up: { y: -100, opacity: 0 },
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  down: { y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

const Projects = () => {
  const directions = ["up", "left", "right", "down"];

  return (
    <div id="portfolio" className="container mx-auto">
      <div className="grid gap-4">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });

          return (
            <motion.a
              ref={ref}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="col-span-1 p-4 relative group cursor-pointer"
              initial={directionVariants[directions[index % directions.length]]}
              animate={inView ? "visible" : ""}
              transition={{ duration: 1 }}
              variants={directionVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-96 rounded-3xl group-hover:object-cover"
              />
              <div className="absolute left-8 bottom-20 flex space-x-2">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-black bg-white px-4 py-2 rounded-3xl shadow-md group-hover:text-primary_color group-hover:bg-container_color"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <h2 className="mt-2 text-gray-300 text-3xl group-hover:underline">
                {project.title}
              </h2>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
