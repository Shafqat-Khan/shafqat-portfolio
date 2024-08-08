import React from "react";
import { skills } from "./skillsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
  up: { y: -100, opacity: 0 },
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  down: { y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

const MySkills = () => {
  const directions = ["up", "left", "right", "down"];

  return (
    <div id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {skills.map(({ id, image, title }, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={id}
            className="flex justify-center items-center"
            initial={directionVariants[directions[index % directions.length]]}
            animate={
              inView
                ? "visible"
                : directionVariants[directions[index % directions.length]]
            }
            transition={{ duration: 1 }}
            variants={directionVariants}
          >
            <div
              className="
                flex flex-col items-center justify-center w-48 h-56 p-6 border border-gray-500 rounded-full shadow-md group
                hover:border-primary_color hover:border-2 cursor-pointer"
            >
              <div className="flex-shrink-0 mb-4 w-24 h-24">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-300">
                {title}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MySkills;
