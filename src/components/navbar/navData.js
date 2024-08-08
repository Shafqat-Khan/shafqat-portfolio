import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { BsWindowStack } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export const menuItems = [
  { id: "home", label: "Home", icon: IoHomeOutline },
  { id: "about", label: "About", icon: GoPerson },
  { id: "resume", label: "Resume", icon: FaRegFileAlt },
  { id: "services", label: "Services", icon: FaBarsStaggered },
  { id: "skills", label: "Skills", icon: TbTriangleSquareCircle },
  { id: "portfolio", label: "Portfolio", icon: BsWindowStack },
  { id: "contact", label: "Contact", icon: IoMailOutline },
];
