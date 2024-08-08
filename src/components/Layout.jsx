import { React, useEffect, useState } from "react";
import Profile from "./profile/Profile";
import Home from "../sections/home/Home"
import About from "../sections/about/About";
import Resume from "../sections/resume/Resume";
import Services from "../sections/services/Services";
import Skills from "../sections/skills/Skills";
import Portfolio from "../sections/portfolio/Portfolio";
import Contact from "../sections/contact/Contact";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    menuItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - 50 &&
          scrollPosition < offsetTop + offsetHeight - 50
        ) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:h-screen">
      <div className="w-full xl:w-[35%] h-full flex items-center">
        <div className="w-full xl:w-3/4 flex justify-center">
          <Profile />
        </div>
      </div>

      <div className=" w-full xl:w-[65%] p-6 md:p-16 overflow-auto">
        <Home activeSection={activeSection} />
        <About id="about" title="About" />
        <Resume id="resume" title="Resume" />
        <Services id="services" title="Services" />
        <Skills id="skills" title="Skills" />
        <Portfolio id="portfolio" title="Portfolio" />
        <Contact id="contact" title="Contact" />
      </div>
    </div>
  );
};

export default Layout;