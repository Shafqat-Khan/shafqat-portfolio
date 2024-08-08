import React from "react";
import { BsWindowStack } from "react-icons/bs";
import Projects from "../../components/portfolio/Projects";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-32 gap-2 pl-5 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <BsWindowStack />
          PORTFOLIO
        </span>
        <h1
          className="
          text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap"
        >
          Featured <span className="text-primary_color">Projects</span>
        </h1>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
