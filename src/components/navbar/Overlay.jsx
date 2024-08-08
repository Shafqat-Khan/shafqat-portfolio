import React from "react";

const Overlay = ({ onClick }) => (
  <div
    className="
        fixed inset-0 bg-gray-500 opacity-50 z-40 
        transition-opacity duration-500 ease-in-out"
    onClick={onClick}
  ></div>
);

export default Overlay;
