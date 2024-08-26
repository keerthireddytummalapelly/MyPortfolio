"use client";

import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const words = [
  {
    text: "Keerthi Reddy Tummalapelly",
    className: "text-white text-[20px] lg:text-[40px] xl:text-[48px]",
  },
];

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

export default function About() {
  return (
    <div className="h-full pt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:pt-8 lg:pb-24">
          <div className="text-left lg:w-3/4 lg:mr-8">
            <h1 className="text-[20px] lg:text-[32px] font-bold mb-6">
              Hello I'm <br />
              <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="text-zinc-100 text-justify mb-6">
              I'm a dedicated software developer with a passion for transforming
              ideas into powerful, real-world solutions. With expertise in both
              frontend and backend development, I thrive on creating elegant,
              efficient code that not only performs flawlessly but also enhances
              user experiences. From designing intuitive user interfaces to
              optimizing complex algorithms, I am committed to leveraging
              technology to solve real-world challenges and make a tangible
              impact on everyday life.
            </p>
            <div className="flex flex-row items-center gap-4 lg:gap-8 mb-6">
              <Link
                href="https://drive.google.com/file/d/1QYc08J_FZxsRCe4EkXl9qigGh5Xlg8sL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <button className="px-4 py-2 text-white border-2 border-white bg-background rounded-xl hover:text-primary hover:border-primary transition flex items-center gap-2">
                  <span className="font-semibold">Resume</span>
                  <span className="text-xl sm:text-md">
                    <MdOutlineFileDownload />
                  </span>
                </button>
              </Link>
              <div className="flex flex-row gap-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center p-2"
                  >
                    <span className="sr-only">{link.title}</span>
                    <div className="h-8 w-8 ">
                      {React.cloneElement(link.icon, {
                        className:
                          "text-white group-hover:text-primary text-[24px] lg:text-[32px]",
                      })}
                    </div>
                    <span className="absolute bottom-full mb-2 hidden w-max rounded px-2 py-1 text-xs text-white group-hover:block">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex mt-6 lg:mt-20 xl:mt-6 lg:w-1/2 flex-1 items-center justify-center">
            <img
              src="/assets/myPhoto.jpg"
              alt="Photo"
              className="lg:w-full w-3/4 h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
