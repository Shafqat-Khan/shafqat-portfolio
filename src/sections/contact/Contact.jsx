import React from "react";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  const email = "shafqat333khan@gmail.com"

  return (
    <div id="contact">
      <div className="w-full xl:w-[75%] py-14 xl:py-24">
        <span
          className="
            flex items-center w-32 gap-2 pl-6 py-2 text-xs text-white 
            border border-gray-500 rounded-full"
        >
          <IoMailOutline />
          CONTACT
        </span>
        <h1 className="text-white text-3xl md:text-6xl py-6 md:py-12 whitespace-pre-wrap">
          Let's Work <span className="text-primary_color">Together!</span>
        </h1>
        <p className="text-gray-300 text-xl">{email}</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
