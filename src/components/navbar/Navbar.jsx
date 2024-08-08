import { React, useState } from "react";
import MenuButton from "./MenuButton";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import NavPanel from "./NavPanel";
import { menuItems } from "./navData";

const Navbar = ({ activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (id) => {
    setIsSidebarOpen(false);
    scrollToSection(id);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <MenuButton onClick={() => setIsSidebarOpen(true)} />
      <NavPanel
        menuItems={menuItems}
        activeSection={activeSection}
        handleClick={handleClick}
      />
      <Sidebar
        menuItems={menuItems}
        activeSection={activeSection}
        handleClick={handleClick}
        isSidebarOpen={isSidebarOpen}
      />
      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

export default Navbar;
