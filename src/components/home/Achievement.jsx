import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Achievement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex gap-5 md:gap-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <CountUp
          start={0}
          end={1}
          duration={2}
          suffix="+"
          className="text-primary_color text-8xl"
        />
        <p className="text-xl text-gray-400 py-4">
          YEARS OF <br /> EXPERIENCE
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <CountUp
          start={0}
          end={5}
          duration={2}
          suffix="+"
          className="text-primary_color text-8xl"
        />
        <p className="text-xl text-gray-400 py-4">
          PROJECTS <br /> COMPLETED
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Achievement;
