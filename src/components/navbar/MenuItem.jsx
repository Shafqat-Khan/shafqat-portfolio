import React from "react";

const MenuItem = ({ id, label, icon: Icon, activeSection, onClick }) => (
  <div
    onClick={onClick}
    className={`
     flex items-center gap-2 p-2 text-sm 
     ${activeSection === id ? "text-primary_color" : "text-gray-500"} 
     hover:text-primary_color cursor-pointer
    `}
  >
    <span className="text-xl">
      <Icon />
    </span>
    {label}
  </div>
);

export default MenuItem;
