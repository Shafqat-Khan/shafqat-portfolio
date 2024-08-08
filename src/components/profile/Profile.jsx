import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import SocialLink from "./SocialLink";
import ProfileHeader from "./ProfileHeader";
import HireMeButton from "./HireMeButton";
import ProfileImage from "./ProfileImage";
import { profileData } from "./profileData";

const Profile = () => {
  const {
    name,
    profession,
    email,
    address,
    profileImage,
    copyright,
    socialLinks,
  } = profileData;

  return (
    <div
      className="
      flex flex-col items-center w-[100%] md:w-[70%] xl:w-auto 
      border border-gray-600 rounded-3xl p-8 md:py-12 md:px-12"
    >
      <ProfileHeader name={name} profession={profession} />
      <ProfileImage src={profileImage} alt={name} />
      <p className="text-gray-300 text-xl">{email}</p>
      <p className="text-gray-300 text-xl">Based in {address}</p>
      <p className="text-gray-400 text-sm pt-10">{copyright}</p>
      <div className="flex gap-2 my-6">
        <SocialLink href={socialLinks.github} icon={FaGithub} />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedin} />
        <SocialLink href={socialLinks.upwork} icon={FaSquareUpwork} />
        <SocialLink href={socialLinks.twitter} icon={FaTwitter} />
      </div>
      <HireMeButton />
    </div>
  );
};

export default Profile;
