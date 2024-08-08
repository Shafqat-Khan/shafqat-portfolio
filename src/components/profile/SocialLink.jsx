import React from "react";

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <div
      onClick={() => window.open(href, "_blank")}
      className="border-2 border-gray-500 rounded-full p-4 text-gray-500 text-lg cursor-pointer
                 hover:border-primary_color hover:text-primary_color 
                 transition-colors duration-500 ease-out focus:outline-none"
    >
      <Icon />
    </div>
  );
};

export default SocialLink;
