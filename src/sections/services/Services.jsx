import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Specializations from "../../components/services/Specializations";

const Services = () => {
  return (
    <div id="services">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-32 gap-2 pl-6 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <FaBarsStaggered />
          SERVICES
        </span>
        <h1 className="text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap">
          My <span className="text-primary_color">Specializations</span>
        </h1>
        <Specializations />
      </div>
    </div>
  );
};

export default Services;
