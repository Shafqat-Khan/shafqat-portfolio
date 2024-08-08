import React from "react";
import { GoPerson } from "react-icons/go";

const About = () => {
  const aboutTitle =
    "Every great application begins with an even better line of code";
  const aboutDescription =
    "Since embarking on my journey as a full stack developer over the past 5 years, I’ve tackled remote projects for agencies, advised burgeoning startups, and teamed up with skilled professionals to build digital solutions for both business and consumer markets. I am quietly confident, inherently curious, and always striving to refine my skills—one coding challenge at a time.";

  return (
    <div id="about">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-28 gap-2 pl-5 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <GoPerson />
          ABOUT
        </span>
        <h1
          className="
          text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap"
        >
          Every great application begins with an even{" "}
          <span className="text-primary_color">better line of code</span>
        </h1>
        <p className="text-gray-400 text-lg">{aboutDescription}</p>
      </div>
    </div>
  );
};

export default About;
