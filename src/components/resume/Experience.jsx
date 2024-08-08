import React from "react";
import { experiences } from "./experiencesData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Experience = () => {
  return (
    <div className="relative flex flex-col items-start pl-8">
      <div className="absolute left-6 top-0 h-full w-[1px] bg-gray-500"></div>

      {experiences.map(({ id, year, title, company }) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={id}
            className="relative mb-8 group cursor-pointer custom-margin"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={directionVariants}
          >
            <div
              className="
                absolute left-[-14px] w-3 h-3 
                rounded-full bg-gray-500 
                group-hover:bg-primary_color transition-colors duration-200"
            ></div>

            <div className="pl-8">
              <h3
                className="
                  text-sm text-gray-400 font-semibold 
                  group-hover:text-primary_color transition-colors duration-500"
              >
                {year}
              </h3>
              <h3 className="text-3xl font-semibold text-gray-300 py-4">
                {title}
              </h3>
              <p className="text-gray-400">{company}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experience;
