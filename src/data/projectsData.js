import Udemy from '../assets/udemy.png';
import Wardrobe from '../assets/wardrobe.png';
import Bridge from '../assets/bridge.png';
import FlappyBird from '../assets/flappy-bird.png';
import Bloom from '../assets/bloom.png';
import StampExplore from '../assets/stamp-explore.png';
import Anova from '../assets/anova.png';
import Solidworks from '../assets/solidworks.png';
import PDS from '../assets/bloom-pds-2025.pdf';
import Stamp from '../assets/stamp-explore.pdf';
import Mosaic from '../assets/anova-mosaic-2025.pdf';



const projectsData = [
    {
      id: 1,
      link: PDS,
      title: "Bloom",
      description: "A social platform designed to help seniors combat loneliness. Prioritized accessibility, safety, and ease of use to empower seniors to stay connected, engaged, and socially active in their communities. Presented at the Western Product Design Spring and awarded Best Beginner Design.",
      image: Bloom,
      tags: ["Figma", "Product Thinking", "Visual Design"],
    },
    {
      id: 2,
      link: Stamp,
      title: "StampExplore",
      description: "Learned several aspects of web development through online videos, code-alongs, and mini projects, from HTML/CSS to JavaScript and React. Taught the importance of responsive designs and the use of framework tools such as Bulma.",
      image: StampExplore,
      tags: ["Figma", "Product Thinking", "Visual Design"],
    },
    {
      id: 3,
      link: "https://github.com/michelle1271/Udemy-Web-Developer-Bootcamp-Coursework.git",
      title: "Udemy: The Web Developer Bootcamp",
      description: "Covered the fundamentals of web development through online videos and code-alongs, from HTML/CSS to JavaScript and React. Taught the importance of responsive designs and the use of framework tools such as Bulma.",
      image: Udemy,
      tags: ["HTML/CSS", "JavaScript", "React", "Web Development"],
    },
    {
      id: 4,
      link: "",
      title: "The Mystery Machine 3D Model",
      description: "Solidworks 3D model of Scooby Doo's Mystery Machine. Practicing 3D modeling and moving components (ex. functional doors made with hinges, steering wheel, wheels and axels etc).",
      image: Solidworks,
      tags: ["SolidWorks", "3D Modeling", "CAD"],
    },
    {
      id: 5,
      link: Mosaic,
      title: "Anova",
      description: "An all-in-one workplace application designed to enhance communication, coordination, and consistency for hybrid and remote teams. Key features to address concerns of hybrid work, difficult onboarding, and communication. Presented at Waterloo’s GBDA design-a-thon Mosaic.",
      image: Anova,
      tags: ["Figma", "Product Thinking", "Visual Design"],
    },
    {
      id: 6,
      link: "",
      title: "Flappy Bird",
      description: "A space-themed model of FlappyBird. Made with interactive components to control the movement of FlappyBird, obstacles, and backdrops. Created and designed all the pixelated objects and backdrop. ",
      image: FlappyBird,
      tags: ["Figma", "Interactive Components", "Graphic Design"],
    },
    {
      id: 7,
      link: "",
      title: "Wardrobe Visualizer",
      description: "As someone who prefers to online shop but wants to try on the clothes to see what it would look like, the Wardrobe Visualizer helps me 'try on' the clothes, and mix & match it with other articles of clothing either from my closet, or other online products.",
      image: Wardrobe,
      tags: ["Figma", "Component Properties"],
    },
    {
      id: 8,
      link: "",
      title: "Bridge 3D Model",
      description: "Designed on AutoCAD to practice 3D modeling, and later built using popsicle sticks and wood glue. The bridge is designed to hold and held over 100 pounds without breaking.",
      image: Bridge,
      tags: ["AutoCAD", "3D Modeling", "CAD"],
    },
  ];
  
  export default projectsData;