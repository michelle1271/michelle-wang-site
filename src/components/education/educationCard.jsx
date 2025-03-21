import React from "react";
import "./educationCard.css";

const EducationCard = ({ data }) => {
    return (
      <div className="education-container">
        {data.map((item) => (
          <div key={item.id} className="education-card">
            <div className="education-banner">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} className="education-image" />
              </a>
              <div className="education-details">
                  <h2>{item.title}</h2>
                  <h4>{item.status}</h4>
                  <p>{item.date}</p>
              </div>
            </div>
            <ul className="description">
              {item.description.map((desc, index) => (
                <li key={index}><p>{desc}</p></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default EducationCard;