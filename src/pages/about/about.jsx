import React, {useEffect} from 'react';
import myImage from '../../assets/about-me.jpg';
import './about.css';
import Footer from '../../components/footer/footer';
import Travel from '../../assets/travel.jpg';
import Hiking from '../../assets/hiking.jpg';
import Arts from '../../assets/arts.jpg';
import Swimming from '../../assets/swimming.jpg';
import Puzzle from '../../assets/puzzle.jpg';
import Quality from '../../assets/quality-time.jpg';
import FadeInSection from "../../components/scroll/FadeInSection";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <div className='first-page'>
      <h1 className='about-title'>about me</h1>
      <FadeInSection> 
      <div className='about-me-banner'>
        <img src={myImage} className='headshot'/>
        <div className='text'>
          <h2>hi there, i'm michelle ᵕ̈</h2>
          <p>I'm currently a Systems Design Engineering student @ UWaterloo with a passion for creativity and problem solving.  
          <span className="line-break"></span> I'm eager to build a technical and social understanding of the world and apply my knowledge to create modern, real-world solutions - and I'm always looking to learn!
          <span className="line-break"></span> Thanks for checking out my site, enjoy your visit! 
          </p>
        </div>
      </div>
      </FadeInSection>
      <a className='about-me-button' href="#hobbies"><h3 className='learn-more'>learn more</h3></a>
      </div>
      
      <div className='hobbies'>
        <div id='hobbies'>
          <h2>hobbies</h2>
          <p>More and more I'm realizing how important it is to take care of yourself by doing the things you love. <br/ > Here are a few things I love to do to ground myself and recharge when I get the chance:</p>
        </div>

        <div className='hobbies-all'>
          <div className='hobby'>
            <img src={Travel} className='hobby-image'/>
            <h3>travel ✈️</h3>
            <p>My travel bucket list is defintely a long one, and I've been very lucky to have the opportunity to experience different cultures, architectures and nature. At the top of my list I want to visit the Dolomites in Italy! </p>
          </div>

          <div className='hobby'>
            <img src={Hiking} className='hobby-image'/>
            <h3>hiking ⛰</h3>
            <p>I love a good hike and taking in the nature around me! My favourite hikes have been in Utah and Arizona, and I definitely hope for more in my future. Hiking is also when my film camera gets the most use :D</p>
          </div>

          <div className='hobby'>
            <img src={Arts} className='hobby-image'/>
            <h3>crocheting 🧶</h3>
            <p>I recently starting crocheting and I'm hooked! (pun unintended) I can sit very still for hours working on plushies for my friends, from a Miffy keychain, to a smiski. I'm currently working on a Snoopy keychain for my backpack!</p>
          </div>

          <div className='hobby'>
            <img src={Swimming} className='hobby-image'/>
            <h3>staying active 🏋️‍♀️</h3>
            <p>Health is wealth! I grew up swimming competitively, and later coached for my club. This year as a New Year's Resolution I also began going to the gym, which I've really been enjoying! (special feature from my dog Bruno)</p>
          </div>

          <div className='hobby'>
            <img src={Puzzle} className='hobby-image'/>
            <h3>puzzles 🧩</h3>
            <p>This pandemic hobby quickly became a favourite! I can sit for hours working on them without even noticing, and find that it's a great way to clear my mind. The one above is my 2nd 3000 piece (took lots of patience)!</p>
          </div>

          <div className='hobby'>
            <img src={Quality} className='hobby-image'/>
            <h3>quality time 👯‍♀️</h3>
            <p>I always look forward to spending time with loved ones, whether that be playing a board game, going to the gym, a fun outing, or just talking. I'm so lucky to be surrounded by good people that I love spending time with :)</p>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default About;
