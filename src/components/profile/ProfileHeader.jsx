import React from "react";
import { TbCircleLetterS } from "react-icons/tb";

const ProfileHeader = ({ name, profession }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex">
        <h1 className="text-white text-4xl font-bold whitespace-pre-line overflow-hidden text-ellipsis">
          {name}
        </h1>
        <TbCircleLetterS className="text-gray-300 text-2xl ml-2 -mt-1" />
      </div>
      <h2 className="text-gray-300 text-base whitespace-pre-line overflow-hidden text-ellipsis">
        {profession}
      </h2>
    </div>
  );
};

export default ProfileHeader;
