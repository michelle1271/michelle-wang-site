import React from "react";
import "./experienceCard.css";

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-container">
      {data.map((item) => (
        <div key={item.id} className="experience-card">
          <div className="experience-banner">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} className="experience-image" />
              </a>
            <div className="experience-details">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.date}</p>
            </div>
          </div>
            <ul className='description'>
              {item.description.map((desc, index) => (
                <li key={index}><p>{desc}</p></li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;