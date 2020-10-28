import React from 'react';
import './style.css';
import '../app.css';

const Experience = (props) => (
  
      <div className="experience-box box-border d-inline-block">
        <p className="experience-title">{props.company} - {props.date}</p>
        <p className="experience-role">{props.role}</p>
        <ul className="experience-list">
          <li className="text-left">{props.bullet1}</li>
          <li className="text-left">{props.bullet2}</li>
          <li className="text-left">{props.bullet3}</li>
          <li className="text-left">{props.bullet4}</li>
        </ul>
      </div>   
    )

export default Experience;