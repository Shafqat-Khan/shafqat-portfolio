import { React, useEffect, useState, useRef } from "react";
import Profile from "./profile/Profile";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Resume from "../sections/resume/Resume";
import Services from "../sections/services/Services";
import Skills from "../sections/skills/Skills";
import Portfolio from "../sections/portfolio/Portfolio";
import Contact from "../sections/contact/Contact";
import { menuItems } from "./navbar/navData";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const scrollContainerRef = useRef(null); // Create a ref for the scrollable container

  const handleScroll = () => {
    const scrollPosition = scrollContainerRef.current.scrollTop; // Use scrollTop for the scrollable container
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
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:h-screen">
      <div className="w-full xl:w-[35%] h-full flex items-center">
        <div className="w-full xl:w-3/4 flex justify-center">
          <Profile />
        </div>
      </div>

      <div
        className="w-full xl:w-[65%] p-6 md:p-16 overflow-auto"
        ref={scrollContainerRef} // Attach ref to the scrollable container
      >
        <Home id="home" activeSection={activeSection} />
        <About id="about" activeSection={activeSection} title="About" />
        <Resume id="resume" activeSection={activeSection} title="Resume" />
        <Services
          id="services"
          activeSection={activeSection}
          title="Services"
        />
        <Skills id="skills" activeSection={activeSection} title="Skills" />
        <Portfolio
          id="portfolio"
          activeSection={activeSection}
          title="Portfolio"
        />
        <Contact id="contact" activeSection={activeSection} title="Contact" />
      </div>
    </div>
  );
};

export default Layout;
