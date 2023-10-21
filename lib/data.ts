import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cibcLogo from './cibc.png';
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Img } from "@react-email/components";
import { useTheme } from "@/context/theme-context";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const generateExperienceData = (theme:string) => {
  const experiencesData = [
    {
      title: "Consultant, Application Developer",
      location: "CIBC - Toronto, CA",
      description:"In my current role, I'm taking diverse responsibilities, showcasing proficiency in developing features for a full-stack web application. This included intricate tasks such as creating web components, implementing intelligent workflows, and ensuring seamless upgradability using React, TypeScript, Java, Spring Boot",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - Present",
      logo: {
        id: 1,
        src: '/cibc.svg',
        alt: 'CIBC Logo',
        height: 70,
        width: 70,
        className: 'mr-8',
      }
    },
    {
      title: "Software Developer",
      location: "Blackberry Ltd - Waterloo, CA",
      description:"I specialized in full-stack web development, utilizing React, Redux, TypeScript, Java, REST Services, Spring Boot, API/Microservices, Maven, Jenkins, Web Services, JIRA. I have a strong background in designing and developing OAuth2.0 Single Sign-On systems using Spring Security. Additionally, I excel in REST Web Services design, API integration, and deployment through a CICD pipeline using Jenkins",
      icon: React.createElement(CgWorkAlt),
      date: "2018 - 2019",
      logo: {
        id: 1,
        src: theme === "light" ? '/bb-dark.png' : '/bb-light.png',
        alt: 'Blackberry Logo',
        height: 45,
        width: 45,
        className: 'mr-8',
      }
    },
    {
      title: "Master of Applied Computing",
      location: "University of Windsor, CA",
      description:'Relevant Courses: \n - Advanced Algorithms and Data Structures \n - Machine Learning and Artificial Intelligence \n - Distributed Systems \n - Distributed Systems',
      projects : '\n - Search Engine',
      icon: React.createElement(CgWorkAlt),
      date: "2017 - 2019",
      logo: {
        id: 1,
        src: '/uwindsor.svg',
        alt: 'Uwindsor Logo',
        height: 40,
        width: 40,
        className: 'mr-6',
      }
    },
    {
      title: "Application Developer",
      location: "Sanvi Technologies - Surat, IN",
      description:" My experience encompasses the end-to-end development of dynamic web applications, incorporating robust front-end interfaces with React and Redux, while ensuring seamless back-end operations with NodeJS and MySQL databases. Additionally, I leverage Styled Components to create visually appealing and responsive UIs. My expertise lies in delivering efficient, user-centric solutions through an array of cutting-edge technologies.",
      icon: React.createElement(CgWorkAlt),
      date: "2016 - 2017",
      logo: {
        id: 1,
        src: '/sanvitech.png',
        alt: 'Sanvi Technologies Logo',
        height: 40,
        width: 45,
        className: 'mr-7',
      }
    },
    {
      title: "Unity Application Developer",
      location: "Arthisoft Inc. - Ahmedabad, IN",
      description:"I've honed my technical proficiency in JavaScript programming through the development of 2D and 3D games. This involved implementing concepts like Enemy AI, Gameplay Mechanics, and User Display Controller, along with extensive testing and debugging. Additionally, I worked on experimental prototypes, including 2D animation sprites and procedural mesh generation. I also leveraged shaders for 2D games to address issues related to memory management, device display FPS performance, and graphics/UI animation.",
      icon: React.createElement(CgWorkAlt),
      date: "2015 - 2016",
      logo: {
        id: 1,
        src: '/arthisoft.png',
        alt: 'Arthisoft Logo',
        height: 40,
        width: 40,
        className: 'mr-7',
      }
    },
    {
      title: "Bachelor of Computer Science",
      location: "Gujarat Technological University, IN",
      description:'Relevant Courses: \n - Object-Oriented Programming \n - Data Structures & Algorithms \n - Database Systems \n - Web Development \n - Operating Systems',
      projects : '\n - AR/VR based 3D Application',
      icon: React.createElement(CgWorkAlt),
      date: "2011 - 2014",
      logo: {
        id: 1,
        src: '/gtu.png',
        alt: 'GTU Logo',
        height: 80,
        width: 80,
        className: 'mr-7',
      }
    },
  ];

  return experiencesData;
};
// export const experiencesData = [
//   {
//     title: "Consultant, Application Developer",
//     location: "CIBC - Toronto, CA",
//     description:"In my current role, I'm taking diverse responsibilities, showcasing proficiency in developing features for a full-stack web application. This included intricate tasks such as creating web components, implementing intelligent workflows, and ensuring seamless upgradability using React, TypeScript, Java, Spring Boot",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - Present",
//     logo: {
//       id: 1,
//       src: '/cibc.svg',
//       alt: 'CIBC Logo',
//       height: 60,
//       width: 60,
//       className: 'mr-8',
//     }
//   },
//   {
//     title: "Software Developer",
//     location: "Blackberry Ltd - Waterloo, CA",
//     description:"I specialized in full-stack web development, utilizing React, Redux, TypeScript, Java, REST Services, Spring Boot, API/Microservices, Maven, Jenkins, Web Services, JIRA. I have a strong background in designing and developing OAuth2.0 Single Sign-On systems using Spring Security. Additionally, I excel in REST Web Services design, API integration, and deployment through a CICD pipeline using Jenkins",
//     icon: React.createElement(CgWorkAlt),
//     date: "2018 - 2019",
//     logo: {
//       id: 1,
//       src: theme === "light" ? '/blackberry.svg' : '/cibc.svg',
//       alt: 'Blackberry Logo',
//       height: 100,
//       width: 110,
//       className: 'mr-7',
//     }
//   },
//   {
//     title: "Master of Applied Computing",
//     location: "University of Windsor, CA",
//     description:'Relevant Courses: \n - Advanced Algorithms and Data Structures \n - Machine Learning and Artificial Intelligence \n - Distributed Systems \n - Distributed Systems',
//     projects : '\n - Search Engine',
//     icon: React.createElement(CgWorkAlt),
//     date: "2017 - 2019",
//     logo: {
//       id: 1,
//       src: '/uwindsor.svg',
//       alt: 'Uwindsor Logo',
//       height: 40,
//       width: 40,
//       className: 'mr-6',
//     }
//   },
//   {
//     title: "Application Developer",
//     location: "Sanvi Technologies - Surat, IN",
//     description:" My experience encompasses the end-to-end development of dynamic web applications, incorporating robust front-end interfaces with React and Redux, while ensuring seamless back-end operations with NodeJS and MySQL databases. Additionally, I leverage Styled Components to create visually appealing and responsive UIs. My expertise lies in delivering efficient, user-centric solutions through an array of cutting-edge technologies.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2016 - 2017",
//     logo: {
//       id: 1,
//       src: '/sanvitech.png',
//       alt: 'Sanvi Technologies Logo',
//       height: 40,
//       width: 40,
//       className: 'mr-7',
//     }
//   },
//   {
//     title: "Unity Application Developer",
//     location: "Arthisoft Inc. - Ahmedabad, IN",
//     description:"I've honed my technical proficiency in JavaScript programming through the development of 2D and 3D games. This involved implementing concepts like Enemy AI, Gameplay Mechanics, and User Display Controller, along with extensive testing and debugging. Additionally, I worked on experimental prototypes, including 2D animation sprites and procedural mesh generation. I also leveraged shaders for 2D games to address issues related to memory management, device display FPS performance, and graphics/UI animation.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2015 - 2016",
//     logo: {
//       id: 1,
//       src: '/arthisoft.png',
//       alt: 'Arthisoft Logo',
//       height: 40,
//       width: 40,
//       className: 'mr-7',
//     }
//   },
//   {
//     title: "Bachelor of Computer Science",
//     location: "Gujarat Technological University, IN",
//     description:'Relevant Courses: \n - Object-Oriented Programming \n - Database Systems \n - Web Development \n - Operating Systems',
//     projects : '\n - AR/VR based 3D Application',
//     icon: React.createElement(CgWorkAlt),
//     date: "2011 - 2014",
//     logo: {
//       id: 1,
//       src: '/uwindsor.svg',
//       alt: 'Uwindsor Logo',
//       height: 40,
//       width: 40,
//       className: 'mr-[5px]',
//     }
//   },
// ];

