import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Typing.css';

const TypeEffect = () => {
    return (
        <section className="type-effect">
            <TypeAnimation
            sequence={['engineering student @ uwaterloo', 500, 'puzzle enthusiast', 500, 'nature buff', 500, 'aspiring product designer', 500]}
            speed={10}
            repeat={Infinity}
          />  
        </section>
    );
  };
  
  export default TypeEffect;