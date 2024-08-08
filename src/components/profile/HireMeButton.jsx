import React from "react";
import { CiMail } from "react-icons/ci";

const HireMeButton = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="
        w-full flex items-center justify-center py-3 cursor-pointer 
        border-2 border-primary_color rounded-full bg-primary_color
        hover:bg-transparent hover:text-primary_color 
        transition-colors duration-800 ease-out focus:outline-none"
      onClick={() => scrollToSection("contact")}
    >
      <CiMail className="text-xl mr-1" />
      <span>HIRE ME!</span>
    </div>
  );
};

export default HireMeButton;
