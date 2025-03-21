import React, { useEffect, useState, useRef } from "react";
import ExperienceCard from "../../components/experience/experienceCard";
import experienceData from "../../data/experiencesData";
import EducationCard from "../../components/education/educationCard";
import educationData from "../../data/educationData";
import Footer from "../../components/footer/footer";
import FadeInSection from "../../components/scroll/FadeInSection";
import MichelleResume from "../../assets/michelle-wang-resume.pdf";
import "./resume.css";

const Resume = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "C++", "SolidWorks", "AutoCAD", "Figma", "Microsoft Office"];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="title">resume</h1>
      <a href={MichelleResume} target="_blank" rel="noopener noreferrer" className="resume-pdf"><h2>download my resume</h2></a>

      <FadeInSection>
        <div className="experience">
          <h3 className="subtitle">experience</h3>
          <div><ExperienceCard data={experienceData} /></div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="education">
          <h3 className="subtitle"> education</h3>
          <div><EducationCard data={educationData}/></div>
        </div>
      </FadeInSection>


        <div className="skills">
            <h3 className="subtitle">skills</h3>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <FadeInSection><h4 key={index} className="skill">{skill}</h4></FadeInSection>
              ))}
            </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Resume;
