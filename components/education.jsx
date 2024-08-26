import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ExpandableDiv = ({ universityName, course, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    controls.start({
      height: isExpanded ? "auto" : 0,
      opacity: isExpanded ? 1 : 0,
      transition: { duration: 0.3 },
    });
  }, [isExpanded, controls]);

  return (
    <div
      className="relative w-full border-2 border-gray-300 mb-4 rounded-xl overflow-hidden"
      ref={containerRef}
    >
      <div
        className="flex items-center justify-between px-4 pt-4 bg-background cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={`flex flex-col ${
            !isExpanded ? "hover:text-primary" : ""
          }`}
        >
          <div
            className={`text-xl xl:text-2xl font-bold capitalize my-1 ${
              !isExpanded ? "hover:text-primary" : ""
            }`}
          >
            {universityName}
          </div>
          <div
            className={`text-[20px] font-semibold ${
              !isExpanded ? "hover:text-primary" : ""
            }`}
          >
            {course}
          </div>
        </div>
        <div className="text-lg">
          {isExpanded ? (
            <IoIosArrowDropdownCircle className="transform rotate-180 text-[24px]" />
          ) : (
            <IoIosArrowDropdownCircle className="text-[24px]" />
          )}
        </div>
      </div>
      <motion.div className="p-4 bg-background" animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-2xl xl:text-4xl font-bold mb-16">Education</h1>
      <ExpandableDiv
        universityName="University at Albany"
        course="Master's in Computer Science"
      >
        <p className="text-zinc-100">
          Coursework : Algorithms and Data Structures, Data Mining, Database
          Systems, Operating Systems, Advanced Programming Concepts, Computer
          Networking, Software Engineering
        </p>
        <p className="text-zinc-100">CGPA : 4.0/4.0</p>
        <p className="text-zinc-100">
          Course Duration : January 2023 - December 2024
        </p>
      </ExpandableDiv>
      <ExpandableDiv
        universityName="CVR College of Engineering"
        course="Bachelor of Technology in Computer Science and Engineering"
      >
        <p className="text-zinc-100">
          Relevant Coursework: Design and Analysis of Algorithms,
          Object-Oriented Programming, Cloud Computing
        </p>
        <p className="text-zinc-100">CGPA: 9.95/10.0</p>
        <p className="text-zinc-100">Course Duration: August 2017 - July 2021</p>
        <p className="text-zinc-100">
          Recognition: Awarded a gold medal for being the top academic performer
          in the Computer Science department out of 300 students.
        </p>
      </ExpandableDiv>
    </div>
  );
};

export default Education;
