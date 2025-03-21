import React, {useEffect} from 'react';
import './Hero.css';
import TypeEffect from '../../components/typing/Typing';
import MyIcon from '../../components/logos/Logo';
import myImage from '../../assets/pfp.jpg';
import FadeInSection from "../../components/scroll/FadeInSection";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <FadeInSection>
      <section className="home">
        <div className="home-content">
            <h3>hey there! i'm</h3>
            <h1>michelle wang</h1>
            <h3 className='typing'><TypeEffect /></h3>
            <div className='logos'>
              <MyIcon />
            </div>
        </div>

        <div id="headshot">
          <img src={myImage} className="profile-img" alt="Profile" />
        </div>


      </section>
    </FadeInSection>
  );
};

export default Hero;