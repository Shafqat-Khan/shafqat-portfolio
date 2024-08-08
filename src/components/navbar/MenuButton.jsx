import React from "react";
import { MdMenuOpen } from "react-icons/md";

const MenuButton = ({ onClick }) => (
  <div
    onClick={onClick}
    className="
        fixed z-50 right-7 top-8 xl:relative xl:right-auto xl:top-auto 
        rounded-full border border-gray-600 p-3 text-white cursor-pointer 
        hover:border-primary_color hover:text-primary_color 
        transition-colors duration-500 ease-out focus:outline-none"
  >
    <MdMenuOpen className="text-3xl" />
  </div>
);

export default MenuButton;
