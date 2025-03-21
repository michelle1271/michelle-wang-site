import React from "react";
import "./ProjectCard.css";
import FadeInSection from "../../components/scroll/FadeInSection";

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <FadeInSection>
        {image && <img src={image} alt={title} className="project-image" />}
        <h3>{title}</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{description}</p>
      </FadeInSection>
    </a>
  );
};

export default ProjectCard;