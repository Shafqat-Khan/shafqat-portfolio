import React from "react";
import { specializations } from "./servicesData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
  up: { y: -100, opacity: 0 },
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  down: { y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

const Specializations = () => {
  const directions = ["up", "left", "right", "down"];

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {specializations.map(({ id, icon: Icon, title, description }, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={id}
            className="
              p-12 border border-gray-500 rounded-3xl shadow-md group
              hover:border-primary_color hover:border-2 cursor-pointer"
            initial={directionVariants[directions[index % directions.length]]}
            animate={inView ? "visible" : ""}
            transition={{ duration: 1 }}
            variants={directionVariants}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">
                {title}
              </h3>
              <div
                className="
                  flex-shrink-0 mr-4 text-3xl text-gray-300 
                  group-hover:text-primary_color"
              >
                <Icon />
              </div>
            </div>
            <p className="text-gray-400">{description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Specializations;
