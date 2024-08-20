"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

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
    title: "Traffic Surveillance System",
    description: `A real-time traffic monitoring system to take time allocation decisions according to the traffic density and eventually
        indicate location of violating vehicles. Implemented computer vision algorithms for vehicle detection and employed Deep Learning
        models for advanced traffic flow analysis and prediction. This system enhances traffic management strategies by providing valuable
        insights on traffic flow.`,
    technologies: "Machine Learning and Deep Learning",
    link: "",
    githubLink: "",
  },
  {
    title: "My Portfolio",
    description:
      "A personalized platform to showcase my education, experience, and projects, reflecting my technical proficiency. It also demonstrates my commitment to continuous learning and technological innovation.",
    technologies: "Next JS, Tailwind CSS, Framer Motion",
    link: "https://github.com/keerthireddytummalapelly/myportfolio",
    githubLink: "https://github.com/keerthireddytummalapelly/myportfolio",
    websiteLink: "",
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
