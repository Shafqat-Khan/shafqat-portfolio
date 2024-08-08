import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import "./ProjectsButton.css";

const ProjectsButton = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="wrapper">
      <div
        className="circle"
        onClick={() => {
          scrollToSection("portfolio");
        }}
      >
        <FaArrowDownLong className="icon" />
        <div className="description">
          <span style={{ "--i": 1 }}>M</span>
          <span style={{ "--i": 2 }}>Y</span>
          <span style={{ "--i": 3 }}>P</span>
          <span style={{ "--i": 4 }}>R</span>
          <span style={{ "--i": 5 }}>O</span>
          <span style={{ "--i": 6 }}>J</span>
          <span style={{ "--i": 7 }}>E</span>
          <span style={{ "--i": 8 }}>C</span>
          <span style={{ "--i": 9 }}>T</span>
          <span style={{ "--i": 10 }}>S</span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}>
            <BsDot />
          </span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 14 }}>M</span>
          <span style={{ "--i": 15 }}>Y</span>
          <span style={{ "--i": 16 }}>P</span>
          <span style={{ "--i": 17 }}>R</span>
          <span style={{ "--i": 18 }}>O</span>
          <span style={{ "--i": 19 }}>J</span>
          <span style={{ "--i": 20 }}>E</span>
          <span style={{ "--i": 21 }}>C</span>
          <span style={{ "--i": 22 }}>T</span>
          <span style={{ "--i": 23 }}>S</span>
          <span style={{ "--i": 25 }}>
            <BsDot />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsButton;
