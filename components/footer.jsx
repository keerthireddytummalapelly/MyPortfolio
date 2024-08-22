"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  {
    title: "GitHub",
    icon: <FaGithub className="h-full w-full text-primary" />,
    href: "https://github.com/keerthireddytummalapelly",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="h-full w-full text-primary" />,
    href: "https://www.linkedin.com/in/keerthi-reddy-tummalapelly",
  },
  {
    title: "Mail",
    icon: <FaEnvelope className="h-full w-full text-primary" />,
    href: "mailto:tummalapellykeerthireddy@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background w-screen h-auto flex flex-col items-center py-6">
   
      <div className="flex justify-center items-center mb-4">
        <Link
          href="https://github.com/"
          target="_blank"
          className="cursor-pointer hover:text-primary"
        >
          &copy; 2024 Keerthi Reddy Tummalapelly - Portfolio
        </Link>
      </div>

      <div className="flex flex-row items-center gap-4 xl:gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2"
            passHref
          >
            <span className="sr-only">{link.title}</span>
            <div className="h-4 w-4 flex items-center justify-center">
              {React.cloneElement(link.icon, {
                className: "text-white group-hover:text-primary text-[16px]",
              })}
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
