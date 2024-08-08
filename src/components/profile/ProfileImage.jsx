import React from "react";

const ProfileImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full md:max-w-xs xl:w-full h-full max-h-[250px] rounded-3xl object-cover m-8"
    />
  );
};

export default ProfileImage;
