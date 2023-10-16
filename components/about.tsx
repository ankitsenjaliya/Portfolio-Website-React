"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a passionate full-stack developer, I thrive on the thrill of constantly exploring and integrating 
        cutting-edge technologies into my projects. With more than 7 years of experience in the industry, 
        I've honed my skills in a wide range of tech stacks, allowing me to create dynamic and innovative 
        web applications & software.
      </p>

      <p>
        With expertise in 
        <span className="font-medium"> React, TypeScript, JavaScript, Java, Spring Boot, and Node.js, </span>
        I specialize in crafting robust web applications, On the back end, I leverage 
        <span className="font-medium"> Java, Spring Boot, and Node.js,</span>
        for scalable, high-performance solutions. 
        TypeScript ensures type-safe development, guaranteeing reliable and error-free code. 
        I excel in data management, designing efficient models and ensuring data integrity. 
        Collaborative by nature, I thrive in cross-functional teams with a focus on open communication. 
        Committed to continuous learning, I stay updated with industry best practices. 
        Ready to integrate cutting-edge technology, I'm poised to elevate your projects to new heights.
        </p>

    </motion.section>
  );
}
