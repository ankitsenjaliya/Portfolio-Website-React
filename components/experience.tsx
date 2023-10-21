"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { generateExperienceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import cibcLogo from '../public/uwindsor.jpg';

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  const getExperiencesData = generateExperienceData(theme);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {getExperiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem"
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.logo.src}
                  alt={item.logo.alt}
                  height={item.logo.height}
                  width={item.logo.width}
                  className={item.logo.className}
                />
                <div>
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                </div>
              </div>              
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 whitespace-pre-wrap">
                {item.description}
              </p>
              { item?.projects && (
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 whitespace-pre-wrap">
                  Research Project:{item?.projects}
                </p>
              )
              }
              
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
