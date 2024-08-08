import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProjectsButton from "../../components/home/ProjectsButton";
import Introduce from "../../components/home/Introduce";
import { IoHomeOutline } from "react-icons/io5";
import Achievement from "../../components/home/Achievement";

const Home = ({ activeSection }) => {
  return (
    <div id="home" className="pb-14 xl:pb-24">
      <div className="flex justify-between text-white items-center ">
        <span className="flex items-center gap-2 text-xs border border-gray-500 py-2 px-4 rounded-full">
          <IoHomeOutline />
          INTRODUCION
        </span>
        <Navbar activeSection={activeSection} />
      </div>
      <Introduce />
      <ProjectsButton />
      <Achievement />
    </div>
  );
};

export default Home;
