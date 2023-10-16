"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaGithubSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import { BiLogoJava } from "react-icons/bi";
import { SiJavascript, SiTypescript, SiNextdotjs, SiSpring, SiApachemaven,
  SiOpenapiinitiative, SiNodedotjs, SiJson, SiHtml5, SiCss3, SiTailwindcss, 
  SiRedux, SiStyledcomponents, SiReactrouter, SiGraphql, SiMongodb, SiPython, 
  SiDjango, SiFramer, SiExpress, SiUnity, SiBlender, SiGimp} from "react-icons/si";
import {AiOutlineApi} from "react-icons/ai";
import {TbSnowflake} from "react-icons/tb";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type TSkillData = {
  title : string,
  icon : React.ReactElement;
}

const skillsData: TSkillData[] = [
  {title:"React",icon:<FaReact/>},
  {title:"JavaScript",icon:<SiJavascript/>},
  {title:"TypeScript",icon:<SiTypescript/>},
  {title:"Next.js",icon:<SiNextdotjs/>},
  {title:"Node.js",icon:<SiNodedotjs/>},
  {title:"Java",icon:<BiLogoJava/>},
  {title:"Spring Boot",icon:<SiSpring/>},
  {title:"Maven",icon:<SiApachemaven/>},
  {title:"RestAPI",icon:<AiOutlineApi/>},
  {title:"Microservices",icon:<TbSnowflake/>},
  {title:"JSON",icon:<SiJson/>},
  {title:"HTML",icon:<SiHtml5/>},
  {title:"CSS",icon:<SiCss3/>},
  {title:"Git",icon:<BsGithub/>},
  {title:"Tailwind",icon:<SiTailwindcss/>},
  {title:"Redux",icon:<SiRedux/>},
  {title:"Styled-Components",icon:<SiStyledcomponents/>},
  {title:"React-router-DOM",icon:<SiReactrouter/>},
  {title:"GraphQL",icon:<SiGraphql/>},
  {title:"MongoDB",icon:<SiMongodb/>},
  {title:"Express",icon:<SiExpress/>},
  {title:"Oracle DB",icon:<BsFillDatabaseFill/>},
  {title:"Python",icon:<SiPython/>},
  {title:"Django",icon:<SiDjango/>},
  {title:"Framer Motion",icon:<SiFramer/>},
  {title:"Unity",icon:<SiUnity/>},
  {title:"Blender",icon:<SiBlender/>},
  {title:"Gimp",icon:<SiGimp/>},
];




export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            
            <div key={index} className="flex items-center">
          {skill.icon}
          <span className="ml-1">{skill.title}</span>
        </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
