import React from 'react';
import './style.css';

const Hero = (props) => (
      <div>
      <div id="hero">
        <img className="img-fluid" src={props.heroimg} alt={"hero"}/>
        {/* <span className="hero-msg-1">Full Stack Web Developer / Programmer Analyst</span> */}
      </div>   
      </div>
    )

export default Hero;