export const projectsData = [
  {
    title: "Employee Management System",
    description:
      "Created Full stack Web application for managing Employees using React, Redux, TypeScript, Java, Spring Boot, MySQL.",
    tags: ["React", "Redux Toolkit", "TypeScript", "Java", "Spring Boot", "MySQL"],
    githubLink:"https://github.com/ankitsenjaliya/Employee-Management-System"
  },
  {
    title: "Exercise Tracker App",
    description:
      "Implemented Full stack Web application to track everyday Exercises",
    tags: ["React", "JavaScript", "Express.js", "NodeJS", "MongoDB", "BootStrap"],
    githubLink:"https://github.com/ankitsenjaliya/MERN-Stack-Exercise-Tracker"
  },
  {
    title: "Git Repository Analyzer",
    description:
      "Implemented Web applicaton to find a Git Respository Information and Analytics through Developer's Username. Implemented Using TypeScript, JavaScript, Node.js, Git API.",
    tags: ["TypeScript", "Angular", "Node.js", "GitHub API", "HTML"],
    githubLink:"https://github.com/ankitsenjaliya/Git-Repository-Info"
  },
  {
    title: "Finance Tracker",
    description:
      "Developed Web Application to keep track of financial transaction history such as split, spend, borrow money using an HTML/CSS, Javascript, Bootstrap and NodeJS",
    tags: ["JavaSript", "Express.js", "Node.js", "MySQL", "BootStrap", "HTML", "CSS"],
    githubLink:"https://github.com/ankitsenjaliya/Finance-Tracker"
  },
  {
    title: "Reality Trader",
    description:
      "Implemented E-Commerce Web application for real estate business.",
    tags: ["JavaScript", "python", "Django", "BootStrap", "HTML", "CSS"],
    githubLink:"https://github.com/ankitsenjaliya/Reality-Trader"
  },
  {
    title: "Web Search Engine",
    description:
      "Created a search engine with functionalities such as counting the frequency of words using Boyer Moore Algorithm, web page ranking using Quicksort Algorithm, spellchecking and suggestion using Edit Distance and HTML to TEXT converter using Jsoup converter",
    tags: ["Java", "HTML", "JavaScript", "BootStrap", "JSON"],
    githubLink:"https://github.com/ankitsenjaliya/Search-Engine-Java"
  },
  {
    title: "2D-3D Animation Library",
    description:
      "Implemented & Published Animation library using C#, It gives a flexibility to developer to perform object's positioning, scalling, rotation and color animation by giving source vector and target.",
    tags: ["C#", "OpenGL", "Unity"],
    githubLink:"https://github.com/ankitsenjaliya/2D-3D-Animation-Library"
  },
  {
    title: "Seat Matrix Verification",
    description:
      "Developed an android application which primary interact with RF module enabled microcontroller to know exact available seats in any transportation vehicle.",
    tags: ["Java", "Java Embedded", "Arduino", "NetBeans", "Stm32 Microcontroller"],
    githubLink:"https://github.com/ankitsenjaliya/Seat_Matrix_Verification"
  },
  {
    title: "Space Shooter VR-Game",
    description:
      "Secured the 2nd Prize for developing a 3D VR space shooter game.",
    tags: ["Unity", "JavaScript", "Blender", "Photoshop", "Oculus VR"],
    githubLink:"https://github.com/ankitsenjaliya/Summer-Skater-2D-project"
  },
  {
    title: "Augmented Reality Prototype",
    description:
      "Developed various genres (AR, VR, Games, 3D Models) projects and experimental prototypes in recreational time",
    tags: ["Unity", "C#", "AR Vuforia", "Blender", "Photoshop"],
    githubLink:"https://github.com/ankitsenjaliya/AR-Prototype"
  },
  {
    title: "Summer Skater",
    description:
      "Coded and Designed 2D Player Mechanics, Enemies Behaviours, Overworld Systems, GUI & Menu Systems and Visual Effects. Coded 2D physics engine utilizing kinematics, friction and collision response.",
    tags: ["Unity", "C#", "Blender", "Photoshop", "Sprite Animation", "Unity Audio Mixer"],
    githubLink:"https://github.com/ankitsenjaliya/Summer-Skater-2D-project"
  },
  {
    title: "Portfolio Website",
    description:
      "Implemented and Hosted first portfolio website on Heroku.",
    tags: ["python", "Django", "Heroku", "HTML", "BootStrap"],
    githubLink:"https://github.com/ankitsenjaliya/Portfolio-Website-Python"
  },
  {
    title: "Socket Shell",
    description:
      "Developed a remote shell by implementing server-client socket-based programming in C language using TCP/IP protocol that performed on two different machine.",
    tags: ["C", "Ubuntu", "VM"],
    githubLink:"https://github.com/ankitsenjaliya/Server-Client-Socket-based-Shell"
  },
  
] as const;