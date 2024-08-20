"use client";

import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const words = [
  {
    text: "Keerthi Reddy Tummalapelly",
    className: "text-white text-[20px] xl:text-[48px]",
  },
];

const links = [
  {
    title: "GitHub",
    icon: <FaGithub className="h-full w-full text-primary" />,
    href: "https://github.com/keerthireddy2000",
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
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between xl:pt-8 xl:pd-24">
          <div className="text-left xl:w-3/4 xl:mr-8">
            <h1 className="text-[20px] xl:text-[32px] font-bold mb-6">
              Hello I'm, <br />
              <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="text-white text-justify mb-6">
              I'm a passionate software developer dedicated to turning ideas
              into impactful solutions. With a strong foundation in both
              frontend and backend development, I love crafting code that not
              only functions beautifully but also makes a meaningful difference
              in people's lives. Whether it's building intuitive user
              interfaces, optimizing performance, or diving deep into complex
              algorithms, I'm driven by the potential of technology to solve
              real-world problems and improve everyday experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8 xl:space-x-8 space-y-4 xl:space-y-0 mb-6">
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
                        "text-white group-hover:text-primary text-[32px]",
                    })}
                  </div>
                  <span className="absolute bottom-full mb-2 hidden w-max rounded px-2 py-1 text-xs text-white group-hover:block">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 xl:mt-6 xl:w-3/4 flex-1">
            <img
              src="/assets/myPhoto.jpg"
              alt="Photo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
