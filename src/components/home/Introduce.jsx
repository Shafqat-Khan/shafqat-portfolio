import React from "react";

const Introduce = () => {
  const name = "Shafqat";
  return (
    <div className="w-full xl:w-[75%]">
      <h1 className="text-white text-4xl md:text-7xl py-6 md:py-12 whitespace-pre-wrap">
        Hi from <span className="text-primary_color">{name}</span>,<br />
        Full Stack Developer
      </h1>
      <p className="text-gray-400 text-lg">
        Bridging innovation and functionality, I am a full stack developer
        transforming complex challenges into seamless digital experiences. From
        intuitive user interfaces to robust backend solutions, I craft code that
        connects and empowers.
      </p>
    </div>
  );
};

export default Introduce;
