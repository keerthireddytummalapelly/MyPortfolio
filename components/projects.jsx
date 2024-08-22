"use client";
import React from "react";
import dynamic from 'next/dynamic';
const HoverEffect = dynamic(() => import('./ui/card-hover-effect').then(mod => mod.HoverEffect), { ssr: false });

export const projects = [
  {
    title: "MEME",
    description: `A web-based application aimed at enhancing the efficiency and convenience of mall operations. The
        application serves as a centralized platform connecting users and administrators, facilitating seamless interaction and improving
        customer experience.`,
    technologies: "SpringBoot, Java, MYSQL",
    link: "https://github.com/keerthireddytummalapelly/MEME",
    githubLink: "https://github.com/keerthireddytummalapelly/MEME",
  },
  {
    title: "CacheSync",
    description: `This project consists of a file upload and download application with three main components: a client, a server, and a cache. The application supports file transfers using two transport protocols: 
    TCP and stop-and-wait (SNW) over UDP. The goal of this project is to practice Application and Transport Layer skills by implementing (i) a cache service for file exchange, and (ii) two reliable data transport protocols.`,
    technologies: "Python, Socket-Programming, TCP, UDP",
    link: "https://github.com/keerthireddytummalapelly/CacheSync",
    githubLink: "https://github.com/keerthireddytummalapelly/CacheSync",
  },
  {
    title: "My Portfolio",
    description:
      "A personalized platform to showcase my education, experience, and projects, reflecting my technical proficiency. It also demonstrates my commitment to continuous learning and technological innovation.",
    technologies: "Next JS, Tailwind CSS, Framer Motion",
    link: "https://github.com/keerthireddytummalapelly/myportfolio",
    githubLink: "https://github.com/keerthireddytummalapelly/myportfolio",
    websiteLink: "https://keerthireddytummalapelly.com",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 pt-36">
      <h1 className="text-[20px] xl:text-[32px] font-bold mb-6">Projects</h1>
      <div className="w-full">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;
