import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import Experience from "../../components/resume/Experience";

const Resume = () => {
  return (
    <div id="resume">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-32 gap-2 pl-6 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <FaRegFileAlt />
          RESUME
        </span>
        <h1 className="text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap">
          Education & <span className="text-primary_color">Experience</span>
        </h1>
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
