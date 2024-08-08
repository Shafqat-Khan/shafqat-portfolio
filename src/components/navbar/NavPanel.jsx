import React from "react";
import { motion } from "framer-motion";

const NavPanel = ({ menuItems, activeSection, handleClick }) => {
  return (
    <motion.div
      className="
          absolute flex-col space-y-2 py-4 px-2 top-[35%] 
          border border-gray-600 rounded-full
          hidden xl:flex
        "
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {menuItems.map(({ id, icon: Icon }) => (
        <div
          key={id}
          onClick={() => handleClick(id)}
          className={`
              flex items-center gap-2 p-2
              ${activeSection === id ? "text-primary_color" : "text-gray-500"}
              hover:text-primary_color cursor-pointer
            `}
        >
          <span className="text-xl">
            <Icon />
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default NavPanel;
