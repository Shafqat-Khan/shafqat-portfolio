import React from "react";
import MenuItem from "./MenuItem";

const Sidebar = ({ menuItems, activeSection, handleClick, isSidebarOpen }) => (
  <div
    className={`
      fixed top-0 right-0 w-80 md:w-96 h-screen bg-container_color text-white z-50 
      transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
      transition-transform duration-500 ease-in-out
    `}
  >
    <nav className="flex flex-col space-y-2 p-20">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          {...item}
          activeSection={activeSection}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </nav>
  </div>
);

export default Sidebar;
