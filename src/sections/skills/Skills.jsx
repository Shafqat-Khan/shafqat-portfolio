import React from "react";
import { TbTriangleSquareCircle } from "react-icons/tb";
import MySkills from "../../components/skills/MySkills";

const Skills = () => {
  return (
    <div id="skills">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-32 gap-2 pl-5 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <TbTriangleSquareCircle />
          MY SKILLS
        </span>
        <h1 className="text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap">
          My <span className="text-primary_color">Skills</span>
        </h1>
        <MySkills />
      </div>
    </div>
  );
};

export default Skills;
