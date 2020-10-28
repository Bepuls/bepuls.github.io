import React from 'react';
import './style.css';

const Skill = (props) => (
      <div className="skill-box d-inline-block">
        <img className="img-fluid skill-img" src={process.env.PUBLIC_URL + props.skill} alt={props.skillName}></img>
        <p className="skill-name">{props.skillName}</p>
      </div>   
    )

export default Skill;