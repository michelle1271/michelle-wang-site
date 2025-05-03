import React, {useEffect} from 'react';
import './projects.css';
import ProjectCard from '../../components/projects/ProjectCard';
import projectsData from '../../data/projectsData';
import Footer from '../../components/footer/footer';

const Projects = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  
  return (
    <div className='projects'>
      <h1>projects</h1>
      <a className="portfolio" href="https://www.canva.com/design/DAGPABePpTA/RFmuRpGn0cg0NDGWeidxwQ/view?utm_content=DAGPABePpTA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1af3fd9f0" target="_blank" rel="noopener noreferrer"><h2>click each panel or view my complete portfolio here</h2></a>
      <div className="projects-page">
      <div className="projects-grid">
        {projectsData.map((projectData) => (
          <ProjectCard class
            key={projectData.id} {...projectData} 
          />
        ))}
      </div>
    </div>

    <Footer/>
    </div>
  );
};

export default Projects;
